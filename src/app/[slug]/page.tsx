

import BlogArticlePage from '@/components/BlogArticlePage'
import { articles } from '@/data/blog'
import { notFound } from 'next/navigation'

// Optional SEO Metadata
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.description,
    openGraph: {
      images: [article.image],
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug)

  if (!article) return notFound()

  return (
    <BlogArticlePage
      title={article.title}
      description={article.description}
      content={article.content}
      image={article.image}
      date={article.date}
    />
  )
}
