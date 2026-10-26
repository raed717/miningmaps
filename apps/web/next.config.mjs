/** @type {import('next').NextConfig} */
const nextConfig = {
  // No `output: "export"`: API routes (/api/contact, /api/newsletter) need a
  // server runtime. Pages are still prerendered via generateStaticParams.
  // Keep the default `.next` distDir — Vercel and next-sitemap both read from it.
  // NEXT_DIST_DIR lets a local check build run beside `next dev` without sharing `.next`.
  ...(process.env.NEXT_DIST_DIR ? { distDir: process.env.NEXT_DIST_DIR } : {}),
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com https://unpkg.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https: blob:; font-src 'self' data: https://fonts.gstatic.com; media-src 'self' https://res.cloudinary.com https: blob: data:; connect-src 'self' https:; frame-src 'self' https://mediaspace.esri.com https://www.youtube.com https://player.vimeo.com https://kuula.co https://drive.google.com; frame-ancestors 'self'; upgrade-insecure-requests;",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
