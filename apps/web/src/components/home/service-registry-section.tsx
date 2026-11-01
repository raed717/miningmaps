import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Crosshair,
  FileText,
  Mountain,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";
import { mono } from "@/lib/fonts";
import { useI18n } from "@/lib/i18n/context";
import { homeTranslations } from "@/lib/i18n/translations/home";
import { servicesTranslations } from "@/lib/i18n/translations/services";
import { getLocalizedPath } from "@/lib/i18n/navigation";

const serviceIcons = [ShieldCheck, BriefcaseBusiness, Crosshair, FileText, Mountain];
const serviceAccentColors = [
  "var(--color-primary)",
  "var(--color-secondary)",
  "var(--color-chart-3)",
  "var(--color-chart-4)",
  "var(--color-chart-5)",
];

export function ServiceRegistrySection() {
  const { locale } = useI18n();
  const tHome = (homeTranslations[locale] || homeTranslations.en).serviceRegistry;
  const tServices = servicesTranslations[locale] || servicesTranslations.en;
  const modules = tServices.modules;

  const [leftExpanded, setLeftExpanded] = useState(false);
  const [middleExpanded, setMiddleExpanded] = useState(false);
  const [rightExpanded, setRightExpanded] = useState(false);

  const serviceFeed = useMemo(
    () =>
      modules.flatMap((module, moduleIndex) =>
        module.services.map((service, serviceIndex) => ({
          moduleId: module.id,
          moduleCode: module.code,
          moduleTitle: module.title,
          service,
          accentColor: serviceAccentColors[moduleIndex % serviceAccentColors.length],
          rowId: `${module.id}-${serviceIndex}`,
        })),
      ),
    [modules],
  );

  const outputFeed = useMemo(
    () => Array.from(new Set(modules.flatMap((module) => module.deliverables))),
    [modules],
  );

  const metrics = useMemo(() => {
    return {
      moduleCount: modules.length,
      serviceLineCount: modules.reduce((total, m) => total + m.services.length, 0),
      deliverableCount: outputFeed.length,
    };
  }, [modules, outputFeed]);

  return (
    <section className="relative z-10 overflow-hidden bg-card px-4 py-24 md:px-12 md:py-40 lg:px-24">
      <div className="absolute top-0 left-0 h-px w-full bg-linear-to-r from-transparent via-primary to-transparent opacity-60" />
      <div className="absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle_at_top_right,rgb(255,215,0),transparent_55%)] opacity-60" />

      <div className="relative border border-border bg-background/70 backdrop-blur-sm">
        {/* Columns stretch to equal height */}
        <div className="grid gap-px bg-border xl:grid-cols-[minmax(280px,0.9fr)_minmax(0,1.35fr)_minmax(260px,0.75fr)]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="bg-background p-6 md:p-8 xl:p-10"
          >
            <div
              className={`relative overflow-hidden ${!leftExpanded ? "max-h-[26rem] xl:max-h-[calc(54rem-5rem)] xl:overflow-y-auto xl:scrollbar-thin" : ""}`}
            >
              <div
                className={`mb-4 flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-primary ${mono.className}`}
              >
                <ShieldAlert className="h-4 w-4" /> {tHome.badge}
              </div>
              <h2 className="text-5xl font-extrabold uppercase tracking-tighter leading-[0.85] md:text-7xl xl:text-8xl">
                {tHome.title}
                <br />
                {tHome.titleHighlight}
              </h2>
              <p
                className={`mt-8 text-sm uppercase tracking-widest leading-relaxed text-muted-foreground ${mono.className}`}
              >
                {tHome.description}
              </p>

              <div className="mt-10 grid gap-px border border-border bg-border">
                {modules.map((module, index) => {
                  const Icon = serviceIcons[index % serviceIcons.length];
                  const accentColor =
                    serviceAccentColors[index % serviceAccentColors.length];

                  return (
                    <Link
                      key={module.id}
                      href={getLocalizedPath(`/services#${module.id}`, locale)}
                      aria-label={`View ${module.title} service specifications`}
                      className="group bg-card px-4 py-4 transition-colors hover:bg-background"
                    >
                      <div
                        className={`flex items-center justify-between gap-3 text-[10px] uppercase tracking-[0.22em] ${mono.className}`}
                      >
                        <span style={{ color: accentColor }}>{module.code}</span>
                        <Icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-white" />
                      </div>
                      <div className="mt-3 text-lg font-extrabold uppercase tracking-tight leading-none">
                        {module.title}
                      </div>
                      <div
                        className={`mt-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground ${mono.className}`}
                      >
                        {String(module.services.length).padStart(2, "0")}{tServices.modulesSection.linesSuffix}
                      </div>
                    </Link>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={getLocalizedPath("/services", locale)}
                  className="group inline-flex items-center justify-between gap-4 border border-primary bg-primary px-5 py-4 text-black transition-colors hover:bg-transparent hover:text-primary"
                >
                  <span className="text-xs font-bold uppercase tracking-widest font-mono">
                    {tHome.buttonReview}
                  </span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              {!leftExpanded && (
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none xl:hidden" />
              )}
            </div>

            <button
              type="button"
              onClick={() => setLeftExpanded(!leftExpanded)}
              className={`mt-4 flex w-full items-center justify-center gap-2 border border-border bg-card px-4 py-3 text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:border-primary hover:text-primary xl:hidden ${mono.className}`}
            >
              {leftExpanded ? tHome.showLess : tHome.expandSection}
              <span className={`transition-transform ${leftExpanded ? "rotate-180" : ""}`}>&#8595;</span>
            </button>
          </motion.div>

          {/* Middle column: live operations feed */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="bg-card p-6 md:p-8 xl:p-10"
          >
            <div className="flex items-center justify-between border-b border-border pb-4">
              <span className={`text-[10px] uppercase tracking-[0.22em] text-primary ${mono.className}`}>
                {tHome.servicesFeed}
              </span>
              <span className={`text-[10px] uppercase tracking-[0.18em] text-muted-foreground ${mono.className}`}>
                {String(serviceFeed.length).padStart(2, "0")}{tHome.entriesSuffix}
              </span>
            </div>

            <div
              className={`relative overflow-hidden ${!middleExpanded ? "max-h-[30rem] xl:max-h-[calc(54rem-7rem)] xl:overflow-y-auto xl:scrollbar-thin" : ""}`}
            >
              <div className="mt-4 grid gap-3">
                {serviceFeed.map((item) => (
                  <motion.div
                    key={item.rowId}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    className="border border-border/80 bg-background/90 p-4 transition-colors hover:border-primary/50"
                  >
                    <div
                      className={`text-[9px] font-bold uppercase tracking-[0.22em] text-primary ${mono.className}`}
                    >
                      {item.moduleCode}
                    </div>
                    <div
                      className={`text-[10px] uppercase tracking-[0.18em] text-muted-foreground ${mono.className}`}
                    >
                      {item.moduleTitle}
                    </div>
                    <div className="flex items-start gap-3 mt-1.5">
                      <span
                        className="mt-1.5 h-2 w-2 shrink-0"
                        style={{ backgroundColor: item.accentColor }}
                      />
                      <p className="text-sm leading-relaxed text-foreground/90">
                        {item.service}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {!middleExpanded && (
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-card to-transparent pointer-events-none xl:hidden" />
              )}
            </div>

            <button
              type="button"
              onClick={() => setMiddleExpanded(!middleExpanded)}
              className={`mt-4 flex w-full items-center justify-center gap-2 border border-border bg-card px-4 py-3 text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:border-primary hover:text-primary xl:hidden ${mono.className}`}
            >
              {middleExpanded
                ? tHome.showLess
                : tHome.seeAllEntries.replace("{count}", String(serviceFeed.length))}
              <span className={`transition-transform ${middleExpanded ? "rotate-180" : ""}`}>&#8595;</span>
            </button>
          </motion.div>

          {/* Right column: telemetry / outputs */}
          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="bg-background xl:max-h-216 xl:overflow-y-auto xl:scrollbar-thin"
          >
            <div className={`relative overflow-hidden grid gap-px bg-border ${rightExpanded ? "" : "max-h-104 xl:max-h-none"}`}>
              <div className="bg-background p-6 md:p-8">
                <div
                  className={`text-[10px] uppercase tracking-[0.22em] text-primary ${mono.className}`}
                >
                  {tHome.systemTotals}
                </div>
                <div className="mt-6 grid gap-px border border-border bg-border">
                  {[
                    {
                      label: tServices.header.metrics.modules,
                      value: String(metrics.moduleCount).padStart(2, "0"),
                    },
                    {
                      label: tServices.header.metrics.serviceLines,
                      value: String(metrics.serviceLineCount).padStart(2, "0"),
                    },
                    {
                      label: tServices.header.metrics.outputs,
                      value: String(metrics.deliverableCount).padStart(2, "0"),
                    },
                  ].map((metric) => (
                    <div key={metric.label} className="bg-card px-4 py-4">
                      <div
                        className={`text-[10px] uppercase tracking-[0.22em] text-muted-foreground ${mono.className}`}
                      >
                        {metric.label}
                      </div>
                      <div className="mt-2 text-3xl font-extrabold uppercase tracking-tight text-foreground">
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card p-6 md:p-8">
                <div
                  className={`text-[10px] uppercase tracking-[0.22em] text-primary ${mono.className}`}
                >
                  {tHome.outputIndex}
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {outputFeed.map((output, index) => (
                    <span
                      key={`${output}-${index}`}
                      className={`border border-border px-2 py-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground ${mono.className}`}
                    >
                      {output}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-background p-6 md:p-8">
                <div
                  className={`text-[10px] uppercase tracking-[0.22em] text-primary ${mono.className}`}
                >
                  {tHome.fieldNoteLabel}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/85">
                  {tHome.fieldNoteText}
                </p>
                <div className="mt-6 border-t border-border pt-4">
                  <div
                    className={`text-[10px] uppercase tracking-[0.22em] text-muted-foreground ${mono.className}`}
                  >
                    {tHome.nextActionLabel}
                  </div>
                  <Link
                    href={getLocalizedPath("/services", locale)}
                    className="mt-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary hover:opacity-70"
                  >
                    {tHome.reviewSpecification}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {!rightExpanded && (
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none xl:hidden" />
              )}
            </div>

            <button
              type="button"
              onClick={() => setRightExpanded(!rightExpanded)}
              className={`mt-4 flex w-full items-center justify-center gap-2 border border-border bg-card px-4 py-3 text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:border-primary hover:text-primary xl:hidden ${mono.className}`}
            >
              {rightExpanded ? tHome.showLess : tHome.seeAllDetails}
              <span className={`transition-transform ${rightExpanded ? "rotate-180" : ""}`}>&#8595;</span>
            </button>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
