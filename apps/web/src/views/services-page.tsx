"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Crosshair,
  ExternalLink,
  FileText,
  Mail,
  Maximize2,
  Mountain,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";
import { inter, mono } from "@/lib/fonts";
import { pastClients } from "@/lib/pastClientsData";
import { useI18n } from "@/lib/i18n/context";
import { servicesTranslations } from "@/lib/i18n/translations/services";
import type { Locale } from "@/lib/i18n/types";
import { getLocalizedPath } from "@/lib/i18n/navigation";
import { ImageViewerTrigger } from "@/components/fullscreen-image-viewer";
import { MapLegendSwatch } from "@/components/map-legend-swatch";
import { useSampleMaps } from "@/lib/projectDataContext";
import { sampleMapsTranslations } from "@/lib/i18n/translations/sampleMaps";
import type { SampleMapType } from "@/lib/sampleMapTypes";
import { SERVICE_MAP_LINKS, moduleMapTypes, pickModuleMaps } from "@/lib/serviceMapLinks";

const pad = (n: number) => String(n).padStart(2, "0");

const serviceIcons = [ShieldCheck, BriefcaseBusiness, Crosshair, FileText, Mountain];
const serviceAccentColors = [
  "var(--color-primary)",
  "var(--color-secondary)",
  "var(--color-chart-3)",
  "var(--color-chart-4)",
  "var(--color-chart-5)",
];

