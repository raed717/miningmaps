import "@fontsource-variable/inter";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/700.css";
import "../globals.css";
import "leaflet/dist/leaflet.css";
import "react-medium-image-zoom/dist/styles.css";
import { mockPosts } from "@/lib/postData";
import { projects } from "@/lib/projectData";
import ClientPage from "./client";

export function generateStaticParams() {
  return [
    { slug: [""] },
    { slug: ["services"] },
    { slug: ["contact"] },
    { slug: ["projects"] },
    { slug: ["properties"] },
    { slug: ["map"] },
    { slug: ["dashboard"] },
    { slug: ["post"] },
    { slug: ["posts"] },
    ...projects.map((project) => ({ slug: ["projects", project.id] })),
    ...mockPosts.flatMap((post) => [
      { slug: ["post", post.id] },
      { slug: ["posts", post.id] },
    ]),
  ];
}

export default function CatchAllPage() {
  return <ClientPage />;
}
