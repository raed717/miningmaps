"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { motion, AnimatePresence } from "motion/react";
import {
  Crosshair,
  Activity,
  Filter,
  MapPin,
  ChevronRight,
  PanelLeft,
  X,
  Target,
  Cpu,
  Database,
  Plus,
  Minus,
  Gem,
} from "lucide-react";
import { useProjectSummaries } from "@/lib/projectDataContext";
import Link from "next/link";
import { inter, mono } from "@/lib/fonts";
import { useI18n } from "@/lib/i18n/context";
import { mapTranslations } from "@/lib/i18n/translations/map";
import { getLocalizedPath } from "@/lib/i18n/navigation";
import { filterTags } from "@/lib/projectTags";

// Fix for default Leaflet icon in React
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Custom stylised markers - brutalist aesthetic
const createCustomIcon = (color: string, isPulsing: boolean) => {
  return L.divIcon({
    className: "custom-div-icon",
    html: `
      <div style="position: relative; display: flex; align-items: center; justify-content: center;">
        ${isPulsing ? `<div style="position: absolute; width: 24px; height: 24px; border-radius: 50%; background-color: ${color}; opacity: 0.4; animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;"></div>` : ''}
        <div style="background-color: ${color}; width: 12px; height: 12px; border: 1px solid #000; box-shadow: 0 0 10px ${color}; z-index: 10; border-radius: 2px;"></div>
      </div>
    `,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });
};

// Component to handle map flying to selected location
function MapFlyTo({ coordinates }: { coordinates: [number, number] | null }) {
  const map = useMap();
  useEffect(() => {
    if (coordinates) {
      map.flyTo(coordinates, 13, {
        duration: 1.5,
        easeLinearity: 0.25,
      });
    }
  }, [coordinates, map]);
  return null;
}

const getTagColor = (filter: string | null): string | null => {
  if (!filter) return null;
  switch (filter.toLowerCase()) {
    case "gold":
      return "#FFD700"; // Metallic Gold
    case "silver":
      return "#C0C0C0"; // Metallic Silver
    case "copper":
      return "#B87333"; // Copper Bronze
    case "platinum":
      return "#E2E8F0"; // Platinum White
    case "cobalt":
      return "#00BFFF"; // Cobalt Blue
    case "nickel":
      return "#00FF7F"; // Nickel Green
    case "uranium":
      return "#39FF14"; // Uranium Neon Lime
    case "lithium":
      return "#FF007F"; // Lithium Hot Pink
    case "fossils":
      return "#D2A679"; // Fossil Sandstone
    case "agates":
      return "#FF8C42"; // Agate Orange
    case "gemstones":
      return "#B388FF"; // Gemstone Violet
    default:
      return "#FFD700";
  }
};

type SaleFilter = "all" | "for-sale" | "sold";

// Same specimen group as the projects page: one button matching any of these tags, plus one per tag.
const SPECIMEN_TAGS = ["Fossils", "Agates", "Gemstones"];
const SPECIMENS_FILTER = "Fossils, Agates & Gemstones";

