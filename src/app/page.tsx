import { type Metadata } from 'next'

import AboutSection from '@/components/AboutSection'
import { FAQ, FAQSchema } from '@/components/FAQ'
import ImageSlider from '@/components/ImageSlider'
import MenuContact from '@/components/MenuContact'
import ProductList from '@/components/ProductTable'
import Testimonials from '@/components/Testimonials'
import WhyUs from '@/components/WhyUs'
import SpecialNoticeBanner from '@/components/SpecialNoticeBanner'
import HeroSection from '@/components/HeroSection'
import UseCaseSection from '@/components/UseCaseSection'

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
    url: 'https://www.didiaudio.com',
    siteName: 'ĐiĐi Audio',
    locale: 'vi_VN',
    type: 'website',
    images: [
      {
        url: 'https://www.didiaudio.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cho thuê loa kéo Đà Nẵng - ĐiĐi Audio',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.didiaudio.com',
  },
}

export default async function Home() {
  return (
    <>
      {/* Hero Section - H1 sẽ được đặt trong HeroSection */}
      <HeroSection />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Special Notice Banner */}
      <SpecialNoticeBanner />
      
      {/* Products Section - H2 sẽ được đặt trong ProductList */}
      <ProductList />
      
      {/* Use Cases Section */}
      <UseCaseSection />
      
      {/* Why Us Section */}
      <WhyUs />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* FAQ Section */}
      <FAQ />
      <FAQSchema />
      
      {/* Contact Section */}
      <MenuContact />
    </>
  )
}
