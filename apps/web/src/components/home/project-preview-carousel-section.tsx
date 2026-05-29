"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Radar,
} from "lucide-react";
import { mono } from "@/lib/fonts";
import { projects } from "@/lib/projectData";

const previewProjects = projects.slice(0, 10).map((project) => ({
  ...project,
  previewImage:
    (project.sections.find((section: any) => section.image) as any)?.image ??
    project.image,
}));

export function ProjectPreviewCarouselSection() {
  const railRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const progressLabel = useMemo(
    () =>
      `${String(activeIndex + 1).padStart(2, "0")}/${String(previewProjects.length).padStart(2, "0")}`,
    [activeIndex],
  );

  const scrollRail = (direction: "previous" | "next") => {
    const nextIndex =
      direction === "next"
        ? (activeIndex + 1) % previewProjects.length
        : (activeIndex - 1 + previewProjects.length) % previewProjects.length;

    scrollToIndex(nextIndex);
  };

  const scrollToIndex = (index: number) => {
    const rail = railRef.current;
    const card = rail?.querySelectorAll<HTMLElement>("[data-project-card]")[
      index
    ];

    if (!rail || !card) {
      return;
    }

    rail.scrollTo({
      left:
        card.offsetLeft -
        Math.max((rail.clientWidth - card.offsetWidth) / 2, 0),
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const rail = railRef.current;

    if (!rail) {
      return;
    }

    const cards = Array.from(
      rail.querySelectorAll<HTMLElement>("[data-project-card]"),
    );

    if (cards.length === 0) {
      return;
    }

    const railCenter = rail.scrollLeft + rail.clientWidth / 2;
    let nextIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(cardCenter - railCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        nextIndex = index;
      }
    });

    setActiveIndex(nextIndex);
  };

  useEffect(() => {
    handleScroll();
  }, []);

  useEffect(() => {
    const rail = railRef.current;

    if (!rail) {
      return;
    }

    const interval = window.setInterval(() => {
      const nextIndex = (activeIndex + 1) % previewProjects.length;
      scrollToIndex(nextIndex);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="relative z-10 overflow-hidden border-y border-border bg-card px-4 py-24 md:px-10 md:py-32 lg:px-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,229,255,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,176,0,0.14),transparent_42%)]" />
      <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-linear-to-b from-transparent via-border to-transparent opacity-60" />

      <div className="relative mx-auto max-w-7xl border border-border bg-background/70 backdrop-blur-sm">
        <div className="grid gap-px overflow-hidden bg-border xl:grid-cols-[minmax(280px,0.88fr)_minmax(0,1.45fr)]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="bg-background p-6 md:p-8 xl:p-10"
          >
            <div
              className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-primary ${mono.className}`}
            >
              <Radar className="h-4 w-4" /> PORTFOLIO_SIGNAL
            </div>

            <h2 className="mt-5 text-4xl font-extrabold uppercase tracking-tighter leading-[0.88] md:text-6xl">
              Project
              <br />
              Preview Rail
            </h2>

            <p
              className={`mt-6 max-w-md text-xs uppercase tracking-[0.2em] leading-relaxed text-muted-foreground md:text-sm ${mono.className}`}
            >
              A fast scan of active regions, available properties, and featured
              cartography before you open each full dossier.
            </p>

            <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-3">
              {[
                {
                  label: "Visible Cards",
                  value: String(previewProjects.length).padStart(2, "0"),
                },
                {
                  label: "For Sale",
                  value: String(
                    previewProjects.filter((project) => project.isForSale)
                      .length,
                  ).padStart(2, "0"),
                },
                { label: "Scroll Position", value: progressLabel },
              ].map((item) => (
                <div key={item.label} className="bg-card px-4 py-4">
                  <div
                    className={`text-[9px] uppercase tracking-[0.22em] text-muted-foreground ${mono.className}`}
                  >
                    {item.label}
                  </div>
                  <div className="mt-2 text-2xl font-extrabold uppercase tracking-tight text-white">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 hidden flex-col gap-4 sm:flex-row xl:flex">
              <button
                type="button"
                onClick={() => scrollRail("previous")}
                className="inline-flex items-center justify-center gap-3 border border-border bg-card px-5 py-4 text-sm font-bold uppercase tracking-[0.18em] transition-colors hover:border-primary hover:text-white"
              >
                <ChevronLeft className="h-4 w-4 text-primary" /> Prev
              </button>
              <button
                type="button"
                onClick={() => scrollRail("next")}
                className="inline-flex items-center justify-center gap-3 border border-primary bg-primary px-5 py-4 text-sm font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-transparent hover:text-primary"
              >
                Next <ChevronRight className="h-4 w-4" />
              </button>{" "}
              {/* see all projects page button */}
              <Link
                href="/projects"
                className={`inline-flex items-center gap-2 text-[20px] font-bold uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-white ${mono.className}`}
              >
                See All Projects <ArrowRight className="h-4 w-4 text-primary" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="min-w-0 overflow-hidden bg-card px-0 py-6 md:py-8"
          >
            <div className="mb-5 flex items-center justify-between px-6 md:px-8">
              <div>
                <div
                  className={`text-[10px] uppercase tracking-[0.22em] text-primary ${mono.className}`}
                >
                  FEATURED_PROJECTS
                </div>
                <div className="mt-2 text-2xl font-extrabold uppercase tracking-tight">
                  Swipe Through Regions
                </div>
              </div>
              <Link
                href="/projects"
                className={`hidden items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-white md:inline-flex ${mono.className}`}
              >
                Open Full Archive{" "}
                <ArrowRight className="h-4 w-4 text-primary" />
              </Link>
            </div>

            <div
              ref={railRef}
              onScroll={handleScroll}
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:gap-5 md:px-8"
            >
              {previewProjects.map((project, index) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.id}`}
                  data-project-card
                  className="group relative block w-[84vw] max-w-[22rem] shrink-0 snap-center overflow-hidden border border-border bg-black sm:w-[24rem] sm:max-w-none lg:w-[28rem]"
                >
                  <motion.article
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.35, delay: index * 0.04 }}
                    className="relative min-h-[28rem]"
                  >
                    <img
                      src={project.previewImage}
                      alt={project.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/25 to-black" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:2.75rem_2.75rem] opacity-25" />

                    <div className="relative flex min-h-[28rem] flex-col justify-between p-5 md:p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div
                          className={`border border-white/20 bg-black/55 px-3 py-2 text-[9px] uppercase tracking-[0.24em] text-white backdrop-blur-sm ${mono.className}`}
                        >
                          {String(index + 1).padStart(2, "0")}_SECTOR
                        </div>
                        {project.isForSale && (
                          <div
                            className={`border border-secondary bg-secondary/15 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.24em] text-secondary backdrop-blur-sm ${mono.className}`}
                          >
                            AVAILABLE
                          </div>
                        )}
                      </div>

                      <div>
                        <div
                          className={`mb-4 inline-flex items-center gap-2 border border-white/15 bg-black/55 px-3 py-2 text-[9px] uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm ${mono.className}`}
                        >
                          <MapPin className="h-3.5 w-3.5 text-primary" />{" "}
                          {project.region}
                        </div>

                        <h3 className="max-w-[16rem] text-2xl font-extrabold uppercase tracking-tight text-white sm:max-w-[18rem] md:max-w-[22rem] md:text-4xl">
                          {project.title}
                        </h3>

                        <p
                          className={`mt-4 max-w-[28rem] text-[10px] uppercase tracking-[0.14em] leading-relaxed text-white/78 md:text-xs md:tracking-[0.18em] ${mono.className}`}
                        >
                          {project.summary ||
                            "Open the project dossier for maps, highlights, and regional documentation."}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {(project.tags ?? []).slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className={`border border-white/15 bg-black/50 px-2 py-1 text-[9px] uppercase tracking-[0.18em] text-white/75 backdrop-blur-sm ${mono.className}`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="mt-8 flex items-center justify-between border-t border-white/15 pt-4 text-white">
                          <div>
                            <div
                              className={`text-[9px] uppercase tracking-[0.22em] text-white/45 ${mono.className}`}
                            >
                              Drill Into File
                            </div>
                            <div className="mt-1 text-sm font-bold uppercase tracking-wide">
                              Open Project Details
                            </div>
                          </div>
                          <div className="flex h-12 w-12 items-center justify-center border border-primary bg-primary/10 transition-colors group-hover:bg-primary group-hover:text-black">
                            <ArrowRight className="h-5 w-5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </div>

            <div className="mt-2 flex flex-col gap-3 px-6 xl:hidden md:px-8">
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => scrollRail("previous")}
                  className="inline-flex flex-1 items-center justify-center gap-3 border border-border bg-card px-5 py-4 text-sm font-bold uppercase tracking-[0.18em] transition-colors hover:border-primary hover:text-white"
                >
                  <ChevronLeft className="h-4 w-4 text-primary" /> Prev
                </button>
                <button
                  type="button"
                  onClick={() => scrollRail("next")}
                  className="inline-flex flex-1 items-center justify-center gap-3 border border-primary bg-primary px-5 py-4 text-sm font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-transparent hover:text-primary"
                >
                  Next <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between px-6 md:px-8">
              <div className="flex max-w-[65vw] flex-wrap items-center gap-2 md:max-w-none">
                {previewProjects.map((project, index) => (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => scrollToIndex(index)}
                    aria-label={`Go to ${project.title}`}
                    className={`h-2.5 transition-all ${index === activeIndex ? "w-8 bg-primary" : "w-2.5 bg-border hover:bg-white/50"}`}
                  />
                ))}
              </div>

              <Link
                href="/projects"
                className={`inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-white md:hidden ${mono.className}`}
              >
                View Archive <ArrowRight className="h-4 w-4 text-primary" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
