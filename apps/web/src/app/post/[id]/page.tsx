"use client";

import Link from "next/link";

import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { mockPosts } from "@/lib/postData";

import { use } from "react";
export default function PostDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const post = mockPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="flex h-[50vh] flex-col items-center justify-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary">Post Not Found</h1>
        <p className="mt-4 text-muted-foreground">The article you are looking for does not exist.</p>
        <Link href="/posts" className="mt-8 flex items-center text-primary hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Posts
        </Link>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto bg-background px-4 py-12 md:px-8">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/posts"
          className="mb-8 inline-flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Posts
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:leading-[1.1]">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {post.summary}
            </p>
          </div>

          {/* Preview Image */}
          {post.previewImage && (
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border/50 bg-muted">
              <img
                src={post.previewImage}
                alt={post.title}
                className="h-full w-full object-cover"
              />
            </div>
          )}

          {/* Content Sections */}
          <div className="prose prose-invert max-w-none mt-12 space-y-12">
            {post.section.map((sec, i) => (
              <motion.section
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold tracking-tight text-foreground border-b border-border/50 pb-2">
                  {sec.heading}
                </h2>

                {sec.type === "paragraph" && (
                  <p className="text-lg leading-relaxed text-muted-foreground whitespace-pre-wrap">
                    {sec.content as string}
                  </p>
                )}

                {sec.type === "bullet_list" && (
                  <ul className="space-y-3 text-lg text-muted-foreground">
                    {(sec.content as string[]).map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Section Images */}
                {sec.image && sec.image.length > 0 && (
                  <div className={`grid gap-4 mt-6 ${sec.image.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                    {sec.image.map((imgSrc, idx) => (
                      <div key={idx} className="overflow-hidden rounded-lg border border-border/50 bg-muted">
                        <img
                          src={imgSrc}
                          alt={`${sec.heading} - image ${idx + 1}`}
                          className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </motion.section>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
