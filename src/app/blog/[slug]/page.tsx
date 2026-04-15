import type { Metadata } from 'next'

import { blogMetadata, blogStaticParamsByLocale, renderBlogPage } from '@/lib/blog-page'

export function generateStaticParams() {
  return blogStaticParamsByLocale('vi')
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return blogMetadata('vi', params.slug)
}

export default function BlogPage({ params }: { params: { slug: string } }) {
  return renderBlogPage('vi', params.slug)
}
