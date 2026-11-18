import Link from 'next/link'
import type { Metadata } from 'next'
import { Container } from '@/components/Container'
import { VideoSection } from '@/components/video/VideoSection'
import { videoMessages } from '@/data/video-messages'
import { absoluteUrl, createPageMetadata, jsonLd } from '@/lib/seo'
import {
  videoLibraryHref,
  videoLibraryPath,
  videoLocale,
  videoLocales,
} from '@/lib/product-videos'

type Props = { searchParams: { lang?: string | string[] } }
function getLocale({ searchParams }: Props) {
  return videoLocale(
    typeof searchParams.lang === 'string' ? searchParams.lang : undefined,
  )
}
export function generateMetadata(props: Props): Metadata {
  const locale = getLocale(props)
  const m = videoMessages[locale]
  return createPageMetadata({
    title: `${m.title} | ĐiĐi Audio Đà Nẵng`,
    description: m.intro,
    path: videoLibraryPath,
    image: '/images/stage-320-videos/nkdQlX2FOCM.webp',
    locale: { vi: 'vi_VN', en: 'en_US', ko: 'ko_KR', ru: 'ru_RU', zh: 'zh_CN' }[
      locale
    ],
  })
}
export default function VideoLibraryPage(props: Props) {
  const locale = getLocale(props)
  const m = videoMessages[locale]
  const labels = {
    vi: 'Tiếng Việt',
    en: 'English',
    ko: '한국어',
    ru: 'Русский',
    zh: '中文',
  }
  return (
    <div lang={locale} className="pt-6 sm:pt-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd({
            '@context': 'https://schema.org',
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
                item: absoluteUrl(videoLibraryPath),
              },
            ],
          }),
        }}
      />
      <Container>
        <nav
          aria-label={m.breadcrumbLabel}
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
        <nav aria-label={m.languageLabel} className="mb-3 flex flex-wrap gap-2">
          {videoLocales.map((lang) => (
            <Link
              key={lang}
              href={videoLibraryHref(lang)}
              lang={lang}
              aria-current={lang === locale ? 'page' : undefined}
              className={`inline-flex min-h-11 items-center rounded-full border px-4 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 ${lang === locale ? 'border-cyan-300 text-cyan-200' : 'border-white/15 text-gray-300 hover:bg-white/10'}`}
            >
              {labels[lang]}
            </Link>
          ))}
        </nav>
      </Container>
      <VideoSection locale={locale} library />
    </div>
  )
}
