"use client";

import { useMemo, useState, type CSSProperties } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, Crosshair, Layers, Pause, Play } from "lucide-react";
import { FullscreenImageViewer } from "@/components/fullscreen-image-viewer";
import { MapLegendSwatch } from "@/components/map-legend-swatch";
import { SampleMapsNotice } from "@/components/sample-maps-notice";
import { mono } from "@/lib/fonts";
import { useI18n } from "@/lib/i18n/context";
import { getLocalizedPath } from "@/lib/i18n/navigation";
import { homeTranslations } from "@/lib/i18n/translations/home";
import { sampleMapsTranslations } from "@/lib/i18n/translations/sampleMaps";
import { useSampleMaps } from "@/lib/projectDataContext";
import { SAMPLE_MAP_TYPES, type SampleMap, type SampleMapType } from "@/lib/sampleMapTypes";

const GRAPH_PAPER =
  "bg-[#08080a] bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-size-[18px_18px]";

/** Strip speed: seconds per map for one full loop (lower = faster). */
const SECONDS_PER_MAP = 6;

function pad(n: number) {
  return String(n).padStart(2, "0");
}

/** Featured maps first, alternating between map types and preferring regions not shown yet. */
function pickShowcase(maps: SampleMap[], limit: number): SampleMap[] {
  const queues = SAMPLE_MAP_TYPES.map((type) =>
    maps.filter((m) => m.mapType === type).sort((a, b) => Number(b.isFeatured) - Number(a.isFeatured)),
  )
    .filter((q) => q.length > 0)
    // Categories whose best map is featured go first.
    .sort((a, b) => Number(b[0].isFeatured) - Number(a[0].isFeatured));

  const picked: SampleMap[] = [];
  const regions = new Set<string>();
  const projects = new Set<string>();
  const isNewPlace = (m: SampleMap) =>
    (!m.region || !regions.has(m.region)) && (!m.projectId || !projects.has(m.projectId));
  while (picked.length < limit && queues.some((q) => q.length > 0)) {
    for (const queue of queues) {
      if (picked.length >= limit || queue.length === 0) continue;
      const featured = queue[0].isFeatured;
      const i = queue.findIndex((m) => m.isFeatured === featured && isNewPlace(m));
      const [map] = queue.splice(i >= 0 ? i : 0, 1);
      picked.push(map);
      if (map.region) regions.add(map.region);
      if (map.projectId) projects.add(map.projectId);
    }
  }
  return picked;
}

