import Link from 'next/link'
import type { Metadata } from 'next'
import { BookOpen } from 'lucide-react'
import { Container } from '@/components/Container'
import { GuideCenter } from '@/components/guide/GuideCenter'
import { guideContent } from '@/data/guide-content'
import { guideMessages } from '@/data/guide-messages'
import { guideSources } from '@/data/guide-sources'
import { productVideos } from '@/data/product-videos'
import { rentalMicrophoneVideo } from '@/data/rental-microphone-video'
import { absoluteUrl, createPageMetadata, jsonLd, seoSite } from '@/lib/seo'
import { guideHref, guidePath } from '@/lib/product-guide'
import { videoLocale, videoLocales } from '@/lib/product-videos'

type Props = { searchParams: { lang?: string | string[] } }
function getLocale({ searchParams }: Props) {
  return videoLocale(
    typeof searchParams.lang === 'string' ? searchParams.lang : undefined,
  )
}
export function generateMetadata(props: Props): Metadata {
  const locale = getLocale(props),
    m = guideMessages[locale]
  return createPageMetadata({
    title: `${m.title} | ĐiĐi Audio`,
    description: m.description,
    path: guidePath,
    locale: { vi: 'vi_VN', en: 'en_US', ko: 'ko_KR', ru: 'ru_RU', zh: 'zh_CN' }[
      locale
    ],
  })
}
export default function GuidePage(props: Props) {
  const locale = getLocale(props),
    m = guideMessages[locale]
  const labels = {
    vi: 'Tiếng Việt',
    en: 'English',
    ko: '한국어',
    ru: 'Русский',
    zh: '中文',
  }
  return (
    <div lang={locale} className="py-6 sm:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'TechArticle',
                '@id': absoluteUrl(`${guidePath}#guide`),
                headline: m.title,
                description: m.description,
                inLanguage: locale,
                mainEntityOfPage: absoluteUrl(guidePath),
                publisher: { '@id': seoSite.organizationId },
                citation: Object.values(guideSources).map(
                  (source) => source.url,
                ),
                about: { '@type': 'Thing', name: 'JBL PartyBox Stage 320' },
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: m.home,
                    item: absoluteUrl('/'),
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: m.title,
                    item: absoluteUrl(guidePath),
                  },
                ],
              },
            ],
          }),
        }}
      />
      <Container>
        <nav
          aria-label={m.breadcrumb}
          className="mb-5 flex flex-wrap items-center gap-2 text-sm text-gray-400"
        >
          <Link
            href="/"
            className="inline-flex min-h-11 items-center rounded-sm text-cyan-200 underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"
          >
            {m.home}
          </Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{m.title}</span>
        </nav>
        <nav aria-label={m.language} className="mb-7 flex flex-wrap gap-2">
          {videoLocales.map((lang) => (
            <a
              key={lang}
              href={guideHref(lang)}
              lang={lang}
              aria-current={lang === locale ? 'page' : undefined}
              className={`inline-flex min-h-11 items-center rounded-full border px-4 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 ${lang === locale ? 'border-cyan-300 text-cyan-200' : 'border-white/15 text-gray-300 hover:bg-white/10'}`}
            >
              {labels[lang]}
            </a>
          ))}
        </nav>
        <header
          id="guide-top"
          tabIndex={-1}
          className="mb-8 max-w-3xl scroll-mt-32 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
        >
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-300">
            <BookOpen aria-hidden="true" className="h-4 w-4" />
            {m.eyebrow}
          </p>
          <h1 className="text-3xl font-black leading-tight text-white sm:text-4xl">
            {m.title}
          </h1>
          <p className="mt-4 text-base leading-7 text-gray-300">
            {m.description}
          </p>
          <p className="mt-4 text-xs text-cyan-200">
            {m.verified} · JBL PartyBox Stage 320
          </p>
        </header>
        <GuideCenter
          content={guideContent[locale]}
          locale={locale}
          video={productVideos.find((video) => video.id === 'wx5IPeEge4g')}
          microphoneVideo={rentalMicrophoneVideo}
        />
      </Container>
    </div>
  )
}
