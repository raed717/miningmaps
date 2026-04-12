"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { mockPosts } from "@/lib/postData";

type PostDetailPageProps = {
  postId: string;
};

export default function PostDetailPage({ postId }: PostDetailPageProps) {
  const post = mockPosts.find((entry) => entry.id === postId);

  if (!post) {
    return (
      <div className="flex h-[50vh] flex-col items-center justify-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary">Post Not Found</h1>
        <p className="mt-4 text-muted-foreground">
          The article you are looking for does not exist.
        </p>
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

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:leading-[1.1]">
              {post.title}
            </h1>
            <p className="text-xl leading-relaxed text-muted-foreground">{post.summary}</p>
          </div>

          {post.previewImage && (
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border/50 bg-muted">
              <img src={post.previewImage} alt={post.title} className="h-full w-full object-cover" />
            </div>
          )}

          <div className="prose prose-invert mt-12 max-w-none space-y-12">
            {post.section.map((section, index) => (
              <motion.section
                key={`${section.heading}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h2 className="border-b border-border/50 pb-2 text-2xl font-bold tracking-tight text-foreground">
                  {section.heading}
                </h2>

                {section.type === "paragraph" && (
                  <p className="whitespace-pre-wrap text-lg leading-relaxed text-muted-foreground">
                    {section.content}
                  </p>
                )}

                {section.type === "bullet_list" && (
                  <ul className="space-y-3 text-lg text-muted-foreground">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="mt-2 mr-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.image && section.image.length > 0 && (
                  <div className={`mt-6 grid gap-4 ${section.image.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
                    {section.image.map((image, imageIndex) => (
                      <div key={imageIndex} className="overflow-hidden rounded-lg border border-border/50 bg-muted">
                        <img
                          src={image}
                          alt={`${section.heading} - image ${imageIndex + 1}`}
                          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
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
