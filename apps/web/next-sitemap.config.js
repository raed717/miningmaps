/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://miningpropertymaps.com',
  generateRobotsTxt: false,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/dashboard', '/dashboard/*', '/opengraph-image.png'],
};

export default config;
