import { createPageMetadata, rentalServiceSchema, jsonLd } from '@/lib/seo'
import dynamic from 'next/dynamic'
import { articles } from '@/data/blog'
import { products } from '@/data/products'
import { getProductGallery } from '@/lib/product-gallery'
import { product3D } from '@/data/product-3d'
import { RentalProcess } from '@/components/RentalProcess'
import { HomeRentalPreview } from '@/components/HomeRentalPreview'
import { HomeResources, HomeExplore } from '@/components/HomeQuickLinks'

const AboutSection = dynamic(() => import('@/components/AboutSection'))
const FAQ = dynamic(() => import('@/components/FAQ').then((mod) => mod.FAQ))
const MenuContact = dynamic(() => import('@/components/MenuContact'))
const ProductPhotos = dynamic(() => import('@/components/ProductTable'))

export const metadata = createPageMetadata({
  title: 'Thuê Loa Kẹo Kéo Đà Nẵng | Thuê Loa Kéo - ĐiĐi Audio',
  description:
    'ĐiĐi Audio cung cấp dịch vụ thuê loa kẹo kéo, loa kéo tại Đà Nẵng. Xem loa JBL PartyBox, giá thuê theo ngày và liên hệ tư vấn theo nhu cầu.',
  path: '/',
})

export default async function Home() {
  const featured = products[0]
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(rentalServiceSchema()) }}
      />
      <AboutSection
        speaker={
          featured
            ? {
                name: featured.name,
                image: featured.image,
                images: getProductGallery(featured),
              }
            : undefined
        }
      />
      {featured && (
        <HomeRentalPreview product={featured} model={product3D[featured.id]} />
      )}
      <ProductPhotos />
      <RentalProcess />
      <HomeResources />
      <HomeExplore
        articles={articles.map(({ slug, title }) => ({ slug, title }))}
      />
      <FAQ />
      <MenuContact />
    </>
  )
}
