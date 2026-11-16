"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { ProjectPageData, ProjectSummary } from "@/lib/projectTypes";
import type { SampleMap } from "@/lib/sampleMapTypes";

// Filled per route by the server page ([[...slug]]/page.tsx) with only the data that route needs.
const ProjectDataContext = createContext<ProjectPageData>({});

export function ProjectDataProvider({ value, children }: { value: ProjectPageData; children: ReactNode }) {
  return <ProjectDataContext.Provider value={value}>{children}</ProjectDataContext.Provider>;
}

/** Project summaries for lists, the map and the dashboard. */
export function useProjectSummaries(): ProjectSummary[] {
  return useContext(ProjectDataContext).summaries ?? [];
}

/** The project on a detail page, plus its parent and sub-projects. */
export function useProjectDetail() {
  const { project, related } = useContext(ProjectDataContext);
  return { project, related: related ?? [] };
}

/** The /sample-maps cards, in the page's language. */
export function useSampleMaps(): SampleMap[] {
  return useContext(ProjectDataContext).sampleMaps ?? [];
}

/** The home page carousel's projects and the total project count. */
export function useHomePreview() {
  return useContext(ProjectDataContext).homePreview ?? { projects: [], totalCount: 0 };
}
