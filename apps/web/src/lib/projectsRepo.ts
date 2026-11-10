// Server-only: reads projects from Neon. Never import this from a "use client" file.
import { cache } from "react";
import { neon } from "@neondatabase/serverless";
import type { Project, ProjectSection, ProjectSummary, QuickFact } from "@/lib/projectTypes";
import type { Locale } from "@/lib/i18n/types";
import { projects as fallbackProjects } from "./projectData";

type ProjectRow = {
  id: string;
  type: string | null;
  title: string;
  summary: string | null;
  region: string | null;
  image: string | null;
  latitude: number | null;
  longitude: number | null;
  is_for_sale: boolean;
  date: string | null;
  author: string | null;
  contact_email: string | null;
  parent_project_id: string | null;
  tags: string[] | null;
  sub_project_ids: string[] | null;
  quick_facts: QuickFact[] | null;
  sections: ProjectSection[] | null;
  translations: ProjectTranslations | null;
};

/**
 * Per-locale overrides stored in projects.translations, e.g. { "fr": { title, summary, region, tags,
 * quick_facts, sections } }. quick_facts and sections are matched by index to the English arrays;
 * a null entry (or a missing / empty-string field) keeps the English value. tags replace the list.
 */
type ProjectTranslation = {
  title?: string;
  summary?: string;
  region?: string;
  date?: string;
  tags?: string[];
  quick_facts?: (Partial<QuickFact> | null)[];
  quickFacts?: (Partial<QuickFact> | null)[];
  sections?: (Record<string, unknown> | null)[];
};
type ProjectTranslations = Partial<Record<Locale, ProjectTranslation>>;

/** Project as loaded from the DB, with every language. Never sent to the client as-is. */
type StoredProject = Project & { translations?: ProjectTranslations };

/** Empty arrays become undefined, matching projectData.ts where those fields are simply absent. */
function optionalList<T>(list: T[] | null): T[] | undefined {
  return list && list.length > 0 ? list : undefined;
}

// Map DB nulls to the optional (undefined) fields the Project type expects.
function rowToProject(row: ProjectRow): StoredProject {
  return {
    id: row.id,
    type: row.type === "subproject" ? "subproject" : "project",
    title: row.title,
    summary: row.summary ?? "",
    region: row.region ?? "",
    image: row.image ?? "",
    coordinates: [row.latitude ?? 0, row.longitude ?? 0],
    sections: row.sections ?? [],
    isForSale: row.is_for_sale,
    quickFacts: optionalList(row.quick_facts),
    date: row.date ?? undefined,
    author: row.author ?? undefined,
    contactEmail: row.contact_email ?? undefined,
    tags: optionalList(row.tags),
    parentProjectId: row.parent_project_id ?? undefined,
    subProjectIds: optionalList(row.sub_project_ids),
    translations: row.translations ?? undefined,
  };
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/**
 * Overlays a translation onto the English value: objects merge key by key, arrays by index
 * (keeping the English length), and null / undefined / "" keep the English value.
 * A section's `type` is never overridden.
 */
function overlay<T>(base: T, translated: unknown): T {
  if (translated === null || translated === undefined || translated === "") return base;
  if (Array.isArray(base)) {
    if (!Array.isArray(translated)) return base;
    return base.map((item, i) => overlay(item, translated[i])) as T;
  }
  if (isPlainObject(base)) {
    if (!isPlainObject(translated)) return base;
    const merged: Record<string, unknown> = { ...base };
    for (const [key, value] of Object.entries(translated)) {
      if (key === "type") continue;
      merged[key] = key in base ? overlay(base[key], value) : value;
    }
    return merged as T;
  }
  if (base === undefined || base === null) return translated as T;
  return typeof translated === typeof base ? (translated as T) : base;
}

/** The project in the requested language (English fields where no translation exists), without the translations blob. */
function localizeProject({ translations, ...project }: StoredProject, locale: Locale): Project {
  const t = locale === "en" ? undefined : translations?.[locale];
  if (!t) return project;
  return {
    ...project,
    title: overlay(project.title, t.title),
    summary: overlay(project.summary, t.summary),
    region: overlay(project.region, t.region),
    date: overlay(project.date, t.date),
    tags: Array.isArray(t.tags) && t.tags.length > 0 ? t.tags : project.tags,
    // Filters use English tag names; keep them when the displayed tags are translated.
    tagKeys: Array.isArray(t.tags) && t.tags.length > 0 ? project.tags : undefined,
    quickFacts: project.quickFacts && overlay(project.quickFacts, t.quick_facts ?? t.quickFacts),
    sections: overlay(project.sections, t.sections),
  };
}

export function toSummary({ sections, ...rest }: Project): ProjectSummary {
  for (const section of sections) {
    if ("image" in section && typeof section.image === "string" && section.image) {
      return { ...rest, previewImage: section.image };
    }
  }
  return { ...rest, previewImage: rest.image };
}

let lastSuccessfulProjects: StoredProject[] | null = null;

/** All projects in display order, with every language. Cached per request (generateMetadata + page share it). */
const getStoredProjects = cache(async (): Promise<StoredProject[]> => {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) throw new Error("DATABASE_URL is not set");
  const sql = neon(databaseUrl);
  let attempts = 0;
  while (true) {
    try {
      attempts++;
      const rows = (await sql`
        SELECT id, type, title, summary, region, image, latitude, longitude, is_for_sale,
               date, author, contact_email, parent_project_id, tags, sub_project_ids,
               quick_facts, sections, translations
        FROM projects
        ORDER BY sort_order NULLS LAST, created_at, id
      `) as ProjectRow[];
      const res = rows.map(rowToProject);
      lastSuccessfulProjects = res;
      return res;
    } catch (err) {
      if (attempts >= 3) {
        if (lastSuccessfulProjects) {
          console.warn("Neon connection failed after 3 attempts, using last cached projects", err);
          return lastSuccessfulProjects;
        }
        console.warn("Neon connection failed after 3 attempts, using local fallback projects", err);
        return fallbackProjects as unknown as StoredProject[];
      }
      await new Promise((r) => setTimeout(r, 400 * attempts));
    }
  }
});

/** Lightweight id + last-modified list for the projects sitemap. */
export async function getProjectSitemapEntries(): Promise<{ id: string; updatedAt: Date }[]> {
  try {
    const databaseUrl = process.env.DATABASE_URL;
    if (!databaseUrl) throw new Error("DATABASE_URL is not set");
    const rows = await neon(databaseUrl)`
      SELECT id, updated_at FROM projects ORDER BY sort_order NULLS LAST, created_at, id
    `;
    return rows.map((r) => ({ id: r.id as string, updatedAt: new Date(r.updated_at as string) }));
  } catch (err) {
    console.warn("Failed to fetch sitemap entries from Neon, using fallback", err);
    return fallbackProjects.map((p) => ({ id: p.id, updatedAt: new Date() }));
  }
}

/** All projects in display order, in the given language (English where untranslated). */
export async function getProjects(locale: Locale = "en"): Promise<Project[]> {
  return (await getStoredProjects()).map((p) => localizeProject(p, locale));
}

export async function getProjectSummaries(locale: Locale = "en"): Promise<ProjectSummary[]> {
  return (await getProjects(locale)).map(toSummary);
}

export async function getProject(id: string, locale: Locale = "en"): Promise<Project | undefined> {
  const project = (await getStoredProjects()).find((p) => p.id === id);
  return project && localizeProject(project, locale);
}
