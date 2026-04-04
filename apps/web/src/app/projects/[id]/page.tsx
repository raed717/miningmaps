"use client";

import dynamic from "next/dynamic";

const ProjectView = dynamic(() => import("./project-view"), { ssr: false });

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  return <ProjectView params={params} />;
}
