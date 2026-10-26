"use client";

// Leaflet touches `window` at import time, so this map is loaded with `ssr: false`
// while the rest of the project page is server-rendered for SEO.
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";

const markerIcon = L.divIcon({
  className: "custom-div-icon",
  html: `<div style="background-color: #F97316; width: 12px; height: 12px; border-radius: 50%; box-shadow: 0 0 15px #F97316; border: 2px solid #0B0F14"></div>`,
  iconSize: [12, 12],
  iconAnchor: [6, 6],
});

export default function ProjectLocationMap({ coordinates }: { coordinates: [number, number] }) {
  return (
    <MapContainer
      center={coordinates}
      zoom={5}
      style={{
        height: "100%",
        width: "100%",
        background: "#0B0F14",
        zIndex: 0,
      }}
      zoomControl={false}
      scrollWheelZoom={false}
      dragging={false}
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png?key=cb1_2v0i_1_d240e927e07ac30a1bfdf6f6" />
      <Marker position={coordinates} icon={markerIcon} />
    </MapContainer>
  );
}
