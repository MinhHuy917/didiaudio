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

export const metadata: Metadata = {
  description:
  'Dịch vụ cho thuê loa kéo chuyên nghiệp tại Đà Nẵng – đồng hành cùng bạn trong mọi sự kiện và tiệc tùng.',
}

export default async function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SpecialNoticeBanner />
      <ProductList />
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
