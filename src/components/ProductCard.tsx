'use client'

import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
  product: {
    id: string
    name: string
    catalogue: string
    image: string
    price: number
    originalPrice?: number
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-[#dceeff] bg-white shadow-sm">
      <Link href={`/products/${product.id}`}>
        <div className="relative h-56 bg-[#f4faff]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute right-3 top-3 rounded-full bg-[#ff8a00] px-3 py-1 text-sm font-bold text-white">
            {product.price}k/ngày
          </div>
        </div>
      </Link>

      <div className="space-y-4 p-5">
        <div>
          <h3 className="text-lg font-bold text-[#0a3257]">{product.name}</h3>
          <p className="mt-1 line-clamp-2 text-sm text-slate-600">{product.catalogue}</p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Link href={`/products/${product.id}`} className="rounded-xl border border-[#0f7ec7] px-3 py-2 text-center text-sm font-semibold text-[#0f7ec7]">
            Xem chi tiết
          </Link>
          <Link href="tel:0339197917" className="rounded-xl bg-[#16a34a] px-3 py-2 text-center text-sm font-semibold text-white">
            Thuê ngay
          </Link>
        </div>
      </div>
    </article>
  )
}
