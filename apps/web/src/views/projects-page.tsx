"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import {
  Activity,
  ArrowUpRight,
  Cpu,
  Database,
  MapPin,
  Search,
  Target,
  FolderKanban,
  Tag,
  Gem,
  BadgeCheck,
} from "lucide-react";
import { inter, mono } from "@/lib/fonts";
import { useProjectSummaries } from "@/lib/projectDataContext";
import { otherProjects } from "@/lib/otherProjectsData";
import { PartnerNoticeRotator } from "@/components/partner-notice-rotator";
import { ShareProjectButton } from "@/components/share-project-button";
import { ExpandableSummary } from "@/components/expandable-summary";
import { filterTags, searchableTags } from "@/lib/projectTags";
import { useI18n } from "@/lib/i18n/context";
import { projectsTranslations } from "@/lib/i18n/translations/projects";
import { getLocalizedPath } from "@/lib/i18n/navigation";
import type { Locale } from "@/lib/i18n/types";

type ProjectsPageProps = {
  showOnlyForSale?: boolean;
  locale?: Locale;
};

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightMatch(text: string, query: string) {
  if (!query.trim()) return text;

  const parts = text.split(new RegExp(`(${escapeRegExp(query)})`, "gi"));
  if (parts.length === 1) return text;

  return parts.map((part, index) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark key={index} className="bg-primary/30 text-inherit">
        {part}
      </mark>
    ) : (
      <span key={index}>{part}</span>
    )
  );
}

const COMMODITY_TAGS = ["Gold", "Silver", "Copper", "Platinum", "Cobalt", "Nickel"];
const SPECIMEN_TAGS = ["Fossils", "Agates", "Gemstones"];
const FOSSILS_GEMSTONES_TYPE = "Fossils, Agates & Gemstones";

