import Link from 'next/link'

export function RentalOffer({
  product,
}: {
  product: { name: string; id: string; price: number }
}) {
  return (
    <div className="mx-auto mt-6 max-w-xl rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
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
  )
}
