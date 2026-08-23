"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const PdfPreview = dynamic(() => import("@/components/pdf-preview"), { ssr: false });

import { motion } from "motion/react";
import { ArrowLeft, MapPin, Target, Lightbulb, TrendingUp, PlayCircle, ExternalLink, Download } from "lucide-react";
import { projects } from "@/lib/projectData";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import Zoom from "react-medium-image-zoom";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ProjectImageGallery } from "@/components/project-image-gallery";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const createCustomIcon = () => {
  return L.divIcon({
    className: "custom-div-icon",
    html: `<div style="background-color: #F97316; width: 12px; height: 12px; border-radius: 50%; box-shadow: 0 0 15px #F97316; border: 2px solid #0B0F14"></div>`,
    iconSize: [12, 12],
    iconAnchor: [6, 6],
  });
};

export default function ProjectDetails({
  projectId,
}: {
  projectId: string;
}) {
  const [showFloatingBack, setShowFloatingBack] = useState(false);
  const project = projects.find((p) => p.id === projectId);

  const subProjects = (project?.subProjectIds || [])
    .map((subId) => projects.find((p) => p.id === subId))
    .filter((sub): sub is typeof projects[number] => !!sub);

  if (!project) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Project not found</h2>
          <Link
            href="/projects"
            className="mt-4 inline-block text-primary hover:underline"
          >
            Back to projects
          </Link>
        </div>
      </div>
    );
  }

  const mapCoords = project.coordinates;

  useEffect(() => {
    const handler = () => {
      setShowFloatingBack(window.scrollY > 250);
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="flex-1 overflow-y-auto bg-background relative">
      {/* Header Banner */}
      <div className="relative h-[40vh] min-h-[18.75rem] w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent" />

        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <Link
              href="/projects"
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur-md transition-all hover:border-primary hover:bg-background/90 hover:text-primary"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
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

      {/* Floating Back Button — visible when hero is scrolled past */}
      <Link
        href="/projects"
        className={`fixed bottom-6 left-6 z-50 flex items-center gap-2 rounded-full border border-primary/30 bg-background/80 px-3.5 py-2 text-[10px] font-bold uppercase tracking-widest text-primary shadow-lg backdrop-blur-md transition-all duration-300 hover:border-primary hover:bg-background hover:text-primary md:bottom-8 md:left-8 ${
          showFloatingBack
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back
      </Link>

      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="w-full min-w-0 lg:col-span-2 space-y-12">
            {subProjects.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <h2 className="text-2xl font-bold uppercase tracking-tight">Client Projects</h2>
                </div>

                <div className="w-full min-w-0 overflow-hidden rounded-xl border border-border/50 bg-card p-6 relative z-10">
                  <Carousel
                    opts={{
                      align: "start",
                      loop: subProjects.length > 2,
                    }}
                    plugins={[
                      Autoplay({
                        delay: 5000,
                      }),
                    ]}
                    className="w-full"
                  >
                    <CarouselContent className="-ml-4">
                      {subProjects.map((sub) => (
                        <CarouselItem key={sub.id} className="pl-4 basis-full sm:basis-1/2">
                          <Link
                            href={`/projects/${sub.id}`}
                            className="group relative flex flex-col h-48 overflow-hidden rounded-lg border border-border/40 bg-background/50 hover:border-primary/50 transition-colors duration-300"
                          >
                            {/* Card Image Background */}
                            <div className="absolute inset-0 bg-black">
                              <img
                                src={sub.image}
                                alt={sub.title}
                                className="w-full h-full object-cover opacity-30 group-hover:scale-105 group-hover:opacity-40 transition-all duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent" />
                            </div>

                            {/* Card Content */}
                            <div className="relative z-10 flex flex-col h-full p-4 justify-end">
                              <div className="text-[9px] font-bold tracking-widest text-primary uppercase mb-1 flex items-center gap-1">
                                <MapPin className="h-2.5 w-2.5" />
                                {sub.region.split(",")[0] || sub.region}
                              </div>
                              <h3 className="text-base font-bold uppercase tracking-tight text-white line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                                {sub.title}
                              </h3>
                              <p className="text-xs text-muted-foreground line-clamp-1 mt-1 font-mono uppercase tracking-wider">
                                {sub.summary}
                              </p>
                            </div>
                          </Link>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    {subProjects.length > 2 && (
                      <>
                        <CarouselPrevious className="-left-3 h-8 w-8 rounded-md border border-border bg-card hover:bg-primary hover:text-black transition-colors" />
                        <CarouselNext className="-right-3 h-8 w-8 rounded-md border border-border bg-card hover:bg-primary hover:text-black transition-colors" />
                      </>
                    )}
                  </Carousel>
                </div>
              </motion.section>
            )}

            {project.sections.map((section, index) => (
              <motion.section
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {section.heading && (
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Target className="h-5 w-5" />
                    </div>
                    <h2 className="text-2xl font-bold">{section.heading}</h2>
                  </div>
                )}

                {section.type === "SimpleImage" && section.image && (
                  <div className="overflow-hidden rounded-xl border border-border/50 bg-background/50 relative z-10 cursor-zoom-in flex flex-col items-center">
                    <Zoom zoomMargin={40}>
                      <img
                        src={section.image}
                        alt={section.heading || section.imageCaption || "Project image"}
                        className="max-w-full max-h-[600px] w-auto h-auto object-contain mx-auto"
                      />
                    </Zoom>
                    {section.imageCaption && (
                      <div className="w-full bg-background/90 p-3 text-center border-t border-border/50">
                        <p className="text-sm text-muted-foreground">
                          {section.imageCaption}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {section.type === "ImageGallery" && section.images && section.images.length > 0 && (
                  <ProjectImageGallery
                    images={section.images}
                    heading={section.heading}
                    galleryType={section.galleryType}
                  />
                )}

                {section.type === "PdfDocuments" && (
                  <div className="flex flex-col gap-8">
                    {section.documents.map((doc, docIdx) => (
                      <div key={docIdx} className="flex flex-col items-center p-6 border border-border/50 rounded-xl bg-card">
                        <div className="w-full overflow-hidden rounded-lg border border-border/50 shadow-sm">
                          <PdfPreview fileUrl={doc.fileUrl} />
                        </div>
                        <div className="mt-6 flex flex-col items-center gap-4">
                          {doc.description && (
                            <p className="text-sm text-muted-foreground text-center max-w-lg">
                              {doc.description}
                            </p>
                          )}
                          <a
                            href={doc.fileUrl}
                            download={doc.fileName || "document.pdf"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-6 py-2"
                          >
                            <Download className="mr-2 h-4 w-4" />
                            Download PDF
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {section.type === "kuulaFrame" && section.kuulaFrame && (
                  <div className="overflow-hidden rounded-xl border border-border/50 bg-card relative z-10">
                    <div className="relative w-full" style={{ paddingBottom: `${(section.kuulaFrame.height / section.kuulaFrame.width) * 100}%` }}>
                      <iframe
                        src={section.kuulaFrame.src}
                        className="absolute inset-0 h-full w-full rounded-xl"
                        style={{ border: 0 }}
                        allow="xr-spatial-tracking; gyroscope; accelerometer; fullscreen"
                        allowFullScreen={section.kuulaFrame.allowFullScreen ?? true}
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}

                {section.type === "paragraph" && (
                  <div className="space-y-4">
                    {section.image && (
                      <div className="overflow-hidden rounded-xl border border-border/50 bg-background/50 relative z-10 cursor-zoom-in flex flex-col items-center">
                        <Zoom zoomMargin={40}>
                          <img
                            src={section.image}
                            alt={section.heading || section.imageCaption || "Project image"}
                            className="max-w-full max-h-[600px] w-auto h-auto object-contain mx-auto"
                          />
                        </Zoom>
                        {section.imageCaption && (
                          <div className="w-full bg-background/90 p-3 text-center border-t border-border/50">
                            <p className="text-sm text-muted-foreground">
                              {section.imageCaption}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                    <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-wrap">
                      {section.content}
                    </p>
                  </div>
                )}

                {section.type === "bullet_list" &&
                  Array.isArray(section.content) && (
                    <ul className="space-y-3 rounded-xl border border-border/50 bg-card p-6">
                      {section.content.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <Lightbulb className="mr-3 h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-lg text-muted-foreground">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                {section.type === "table" && section.headers && section.rows && (
                  <div className="overflow-hidden rounded-xl border border-border/50 bg-card shadow-sm">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm">
                        <thead className="border-b border-border/50 bg-muted/50 text-xs font-bold uppercase tracking-wider text-primary">
                          <tr>
                            {section.headers.map((header, hIdx) => (
                              <th
                                key={hIdx}
                                className="px-5 py-3.5 whitespace-nowrap"
                              >
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border/40 font-mono text-xs">
                          {section.rows.map((row, rIdx) => (
                            <tr
                              key={rIdx}
                              className="transition-colors hover:bg-muted/30"
                            >
                              {row.map((cell, cIdx) => (
                                <td
                                  key={cIdx}
                                  className={`px-5 py-3.5 ${
                                    cIdx === section.headers.length - 1
                                      ? "min-w-[280px] max-w-xl whitespace-normal text-muted-foreground leading-relaxed"
                                      : "whitespace-nowrap text-muted-foreground"
                                  } ${
                                    cIdx === 0
                                      ? "font-sans font-semibold text-foreground"
                                      : ""
                                  }`}
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {section.caption && (
                      <div className="border-t border-border/50 bg-background/50 px-5 py-2.5 text-center text-xs text-muted-foreground">
                        {section.caption}
                      </div>
                    )}
                  </div>
                )}

                {"links" in section && (section as any).links && (section as any).links.length > 0 && (
                  <div className="flex flex-wrap gap-4 pt-2">
                    {(section as any).links.map((link: any, idx: number) => (
                      <HoverCard key={idx}>
                        <HoverCardTrigger asChild>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline font-medium cursor-pointer"
                          >
                            {link.textPreview || "See More"}
                          </a>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80">
                          <div className="space-y-3">
                            {link.image && (
                              <img
                                src={link.image}
                                alt="Link preview"
                                className="w-full h-32 object-cover rounded-md"
                              />
                            )}
                            <div className="space-y-1">
                              <h4 className="text-sm font-semibold leading-none">{link.url}</h4>
                              {link.description && (
                                <p className="text-sm text-muted-foreground">
                                  {link.description}
                                </p>
                              )}
                            </div>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    ))}
                  </div>
                )}

                {"VideoLinks" in section && (section as any).VideoLinks && (section as any).VideoLinks.length > 0 && (
                  <div
                    className={
                      (section as any).VideoLinks.length === 1
                        ? "flex justify-center pt-4"
                        : "grid gap-6 sm:grid-cols-2 pt-4"
                    }
                  >
                    {(section as any).VideoLinks.map((video: any, idx: number) => {
                      let embedUrl = "";
                      if (video.youtubeUrl) {
                        const ytMatch = video.youtubeUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
                        if (ytMatch && ytMatch[1]) {
                          embedUrl = `https://www.youtube.com/embed/${ytMatch[1]}`;
                        } else if (video.youtubeUrl.includes("youtube.com/embed/")) {
                          embedUrl = video.youtubeUrl;
                        }
                      } else if (video.googleDriveUrl || video.driveUrl) {
                        const rawUrl = video.googleDriveUrl || video.driveUrl;
                        const driveMatch = rawUrl.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || rawUrl.match(/id=([a-zA-Z0-9_-]+)/);
                        if (driveMatch && driveMatch[1]) {
                          embedUrl = `https://drive.google.com/file/d/${driveMatch[1]}/preview`;
                        }
                      } else if (video.url) {
                        const ytMatch = video.url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
                        const driveMatch = video.url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || video.url.match(/id=([a-zA-Z0-9_-]+)/);
                        if (ytMatch && ytMatch[1]) {
                          embedUrl = `https://www.youtube.com/embed/${ytMatch[1]}`;
                        } else if (driveMatch && driveMatch[1]) {
                          embedUrl = `https://drive.google.com/file/d/${driveMatch[1]}/preview`;
                        }
                      }

                      return (
                        <div
                          key={idx}
                          className={`flex flex-col overflow-hidden rounded-xl border border-border/50 bg-card ${
                            (section as any).VideoLinks.length === 1 ? "w-full max-w-2xl" : ""
                          }`}
                        >
                          <div className="relative aspect-video w-full bg-background/50 border-b border-border/50">
                            {embedUrl ? (
                              <iframe
                                src={embedUrl}
                                title={video.title}
                                className="absolute inset-0 h-full w-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              />
                            ) : video.vimeoUrl ? (
                              <a 
                                href={video.vimeoUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group flex h-full w-full flex-col items-center justify-center p-4 text-center hover:bg-primary/5 transition-colors"
                              >
                                <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary group-hover:bg-primary group-hover:text-black transition-all">
                                  <PlayCircle className="h-10 w-10" />
                                </div>
                                <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary group-hover:underline">
                                  Watch on Vimeo <ExternalLink className="h-4 w-4" />
                                </span>
                              </a>
                            ) : (
                              <div className="flex h-full w-full items-center justify-center p-4 text-sm text-muted-foreground text-center">
                                Invalid video URL or missing provider
                              </div>
                            )}
                          </div>
                          {(video.title || video.description) && (
                            <div className="p-4">
                              {video.title && (
                                <h4 className="font-bold text-foreground text-sm uppercase tracking-tight">{video.title}</h4>
                              )}
                              {video.description && (
                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                  {video.description}
                                </p>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </motion.section>
            ))}
          </div>

          {/* Sidebar / Map Context */}
          <div className="space-y-6">
            <div className="rounded-xl border border-border/50 bg-card p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Location Context
              </h3>
              <div className="relative h-[18.75rem] w-full overflow-hidden rounded-lg border border-border/50">
                <MapContainer
                  center={mapCoords}
                  zoom={5}
                  style={{
                    height: "100%",
                    width: "100%",
                    background: "#0B0F14",
                  }}
                  zoomControl={false}
                  scrollWheelZoom={false}
                  dragging={false}
                >
                  <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
                  <Marker position={mapCoords} icon={createCustomIcon()} />
                </MapContainer>
              </div>
              <a
                href={`https://www.google.com/maps?q=${project.coordinates[0]},${project.coordinates[1]}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md border border-primary/30 bg-primary/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary transition-all hover:bg-primary/20 hover:border-primary"
              >
                <MapPin className="h-3.5 w-3.5" />
                Open in Google Maps
              </a>
            </div>

            <div className="rounded-xl border border-border/50 bg-card p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Quick Facts
              </h3>
              <ul className="space-y-4 text-sm">
                {project.quickFacts ? (
                  project.quickFacts.map((fact, index) => (
                    <li key={index} className="flex justify-between border-b border-border/50 pb-2">
                      <span className="text-muted-foreground">{fact.label}</span>
                      <span className="font-medium text-foreground">{fact.value}</span>
                    </li>
                  ))
                ) : (
                  <>
                    <li className="flex justify-between border-b border-border/50 pb-2">
                      <span className="text-muted-foreground">Location</span>
                      <span className="font-medium text-foreground">{project.region}</span>
                    </li>
                    <li className="flex justify-between border-b border-border/50 pb-2">
                      <span className="text-muted-foreground">Availability</span>
                      <span className="font-medium text-foreground">
                        {project.isForSale ? "For Sale" : "Active"}
                      </span>
                    </li>
                  </>
                )}
              </ul>
            </div>

            {/* Parent / Sub Project Navigation */}
            {(project.parentProjectId || (project.subProjectIds && project.subProjectIds.length > 0)) && (
              <div className="rounded-xl border border-border/50 bg-card p-6">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Project Relations
                </h3>
                <div className="space-y-3 text-sm">
                  {project.parentProjectId && (() => {
                    const parent = projects.find((p) => p.id === project.parentProjectId);
                    return parent ? (
                      <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground">Parent Project</span>
                        <Link
                          href={`/projects/${parent.id}`}
                          className="font-medium text-primary hover:underline"
                        >
                          {parent.title}
                        </Link>
                      </div>
                    ) : null;
                  })()}
                  {project.subProjectIds && project.subProjectIds.length > 0 && (
                    <div className="flex flex-col">
                      <span className="text-xs text-muted-foreground">Sub Projects</span>
                      <ul className="mt-1 space-y-1">
                        {project.subProjectIds.map((subId) => {
                          const sub = projects.find((p) => p.id === subId);
                          return sub ? (
                            <li key={subId}>
                              <Link
                                href={`/projects/${sub.id}`}
                                className="font-medium text-primary hover:underline"
                              >
                                {sub.title}
                              </Link>
                            </li>
                          ) : null;
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}

            {(project.tags || project.date || project.author) && (
              <div className="rounded-xl border border-border/50 bg-card p-6 mt-6">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Project Meta
                </h3>
                <div className="space-y-4 text-sm">
                  {project.author && (
                    <div className="flex flex-col">
                      <span className="text-xs text-muted-foreground">Author</span>
                      {project.contactEmail ? (
                        <a 
                          href={`mailto:${project.contactEmail}`} 
                          className="font-medium text-primary hover:underline"
                        >
                          {project.author}
                        </a>
                      ) : (
                        <span className="font-medium text-foreground">{project.author}</span>
                      )}
                    </div>
                  )}
                  {project.date && (
                    <div className="flex flex-col">
                      <span className="text-xs text-muted-foreground">Date</span>
                      <span className="font-medium text-foreground">
                        {new Date(project.date).toLocaleDateString(undefined, {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                  )}
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-col pt-2">
                      <span className="text-xs text-muted-foreground mb-2">Tags</span>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center rounded-md bg-secondary/50 px-2 py-1 text-xs font-medium text-secondary-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
