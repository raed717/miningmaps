"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const DashboardView = dynamic(() => import("./dashboard-view"), { ssr: false });

export default function DashboardPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-full w-full bg-background" />;
  }

  return <DashboardView />;
}
