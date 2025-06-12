import { type Metadata } from 'next'

import { Container } from '@/components/Container'
import MenuContact from '@/components/MenuContact'
import { PageIntro } from '@/components/PageIntro'
import ProductList from '@/components/ProductTable'
import ImageSlider from '@/components/ImageSlider'
import { NavigationV2 } from '@/components/RootLayout'

export const metadata: Metadata = {
  description:
  'Dịch vụ cho thuê lều cắm trại chuyên nghiệp tại Đà Nẵng – đồng hành cùng bạn trong mọi chuyến phiêu lưu.',
}

export default async function Home() {
  return (
    <>
      <div>

      <ImageSlider />
      </div>
      <ProductList />
      <div className='mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 font-sans text-[#1F3329]'>

      <NavigationV2 />
      </div>

      <MenuContact />

    </>
  )
}
