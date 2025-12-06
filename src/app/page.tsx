import { type Metadata } from 'next'

import AboutSection from '@/components/AboutSection'
import { FAQ, FAQSchema } from '@/components/FAQ'
import ImageSlider from '@/components/ImageSlider'
import MenuContact from '@/components/MenuContact'
import ProductList from '@/components/ProductTable'
import { NavigationV2 } from '@/components/RootLayout'
import Testimonials from '@/components/Testimonials'
import WhyUs from '@/components/WhyUs'
import SpecialNoticeBanner from '@/components/SpecialNoticeBanner'
import HeroSection from '@/components/HeroSection'
import UseCaseSection from '@/components/UseCaseSection'

export const metadata: Metadata = {
  description:
  'Cho thuê loa kéo JBL chính hãng tại Đà Nẵng. Giao nhanh 30-60 phút, setup miễn phí, hỗ trợ 24/7. Phù hợp du lịch, cắm trại, sinh nhật, team building.',
}

export default async function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SpecialNoticeBanner />
      <ProductList />
      <UseCaseSection />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <FAQSchema />
      <div className='mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 font-sans'>
        <NavigationV2 />
      </div>
      <MenuContact />
    </>
  )
}
