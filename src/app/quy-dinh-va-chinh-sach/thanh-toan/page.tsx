import { type Metadata } from 'next'
import { PageIntro } from '@/components/PageIntro'
import Image from 'next/image'
import qr from '@/images/qr.png'

export const metadata: Metadata = {
  title: 'Quy định & Chính sách',
  description: 'Chính sách thanh toán & đặt cọc',
}

export default function ThanhToan() {
  return (
    <>
      <PageIntro eyebrow="Quy định & Chính sách" title="Chính sách Thanh Toán">
        <div className="font-[system-ui] bg-gray-100 text-gray-900">
          <div className="container mx-auto p-6 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-2">1. Đặt Cọc & Hợp Đồng</h2>
              <p><strong>Tại cửa hàng:</strong> Quý khách mang theo giấy tờ tùy thân để ký hợp đồng thuê. Chỉ đối chiếu, không giữ giấy tờ.</p>
              <p><strong>Đặt online:</strong> Cọc <strong>50% giá thuê</strong> để giữ lều. Khoản này được trừ vào tổng chi phí khi thanh toán.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">2. Thanh Toán</h2>
              <p>Thanh toán trước khi nhận lều. Nếu lều bị hư hại hoặc mất, quý khách bồi thường theo chính sách.</p>
            </section>

            {/* <section>
              <h2 className="text-2xl font-semibold mb-2">3. Thanh Toán Qua QR</h2>
              <p>Sau khi thanh toán qua mã QR, vui lòng chụp ảnh giao dịch và nhắn tin số lượng lều, phụ kiện thuê để xác nhận.</p>
              <Image src={qr} alt="Mã QR thanh toán" className='rounded-3xl mt-5'/>
            </section> */}
          </div>
        </div>
      </PageIntro>
    </>
  )
}
