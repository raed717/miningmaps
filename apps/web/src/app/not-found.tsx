import type { Metadata } from "next";
import ClientPage from "./[[...slug]]/client";

// Rendered with a real 404 status when [[...slug]]/page.tsx calls notFound().
// The app shell shows its own not-found view for the current path, inside the normal header.
export const metadata: Metadata = {
  title: "Page Not Found — Adamson Geomatics",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <ClientPage data={{}} />;
}
