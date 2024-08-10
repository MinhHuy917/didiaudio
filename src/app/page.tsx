import { type Metadata } from 'next'

import { Container } from '@/components/Container'
import ProductList from '@/components/ProductTable'
import { loadCaseStudies } from '@/lib/mdx'
import { PageIntro } from '@/components/PageIntro'

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  return (
    <>
      <Container className="mt-24 pb-24 sm:mt-32 sm:pb-32 md:mt-40 md:pb-40">
        <PageIntro
          eyebrow="Đà Nẵng Campers"
          title="Địa điểm thuê lều và thiết bị đồ cắm trại"
        >
          <h1 className=" font-display text-3xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-5xl">
            Cuối tuần hãy cùng bạn bè, người yêu có những buổi cắm trại để kết
            nối cùng nhau
          </h1>
        </PageIntro>
      </Container>
      <ProductList />

      {/* // Các quy tắc & đền bù khi làm hư hỏng đồ cắm trại */}
    </>
  )
}
