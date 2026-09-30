"use client";

import { useMemo } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Radar,
} from "lucide-react";
import { mono } from "@/lib/fonts";
import { projects } from "@/lib/projectData";

const PREVIEW_COUNT = 6;

const previewProjects = projects
  .filter((p) => p.type !== "subproject")
  .slice(0, PREVIEW_COUNT)
  .map((project) => ({
    ...project,
    previewImage:
      (project.sections.find((section: any) => section.image) as any)?.image ??
      project.image,
  }));

export function ProjectPreviewCarouselSection() {
  const forSaleCount = useMemo(
    () => previewProjects.filter((p) => p.isForSale).length,
    [],
  );

  return (
    <section className="relative z-10 border-y border-border bg-card/50 px-4 py-20 md:px-10 md:py-28 lg:px-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,229,255,0.08),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(255,176,0,0.1),transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div
              className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-primary ${mono.className}`}
            >
              <Radar className="h-4 w-4" /> FEATURED_PROJECTS
            </div>
            <h2 className="mt-4 text-3xl font-extrabold uppercase tracking-tighter leading-[0.88] md:text-5xl">
              Project
              <br />
              Portfolio
            </h2>
            <p
              className={`mt-4 max-w-lg text-xs uppercase tracking-[0.18em] leading-relaxed text-muted-foreground md:text-sm ${mono.className}`}
            >
              Active regions, available properties, and featured cartography
              from the Adamson Geomatics project archive.
            </p>
          </div>

          <Link
            href="/projects"
            className={`group inline-flex shrink-0 items-center gap-3 border border-primary bg-primary px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-black transition-all hover:bg-transparent hover:text-primary ${mono.className}`}
          >
            View All Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={`mb-8 flex items-center justify-between border-b border-border pb-3 text-[10px] uppercase tracking-[0.18em] text-[#555] ${mono.className}`}
        >
          <span>
            Showing {previewProjects.length} of{" "}
            {projects.filter((p) => p.type !== "subproject").length} Projects
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
            {forSaleCount} Available for Acquisition
          </span>
        </motion.div>

        {/* Project Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {previewProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Link
                href={`/projects/${project.id}`}
                aria-label={`View ${project.title}`}
                className="group relative block overflow-hidden border border-border bg-card transition-colors duration-500 hover:border-primary"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={project.previewImage}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Status Badge */}
                  <div className="absolute top-3 left-3">
                    <div
                      className={`px-2 py-1 text-[9px] font-bold uppercase tracking-widest ${
                        project.isForSale
                          ? "border border-secondary bg-secondary text-black shadow-[0_0_10px_var(--color-secondary)]"
                          : "border border-primary/60 bg-primary/20 text-primary backdrop-blur-sm"
                      } ${mono.className}`}
                    >
                      {project.isForSale ? "FOR SALE" : "ACTIVE"}
                    </div>
                  </div>

                  {/* Region */}
                  <div className="absolute right-3 bottom-3">
                    <div
                      className={`inline-flex items-center gap-1.5 border border-white/15 bg-black/60 px-2.5 py-1.5 text-[9px] uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm ${mono.className}`}
                    >
                      <MapPin className="h-3 w-3 text-primary" />
                      {project.region}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-extrabold uppercase tracking-tight leading-tight transition-colors group-hover:text-primary md:text-xl">
                    {project.title}
                  </h3>

                  <p
                    className={`mt-3 line-clamp-2 text-[10px] uppercase tracking-[0.14em] leading-relaxed text-muted-foreground md:text-xs ${mono.className}`}
                  >
                    {project.summary ||
                      "Open the project dossier for maps, highlights, and regional documentation."}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {(project.tags ?? []).slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className={`border border-border bg-background px-2 py-0.5 text-[9px] uppercase tracking-[0.14em] text-muted-foreground ${mono.className}`}
                      >
                        {tag}
                      </span>
                    ))}
                    {(project.tags?.length || 0) > 3 && (
                      <span
                        className={`border border-border px-2 py-0.5 text-[9px] uppercase tracking-widest text-[#555] ${mono.className}`}
                      >
                        +{(project.tags?.length || 0) - 3}
                      </span>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                    <span
                      className={`text-[9px] uppercase tracking-[0.2em] text-muted-foreground ${mono.className}`}
                    >
                      View Dossier
                    </span>
                    <div className="flex h-8 w-8 items-center justify-center border border-border text-muted-foreground transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-black">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col items-center justify-between gap-4 border border-border bg-background/60 p-5 backdrop-blur-sm sm:flex-row sm:p-6"
        >
          <p
            className={`text-[10px] uppercase tracking-[0.18em] text-muted-foreground md:text-xs ${mono.className}`}
          >
            Explore the complete project archive, spatial map view, and acquisition-ready properties.
          </p>
          <div className="flex shrink-0 gap-3">
            <Link
              href="/map"
              className={`inline-flex items-center gap-2 border border-border bg-card px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:border-primary hover:text-white md:text-xs ${mono.className}`}
            >
              <MapPin className="h-3.5 w-3.5 text-primary" />
              Map View
            </Link>
            <Link
              href="/projects?filter=for-sale"
              className={`inline-flex items-center gap-2 border border-secondary/50 bg-secondary/10 px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-secondary transition-colors hover:border-secondary hover:bg-secondary/20 md:text-xs ${mono.className}`}
            >
              For Sale
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