export function SampleMapsPreviewSection() {
  const { locale } = useI18n();
  const tHome = homeTranslations[locale] || homeTranslations.en;
  const t = tHome.sampleMapsPreview;
  const mapsT = sampleMapsTranslations[locale] || sampleMapsTranslations.en;
  const maps = useSampleMaps();

  const counts = useMemo(() => {
    const byType = new Map<SampleMapType, number>();
    for (const m of maps) byType.set(m.mapType, (byType.get(m.mapType) ?? 0) + 1);
    return byType;
  }, [maps]);
  const regionCount = useMemo(() => new Set(maps.map((m) => m.region).filter(Boolean)).size, [maps]);
  // Every map, ordered so neighbours differ in type, region and project.
  const showcase = useMemo(() => pickShowcase(maps, maps.length), [maps]);
  const [paused, setPaused] = useState(false);
  const [viewing, setViewing] = useState<SampleMap | null>(null);

  // Nothing published yet (or the table doesn't exist): hide the section.
  if (showcase.length === 0) return null;

  const pagePath = getLocalizedPath("/sample-maps", locale);
  const typeHref = (type: SampleMapType) => `${pagePath}?type=${type}`;
  const stats = t.stats
    .replace("{maps}", pad(maps.length))
    .replace("{types}", pad(counts.size))
    .replace("{regions}", pad(regionCount));

  return (
    <section className="relative z-10 border-b border-border bg-background px-4 py-20 md:px-10 md:py-28 lg:px-20">
      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div
              className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-primary ${mono.className}`}
            >
              <Layers className="h-4 w-4" /> {t.badge}
            </div>
            <h2 className="mt-4 text-3xl font-extrabold uppercase tracking-tighter leading-[0.88] md:text-5xl">
              {t.title} <span className="text-primary">{t.titleHighlight}</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">{t.description}</p>
            <p className={`mt-3 text-[10px] uppercase tracking-[0.18em] text-[#777] ${mono.className}`}>{stats}</p>
            <SampleMapsNotice t={mapsT} className="mt-5 max-w-xl" />
          </div>

          <Link
            href={pagePath}
            className={`group inline-flex shrink-0 items-center gap-3 border border-primary bg-primary px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-black transition-all hover:bg-transparent hover:text-primary ${mono.className}`}
          >
            {t.viewAll}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[15rem_minmax(0,1fr)]">
          {/* Legend: one link per map type that has maps */}
          <motion.nav
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            aria-label={mapsT.legend.heading}
            className="border border-border bg-card/40 lg:self-start"
          >
            <p
              className={`border-b border-border px-4 py-3 text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground ${mono.className}`}
            >
              {mapsT.legend.heading}
            </p>
            <ul className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 ${mono.className}`}>
              <li>
                <Link
                  href={pagePath}
                  className="group/item flex items-center gap-3 px-4 py-2.5 text-[11px] uppercase tracking-[0.14em] text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  <span className="h-3.5 w-3.5 shrink-0 border border-current" />
                  <span className="min-w-0 flex-1">{t.allMaps}</span>
                  <span className="text-muted-foreground group-hover/item:text-primary">{pad(maps.length)}</span>
                </Link>
              </li>
              {SAMPLE_MAP_TYPES.filter((type) => counts.has(type)).map((type) => (
                <li key={type}>
                  <Link
                    href={typeHref(type)}
                    className="group/item flex items-center gap-3 px-4 py-2.5 text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                  >
                    <span className="h-3.5 w-3.5 shrink-0 text-primary/80">
                      <MapLegendSwatch type={type} />
                    </span>
                    <span className="min-w-0 flex-1 leading-snug">{mapsT.filters.types[type]}</span>
                    <span>{pad(counts.get(type) ?? 0)}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-0 transition-opacity group-hover/item:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Tablet and up: one large sheet and two smaller ones. */}
          <div className="hidden min-w-0 gap-4 md:grid md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] md:grid-rows-2">
            {showcase.slice(0, 3).map((map, i, picked) => (
              <motion.figure
                key={map.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`group/tile flex flex-col border border-border bg-card transition-colors hover:border-primary/60 ${
                  i === 0 ? "row-span-2" : ""
                } ${picked.length === 1 ? "col-span-2" : ""}`}
              >
                <button
                  type="button"
                  onClick={() => setViewing(map)}
                  aria-label={`${mapsT.card.viewFullSize}: ${map.title}`}
                  className={`relative block w-full flex-1 cursor-zoom-in overflow-hidden ${GRAPH_PAPER} ${
                    i === 0 ? "min-h-96" : "min-h-40"
                  }`}
                >
                  <MapThumb map={map} label={mapsT.card.viewFullSize} />
                </button>
                <figcaption className="border-t border-border p-4">
                  <TypeLink href={typeHref(map.mapType)} type={map.mapType} label={mapsT.filters.types[map.mapType]} />
                  <p className={`mt-2 font-bold leading-snug ${i === 0 ? "text-lg" : "line-clamp-2 text-sm"}`}>{map.title}</p>
                  {map.region && (
                    <p className={`mt-1.5 truncate text-[10px] uppercase tracking-[0.14em] text-muted-foreground ${mono.className}`}>
                      {map.region}
                    </p>
                  )}
                </figcaption>
              </motion.figure>
            ))}
          </div>

          {/* Phones: a strip of map sheets that keeps gliding left (two copies, so it loops seamlessly). */}
          <div className="min-w-0 md:hidden">
            <div className="group/strip relative overflow-hidden mask-[linear-gradient(to_right,transparent,#000_5%,#000_95%,transparent)] motion-reduce:overflow-x-auto">
              <div
                className="flex w-max animate-[ticker-scroll_var(--strip-duration)_linear_infinite] group-focus-within/strip:[animation-play-state:paused] group-hover/strip:[animation-play-state:paused] motion-reduce:animate-none"
                style={
                  {
                    "--strip-duration": `${showcase.length * SECONDS_PER_MAP}s`,
                    animationPlayState: paused || viewing ? "paused" : undefined,
                  } as CSSProperties
                }
              >
                {[false, true].map((copy) => (
                  <ul
                    key={String(copy)}
                    aria-hidden={copy || undefined}
                    className={`flex shrink-0 gap-4 pr-4 ${copy ? "motion-reduce:hidden" : ""}`}
                  >
                    {showcase.map((map) => (
                      <li key={map.id} className="w-64 shrink-0 md:w-72">
                        <figure className="group/tile flex h-full flex-col border border-border bg-card transition-colors hover:border-primary/60">
                          <button
                            type="button"
                            tabIndex={copy ? -1 : 0}
                            onClick={() => setViewing(map)}
                            aria-label={`${mapsT.card.viewFullSize}: ${map.title}`}
                            className={`relative block h-44 w-full cursor-zoom-in overflow-hidden md:h-52 ${GRAPH_PAPER}`}
                          >
                            <MapThumb map={map} label={mapsT.card.viewFullSize} />
                          </button>

                          <figcaption className="flex flex-1 flex-col border-t border-border p-4">
                            <TypeLink
                              href={typeHref(map.mapType)}
                              type={map.mapType}
                              label={mapsT.filters.types[map.mapType]}
                              tabIndex={copy ? -1 : undefined}
                            />
                            <p className="mt-2 line-clamp-2 text-sm font-bold leading-snug">{map.title}</p>
                            {map.region && (
                              <p
                                className={`mt-auto truncate pt-1.5 text-[10px] uppercase tracking-[0.14em] text-muted-foreground ${mono.className}`}
                              >
                                {map.region}
                              </p>
                            )}
                          </figcaption>
                        </figure>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>

            <div className="mt-4 flex justify-end motion-reduce:hidden">
              <button
                type="button"
                onClick={() => setPaused((p) => !p)}
                aria-pressed={paused}
                className={`inline-flex items-center gap-2 border border-border px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:border-primary hover:text-primary ${mono.className}`}
              >
                {paused ? <Play className="h-3 w-3" /> : <Pause className="h-3 w-3" />}
                {paused ? tHome.projectPreview.playAutoplay : tHome.projectPreview.pauseAutoplay}
              </button>
            </div>
          </div>

          <FullscreenImageViewer
            src={viewing?.fullSizeUrl ?? ""}
            alt={viewing?.title}
            open={viewing !== null}
            onClose={() => setViewing(null)}
          />
        </div>
      </div>
    </section>
  );
}

/** Map thumbnail on graph paper with registration marks and a hover badge. Sits inside the clickable frame. */
function MapThumb({ map, label }: { map: SampleMap; label: string }) {
  return (
    <>
      <img
        src={map.thumbnailUrl}
        alt={map.title}
        loading="lazy"
        draggable={false}
        className="absolute inset-0 h-full w-full object-contain p-4 drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)] transition-transform duration-500 group-hover/tile:scale-[1.02] md:p-6"
      />
      {[
        "left-2 top-2 border-l-2 border-t-2",
        "right-2 top-2 border-r-2 border-t-2",
        "bottom-2 left-2 border-b-2 border-l-2",
        "bottom-2 right-2 border-b-2 border-r-2",
      ].map((pos) => (
        <span
          key={pos}
          className={`pointer-events-none absolute h-3 w-3 border-white/40 transition-all duration-300 group-hover/tile:h-5 group-hover/tile:w-5 group-hover/tile:border-primary ${pos}`}
        />
      ))}
      <span
        className={`pointer-events-none absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 border border-primary/60 bg-black/80 px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] whitespace-nowrap text-primary opacity-0 transition-opacity duration-300 group-hover/tile:opacity-100 ${mono.className}`}
      >
        <Crosshair className="h-3 w-3" />
        {label}
      </span>
    </>
  );
}

/** The map's category, linking to /sample-maps?type=... */
function TypeLink({
  href,
  type,
  label,
  tabIndex,
}: {
  href: string;
  type: SampleMapType;
  label: string;
  tabIndex?: number;
}) {
  return (
    <Link
      href={href}
      tabIndex={tabIndex}
      className={`inline-flex items-center gap-2 self-start text-[9px] font-bold uppercase tracking-[0.18em] text-primary hover:underline ${mono.className}`}
    >
      <span className="h-3 w-3 shrink-0">
        <MapLegendSwatch type={type} />
      </span>
      {label}
    </Link>
  );
}
