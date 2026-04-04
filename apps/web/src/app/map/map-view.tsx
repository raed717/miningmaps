"use client";

import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { motion, AnimatePresence } from "motion/react";
import { Layers, Activity, Filter, MapPin, ChevronRight, X, Briefcase, Tag } from "lucide-react";
import { propertiesForSale, projects } from "@/lib/mockData";
import Link from "next/link";


// Fix for default Leaflet icon in React
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Custom stylised markers
const createCustomIcon = (color: string) => {
  return L.divIcon({
    className: "custom-div-icon",
    html: `<div style="background-color: ${color}; width: 16px; height: 16px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 10px ${color};"></div>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
  });
};

const getResourceColor = (type: string) => {
  switch (type) {
    case "gold": return "#EAB308";
    case "copper": return "#F97316";
    case "lithium": return "#00C2FF";
    case "iron": return "#94A3B8";
    case "cobalt": return "#8B5CF6";
    default: return "#FFFFFF";
  }
};

export default function MapView() {
  const [selectedSiteId, setSelectedSiteId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"projects" | "properties">("projects");
  const [activeLayers, setActiveLayers] = useState<Record<string, boolean>>({
    gold: true,
    copper: true,
    lithium: true,
    iron: true,
    cobalt: true,
  });

  const selectedSite = activeTab === "properties" 
    ? propertiesForSale.find((s) => s.id === selectedSiteId)
    : projects.find((p) => p.id === selectedSiteId);

  const toggleLayer = (layer: string) => {
    setActiveLayers((prev) => ({ ...prev, [layer]: !prev[layer] }));
  };

  const visibleProperties = propertiesForSale.filter((site) => activeLayers[site.resourceType]);
  const visibleProjects = projects; // Projects don't have resource types to filter by currently

  return (
    <div className="flex h-full w-full overflow-hidden">
      {/* Left Sidebar */}
      <aside className="w-80 flex-shrink-0 border-r border-border/50 bg-card p-4 overflow-y-auto flex flex-col">
        <div className="mb-6 flex items-center gap-2 text-foreground">
          <Filter className="h-5 w-5 text-primary" />
          <h2 className="font-semibold tracking-tight">Map Data</h2>
        </div>

        {/* Tab Toggle */}
        <div className="flex rounded-lg bg-muted/50 p-1 mb-6">
          <button
            onClick={() => { setActiveTab("projects"); setSelectedSiteId(null); }}
            className={`flex-1 flex items-center justify-center gap-2 rounded-md py-2 text-sm font-medium transition-colors ${
              activeTab === "projects" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Briefcase className="h-4 w-4" />
            Portfolio
          </button>
          <button
            onClick={() => { setActiveTab("properties"); setSelectedSiteId(null); }}
            className={`flex-1 flex items-center justify-center gap-2 rounded-md py-2 text-sm font-medium transition-colors ${
              activeTab === "properties" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Tag className="h-4 w-4" />
            Marketplace
          </button>
        </div>
        
        <div className="space-y-6 flex-1">
          {activeTab === "properties" ? (
            <>
              <div>
                <h3 className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">Resources</h3>
                <div className="space-y-2">
                  {Object.keys(activeLayers).map((layer) => (
                    <label key={layer} className="flex cursor-pointer items-center justify-between rounded-md border border-transparent p-2 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div 
                          className="h-3 w-3 rounded-full" 
                          style={{ backgroundColor: getResourceColor(layer) }} 
                        />
                        <span className="text-sm font-medium capitalize">{layer}</span>
                      </div>
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={activeLayers[layer]}
                        onChange={() => toggleLayer(layer)}
                      />
                      <div className={`h-4 w-8 rounded-full transition-colors ${activeLayers[layer] ? 'bg-primary' : 'bg-muted'}`}>
                        <div className={`h-4 w-4 rounded-full bg-white transition-transform ${activeLayers[layer] ? 'translate-x-4' : 'translate-x-0'}`} />
                      </div>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="border-t border-border/50 pt-6">
                <h3 className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">Site Status</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2"><Activity className="h-4 w-4 text-green-500" /> Active</span>
                    <span className="text-muted-foreground">3</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2"><Activity className="h-4 w-4 text-yellow-500" /> Exploration</span>
                    <span className="text-muted-foreground">1</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2"><Activity className="h-4 w-4 text-muted-foreground" /> Inactive</span>
                    <span className="text-muted-foreground">1</span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div>
               <h3 className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">Portfolio Projects</h3>
               <div className="text-sm text-muted-foreground">
                  Displaying past case studies and GIS consulting projects completed by Adamson Geomatics.
               </div>
               <div className="mt-4 space-y-3">
                  {projects.map(p => (
                    <button 
                      key={p.id}
                      onClick={() => setSelectedSiteId(p.id)}
                      className={`w-full text-left flex items-start gap-3 p-3 rounded-lg border transition-colors ${selectedSiteId === p.id ? 'border-primary bg-primary/10' : 'border-border/50 hover:bg-muted/50'}`}
                    >
                      <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                      <div>
                        <div className="font-medium text-sm text-foreground line-clamp-1">{p.title}</div>
                        <div className="text-xs text-muted-foreground mt-1">{p.region}</div>
                      </div>
                    </button>
                  ))}
               </div>
            </div>
          )}
        </div>
      </aside>

      {/* Main Map Area */}
      <main className="relative flex-1 bg-background">
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
          
          {activeTab === "properties" && visibleProperties.map((site) => (
            <Marker
              key={site.id}
              position={site.coordinates}
              icon={createCustomIcon(getResourceColor(site.resourceType))}
              eventHandlers={{
                click: () => setSelectedSiteId(site.id),
              }}
            >
              <Popup className="mining-popup">
                <div className="font-sans">
                  <div className="font-semibold">{site.name}</div>
                  <div className="text-xs text-muted-foreground capitalize">{site.resourceType} • {site.status}</div>
                </div>
              </Popup>
            </Marker>
          ))}

          {activeTab === "projects" && visibleProjects.map((project) => (
            <Marker
              key={project.id}
              position={project.coordinates}
              icon={createCustomIcon("#ffffff")}
              eventHandlers={{
                click: () => setSelectedSiteId(project.id),
              }}
            >
              <Popup className="mining-popup">
                <div className="font-sans">
                  <div className="font-semibold">{project.title}</div>
                  <div className="text-xs text-muted-foreground">{project.region}</div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        {/* Global styling for Leaflet elements inside this scope */}
        <style>{`
          .leaflet-container { background: #0B0F14 !important; }
          .leaflet-popup-content-wrapper { background: #111822; color: #f8fafc; border: 1px solid #1e293b; border-radius: 8px; }
          .leaflet-popup-tip { background: #111822; border: 1px solid #1e293b; }
          .mining-popup .leaflet-popup-content { margin: 12px; }
        `}</style>

        {/* Right Info Panel Overlay */}
        <AnimatePresence>
          {selectedSite && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute bottom-6 right-6 top-6 z-[1000] w-96 rounded-xl border border-border/50 bg-card/95 p-6 shadow-2xl backdrop-blur-md overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedSiteId(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-background/80 p-1.5 text-muted-foreground hover:text-foreground backdrop-blur-sm transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              
              {activeTab === "properties" && "resourceType" in selectedSite ? (
                <>
                  <div className="mb-6 mt-2">
                    <div 
                      className="mb-3 inline-block rounded-full px-2 py-0.5 text-xs font-medium uppercase tracking-wider"
                      style={{ 
                        backgroundColor: `${getResourceColor(selectedSite.resourceType)}20`,
                        color: getResourceColor(selectedSite.resourceType),
                        border: `1px solid ${getResourceColor(selectedSite.resourceType)}50`
                      }}
                    >
                      {selectedSite.resourceType}
                    </div>
                    <h2 className="text-2xl font-bold">{selectedSite.name}</h2>
                    <div className="mt-1 flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-1 h-3 w-3" />
                      {selectedSite.region}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-lg bg-background p-4 border border-border/50">
                      <div className="text-xs text-muted-foreground mb-1">Estimated Value</div>
                      <div className="text-2xl font-semibold tracking-tight text-primary">
                        ${(selectedSite.estimatedValue / 1000000).toFixed(1)}M
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-lg bg-background p-4 border border-border/50">
                        <div className="text-xs text-muted-foreground mb-1">Depth</div>
                        <div className="font-medium">{selectedSite.depth}m</div>
                      </div>
                      <div className="rounded-lg bg-background p-4 border border-border/50">
                        <div className="text-xs text-muted-foreground mb-1">Status</div>
                        <div className="font-medium capitalize flex items-center gap-2">
                          <span className={`h-2 w-2 rounded-full ${selectedSite.status === 'active' ? 'bg-green-500' : selectedSite.status === 'exploration' ? 'bg-yellow-500' : 'bg-muted-foreground'}`} />
                          {selectedSite.status}
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg bg-background p-4 border border-border/50">
                      <div className="text-xs text-muted-foreground mb-1">Coordinates</div>
                      <div className="font-mono text-xs">
                        {selectedSite.coordinates[0].toFixed(4)}, {selectedSite.coordinates[1].toFixed(4)}
                      </div>
                    </div>

                    <button className="mt-4 flex w-full items-center justify-center rounded-md bg-primary py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                      Contact Sales
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </>
              ) : "summary" in selectedSite ? (
                <>
                  <div className="mb-6 mt-2 relative -mx-6 -mt-6">
                    <div className="h-48 w-full overflow-hidden rounded-t-xl">
                      <img src={selectedSite.image} alt={selectedSite.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
                  </div>
                  <div className="relative z-10 -mt-16 mb-4">
                    <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                      <Briefcase className="h-3.5 w-3.5" /> Case Study
                    </div>
                    <h2 className="text-2xl font-bold leading-tight mt-1">{selectedSite.title}</h2>
                    <div className="mt-2 flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-1 h-3 w-3" />
                      {selectedSite.region}
                    </div>
                  </div>

                  <div className="space-y-4">
                     <p className="text-sm text-muted-foreground leading-relaxed">
                       {selectedSite.summary}
                     </p>
                    
                    <div className="rounded-lg bg-background p-4 border border-border/50 mt-4">
                      <div className="text-xs text-muted-foreground mb-1">Location Coordinates</div>
                      <div className="font-mono text-xs">
                        {selectedSite.coordinates[0].toFixed(4)}, {selectedSite.coordinates[1].toFixed(4)}
                      </div>
                    </div>

                    <Link href={`/projects/${selectedSite.id}`} className="mt-6 flex w-full items-center justify-center rounded-md bg-primary py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                      Read Full Case Study
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </>
              ) : null}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}