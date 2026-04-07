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
  X,
  Target,
  Cpu,
  Database,
} from "lucide-react";
import { projects } from "@/lib/projectData";
import Link from "next/link";
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700", "800"] });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "700"] });

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
      map.flyTo(coordinates, 6, {
        duration: 1.5,
        easeLinearity: 0.25,
      });
    }
  }, [coordinates, map]);
  return null;
}

export default function MapView() {
  const [selectedSiteId, setSelectedSiteId] = useState<string | null>(null);
  const [showOnlyForSale, setShowOnlyForSale] = useState(false);

  const selectedSite = projects.find((p) => p.id === selectedSiteId);

  const visibleProjects = projects.filter(
    (site) => !showOnlyForSale || site.isForSale
  );

  return (
    <div className={`flex h-full w-full overflow-hidden bg-background text-foreground selection:bg-primary selection:text-white ${inter.className}`}>
      
      {/* GLOBAL NOISE TEXTURE */}
      <div 
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Left Sidebar - Brutalist */}
      <aside className="w-80 shrink-0 border-r border-border bg-card p-0 overflow-y-auto flex flex-col relative z-20 shadow-[10px_0_30px_rgba(0,0,0,0.8)]">
        
        {/* Header */}
        <div className="p-6 border-b border-border bg-background">
          <div className={`text-primary font-bold tracking-[0.2em] text-[10px] mb-2 flex items-center gap-2 ${mono.className}`}>
            <Database className="h-3 w-3" /> MAP_DATABASE
          </div>
          <h2 className="text-3xl font-extrabold uppercase tracking-tighter leading-none">
            Global<br/>Telemetry
          </h2>
        </div>

        {/* Filters */}
        <div className="p-6 border-b border-border">
          <label className="flex cursor-pointer items-center justify-between group">
            <div className="flex items-center gap-3">
              <Filter className={`h-4 w-4 ${showOnlyForSale ? "text-secondary" : "text-[#555]"}`} />
              <span className={`text-xs font-bold uppercase tracking-widest ${mono.className} ${showOnlyForSale ? "text-secondary" : "text-muted-foreground"}`}>
                Available Assets Only
              </span>
            </div>
            <input
              type="checkbox"
              className="sr-only"
              checked={showOnlyForSale}
              onChange={() => setShowOnlyForSale(!showOnlyForSale)}
            />
            <div className={`h-5 w-10 border border-border transition-colors flex items-center px-1 ${showOnlyForSale ? "bg-secondary/20 border-secondary" : "bg-muted"}`}>
              <div className={`h-3 w-3 bg-white transition-transform ${showOnlyForSale ? "translate-x-5 bg-secondary" : "translate-x-0 bg-[#555]"}`} />
            </div>
          </label>
        </div>

        {/* Project List */}
        <div className="flex-1 flex flex-col">
          <div className={`px-6 py-3 bg-muted border-b border-border text-[9px] uppercase tracking-widest font-bold text-[#666] ${mono.className} flex justify-between`}>
            <span>IDENTIFIED TARGETS</span>
            <span>[{visibleProjects.length}]</span>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {visibleProjects.map((p) => {
              const isSelected = selectedSiteId === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedSiteId(p.id)}
                  className={`w-full text-left flex items-stretch border-b border-accent transition-all duration-300 group ${
                    isSelected ? "bg-primary/10" : "hover:bg-muted"
                  }`}
                >
                  <div className={`w-1 transition-colors ${isSelected ? "bg-primary" : "bg-transparent group-hover:bg-[#333]"}`} />
                  
                  <div className="flex-1 p-4 flex gap-4">
                    {/* Small Image Thumbnail */}
                    <div className={`h-16 w-16 shrink-0 overflow-hidden border ${isSelected ? "border-primary" : "border-border grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100"}`}>
                      <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
                    </div>
                    
                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                      <div className={`text-[10px] text-primary tracking-widest font-bold mb-1 flex items-center justify-between ${mono.className}`}>
                        <span>ID_{p.id}</span>
                        {p.isForSale && (
                          <span className="text-secondary px-1 border border-secondary bg-secondary/10">SALE</span>
                        )}
                      </div>
                      <div className="font-bold text-sm uppercase tracking-tight truncate group-hover:text-white transition-colors">
                        {p.title}
                      </div>
                      <div className={`text-[10px] text-[#666] mt-1 truncate uppercase ${mono.className}`}>
                        LOC: {p.region}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </aside>

      {/* Main Map Area */}
      <main className="relative flex-1 bg-black">
        {/* Scanning Line overlay */}
        <motion.div 
          animate={{ top: ['-10%', '110%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 w-full h-0.5 bg-primary z-10 pointer-events-none shadow-[0_0_15px_var(--color-primary)] opacity-50"
        />

        <MapContainer
          center={[53.0, -100.0]}
          zoom={3}
          style={{ height: "100%", width: "100%", background: "#0B0F14" }}
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://carto.com/">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />

          <MapFlyTo coordinates={selectedSite ? selectedSite.coordinates : null} />

          {visibleProjects.map((project) => {
            const isSelected = selectedSiteId === project.id;
            const color = project.isForSale ? "#00FF41" : (isSelected ? "#FF3300" : "#888888");
            
            return (
              <Marker
                key={project.id}
                position={project.coordinates}
                icon={createCustomIcon(color, project.isForSale || isSelected)}
                eventHandlers={{
                  click: () => setSelectedSiteId(project.id),
                }}
              >
                <Popup className="mining-popup" closeButton={false}>
                  <div className={`font-sans bg-card border border-[${color}] p-1 uppercase tracking-widest ${mono.className}`}>
                    <div className="font-bold text-white text-[10px] border-b border-border pb-1 mb-1">{project.title}</div>
                    <div className="text-[9px] text-muted-foreground">
                      {project.coordinates[0].toFixed(2)}, {project.coordinates[1].toFixed(2)}
                    </div>
                  </div>
                </Popup>
              </Marker>
            )
          })}
        </MapContainer>

        {/* Global styling for Leaflet elements */}
        <style>{`
          .leaflet-container { background: #060608 !important; }
          .leaflet-popup-content-wrapper { background: transparent; border: none; box-shadow: none; border-radius: 0; padding: 0; }
          .leaflet-popup-tip-container { display: none; }
          .mining-popup .leaflet-popup-content { margin: 0; }
        `}</style>

        {/* Right Info Panel Overlay - Brutalist Dossier */}
        <AnimatePresence>
          {selectedSite && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50, transition: { duration: 0.2 } }}
              transition={{ type: "spring", stiffness: 400, damping: 40 }}
              className="absolute bottom-6 right-6 top-6 z-1000 w-96 border border-border bg-card/95 p-0 shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-xl flex flex-col"
            >
              {/* Header Bar */}
              <div className={`flex justify-between items-center p-4 border-b border-border bg-background ${mono.className} text-[10px] tracking-widest uppercase`}>
                <span className="text-primary font-bold flex items-center gap-2">
                  <Activity className="h-3 w-3 animate-pulse" />
                  TARGET_LOCKED
                </span>
                <button
                  onClick={() => setSelectedSiteId(null)}
                  className="text-[#666] hover:text-primary transition-colors border border-transparent hover:border-primary p-1"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 flex flex-col">
                <div className="relative w-full aspect-video border border-border mb-6 bg-black overflow-hidden group">
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
                  <div className={`mb-4 inline-block border border-secondary bg-secondary/10 px-3 py-1 text-[10px] font-bold tracking-widest text-secondary uppercase w-fit shadow-[0_0_10px_rgba(0,255,65,0.2)] ${mono.className}`}>
                    AVAILABLE_FOR_ACQUISITION
                  </div>
                )}
                
                <h2 className="text-3xl font-extrabold uppercase leading-none tracking-tighter mb-2">
                  {selectedSite.title}
                </h2>
                
                <div className={`flex flex-col gap-1 mb-8 text-[10px] tracking-widest uppercase text-muted-foreground ${mono.className}`}>
                  <span className="flex items-center gap-2 text-white">
                    <Target className="h-3 w-3 text-primary" /> ID: {selectedSite.id}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="h-3 w-3 text-primary" /> REGION: {selectedSite.region}
                  </span>
                  <span className="flex items-center gap-2">
                    <Crosshair className="h-3 w-3 text-primary" /> COORD: {selectedSite.coordinates[0].toFixed(4)}, {selectedSite.coordinates[1].toFixed(4)}
                  </span>
                </div>

                <div className="flex-1">
                  <p className={`text-xs text-[#AAA] leading-relaxed uppercase tracking-wide ${mono.className} border-l-2 border-primary pl-4`}>
                    {selectedSite.summary}
                  </p>
                </div>

                <Link
                  href={`/projects/${selectedSite.id}`}
                  className={`mt-8 flex w-full items-center justify-between border border-primary bg-transparent hover:bg-primary hover:text-black text-primary p-4 text-[10px] font-bold uppercase tracking-widest transition-all ${mono.className} group`}
                >
                  <span>ACCESS_FULL_DOSSIER</span>
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

