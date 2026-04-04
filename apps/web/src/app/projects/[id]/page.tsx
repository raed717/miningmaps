"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ProjectView = dynamic(() => import("./project-view"), { ssr: false });

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-full w-full bg-background" />;
  }

  return <ProjectView params={params} />;
}
