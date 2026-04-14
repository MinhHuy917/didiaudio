import Image from 'next/image'
import Link from 'next/link'
import { Music, Calendar, ArrowLeft, Play, Phone } from 'lucide-react'

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
    <article className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white" itemScope itemType="https://schema.org/Article">
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

      <header className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="flex items-center gap-3 text-sm text-gray-300 mb-6" aria-label="Breadcrumb">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Trang chủ
          </Link>
          <span className="text-gray-500">/</span>
          <Link href="/#blog" className="text-gray-300 hover:text-cyan-400 transition-colors">
            Blog
          </Link>
          <span className="text-gray-500">/</span>
          <span className="text-cyan-400 line-clamp-1">{title}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 sm:mb-14">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30">
              <Music className="w-4 h-4 text-cyan-400" />
              <span className="text-xs sm:text-sm font-semibold text-cyan-200">Blog • Audio & Sự kiện</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight" itemProp="headline">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {title}
              </span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg" itemProp="description">{description}</p>
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <Calendar className="w-4 h-4" />
              <time dateTime={date} itemProp="datePublished">
                {new Date(date).toLocaleDateString('vi-VN')}
              </time>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/#products"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/40 transition-all"
              >
                <Play className="w-4 h-4" />
                Thuê loa ngay
              </Link>
              <Link
                href="tel:0339197917"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:border-cyan-500/50 transition-all"
              >
                <Phone className="w-4 h-4" />
                0339197917
              </Link>
            </div>
          </div>

          <div className="relative h-64 sm:h-80 lg:h-[420px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <Image src={image} alt={title} fill className="object-cover" priority itemProp="image" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 backdrop-blur-md">
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-black prose-a:text-cyan-400 hover:prose-a:text-cyan-300 prose-strong:text-white prose-li:marker:text-cyan-400" itemProp="articleBody">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
      </div>
    </article>
  )
}
