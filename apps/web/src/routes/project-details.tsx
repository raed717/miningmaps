import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, MapPin, Target, Lightbulb, TrendingUp } from "lucide-react";
import { projects } from "@/lib/mockData";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";

const createCustomIcon = () => {
  return L.divIcon({
    className: "custom-div-icon",
    html: `<div style="background-color: #F97316; width: 12px; height: 12px; border-radius: 50%; box-shadow: 0 0 15px #F97316; border: 2px solid #0B0F14"></div>`,
    iconSize: [12, 12],
    iconAnchor: [6, 6],
  });
};

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Project not found</h2>
          <Link to="/projects" className="mt-4 inline-block text-primary hover:underline">
            Back to projects
          </Link>
        </div>
      </div>
    );
  }

  // Generate random coords for the specific project mock map
  const mockCoords: [number, number] = [
    (Math.random() - 0.5) * 100,
    (Math.random() - 0.5) * 100,
  ];

  return (
    <div className="flex-1 overflow-y-auto bg-background">
      {/* Header Banner */}
      <div className="relative h-[40vh] min-h-[300px] w-full overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <Link 
              to="/projects" 
              className="mb-6 inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4 inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary backdrop-blur-md">
                <MapPin className="mr-1.5 h-3 w-3" />
                {project.region}
              </div>
              <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight md:text-6xl text-white">
                {project.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                  <Target className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-bold">The Challenge</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.problem}
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Lightbulb className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-bold">Our Solution</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10 text-green-500">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-bold">The Outcome</h2>
              </div>
              <div className="rounded-xl border border-border/50 bg-card p-6">
                <p className="text-lg font-medium text-foreground">
                  {project.outcome}
                </p>
              </div>
            </motion.section>
          </div>

          {/* Sidebar / Map Context */}
          <div className="space-y-6">
            <div className="rounded-xl border border-border/50 bg-card p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Location Context
              </h3>
              <div className="h-[300px] w-full overflow-hidden rounded-lg border border-border/50 relative">
                <MapContainer
                  center={mockCoords}
                  zoom={5}
                  style={{ height: "100%", width: "100%", background: "#0B0F14" }}
                  zoomControl={false}
                  scrollWheelZoom={false}
                  dragging={false}
                >
                  <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                  />
                  <Marker position={mockCoords} icon={createCustomIcon()} />
                </MapContainer>
              </div>
            </div>

            <div className="rounded-xl border border-border/50 bg-card p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Quick Facts
              </h3>
              <ul className="space-y-4 text-sm">
                <li className="flex justify-between border-b border-border/50 pb-2">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="font-medium text-foreground">14 Months</span>
                </li>
                <li className="flex justify-between border-b border-border/50 pb-2">
                  <span className="text-muted-foreground">Tech Stack</span>
                  <span className="font-medium text-foreground">LiDAR, AI, GeoJSON</span>
                </li>
                <li className="flex justify-between border-b border-border/50 pb-2">
                  <span className="text-muted-foreground">Team Size</span>
                  <span className="font-medium text-foreground">12 Specialists</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}