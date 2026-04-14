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
import { serviceMetrics, serviceModules } from "@/lib/servicesData";

const serviceIcons = [ShieldCheck, BriefcaseBusiness, Crosshair, FileText, Mountain];
const serviceAccentColors = [
  "var(--color-primary)",
  "var(--color-secondary)",
  "var(--color-chart-3)",
  "var(--color-chart-4)",
  "var(--color-chart-5)",
];

const serviceFeed = serviceModules.flatMap((module, moduleIndex) =>
  module.services.map((service, serviceIndex) => ({
    moduleId: module.id,
    moduleCode: module.code,
    moduleTitle: module.title,
    service,
    accentColor: serviceAccentColors[moduleIndex % serviceAccentColors.length],
    rowId: `${module.id}-${serviceIndex}`,
  })),
);

const outputFeed = Array.from(new Set(serviceModules.flatMap((module) => module.deliverables)));

export function ServiceRegistrySection() {
  return (
    <section className="relative z-10 overflow-hidden bg-card px-4 py-24 md:px-12 md:py-40 lg:px-24">
      <div className="absolute top-0 left-0 h-px w-full bg-linear-to-r from-transparent via-primary to-transparent opacity-60" />
      <div className="absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle_at_top_right,rgb(255,215,0),transparent_55%)] opacity-60" />

      <div className="relative border border-border bg-background/70 backdrop-blur-sm">
        <div className="grid gap-px bg-border xl:grid-cols-[minmax(280px,0.9fr)_minmax(0,1.35fr)_minmax(260px,0.75fr)]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="bg-background p-6 md:p-8 xl:p-10"
          >
            <div
              className={`mb-4 flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-primary ${mono.className}`}
            >
              <ShieldAlert className="h-4 w-4" /> SERVICE_REGISTRY
            </div>
            <h2 className="text-5xl font-extrabold uppercase tracking-tighter leading-[0.85] md:text-7l l:text-8xl">
              GIS Service
              <br />
              Ops Deck
            </h2>
            <p
              className={`mt-8 text-sm uppercase tracking-widest leading-relaxed text-muted-foreground ${mono.className}`}
            >
              Dense field support for tenure, acquisition, prospecting,
              permitting, terrain modeling, and investor-facing mapping
              packages.
            </p>

            <div className="mt-10 grid gap-px border border-border bg-border">
              {serviceModules.map((module, index) => {
                const Icon = serviceIcons[index % serviceIcons.length];
                const accentColor =
                  serviceAccentColors[index % serviceAccentColors.length];

                return (
                  <Link
                    key={module.id}
                    href={`/services#${module.id}`}
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
                      {String(module.services.length).padStart(2, "0")}_LINES /
                      OPEN_MODULE
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/services"
                className="group inline-flex items-center justify-between gap-4 border border-primary bg-primary px-5 py-4 text-black transition-colors hover:bg-transparent hover:text-primary"
              >
                <div>
                  <div
                    className={`text-[10px] uppercase tracking-[0.22em] ${mono.className}`}
                  >
                    FULL_ROUTE
                  </div>
                  <div className="mt-1 text-sm font-bold uppercase tracking-wider">
                    Open Service Registry
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-between gap-4 border border-border bg-card px-5 py-4 transition-colors hover:border-primary"
              >
                <div>
                  <div
                    className={`text-[10px] uppercase tracking-[0.22em] text-muted-foreground ${mono.className}`}
                  >
                    DIRECT_LINK
                  </div>
                  <div className="mt-1 text-sm font-bold uppercase tracking-wider">
                    Request Scope
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-primary" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="bg-card"
          >
            <div className="flex items-center justify-between border-b border-border px-6 py-4 md:px-8">
              <div>
                <div
                  className={`text-[10px] uppercase tracking-[0.22em] text-primary ${mono.className}`}
                >
                  LIVE_SERVICE_FEED
                </div>
                <div className="mt-2 text-2xl font-extrabold uppercase tracking-tight">
                  Active Lines
                </div>
              </div>
              <div
                className={`text-[10px] uppercase tracking-[0.22em] text-muted-foreground ${mono.className}`}
              >
                {String(serviceFeed.length).padStart(2, "0")} ENTRIES
              </div>
            </div>

            <div className="grid gap-px bg-border">
              {serviceFeed.map((item, index) => (
                <motion.div
                  key={item.rowId}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.35, delay: index * 0.02 }}
                  className="grid gap-4 bg-background px-6 py-4 md:grid-cols-[88px_minmax(140px,0.45fr)_minmax(0,1fr)] md:px-8"
                >
                  <div
                    className={`text-[10px] uppercase tracking-[0.22em] ${mono.className}`}
                    style={{ color: item.accentColor }}
                  >
                    {item.moduleCode}
                  </div>
                  <div
                    className={`text-[10px] uppercase tracking-[0.18em] text-muted-foreground ${mono.className}`}
                  >
                    {item.moduleTitle}
                  </div>
                  <div className="flex items-start gap-3">
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
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-px bg-border"
          >
            <div className="bg-background p-6 md:p-8">
              <div
                className={`text-[10px] uppercase tracking-[0.22em] text-primary ${mono.className}`}
              >
                SYSTEM_TOTALS
              </div>
              <div className="mt-6 grid gap-px border border-border bg-border">
                {[
                  {
                    label: "Modules",
                    value: String(serviceMetrics.moduleCount).padStart(2, "0"),
                  },
                  {
                    label: "Service Lines",
                    value: String(serviceMetrics.serviceLineCount).padStart(
                      2,
                      "0",
                    ),
                  },
                  {
                    label: "Outputs",
                    value: String(serviceMetrics.deliverableCount).padStart(
                      2,
                      "0",
                    ),
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
                OUTPUT_INDEX
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
                FIELD_NOTE
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/85">
                Built for operators who need claim status, permitting support,
                maps, and terrain intelligence in one coordinated workflow
                instead of scattered vendors.
              </p>
              <div className="mt-6 border-t border-border pt-4">
                <div
                  className={`text-[10px] uppercase tracking-[0.22em] text-muted-foreground ${mono.className}`}
                >
                  NEXT_ACTION
                </div>
                <Link
                  href="/services"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary hover:opacity-70"
                >
                  Review Full Specification
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
