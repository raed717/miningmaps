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
  additionalPaths: async (config) => {
    return [
      await config.transform(config, '/es'),
      await config.transform(config, '/fr'),
      await config.transform(config, '/es/about'),
      await config.transform(config, '/fr/about'),
      await config.transform(config, '/es/services'),
      await config.transform(config, '/fr/services'),
      await config.transform(config, '/es/contact'),
      await config.transform(config, '/fr/contact'),
      await config.transform(config, '/es/map'),
      await config.transform(config, '/fr/map'),
      await config.transform(config, '/es/projects'),
      await config.transform(config, '/fr/projects'),
      await config.transform(config, '/es/properties'),
      await config.transform(config, '/fr/properties'),
    ];
  },
  transform: async (config, url) => {
    if (url === '/' || url === '/es' || url === '/fr') {
      return {
        loc: url,
        changefreq: 'daily',
        priority: 1.0,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        alternateRefs: [
          { href: `${config.siteUrl}`, hreflang: 'en', hrefIsAbsolute: true },
          { href: `${config.siteUrl}/es`, hreflang: 'es', hrefIsAbsolute: true },
          { href: `${config.siteUrl}/fr`, hreflang: 'fr', hrefIsAbsolute: true },
          { href: `${config.siteUrl}`, hreflang: 'x-default', hrefIsAbsolute: true },
        ],
      };
    }

    if (url === '/about' || url === '/es/about' || url === '/fr/about') {
      return {
        loc: url,
        changefreq: config.changefreq,
        priority: 0.8,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        alternateRefs: [
          { href: `${config.siteUrl}/about`, hreflang: 'en', hrefIsAbsolute: true },
          { href: `${config.siteUrl}/es/about`, hreflang: 'es', hrefIsAbsolute: true },
          { href: `${config.siteUrl}/fr/about`, hreflang: 'fr', hrefIsAbsolute: true },
          { href: `${config.siteUrl}/about`, hreflang: 'x-default', hrefIsAbsolute: true },
        ],
      };
    }

    if (url === '/services' || url === '/es/services' || url === '/fr/services') {
      return {
        loc: url,
        changefreq: config.changefreq,
        priority: 0.8,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        alternateRefs: [
          { href: `${config.siteUrl}/services`, hreflang: 'en', hrefIsAbsolute: true },
          { href: `${config.siteUrl}/es/services`, hreflang: 'es', hrefIsAbsolute: true },
          { href: `${config.siteUrl}/fr/services`, hreflang: 'fr', hrefIsAbsolute: true },
          { href: `${config.siteUrl}/services`, hreflang: 'x-default', hrefIsAbsolute: true },
        ],
      };
    }

    if (url === '/contact' || url === '/es/contact' || url === '/fr/contact') {
      return {
        loc: url,
        changefreq: config.changefreq,
        priority: 0.8,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        alternateRefs: [
          { href: `${config.siteUrl}/contact`, hreflang: 'en', hrefIsAbsolute: true },
          { href: `${config.siteUrl}/es/contact`, hreflang: 'es', hrefIsAbsolute: true },
          { href: `${config.siteUrl}/fr/contact`, hreflang: 'fr', hrefIsAbsolute: true },
          { href: `${config.siteUrl}/contact`, hreflang: 'x-default', hrefIsAbsolute: true },
        ],
      };
    }

    if (url === '/map' || url === '/es/map' || url === '/fr/map') {
      return {
        loc: url,
        changefreq: config.changefreq,
        priority: 0.8,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        alternateRefs: [
          { href: `${config.siteUrl}/map`, hreflang: 'en', hrefIsAbsolute: true },
          { href: `${config.siteUrl}/es/map`, hreflang: 'es', hrefIsAbsolute: true },
          { href: `${config.siteUrl}/fr/map`, hreflang: 'fr', hrefIsAbsolute: true },
          { href: `${config.siteUrl}/map`, hreflang: 'x-default', hrefIsAbsolute: true },
        ],
      };
    }

    if (url === '/projects' || url === '/es/projects' || url === '/fr/projects') {
      return {
        loc: url,
        changefreq: config.changefreq,
        priority: 0.8,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        alternateRefs: [
          { href: `${config.siteUrl}/projects`, hreflang: 'en', hrefIsAbsolute: true },
          { href: `${config.siteUrl}/es/projects`, hreflang: 'es', hrefIsAbsolute: true },
          { href: `${config.siteUrl}/fr/projects`, hreflang: 'fr', hrefIsAbsolute: true },
          { href: `${config.siteUrl}/projects`, hreflang: 'x-default', hrefIsAbsolute: true },
        ],
      };
    }

    if (url === '/properties' || url === '/es/properties' || url === '/fr/properties') {
      return {
        loc: url,
        changefreq: config.changefreq,
        priority: 0.8,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        alternateRefs: [
          { href: `${config.siteUrl}/properties`, hreflang: 'en', hrefIsAbsolute: true },
          { href: `${config.siteUrl}/es/properties`, hreflang: 'es', hrefIsAbsolute: true },
          { href: `${config.siteUrl}/fr/properties`, hreflang: 'fr', hrefIsAbsolute: true },
          { href: `${config.siteUrl}/properties`, hreflang: 'x-default', hrefIsAbsolute: true },
        ],
      };
    }

    return {
      loc: url,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};

export default config;
