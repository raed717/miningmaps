// Server-only: reads the /sample-maps cards from the Neon `sample_maps` table
// (migrations/017_sample_maps.sql). Never import this from a "use client" file.
import { cache } from "react";
import { neon } from "@neondatabase/serverless";
import type { Locale } from "@/lib/i18n/types";
import { cloudinaryImage, fileExtension, isPdfUrl } from "@/lib/cloudinary";
import { isSampleMapType, type SampleMap } from "@/lib/sampleMapTypes";

const THUMBNAIL_WIDTH = 900;
const FULL_SIZE_WIDTH = 3000;

type SampleMapTranslation = {
  title?: string;
  description?: string;
  region?: string;
  link_label?: string;
};

type SampleMapRow = {
  id: string;
  title: string;
  description: string | null;
  map_type: string;
  region: string | null;
  image_url: string;
  file_url: string | null;
  link_url: string | null;
  link_label: string | null;
  project_id: string | null;
  is_featured: boolean;
  pdf_page: number | null;
  translations: Partial<Record<Locale, SampleMapTranslation>> | null;
};

/** Translated string when present and non-empty, otherwise the English one. */
function pick(english: string | null, translated: unknown): string | undefined {
  if (typeof translated === "string" && translated.trim()) return translated;
  return english ?? undefined;
}

function rowToSampleMap(row: SampleMapRow, locale: Locale): SampleMap | null {
  const t = locale === "en" ? undefined : row.translations?.[locale];
  const imageUrl = row.image_url.trim();
  const page = row.pdf_page ?? 1;
  const thumbnailUrl = cloudinaryImage(imageUrl, THUMBNAIL_WIDTH, page);
  const fullSizeUrl = cloudinaryImage(imageUrl, FULL_SIZE_WIDTH, page);
  if (!thumbnailUrl || !fullSizeUrl) {
    console.warn(`sample_maps.${row.id}: image_url can't be displayed (a PDF must be hosted on Cloudinary)`);
    return null;
  }
  // The original to open in a new tab: an explicit file_url, or the PDF itself.
  const fileUrl = row.file_url?.trim() || (isPdfUrl(imageUrl) ? imageUrl : undefined);

  return {
    id: row.id,
    title: pick(row.title, t?.title) ?? row.id,
    description: pick(row.description, t?.description),
    mapType: isSampleMapType(row.map_type) ? row.map_type : "other",
    region: pick(row.region, t?.region),
    thumbnailUrl,
    fullSizeUrl,
    fileUrl,
    fileType: fileUrl ? fileExtension(fileUrl) || undefined : undefined,
    linkUrl: row.link_url ?? undefined,
    linkLabel: pick(row.link_label, t?.link_label),
    projectId: row.project_id ?? undefined,
    isFeatured: row.is_featured,
  };
}

const getSampleMapRows = cache(async (): Promise<SampleMapRow[]> => {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) throw new Error("DATABASE_URL is not set");
  try {
    return (await neon(databaseUrl)`
      SELECT id, title, description, map_type, region, image_url, file_url, link_url, link_label,
             project_id, is_featured, translations,
             -- Read through to_jsonb so the query still works before migration 023 adds the column.
             (to_jsonb(sample_maps) ->> 'pdf_page')::int AS pdf_page
      FROM sample_maps
      WHERE is_published
      ORDER BY sort_order NULLS LAST, created_at DESC, id
    `) as SampleMapRow[];
  } catch (err) {
    // 42P01 = table doesn't exist yet (run migrations/017_sample_maps.sql): show the empty state.
    if ((err as { code?: string }).code === "42P01") {
      console.warn("sample_maps table not found; run migrations/017_sample_maps.sql");
      return [];
    }
    throw err;
  }
});

/** Published sample maps in display order, in the given language (English where untranslated). */
export async function getSampleMaps(locale: Locale = "en"): Promise<SampleMap[]> {
  return (await getSampleMapRows())
    .map((row) => rowToSampleMap(row, locale))
    .filter((map): map is SampleMap => map !== null);
}
