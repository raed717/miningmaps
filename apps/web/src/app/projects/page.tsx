"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ArrowUpRight, MapPin, Search, Cpu, Database, Activity, Target } from "lucide-react";
import { projects } from "@/lib/projectData";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700", "800"] });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  // Derive unique tags from all projects
  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags || [])));

  // Filter projects based on search query and active filter
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.region.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter = activeFilter ? project.tags?.includes(activeFilter) : true;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className={`min-h-screen w-full bg-background text-foreground selection:bg-primary selection:text-white ${inter.className}`}>
      
      {/* GLOBAL NOISE TEXTURE & GRID */}
      <div 
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_80%_80%_at_50%_0%,#000_40%,transparent_100%)]" />

      <main className="relative z-10 mx-auto max-w-400 px-4 py-24 md:px-12">
        
        {/* HEADER SECTION */}
        <header className="mb-16 border-b border-border pb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <div className={`text-primary font-bold tracking-[0.2em] text-xs mb-4 flex items-center gap-2 ${mono.className}`}>
                <Database className="h-4 w-4" /> ASSET_DATABASE
              </div>
              <h1 className="text-5xl md:text-8xl font-extrabold uppercase tracking-tighter leading-[0.85]">
                Project<br/>Portfolio
              </h1>
            </div>
            <div className={`max-w-md text-muted-foreground text-sm uppercase tracking-widest leading-relaxed ${mono.className}`}>
              Exploring a selection of mapping projects, right-of-way planning, and mineral exploration intel extracted by Adamson Geomatics.
            </div>
          </div>
        </header>

        {/* CONTROLS SECTION */}
        <section className="mb-16 flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center">
          
          {/* Search Bar */}
          <div className="relative w-full lg:w-1/3">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-primary" />
            </div>
            <input
              type="text"
              placeholder="SEARCH ASSETS / REGIONS / IDS..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full bg-card border border-border py-4 pl-12 pr-4 text-sm text-white placeholder-[#555] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all uppercase tracking-widest ${mono.className}`}
            />
            {searchQuery && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <Activity className="h-4 w-4 text-secondary animate-pulse" />
              </div>
            )}
          </div>

          {/* Filter Tags */}
          <div className="flex flex-wrap gap-2 lg:w-2/3 lg:justify-end">
            <button
              onClick={() => setActiveFilter(null)}
              className={`px-4 py-2 border text-xs font-bold uppercase tracking-widest transition-all ${mono.className} ${
                activeFilter === null 
                  ? "border-primary bg-primary text-black" 
                  : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              ALL
            </button>
            {allTags.slice(0, 5).map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag === activeFilter ? null : tag)}
                className={`px-4 py-2 border text-xs font-bold uppercase tracking-widest transition-all ${mono.className} ${
                  activeFilter === tag 
                    ? "border-secondary bg-secondary text-black" 
                    : "border-border bg-card text-muted-foreground hover:border-secondary hover:text-secondary"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </section>

        {/* RESULTS METRICS */}
        <div className={`mb-8 flex justify-between text-xs tracking-widest uppercase border-b border-border pb-4 text-[#666] ${mono.className}`}>
          <span>Displaying {filteredProjects.length} Records</span>
          <span>SYSTEM_STATUS: {filteredProjects.length > 0 ? "ONLINE" : "NO_MATCH"}</span>
        </div>

        {/* GRID SECTION */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link href={`/projects/${project.id}`} className="group block relative h-full border border-accent bg-card hover:border-primary transition-colors duration-500 overflow-hidden flex-col">
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-30 transition-opacity">
                    <Cpu className="h-24 w-24" />
                  </div>
                  
                  {/* ID & Region Strip */}
                  <div className={`flex justify-between items-center p-4 border-b border-accent bg-background text-[10px] font-bold tracking-widest uppercase ${mono.className}`}>
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Target className="h-3 w-3" />
                      ID_{project.id}
                    </span>
                    <span className="text-primary flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {project.region}
                    </span>
                  </div>

                  {/* Image Container */}
                  <div className="relative aspect-4/3 w-full overflow-hidden bg-black border-b border-accent">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                    {project.isForSale && (
                      <div className="absolute top-4 left-4">
                        <div className={`px-2 py-1 bg-secondary text-black text-[9px] font-bold tracking-widest uppercase border border-secondary ${mono.className} shadow-[0_0_10px_var(--color-secondary)]`}>
                          AVAILABLE_FOR_ACQUISITION
                        </div>
                      </div>
                    )}
                    
                    {/* Scanning Line overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(255,255,255,0.05)_50%)] bg-size-[100%_4px] mix-blend-overlay pointer-events-none" />
                  </div>

                  {/* Content Body */}
                  <div className="p-6 flex flex-col grow relative z-10 bg-card">
                    <h3 className="mb-4 text-2xl font-extrabold uppercase tracking-tight leading-none group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className={`mb-8 text-sm text-muted-foreground leading-relaxed uppercase ${mono.className}`}>
                      {project.summary}
                    </p>

                    <div className="mt-auto pt-4 border-t border-accent flex items-center justify-between">
                      <div className="flex gap-2">
                        {project.tags?.slice(0, 2).map(tag => (
                          <span key={tag} className={`text-[9px] uppercase tracking-widest border border-border px-2 py-1 text-[#666] ${mono.className}`}>
                            {tag}
                          </span>
                        ))}
                        {(project.tags?.length || 0) > 2 && (
                          <span className={`text-[9px] uppercase tracking-widest border border-border px-2 py-1 text-[#666] ${mono.className}`}>
                            +{(project.tags?.length || 0) - 2}
                          </span>
                        )}
                      </div>
                      <div className="h-10 w-10 border border-border flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all">
                        <ArrowUpRight className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* EMPTY STATE */}
        {filteredProjects.length === 0 && (
          <div className="w-full py-32 flex flex-col items-center justify-center text-center border border-border bg-card">
            <Target className="h-16 w-16 text-[#555] mb-6 animate-pulse" />
            <h3 className="text-2xl font-bold uppercase tracking-tighter mb-2 text-muted-foreground">No Records Found</h3>
            <p className={`text-[#555] text-sm uppercase tracking-widest ${mono.className}`}>
              Modify search parameters or clear active filters.
            </p>
            <button 
              onClick={() => { setSearchQuery(""); setActiveFilter(null); }}
              className={`mt-8 px-6 py-3 border border-primary text-primary text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-black transition-colors ${mono.className}`}
            >
              RESET_QUERY
            </button>
          </div>
        )}

      </main>
    </div>
  );
}
