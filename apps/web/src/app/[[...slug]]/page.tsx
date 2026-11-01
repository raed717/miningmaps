import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { mockPosts } from "@/lib/postData";
import { getProject, getProjects, getProjectSummaries, toSummary } from "@/lib/projectsRepo";
import type { ProjectPageData } from "@/lib/projectTypes";
import { parseLocaleFromPath } from "@/lib/i18n/navigation";
import { aboutTranslations } from "@/lib/i18n/translations/about";
import { servicesTranslations } from "@/lib/i18n/translations/services";
import { contactTranslations } from "@/lib/i18n/translations/contact";
import { homeTranslations } from "@/lib/i18n/translations/home";
import { mapTranslations } from "@/lib/i18n/translations/map";
import { projectsTranslations } from "@/lib/i18n/translations/projects";
import ClientPage from "./client";

// Projects come from Neon. Pages are prerendered and regenerated in the background
// at most every 5 minutes, so database edits (and new projects) go live without a redeploy.
// Also bounds how long a 404 for a not-yet-added project stays cached.
export const revalidate = 300;

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
  if (slugArray.length === 1) {
    if (section === "es" || section === "fr") return true;
    return STATIC_PAGES.includes(section);
  }
  if (slugArray.length === 2) {
    if (
      (section === "es" || section === "fr") &&
      (id === "about" ||
        id === "services" ||
        id === "contact" ||
        id === "map" ||
        id === "projects" ||
        id === "properties")
    )
      return true;
    if (section === "projects") return !!(await getProject(id));
    if (section === "post" || section === "posts") return mockPosts.some((p) => p.id === id);
  }
  if (slugArray.length === 3) {
    const [lang, sec, projId] = slugArray;
    if ((lang === "es" || lang === "fr") && sec === "projects") {
      return !!(await getProject(projId));
    }
  }
  return false;
}

