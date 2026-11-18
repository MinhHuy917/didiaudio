import Link from 'next/link'
import { ArrowRight, Headphones, Play } from 'lucide-react'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { VideoGallery } from './VideoGallery'
import { productVideos } from '@/data/product-videos'
import { videoMessages } from '@/data/video-messages'
import {
  videoLibraryHref,
  videoRentalHref,
  type VideoLocale,
} from '@/lib/product-videos'

export function VideoSection({
  locale = 'vi',
  library = false,
}: {
  locale?: VideoLocale
  library?: boolean
}) {
  const m = videoMessages[locale]
  const Heading = library ? 'h1' : 'h2'
  return (
    <section
      id="video-stage-320"
      lang={locale}
      aria-labelledby="stage320-video-title"
      className="scroll-mt-32 border-y border-white/5 bg-gradient-to-b from-black via-slate-950 to-black py-14 sm:py-20"
    >
      <Container>
        <div className="mb-8 max-w-3xl">
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
            <Play aria-hidden="true" className="h-4 w-4" />
            {m.eyebrow}
          </p>
          <Heading
            id="stage320-video-title"
            className="text-2xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl"
          >
            {m.title}
          </Heading>
          <p className="mt-4 text-base leading-7 text-gray-300">{m.intro}</p>
        </div>
        <VideoGallery
          videos={library ? productVideos : productVideos.slice(0, 3)}
          locale={locale}
          featured={!library}
        />
        <div className="mt-8 flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="flex max-w-2xl items-start gap-3 text-sm leading-6 text-gray-400">
            <Headphones
              aria-hidden="true"
              className="mt-1 h-5 w-5 shrink-0 text-cyan-300"
            />
            <span>{m.notice}</span>
          </p>
          <div className="flex shrink-0 flex-wrap items-center gap-3">
            {!library && (
              <Link
                href={videoLibraryHref(locale)}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/25 px-5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              >
                {m.library}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            )}
            <Button
              href={videoRentalHref}
              invert
              className="min-h-11 px-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            >
              {m.rent}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
