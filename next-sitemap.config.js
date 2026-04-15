const locales = ['vi', 'en', 'ko', 'zh', 'ru', 'fr', 'it', 'es', 'th']
const blogSlugs = {
  vi: 'thue-loa-keo-da-nang-cam-nang',
  en: 'speaker-rental-da-nang-guide',
  ko: 'danang-seupikeo-daeyeo-gaideu',
  zh: 'danang-yinxiang-zulin-zhinan',
  ru: 'arenda-kolonok-danang-gid',
  fr: 'location-enceinte-da-nang-guide',
  it: 'noleggio-casse-da-nang-guida',
  es: 'alquiler-altavoz-da-nang-guia',
  th: 'cheao-lao-lam-phong-danang-guide',
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.didi-audio.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
  additionalPaths: async () => {
    const paths = []

    for (const locale of locales) {
      if (locale !== 'vi') {
        paths.push({ loc: `/${locale}`, priority: 0.8, changefreq: 'weekly' })
      }

      const slug = blogSlugs[locale]
      const loc = locale === 'vi' ? `/blog/${slug}` : `/${locale}/blog/${slug}`
      paths.push({ loc, priority: 0.7, changefreq: 'weekly' })
    }

    return paths
  },
}
