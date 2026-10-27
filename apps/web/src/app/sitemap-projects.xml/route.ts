import { getProjectSitemapEntries } from "@/lib/projectsRepo";

// Project URLs come from Neon, so projects added after a deploy are listed within 5 minutes
// (same window as the pages). Static pages stay in next-sitemap's sitemap-0.xml; both are listed in /sitemap.xml.
export const revalidate = 300;

const siteUrl = "https://www.miningpropertymaps.com";

export async function GET() {
  const entries = await getProjectSitemapEntries();

  const urls = entries
    .map(
      ({ id, updatedAt }) =>
        `<url><loc>${siteUrl}/projects/${encodeURIComponent(id)}</loc><lastmod>${updatedAt.toISOString()}</lastmod><changefreq>weekly</changefreq><priority>0.7</priority></url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
