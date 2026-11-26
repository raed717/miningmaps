"use client";

import App from "../../App";
import { ProjectDataProvider } from "@/lib/projectDataContext";
import type { ProjectPageData } from "@/lib/projectTypes";

export default function ClientPage({ data }: { data: ProjectPageData }) {
  return (
    <ProjectDataProvider value={data}>
      <App />
    </ProjectDataProvider>
  );
}
