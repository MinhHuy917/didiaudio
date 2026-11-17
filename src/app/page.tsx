import { createPageMetadata, rentalServiceSchema, jsonLd } from '@/lib/seo'
import dynamic from 'next/dynamic'
import { articles } from '@/data/blog'
import { RentalProcess } from '@/components/RentalProcess'

const AboutSection = dynamic(() => import('@/components/AboutSection'))
const FAQ = dynamic(() => import('@/components/FAQ').then((mod) => mod.FAQ))
const MenuContact = dynamic(() => import('@/components/MenuContact'))
const ProductList = dynamic(() => import('@/components/ProductTable'))
const Testimonials = dynamic(() => import('@/components/Testimonials'))
const WhyUs = dynamic(() => import('@/components/WhyUs'))
const UseCaseSection = dynamic(() => import('@/components/UseCaseSection'))
const BlogCamTrai = dynamic(() => import('@/components/BlogCamTrai'))

export const metadata = createPageMetadata({
  title: 'Thuê Loa Kẹo Kéo Đà Nẵng | Thuê Loa Kéo - ĐiĐi Audio',
  description:
    'ĐiĐi Audio cung cấp dịch vụ thuê loa kẹo kéo, loa kéo tại Đà Nẵng. Xem loa JBL PartyBox, giá thuê theo ngày và liên hệ tư vấn theo nhu cầu.',
  path: '/',
})

export default async function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(rentalServiceSchema()) }}
      />
      <AboutSection />
      <ProductList />
      <RentalProcess />
      <UseCaseSection />
      <WhyUs />
      <BlogCamTrai
        articles={articles.map(({ slug, title, description, image, date }) => ({
          slug,
          title,
          description,
          image,
          date,
        }))}
      />
      <Testimonials />
      <FAQ />
      <MenuContact />
    </>
  )
}
