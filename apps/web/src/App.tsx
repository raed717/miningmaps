"use client";

import { useEffect, useMemo } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next";

const HomePage = dynamic(() => import("@/views/home-page"));
const AboutPage = dynamic(() => import("@/views/about-page"));
const ServicesPage = dynamic(() => import("@/views/services-page"));
const ContactPage = dynamic(() => import("@/views/contact-page"));
const ProjectsPage = dynamic(() => import("@/views/projects-page"));
const PostsPage = dynamic(() => import("@/views/posts-page"));
const PostDetailPage = dynamic(() => import("@/views/post-detail-page"));
const NotFoundPage = dynamic(() => import("@/views/not-found-page"));
const MapView = dynamic(() => import("@/app/map/map-view"));
const DashboardView = dynamic(() => import("@/app/dashboard/dashboard-view"));
const ProjectView = dynamic(() => import("@/app/projects/[id]/project-view"));
const OtherProjectsPage = dynamic(() => import("@/views/other-projects-page"));
const PartnersPage = dynamic(() => import("@/views/partners-page"));

function decodeSegment(segment: string) {
  try {
    return decodeURIComponent(segment);
  } catch {
    return segment;
  }
}

export default function App() {
  const pathname = usePathname() ?? "/";

  const normalizedPathname = useMemo(() => {
    if (pathname === "/") {
      return pathname;
    }

    return pathname.replace(/\/+$/, "") || "/";
  }, [pathname]);

  useEffect(() => {
    const hash = window.location.hash.slice(1);

    if (!hash) {
      window.scrollTo({ top: 0, left: 0 });
      return;
    }

    const targetId = decodeSegment(hash);
    const target = document.getElementById(targetId);

    if (target) {
      target.scrollIntoView();
      return;
    }

    const timeout = window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView();
    }, 50);

    return () => window.clearTimeout(timeout);
  }, [normalizedPathname]);

  const segments = normalizedPathname
    .split("/")
    .filter(Boolean)
    .map(decodeSegment);

  let content = <NotFoundPage path={normalizedPathname} />;

  if (normalizedPathname === "/") {
    content = <HomePage />;
  } else if (normalizedPathname === "/about") {
    content = <AboutPage />;
  } else if (normalizedPathname === "/services") {
    content = <ServicesPage />;
  } else if (normalizedPathname === "/contact") {
    content = <ContactPage />;
  } else if (normalizedPathname === "/map") {
    content = <MapView />;
  } else if (normalizedPathname === "/dashboard") {
    content = <DashboardView />;
  } else if (normalizedPathname === "/projects") {
    content = <ProjectsPage />;
  } else if (normalizedPathname === "/properties") {
    content = <ProjectsPage showOnlyForSale />;
  } else if (normalizedPathname === "/other-projects") {
    content = <OtherProjectsPage />;
  } else if (normalizedPathname === "/partners") {
    content = <PartnersPage />;
  } else if (normalizedPathname === "/post" || normalizedPathname === "/posts") {
    content = <PostsPage />;
  } else if (segments[0] === "projects" && segments.length === 2) {
    content = <ProjectView projectId={segments[1]} />;
  } else if (
    (segments[0] === "post" || segments[0] === "posts") &&
    segments.length === 2
  ) {
    content = <PostDetailPage postId={segments[1]} />;
  }

  return (
    <div className="grid min-h-svh grid-rows-[auto_1fr]">
      <Header />
      <Analytics />
      <div className="h-full min-h-0 flex flex-col">{content}</div>
      <Toaster richColors />
    </div>
  );
}
