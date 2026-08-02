"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, MapPin, FileText, Hash, Users, Layers, Calendar, Bookmark, ScrollText } from "lucide-react";
import { mono } from "@/lib/fonts";
import type { OtherProject } from "@/lib/otherProjectsData";

interface ProjectDetailModalProps {
  project: OtherProject | null;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  useEffect(() => {
    if (!project) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 backdrop-blur-sm md:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto border border-border bg-card shadow-[0_0_60px_rgba(0,0,0,0.6)]"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute right-3 top-3 z-10 rounded-sm border border-border/50 bg-black/60 p-2 text-white/80 transition-colors hover:text-primary"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Header */}
            <div className="border-b border-border/50 p-5 pr-14 md:p-6">
              <div className={`mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary ${mono.className}`}>
                <FileText className="h-3 w-3" />
                TENURE_DETAIL
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary/60" />
                <h2 className="text-lg font-extrabold uppercase tracking-tight text-white md:text-xl">
                  {project["Group Name"]}
                </h2>
              </div>
              <div className={`mt-2 flex flex-wrap gap-3 text-[10px] uppercase tracking-wider text-muted-foreground ${mono.className}`}>
                <span>Map: {project["Map Number"]}</span>
                <span>Tenures: {project.Tenure_Count}</span>
                <span>Area: {project.Total_Area_ha.toLocaleString()} ha</span>
                {project.Status && (
                  <span className={project.Status === "GOOD" ? "text-secondary" : ""}>
                    {project.Status}
                  </span>
                )}
              </div>
            </div>

            {/* Body */}
            <div className="space-y-5 p-5 md:p-6">
              {/* Titles */}
              <div>
                <span className={`flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground ${mono.className}`}>
                  <Hash className="h-3 w-3" /> Titles
                </span>
                <p className={`mt-1.5 text-sm leading-relaxed text-white ${mono.className}`}>{project.Titles}</p>
              </div>

              {/* Owners */}
              <div>
                <span className={`flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground ${mono.className}`}>
                  <Users className="h-3 w-3" /> Owners
                </span>
                <p className={`mt-1.5 text-sm leading-relaxed text-white ${mono.className}`}>{project.Owners}</p>
              </div>

              {/* Subtypes */}
              <div>
                <span className={`flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground ${mono.className}`}>
                  <Layers className="h-3 w-3" /> Subtypes
                </span>
                <p className={`mt-1.5 text-sm leading-relaxed text-white ${mono.className}`}>{project.Subtypes}</p>
              </div>

              {/* Good To */}
              <div>
                <span className={`flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground ${mono.className}`}>
                  <Calendar className="h-3 w-3" /> Good To
                </span>
                <p className={`mt-1.5 text-sm leading-relaxed text-white ${mono.className}`}>{project["Good_To"] || "\u2014"}</p>
              </div>

              {/* MINFILE */}
              <div>
                <span className={`flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground ${mono.className}`}>
                  <Bookmark className="h-3 w-3" /> MINFILE Association
                </span>
                <p className={`mt-1.5 text-sm leading-relaxed text-muted-foreground ${mono.className}`}>
                  {project["Potential MINFILE Association / Research Note"]}
                </p>
              </div>

              {/* Summary */}
              <div>
                <span className={`flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground ${mono.className}`}>
                  <ScrollText className="h-3 w-3" /> Summary
                </span>
                <p className={`mt-1.5 text-sm leading-relaxed text-muted-foreground ${mono.className}`}>
                  {project["Brief Project Summary"]}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
