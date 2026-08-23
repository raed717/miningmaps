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
      const ogImageUrl = project.image
        ? project.image.startsWith("http")
          ? project.image
          : `https://miningpropertymaps.com${project.image}`
        : "https://miningpropertymaps.com/opengraph-image.png";
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
          : `https://miningpropertymaps.com${post.previewImage}`
        : "https://miningpropertymaps.com/opengraph-image.png";

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
    { slug: ["partners"] },
    { slug: ["post"] },
    { slug: ["posts"] },
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

function buildBreadcrumbJsonLd(slugArray: string[]) {
  if (slugArray.length === 0) return null;

  const itemListElement = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://miningpropertymaps.com",
    },
  ];

  let pathSoFar = "";
  slugArray.forEach((segment, index) => {
    pathSoFar += `/${segment}`;
    const isLast = index === slugArray.length - 1;

    let name = pageLabels[segment];
    if (!name && isLast) {
      if (slugArray[0] === "projects" && index === 1) {
        name = projects.find((p) => p.id === segment)?.title ?? segment;
      } else if ((slugArray[0] === "post" || slugArray[0] === "posts") && index === 1) {
        name = mockPosts.find((p) => p.id === segment)?.title ?? segment;
      }
    }

    itemListElement.push({
      "@type": "ListItem",
      position: index + 2,
      name: name ?? segment,
      item: `https://miningpropertymaps.com${pathSoFar}`,
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
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(slugArray);

  let contentJsonLd: Record<string, unknown> | null = null;
  if (slugArray[0] === "projects" && slugArray[1]) {
    const project = projects.find((p) => p.id === slugArray[1]);
    if (project) {
      contentJsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: project.title,
        description: project.summary,
        image: project.image,
        about: project.region,
      };
    }
  } else if ((slugArray[0] === "post" || slugArray[0] === "posts") && slugArray[1]) {
    const post = mockPosts.find((p) => p.id === slugArray[1]);
    if (post) {
      contentJsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.summary,
        image: post.previewImage,
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
      <ClientPage />
    </>
  );
}
