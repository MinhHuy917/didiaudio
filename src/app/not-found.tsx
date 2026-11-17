import Link from 'next/link'
import { Container } from '@/components/Container'

export default function NotFound() {
  return <Container className="py-16 text-white"><p className="text-sm text-gray-300">404</p><h1 className="mt-4 text-3xl font-semibold">Không tìm thấy trang</h1><p className="my-6 text-gray-300">Đường dẫn này không tồn tại. Bạn có thể xem thiết bị và giá thuê đang được giới thiệu tại ĐiĐi Audio.</p><Link href="/#products" className="inline-flex min-h-11 items-center rounded-xl bg-cyan-300 px-5 py-3 font-semibold text-gray-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-200">Xem loa &amp; giá thuê</Link></Container>
}
