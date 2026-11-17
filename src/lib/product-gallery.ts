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

/** Curated manufacturer order, reusing existing views and preserving all existing photos. */
export function getProductGallery(product: GalleryProduct): GalleryPhoto[] {
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
  const order = productPhotoOrder[String(product.id)] || []
  const photos = [
    ...order
      .map((item) => (typeof item === 'number' ? existing[item] : item))
      .filter((item): item is GalleryPhoto => !!item),
    ...existing,
  ]
  const seen = new Set<string>()
  return photos.filter(({ src }) => {
    if (seen.has(src)) return false
    seen.add(src)
    return true
  })
}
