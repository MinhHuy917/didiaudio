import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

import BlogArticlePage from '@/components/BlogArticlePage'
import { getLocalizedArticle, multilingualArticles } from '@/data/blog-i18n'
import { defaultLocale, isLocale, localeMeta, type Locale, withLocalePrefix } from '@/lib/i18n'
import { SITE_URL } from '@/lib/seo'

export function blogStaticParamsByLocale(locale: Locale) {
  return multilingualArticles.map((article) => ({ slug: article.translations[locale].slug }))
}

export function blogStaticParamsAllLocales() {
  return multilingualArticles.flatMap((article) =>
    Object.keys(article.translations).map((locale) => ({
      locale,
      slug: article.translations[locale as Locale].slug,
    })),
  )
}

export async function blogMetadata(locale: Locale, slug: string): Promise<Metadata> {
  const article = getLocalizedArticle(locale, slug)
  if (!article) return {}

  const canonicalPath = withLocalePrefix(locale, `/blog/${slug}`)
  const canonicalUrl = `${SITE_URL}${canonicalPath}`

  const languageAlternates = Object.fromEntries(
    (Object.keys(article.translations) as Locale[]).map((lang) => [
      localeMeta[lang].languageTag,
      `${SITE_URL}${withLocalePrefix(lang, `/blog/${article.translations[lang].slug}`)}` ,
    ]),
  )

  return {
    title: article.localized.seo.title,
    description: article.localized.seo.description,
    keywords: article.localized.seo.keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: { ...languageAlternates, 'x-default': `${SITE_URL}/blog/${article.translations[defaultLocale].slug}` },
    },
    openGraph: {
      title: article.localized.seo.title,
      description: article.localized.seo.description,
      url: canonicalUrl,
      siteName: 'ĐiĐi Audio',
      locale: localeMeta[locale].ogLocale,
      type: 'article',
      images: [{ url: article.image, alt: article.localized.title }],
    },
  }
}

export function renderBlogPage(locale: Locale, slug: string) {
  const article = getLocalizedArticle(locale, slug)
  if (!article) return notFound()

  return (
    <BlogArticlePage
      slug={article.localized.slug}
      title={article.localized.title}
      description={article.localized.description}
      content={article.localized.content}
      image={article.image}
      date={article.date}
      locale={locale}
    />
  )
}

export function assertLocale(value: string): Locale {
  if (!isLocale(value)) notFound()
  return value
}
