import Link from 'next/link'
import Product3D from '@/components/product-3d/Product3D'
import type { Product3DConfig } from '@/lib/product-3d'

export function HomeRentalPreview({
  product,
  model,
}: {
  product: { name: string; image: string; id: string; price: number }
  model?: Product3DConfig
}) {
  return (
    <section
      id="products"
      aria-labelledby="rental-preview-title"
      className="mx-auto max-w-xl scroll-mt-28 px-4 py-8 sm:px-6"
    >
      <h2 id="rental-preview-title" className="text-center text-2xl font-bold">
        Khám phá loa 360°
      </h2>
      <div className="mt-4 rounded-3xl border border-white/10 bg-white/[0.03] p-4 sm:p-6">
        <Product3D
          config={model}
          name={product.name}
          image={product.image}
          preview
        />
        <div className="mt-5 border-t border-white/10 pt-5">
          <h3 className="font-semibold text-white">{product.name}</h3>
          <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-cyan-300">
            Giá thuê ưu đãi
          </p>
          <p className="mt-1">
            <strong className="text-4xl font-black text-cyan-300">
              {new Intl.NumberFormat('vi-VN').format(product.price * 1000)}đ
            </strong>
            <span className="ml-2 text-gray-300">/ ngày</span>
          </p>
          <p className="mt-2 text-sm text-gray-200">
            2 micro không dây · Hỗ trợ setup tận nơi
          </p>
          <p className="mt-3 text-xs leading-6 text-gray-400">
            240W RMS · Pin lên đến 18 giờ · IPX4 · Auracast
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href={`/products/${product.id}#dat-thue`}
              className="inline-flex min-h-11 items-center rounded-xl bg-cyan-700 px-5 py-3 font-semibold text-white hover:bg-cyan-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"
            >
              Đặt thuê ngay
            </Link>
            <a
              href="tel:0339197917"
              className="inline-flex min-h-11 items-center rounded-xl border border-white/20 px-5 py-3 text-sm hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"
            >
              Liên hệ tư vấn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
