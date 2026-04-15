import { type Metadata } from 'next'
import dynamic from 'next/dynamic'

import AboutSection from '@/components/AboutSection'
import ImageSlider from '@/components/ImageSlider'
import ProductList from '@/components/ProductTable'
import SpecialNoticeBanner from '@/components/SpecialNoticeBanner'

const UseCaseSection = dynamic(() => import('@/components/UseCaseSection'))
const WhyUs = dynamic(() => import('@/components/WhyUs'))
const BlogCamTrai = dynamic(() => import('@/components/BlogCamTrai'))
const Testimonials = dynamic(() => import('@/components/Testimonials'))
const FAQ = dynamic(() => import('@/components/FAQ').then((module) => module.FAQ))
const FAQSchema = dynamic(() => import('@/components/FAQ').then((module) => module.FAQSchema))
const MenuContact = dynamic(() => import('@/components/MenuContact'))

export const metadata: Metadata = {
  title: 'Cho Thuê Loa Kéo Đà Nẵng | Loa Kéo JBL Chính Hãng Giá Rẻ - ĐiĐi Audio',
  description:
    'Cho thuê loa kéo JBL chính hãng tại Đà Nẵng. Giao nhanh 30-60 phút, setup miễn phí, hỗ trợ 24/7. Phù hợp du lịch, cắm trại, sinh nhật, team building. Giá từ 50k/ngày.',
  keywords: [
    'cho thuê loa kéo đà nẵng',
    'thuê loa kéo đà nẵng',
    'thuê loa kẹo kéo đà nẵng giá rẻ',
    'cho thuê loa kéo JBL đà nẵng',
    'thuê loa karaoke đà nẵng',
    'cho thuê loa JBL chính hãng',
    'dịch vụ cho thuê loa kéo đà nẵng',
    'loa kéo JBL đà nẵng',
    'thuê loa party đà nẵng',
    'cho thuê loa bluetooth đà nẵng',
  ],
  openGraph: {
    title: 'Cho Thuê Loa Kéo Đà Nẵng | Loa Kéo JBL Chính Hãng Giá Rẻ',
    description:
      'Cho thuê loa kéo JBL chính hãng tại Đà Nẵng. Giao nhanh 30-60 phút, setup miễn phí, hỗ trợ 24/7. Phù hợp du lịch, cắm trại, sinh nhật, team building.',
    url: 'https://www.didi-audio.com',
    siteName: 'ĐiĐi Audio',
    locale: 'vi_VN',
    type: 'website',
    images: [
      {
        url: 'https://www.didi-audio.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cho thuê loa kéo Đà Nẵng - ĐiĐi Audio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ĐiĐi Audio - Cho thuê loa kéo JBL Đà Nẵng',
    description: 'Dịch vụ cho thuê loa kéo JBL chính hãng, giao nhanh và hỗ trợ 24/7 tại Đà Nẵng.',
    images: ['https://www.didi-audio.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.didi-audio.com',
  },
}

export default async function Home() {
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
      {/* Hero Section - H1 sẽ được đặt trong HeroSection */}
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