/** Only the project data this route renders, so pages don't ship the whole catalog. */
async function getPageData(slugArray: string[]): Promise<ProjectPageData> {
  const [section, id] = slugArray;

  const isLocalizedProjectDetail =
    slugArray.length === 3 &&
    (slugArray[0] === "es" || slugArray[0] === "fr") &&
    slugArray[1] === "projects" &&
    !!slugArray[2];

  if ((section === "projects" && id) || isLocalizedProjectDetail) {
    const targetProjectId = isLocalizedProjectDetail ? slugArray[2] : id;
    const project = await getProject(targetProjectId);
    if (!project) return {};
    const relatedIds = new Set([project.parentProjectId, ...(project.subProjectIds ?? [])]);
    const related = (await getProjects()).filter((p) => relatedIds.has(p.id)).map(toSummary);
    return { project, related };
  }

  if (
    (slugArray.length === 1 &&
      (section === "projects" || section === "properties" || section === "map" || section === "dashboard")) ||
    (slugArray.length === 2 &&
      (section === "es" || section === "fr") &&
      (id === "projects" || id === "properties" || id === "map"))
  ) {
    return { summaries: await getProjectSummaries() };
  }

  if (
    slugArray.length === 0 ||
    (slugArray.length === 1 && (slugArray[0] === "es" || slugArray[0] === "fr"))
  ) {
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
  const slugArray = slug?.filter(Boolean) ?? [];
  if (!(await routeExists(slugArray))) notFound();
  const path = slugArray.length > 0 ? `/${slugArray.join("/")}` : "/";
  const { locale, cleanPath } = parseLocaleFromPath(path);
  const canonical = `https://www.miningpropertymaps.com${path === "/" ? "" : path}`;

  // Localized Home page (/, /es, /fr)
  if (cleanPath === "/") {
    const t = homeTranslations[locale] || homeTranslations.en;
    return {
      title: t.meta.title,
      description: t.meta.description,
      alternates: {
        canonical,
        languages: {
          en: "https://www.miningpropertymaps.com",
          es: "https://www.miningpropertymaps.com/es",
          fr: "https://www.miningpropertymaps.com/fr",
          "x-default": "https://www.miningpropertymaps.com",
        },
      },
      openGraph: {
        title: t.meta.title,
        description: t.meta.description,
        url: canonical,
        siteName,
        locale: locale === "en" ? "en_US" : locale === "es" ? "es_ES" : "fr_FR",
        alternateLocale:
          locale === "en"
            ? ["es_ES", "fr_FR"]
            : locale === "es"
            ? ["en_US", "fr_FR"]
            : ["en_US", "es_ES"],
        type: "website",
        images: [
          {
            url: "https://www.miningpropertymaps.com/opengraph-image.png",
            width: 1200,
            height: 630,
            alt: t.meta.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: t.meta.title,
        description: t.meta.description,
        images: ["https://www.miningpropertymaps.com/opengraph-image.png"],
      },
    };
  }

  // Localized About page (/about, /es/about, /fr/about)
  if (cleanPath === "/about") {
    const t = aboutTranslations[locale] || aboutTranslations.en;
    return {
      title: t.meta.title,
      description: t.meta.description,
      alternates: {
        canonical,
        languages: {
          en: "https://www.miningpropertymaps.com/about",
          es: "https://www.miningpropertymaps.com/es/about",
          fr: "https://www.miningpropertymaps.com/fr/about",
          "x-default": "https://www.miningpropertymaps.com/about",
        },
      },
      openGraph: {
        title: t.meta.title,
        description: t.meta.description,
        url: canonical,
        siteName,
        locale: locale === "en" ? "en_US" : locale === "es" ? "es_ES" : "fr_FR",
        alternateLocale:
          locale === "en"
            ? ["es_ES", "fr_FR"]
            : locale === "es"
            ? ["en_US", "fr_FR"]
            : ["en_US", "es_ES"],
        type: "website",
        images: [
          {
            url: "https://www.miningpropertymaps.com/opengraph-image.png",
            width: 1200,
            height: 630,
            alt: t.meta.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: t.meta.title,
        description: t.meta.description,
        images: ["https://www.miningpropertymaps.com/opengraph-image.png"],
      },
    };
  }

  // Localized Services page (/services, /es/services, /fr/services)
  if (cleanPath === "/services") {
    const t = servicesTranslations[locale] || servicesTranslations.en;
    return {
      title: t.meta.title,
      description: t.meta.description,
      alternates: {
        canonical,
        languages: {
          en: "https://www.miningpropertymaps.com/services",
          es: "https://www.miningpropertymaps.com/es/services",
          fr: "https://www.miningpropertymaps.com/fr/services",
          "x-default": "https://www.miningpropertymaps.com/services",
        },
      },
      openGraph: {
        title: t.meta.title,
        description: t.meta.description,
        url: canonical,
        siteName,
        locale: locale === "en" ? "en_US" : locale === "es" ? "es_ES" : "fr_FR",
        alternateLocale:
          locale === "en"
            ? ["es_ES", "fr_FR"]
            : locale === "es"
            ? ["en_US", "fr_FR"]
            : ["en_US", "es_ES"],
        type: "website",
        images: [
          {
            url: "https://www.miningpropertymaps.com/opengraph-image.png",
            width: 1200,
            height: 630,
            alt: t.meta.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: t.meta.title,
        description: t.meta.description,
        images: ["https://www.miningpropertymaps.com/opengraph-image.png"],
      },
    };
  }

  // Localized Contact page (/contact, /es/contact, /fr/contact)
  if (cleanPath === "/contact") {
    const t = contactTranslations[locale] || contactTranslations.en;
    return {
      title: t.meta.title,
      description: t.meta.description,
      alternates: {
        canonical,
        languages: {
          en: "https://www.miningpropertymaps.com/contact",
          es: "https://www.miningpropertymaps.com/es/contact",
          fr: "https://www.miningpropertymaps.com/fr/contact",
          "x-default": "https://www.miningpropertymaps.com/contact",
        },
      },
      openGraph: {
        title: t.meta.title,
        description: t.meta.description,
        url: canonical,
        siteName,
        locale: locale === "en" ? "en_US" : locale === "es" ? "es_ES" : "fr_FR",
        alternateLocale:
          locale === "en"
            ? ["es_ES", "fr_FR"]
            : locale === "es"
            ? ["en_US", "fr_FR"]
            : ["en_US", "es_ES"],
        type: "website",
        images: [
          {
            url: "https://www.miningpropertymaps.com/opengraph-image.png",
            width: 1200,
            height: 630,
            alt: t.meta.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: t.meta.title,
        description: t.meta.description,
        images: ["https://www.miningpropertymaps.com/opengraph-image.png"],
      },
    };
  }

  // Localized Map page (/map, /es/map, /fr/map)
  if (cleanPath === "/map") {
    const t = mapTranslations[locale] || mapTranslations.en;
    return {
      title: t.meta.title,
      description: t.meta.description,
      alternates: {
        canonical,
        languages: {
          en: "https://www.miningpropertymaps.com/map",
          es: "https://www.miningpropertymaps.com/es/map",
          fr: "https://www.miningpropertymaps.com/fr/map",
          "x-default": "https://www.miningpropertymaps.com/map",
        },
      },
      openGraph: {
        title: t.meta.title,
        description: t.meta.description,
        url: canonical,
        siteName,
        locale: locale === "en" ? "en_US" : locale === "es" ? "es_ES" : "fr_FR",
        alternateLocale:
          locale === "en"
            ? ["es_ES", "fr_FR"]
            : locale === "es"
            ? ["en_US", "fr_FR"]
            : ["en_US", "es_ES"],
        type: "website",
        images: [
          {
            url: "https://www.miningpropertymaps.com/opengraph-image.png",
            width: 1200,
            height: 630,
            alt: t.meta.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: t.meta.title,
        description: t.meta.description,
        images: ["https://www.miningpropertymaps.com/opengraph-image.png"],
      },
    };
  }

  // Localized Projects page (/projects, /es/projects, /fr/projects)
  if (cleanPath === "/projects") {
    const t = projectsTranslations[locale] || projectsTranslations.en;
    return {
      title: t.meta.projectsTitle,
      description: t.meta.projectsDescription,
      alternates: {
        canonical,
        languages: {
          en: "https://www.miningpropertymaps.com/projects",
          es: "https://www.miningpropertymaps.com/es/projects",
          fr: "https://www.miningpropertymaps.com/fr/projects",
          "x-default": "https://www.miningpropertymaps.com/projects",
        },
      },
      openGraph: {
        title: t.meta.projectsTitle,
        description: t.meta.projectsDescription,
        url: canonical,
        siteName,
        locale: locale === "en" ? "en_US" : locale === "es" ? "es_ES" : "fr_FR",
        alternateLocale:
          locale === "en"
            ? ["es_ES", "fr_FR"]
            : locale === "es"
            ? ["en_US", "fr_FR"]
            : ["en_US", "es_ES"],
        type: "website",
        images: [
          {
            url: "https://www.miningpropertymaps.com/opengraph-image.png",
            width: 1200,
            height: 630,
            alt: t.meta.projectsTitle,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: t.meta.projectsTitle,
        description: t.meta.projectsDescription,
        images: ["https://www.miningpropertymaps.com/opengraph-image.png"],
      },
    };
  }

  // Localized Properties page (/properties, /es/properties, /fr/properties)
  if (cleanPath === "/properties") {
    const t = projectsTranslations[locale] || projectsTranslations.en;
    return {
      title: t.meta.propertiesTitle,
      description: t.meta.propertiesDescription,
      alternates: {
        canonical,
        languages: {
          en: "https://www.miningpropertymaps.com/properties",
          es: "https://www.miningpropertymaps.com/es/properties",
          fr: "https://www.miningpropertymaps.com/fr/properties",
          "x-default": "https://www.miningpropertymaps.com/properties",
        },
      },
      openGraph: {
        title: t.meta.propertiesTitle,
        description: t.meta.propertiesDescription,
        url: canonical,
        siteName,
        locale: locale === "en" ? "en_US" : locale === "es" ? "es_ES" : "fr_FR",
        alternateLocale:
          locale === "en"
            ? ["es_ES", "fr_FR"]
            : locale === "es"
            ? ["en_US", "fr_FR"]
            : ["en_US", "es_ES"],
        type: "website",
        images: [
          {
            url: "https://www.miningpropertymaps.com/opengraph-image.png",
            width: 1200,
            height: 630,
            alt: t.meta.propertiesTitle,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: t.meta.propertiesTitle,
        description: t.meta.propertiesDescription,
        images: ["https://www.miningpropertymaps.com/opengraph-image.png"],
      },
    };
  }

  // Static pages
  if (pageMeta[path]) {
    return { ...pageMeta[path], alternates: { canonical } };
  }

  // Project detail pages: /projects/[id], /es/projects/[id], /fr/projects/[id]
  const isProjDetail =
    (slugArray[0] === "projects" && !!slugArray[1]) ||
    ((slugArray[0] === "es" || slugArray[0] === "fr") && slugArray[1] === "projects" && !!slugArray[2]);
  if (isProjDetail) {
    const targetId = slugArray[0] === "projects" ? slugArray[1] : slugArray[2];
    const project = await getProject(targetId);
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
        alternates: {
          canonical,
          languages: {
            en: `https://www.miningpropertymaps.com/projects/${project.id}`,
            es: `https://www.miningpropertymaps.com/es/projects/${project.id}`,
            fr: `https://www.miningpropertymaps.com/fr/projects/${project.id}`,
            "x-default": `https://www.miningpropertymaps.com/projects/${project.id}`,
          },
        },
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
  let projects: Awaited<ReturnType<typeof getProjects>> = [];
  try {
    projects = await getProjects();
  } catch (err) {
    console.warn("generateStaticParams: falling back to static routes only due to DB connection error", err);
  }
  return [
    { slug: [""] },
    ...STATIC_PAGES.map((page) => ({ slug: [page] })),
    { slug: ["es"] },
    { slug: ["fr"] },
    { slug: ["es", "about"] },
    { slug: ["fr", "about"] },
    { slug: ["es", "services"] },
    { slug: ["fr", "services"] },
    { slug: ["es", "contact"] },
    { slug: ["fr", "contact"] },
    { slug: ["es", "map"] },
    { slug: ["fr", "map"] },
    { slug: ["es", "projects"] },
    { slug: ["fr", "projects"] },
    { slug: ["es", "properties"] },
    { slug: ["fr", "properties"] },
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
  if (
    slugArray.length === 0 ||
    (slugArray.length === 1 && (slugArray[0] === "es" || slugArray[0] === "fr"))
  ) {
    return null;
  }

  const isLocalized =
    (slugArray[0] === "es" || slugArray[0] === "fr") &&
    (slugArray[1] === "about" ||
      slugArray[1] === "services" ||
      slugArray[1] === "contact" ||
      slugArray[1] === "map" ||
      slugArray[1] === "projects" ||
      slugArray[1] === "properties");

  if (isLocalized) {
    const lang = slugArray[0];
    const page = slugArray[1];
    const homeLabel = lang === "es" ? "Inicio" : "Accueil";
    let pageLabel = "";
    if (page === "about") {
      pageLabel = lang === "es" ? "Acerca de" : "À propos";
    } else if (page === "services") {
      pageLabel = lang === "es" ? "Servicios" : "Services";
    } else if (page === "contact") {
      pageLabel = lang === "es" ? "Contacto" : "Contact";
    } else if (page === "map") {
      pageLabel = lang === "es" ? "Mapa Interactivo" : "Carte Interactive";
    } else if (page === "projects") {
      pageLabel = lang === "es" ? "Proyectos" : "Projets";
    } else if (page === "properties") {
      pageLabel = lang === "es" ? "Propiedades en Venta" : "Propriétés à Vendre";
    }
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: homeLabel,
          item: `https://www.miningpropertymaps.com/${lang}`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: pageLabel,
          item: `https://www.miningpropertymaps.com/${lang}/${page}`,
        },
      ],
    };
  }

  if (
    slugArray.length === 3 &&
    (slugArray[0] === "es" || slugArray[0] === "fr") &&
    slugArray[1] === "projects"
  ) {
    const lang = slugArray[0];
    const homeLabel = lang === "es" ? "Inicio" : "Accueil";
    const projLabel = lang === "es" ? "Proyectos" : "Projets";
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: homeLabel,
          item: `https://www.miningpropertymaps.com/${lang}`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: projLabel,
          item: `https://www.miningpropertymaps.com/${lang}/projects`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: projectTitle ?? slugArray[2],
          item: `https://www.miningpropertymaps.com/${lang}/projects/${slugArray[2]}`,
        },
      ],
    };
  }

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
  const isProjDetail =
    (slugArray[0] === "projects" && slugArray[1]) ||
    ((slugArray[0] === "es" || slugArray[0] === "fr") && slugArray[1] === "projects" && slugArray[2]);
  if (isProjDetail) {
    const project = pageData.project;
    if (project) {
      const canonicalProjectUrl =
        slugArray[0] === "es" || slugArray[0] === "fr"
          ? `https://www.miningpropertymaps.com/${slugArray[0]}/projects/${project.id}`
          : `https://www.miningpropertymaps.com/projects/${project.id}`;
      const imageUrl = project.image
        ? project.image.startsWith("http")
          ? project.image
          : `https://www.miningpropertymaps.com${project.image}`
        : "https://www.miningpropertymaps.com/opengraph-image.png";

      contentJsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": canonicalProjectUrl,
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
        mainEntityOfPage: canonicalProjectUrl,
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
