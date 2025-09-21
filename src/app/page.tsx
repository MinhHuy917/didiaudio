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
import BlogCamTrai from '@/components/BlogCamTrai'

export const metadata: Metadata = {
  description:
  'Dịch vụ cho thuê lều cắm trại chuyên nghiệp tại Đà Nẵng – đồng hành cùng bạn trong mọi chuyến phiêu lưu.',
}

export default async function Home() {
  return (
    <>
      <ImageSlider />
      {/* ✅ Giới thiệu về Dì Đi Camping */}
        <AboutSection />
{/* ✅ Vì sao chọn chúng tôi */}
<WhyUs />
          {/* ✅ Đánh giá khách hàng */}
          <Testimonials />

      <SpecialNoticeBanner />

      <ProductList />

        
      <div>
      <h2 className="text-5xl font-bold text-center text-gray-900 mb-10">
         Blog cắm trại
          </h2>
       <BlogCamTrai />
      </div>
      <FAQ />

      <FAQSchema />
      <div className='mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 font-sans text-[#1F3329]'>

      <NavigationV2 />
      </div>
      

      <MenuContact />

    </>
  )
}
