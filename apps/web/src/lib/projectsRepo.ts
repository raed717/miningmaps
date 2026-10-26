// Server-only: reads projects from Neon. Never import this from a "use client" file.
import { cache } from "react";
import { neon } from "@neondatabase/serverless";
import type { Project, ProjectSection, ProjectSummary, QuickFact } from "@/lib/projectTypes";

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
};

/** Empty arrays become undefined, matching projectData.ts where those fields are simply absent. */
function optionalList<T>(list: T[] | null): T[] | undefined {
  return list && list.length > 0 ? list : undefined;
}

// Map DB nulls to the optional (undefined) fields the Project type expects.
function rowToProject(row: ProjectRow): Project {
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

/** All projects in display order. Cached per request (generateMetadata + page share it). */
export const getProjects = cache(async (): Promise<Project[]> => {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) throw new Error("DATABASE_URL is not set");
  const sql = neon(databaseUrl);
  const rows = (await sql`
    SELECT id, type, title, summary, region, image, latitude, longitude, is_for_sale,
           date, author, contact_email, parent_project_id, tags, sub_project_ids,
           quick_facts, sections
    FROM projects
    ORDER BY sort_order NULLS LAST, created_at, id
  `) as ProjectRow[];
  return rows.map(rowToProject);
});

/** Lightweight id + last-modified list for the projects sitemap. */
export async function getProjectSitemapEntries(): Promise<{ id: string; updatedAt: Date }[]> {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) throw new Error("DATABASE_URL is not set");
  const rows = await neon(databaseUrl)`
    SELECT id, updated_at FROM projects ORDER BY sort_order NULLS LAST, created_at, id
  `;
  return rows.map((r) => ({ id: r.id as string, updatedAt: new Date(r.updated_at as string) }));
}

export async function getProjectSummaries(): Promise<ProjectSummary[]> {
  return (await getProjects()).map(toSummary);
}

export async function getProject(id: string): Promise<Project | undefined> {
  return (await getProjects()).find((p) => p.id === id);
}
