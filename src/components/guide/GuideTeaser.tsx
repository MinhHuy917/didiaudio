import Link from 'next/link'
import { ArrowRight, BookOpen } from 'lucide-react'
import { guideMessages } from '@/data/guide-messages'
import { guideHref, type GuideLocale } from '@/lib/product-guide'

export function GuideTeaser({
  locale = 'vi',
  compact = false,
}: {
  locale?: GuideLocale
  compact?: boolean
}) {
  const m = guideMessages[locale]
  return (
    <section
      lang={locale}
      aria-label={m.teaserTitle}
      className={
        compact
          ? 'my-6 rounded-2xl border border-cyan-300/20 bg-cyan-950/20 p-5'
          : 'mx-auto max-w-7xl px-6 py-10 lg:px-8'
      }
    >
      <div
        className={
          compact
            ? ''
            : 'rounded-2xl border border-cyan-300/20 bg-gradient-to-br from-cyan-950/30 to-purple-950/15 p-6 sm:p-8'
        }
      >
        <BookOpen aria-hidden="true" className="mb-3 h-6 w-6 text-cyan-300" />
        <h2 className="text-xl font-semibold text-white sm:text-2xl">
          {m.teaserTitle}
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-300">
          {m.teaserBody}
        </p>
        <Link
          href={guideHref(locale)}
          className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full border border-cyan-300/40 px-5 py-2 text-sm font-semibold text-cyan-200 transition-colors hover:bg-cyan-300/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
        >
          {m.openGuide}
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
