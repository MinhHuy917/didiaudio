import ImageSlider from '@/components/ImageSlider'
import { VideoSection } from '@/components/video/VideoSection'
import { GuideTeaser } from '@/components/guide/GuideTeaser'
import MenuContact from '@/components/MenuContact'
import Testimonials from '@/components/Testimonials'
import InternationalWhyUs from '@/components/international/InternationalWhyUs'
import InternationalUseCase from '@/components/international/InternationalUseCase'
import InternationalProductList from '@/components/international/InternationalProductList'

export default function InternationalLandingWrapper({
  content,
  language,
}: {
  content: any
  language: 'en' | 'ko' | 'ru' | 'zh'
}) {
  return (
    <>
      <ImageSlider />

      {/* Localized Hero */}
      <section
        lang={language}
        className="bg-gradient-to-b from-black via-gray-900 to-black py-16 text-center text-white"
      >
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <span className="text-sm font-semibold text-cyan-400">
              {content.hero.badge}
            </span>
          </div>
          <h1 className="mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-4xl font-black leading-tight text-transparent md:text-5xl">
            {content.hero.headline}
          </h1>
          <p className="mb-8 text-xl text-gray-300">
            {content.hero.subheadline}
          </p>
          <a
            href={content.hero.ctaLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-600 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-cyan-500"
          >
            {content.hero.cta}
          </a>
        </div>
      </section>

      {/* Localized Features (Why Us equivalent) */}
      <div lang={language}>
        <InternationalWhyUs content={content.features} />
      </div>

      {/* Localized Products */}
      <InternationalProductList content={content.pricing} />
      <VideoSection locale={language} />
      <GuideTeaser locale={language} />

      {/* Localized Use Cases */}
      <div lang={language}>
        <InternationalUseCase content={content.useCases} />
      </div>

      {/* Localized Contact Guide */}
      <section
        lang={language}
        className="bg-gradient-to-b from-gray-900 to-black py-16 text-center text-white"
      >
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-4 text-3xl font-black text-cyan-400">
            {content.contactGuide.title}
          </h2>
          <p className="mb-8 text-lg text-gray-300">
            {content.contactGuide.desc}
          </p>
          <a
            href={content.contactGuide.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-black transition-all hover:bg-gray-200"
          >
            {content.contactGuide.buttonText} ({content.contactGuide.platform})
          </a>
        </div>
      </section>

      <Testimonials />
      <MenuContact />
    </>
  )
}
