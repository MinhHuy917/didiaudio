import Image from 'next/image'
import Link from 'next/link'
import { Music, Calendar, ArrowLeft, Play, Phone, ChevronRight, Sparkles } from 'lucide-react'

type Props = {
  slug: string
  title: string
  description: string
  content: string
  image: string
  date: string
  faqs?: Array<{ question: string; answer: string }>
}

export default function BlogArticlePage({ slug, title, description, content, image, date, faqs = [] }: Props) {
  const articleUrl = `https://www.didi-audio.com/${slug}`
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: [image],
    datePublished: date,
    dateModified: date,
    inLanguage: 'vi-VN',
    mainEntityOfPage: articleUrl,
    author: {
      '@type': 'Organization',
      name: 'ĐiĐi Audio',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ĐiĐi Audio',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.didi-audio.com/og-image.jpg',
      },
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Trang chủ',
        item: 'https://www.didi-audio.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://www.didi-audio.com/#blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
        item: articleUrl,
      },
    ],
  }

  const faqSchema =
    faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }
      : null

  return (
    <article className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black pt-24 text-white sm:pt-28" itemScope itemType="https://schema.org/Article">
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-20 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}

      <header className="relative z-10 mx-auto max-w-6xl px-4 pb-6 pt-4 sm:px-6 sm:pb-8 sm:pt-6 lg:px-8">
        <div className="mb-5 flex flex-wrap items-center gap-2 text-xs text-gray-300 sm:text-sm" aria-label="Breadcrumb">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 transition-colors hover:border-cyan-500/50"
          >
            <ArrowLeft className="h-4 w-4" />
            Trang chủ
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-500" />
          <Link href="/#blog" className="text-gray-300 transition-colors hover:text-cyan-400">
            Blog
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-500" />
          <span className="line-clamp-1 max-w-[240px] text-cyan-300 sm:max-w-[420px]">{title}</span>
        </div>

        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4 sm:space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-2">
              <Sparkles className="h-4 w-4 text-cyan-300" />
              <span className="text-xs font-semibold text-cyan-100 sm:text-sm">Blog xịn • Audio & sự kiện</span>
            </div>

            <h1 className="text-2xl font-black leading-tight sm:text-4xl lg:text-5xl" itemProp="headline">
              <span className="bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {title}
              </span>
            </h1>

            <p className="text-sm leading-relaxed text-gray-300 sm:text-lg" itemProp="description">
              {description}
            </p>

            <div className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-gray-300 sm:text-sm">
              <Calendar className="h-4 w-4 text-cyan-300" />
              <time dateTime={date} itemProp="datePublished">
                {new Date(date).toLocaleDateString('vi-VN')}
              </time>
            </div>

            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap">
              <Link
                href="/#products"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 transition-all hover:shadow-cyan-500/50 sm:text-base"
              >
                <Play className="h-4 w-4" />
                Thuê loa ngay
              </Link>
              <Link
                href="tel:0339197917"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all hover:border-cyan-500/50 sm:text-base"
              >
                <Phone className="h-4 w-4" />
                0339 197 917
              </Link>
            </div>
          </div>

          <div className="relative h-56 overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/40 sm:h-80 lg:h-[420px]">
            <Image src={image} alt={title} fill className="object-cover" priority itemProp="image" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-xs text-white">
              <Music className="h-3.5 w-3.5 text-cyan-300" />
              ĐiĐi Audio Blog
            </div>
          </div>
        </div>
      </header>

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="prose prose-invert prose-base max-w-none sm:prose-lg prose-headings:font-black prose-headings:text-white prose-a:text-cyan-300 hover:prose-a:text-cyan-200 prose-strong:text-white prose-li:marker:text-cyan-300" itemProp="articleBody">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
      </div>
    </article>
  )
}
