import { type Metadata } from 'next'

import { Container } from '@/components/Container'
import MenuContact from '@/components/MenuContact'
import { PageIntro } from '@/components/PageIntro'
import ProductList from '@/components/ProductTable'
import ImageSlider from '@/components/ImageSlider'
import { NavigationV2 } from '@/components/RootLayout'

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-40 !pl-0 pb-12 sm:pb-16 md:pb-20">
        <PageIntro eyebrow="" title="ĐiĐi Camping">
          <h1 className="font-[system-ui] text-3xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-5xl">
            Cho thuê lều và phụ kiện cắm trại ở Đà Nẵng
          </h1>
        </PageIntro>
      </Container>
      <div className='pb-12 sm:pb-16 md:pb-20'>

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
