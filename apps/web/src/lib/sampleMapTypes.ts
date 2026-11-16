// Shared (client + server) types for the /sample-maps page. Rows come from the Neon `sample_maps`
// table (migrations/017_sample_maps.sql) via src/lib/sampleMapsRepo.ts.

/** Map categories, in the order the page lists them. Keep in sync with the CHECK constraint in 017_sample_maps.sql. */
export const SAMPLE_MAP_TYPES = [
  "claim-tenure",
  "land-title",
  "permit",
  "geology",
  "dem-lidar",
  "spectral",
  "3d-model",
  "survey",
  "other",
] as const;

export type SampleMapType = (typeof SAMPLE_MAP_TYPES)[number];

export function isSampleMapType(value: unknown): value is SampleMapType {
  return typeof value === "string" && (SAMPLE_MAP_TYPES as readonly string[]).includes(value);
}

/** One map card, already in the page's language. */
export type SampleMap = {
  id: string;
  title: string;
  description?: string;
  mapType: SampleMapType;
  region?: string;
  /** Card thumbnail (small, optimized). */
  thumbnailUrl: string;
  /** What the full-size viewer shows (original image, or page 1 of a PDF rendered large). */
  fullSizeUrl: string;
  /** Original file to open in a new tab (PDF etc.), if any. */
  fileUrl?: string;
  /** "pdf", "tif"... when fileUrl is set; used for the button label. */
  fileType?: string;
  linkUrl?: string;
  linkLabel?: string;
  projectId?: string;
  isFeatured: boolean;
};
