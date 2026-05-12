import { type Metadata } from 'next'
import BlogArticlePage from '@/components/BlogArticlePage'
import { articles } from '@/data/blog'
import { notFound } from 'next/navigation'

const SITE_URL = 'https://www.didi-audio.com'

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug)
  if (!article) return {}

  const canonicalUrl = `${SITE_URL}/${article.slug}`
  const keywordSet = new Set<string>([
    'thuê loa kéo đà nẵng',
    'kinh nghiệm thuê loa kéo',
    'mẹo setup karaoke',
    article.slug.replaceAll('-', ' '),
    ...article.title
      .toLowerCase()
      .replace(/[|,:()]/g, ' ')
      .split(' ')
      .filter((word) => word.length > 3)
      .slice(0, 8),
  ])

  return {
    title: article.title,
    description: article.description,
    keywords: Array.from(keywordSet),
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.description,
      url: canonicalUrl,
      siteName: 'ĐiĐi Audio',
      locale: 'vi_VN',
      publishedTime: article.date,
      images: [
        {
          url: article.image,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: [article.image],
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug)

  if (!article) return notFound()

  return (
    <BlogArticlePage
      slug={article.slug}
      title={article.title}
      description={article.description}
      content={article.content}
      image={article.image}
      date={article.date}
      faqs={article.faqs}
    />
  )
}
