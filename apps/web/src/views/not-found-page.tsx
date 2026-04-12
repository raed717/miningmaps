"use client";

import Link from "next/link";
import { Compass, Home } from "lucide-react";

type NotFoundPageProps = {
  path: string;
};

export default function NotFoundPage({ path }: NotFoundPageProps) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-background px-4 text-center text-foreground">
      <div className="flex h-16 w-16 items-center justify-center border border-primary/40 bg-primary/10 text-primary">
        <Compass className="h-8 w-8" />
      </div>
      <h1 className="mt-8 text-4xl font-extrabold uppercase tracking-tight">Route Not Found</h1>
      <p className="mt-4 max-w-2xl text-sm uppercase tracking-widest text-muted-foreground">
        No client route is mapped for <span className="text-foreground">{path}</span>.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 border border-primary px-4 py-3 text-sm font-bold uppercase tracking-wider text-primary transition-colors hover:bg-primary hover:text-black"
      >
        <Home className="h-4 w-4" />
        Return Home
      </Link>
    </div>
  );
}
