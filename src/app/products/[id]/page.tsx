import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProductDetailClient from '@/components/ProductDetailClient'
import { products } from '@/data/products'
import { createPageMetadata, rentalServiceSchema, jsonLd } from '@/lib/seo'

function findProduct(id: string) {
  const product = products.find((item) => item.id === id)
  if (!product) notFound()
  return product
}

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }))
}

export function generateMetadata({
  params,
}: {
  params: { id: string }
}): Metadata {
  const product = findProduct(params.id)
  return createPageMetadata({
    title: `Thuê ${product.name.replace(/^Loa\s+/i, '')} tại Đà Nẵng | ĐiĐi Audio`,
    description: `${product.name} cho thuê tại Đà Nẵng. Xem hình ảnh, thông số, giá thuê theo ngày và liên hệ ĐiĐi Audio để xác nhận lịch thuê.`,
    path: `/products/${product.id}`,
    image: product.image,
  })
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = findProduct(params.id)
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(rentalServiceSchema(product)),
        }}
      />
      <ProductDetailClient product={product} />
    </>
  )
}
