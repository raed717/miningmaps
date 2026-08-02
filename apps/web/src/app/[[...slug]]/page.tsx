import "@fontsource-variable/inter";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/700.css";
import "../globals.css";
import "leaflet/dist/leaflet.css";
import "react-medium-image-zoom/dist/styles.css";
import type { Metadata } from "next";
import { mockPosts } from "@/lib/postData";
import { projects } from "@/lib/projectData";
import ClientPage from "./client";

const siteName = "Adamson Geomatics";

const pageMeta: Record<string, Metadata> = {
  "/about": {
    title: `About — ${siteName}`,
    description:
      "Chris Adamson is a Registered Inspector (R.I.) providing professional land management, GIS mapping, and geospatial services in British Columbia and beyond.",
  },
  "/services": {
    title: `Services — ${siteName}`,
    description:
      "GIS mapping, mineral claim staking, LiDAR surveys, Leapfrog 3D modelling, property boundary mapping, and mining property maps.",
  },
  "/contact": {
    title: `Contact — ${siteName}`,
    description:
      "Get in touch with Adamson Geomatics for quotes, proposals, land services, and mining property inquiries.",
  },
  "/projects": {
    title: `Projects — ${siteName}`,
    description:
      "Browse mineral exploration and mining property projects across Canada, USA, Australia, New Zealand, and Europe.",
  },
  "/properties": {
    title: `Properties for Sale — ${siteName}`,
    description:
      "Mining properties and mineral claims currently available for sale or seeking investment.",
  },
  "/map": {
    title: `Interactive Map — ${siteName}`,
    description:
      "Interactive map of mining properties, mineral claims, and exploration projects worldwide.",
  },
  "/other-projects": {
    title: `Mineral Claim Portfolio — ${siteName}`,
    description:
      "Complete inventory of mineral tenures across British Columbia — priority-ranked, commodity-tagged, with NTS mapsheet references and tenure details.",
  },
  "/dashboard": {
    title: `Dashboard — ${siteName}`,
    description:
      "Portfolio dashboard aggregating project statistics, commodities, and regional distribution.",
  },
  "/post": {
    title: `Posts — ${siteName}`,
    description:
      "Field reports, case studies, and technical articles from Adamson Geomatics.",
  },
  "/posts": {
    title: `Posts — ${siteName}`,
    description:
      "Field reports, case studies, and technical articles from Adamson Geomatics.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const path = slug ? `/${slug.join("/")}` : "/";
  const canonical = `https://miningpropertymaps.com${path === "/" ? "" : path}`;

  // Static pages
  if (pageMeta[path]) {
    return { ...pageMeta[path], alternates: { canonical } };
  }

  // Project detail pages: /projects/[id]
  const slugArray = slug ?? [];
  if (slugArray[0] === "projects" && slugArray[1]) {
    const project = projects.find((p) => p.id === slugArray[1]);
    if (project) {
      const location = project.region;
      const tags = project.tags?.join(", ") ?? "";
      return {
        title: `${project.title} — ${location} | ${siteName}`,
        description:
          project.summary ||
          `${project.title} in ${location}. ${tags ? `Commodities: ${tags}.` : ""}`,
        alternates: { canonical },
      };
    }
  }

  // Post detail pages: /post/[id] or /posts/[id]
  if ((slugArray[0] === "post" || slugArray[0] === "posts") && slugArray[1]) {
    const post = mockPosts.find((p) => p.id === slugArray[1]);
    if (post) {
      return {
        title: `${post.title} — ${siteName}`,
        description: post.summary || `Field report from Adamson Geomatics.`,
        alternates: { canonical },
      };
    }
  }

  // Fallback to home
  return {
    title: `${siteName} | Chris Adamson, R.I.`,
    description:
      "Professional land and geospatial services — GIS mapping, mineral claim staking, LiDAR, and geological modelling.",
    alternates: { canonical },
  };
}

export function generateStaticParams() {
  return [
    { slug: [""] },
    { slug: ["about"] },
    { slug: ["services"] },
    { slug: ["contact"] },
    { slug: ["projects"] },
    { slug: ["properties"] },
    { slug: ["map"] },
    { slug: ["dashboard"] },
    { slug: ["other-projects"] },
    { slug: ["post"] },
    { slug: ["posts"] },
    ...projects.map((project) => ({ slug: ["projects", project.id] })),
    ...mockPosts.flatMap((post) => [
      { slug: ["post", post.id] },
      { slug: ["posts", post.id] },
    ]),
  ];
}

export default function CatchAllPage() {
  return <ClientPage />;
}
