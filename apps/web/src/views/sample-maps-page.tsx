"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, Crosshair, ExternalLink, FileText, Layers, Mail, Maximize2, Star } from "lucide-react";
import { inter, mono } from "@/lib/fonts";
import { useI18n } from "@/lib/i18n/context";
import { getLocalizedPath } from "@/lib/i18n/navigation";
import { sampleMapsTranslations } from "@/lib/i18n/translations/sampleMaps";
import type { Locale, SampleMapsTranslation } from "@/lib/i18n/types";
import { useSampleMaps } from "@/lib/projectDataContext";
import { SAMPLE_MAP_TYPES, isSampleMapType, type SampleMap, type SampleMapType } from "@/lib/sampleMapTypes";
import { ImageViewerTrigger } from "@/components/fullscreen-image-viewer";
import { ExpandableSummary } from "@/components/expandable-summary";
import { MapLegendSwatch as LegendSwatch } from "@/components/map-legend-swatch";
import { SampleMapsNotice } from "@/components/sample-maps-notice";

/** Reads/writes ?type=<map type> so the Services page can link straight to a category. */
function readTypeFromUrl(): SampleMapType | null {
  const value = new URLSearchParams(window.location.search).get("type");
  return isSampleMapType(value) ? value : null;
}

function writeTypeToUrl(type: SampleMapType | null) {
  const url = new URL(window.location.href);
  if (type) url.searchParams.set("type", type);
  else url.searchParams.delete("type");
  window.history.replaceState(window.history.state, "", url);
}

