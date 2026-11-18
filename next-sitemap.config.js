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
  // Localized SSR pages are absent from Next's prerender manifest.
  // Include their canonical base URLs, without language query variants.
  additionalPaths: async (config) => [
    await config.transform(config, '/video-jbl-partybox-320'),
    await config.transform(config, '/huong-dan-su-dung-jbl-partybox-320'),
  ],
}
