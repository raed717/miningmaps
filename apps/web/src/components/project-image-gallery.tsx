"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Zoom from "react-medium-image-zoom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
  LayoutGrid,
  Grid3X3,
  Columns3,
  GalleryHorizontal,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Layers,
  Sparkles,
} from "lucide-react";
import { mono } from "@/lib/fonts";
import type { GalleryType } from "@/lib/projectData";

export interface GalleryImage {
  src: string;
  alt?: string;
  caption?: string;
}

interface ProjectImageGalleryProps {
  images: GalleryImage[];
  heading?: string;
  galleryType?: GalleryType;
}

export function ProjectImageGallery({
  images,
  heading,
  galleryType = "carousel",
}: ProjectImageGalleryProps) {
  // Normalize galleryType (handles both "mosaic" and "mosaique")
  const normalizedType =
    galleryType === "mosaique" ? "mosaic" : galleryType || "carousel";

  const [activeLayout, setActiveLayout] = useState<"mosaic" | "grid" | "masonry" | "carousel">(
    normalizedType
  );
  const [showAllMosaic, setShowAllMosaic] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Keep activeLayout in sync if prop changes
  useEffect(() => {
    setActiveLayout(normalizedType);
  }, [normalizedType]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % images.length : null
        );
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + images.length) % images.length : null
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, images.length]);

  if (!images || images.length === 0) return null;

  // Mosaic span calculation for varied bento / collage rhythm
  const getMosaicSpanClass = (index: number, total: number) => {
    if (total === 1) return "col-span-full row-span-2 min-h-[360px] md:min-h-[480px]";
    if (total === 2) return "col-span-1 row-span-1 min-h-[260px] md:min-h-[320px]";
    if (total === 3) {
      if (index === 0) return "sm:col-span-2 sm:row-span-2 min-h-[300px] md:min-h-[420px]";
      return "col-span-1 row-span-1 min-h-[200px]";
    }

    // Dynamic cycle pattern for 4+ items
    const mod = index % 7;
    switch (mod) {
      case 0:
        return "sm:col-span-2 sm:row-span-2 min-h-[300px] md:min-h-[440px]";
      case 1:
      case 2:
        return "sm:col-span-1 sm:row-span-1 min-h-[200px] md:min-h-[210px]";
      case 3:
        return "sm:col-span-2 md:col-span-2 sm:row-span-1 min-h-[220px]";
      case 4:
        return "sm:col-span-1 sm:row-span-1 min-h-[200px]";
      case 5:
        return "sm:col-span-1 sm:row-span-2 min-h-[320px]";
      case 6:
        return "sm:col-span-2 sm:row-span-1 min-h-[220px]";
      default:
        return "sm:col-span-1 sm:row-span-1 min-h-[200px]";
    }
  };

  const initialMosaicCount = 6;
  const displayedMosaicImages =
    showAllMosaic || images.length <= initialMosaicCount
      ? images
      : images.slice(0, initialMosaicCount);

  return (
    <div className="space-y-4">
      {/* Gallery Header & Layout Switcher Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/40 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary">
            <Layers className="h-3.5 w-3.5" />
          </div>
          <div>
            <span
              className={`text-[10px] font-bold uppercase tracking-[0.2em] text-primary ${mono.className}`}
            >
              IMAGE_GALLERY • {images.length} {images.length === 1 ? "FILE" : "ITEMS"}
            </span>
          </div>
        </div>

        {/* View Mode Selector Tabs */}
        <div className="inline-flex items-center rounded-lg border border-border/60 bg-card/80 p-0.5 text-xs backdrop-blur-xs">
          <button
            type="button"
            onClick={() => setActiveLayout("mosaic")}
            className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-medium transition-all ${
              activeLayout === "mosaic"
                ? "bg-primary text-primary-foreground font-bold shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
            title="Mosaique / Bento display"
          >
            <LayoutGrid className="h-3.5 w-3.5" />
            <span>Mosaique</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveLayout("grid")}
            className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-medium transition-all ${
              activeLayout === "grid"
                ? "bg-primary text-primary-foreground font-bold shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
            title="Geometric Grid display"
          >
            <Grid3X3 className="h-3.5 w-3.5" />
            <span>Grid</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveLayout("masonry")}
            className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-medium transition-all ${
              activeLayout === "masonry"
                ? "bg-primary text-primary-foreground font-bold shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
            title="Masonry waterfall display"
          >
            <Columns3 className="h-3.5 w-3.5" />
            <span>Masonry</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveLayout("carousel")}
            className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-medium transition-all ${
              activeLayout === "carousel"
                ? "bg-primary text-primary-foreground font-bold shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
            title="Carousel slideshow display"
          >
            <GalleryHorizontal className="h-3.5 w-3.5" />
            <span>Slides</span>
          </button>
        </div>
      </div>

      {/* 1. MOSAIQUE / MOSAIC VIEW */}
      {activeLayout === "mosaic" && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4 auto-rows-[200px] md:auto-rows-[220px]">
            {displayedMosaicImages.map((img, i) => {
              const isLastCardWithMore =
                !showAllMosaic &&
                i === initialMosaicCount - 1 &&
                images.length > initialMosaicCount;
              const remainingCount = images.length - initialMosaicCount;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className={`group relative overflow-hidden rounded-xl border border-border/50 bg-black/40 ${getMosaicSpanClass(
                    i,
                    images.length
                  )} hover:border-primary/60 transition-colors duration-300`}
                >
                  <Zoom zoomMargin={40}>
                    <img
                      src={img.src}
                      alt={img.alt || `Gallery visual ${i + 1}`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </Zoom>

                  {/* Gradient Vignette */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Image Index Tag */}
                  <div className="absolute top-2.5 left-2.5 z-10">
                    <span
                      className={`inline-flex items-center rounded-sm bg-black/70 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-primary backdrop-blur-md border border-primary/20 ${mono.className}`}
                    >
                      IMG {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Expand / Lightbox Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxIndex(i);
                    }}
                    className="absolute top-2.5 right-2.5 z-10 flex h-7 w-7 items-center justify-center rounded-sm border border-border/60 bg-black/70 text-white/80 opacity-0 backdrop-blur-md transition-all duration-200 group-hover:opacity-100 hover:border-primary hover:text-primary"
                    title="Open Fullscreen Lightbox"
                  >
                    <Maximize2 className="h-3.5 w-3.5" />
                  </button>

                  {/* Bottom Caption / Alt Text Overlay */}
                  {(img.alt || img.caption) && (
                    <div className="absolute inset-x-0 bottom-0 z-10 p-3 transform translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200">
                      <p className="text-xs font-medium text-white/90 line-clamp-2 drop-shadow-sm">
                        {img.caption || img.alt}
                      </p>
                    </div>
                  )}

                  {/* "+N More" Overlay on the last card */}
                  {isLastCardWithMore && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowAllMosaic(true);
                      }}
                      className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/80 backdrop-blur-xs text-white p-4 transition-all hover:bg-black/70 group/more cursor-pointer"
                    >
                      <Sparkles className="h-6 w-6 text-primary mb-1 animate-pulse" />
                      <span className="text-2xl font-extrabold tracking-tight text-primary">
                        +{remainingCount + 1}
                      </span>
                      <span
                        className={`mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/90 ${mono.className}`}
                      >
                        View Full Mosaic
                      </span>
                    </button>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Show More / Show Less Toggle Button */}
          {images.length > initialMosaicCount && (
            <div className="flex justify-center pt-2">
              <button
                type="button"
                onClick={() => setShowAllMosaic(!showAllMosaic)}
                className={`inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-card px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-primary shadow-sm backdrop-blur-md transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground cursor-pointer ${mono.className}`}
              >
                {showAllMosaic ? (
                  <>Collapse Mosaic View ({initialMosaicCount} items)</>
                ) : (
                  <>
                    Show All {images.length} Photos (
                    <span className="text-foreground">
                      +{images.length - initialMosaicCount}
                    </span>
                    )
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      )}

      {/* 2. UNIFORM GRID VIEW */}
      {activeLayout === "grid" && (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: (i % 12) * 0.03 }}
              className="group relative aspect-4/3 overflow-hidden rounded-xl border border-border/50 bg-black/40 hover:border-primary/60 transition-colors"
            >
              <Zoom zoomMargin={40}>
                <img
                  src={img.src}
                  alt={img.alt || `Grid image ${i + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </Zoom>

              {/* Badges & Overlays */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-40 group-hover:opacity-80 transition-opacity" />
              <div className="absolute top-2 left-2 z-10">
                <span
                  className={`rounded-sm bg-black/70 px-1.5 py-0.5 text-[9px] font-bold text-primary border border-primary/20 backdrop-blur-md ${mono.className}`}
                >
                  #{String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(i);
                }}
                className="absolute top-2 right-2 z-10 flex h-6 w-6 items-center justify-center rounded-sm border border-border/60 bg-black/70 text-white/80 opacity-0 transition-opacity group-hover:opacity-100 hover:text-primary cursor-pointer"
                title="Zoom view"
              >
                <Maximize2 className="h-3 w-3" />
              </button>

              {img.alt && (
                <div className="absolute inset-x-0 bottom-0 z-10 p-2.5">
                  <p className="text-[11px] text-white/90 line-clamp-1">
                    {img.alt}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      )}

      {/* 3. MASONRY WATERFALL VIEW */}
      {activeLayout === "masonry" && (
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 space-y-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: (i % 9) * 0.03 }}
              className="group relative break-inside-avoid overflow-hidden rounded-xl border border-border/50 bg-black/40 hover:border-primary/60 transition-colors"
            >
              <Zoom zoomMargin={40}>
                <img
                  src={img.src}
                  alt={img.alt || `Masonry photo ${i + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </Zoom>

              <div className="absolute top-2.5 left-2.5 z-10">
                <span
                  className={`rounded-sm bg-black/75 px-1.5 py-0.5 text-[9px] font-bold text-primary border border-primary/20 backdrop-blur-md ${mono.className}`}
                >
                  IMG {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(i);
                }}
                className="absolute top-2.5 right-2.5 z-10 flex h-6 w-6 items-center justify-center rounded-sm border border-border/60 bg-black/70 text-white/80 opacity-0 transition-opacity group-hover:opacity-100 hover:text-primary cursor-pointer"
              >
                <Maximize2 className="h-3 w-3" />
              </button>

              {img.alt && (
                <div className="p-3 bg-card/90 border-t border-border/40">
                  <p className="text-xs text-muted-foreground">{img.alt}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      )}

      {/* 4. CAROUSEL / SLIDESHOW VIEW */}
      {activeLayout === "carousel" && (
        <div className="overflow-hidden rounded-xl border border-border/50 bg-background/50 relative z-10 p-4 md:p-6">
          <Carousel
            opts={{
              align: "start",
              loop: images.length > 2,
            }}
            plugins={[
              Autoplay({
                delay: 4500,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-3 md:-ml-4">
              {images.map((img, i) => (
                <CarouselItem
                  key={i}
                  className="pl-3 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="group relative overflow-hidden rounded-lg border border-border/40 bg-black/40 aspect-square flex items-center justify-center">
                    <Zoom zoomMargin={40}>
                      <img
                        src={img.src}
                        alt={img.alt || `Gallery slide ${i + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </Zoom>

                    {/* Overlay chip */}
                    <div className="absolute top-2 left-2 z-10">
                      <span
                        className={`rounded-sm bg-black/80 px-2 py-0.5 text-[9px] font-bold text-primary border border-primary/20 ${mono.className}`}
                      >
                        {String(i + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightboxIndex(i);
                      }}
                      className="absolute top-2 right-2 z-10 flex h-6 w-6 items-center justify-center rounded-sm bg-black/80 text-white/80 opacity-0 transition-opacity group-hover:opacity-100 hover:text-primary cursor-pointer"
                    >
                      <Maximize2 className="h-3 w-3" />
                    </button>

                    {img.alt && (
                      <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/90 to-transparent p-3">
                        <p className="text-xs text-white/90 line-clamp-1">
                          {img.alt}
                        </p>
                      </div>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {images.length > 1 && (
              <>
                <CarouselPrevious className="left-2 bg-card/90 border-border hover:bg-primary hover:text-black transition-colors" />
                <CarouselNext className="right-2 bg-card/90 border-border hover:bg-primary hover:text-black transition-colors" />
              </>
            )}
          </Carousel>
        </div>
      )}

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex flex-col items-center justify-between bg-black/95 p-4 backdrop-blur-md md:p-8 select-none"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Top Toolbar */}
            <div
              className="flex w-full max-w-6xl items-center justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`rounded-sm bg-primary/20 px-2.5 py-1 text-xs font-bold uppercase tracking-widest text-primary border border-primary/30 ${mono.className}`}
                >
                  IMG {String(lightboxIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
                </span>
                {heading && (
                  <span className="text-sm font-semibold text-white/80 hidden sm:inline">
                    {heading}
                  </span>
                )}
              </div>

              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border/80 bg-white/10 text-white transition-colors hover:bg-primary hover:text-black cursor-pointer"
                title="Close lightbox (Esc)"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Main Lightbox Image Viewport */}
            <div
              className="relative flex h-[70vh] w-full max-w-5xl items-center justify-center py-2"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Previous Button */}
              {images.length > 1 && (
                <button
                  type="button"
                  onClick={() =>
                    setLightboxIndex((prev) =>
                      prev !== null
                        ? (prev - 1 + images.length) % images.length
                        : null
                    )
                  }
                  className="absolute left-2 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-all hover:border-primary hover:bg-primary hover:text-black md:-left-6 cursor-pointer"
                  title="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
              )}

              <AnimatePresence mode="wait">
                <motion.div
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="flex h-full w-full items-center justify-center"
                >
                  <img
                    src={images[lightboxIndex].src}
                    alt={
                      images[lightboxIndex].alt ||
                      `Lightbox view ${lightboxIndex + 1}`
                    }
                    className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Next Button */}
              {images.length > 1 && (
                <button
                  type="button"
                  onClick={() =>
                    setLightboxIndex((prev) =>
                      prev !== null ? (prev + 1) % images.length : null
                    )
                  }
                  className="absolute right-2 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-all hover:border-primary hover:bg-primary hover:text-black md:-right-6 cursor-pointer"
                  title="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              )}
            </div>

            {/* Bottom Info & Thumbnail Strip */}
            <div
              className="flex w-full max-w-4xl flex-col items-center gap-3"
              onClick={(e) => e.stopPropagation()}
            >
              {images[lightboxIndex].alt && (
                <p className="text-center text-sm font-medium text-white/90 max-w-xl">
                  {images[lightboxIndex].alt}
                </p>
              )}

              {/* Thumbnail Strip */}
              {images.length > 1 && (
                <div className="flex max-w-full items-center gap-2 overflow-x-auto p-1 scrollbar-none">
                  {images.map((thumb, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setLightboxIndex(idx)}
                      className={`relative h-12 w-16 shrink-0 overflow-hidden rounded-md border transition-all cursor-pointer ${
                        idx === lightboxIndex
                          ? "border-primary scale-105 shadow-md shadow-primary/30"
                          : "border-border/50 opacity-50 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={thumb.src}
                        alt="thumbnail"
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
