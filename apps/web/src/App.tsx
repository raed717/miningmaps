"use client";

import { useEffect, useMemo } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import Header from "@/components/header";
import NavigationProgressBar from "@/components/navigation-progress-bar";
import Loader from "@/components/loader";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next";
import { I18nProvider } from "@/lib/i18n/context";
import { parseLocaleFromPath } from "@/lib/i18n/navigation";

const HomePage = dynamic(() => import("@/views/home-page"), {
  loading: () => <Loader message="Loading Home..." />,
});
const AboutPage = dynamic(() => import("@/views/about-page"), {
  loading: () => <Loader message="Loading About..." />,
});
const ServicesPage = dynamic(() => import("@/views/services-page"), {
  loading: () => <Loader message="Loading Services..." />,
});
const ContactPage = dynamic(() => import("@/views/contact-page"), {
  loading: () => <Loader message="Loading Contact..." />,
});
const ProjectsPage = dynamic(() => import("@/views/projects-page"), {
  loading: () => <Loader message="Loading Projects..." />,
});
const PostsPage = dynamic(() => import("@/views/posts-page"), {
  loading: () => <Loader message="Loading Posts..." />,
});
const PostDetailPage = dynamic(() => import("@/views/post-detail-page"), {
  loading: () => <Loader message="Loading Article..." />,
});
const AuthPage = dynamic(() => import("@/views/auth-page"), {
  loading: () => <Loader message="Loading..." />,
  ssr: false,
});
const AccountPage = dynamic(() => import("@/views/account-page"), {
  loading: () => <Loader message="Loading Account..." />,
  ssr: false,
});
const CommunityPage = dynamic(() => import("@/views/community-page"), {
  loading: () => <Loader message="Opening Community Hub..." />,
  ssr: false,
});
const NotFoundPage = dynamic(() => import("@/views/not-found-page"));
const MapView = dynamic(() => import("@/app/map/map-view"), {
  loading: () => <Loader message="Initializing Interactive Map..." />,
  ssr: false,
});
const DashboardView = dynamic(() => import("@/app/dashboard/dashboard-view"), {
  loading: () => <Loader message="Loading Dashboard..." />,
  ssr: false,
});
// Server-rendered so crawlers get the full project content (its Leaflet map is browser-only).
const ProjectView = dynamic(() => import("@/app/projects/[id]/project-view"), {
  loading: () => <Loader message="Loading Project Dossier..." />,
});
const OtherProjectsPage = dynamic(() => import("@/views/other-projects-page"), {
  loading: () => <Loader message="Loading Portfolio..." />,
});
const PartnersPage = dynamic(() => import("@/views/partners-page"), {
  loading: () => <Loader message="Loading Partners..." />,
});

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

  const { locale, cleanPath } = parseLocaleFromPath(normalizedPathname);

  const segments = cleanPath
    .split("/")
    .filter(Boolean)
    .map(decodeSegment);

  let content = <NotFoundPage path={normalizedPathname} />;

  if (cleanPath === "/") {
    content = <HomePage locale={locale} />;
  } else if (cleanPath === "/about") {
    content = <AboutPage locale={locale} />;
  } else if (cleanPath === "/services") {
    content = <ServicesPage locale={locale} />;
  } else if (cleanPath === "/contact") {
    content = <ContactPage locale={locale} />;
  } else if (cleanPath === "/map") {
    content = <MapView />;
  } else if (cleanPath === "/dashboard") {
    content = <DashboardView />;
  } else if (cleanPath === "/projects") {
    content = <ProjectsPage locale={locale} />;
  } else if (cleanPath === "/properties") {
    content = <ProjectsPage showOnlyForSale locale={locale} />;
  } else if (normalizedPathname === "/other-projects") {
    content = <OtherProjectsPage />;
  } else if (normalizedPathname === "/partners") {
    content = <PartnersPage />;
  } else if (normalizedPathname === "/sign-up") {
    content = <AuthPage mode="sign-up" />;
  } else if (normalizedPathname === "/sign-in") {
    content = <AuthPage mode="sign-in" />;
  } else if (normalizedPathname === "/account") {
    content = <AccountPage />;
  } else if (normalizedPathname === "/community") {
    content = <CommunityPage />;
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
    <I18nProvider initialLocale={locale}>
      <div className="grid min-h-svh grid-rows-[auto_1fr] w-full max-w-full overflow-x-clip">
        <NavigationProgressBar />
        <Header />
        <Analytics />
        <div className="h-full min-h-0 flex flex-col w-full max-w-full overflow-x-clip">{content}</div>
        <Toaster richColors />
      </div>
    </I18nProvider>
  );
}
