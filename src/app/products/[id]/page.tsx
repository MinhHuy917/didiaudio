'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Check } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { products } from '@/data/products'
import MenuContact from '@/components/MenuContact'

type Product = {
  id: string | number
  name: string
  catalogue: string
  image: string
  image1?: string
  image2?: string
  image3?: string
  image4?: string
  image5?: string
  originalPrice?: number
  price: number
  detail1?: string
  detail2?: string
  detail3?: string
  detail4?: string
  detail5?: string
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const router = useRouter()

  const product = products.find((p) => p.id.toString() === params.id) as Product | undefined

  const images = useMemo(
    () =>
      [product?.image, product?.image1, product?.image2, product?.image3, product?.image4, product?.image5].filter(Boolean) as string[],
    [product],
  )

  const [mainImage, setMainImage] = useState<string | undefined>(images[0])

  if (!product) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-[#0a3257]">Không tìm thấy sản phẩm</h1>
        <button onClick={() => router.push('/')} className="mt-4 rounded-xl bg-[#0f7ec7] px-5 py-3 font-bold text-white">
          Về trang chủ
        </button>
      </main>
    )
  }

  const detailList = [product.detail1, product.detail2, product.detail3, product.detail4, product.detail5].filter(Boolean)

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 pb-24 sm:px-6 lg:px-8">
      <button onClick={() => router.back()} className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0f7ec7]">
        <ArrowLeft className="h-4 w-4" /> Quay lại
      </button>

      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-[#f4faff]">
            {mainImage ? <Image src={mainImage} alt={product.name} fill className="object-contain" priority /> : null}
          </div>
          <div className="mt-3 flex gap-2 overflow-x-auto pb-2">
            {images.map((img) => (
              <button
                key={img}
                onClick={() => setMainImage(img)}
                className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl border-2 ${mainImage === img ? 'border-[#0f7ec7]' : 'border-[#dceeff]'}`}
              >
                <Image src={img} alt={product.name} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-[#dceeff] bg-white p-5 sm:p-6">
          <h1 className="text-2xl font-black text-[#0a3257] sm:text-3xl">{product.name}</h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">{product.catalogue}</p>

          <div className="mt-5 rounded-2xl bg-[#f4faff] p-4">
            <p className="text-sm text-slate-500">Giá thuê</p>
            <p className="text-3xl font-black text-[#ff8a00]">{product.price}k/ngày</p>
            <p className="text-sm text-slate-500">Từ ngày thứ 2: {Math.floor(product.price * 0.5)}k/ngày</p>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3">
            <Link href="tel:0339197917" className="rounded-xl bg-[#16a34a] px-4 py-3 text-center text-sm font-bold text-white">
              Gọi ngay
            </Link>
            <Link href="https://zalo.me/0339197917" target="_blank" className="rounded-xl bg-[#0f7ec7] px-4 py-3 text-center text-sm font-bold text-white">
              Zalo
            </Link>
            <Link href="https://m.me/chothueloakeokeodanang" target="_blank" className="rounded-xl border border-[#0f7ec7] px-4 py-3 text-center text-sm font-bold text-[#0f7ec7]">
              Messenger
            </Link>
          </div>

          <h2 className="mt-6 text-lg font-bold text-[#0a3257]">Thông tin nhanh</h2>
          <ul className="mt-3 space-y-2">
            {detailList.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#0f7ec7]" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="mt-8 rounded-2xl bg-[#fff8ef] p-5 text-sm leading-6 text-[#8a4d0a]">
        <p className="font-semibold">Chính sách thuê</p>
        <p>• Có thể cọc CCCD/GPLX. • Thanh toán tiền thuê khi nhận loa. • Hư hỏng sẽ tính phí sửa chữa theo thực tế.</p>
      </section>

      <MenuContact />
    </main>
  )
}
