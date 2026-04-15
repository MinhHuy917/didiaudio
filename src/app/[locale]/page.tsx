import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import AboutSection from '@/components/AboutSection'
import { FAQ, FAQSchema } from '@/components/FAQ'
import ImageSlider from '@/components/ImageSlider'
import MenuContact from '@/components/MenuContact'
import ProductList from '@/components/ProductTable'
import Testimonials from '@/components/Testimonials'
import WhyUs from '@/components/WhyUs'
import SpecialNoticeBanner from '@/components/SpecialNoticeBanner'
import UseCaseSection from '@/components/UseCaseSection'
import BlogCamTrai from '@/components/BlogCamTrai'
import { isLocale, localeMeta } from '@/lib/i18n'
import { homeSeoByLocale } from '@/lib/site-content'
import { buildLocaleAlternates, SITE_URL } from '@/lib/seo'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  if (!isLocale(params.locale) || params.locale === 'vi') return {}

  const seo = homeSeoByLocale[params.locale]
  const canonical = `${SITE_URL}/${params.locale}`

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical,
      languages: buildLocaleAlternates('/'),
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonical,
      locale: localeMeta[params.locale].ogLocale,
      type: 'website',
      images: [{ url: `${SITE_URL}/og-image.jpg`, alt: seo.title }],
    },
  }
}

export default function LocalizedHome({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale) || params.locale === 'vi') return notFound()

  return (
    <>
      <ImageSlider />
      <AboutSection />
      <SpecialNoticeBanner />
      <ProductList />
      <UseCaseSection />
      <WhyUs />
      <BlogCamTrai />
      <Testimonials />
      <FAQ />
      <FAQSchema />
      <MenuContact />
    </>
  )
}
