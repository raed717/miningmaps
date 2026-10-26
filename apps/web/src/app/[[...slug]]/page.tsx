import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { mockPosts } from "@/lib/postData";
import { getProject, getProjects, getProjectSummaries, toSummary } from "@/lib/projectsRepo";
import type { ProjectPageData } from "@/lib/projectTypes";
import ClientPage from "./client";

// Projects come from Neon. Pages are prerendered and regenerated in the background
// at most once an hour, so database edits go live without a redeploy.
export const revalidate = 3600;

const siteName = "Adamson Geomatics";

/** Single-segment routes the client app shell (App.tsx) renders. Keep in sync with App.tsx. */
const STATIC_PAGES = [
  "about",
  "services",
  "contact",
  "projects",
  "properties",
  "map",
  "dashboard",
  "other-projects",
  "partners",
  "post",
  "posts",
  "sign-up",
  "sign-in",
  "account",
  "community",
];

/** Whether a path has real content; anything else gets a true 404 (not a "not found" page with 200). */
async function routeExists(slugArray: string[]): Promise<boolean> {
  const [section, id] = slugArray;
  if (slugArray.length === 0) return true;
  if (slugArray.length === 1) return STATIC_PAGES.includes(section);
  if (slugArray.length === 2) {
    if (section === "projects") return !!(await getProject(id));
    if (section === "post" || section === "posts") return mockPosts.some((p) => p.id === id);
  }
  return false;
}

/** Only the project data this route renders, so pages don't ship the whole catalog. */
async function getPageData(slugArray: string[]): Promise<ProjectPageData> {
  const [section, id] = slugArray;

  if (section === "projects" && id) {
    const project = await getProject(id);
    if (!project) return {};
    const relatedIds = new Set([project.parentProjectId, ...(project.subProjectIds ?? [])]);
    const related = (await getProjects()).filter((p) => relatedIds.has(p.id)).map(toSummary);
    return { project, related };
  }

  if (
    slugArray.length === 1 &&
    (section === "projects" || section === "properties" || section === "map" || section === "dashboard")
  ) {
    return { summaries: await getProjectSummaries() };
  }

  if (slugArray.length === 0) {
    const topLevel = (await getProjectSummaries()).filter((p) => p.type !== "subproject");
    return { homePreview: { projects: topLevel.slice(0, 6), totalCount: topLevel.length } };
  }

  return {};
}

