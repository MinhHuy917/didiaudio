import Link from 'next/link'

export function RentalProcess() {
  return (
    <section
      id="promos"
      aria-labelledby="rental-process-title"
      className="mx-auto max-w-7xl px-6 py-12 text-white"
    >
      <h2
        id="rental-process-title"
        className="mb-6 text-2xl font-semibold sm:text-3xl"
      >
        Cách thuê loa tại ĐiĐi Audio
      </h2>
      <ol className="grid gap-6 sm:grid-cols-3">
        <li>
          <h3 className="font-semibold">1. Xem thiết bị và giá</h3>
          <p className="mt-2 leading-7 text-gray-300">
            Đối chiếu thông số, phụ kiện và giá theo ngày của loa đang có trong{' '}
            <Link href="/#products" className="text-cyan-200 underline">
              danh mục
            </Link>
            .
          </p>
        </li>
        <li>
          <h3 className="font-semibold">2. Trao đổi nhu cầu</h3>
          <p className="mt-2 leading-7 text-gray-300">
            Cho ĐiĐi Audio biết thời gian thuê, địa điểm và nhu cầu sử dụng qua{' '}
            <a href="tel:0339197917" className="text-cyan-200 underline">
              0339 197 917
            </a>
            .
          </p>
        </li>
        <li>
          <h3 className="font-semibold">3. Xác nhận thông tin thuê</h3>
          <p className="mt-2 leading-7 text-gray-300">
            Thống nhất lịch thuê, giao nhận và{' '}
            <Link href="/#chinh-sach" className="text-cyan-200 underline">
              các điều kiện cần xác nhận
            </Link>{' '}
            trước khi chốt với ĐiĐi Audio.
          </p>
        </li>
      </ol>
    </section>
  )
}
