/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://www.miningpropertymaps.com',
  generateRobotsTxt: false,
  changefreq: 'weekly',
  priority: 0.7,
  // Project detail URLs come from Neon via /sitemap-projects.xml (see src/app/sitemap-projects.xml/route.ts),
  // so they're excluded here to avoid duplicates and build-time-only lists.
  exclude: [
    '/dashboard', '/dashboard/*', '/opengraph-image.png', '/post', '/post/*',
    '/sign-up', '/sign-in', '/account', '/community',
    '/projects/*', '/sitemap-projects.xml',
  ],
  robotsTxtOptions: {
    // Adds the projects sitemap to the /sitemap.xml index (robots.txt itself is hand-written).
    additionalSitemaps: ['https://www.miningpropertymaps.com/sitemap-projects.xml'],
  },
};

export default config;
