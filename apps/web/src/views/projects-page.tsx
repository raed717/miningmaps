"use client";

import { useState } from "react";
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
} from "lucide-react";
import { inter, mono } from "@/lib/fonts";
import { projects } from "@/lib/projectData";
import { PartnerNoticeRotator } from "@/components/partner-notice-rotator";

type ProjectsPageProps = {
  showOnlyForSale?: boolean;
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

export default function ProjectsPage({ showOnlyForSale = false }: ProjectsPageProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const staticTags = ["Gold", "Silver", "Copper", "Platinum", "Cobalt", "Nickel"];

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
      (project.tags || []).some((t) => t.toLowerCase().includes(query)) ||
      subs.some(
        (sub) =>
          sub!.title.toLowerCase().includes(query) ||
          sub!.summary.toLowerCase().includes(query) ||
          sub!.region.toLowerCase().includes(query) ||
          (sub!.tags || []).some((t) => t.toLowerCase().includes(query))
      );

    const matchesFilter = activeFilter
      ? project.tags?.includes(activeFilter) ||
        subs.some((sub) => sub!.tags?.includes(activeFilter))
      : true;
    const matchesSaleState = showOnlyForSale ? project.isForSale : true;

    return matchesSearch && matchesFilter && matchesSaleState;
  });

  return (
    <div
      className={`min-h-screen w-full bg-background text-foreground selection:bg-primary selection:text-white ${inter.className}`}
    >
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-overlay"
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
                {showOnlyForSale ? "PROPERTY_REGISTRY" : "ASSET DATABASE"}
              </div>
              <h1 className="text-3xl font-extrabold uppercase tracking-tighter leading-[0.88] md:text-5xl xl:text-6xl">
                {showOnlyForSale ? (
                  <>
                    Available
                    <br />
                    Properties
                  </>
                ) : (
                  <>
                    Project
                    <br />
                    Portfolio
                  </>
                )}
              </h1>

              <Link
                href="/map"
                className="group mt-5 inline-flex items-center gap-3 border border-primary/40 bg-card/70 px-4 py-3 backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/10"
              >
                <div className="flex h-9 w-9 items-center justify-center border border-primary/40 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-black">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <div
                    className={`text-[10px] uppercase tracking-[0.22em] text-primary ${mono.className}`}
                  >
                    Spatial Access
                  </div>
                  <div className="mt-1 text-xs font-extrabold uppercase tracking-[0.18em] text-white md:text-sm">
                    View on Map
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
              </Link>
              <Link
                href="/other-projects"
                className="group mt-5 inline-flex items-center gap-3 border border-primary/40 bg-card/70 px-4 py-3 backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/10"
              >
                <div className="flex h-9 w-9 items-center justify-center border border-primary/40 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-black">
                  <FolderKanban className="h-4 w-4" />
                </div>
                <div>
                  <div className="mt-1 text-xs font-extrabold uppercase tracking-[0.18em] text-white md:text-sm">
                    More Projects
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
              </Link>
            </div>
            {showOnlyForSale ? (
              <div
                className={`max-w-md border border-primary/30 bg-card/80 p-4 backdrop-blur-sm text-xs uppercase tracking-[0.18em] leading-relaxed text-zinc-100 md:text-sm ${mono.className}`}
              >
                Live acquisition-ready mineral properties filtered from the
                wider Adamson Geomatics project archive.
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
              placeholder="SEARCH ASSETS / REGIONS / IDS..."
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

          <div className="flex flex-wrap gap-2 lg:w-2/3 lg:justify-end">
            <button
              onClick={() => setActiveFilter(null)}
              className={`px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] transition-all md:px-4 md:text-xs ${mono.className} ${
                activeFilter === null
                  ? "border-primary bg-primary text-black"
                  : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary"
              } border`}
            >
              ALL
            </button>
            {staticTags.map((tag) => (
              <button
                key={tag}
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
          </div>
        </section>

        <div
          className={`mb-6 flex justify-between border-b border-border pb-3 text-[10px] tracking-[0.18em] uppercase text-[#666] md:text-xs ${mono.className}`}
        >
          <span>Displaying {filteredProjects.length} Records</span>
          <span>
            SYSTEM STATUS: {filteredProjects.length > 0 ? "ONLINE" : "NO_MATCH"}
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
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="group relative block h-full overflow-hidden border border-accent bg-card transition-colors duration-500 hover:border-primary">
                  <Link
                    href={`/projects/${project.id}`}
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
                      className="h-full w-full object-cover opacity-60 mix-blend-luminosity transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:mix-blend-normal"
                    />
                    <div className="absolute top-4 left-4">
                      <div
                        className={`px-2 py-1 text-[9px] font-bold tracking-widest uppercase ${
                          project.isForSale
                            ? "border border-secondary bg-secondary text-black shadow-[0_0_10px_var(--color-secondary)]"
                            : "border border-gold-500 bg-yellow-500 text-black shadow-[0_0_10px_#22c55e]"
                        } ${mono.className}`}
                      >
                        {project.isForSale
                          ? "AVAILABLE FOR ACQUISITION"
                          : "ACQUIRED"}
                      </div>
                    </div>
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(255,255,255,0.05)_50%)] bg-[length:100%_4px] mix-blend-overlay" />
                  </div>

                  <div className="relative z-10 flex grow flex-col bg-card p-6">
                    <h3 className="mb-4 text-2xl font-extrabold uppercase tracking-tight leading-none transition-colors group-hover:text-primary">
                      {highlightMatch(project.title, searchQuery)}
                    </h3>

                    <p
                      className={`mb-6 text-sm uppercase leading-relaxed text-muted-foreground ${mono.className}`}
                    >
                      {highlightMatch(project.summary, searchQuery)}
                    </p>

                    {project.subProjectIds &&
                      project.subProjectIds.length > 0 && (
                        <div className="relative z-20 mb-6 border-l-2 border-primary/30 pl-4">
                          <span
                            className={`mb-2 block text-[9px] uppercase tracking-[0.2em] text-primary ${mono.className}`}
                          >
                            CLIENT PROJECTS
                          </span>
                          <ul className="space-y-1.5">
                            {project.subProjectIds.map((subId) => {
                              const sub = projects.find((p) => p.id === subId);
                              if (!sub) return null;
                              return (
                                <li key={subId}>
                                  <Link
                                    href={`/projects/${subId}`}
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
                      <div className="flex h-10 w-10 items-center justify-center border border-border text-muted-foreground transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-black">
                        <ArrowUpRight className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="flex w-full flex-col items-center justify-center border border-border bg-card py-32 text-center">
            <Target className="mb-6 h-16 w-16 animate-pulse text-[#555]" />
            <h3 className="mb-2 text-2xl font-bold uppercase tracking-tighter text-muted-foreground">
              No Records Found
            </h3>
            <p
              className={`text-sm uppercase tracking-widest text-[#555] ${mono.className}`}
            >
              Modify search parameters or clear active filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveFilter(null);
              }}
              className={`mt-8 border border-primary px-6 py-3 text-xs font-bold uppercase tracking-widest text-primary transition-colors hover:bg-primary hover:text-black ${mono.className}`}
            >
              RESET_QUERY
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