export default function MapView() {
  const { locale } = useI18n();
  const t = mapTranslations[locale] || mapTranslations.en;
  const projects = useProjectSummaries();
  const [selectedSiteId, setSelectedSiteId] = useState<string | null>(null);
  const [flyToCoords, setFlyToCoords] = useState<[number, number] | null>(null);
  const [saleFilter, setSaleFilter] = useState<SaleFilter>("all");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [map, setMap] = useState<L.Map | null>(null);

  const staticTags = [
    "Gold",
    "Silver",
    "Copper",
    "Platinum",
    "Cobalt",
    "Nickel",
    "Uranium",
    "Lithium",
  ];

  const filterColor = getTagColor(activeFilter);

  const selectedSite = projects.find((p) => p.id === selectedSiteId);

  type Site = (typeof projects)[number];
  const byId = new Map(projects.map((p) => [p.id, p]));

  // A project is for sale if it or any of its sub-projects is (same rule as the projects page).
  const isAvailable = (site: Site) =>
    site.isForSale ||
    (site.subProjectIds ?? []).some((id) => byId.get(id)?.isForSale);

  // Each parent with its sub-projects. An id listed in a parent's subProjectIds is shown under
  // that parent only, even if its row isn't typed "subproject", so it never gets two markers.
  const listedAsSub = new Set(
    projects.flatMap((p) => (p.type === "subproject" ? [] : (p.subProjectIds ?? []))),
  );
  const groups = projects
    .filter((p) => p.type !== "subproject" && !listedAsSub.has(p.id))
    .map((parent) => ({
      parent,
      subs: (parent.subProjectIds ?? [])
        .map((id) => byId.get(id))
        .filter((sub): sub is Site => Boolean(sub)),
    }));

  const wantedTags = activeFilter
    ? (activeFilter === SPECIMENS_FILTER ? SPECIMEN_TAGS : [activeFilter]).map((tag) =>
        tag.toLowerCase(),
      )
    : null;
  const hasTag = (site: Site) =>
    !wantedTags ||
    filterTags(site).some((tag) => wantedTags.includes(tag.toLowerCase()));
  const matchesSale = (site: Site, sale: SaleFilter) =>
    sale === "all" || (sale === "for-sale" ? site.isForSale : !site.isForSale);

  // Parents and sub-projects are filtered on their own tags and sale status, so a sold
  // sub-project shows under "Sold" even when its parent is for sale. A sub-project without
  // tags of its own uses its parent's. A parent stays listed (dimmed, no marker) when only
  // its sub-projects match.
  const filterGroups = (sale: SaleFilter) =>
    groups.flatMap(({ parent, subs }) => {
      const parentMatches = hasTag(parent) && matchesSale(parent, sale);
      const matchingSubs = subs.filter(
        (sub) =>
          (filterTags(sub).length > 0 ? hasTag(sub) : hasTag(parent)) &&
          matchesSale(sub, sale),
      );
      return parentMatches || matchingSubs.length > 0
        ? [{ parent, parentMatches, subs: matchingSubs }]
        : [];
    });
  // Counts are map targets: matching parents plus matching sub-projects.
  const countTargets = (list: ReturnType<typeof filterGroups>) =>
    list.reduce((n, g) => n + (g.parentMatches ? 1 : 0) + g.subs.length, 0);

  const visibleGroups = filterGroups(saleFilter);
  const saleCounts: Record<SaleFilter, number> = {
    all: countTargets(filterGroups("all")),
    "for-sale": countTargets(filterGroups("for-sale")),
    sold: countTargets(filterGroups("sold")),
  };

  const saleOptions: { id: SaleFilter; label: string }[] = [
    { id: "all", label: t.sidebar.saleStatus.all },
    { id: "for-sale", label: t.sidebar.saleStatus.forSale },
    { id: "sold", label: t.sidebar.saleStatus.sold },
  ];

  return (
    <div
      className={`flex h-[calc(100svh-4rem)] min-h-[calc(100svh-4rem)] w-full overflow-hidden bg-background text-foreground selection:bg-primary selection:text-white ${inter.className}`}
    >
      {/* GLOBAL NOISE TEXTURE */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {mobileSidebarOpen && (
        <button
          type="button"
          aria-label={t.sidebar.closeList}
          onClick={() => setMobileSidebarOpen(false)}
          className="absolute inset-0 z-1190 bg-black/60 md:hidden"
        />
      )}

      {/* Left Sidebar - Brutalist */}
      <aside
        className={`absolute inset-y-0 left-0 z-1200 flex h-full w-[min(22rem,calc(100vw-3rem))] shrink-0 flex-col overflow-hidden border-r border-border bg-card p-0 shadow-[10px_0_30px_rgba(0,0,0,0.8)] transition-transform duration-300 md:relative md:z-20 md:w-96 md:translate-x-0 xl:w-104 ${
          mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="shrink-0 border-b border-border bg-background p-6">
          <div className="mb-4 flex items-center justify-end md:hidden">
            <button
              type="button"
              onClick={() => setMobileSidebarOpen(false)}
              className="border border-border p-2 text-muted-foreground transition-colors hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div
            className={`text-primary font-bold tracking-[0.2em] text-[10px] mb-2 flex items-center gap-2 ${mono.className}`}
          >
            <Database className="h-3 w-3" /> {t.sidebar.databaseBadge}
          </div>
          <h2 className="text-3xl font-extrabold uppercase tracking-tighter leading-none">
            {t.sidebar.titleLine1}
            <br />
            {t.sidebar.titleLine2}
          </h2>
        </div>

        {/* Filters */}
        <div className="flex shrink-0 flex-col gap-3 border-b border-border px-6 py-5">
          <div role="group" aria-labelledby="map-sale-filter-label">
            <div
              id="map-sale-filter-label"
              className={`mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground ${mono.className}`}
            >
              <Filter className="h-3.5 w-3.5 text-primary" aria-hidden />
              {t.sidebar.saleStatus.label}
            </div>
            <div className="grid grid-cols-3 border border-border">
              {saleOptions.map((option) => {
                const isActive = saleFilter === option.id;
                const activeStyle =
                  option.id === "for-sale"
                    ? "bg-secondary text-black"
                    : option.id === "sold"
                      ? "bg-amber-500 text-black"
                      : "bg-primary text-black";
                return (
                  <button
                    key={option.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setSaleFilter(option.id)}
                    className={`flex min-w-0 flex-col items-center gap-0.5 border-r border-border px-1 py-2 text-[10px] font-bold uppercase tracking-[0.14em] transition-colors last:border-r-0 ${mono.className} ${
                      isActive
                        ? activeStyle
                        : "bg-background/70 text-muted-foreground hover:bg-muted hover:text-white"
                    }`}
                  >
                    <span className="max-w-full truncate">{option.label}</span>
                    <span className={isActive ? "text-black/70" : "text-[#666]"}>
                      [{saleCounts[option.id]}]
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {activeFilter && (
            <div
              className={`flex items-center justify-between border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] ${mono.className}`}
              style={{
                borderColor: filterColor || "#FFD700",
                backgroundColor: `${filterColor || "#FFD700"}20`,
                color: filterColor || "#FFD700",
              }}
            >
              <span>
                {t.sidebar.filterPrefix}{" "}
                {activeFilter === SPECIMENS_FILTER ? t.mapOverlay.specimensBtn : activeFilter}
              </span>
              <button
                type="button"
                onClick={() => setActiveFilter(null)}
                className="hover:opacity-80 transition-opacity p-0.5"
                title="Clear tag filter"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Project List */}
        <div className="flex min-h-0 flex-1 flex-col">
          <div
            className={`flex shrink-0 justify-between border-b border-border bg-muted px-6 py-3 text-[9px] font-bold uppercase tracking-widest text-[#666] ${mono.className}`}
          >
            <span>{t.sidebar.identifiedTargets}</span>
            <span>[{saleCounts[saleFilter]}]</span>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
            {visibleGroups.map(({ parent: p, parentMatches, subs }) => {
              const isSelected = selectedSiteId === p.id;
              return (
                <div key={p.id}>
                  <button
                    onClick={() => {
                      setSelectedSiteId(p.id);
                      setFlyToCoords(p.coordinates);
                      setMobileSidebarOpen(false);
                    }}
                    className={`w-full text-left flex items-stretch border-b border-accent transition-all duration-300 group ${
                      isSelected ? "bg-primary/10" : "hover:bg-muted"
                    } ${parentMatches || isSelected ? "" : "opacity-60 hover:opacity-100"}`}
                  >
                    <div
                      className={`w-1 transition-colors ${isSelected ? "bg-primary" : "bg-transparent group-hover:bg-[#333]"}`}
                    />

                    <div className="flex min-w-0 flex-1 gap-4 p-4">
                      {/* Small Image Thumbnail */}
                      <div
                        className={`h-16 w-16 shrink-0 overflow-hidden border ${isSelected ? "border-primary" : "border-border grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100"}`}
                      >
                        <img
                          src={p.image}
                          alt={p.title}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0 flex flex-col justify-center">
                        <div
                          className={`mb-1 flex items-center justify-between gap-2 text-[10px] font-bold tracking-widest text-primary ${mono.className}`}
                        >
                          <span className="truncate">ID_{p.id}</span>
                          {isAvailable(p) && (
                            <span className="shrink-0 border border-secondary bg-secondary/10 px-1 text-secondary">
                              {t.sidebar.saleBadge}
                            </span>
                          )}
                        </div>
                        <div
                          title={p.title}
                          className="line-clamp-2 text-sm font-bold uppercase leading-tight tracking-tight wrap-anywhere transition-colors group-hover:text-white"
                        >
                          {p.title}
                        </div>
                        <div
                          className={`text-[10px] text-[#666] mt-1 truncate uppercase ${mono.className}`}
                        >
                          {t.sidebar.locPrefix} {p.region}
                        </div>
                      </div>
                    </div>
                  </button>

                  {subs.length > 0 && (
                    <div className="border-b border-border/50">
                      {subs.map((sub) => {
                        const isSubSelected = selectedSiteId === sub.id;
                        return (
                          <button
                            key={sub.id}
                            onClick={() => {
                              setSelectedSiteId(sub.id);
                              setFlyToCoords(sub.coordinates);
                              setMobileSidebarOpen(false);
                            }}
                            className={`w-full text-left flex items-stretch transition-all duration-300 group ${
                              isSubSelected ? "bg-primary/5" : "hover:bg-muted"
                            }`}
                          >
                            <div
                              className={`w-1 transition-colors ${isSubSelected ? "bg-primary/60" : "bg-transparent group-hover:bg-[#333]"}`}
                            />
                            <div className="flex min-w-0 flex-1 items-center gap-3 py-2 pl-12 pr-4">
                              <span className="text-[10px] text-primary/60 font-bold">
                                &rsaquo;
                              </span>
                              <div className="flex-1 min-w-0">
                                <div
                                  className={`mb-0.5 flex items-center justify-between gap-2 text-[10px] font-bold tracking-widest text-muted-foreground ${mono.className}`}
                                >
                                  <span className="truncate">SUB_{sub.id}</span>
                                  {sub.isForSale && (
                                    <span className="shrink-0 border border-secondary bg-secondary/10 px-1 text-[9px] text-secondary">
                                      {t.sidebar.saleBadge}
                                    </span>
                                  )}
                                </div>
                                <div
                                  className={`text-xs uppercase tracking-tight truncate text-muted-foreground group-hover:text-white transition-colors ${mono.className}`}
                                >
                                  {sub.title}
                                </div>
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </aside>

      {/* Main Map Area */}
      <main className="relative min-w-0 flex-1 bg-black">
        <button
          type="button"
          onClick={() => setMobileSidebarOpen(true)}
          className="absolute left-4 top-4 z-1001 flex items-center gap-2 border border-border bg-background/90 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-white shadow-[0_0_30px_rgba(0,0,0,0.55)] backdrop-blur md:hidden"
        >
          <PanelLeft className="h-4 w-4 text-primary" />
          {t.mapOverlay.projectsBtn}
        </button>

        {/* Zoom controls: below the "Projects" button on phones, top-left of the map from md up
            (the dossier panel takes the top-right corner). */}
        <div className="absolute left-4 top-16 z-1001 flex flex-col border border-border bg-background/90 shadow-[0_0_30px_rgba(0,0,0,0.55)] backdrop-blur md:top-4">
          {[
            { label: t.mapOverlay.zoomIn, Icon: Plus, onClick: () => map?.zoomIn() },
            { label: t.mapOverlay.zoomOut, Icon: Minus, onClick: () => map?.zoomOut() },
          ].map(({ label, Icon, onClick }) => (
            <button
              key={label}
              type="button"
              onClick={onClick}
              disabled={!map}
              aria-label={label}
              title={label}
              className="flex h-9 w-9 items-center justify-center text-white transition-colors first:border-b first:border-border hover:bg-primary hover:text-black disabled:opacity-40"
            >
              <Icon className="h-4 w-4" />
            </button>
          ))}
        </div>

        {/* Scanning Line overlay */}
        <motion.div
          animate={{ top: ["-10%", "110%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 w-full h-0.5 bg-primary z-10 pointer-events-none shadow-[0_0_15px_var(--color-primary)] opacity-50"
        />

        <MapContainer
          center={[53.0, -100.0]}
          zoom={2}
          style={{ height: "100%", width: "100%", background: "#0B0F14" }}
          zoomControl={false}
          ref={setMap}
        >
          <TileLayer
            attribution={`&copy; ${t.mapOverlay.disclaimer}`}
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png?key=cb1_2v0i_1_d240e927e07ac30a1bfdf6f6"
          />

          <MapFlyTo coordinates={flyToCoords} />

          {visibleGroups.map(({ parent: project, parentMatches }) => {
            if (!parentMatches) return null;
            const isSelected = selectedSiteId === project.id;
            const color = filterColor
              ? filterColor
              : project.isForSale
                ? "#00FF41"
                : isSelected
                  ? "#FF3300"
                  : "#888888";

            return (
              <Marker
                key={project.id}
                position={project.coordinates}
                icon={createCustomIcon(
                  color,
                  project.isForSale || isSelected || Boolean(activeFilter),
                )}
                eventHandlers={{
                  click: () => {
                    setSelectedSiteId(project.id);
                    setFlyToCoords(project.coordinates);
                  },
                }}
              >
                <Popup className="mining-popup" closeButton={false}>
                  <div
                    className={`font-sans bg-card border p-1 uppercase tracking-widest ${mono.className}`}
                    style={{ borderColor: color }}
                  >
                    <div className="font-bold text-white text-[10px] border-b border-border pb-1 mb-1">
                      {project.title}
                    </div>
                    <div className="text-[9px] text-muted-foreground">
                      {project.coordinates[0].toFixed(2)},{" "}
                      {project.coordinates[1].toFixed(2)}
                    </div>
                  </div>
                </Popup>
              </Marker>
            );
          })}

          {visibleGroups.map(({ parent: project, subs }) => {
            return subs.map((sub) => {
              const subSelected =
                selectedSiteId === sub.id || selectedSiteId === project.id;
              const subColor = filterColor
                ? filterColor
                : sub.isForSale
                  ? "#00FF41"
                  : subSelected
                    ? "#FF3300"
                    : "#888888";
              return (
                <Marker
                  key={`${project.id}-sub-${sub.id}`}
                  position={sub.coordinates}
                  icon={createCustomIcon(
                    subColor,
                    sub.isForSale || subSelected || Boolean(activeFilter),
                  )}
                  eventHandlers={{
                    click: () => {
                      setSelectedSiteId(sub.id);
                      setFlyToCoords(sub.coordinates);
                    },
                  }}
                >
                  <Popup className="mining-popup" closeButton={false}>
                    <div
                      className={`font-sans bg-card border p-1 uppercase tracking-widest ${mono.className}`}
                      style={{ borderColor: subColor }}
                    >
                      <div className="font-bold text-white text-[10px] border-b border-border pb-1 mb-1">
                        {sub.title}
                      </div>
                      {sub.isForSale && (
                        <div className="text-secondary text-[8px] border border-secondary bg-secondary/10 px-1 mb-1 inline-block">
                          {t.sidebar.saleBadge}
                        </div>
                      )}
                      <div className="text-[9px] text-muted-foreground">
                        {sub.coordinates[0].toFixed(2)},{" "}
                        {sub.coordinates[1].toFixed(2)}
                      </div>
                    </div>
                  </Popup>
                </Marker>
              );
            });
          })}
        </MapContainer>

        {/* Global styling for Leaflet elements & scrollbars */}
        <style>{`
          .leaflet-container { background: #060608 !important; }
          .leaflet-popup-content-wrapper { background: transparent; border: none; box-shadow: none; border-radius: 0; padding: 0; }
          .leaflet-popup-tip-container { display: none; }
          .mining-popup .leaflet-popup-content { margin: 0; }
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>

        {/* Horizontal Bottom Tag Filter Bar */}
        <div className="pointer-events-none absolute bottom-4 left-1/2 z-1000 flex -translate-x-1/2 justify-center w-[calc(100%-2rem)] max-w-6xl">
          <div className="pointer-events-auto flex items-center gap-1.5 border border-border bg-card/90 p-2 shadow-[0_0_30px_rgba(0,0,0,0.85)] backdrop-blur-md overflow-x-auto no-scrollbar w-full">
            <div
              className={`flex items-center gap-1.5 px-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary shrink-0 ${mono.className}`}
            >
              <Filter className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">{t.mapOverlay.tagsLabel}</span>
            </div>
            <div className="h-4 w-px bg-border shrink-0" />
            <button
              type="button"
              onClick={() => setActiveFilter(null)}
              className={`shrink-0 border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] transition-all ${mono.className} ${
                activeFilter === null
                  ? "border-primary bg-primary text-black"
                  : "border-border bg-background/70 text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {t.mapOverlay.allBtn}
            </button>
            {staticTags.map((tag) => {
              const isActive =
                activeFilter?.toLowerCase() === tag.toLowerCase();
              const tagColor = getTagColor(tag);
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setActiveFilter(isActive ? null : tag)}
                  style={
                    isActive && tagColor
                      ? {
                          backgroundColor: tagColor,
                          borderColor: tagColor,
                          color: "#000000",
                          boxShadow: `0 0 12px ${tagColor}`,
                        }
                      : {}
                  }
                  className={`shrink-0 border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] transition-all ${mono.className} ${
                    isActive
                      ? "font-extrabold"
                      : "border-border bg-background/70 text-muted-foreground hover:border-secondary hover:text-secondary"
                  }`}
                >
                  {tag}
                </button>
              );
            })}

            <div className="h-4 w-px shrink-0 bg-border" aria-hidden />
            <button
              type="button"
              aria-pressed={activeFilter === SPECIMENS_FILTER}
              onClick={() =>
                setActiveFilter(activeFilter === SPECIMENS_FILTER ? null : SPECIMENS_FILTER)
              }
              className={`inline-flex shrink-0 items-center gap-1.5 border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] transition-all ${mono.className} ${
                activeFilter === SPECIMENS_FILTER
                  ? "border-primary bg-primary text-black shadow-[0_0_12px_rgba(234,179,8,0.35)]"
                  : "border-primary/40 bg-primary/10 text-primary hover:border-primary hover:bg-primary/20"
              }`}
            >
              <Gem className="h-3 w-3" aria-hidden />
              {t.mapOverlay.specimensBtn}
            </button>
            {SPECIMEN_TAGS.map((tag) => {
              const isActive = activeFilter === tag;
              const tagColor = getTagColor(tag);
              return (
                <button
                  key={tag}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(isActive ? null : tag)}
                  style={
                    isActive && tagColor
                      ? {
                          backgroundColor: tagColor,
                          borderColor: tagColor,
                          color: "#000000",
                          boxShadow: `0 0 12px ${tagColor}`,
                        }
                      : {}
                  }
                  className={`shrink-0 border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] transition-all ${mono.className} ${
                    isActive
                      ? "font-extrabold"
                      : "border-border bg-background/70 text-muted-foreground hover:border-secondary hover:text-secondary"
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Info Panel Overlay - Brutalist Dossier */}
        <AnimatePresence>
          {selectedSite && (
            <motion.div
              initial={{ opacity: 0, x: 50, y: 24 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: 50, y: 24, transition: { duration: 0.2 } }}
              transition={{ type: "spring", stiffness: 400, damping: 40 }}
              className="absolute inset-x-3 bottom-3 top-auto z-1000 flex max-h-[68svh] flex-col border border-border bg-card/95 p-0 shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-xl md:inset-x-auto md:right-6 md:top-6 md:bottom-6 md:max-h-none md:w-96"
            >
              {/* Header Bar */}
              <div
                className={`flex justify-between items-center p-4 border-b border-border bg-background ${mono.className} text-[10px] tracking-widest uppercase`}
              >
                <span className="text-primary font-bold flex items-center gap-2">
                  <Activity className="h-3 w-3 animate-pulse" />
                  {t.dossier.targetLocked}
                </span>
                <button
                  onClick={() => setSelectedSiteId(null)}
                  className="text-[#666] hover:text-primary transition-colors border border-transparent hover:border-primary p-1"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 md:p-6 flex flex-col">
                <div className="relative w-full aspect-video border border-border mb-4 md:mb-6 bg-black overflow-hidden group">
                  <div className="absolute top-2 right-2 z-10 opacity-20">
                    <Cpu className="h-12 w-12 text-white" />
                  </div>
                  <img
                    src={selectedSite.image}
                    alt={selectedSite.title}
                    className="w-full h-full object-cover mix-blend-luminosity opacity-70 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(255,255,255,0.05)_50%)] bg-size-[100%_4px] mix-blend-overlay pointer-events-none" />
                </div>

                {selectedSite.isForSale && (
                  <div
                    className={`mb-3 md:mb-4 inline-block border border-secondary bg-secondary/10 px-3 py-1 text-[10px] font-bold tracking-widest text-secondary uppercase w-fit shadow-[0_0_10px_rgba(0,255,65,0.2)] ${mono.className}`}
                  >
                    {t.dossier.availableBadge}
                  </div>
                )}

                <h2 className="text-2xl md:text-3xl font-extrabold uppercase leading-none tracking-tighter mb-2">
                  {selectedSite.title}
                </h2>

                <div
                  className={`flex flex-col gap-1 mb-5 md:mb-8 text-[10px] tracking-widest uppercase text-muted-foreground ${mono.className}`}
                >
                  <span className="flex items-center gap-2 text-white">
                    <Target className="h-3 w-3 text-primary" /> ID:{" "}
                    {selectedSite.id}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="h-3 w-3 text-primary" /> {t.dossier.regionLabel}{" "}
                    {selectedSite.region}
                  </span>
                  <span className="flex items-center gap-2">
                    <Crosshair className="h-3 w-3 text-primary" /> {t.dossier.coordLabel}{" "}
                    {selectedSite.coordinates[0].toFixed(4)},{" "}
                    {selectedSite.coordinates[1].toFixed(4)}
                  </span>
                </div>

                <div className="flex-1">
                  <p
                    className={`text-[11px] md:text-xs text-[#AAA] leading-relaxed uppercase tracking-wide ${mono.className} border-l-2 border-primary pl-4`}
                  >
                    {selectedSite.summary}
                  </p>
                </div>

                <Link
                  href={getLocalizedPath(`/projects/${selectedSite.id}`, locale)}
                  className={`mt-5 md:mt-8 flex w-full items-center justify-between border border-primary bg-transparent hover:bg-primary hover:text-black text-primary p-4 text-[10px] font-bold uppercase tracking-widest transition-all ${mono.className} group`}
                >
                  <span>{t.dossier.accessDossier}</span>
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