const GRAPH_PAPER =
  "bg-[#08080a] bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-size-[18px_18px]";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function SampleMapsPage({ locale: propLocale }: { locale?: Locale }) {
  const { locale: ctxLocale } = useI18n();
  const locale = propLocale || ctxLocale;
  const t = sampleMapsTranslations[locale] || sampleMapsTranslations.en;
  const maps = useSampleMaps();
  const [activeType, setActiveType] = useState<SampleMapType | null>(null);

  const legendRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setActiveType(readTypeFromUrl());
  }, []);

  // On small screens the legend scrolls sideways: keep the active category in view.
  useEffect(() => {
    const list = legendRef.current;
    const active = list?.querySelector<HTMLElement>('[aria-pressed="true"]')?.parentElement;
    if (!list || !active || list.scrollWidth <= list.clientWidth) return;
    const left = active.getBoundingClientRect().left - list.getBoundingClientRect().left + list.scrollLeft;
    list.scrollTo({ left: left - 16, behavior: "smooth" });
  }, [activeType]);

  const selectType = (type: SampleMapType | null) => {
    setActiveType(type);
    writeTypeToUrl(type);
  };

  // Only categories that have maps, in the canonical order.
  const typeCounts = useMemo(() => {
    const counts = new Map<SampleMapType, number>();
    for (const map of maps) counts.set(map.mapType, (counts.get(map.mapType) ?? 0) + 1);
    return SAMPLE_MAP_TYPES.filter((type) => counts.has(type)).map((type) => ({ type, count: counts.get(type)! }));
  }, [maps]);

  // Sheet numbers follow the full archive order, so a map keeps its number when filtering.
  const sheetNumbers = useMemo(() => new Map(maps.map((map, i) => [map.id, i + 1])), [maps]);
  const regionCount = useMemo(() => new Set(maps.map((m) => m.region).filter(Boolean)).size, [maps]);

  const visibleMaps = activeType ? maps.filter((map) => map.mapType === activeType) : maps;
  const [leadMap, ...otherMaps] = visibleMaps;

  return (
    <div
      className={`min-h-screen w-full bg-background text-foreground selection:bg-primary selection:text-black ${inter.className}`}
    >
      <div className="pointer-events-none fixed inset-0 z-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_80%_80%_at_50%_0%,#000_40%,transparent_100%)]" />

      <main className="relative z-10 mx-auto max-w-[88rem] px-4 py-12 md:px-10 md:py-16">
        <header className="mb-10 grid gap-8 border-b border-border pb-8 md:mb-12 md:pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <Link
              href={getLocalizedPath("/services", locale)}
              className={`mb-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary ${mono.className}`}
            >
              <ArrowLeft className="h-3 w-3" />
              {t.header.backToServices}
            </Link>
            <div
              className={`mb-3 flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-primary ${mono.className}`}
            >
              <Layers className="h-3 w-3" />
              {t.header.badge}
            </div>
            <h1 className="text-3xl font-extrabold uppercase tracking-tighter leading-[0.88] md:text-5xl xl:text-6xl">
              {t.header.titleLine1} <span className="text-primary">{t.header.titleLine2}</span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {t.header.subtitle}
            </p>
            <SampleMapsNotice t={t} className="mt-5 max-w-2xl" />
          </div>

          {maps.length > 0 && (
            <dl className={`grid grid-cols-3 border border-white/10 bg-black/40 backdrop-blur-sm ${mono.className}`}>
              {[
                [t.legend.sheets, maps.length],
                [t.legend.types, typeCounts.length],
                [t.legend.regions, regionCount],
              ].map(([label, value], i) => (
                <div key={String(label)} className={`px-4 py-3 md:px-6 md:py-4 ${i > 0 ? "border-l border-white/10" : ""}`}>
                  <dt className="text-[9px] tracking-[0.2em] text-muted-foreground">{label}</dt>
                  <dd className="mt-1 text-2xl font-bold text-primary md:text-3xl">{pad(Number(value))}</dd>
                </div>
              ))}
            </dl>
          )}
        </header>

        {maps.length === 0 ? (
          <section className="flex flex-col items-center gap-5 border border-dashed border-border bg-card/40 px-6 py-16 text-center">
            <div className="flex h-12 w-12 items-center justify-center border border-primary/40 bg-primary/10 text-primary">
              <Layers className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-extrabold uppercase tracking-tight">{t.empty.title}</h2>
            <p className={`max-w-lg text-xs uppercase leading-relaxed tracking-[0.08em] text-muted-foreground ${mono.className}`}>
              {t.empty.text}
            </p>
            <Link
              href={getLocalizedPath("/contact", locale)}
              className={`inline-flex items-center gap-2 border border-primary bg-primary px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-opacity hover:opacity-90 ${mono.className}`}
            >
              <Mail className="h-4 w-4" />
              {t.cta.button}
            </Link>
          </section>
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-10">
            {/* Map legend: the category filter, styled as a GIS layer legend */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <nav aria-label={t.legend.heading} className={`border border-white/10 bg-black/40 backdrop-blur-sm ${mono.className}`}>
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-[10px] font-bold tracking-[0.2em]">
                  <span className="flex items-center gap-2 text-primary">
                    <Layers className="h-3 w-3" />
                    {t.legend.heading}
                  </span>
                  <span className="text-muted-foreground">{t.countLabel.replace("{count}", String(visibleMaps.length))}</span>
                </div>
                <ul ref={legendRef} className="-mb-px flex gap-px overflow-x-auto [scrollbar-width:none] lg:flex-col lg:overflow-visible">
                  <li className="shrink-0">
                    <LegendItem
                      label={t.filters.all}
                      count={maps.length}
                      active={activeType === null}
                      onClick={() => selectType(null)}
                      swatch={<span className="block h-full w-full border border-current bg-current/15" />}
                    />
                  </li>
                  {typeCounts.map(({ type, count }) => (
                    <li key={type} className="shrink-0">
                      <LegendItem
                        label={t.filters.types[type]}
                        count={count}
                        active={activeType === type}
                        onClick={() => selectType(activeType === type ? null : type)}
                        swatch={<LegendSwatch type={type} />}
                      />
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            <section className="min-w-0">
              {visibleMaps.length === 0 || !leadMap ? (
                <p className={`border border-dashed border-border py-16 text-center text-xs uppercase tracking-[0.18em] text-muted-foreground ${mono.className}`}>
                  {t.noMatch}
                </p>
              ) : (
                <AnimatePresence mode="popLayout" initial={false}>
                  {/* Lead sheet: the first map of the current view, shown large */}
                  <motion.article
                    key={`lead-${leadMap.id}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="group/sheet relative mb-8 grid border border-white/15 bg-card transition-shadow duration-300 hover:border-primary/60 hover:shadow-[0_0_32px_-10px_var(--primary)] xl:grid-cols-[minmax(0,1.75fr)_minmax(0,1fr)]"
                  >
                    <MapFrame map={leadMap} t={t} className="aspect-[3/2] xl:aspect-auto xl:min-h-[30rem] xl:border-r xl:border-white/10" />
                    <TitleBlock
                      map={leadMap}
                      sheet={sheetNumbers.get(leadMap.id) ?? 1}
                      total={maps.length}
                      t={t}
                      locale={locale}
                      size="lg"
                    />
                  </motion.article>

                  {otherMaps.length > 0 && (
                    <motion.div key="sheets" layout className="grid gap-6 md:grid-cols-2">
                      {otherMaps.map((map) => (
                        <motion.article
                          key={map.id}
                          layout
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="group/sheet relative flex flex-col border border-white/15 bg-card transition-shadow duration-300 hover:border-primary/60 hover:shadow-[0_0_28px_-10px_var(--primary)]"
                        >
                          <MapFrame map={map} t={t} className="aspect-[3/2] border-b border-white/10" />
                          <TitleBlock
                            map={map}
                            sheet={sheetNumbers.get(map.id) ?? 1}
                            total={maps.length}
                            t={t}
                            locale={locale}
                            size="sm"
                          />
                        </motion.article>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}

              {/* Call to action */}
              <section className="mt-12 flex flex-col items-start justify-between gap-6 border border-primary/30 bg-primary/5 p-6 md:flex-row md:items-center md:p-8">
                <div>
                  <h2 className="text-2xl font-extrabold uppercase tracking-tight">{t.cta.heading}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{t.cta.text}</p>
                </div>
                <Link
                  href={getLocalizedPath("/contact", locale)}
                  className={`inline-flex shrink-0 items-center gap-2 border border-primary bg-primary px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-shadow hover:shadow-[0_0_20px_-4px_var(--primary)] ${mono.className}`}
                >
                  <Mail className="h-4 w-4" />
                  {t.cta.button}
                </Link>
              </section>
            </section>
          </div>
        )}
      </main>
    </div>
  );
}

function LegendItem({
  label,
  count,
  active,
  onClick,
  swatch,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
  swatch: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`flex w-full items-center gap-3 whitespace-nowrap border-l-2 px-4 py-3 text-left text-[10px] font-bold uppercase tracking-[0.14em] transition-colors lg:whitespace-normal ${
        active
          ? "border-primary bg-primary/10 text-primary"
          : "border-transparent text-muted-foreground hover:bg-white/5 hover:text-foreground"
      }`}
    >
      <span className={`h-4 w-6 shrink-0 ${active ? "text-primary" : "text-muted-foreground"}`}>{swatch}</span>
      <span className="grow">{label}</span>
      <span className={active ? "text-primary" : "text-muted-foreground/70"}>{pad(count)}</span>
    </button>
  );
}

/** The map on graph paper, uncropped, with registration marks and edge rulers. Opens full size. */
function MapFrame({ map, t, className }: { map: SampleMap; t: SampleMapsTranslation; className: string }) {
  return (
    <ImageViewerTrigger src={map.fullSizeUrl} alt={map.title} className={`relative block w-full overflow-hidden ${GRAPH_PAPER} ${className}`}>
      {/* edge rulers */}
      <span className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-[repeating-linear-gradient(to_right,rgba(255,255,255,0.28)_0_1px,transparent_1px_12px)]" />
      <span className="pointer-events-none absolute inset-y-0 left-0 w-1.5 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.28)_0_1px,transparent_1px_12px)]" />

      <img
        src={map.thumbnailUrl}
        alt={map.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-contain p-5 drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)] transition-transform duration-500 group-hover/sheet:scale-[1.015] md:p-7"
      />

      {/* registration marks */}
      {[
        "left-2 top-2 border-l-2 border-t-2",
        "right-2 top-2 border-r-2 border-t-2",
        "bottom-2 left-2 border-b-2 border-l-2",
        "bottom-2 right-2 border-b-2 border-r-2",
      ].map((pos) => (
        <span
          key={pos}
          className={`pointer-events-none absolute h-3 w-3 border-white/40 transition-all duration-300 group-hover/sheet:h-6 group-hover/sheet:w-6 group-hover/sheet:border-primary ${pos}`}
        />
      ))}

      {/* hover reticle */}
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover/sheet:bg-black/35 group-hover/sheet:opacity-100">
        <span
          className={`flex items-center gap-2 border border-primary bg-black/85 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-primary ${mono.className}`}
        >
          <Crosshair className="h-3.5 w-3.5" />
          {t.card.viewFullSize}
        </span>
      </span>
    </ImageViewerTrigger>
  );
}

/** Drafting-style title block: sheet number, map type, title, region, notes and file actions. */
function TitleBlock({
  map,
  sheet,
  total,
  t,
  locale,
  size,
}: {
  map: SampleMap;
  sheet: number;
  total: number;
  t: SampleMapsTranslation;
  locale: Locale;
  size: "lg" | "sm";
}) {
  const cell = `flex grow basis-36 items-center justify-center gap-1.5 bg-card px-3 py-3 text-[10px] font-bold uppercase tracking-[0.16em] transition-colors`;

  return (
    <div className="flex min-w-0 grow flex-col">
      <div className={`grid grid-cols-[auto_minmax(0,1fr)] border-b border-white/10 text-[10px] uppercase tracking-[0.16em] ${mono.className}`}>
        <div className="border-r border-white/10 px-4 py-2.5">
          <span className="text-muted-foreground">{t.legend.sheet} </span>
          <span className="font-bold text-primary">{pad(sheet)}</span>
          <span className="text-muted-foreground">/{pad(total)}</span>
        </div>
        <div className="flex min-w-0 items-center gap-2.5 px-4 py-2.5">
          <span className="h-3 w-5 shrink-0 text-primary">
            <LegendSwatch type={map.mapType} />
          </span>
          <span className="min-w-0 font-bold leading-snug text-foreground">{t.filters.types[map.mapType]}</span>
          {map.isFeatured && (
            <span className="ml-auto flex shrink-0 items-center gap-1 font-bold text-primary" title={t.card.featured}>
              <Star className="h-3 w-3 fill-current" />
              <span className="hidden sm:inline">{t.card.featured}</span>
            </span>
          )}
        </div>
      </div>

      <div className={size === "lg" ? "p-6 md:p-8" : "p-5"}>
        <h2
          className={`font-bold leading-snug tracking-tight text-foreground transition-colors group-hover/sheet:text-primary ${
            size === "lg" ? "text-2xl md:text-3xl" : "text-lg"
          }`}
        >
          {map.title}
        </h2>
        {map.region && (
          <p className={`mt-3 flex items-start gap-1.5 text-[10px] uppercase tracking-[0.16em] text-muted-foreground ${mono.className}`}>
            <Crosshair className="mt-px h-3 w-3 shrink-0 text-primary" />
            {map.region}
          </p>
        )}
        {map.description && (
          <ExpandableSummary
            text={map.description}
            readMore={t.card.readMore}
            showLess={t.card.showLess}
            className={`mt-4 leading-relaxed text-muted-foreground ${size === "lg" ? "text-sm md:text-[15px]" : "text-sm"}`}
          >
            {map.description}
          </ExpandableSummary>
        )}
      </div>

      <div className={`mt-auto flex flex-wrap gap-px border-t border-white/10 bg-white/10 ${mono.className}`}>
        <ImageViewerTrigger src={map.fullSizeUrl} alt={map.title} className={`${cell} text-foreground hover:bg-primary hover:text-black`}>
          <Maximize2 className="h-3.5 w-3.5" />
          {t.card.viewFullSize}
        </ImageViewerTrigger>
        {map.fileUrl && (
          <a
            href={map.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${cell} text-primary hover:bg-primary hover:text-black`}
          >
            <FileText className="h-3.5 w-3.5" />
            {t.card.openFile.replace("{type}", (map.fileType || "file").toUpperCase())}
          </a>
        )}
        {map.linkUrl && (
          <a
            href={map.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${cell} text-primary hover:bg-primary hover:text-black`}
          >
            {map.linkLabel || map.linkUrl}
            <ExternalLink className="h-3 w-3" />
          </a>
        )}
        {map.projectId && (
          <Link
            href={getLocalizedPath(`/projects/${map.projectId}`, locale)}
            className={`${cell} text-muted-foreground hover:bg-primary hover:text-black`}
          >
            {t.card.viewProject}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        )}
      </div>
    </div>
  );
}
