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
      <Container className="mt-24 sm:mt-32 md:mt-40 !pl-0">
        <PageIntro eyebrow="" title="">
        <h1 className="font-poppins text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-fuchsia-500 via-rose-500 to-orange-400 bg-clip-text text-transparent [text-wrap:balance] py-10 lg:py-24 drop-shadow-lg animate-gradient-x">
  Cho Thuê Lều & Đồ Cắm Trại Đà Nẵng
</h1>




        </PageIntro>
      </Container>
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
