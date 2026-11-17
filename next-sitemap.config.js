/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.didi-audio.com',
  generateRobotsTxt: true,
  autoLastmod: false,
  exclude: ['/404', '/500', '/_not-found', '/design-system'],
  robotsTxtOptions: { policies: [{ userAgent: '*', allow: '/' }] },
  transform: async (_config, path) => {
    if (path.includes('[') || path.startsWith('/_')) return null
    return { loc: path }
  },
}
