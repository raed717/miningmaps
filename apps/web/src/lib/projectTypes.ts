// Project types for the app. Type-only re-exports: projectData.ts is kept as a
// backup/draft and its data is never bundled (projects are loaded from Neon).
import type { Project } from "@/lib/projectData";

export type {
  Project,
  ProjectSection,
  QuickFact,
  GalleryType,
  LinkPreview,
  VideoLink,
  KuulaFrame,
} from "@/lib/projectData";

/** Everything except the heavy `sections`, for lists, cards, the map and the dashboard. */
export type ProjectSummary = Omit<Project, "sections"> & {
  /** First section image, falling back to the cover image. */
  previewImage: string;
};

/** Per-route project data sent from the server page to the client app shell. */
export type ProjectPageData = {
  /** Lists, map, dashboard. */
  summaries?: ProjectSummary[];
  /** Project detail page. */
  project?: Project;
  /** Parent and sub-projects of `project`. */
  related?: ProjectSummary[];
  /** Home carousel: the first few top-level projects and the total count. */
  homePreview?: { projects: ProjectSummary[]; totalCount: number };
};