export default function ServicesPage({ locale: overrideLocale }: { locale?: Locale }) {
  const { locale: contextLocale } = useI18n();
  const locale = overrideLocale || contextLocale || "en";
  const t = servicesTranslations[locale] || servicesTranslations.en;

  const [activeTab, setActiveTab] = useState<"services" | "clients">("services");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const search = window.location.search;
      const hash = window.location.hash;
      if (search.includes("tab=clients") || hash === "#clients") {
        setActiveTab("clients");
        setTimeout(() => {
          const tabSection = document.getElementById("services-tabs");
          if (tabSection) {
            tabSection.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    }
  }, []);

  const serviceMetrics = useMemo(() => {
    const moduleCount = t.modules.length;
    const serviceLineCount = t.modules.reduce(
      (total, module) => total + module.services.length,
      0,
    );
    const deliverables = Array.from(
      new Set(t.modules.flatMap((module) => module.deliverables)),
    );
    return {
      moduleCount,
      serviceLineCount,
      deliverables,
      deliverableCount: deliverables.length,
    };
  }, [t.modules]);

  // Sample maps (Neon sample_maps): service lines link to their category on /sample-maps,
  // but only categories with at least one map; each block shows a few matching thumbnails.
  const sampleMaps = useSampleMaps();
  const mapsT = sampleMapsTranslations[locale] || sampleMapsTranslations.en;
  const mapTypeCounts = useMemo(() => {
    const counts = new Map<SampleMapType, number>();
    for (const map of sampleMaps) counts.set(map.mapType, (counts.get(map.mapType) ?? 0) + 1);
    return counts;
  }, [sampleMaps]);
  // Blocks that already show hand-picked samples (sampleCases) don't get a second strip.
  const moduleMaps = useMemo(
    () => pickModuleMaps(t.modules.filter((m) => !m.sampleCases?.length).map((m) => m.id), sampleMaps),
    [t.modules, sampleMaps],
  );
  const linkedMapType = (type: SampleMapType | undefined) => (type && mapTypeCounts.has(type) ? type : undefined);
  const sampleMapsHref = (type: SampleMapType) => `${getLocalizedPath("/sample-maps", locale)}?type=${type}`;

  return (
    <div className={`min-h-screen w-full bg-background text-foreground ${inter.className}`}>
      <div
        className="pointer-events-none fixed inset-0 z-50 hidden opacity-[0.03] mix-blend-overlay md:block"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }}
      />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_80%_80%_at_50%_0%,#000_45%,transparent_100%)]" />

      <main className="relative z-10 mx-auto max-w-7xl px-4 py-24 md:px-12">
        <header className="border-b border-border pb-16">
          <Link
            href={getLocalizedPath("/", locale)}
            className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-primary ${mono.className}`}
          >
            <ArrowLeft className="h-4 w-4" />
            {t.header.returnLink}
          </Link>

          <div className="mt-10 grid gap-10 xl:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] xl:items-end">
            <div>
              <div className={`mb-4 flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-primary ${mono.className}`}>
                <ShieldAlert className="h-4 w-4" /> {t.header.badge}
              </div>
              <h1 className="max-w-5xl text-5xl font-extrabold uppercase tracking-tighter leading-[0.85] md:text-8xl">
                {t.header.title}
                <br />
                {t.header.titleHighlight}
              </h1>
              <p className={`mt-8 max-w-3xl text-sm uppercase tracking-widest leading-relaxed text-muted-foreground ${mono.className}`}>
                {t.header.description}
              </p>
            </div>

            <div className="grid gap-px border border-border bg-border sm:grid-cols-3 xl:grid-cols-1 xl:grid-rows-3">
              {[
                { label: t.header.metrics.modules, value: String(serviceMetrics.moduleCount).padStart(2, "0") },
                { label: t.header.metrics.serviceLines, value: String(serviceMetrics.serviceLineCount).padStart(2, "0") },
                { label: t.header.metrics.outputs, value: String(serviceMetrics.deliverableCount).padStart(2, "0") },
              ].map((metric) => (
                <div key={metric.label} className="bg-card p-5">
                  <div className={`text-[10px] uppercase tracking-[0.22em] text-muted-foreground ${mono.className}`}>
                    {metric.label}
                  </div>
                  <div className="mt-3 text-3xl font-extrabold tracking-tight">{metric.value}</div>
                </div>
              ))}
            </div>
          </div>
        </header>

        <section className="mt-16" id="services-tabs">
          <div className="mb-6 flex flex-wrap gap-3 border-b border-border pb-4">
            {[
              { id: "services", label: t.tabs.services },
              { id: "clients", label: t.tabs.clients },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as "services" | "clients")}
                className={`border px-4 py-3 text-xs font-bold uppercase tracking-[0.22em] transition-colors ${mono.className} ${
                  activeTab === tab.id
                    ? "border-primary bg-primary text-black"
                    : "border-border bg-card text-muted-foreground hover:border-primary hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === "services" ? (
            <div className="grid gap-6">
              {t.modules.map((module, index) => {
                const Icon = serviceIcons[index % serviceIcons.length];
                const accentColor = serviceAccentColors[index % serviceAccentColors.length];

                return (
                  <motion.article
                    id={module.id}
                    key={module.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="group relative overflow-hidden border border-border bg-card/90"
                  >
                    <div className="absolute inset-x-0 top-0 h-px opacity-80" style={{ backgroundColor: accentColor }} />
                    <div className="grid lg:grid-cols-[280px_minmax(0,1fr)]">
                      <div className="border-b border-border bg-background/80 p-6 md:p-8 lg:border-r lg:border-b-0">
                        <div className={`flex items-center justify-between text-[10px] uppercase tracking-[0.22em] ${mono.className}`}>
                          <span style={{ color: accentColor }}>{module.code}</span>
                          <span className="text-muted-foreground">{String(module.services.length).padStart(2, "0")}{t.modulesSection.linesSuffix}</span>
                        </div>

                        <div className="mt-8 flex h-14 w-14 items-center justify-center border border-border bg-card" style={{ color: accentColor }}>
                          <Icon className="h-6 w-6" />
                        </div>

                        <h2 className="mt-8 text-3xl font-extrabold uppercase tracking-tight leading-none md:text-4xl">
                          {module.title}
                        </h2>
                        <p className={`mt-4 text-sm uppercase tracking-widest leading-relaxed text-muted-foreground ${mono.className}`}>
                          {module.summary}
                        </p>

                        <div className="mt-8 border-t border-border pt-4">
                          <div className={`text-[10px] uppercase tracking-[0.22em] text-muted-foreground ${mono.className}`}>
                            {t.modulesSection.outcomeLabel}
                          </div>
                          <p className="mt-3 text-sm leading-relaxed text-foreground/85">{module.outcome}</p>
                        </div>
                      </div>

                      <div className="grid gap-8 p-6 md:p-8 xl:grid-cols-[minmax(0,1.25fr)_minmax(220px,0.75fr)]">
                        <div>
                          <div className={`text-[10px] uppercase tracking-[0.22em] text-muted-foreground ${mono.className}`}>
                            {t.modulesSection.serviceLinesLabel}
                          </div>
                          <div className="mt-5 grid gap-3">
                            {module.services.map((service, sIdx) => {
                              const mapType = linkedMapType(SERVICE_MAP_LINKS[module.id]?.services?.[sIdx]);
                              return (
                                <div key={service} className="flex items-start gap-3 border-t border-border/70 pt-3">
                                  <span className="mt-1.5 h-2 w-2 shrink-0" style={{ backgroundColor: accentColor }} />
                                  {mapType ? (
                                    <Link
                                      href={sampleMapsHref(mapType)}
                                      title={`${t.modulesSection.seeSampleMaps}: ${mapsT.filters.types[mapType]}`}
                                      className="text-sm leading-relaxed text-foreground/90 underline decoration-primary/50 decoration-dotted underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
                                    >
                                      {service}
                                      <span
                                        className={`ml-2 inline-flex -translate-y-px items-center gap-1.5 border border-primary/40 px-1.5 py-px align-middle text-[9px] font-bold tracking-[0.14em] text-primary ${mono.className}`}
                                      >
                                        <span className="h-2 w-3">
                                          <MapLegendSwatch type={mapType} />
                                        </span>
                                        {pad(mapTypeCounts.get(mapType) ?? 0)}
                                        <ArrowUpRight className="h-3 w-3" />
                                      </span>
                                    </Link>
                                  ) : (
                                    <p className="text-sm leading-relaxed text-foreground/90">{service}</p>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        <div>
                          <div className={`text-[10px] uppercase tracking-[0.22em] text-muted-foreground ${mono.className}`}>
                            {t.modulesSection.typicalOutputsLabel}
                          </div>
                          <div className="mt-5 flex flex-wrap gap-2">
                            {module.deliverables.map((deliverable, dIdx) => {
                              const mapType = linkedMapType(SERVICE_MAP_LINKS[module.id]?.deliverables?.[dIdx]);
                              return mapType ? (
                                <Link
                                  key={deliverable}
                                  href={sampleMapsHref(mapType)}
                                  title={`${t.modulesSection.seeSampleMaps}: ${mapsT.filters.types[mapType]}`}
                                  className={`inline-flex items-center gap-1.5 border border-primary/50 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary hover:text-black ${mono.className}`}
                                >
                                  {deliverable}
                                  <ArrowUpRight className="h-3 w-3 shrink-0" />
                                </Link>
                              ) : (
                                <span
                                  key={deliverable}
                                  className={`border border-border px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground ${mono.className}`}
                                >
                                  {deliverable}
                                </span>
                              );
                            })}
                          </div>
                        </div>

                        {moduleMaps.has(module.id) && (
                          <div className="border-t border-border/70 pt-6 xl:col-span-2">
                            <div className="flex flex-wrap items-center justify-between gap-3">
                              <div className={`text-[10px] uppercase tracking-[0.22em] text-muted-foreground ${mono.className}`}>
                                {t.modulesSection.sampleMapsTitle}
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {moduleMapTypes(module.id)
                                  .filter((type) => mapTypeCounts.has(type))
                                  .map((type) => (
                                    <Link
                                      key={type}
                                      href={sampleMapsHref(type)}
                                      className={`inline-flex items-center gap-2 border border-primary/40 px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-primary transition-colors hover:bg-primary hover:text-black ${mono.className}`}
                                    >
                                      <span className="h-2.5 w-4">
                                        <MapLegendSwatch type={type} />
                                      </span>
                                      {mapsT.filters.types[type]}
                                      <span className="opacity-70">{pad(mapTypeCounts.get(type) ?? 0)}</span>
                                      <ArrowUpRight className="h-3 w-3" />
                                    </Link>
                                  ))}
                              </div>
                            </div>
                            <div className="mt-4 grid gap-4 sm:grid-cols-3">
                              {moduleMaps.get(module.id)!.map((map) => (
                                <figure
                                  key={map.id}
                                  className="group/case flex flex-col border border-border bg-background/60 transition-colors hover:border-primary/80"
                                >
                                  <ImageViewerTrigger
                                    src={map.fullSizeUrl}
                                    alt={map.title}
                                    className="relative block aspect-[4/3] w-full overflow-hidden bg-[#08080a] bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-size-[14px_14px]"
                                  >
                                    <img
                                      src={map.thumbnailUrl}
                                      alt={map.title}
                                      loading="lazy"
                                      className="absolute inset-0 h-full w-full object-contain p-3 transition-transform duration-500 group-hover/case:scale-[1.03]"
                                    />
                                    <span
                                      className={`pointer-events-none absolute bottom-2 right-2 inline-flex items-center gap-1.5 border border-primary/60 bg-black/75 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-primary backdrop-blur-sm transition-colors group-hover/case:border-primary group-hover/case:bg-primary group-hover/case:text-black ${mono.className}`}
                                    >
                                      <Maximize2 className="h-3 w-3" />
                                      {t.modulesSection.viewFullSize}
                                    </span>
                                  </ImageViewerTrigger>
                                  <figcaption className="flex flex-1 flex-col gap-1.5 p-3">
                                    <span className="line-clamp-2 text-xs font-bold uppercase leading-snug tracking-tight text-white transition-colors group-hover/case:text-primary">
                                      {map.title}
                                    </span>
                                    {map.region && (
                                      <span className={`text-[9px] uppercase tracking-[0.14em] text-muted-foreground ${mono.className}`}>
                                        {map.region}
                                      </span>
                                    )}
                                  </figcaption>
                                </figure>
                              ))}
                            </div>
                          </div>
                        )}

                        {module.sampleCases && module.sampleCases.length > 0 && (
                          <div className="border-t border-border/70 pt-6 xl:col-span-2">
                            <div className="flex items-center justify-between">
                              <div
                                className={`text-[10px] uppercase tracking-[0.22em] text-muted-foreground ${mono.className}`}
                              >
                                {t.modulesSection.sampleWorkTitle}
                              </div>
                              <span
                                className={`border border-primary/40 bg-primary/10 px-2 py-0.5 text-[9px] uppercase tracking-[0.2em] text-primary ${mono.className}`}
                              >
                                {t.modulesSection.realFieldDataBadge}
                              </span>
                            </div>
                            <Link
                              href={getLocalizedPath("/sample-maps", locale)}
                              className={`mt-3 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-primary hover:underline ${mono.className}`}
                            >
                              {t.modulesSection.browseSampleMaps}
                              <ArrowUpRight className="h-3.5 w-3.5" />
                            </Link>
                            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                              {module.sampleCases.map((item, cIdx) => (
                                <div
                                  key={cIdx}
                                  className="group/case relative flex flex-col overflow-hidden border border-border bg-background/60 transition-all hover:border-primary/80"
                                >
                                  {/* Click the map to open it full size (zoom + pan); the MINFILE link below stays for context. */}
                                  <ImageViewerTrigger
                                    src={item.image}
                                    alt={item.title}
                                    className="relative block aspect-[16/10] w-full overflow-hidden bg-black"
                                  >
                                    <img
                                      src={item.image}
                                      alt={item.title}
                                      className="h-full w-full object-cover transition-transform duration-500 group-hover/case:scale-105"
                                    />
                                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
                                    <span
                                      className={`pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1.5 border border-primary/60 bg-black/70 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-primary backdrop-blur-sm transition-colors group-hover/case:border-primary group-hover/case:bg-primary group-hover/case:text-black ${mono.className}`}
                                    >
                                      <Maximize2 className="h-3 w-3" />
                                      {t.modulesSection.viewFullSize}
                                    </span>
                                  </ImageViewerTrigger>
                                  <div className="flex flex-1 flex-col justify-between p-4">
                                    <div>
                                      <h4 className="text-xs font-bold uppercase tracking-tight text-white transition-colors group-hover/case:text-primary">
                                        {item.title}
                                      </h4>
                                      <p
                                        className={`mt-2 text-[10px] uppercase tracking-[0.14em] leading-relaxed text-muted-foreground ${mono.className}`}
                                      >
                                        {item.description}
                                      </p>
                                    </div>
                                    {item.linkUrl && (
                                      <a
                                        href={item.linkUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`mt-4 inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-primary hover:underline ${mono.className}`}
                                      >
                                        <span>
                                          {item.linkLabel || t.modulesSection.viewRecord}
                                        </span>
                                        <ExternalLink className="h-3 w-3" />
                                      </a>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          ) : (
            <motion.section
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="border border-border bg-card/90"
            >
              <div className="grid gap-px bg-border lg:grid-cols-[minmax(280px,0.82fr)_minmax(0,1.18fr)]">
                <div className="bg-background/80 p-6 md:p-8">
                  <div className={`flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-primary ${mono.className}`}>
                    <Building2 className="h-4 w-4" /> {t.clientsSection.badge}
                  </div>
                  <h2 className="mt-6 text-4xl font-extrabold uppercase tracking-tight leading-none md:text-5xl">
                    {t.clientsSection.title}
                  </h2>
                  <p className={`mt-5 text-sm uppercase tracking-widest leading-relaxed text-muted-foreground ${mono.className}`}>
                    {t.clientsSection.description}
                  </p>

                  <div className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2">
                    <div className="bg-card p-4">
                      <div className={`text-[10px] uppercase tracking-[0.22em] text-muted-foreground ${mono.className}`}>
                        {t.clientsSection.listedClientsLabel}
                      </div>
                      <div className="mt-2 text-3xl font-extrabold tracking-tight">
                        + {String(pastClients.length).padStart(2, "0")}
                      </div>
                    </div>
                    <div className="bg-card p-4">
                      <div className={`text-[10px] uppercase tracking-[0.22em] text-muted-foreground ${mono.className}`}>
                        {t.clientsSection.websiteFieldLabel}
                      </div>
                      <div className="mt-2 text-3xl font-extrabold tracking-tight">
                        {t.clientsSection.websiteFieldStatus}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-px bg-border">
                  {pastClients.map((client, index) => {
                    const localizedNotes =
                      t.clientsSection.clientNotes?.[client.name] || client.notes;

                    return (
                      <div
                        key={client.name}
                        className="grid gap-4 bg-card px-5 py-5 md:grid-cols-[72px_minmax(0,1fr)_auto] md:px-6"
                      >
                        <div className={`text-[10px] uppercase tracking-[0.22em] text-muted-foreground ${mono.className}`}>
                          {String(index + 1).padStart(2, "0")}
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="text-lg font-extrabold uppercase tracking-tight text-white md:text-xl">
                              {client.name}
                            </span>
                            {client.logo && (
                              <span className="inline-flex items-center rounded bg-white px-2.5 py-1 shadow-xs">
                                <img
                                  src={client.logo}
                                  alt={`${client.name} logo`}
                                  className="h-4 max-w-[120px] object-contain"
                                />
                              </span>
                            )}
                          </div>
                          {localizedNotes && (
                            <p className={`mt-2 text-xs uppercase tracking-[0.15em] leading-relaxed text-muted-foreground md:text-sm ${mono.className}`}>
                              {localizedNotes}
                            </p>
                          )}
                          {client.image && (
                            <div className="mt-3 overflow-hidden rounded-lg border border-border/60 max-w-sm">
                              <img
                                src={client.image}
                                alt={client.name}
                                className="h-32 w-full object-cover"
                                loading="lazy"
                              />
                            </div>
                          )}
                        </div>
                        <div className="flex items-start md:justify-end">
                          {client.url ? (
                            <a
                              href={client.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex items-center gap-2 border border-primary px-3 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-primary transition-colors hover:bg-primary hover:text-black ${mono.className}`}
                            >
                              {t.clientsSection.visitButton} <ArrowUpRight className="h-4 w-4" />
                            </a>
                          ) : (
                            <span className={`inline-flex items-center border border-border px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground ${mono.className}`}>
                              {t.clientsSection.linkPending}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.section>
          )}
        </section>

        <section className="mt-16 grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
          <div className="border border-border bg-card p-6 md:p-8">
            <div className={`text-[10px] uppercase tracking-[0.22em] text-primary ${mono.className}`}>
              {t.operationalFlow.tag}
            </div>
            <h2 className="mt-4 text-3xl font-extrabold uppercase tracking-tight">
              {t.operationalFlow.title}
            </h2>
            <div className="mt-8 grid gap-3">
              {t.operationalFlow.steps.map((step, index) => (
                <div key={step} className="flex items-start gap-4 border-t border-border pt-4 first:border-t-0 first:pt-0">
                  <div className={`min-w-12 text-[10px] uppercase tracking-[0.22em] text-muted-foreground ${mono.className}`}>
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/90">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-border bg-background p-6 md:p-8">
            <div className={`text-[10px] uppercase tracking-[0.22em] text-muted-foreground ${mono.className}`}>
              {t.nextAction.indexTag}
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {serviceMetrics.deliverables.map((deliverable) => (
                <span
                  key={deliverable}
                  className={`border border-border px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground ${mono.className}`}
                >
                  {deliverable}
                </span>
              ))}
            </div>

            <div className="mt-10 border-t border-border pt-6">
              <div className={`text-[10px] uppercase tracking-[0.22em] text-primary ${mono.className}`}>
                {t.nextAction.actionTag}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/85">
                {t.nextAction.description}
              </p>
              <Link
                href={getLocalizedPath("/contact", locale)}
                className="mt-6 inline-flex items-center gap-3 border border-primary px-4 py-3 text-sm font-bold uppercase tracking-wider text-primary transition-colors hover:bg-primary hover:text-black"
              >
                <Mail className="h-4 w-4" />
                {t.nextAction.button}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
