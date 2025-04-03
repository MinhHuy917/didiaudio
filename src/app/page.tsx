import { type Metadata } from 'next'

import { Container } from '@/components/Container'
import MenuContact from '@/components/MenuContact'
import { PageIntro } from '@/components/PageIntro'
import ProductList from '@/components/ProductTable'

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  return (
    <>
      <Container className="mt-24 pb-24 sm:mt-32 sm:pb-32 md:mt-40 md:pb-40 !pl-0">
        <PageIntro eyebrow="" title="ĐiĐi Camping">
          <h1 className="font-[system-ui] text-3xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-5xl">
          Cho thuê lều và phụ kiện cắm trại ở Đà Nẵng
          </h1>
        </PageIntro>
      </Container>
      <ProductList />

      <MenuContact />

      {/* // Các quy tắc & đền bù khi làm hư hỏng đồ cắm trại */}
    </>
  )
}
