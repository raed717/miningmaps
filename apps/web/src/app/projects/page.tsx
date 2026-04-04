"use client";

import { motion } from "motion/react";
import Link from "next/link";

import { ArrowRight, MapPin } from "lucide-react";
import { projects } from "@/lib/mockData";

export default function Projects() {
  return (
    <div className="flex-1 overflow-y-auto bg-background px-4 py-12 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight">Portfolio</h1>
          <p className="mt-2 text-lg text-muted-foreground max-w-2xl">
            Explore a selection of mapping projects, right-of-way planning, and mineral exploration work completed by Adamson Geomatics.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group flex flex-col overflow-hidden rounded-xl border border-border/50 bg-card shadow-sm transition-all hover:border-primary/50 hover:shadow-primary/10 hover:shadow-lg"
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center rounded-md bg-background/80 px-2 py-1 text-xs font-medium backdrop-blur-md">
                  <MapPin className="mr-1 h-3 w-3 text-primary" />
                  {project.region}
                </div>
              </div>
              
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="mb-6 text-sm text-muted-foreground flex-1">
                  {project.summary}
                </p>
                
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex w-fit items-center text-sm font-medium text-primary hover:underline"
                >
                  View Details
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}