import type { Metadata } from 'next'

import { assertLocale, blogMetadata, blogStaticParamsAllLocales, renderBlogPage } from '@/lib/blog-page'

export function generateStaticParams() {
  return blogStaticParamsAllLocales().filter((item) => item.locale !== 'vi')
}

export async function generateMetadata({ params }: { params: { locale: string; slug: string } }): Promise<Metadata> {
  const locale = assertLocale(params.locale)
  return blogMetadata(locale, params.slug)
}

export default function LocalizedBlogPage({ params }: { params: { locale: string; slug: string } }) {
  const locale = assertLocale(params.locale)
  return renderBlogPage(locale, params.slug)
}