export default function ProjectsPage({ showOnlyForSale = false, locale: propLocale }: ProjectsPageProps) {
  const { locale: ctxLocale } = useI18n();
  const locale = propLocale || ctxLocale;
  const t = projectsTranslations[locale] || projectsTranslations.en;

  const projects = useProjectSummaries();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [saleFilter, setSaleFilter] = useState<"all" | "for-sale" | "sold">("all");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("forSale") === "true" || params.get("filter") === "for-sale") {
        setSaleFilter("for-sale");
      } else if (params.get("sold") === "true" || params.get("filter") === "sold") {
        setSaleFilter("sold");
      }
      const typeParam = params.get("type")?.toLowerCase();
      if (
        typeParam === "fossils-agates-gemstones" ||
        typeParam === "specimens" ||
        typeParam === "fossils" ||
        typeParam === "agates" ||
        typeParam === "gemstones"
      ) {
        if (typeParam === "fossils-agates-gemstones" || typeParam === "specimens") {
          setActiveFilter(FOSSILS_GEMSTONES_TYPE);
        } else {
          const matchedTag = SPECIMEN_TAGS.find((t) => t.toLowerCase() === typeParam);
          if (matchedTag) setActiveFilter(matchedTag);
        }
      }
    }
  }, []);

  const totalForSaleCount = useMemo(() => {
    return projects.filter(
      (p) =>
        p.type !== "subproject" &&
        (p.isForSale ||
          (p.subProjectIds || []).some(
            (id) => projects.find((sub) => sub.id === id)?.isForSale
          ))
    ).length;
  }, [projects]);

  const totalSoldCount = useMemo(() => {
    return projects.filter(
      (p) =>
        p.type !== "subproject" &&
        !p.isForSale &&
        !(p.subProjectIds || []).some(
          (id) => projects.find((sub) => sub.id === id)?.isForSale
        )
    ).length;
  }, [projects]);

  const totalSpecimensCount = useMemo(() => {
    const specimenTagSet = new Set(SPECIMEN_TAGS.map((t) => t.toLowerCase()));
    return projects.filter((project) => {
      if (project.type === "subproject") return false;
      const subs = (project.subProjectIds || [])
        .map((id) => projects.find((p) => p.id === id))
        .filter(Boolean);
      const allTags = [
        ...filterTags(project),
        ...subs.flatMap((s) => (s ? filterTags(s) : [])),
      ].map((t) => t.toLowerCase());
      return allTags.some((t) => specimenTagSet.has(t));
    }).length;
  }, [projects]);

  const filteredProjects = projects.filter((project) => {
    if (project.type === "subproject") return false;

    const query = searchQuery.toLowerCase();

    // Collect subprojects for this parent
    const subs = (project.subProjectIds || [])
      .map((id) => projects.find((p) => p.id === id))
      .filter(Boolean);

    const matchesSearch =
      project.title.toLowerCase().includes(query) ||
      project.summary.toLowerCase().includes(query) ||
      project.region.toLowerCase().includes(query) ||
      searchableTags(project).some((t) => t.toLowerCase().includes(query)) ||
      subs.some(
        (sub) =>
          sub!.title.toLowerCase().includes(query) ||
          sub!.summary.toLowerCase().includes(query) ||
          sub!.region.toLowerCase().includes(query) ||
          searchableTags(sub!).some((t) => t.toLowerCase().includes(query))
      );

    let matchesFilter = true;
    if (activeFilter) {
      if (activeFilter === FOSSILS_GEMSTONES_TYPE) {
        const specimenTagSet = new Set(SPECIMEN_TAGS.map((t) => t.toLowerCase()));
        const allTags = [
          ...filterTags(project),
          ...subs.flatMap((s) => (s ? filterTags(s) : [])),
        ].map((t) => t.toLowerCase());
        matchesFilter = allTags.some((t) => specimenTagSet.has(t));
      } else {
        const filterLower = activeFilter.toLowerCase();
        const allTags = [
          ...filterTags(project),
          ...subs.flatMap((s) => (s ? filterTags(s) : [])),
        ].map((t) => t.toLowerCase());
        matchesFilter = allTags.includes(filterLower);
      }
    }

    const matchesSaleState =
      showOnlyForSale || saleFilter === "for-sale"
        ? project.isForSale || subs.some((sub) => sub!.isForSale)
        : saleFilter === "sold"
        ? !project.isForSale && !subs.some((sub) => sub!.isForSale)
        : true;

    return matchesSearch && matchesFilter && matchesSaleState;
  });

  const matchingOtherProjectsCount = useMemo(() => {
    if (!searchQuery.trim()) return 0;
    const query = searchQuery.toLowerCase();
    return otherProjects.filter(
      (p) =>
        p["Group Name"]?.toLowerCase().includes(query) ||
        p["Map Number"]?.toLowerCase().includes(query) ||
        p["Commodity / Theme"]?.toLowerCase().includes(query) ||
        p["Brief Project Summary"]?.toLowerCase().includes(query) ||
        p.Titles?.toLowerCase().includes(query) ||
        p.Owners?.toLowerCase().includes(query)
    ).length;
  }, [searchQuery]);

  return (
    <div
      className={`min-h-screen w-full bg-background text-foreground selection:bg-primary selection:text-white ${inter.className}`}
    >
      <div
        className="pointer-events-none fixed inset-0 z-50 hidden opacity-[0.03] mix-blend-overlay md:block"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_80%_80%_at_50%_0%,#000_40%,transparent_100%)]" />

      <main className="relative z-10 mx-auto max-w-[80rem] px-4 py-12 md:px-10 md:py-16">
        <header className="mb-8 border-b border-border pb-8 md:mb-10 md:pb-10">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <div
                className={`mb-3 flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-primary ${mono.className}`}
              >
                <Database className="h-3 w-3" />
                {showOnlyForSale ? t.header.propertyRegistry : t.header.assetDatabase}
              </div>
              <h1 className="text-3xl font-extrabold uppercase tracking-tighter leading-[0.88] md:text-5xl xl:text-6xl">
                {showOnlyForSale ? (
                  <>
                    {t.header.propertiesTitleLine1}
                    <br />
                    {t.header.propertiesTitleLine2}
                  </>
                ) : (
                  <>
                    {t.header.projectsTitleLine1}
                    <br />
                    {t.header.projectsTitleLine2}
                  </>
                )}
              </h1>

              <Link
                href={getLocalizedPath("/map", locale)}
                className="group mt-5 inline-flex items-center gap-3 border border-primary/40 bg-card/70 px-4 py-3 backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/10"
              >
                <div className="flex h-9 w-9 items-center justify-center border border-primary/40 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-black">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <div
                    className={`text-[10px] uppercase tracking-[0.22em] text-primary ${mono.className}`}
                  >
                    {t.header.spatialAccess}
                  </div>
                  <div className="mt-1 text-xs font-extrabold uppercase tracking-[0.18em] text-white md:text-sm">
                    {t.header.viewOnMap}
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
              </Link>
              <Link
                href={getLocalizedPath("/other-projects", locale)}
                className="group mt-5 inline-flex items-center gap-3 border border-primary/40 bg-card/70 px-4 py-3 backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/10"
              >
                <div className="flex h-9 w-9 items-center justify-center border border-primary/40 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-black">
                  <FolderKanban className="h-4 w-4" />
                </div>
                <div>
                  <div className="mt-1 text-xs font-extrabold uppercase tracking-[0.18em] text-white md:text-sm">
                    {t.header.moreProjects}
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
              </Link>
            </div>
            {showOnlyForSale ? (
              <div
                className={`max-w-md border border-primary/30 bg-card/80 p-4 backdrop-blur-sm text-xs uppercase tracking-[0.18em] leading-relaxed text-zinc-100 md:text-sm ${mono.className}`}
              >
                {t.header.propertiesSubtitle}
              </div>
            ) : (
              <PartnerNoticeRotator />
            )}
          </div>
        </header>

        <section className="mb-10 flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
          <div className="relative w-full lg:w-1/3">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <Search className="h-5 w-5 text-primary" />
            </div>
            <input
              type="text"
              placeholder={t.controls.searchPlaceholder}
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className={`w-full border border-border bg-card py-3 pr-4 pl-12 text-xs tracking-[0.18em] text-white uppercase placeholder-[#555] transition-all focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none md:text-sm ${mono.className}`}
            />
            {searchQuery && (
              <div className="absolute top-1/2 right-4 -translate-y-1/2">
                <Activity className="h-4 w-4 animate-pulse text-secondary" />
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2 lg:w-2/3 lg:justify-end">
            <button
              type="button"
              onClick={() => {
                setActiveFilter(null);
                setSaleFilter("all");
              }}
              className={`px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] transition-all md:px-4 md:text-xs ${mono.className} ${
                activeFilter === null && saleFilter === "all"
                  ? "border-primary bg-primary text-black"
                  : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary"
              } border`}
            >
              {t.controls.all}
            </button>
            {!showOnlyForSale && (
              <>
                <button
                  type="button"
                  onClick={() => setSaleFilter((prev) => (prev === "for-sale" ? "all" : "for-sale"))}
                  className={`inline-flex items-center gap-1.5 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] transition-all md:px-4 md:text-xs ${mono.className} ${
                    saleFilter === "for-sale"
                      ? "border-secondary bg-secondary text-black shadow-[0_0_12px_rgba(0,255,65,0.4)]"
                      : "border-secondary/40 bg-secondary/10 text-secondary hover:border-secondary hover:bg-secondary/20"
                  } border`}
                  title={saleFilter === "for-sale" ? "Show all projects" : "Filter projects available for sale"}
                >
                  <Tag className="h-3 w-3" />
                  <span>{t.controls.forSale}</span>
                  <span
                    className={`ml-0.5 px-1.5 py-0.2 text-[9px] font-extrabold ${
                      saleFilter === "for-sale"
                        ? "bg-black text-secondary"
                        : "border border-secondary/40 bg-secondary/20 text-secondary"
                    }`}
                  >
                    {totalForSaleCount}
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setSaleFilter((prev) => (prev === "sold" ? "all" : "sold"))}
                  className={`inline-flex items-center gap-1.5 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] transition-all md:px-4 md:text-xs ${mono.className} ${
                    saleFilter === "sold"
                      ? "border-amber-500 bg-amber-500 text-black shadow-[0_0_12px_rgba(245,158,11,0.4)]"
                      : "border-amber-500/40 bg-amber-500/10 text-amber-500 hover:border-amber-500 hover:bg-amber-500/20"
                  } border`}
                  title={saleFilter === "sold" ? "Show all projects" : "Filter projects already sold"}
                >
                  <BadgeCheck className="h-3 w-3" />
                  <span>{t.controls.sold}</span>
                  <span
                    className={`ml-0.5 px-1.5 py-0.2 text-[9px] font-extrabold ${
                      saleFilter === "sold"
                        ? "bg-black text-amber-500"
                        : "border border-amber-500/40 bg-amber-500/20 text-amber-500"
                    }`}
                  >
                    {totalSoldCount}
                  </span>
                </button>
              </>
            )}
            {COMMODITY_TAGS.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() =>
                  setActiveFilter(tag === activeFilter ? null : tag)
                }
                className={`px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] transition-all md:px-4 md:text-xs ${mono.className} ${
                  activeFilter === tag
                    ? "border-secondary bg-secondary text-black"
                    : "border-border bg-card text-muted-foreground hover:border-secondary hover:text-secondary"
                } border`}
              >
                {tag}
              </button>
            ))}

            <span className="hidden h-5 w-[1px] bg-border sm:inline-block mx-0.5" aria-hidden="true" />

            <button
              type="button"
              onClick={() =>
                setActiveFilter(
                  activeFilter === FOSSILS_GEMSTONES_TYPE
                    ? null
                    : FOSSILS_GEMSTONES_TYPE
                )
              }
              className={`inline-flex items-center gap-1.5 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] transition-all md:px-4 md:text-xs ${mono.className} ${
                activeFilter === FOSSILS_GEMSTONES_TYPE
                  ? "border-primary bg-primary text-black shadow-[0_0_12px_rgba(234,179,8,0.35)]"
                  : "border-primary/40 bg-primary/10 text-primary hover:border-primary hover:bg-primary/20"
              } border`}
              title="Filter Fossils, Agates & Gemstones"
            >
              <Gem className="h-3 w-3" />
              <span>{t.controls.fossilsAgatesGems}</span>
              <span
                className={`ml-0.5 px-1.5 py-0.2 text-[9px] font-extrabold ${
                  activeFilter === FOSSILS_GEMSTONES_TYPE
                    ? "bg-black text-primary"
                    : "border border-primary/40 bg-primary/20 text-primary"
                }`}
              >
                {totalSpecimensCount}
              </span>
            </button>

            {SPECIMEN_TAGS.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() =>
                  setActiveFilter(tag === activeFilter ? null : tag)
                }
                className={`px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] transition-all md:px-4 md:text-xs ${mono.className} ${
                  activeFilter === tag
                    ? "border-primary bg-primary text-black"
                    : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary"
                } border`}
              >
                {tag}
              </button>
            ))}
          </div>
        </section>

        <div
          className={`mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-border pb-3 text-[10px] tracking-[0.18em] uppercase text-[#666] md:text-xs ${mono.className}`}
        >
          <div className="flex flex-wrap items-center gap-2">
            <span>
              {t.controls.displayingRecords.replace("{count}", String(filteredProjects.length))}
            </span>
            {saleFilter === "for-sale" && (
              <span className="inline-flex items-center gap-1.5 border border-secondary/50 bg-secondary/15 px-2 py-0.5 text-[9px] font-bold text-secondary">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
                {t.controls.forSaleOnlyBadge}
                <button
                  type="button"
                  onClick={() => setSaleFilter("all")}
                  className="ml-1 text-secondary/70 hover:text-white transition-colors"
                  title="Remove filter"
                >
                  ×
                </button>
              </span>
            )}
            {saleFilter === "sold" && (
              <span className="inline-flex items-center gap-1.5 border border-amber-500/50 bg-amber-500/15 px-2 py-0.5 text-[9px] font-bold text-amber-500">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
                {t.controls.soldOnlyBadge}
                <button
                  type="button"
                  onClick={() => setSaleFilter("all")}
                  className="ml-1 text-amber-500/70 hover:text-white transition-colors"
                  title="Remove filter"
                >
                  ×
                </button>
              </span>
            )}
            {activeFilter && (
              <span className="inline-flex items-center gap-1.5 border border-primary/50 bg-primary/15 px-2 py-0.5 text-[9px] font-bold text-primary">
                {activeFilter === FOSSILS_GEMSTONES_TYPE
                  ? `${t.controls.typePrefix} ${t.controls.fossilsAgatesGems}`
                  : `${t.controls.tagPrefix} ${activeFilter}`}
                <button
                  type="button"
                  onClick={() => setActiveFilter(null)}
                  className="ml-1 text-primary/70 hover:text-white transition-colors"
                  title="Remove filter"
                >
                  ×
                </button>
              </span>
            )}
          </div>
          <span>
            SYSTEM STATUS: {filteredProjects.length > 0 ? t.controls.systemStatusOnline : t.controls.systemStatusNoMatch}
          </span>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <div className="group relative block h-full overflow-hidden border border-accent bg-card transition-colors duration-500 hover:border-primary">
                  <Link
                    href={getLocalizedPath(`/projects/${project.id}`, locale)}
                    aria-label={`View details for ${project.title}`}
                    className="absolute inset-0 z-10"
                  />
                  <div className="absolute top-0 right-0 p-3 opacity-10 transition-opacity group-hover:opacity-30">
                    <Cpu className="h-24 w-24" />
                  </div>

                  <div
                    className={`flex items-center justify-between border-b border-accent bg-background p-4 text-[10px] font-bold tracking-widest uppercase ${mono.className}`}
                  >
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Target className="h-3 w-3" />
                      ID_{project.id}
                    </span>
                    <span className="flex items-center gap-1 text-primary">
                      <MapPin className="h-3 w-3" />
                      {project.region}
                    </span>
                  </div>

                  <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-accent bg-black">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      {(() => {
                        const isProjectAvailable =
                          project.isForSale ||
                          (project.subProjectIds || []).some(
                            (id) => projects.find((sub) => sub.id === id)?.isForSale
                          );
                        return (
                          <div
                            className={`px-2 py-1 text-[9px] font-bold tracking-widest uppercase ${
                              isProjectAvailable
                                ? "border border-secondary bg-secondary text-black shadow-[0_0_10px_var(--color-secondary)]"
                                : "border border-amber-500 bg-amber-500 text-black shadow-[0_0_10px_rgba(245,158,11,0.5)]"
                            } ${mono.className}`}
                          >
                            {isProjectAvailable
                              ? t.card.availableForAcquisition
                              : t.card.sold}
                          </div>
                        );
                      })()}
                    </div>
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(255,255,255,0.05)_50%)] bg-[length:100%_4px] mix-blend-overlay" />
                  </div>

                  <div className="relative z-10 flex grow flex-col bg-card p-6">
                    <h3 className="mb-4 text-2xl font-extrabold uppercase tracking-tight leading-none transition-colors group-hover:text-primary">
                      {highlightMatch(project.title, searchQuery)}
                    </h3>

                    <ExpandableSummary
                      text={project.summary}
                      readMore={t.card.readMore}
                      showLess={t.card.showLess}
                      className={`text-sm uppercase leading-relaxed text-muted-foreground ${mono.className}`}
                    >
                      {highlightMatch(project.summary, searchQuery)}
                    </ExpandableSummary>

                    {project.subProjectIds &&
                      project.subProjectIds.length > 0 && (
                        <div className="relative z-20 mb-6 border-l-2 border-primary/30 pl-4">
                          <span
                            className={`mb-2 block text-[9px] uppercase tracking-[0.2em] text-primary ${mono.className}`}
                          >
                            {t.card.clientProjects}
                          </span>
                          <ul className="space-y-1.5">
                            {project.subProjectIds.map((subId) => {
                              const sub = projects.find((p) => p.id === subId);
                              if (!sub) return null;
                              return (
                                <li key={subId}>
                                  <Link
                                    href={getLocalizedPath(`/projects/${subId}`, locale)}
                                    className="group/sub flex w-full items-center gap-2 text-left text-xs uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-primary"
                                  >
                                    <span className="text-primary/40 transition-colors group-hover/sub:text-primary">
                                      &rsaquo;
                                    </span>
                                    {highlightMatch(sub.title, searchQuery)}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      )}

                    <div className="mt-auto flex items-center justify-between border-t border-accent pt-4">
                      <div className="flex gap-2">
                        {project.tags?.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className={`border border-border px-2 py-1 text-[9px] uppercase tracking-widest text-[#666] ${mono.className}`}
                          >
                            {tag}
                          </span>
                        ))}
                        {(project.tags?.length || 0) > 2 && (
                          <span
                            className={`border border-border px-2 py-1 text-[9px] uppercase tracking-widest text-[#666] ${mono.className}`}
                          >
                            +{(project.tags?.length || 0) - 2}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <ShareProjectButton
                          path={getLocalizedPath(`/projects/${project.id}`, locale)}
                          title={project.title}
                          region={project.region}
                          image={project.image}
                          labels={t.card.share}
                        />
                        <div className="flex h-10 w-10 items-center justify-center border border-border text-muted-foreground transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-black">
                          <ArrowUpRight className="h-5 w-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length > 0 && (
          <div className="mt-14 flex flex-col items-center justify-between gap-6 border border-border bg-card/40 p-6 backdrop-blur-sm md:flex-row md:p-8">
            <div>
              <div
                className={`flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-primary ${mono.className}`}
              >
                <FolderKanban className="h-3.5 w-3.5" />
                {t.extendedArchive.badge}
              </div>
              <h4 className="mt-1 text-lg font-extrabold uppercase tracking-tight text-white md:text-xl">
                {t.extendedArchive.heading}
              </h4>
              <p
                className={`mt-1 text-xs uppercase tracking-widest text-muted-foreground ${mono.className}`}
              >
                {t.extendedArchive.description.replace("{count}", String(otherProjects.length))}
              </p>
            </div>
            <Link
              href={getLocalizedPath("/other-projects", locale)}
              className={`group inline-flex shrink-0 items-center gap-3 border border-primary bg-primary px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-black transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(234,179,8,0.25)] ${mono.className}`}
            >
              <FolderKanban className="h-4 w-4" />
              <span>{t.extendedArchive.buttonText}</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="flex w-full flex-col items-center justify-center border border-border bg-card/60 p-8 py-20 text-center backdrop-blur-sm md:p-12 md:py-28">
            <div className="relative mb-6 flex h-20 w-20 items-center justify-center border border-dashed border-primary/40 bg-primary/5">
              <Target className="h-10 w-10 animate-pulse text-primary/70" />
            </div>
            <h3 className="mb-3 text-2xl font-extrabold uppercase tracking-tight text-white md:text-3xl">
              {t.noResults.heading}
            </h3>

            {searchQuery.trim() ? (
              <div className="max-w-xl space-y-2">
                <p
                  className={`text-xs uppercase tracking-widest leading-relaxed text-muted-foreground md:text-sm ${mono.className}`}
                >
                  {t.noResults.noMatch.replace("{query}", searchQuery)}
                </p>
                {matchingOtherProjectsCount > 0 ? (
                  <p
                    className={`text-xs uppercase tracking-widest text-secondary font-bold md:text-sm ${mono.className}`}
                  >
                    {t.noResults.matchingInOther
                      .replace("{count}", String(matchingOtherProjectsCount))
                      .replace(
                        "{recordsText}",
                        matchingOtherProjectsCount === 1
                          ? locale === "fr"
                            ? "dossier"
                            : locale === "es"
                            ? "registro"
                            : "record"
                          : locale === "fr"
                          ? "dossiers"
                          : locale === "es"
                          ? "registros"
                          : "records"
                      )}
                  </p>
                ) : (
                  <p
                    className={`text-xs uppercase tracking-widest text-muted-foreground/80 ${mono.className}`}
                  >
                    {t.noResults.checkBroader}
                  </p>
                )}
              </div>
            ) : (
              <p
                className={`max-w-md text-xs uppercase tracking-widest leading-relaxed text-muted-foreground md:text-sm ${mono.className}`}
              >
                {t.noResults.modifySearch}
              </p>
            )}

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={
                  searchQuery.trim()
                    ? getLocalizedPath(`/other-projects?search=${encodeURIComponent(searchQuery.trim())}`, locale)
                    : getLocalizedPath("/other-projects", locale)
                }
                className={`group inline-flex items-center gap-3 border border-primary bg-primary px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-black transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(234,179,8,0.25)] ${mono.className}`}
              >
                <FolderKanban className="h-4 w-4" />
                <span>
                  {searchQuery.trim() && matchingOtherProjectsCount > 0
                    ? t.noResults.viewInOther.replace("{count}", String(matchingOtherProjectsCount))
                    : t.noResults.displayOther}
                </span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveFilter(null);
                  setSaleFilter("all");
                }}
                className={`border border-border bg-card/80 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-muted-foreground transition-all hover:border-primary hover:text-primary ${mono.className}`}
              >
                {t.noResults.resetQuery}
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
