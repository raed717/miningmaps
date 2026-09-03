"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
} from "recharts";
import { projects } from "@/lib/projectData";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import { Map, Activity, Layers, DollarSign } from "lucide-react";

const createCustomIcon = () => {
  return L.divIcon({
    className: "custom-div-icon",
    html: `<div style="background-color: #00C2FF; width: 8px; height: 8px; border-radius: 50%; box-shadow: 0 0 10px #00C2FF;"></div>`,
    iconSize: [8, 8],
    iconAnchor: [4, 4],
  });
};

const resourceData = [
  { name: "Gold", value: 450 },
  { name: "Lithium", value: 1200 },
  { name: "Copper", value: 650 },
  { name: "Iron", value: 300 },
  { name: "Cobalt", value: 800 },
];

const activityData = [
  { month: "Jan", active: 12, exploration: 5 },
  { month: "Feb", active: 15, exploration: 6 },
  { month: "Mar", active: 18, exploration: 8 },
  { month: "Apr", active: 22, exploration: 10 },
  { month: "May", active: 25, exploration: 14 },
  { month: "Jun", active: 30, exploration: 18 },
];

function MeasuredChart({
  children,
}: {
  children: (size: { width: number; height: number }) => React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const height = 300;

  useEffect(() => {
    const element = containerRef.current;

    if (!element) {
      return;
    }

    const updateWidth = () => {
      setWidth(Math.floor(element.getBoundingClientRect().width));
    };

    updateWidth();

    const observer = new ResizeObserver(() => {
      updateWidth();
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="h-[18.75rem] min-w-0 w-full">
      {width > 0 ? children({ width, height }) : null}
    </div>
  );
}

export default function Dashboard() {
  const propertiesForSale = projects.filter((p) => p.isForSale);

  return (
    <div className="flex-1 overflow-y-auto bg-background p-6 md:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            Executive Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">
            Real-time overview of global operations and resource allocation.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-xl border border-border/50 bg-card p-6 shadow-sm"
          >
            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
              <h3 className="tracking-tight text-sm font-medium text-muted-foreground">
                Total Sites
              </h3>
              <Map className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="text-3xl font-bold">{propertiesForSale.length}</div>
            <p className="text-xs text-muted-foreground mt-1">
              +2 from last month
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-xl border border-border/50 bg-card p-6 shadow-sm"
          >
            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
              <h3 className="tracking-tight text-sm font-medium text-muted-foreground">
                Active Regions
              </h3>
              <Activity className="h-4 w-4 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary">4</div>
            <p className="text-xs text-muted-foreground mt-1">
              Across 3 continents
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-xl border border-border/50 bg-card p-6 shadow-sm"
          >
            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
              <h3 className="tracking-tight text-sm font-medium text-muted-foreground">
                Resource Types
              </h3>
              <Layers className="h-4 w-4 text-chart-2" />
            </div>
            <div className="text-3xl font-bold text-chart-2">5</div>
            <p className="text-xs text-muted-foreground mt-1">
              Diversified portfolio
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="rounded-xl border border-border/50 bg-card p-6 shadow-sm"
          >
            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
              <h3 className="tracking-tight text-sm font-medium text-muted-foreground">
                Active Listings
              </h3>
              <DollarSign className="h-4 w-4 text-green-500" />
            </div>
            <div className="text-3xl font-bold text-green-500">
              {propertiesForSale.length}
            </div>
            <p className="text-xs text-muted-foreground mt-1">Ready for sale</p>
          </motion.div>
        </div>

        {/* Charts Row */}
        <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="col-span-1 min-w-0 rounded-xl border border-border/50 bg-card p-6 shadow-sm lg:col-span-2"
          >
            <h3 className="text-lg font-semibold mb-6">Activity Over Time</h3>
            <MeasuredChart>
              {({ width, height }) => (
                <LineChart
                  width={width}
                  height={height}
                  data={activityData}
                  margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#1e293b"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="month"
                    stroke="#64748b"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="#64748b"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#111822",
                      borderColor: "#1e293b",
                      color: "#f8fafc",
                    }}
                    itemStyle={{ color: "#f8fafc" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="active"
                    stroke="#00C2FF"
                    strokeWidth={3}
                    dot={{ r: 4, strokeWidth: 2 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="exploration"
                    stroke="#F97316"
                    strokeWidth={3}
                    dot={{ r: 4, strokeWidth: 2 }}
                  />
                </LineChart>
              )}
            </MeasuredChart>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="min-w-0 rounded-xl border border-border/50 bg-card p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold mb-6">
              Resource Distribution
            </h3>
            <MeasuredChart>
              {({ width, height }) => (
                <BarChart
                  width={width}
                  height={height}
                  data={resourceData}
                  layout="vertical"
                  margin={{ top: 0, right: 0, bottom: 0, left: 20 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#1e293b"
                    horizontal={false}
                  />
                  <XAxis
                    type="number"
                    stroke="#64748b"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    hide
                  />
                  <YAxis
                    dataKey="name"
                    type="category"
                    stroke="#64748b"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip
                    cursor={{ fill: "#1e293b" }}
                    contentStyle={{
                      backgroundColor: "#111822",
                      borderColor: "#1e293b",
                      color: "#f8fafc",
                    }}
                  />
                  <Bar
                    dataKey="value"
                    fill="#00C2FF"
                    radius={[0, 4, 4, 0]}
                    barSize={24}
                  />
                </BarChart>
              )}
            </MeasuredChart>
          </motion.div>
        </div>

        {/* Mini Map Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="rounded-xl border border-border/50 bg-card p-6 shadow-sm"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Global Distribution</h3>
            <button className="text-sm text-primary hover:underline">
              View Full Map
            </button>
          </div>
          <div className="relative h-[18.75rem] w-full overflow-hidden rounded-lg border border-border/50">
            {/* Using a non-interactive minimap for the dashboard */}
            <MapContainer
              center={[20, 0]}
              zoom={1.5}
              style={{ height: "100%", width: "100%", background: "#0B0F14" }}
              zoomControl={false}
              scrollWheelZoom={false}
              dragging={false}
            >
              <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png?key=cb1_2v0i_1_d240e927e07ac30a1bfdf6f6" />
              {propertiesForSale.map((site) => (
                <Marker
                  key={site.id}
                  position={site.coordinates}
                  icon={createCustomIcon()}
                />
              ))}
            </MapContainer>
            <div className="absolute inset-0 pointer-events-none bg-linear-to-t from-background/80 to-transparent z-400"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
