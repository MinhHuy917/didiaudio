import { productPhotoOrder } from '@/data/product-gallery'
import type { GalleryPhoto } from './product-gallery-types'

type GalleryProduct = {
  id: string | number
  name: string
  image: string
  image1?: string
  image2?: string
  image3?: string
  image4?: string
  image5?: string
  image6?: string
  image7?: string
  image8?: string
  image9?: string
  image10?: string
  image11?: string
  image12?: string
}

/** A configured gallery replaces legacy photos; other products use their own images. */
export function getProductGallery(product: GalleryProduct): GalleryPhoto[] {
  const configured = productPhotoOrder[String(product.id)]
  if (configured) return configured

  const existing = [
    product.image,
    product.image1,
    product.image2,
    product.image3,
    product.image4,
    product.image5,
    product.image6,
    product.image7,
    product.image8,
    product.image9,
    product.image10,
    product.image11,
    product.image12,
  ]
    .filter((src): src is string => !!src)
    .map((src, i) => ({ src, alt: `${product.name} — ảnh sản phẩm ${i + 1}` }))
  const seen = new Set<string>()
  return existing.filter(({ src }) => {
    if (seen.has(src)) return false
    seen.add(src)
    return true
  })
}