const pageMeta: Record<string, Metadata> = {
  "/sign-up": {
    title: `Create Account — ${siteName}`,
    robots: { index: false, follow: false },
  },
  "/sign-in": {
    title: `Sign In — ${siteName}`,
    robots: { index: false, follow: false },
  },
  "/account": {
    title: `Account — ${siteName}`,
    robots: { index: false, follow: false },
  },
  // Members-only "coming soon" page shown after sign-in.
  "/community": {
    title: `Community (Coming Soon) — ${siteName}`,
    robots: { index: false, follow: false },
  },
  "/about": {
    title: `About — ${siteName}`,
    description:
      "Chris Adamson is a Registered Inspector (R.I.) providing professional land management, GIS mapping, and geospatial services in British Columbia and beyond. Fully insured with CAD $2M professional and commercial liability.",
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
  "/partners": {
    title: `Partner & Referral Programs — ${siteName}`,
    description:
      "Affiliate and finder's fee programs — earn commission by referring new clients or connecting qualified buyers to our mining projects.",
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
  if (!(await routeExists(slug?.filter(Boolean) ?? []))) notFound();
  const path = slug ? `/${slug.join("/")}` : "/";
  const canonical = `https://www.miningpropertymaps.com${path === "/" ? "" : path}`;

  // Static pages
  if (pageMeta[path]) {
    return { ...pageMeta[path], alternates: { canonical } };
  }

  // Project detail pages: /projects/[id]
  const slugArray = slug ?? [];
  if (slugArray[0] === "projects" && slugArray[1]) {
    const project = await getProject(slugArray[1]);
    if (project) {
      const location = project.region;
      const tags = project.tags?.join(", ") ?? "";
      const ogImageUrl = project.image
        ? project.image.startsWith("http")
          ? project.image
          : `https://www.miningpropertymaps.com${project.image}`
        : "https://www.miningpropertymaps.com/opengraph-image.png";
      const metaTitle = `${project.title} — ${location} | ${siteName}`;
      const metaDescription =
        project.summary ||
        `${project.title} in ${location}. ${tags ? `Commodities: ${tags}.` : ""}`;

      return {
        title: metaTitle,
        description: metaDescription,
        alternates: { canonical },
        openGraph: {
          title: metaTitle,
          description: metaDescription,
          url: canonical,
          siteName,
          type: "website",
          images: [
            {
              url: ogImageUrl,
              width: 1200,
              height: 630,
              alt: project.title,
            },
          ],
        },
        twitter: {
          card: "summary_large_image",
          title: metaTitle,
          description: metaDescription,
          images: [ogImageUrl],
        },
      };
    }
  }

  // Post detail pages: /post/[id] or /posts/[id]
  if ((slugArray[0] === "post" || slugArray[0] === "posts") && slugArray[1]) {
    const post = mockPosts.find((p) => p.id === slugArray[1]);
    if (post) {
      const postTitle = `${post.title} — ${siteName}`;
      const postDescription = post.summary || `Field report from Adamson Geomatics.`;
      const postImage = post.previewImage
        ? post.previewImage.startsWith("http")
          ? post.previewImage
          : `https://www.miningpropertymaps.com${post.previewImage}`
        : "https://www.miningpropertymaps.com/opengraph-image.png";

      return {
        title: postTitle,
        description: postDescription,
        alternates: { canonical },
        openGraph: {
          title: postTitle,
          description: postDescription,
          url: canonical,
          siteName,
          type: "article",
          images: [
            {
              url: postImage,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ],
        },
        twitter: {
          card: "summary_large_image",
          title: postTitle,
          description: postDescription,
          images: [postImage],
        },
      };
    }
  }

  // Fallback to home
  return {
    title: `${siteName} | GIS & Mineral Claim Services in BC`,
    description:
      "Professional land and geospatial services — GIS mapping, mineral claim staking, LiDAR, and geological modelling.",
    alternates: { canonical },
  };
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return [
    { slug: [""] },
    ...STATIC_PAGES.map((page) => ({ slug: [page] })),
    ...projects.map((project) => ({ slug: ["projects", project.id] })),
    ...mockPosts.flatMap((post) => [
      { slug: ["post", post.id] },
      { slug: ["posts", post.id] },
    ]),
  ];
}

const pageLabels: Record<string, string> = {
  about: "About",
  services: "Services",
  contact: "Contact",
  projects: "Projects",
  properties: "Properties for Sale",
  map: "Interactive Map",
  "other-projects": "Mineral Claim Portfolio",
  partners: "Partner & Referral Programs",
  dashboard: "Dashboard",
  post: "Posts",
  posts: "Posts",
};

function buildBreadcrumbJsonLd(slugArray: string[], projectTitle?: string) {
  if (slugArray.length === 0) return null;

  const itemListElement = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.miningpropertymaps.com",
    },
  ];

  let pathSoFar = "";
  slugArray.forEach((segment, index) => {
    pathSoFar += `/${segment}`;
    const isLast = index === slugArray.length - 1;

    let name = pageLabels[segment];
    if (!name && isLast) {
      if (slugArray[0] === "projects" && index === 1) {
        name = projectTitle ?? segment;
      } else if ((slugArray[0] === "post" || slugArray[0] === "posts") && index === 1) {
        name = mockPosts.find((p) => p.id === segment)?.title ?? segment;
      }
    }

    itemListElement.push({
      "@type": "ListItem",
      position: index + 2,
      name: name ?? segment,
      item: `https://www.miningpropertymaps.com${pathSoFar}`,
    });
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };
}

export default async function CatchAllPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  const slugArray = slug?.filter(Boolean) ?? [];
  if (!(await routeExists(slugArray))) notFound();
  const pageData = await getPageData(slugArray);
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(slugArray, pageData.project?.title);

  let contentJsonLd: Record<string, unknown> | null = null;
  if (slugArray[0] === "projects" && slugArray[1]) {
    const project = pageData.project;
    if (project) {
      const imageUrl = project.image
        ? project.image.startsWith("http")
          ? project.image
          : `https://www.miningpropertymaps.com${project.image}`
        : "https://www.miningpropertymaps.com/opengraph-image.png";

      contentJsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": `https://www.miningpropertymaps.com/projects/${project.id}`,
        headline: project.title,
        description: project.summary || `${project.title} in ${project.region}.`,
        image: imageUrl,
        about: {
          "@type": "Place",
          name: project.region,
        },
        keywords: project.tags?.join(", "),
        author: {
          "@type": "Person",
          "@id": "https://www.miningpropertymaps.com/#chris-adamson",
          name: "Chris Adamson",
          jobTitle: "Registered Inspector (R.I.)",
        },
        publisher: {
          "@type": "Organization",
          "@id": "https://www.miningpropertymaps.com/#organization",
          name: "Adamson Geomatics",
          url: "https://www.miningpropertymaps.com",
          logo: "https://www.miningpropertymaps.com/images/general/logo.png",
        },
        mainEntityOfPage: `https://www.miningpropertymaps.com/projects/${project.id}`,
      };
    }
  } else if ((slugArray[0] === "post" || slugArray[0] === "posts") && slugArray[1]) {
    const post = mockPosts.find((p) => p.id === slugArray[1]);
    if (post) {
      const imageUrl = post.previewImage
        ? post.previewImage.startsWith("http")
          ? post.previewImage
          : `https://www.miningpropertymaps.com${post.previewImage}`
        : "https://www.miningpropertymaps.com/opengraph-image.png";

      contentJsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "@id": `https://www.miningpropertymaps.com/posts/${post.id}`,
        headline: post.title,
        description: post.summary || `Field report from Adamson Geomatics.`,
        image: imageUrl,
        author: {
          "@type": "Person",
          "@id": "https://www.miningpropertymaps.com/#chris-adamson",
          name: "Chris Adamson",
          jobTitle: "Registered Inspector (R.I.)",
        },
        publisher: {
          "@type": "Organization",
          "@id": "https://www.miningpropertymaps.com/#organization",
          name: "Adamson Geomatics",
          url: "https://www.miningpropertymaps.com",
          logo: "https://www.miningpropertymaps.com/images/general/logo.png",
        },
        mainEntityOfPage: `https://www.miningpropertymaps.com/posts/${post.id}`,
      };
    }
  }

  return (
    <>
      {breadcrumbJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      )}
      {contentJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(contentJsonLd) }}
        />
      )}
      <ClientPage data={pageData} />
    </>
  );
}
