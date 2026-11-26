import type { Metadata } from "next";
import ClientPage from "./client";

// Re-exported by each root layout's not-found.tsx ((en)/, es/, fr/). Rendered with a real
// 404 status when page-impl.tsx calls notFound().
// The app shell shows its own not-found view for the current path, inside the normal header.
export const metadata: Metadata = {
  title: "Page Not Found — Adamson Geomatics",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <ClientPage data={{}} />;
}
