"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  Search,
  SlidersHorizontal,
  MapPin,
  Target,
  ChevronDown,
  ChevronUp,
  X,
  Layers,
  FileText,
} from "lucide-react";
import { inter, mono } from "@/lib/fonts";
import {
  otherProjects,
  getCommodityCategory,
  commodityCategories,
  type OtherProject,
} from "@/lib/otherProjectsData";
import { ProjectDetailModal } from "@/components/ProjectDetailModal";

const priorityLevels = [1, 2, 3] as const;

type SortKey = "Priority" | "Total_Area_ha" | "Tenure_Count" | "Group Name" | "Map Number";

export default function OtherProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activePriority, setActivePriority] = useState<number | null>(null);
  const [activeCommodity, setActiveCommodity] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [sortKey, setSortKey] = useState<SortKey>("Priority");
  const [sortAsc, setSortAsc] = useState(true);
  const [showFilters, setShowFilters] = useState(true);
  const [selectedProject, setSelectedProject] = useState<OtherProject | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const q = params.get("search") || params.get("q");
      if (q) {
        setSearchQuery(q);
      }
    }
  }, []);

  const statuses = useMemo(() => {
    const s = new Set(otherProjects.map((p) => p.Status).filter(Boolean));
    return Array.from(s).sort();
  }, []);

  const filtered = useMemo(() => {
    let list = [...otherProjects];

    // Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p["Group Name"].toLowerCase().includes(q) ||
          p["Map Number"].toLowerCase().includes(q) ||
          p["Commodity / Theme"].toLowerCase().includes(q) ||
          p["Brief Project Summary"].toLowerCase().includes(q) ||
          p.Titles.toLowerCase().includes(q)
      );
    }

    // Priority
    if (activePriority !== null) {
      list = list.filter((p) => p.Priority === activePriority);
    }

    // Commodity
    if (activeCommodity) {
      list = list.filter((p) => getCommodityCategory(p["Commodity / Theme"]) === activeCommodity);
    }

    // Status
    if (statusFilter) {
      list = list.filter((p) => p.Status === statusFilter);
    }

    // Sort
    list.sort((a, b) => {
      let cmp = 0;
      switch (sortKey) {
        case "Priority":
          cmp = a.Priority - b.Priority;
          break;
        case "Total_Area_ha":
          cmp = a.Total_Area_ha - b.Total_Area_ha;
          break;
        case "Tenure_Count":
          cmp = a.Tenure_Count - b.Tenure_Count;
          break;
        case "Group Name":
          cmp = a["Group Name"].localeCompare(b["Group Name"]);
          break;
        case "Map Number":
          cmp = a["Map Number"].localeCompare(b["Map Number"]);
          break;
      }
      return sortAsc ? cmp : -cmp;
    });

    return list;
  }, [searchQuery, activePriority, activeCommodity, statusFilter, sortKey, sortAsc]);

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(key);
      setSortAsc(true);
    }
  };

  const totalHa = filtered.reduce((sum, p) => sum + p.Total_Area_ha, 0);

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

      <main className="relative z-10 mx-auto max-w-[90rem] px-4 py-12 md:px-10 md:py-16">
        {/* Back link */}
        <div className="mb-6">
          <Link
            href="/projects"
            className={`group inline-flex items-center gap-2 border border-border bg-card/70 px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-muted-foreground backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/10 hover:text-primary ${mono.className}`}
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Back to Main Projects</span>
          </Link>
        </div>

        {/* Header */}
        <header className="mb-8 border-b border-border pb-8 md:mb-10 md:pb-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div
                className={`mb-3 flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-primary ${mono.className}`}
              >
                <Layers className="h-3 w-3" />
                TENURE_REGISTRY
              </div>
              <h1 className="text-3xl font-extrabold uppercase tracking-tighter leading-[0.88] md:text-5xl xl:text-6xl">
                Mineral
                <br />
                <span className="text-primary">Claim Portfolio</span>
              </h1>
              <p
                className={`mt-4 max-w-2xl text-xs uppercase tracking-[0.18em] leading-relaxed text-muted-foreground md:text-sm ${mono.className}`}
              >
                Complete inventory of {otherProjects.length} mineral tenures across British Columbia —
                priority-ranked, commodity-tagged, and ready for due diligence.
              </p>
              <p
                className={`mt-2 flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-primary/80 ${mono.className}`}
              >
                <FileText className="h-3 w-3" />
                QP Geological report available on request.
              </p>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-6 grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-4">
            {[
              { label: "Total Claims", value: otherProjects.length },
              { label: "Total Hectares", value: `${totalHa.toLocaleString()} ha` },
              { label: "Priority 1", value: otherProjects.filter((p) => p.Priority === 1).length },
              { label: "NTS Mapsheets", value: new Set(otherProjects.map((p) => p["Map Number"])).size },
            ].map((stat) => (
              <div key={stat.label} className="bg-background px-4 py-3 md:px-6 md:py-4">
                <div
                  className={`text-[9px] uppercase tracking-[0.2em] text-muted-foreground ${mono.className}`}
                >
                  {stat.label}
                </div>
                <div className="mt-1 text-lg font-extrabold text-white md:text-2xl">{stat.value}</div>
              </div>
            ))}
          </div>
        </header>

        {/* Controls bar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="relative w-full md:w-80">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <Search className="h-4 w-4 text-primary" />
            </div>
            <input
              type="text"
              placeholder="SEARCH NAME / MAP / COMMODITY / TITLE..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full border border-border bg-card py-3 pr-4 pl-11 text-xs tracking-[0.18em] text-white uppercase placeholder-[#555] transition-all focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none md:text-sm ${mono.className}`}
            />
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`inline-flex items-center gap-2 border px-4 py-2.5 text-xs font-bold uppercase tracking-widest transition-all ${mono.className} ${
              showFilters
                ? "border-primary bg-primary text-black"
                : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary"
            }`}
          >
            <SlidersHorizontal className="h-3.5 w-3.5" />
            Filters
            {(activePriority !== null || activeCommodity || statusFilter) && (
              <span className="ml-1 flex h-4 w-4 items-center justify-center rounded-full bg-secondary text-[8px] font-bold text-black">
                {[activePriority, activeCommodity, statusFilter].filter(Boolean).length}
              </span>
            )}
          </button>
        </div>

        {/* Filter panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="mb-6 border border-border bg-card p-5 md:p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-[0.22em] text-primary ${mono.className}`}
                  >
                    Filter Controls
                  </span>
                  <button
                    onClick={() => {
                      setActivePriority(null);
                      setActiveCommodity(null);
                      setStatusFilter(null);
                    }}
                    className={`inline-flex items-center gap-1 text-[9px] uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors ${mono.className}`}
                  >
                    <X className="h-3 w-3" /> Clear All
                  </button>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  {/* Priority */}
                  <div>
                    <span
                      className={`block mb-2 text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground ${mono.className}`}
                    >
                      Priority
                    </span>
                    <div className="flex gap-2">
                      {priorityLevels.map((p) => (
                        <button
                          key={p}
                          onClick={() => setActivePriority(activePriority === p ? null : p)}
                          className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border transition-all ${mono.className} ${
                            activePriority === p
                              ? "border-primary bg-primary text-black"
                              : "border-border bg-background text-muted-foreground hover:border-primary hover:text-primary"
                          }`}
                        >
                          P{p}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Commodity */}
                  <div>
                    <span
                      className={`block mb-2 text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground ${mono.className}`}
                    >
                      Commodity
                    </span>
                    <select
                      value={activeCommodity ?? ""}
                      onChange={(e) => setActiveCommodity(e.target.value || null)}
                      className={`w-full border border-border bg-background px-3 py-2 text-xs uppercase tracking-widest text-foreground focus:border-primary focus:outline-none ${mono.className}`}
                    >
                      <option value="">All Commodities</option>
                      {commodityCategories.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Status */}
                  <div>
                    <span
                      className={`block mb-2 text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground ${mono.className}`}
                    >
                      Status
                    </span>
                    <select
                      value={statusFilter ?? ""}
                      onChange={(e) => setStatusFilter(e.target.value || null)}
                      className={`w-full border border-border bg-background px-3 py-2 text-xs uppercase tracking-widest text-foreground focus:border-primary focus:outline-none ${mono.className}`}
                    >
                      <option value="">All Statuses</option>
                      {statuses.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results count + sort */}
        <div
          className={`mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-border pb-3 text-[10px] uppercase tracking-[0.18em] text-[#666] md:text-xs ${mono.className}`}
        >
          <span>Displaying {filtered.length} of {otherProjects.length} Records</span>

          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[9px] text-muted-foreground">SORT:</span>
            {[
              { key: "Priority" as SortKey, label: "Priority" },
              { key: "Group Name" as SortKey, label: "Name" },
              { key: "Map Number" as SortKey, label: "Mapsheet" },
              { key: "Total_Area_ha" as SortKey, label: "Area" },
              { key: "Tenure_Count" as SortKey, label: "Tenures" },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => toggleSort(key)}
                className={`inline-flex items-center gap-1 transition-colors hover:text-primary ${
                  sortKey === key ? "text-primary" : "text-[#666]"
                }`}
              >
                {label}
                {sortKey === key && (
                  sortAsc ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto border border-border">
          <table className="w-full border-collapse text-xs md:text-sm">
            <thead>
              <tr className={`border-b border-border bg-card text-[9px] uppercase tracking-widest text-muted-foreground md:text-[10px] ${mono.className}`}>
                <th className="px-3 py-3 text-left md:px-4">Priority</th>
                <th className="px-3 py-3 text-left md:px-4">Group Name</th>
                <th className="hidden px-3 py-3 text-left md:table-cell md:px-4">Map</th>
                <th className="hidden px-3 py-3 text-right md:table-cell md:px-4">Tenures</th>
                <th className="hidden px-3 py-3 text-right md:table-cell md:px-4">Area (ha)</th>
                <th className="hidden px-3 py-3 text-left lg:table-cell md:px-4">Commodity / Theme</th>
                <th className="hidden px-3 py-3 text-left lg:table-cell md:px-4">Status</th>
                <th className="px-3 py-3 text-center md:px-4">Detail</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence mode="popLayout">
                {filtered.map((project, index) => (
                  <motion.tr
                    key={project["Group Name"] + project["Map Number"] + project.Titles}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.015 }}
                    className="border-b border-border/50 transition-colors hover:bg-card/80"
                  >
                    <td className="px-3 py-3 md:px-4">
                      <span
                        className={`inline-flex items-center justify-center border px-2 py-0.5 text-[10px] font-bold ${
                          project.Priority === 1
                            ? "border-primary/60 bg-primary/10 text-primary"
                            : project.Priority === 2
                            ? "border-secondary/40 bg-secondary/10 text-secondary"
                            : "border-muted-foreground/30 bg-muted/20 text-muted-foreground"
                        } ${mono.className}`}
                      >
                        P{project.Priority}
                      </span>
                    </td>
                    <td className="px-3 py-3 font-bold text-white md:px-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3 w-3 shrink-0 text-primary/60" />
                        <span className="truncate max-w-[200px] md:max-w-none">
                          {project["Group Name"]}
                        </span>
                      </div>
                    </td>
                    <td className="hidden px-3 py-3 md:table-cell md:px-4">
                      <span className={`text-muted-foreground ${mono.className}`}>
                        {project["Map Number"]}
                      </span>
                    </td>
                    <td className="hidden px-3 py-3 text-right md:table-cell md:px-4">
                      <span className={`font-bold ${mono.className}`}>
                        {project.Tenure_Count}
                      </span>
                    </td>
                    <td className="hidden px-3 py-3 text-right md:table-cell md:px-4">
                      <span className={`font-bold ${mono.className}`}>
                        {project.Total_Area_ha.toLocaleString()}
                      </span>
                    </td>
                    <td className="hidden px-3 py-3 lg:table-cell md:px-4">
                      <span className={`text-[10px] uppercase tracking-wider text-muted-foreground ${mono.className}`}>
                        {project["Commodity / Theme"]}
                      </span>
                    </td>
                    <td className="hidden px-3 py-3 lg:table-cell md:px-4">
                      {project.Status ? (
                        <span
                          className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest ${
                            project.Status === "GOOD"
                              ? "text-secondary"
                              : "text-muted-foreground"
                          } ${mono.className}`}
                        >
                          <span
                            className={`inline-block h-1.5 w-1.5 rounded-full ${
                              project.Status === "GOOD" ? "bg-secondary shadow-[0_0_6px_var(--color-secondary)]" : "bg-[#555]"
                            }`}
                          />
                          {project.Status}
                        </span>
                      ) : (
                        <span className={`text-[10px] text-[#555] ${mono.className}`}>—</span>
                      )}
                    </td>
                    <td className="px-3 py-3 text-center md:px-4">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1 text-primary transition-colors hover:text-secondary"
                      >
                        <FileText className="h-3.5 w-3.5" />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>

        {/* Project detail modal */}
        <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />

        {/* Empty state */}
        {filtered.length === 0 && (
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
                setActivePriority(null);
                setActiveCommodity(null);
                setStatusFilter(null);
              }}
              className={`mt-8 border border-primary px-6 py-3 text-xs font-bold uppercase tracking-widest text-primary transition-colors hover:bg-primary hover:text-black ${mono.className}`}
            >
              RESET_QUERY
            </button>
          </div>
        )}

        {/* Footer stat & bottom navigation */}
        <div
          className={`mt-10 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 md:flex-row md:items-center text-[9px] uppercase tracking-[0.2em] text-muted-foreground ${mono.className}`}
        >
          <div>
            Total area displayed: {filtered.reduce((s, p) => s + p.Total_Area_ha, 0).toLocaleString()} hectares
            &middot; {filtered.reduce((s, p) => s + p.Tenure_Count, 0)} individual tenures
          </div>

          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 border border-border bg-card/60 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
          >
            <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
            <span>Back to Main Projects</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
