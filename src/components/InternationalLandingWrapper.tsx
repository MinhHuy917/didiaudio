import ImageSlider from '@/components/ImageSlider'
import MenuContact from '@/components/MenuContact'
import Testimonials from '@/components/Testimonials'
import InternationalWhyUs from '@/components/international/InternationalWhyUs'
import InternationalUseCase from '@/components/international/InternationalUseCase'
import InternationalProductList from '@/components/international/InternationalProductList'

export default function InternationalLandingWrapper({ content }: { content: any }) {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'ĐiĐi Audio',
    image: 'https://www.didi-audio.com/og-image.jpg',
    url: 'https://www.didi-audio.com',
    telephone: '0339197917',
    areaServed: 'Đà Nẵng',
    sameAs: ['https://www.didi-audio.com'],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <ImageSlider />

      {/* Localized Hero */}
      <section className="bg-gradient-to-b from-black via-gray-900 to-black py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="text-cyan-400 font-semibold text-sm">{content.hero.badge}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {content.hero.headline}
            </h1>
            <p className="text-xl text-gray-300 mb-8">{content.hero.subheadline}</p>
            <a href={content.hero.ctaLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-600 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-cyan-500">
                {content.hero.cta}
            </a>
        </div>
      </section>

      {/* Localized Features (Why Us equivalent) */}
      <InternationalWhyUs content={content.features} />

      {/* Localized Products */}
      <InternationalProductList content={content.pricing} />

      {/* Localized Use Cases */}
      <InternationalUseCase content={content.useCases} />

      {/* Localized Contact Guide */}
      <section className="bg-gradient-to-b from-gray-900 to-black py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-4 text-cyan-400">{content.contactGuide.title}</h2>
          <p className="text-lg text-gray-300 mb-8">{content.contactGuide.desc}</p>
          <a href={content.contactGuide.link} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-8 py-4 text-lg font-bold transition-all hover:bg-gray-200">
              {content.contactGuide.buttonText} ({content.contactGuide.platform})
          </a>
        </div>
      </section>

      <Testimonials />
      <MenuContact />
    </>
  )
}
