"use client";

import { motion } from "motion/react";
import Link from "next/link";

import { ArrowRight, FileText } from "lucide-react";
import { mockPosts } from "@/lib/postData";

export default function Posts() {
  return (
    <div className="flex-1 overflow-y-auto bg-background px-4 py-12 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight">Latest Insights</h1>
          <p className="mt-2 text-lg text-muted-foreground max-w-2xl">
            Industry news, GIS mapping techniques, and deep dives into modern mineral exploration.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mockPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group flex flex-col overflow-hidden rounded-xl border border-border/50 bg-card shadow-sm transition-all hover:border-primary/50 hover:shadow-primary/10 hover:shadow-lg"
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                {post.previewImage ? (
                  <img 
                    src={post.previewImage} 
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-muted/50">
                    <FileText className="h-10 w-10 text-muted-foreground/50" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              </div>
              
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="mb-6 text-sm text-muted-foreground flex-1">
                  {post.summary}
                </p>
                
                <Link
                  href={`/posts/${post.id}`}
                  className="inline-flex w-fit items-center text-sm font-medium text-primary hover:underline"
                >
                  Read Article
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

