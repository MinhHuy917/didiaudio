import type { GalleryPhoto } from '@/lib/product-gallery-types'
import photo01 from '@/images/loajbl320/01.jpg'
import photo02 from '@/images/loajbl320/02.jpg'
import photo03 from '@/images/loajbl320/03.jpg'
import photo04 from '@/images/loajbl320/04.jpg'
import photo05 from '@/images/loajbl320/05.jpg'
import photo06 from '@/images/loajbl320/5.jpeg'
import photo07 from '@/images/loajbl320/06.jpg'
import photo08 from '@/images/loajbl320/07.jpg'
import photo09 from '@/images/loajbl320/08.jpg'
import photo10 from '@/images/loajbl320/09.png'
import photo11 from '@/images/loajbl320/10.jpg'
import photo12 from '@/images/loajbl320/11.jpg'

// Numeric filename order; both 05.jpg and 5.jpeg are included.
export const stage320Photos: GalleryPhoto[] = [
  photo01,
  photo02,
  photo03,
  photo04,
  photo05,
  photo06,
  photo07,
  photo08,
  photo09,
  photo10,
  photo11,
  photo12,
].map((image, index) => ({
  src: image.src,
  alt: `JBL PartyBox Stage 320 — ảnh sản phẩm ${index + 1}`,
}))

export const productPhotoOrder: Record<string, GalleryPhoto[]> = {
  'loa-jbl-partyBox-stage-320': stage320Photos,
}
