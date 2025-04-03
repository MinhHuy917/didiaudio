import { type Metadata } from 'next'

import { PageIntro } from '@/components/PageIntro'

export const metadata: Metadata = {
  title: 'Quy định và chính sách',
  description: 'Quy định sử dụng lều và phụ kiện cắm trại',
}

export default function SuDung() {
  return (
    <>
      <PageIntro eyebrow="Quy định và chính sách" title="Quy định sử dụng">
        <div className="font-[system-ui] bg-gray-100 text-gray-900 py-6 px-4 md:px-8">
          <div className="container mx-auto space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-2">1. Thời Gian Thuê</h2>
              <p>Thời gian thuê tiêu chuẩn là 24 giờ từ lúc nhận lều và phụ kiện. Nếu thuê thêm, chỉ tính 50% giá thuê mỗi ngày tiếp theo.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">2. Kiểm Tra Trước Khi Nhận</h2>
              <p>Khách hàng cần kiểm tra kỹ lều và phụ kiện trước khi nhận. Nếu phát hiện lỗi hay thiếu đồ, hãy báo ngay để được hỗ trợ.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">3. Sử Dụng & Bảo Quản</h2>
              <p>Giữ gìn lều và phụ kiện sạch sẽ, tránh lửa, nhiệt độ cao và vật sắc nhọn. Không làm hư hỏng, mất mát.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">4. Đền Bù Thiệt Hại</h2>
              <p>Nếu lều hoặc phụ kiện bị hư hỏng hay mất mát, khách hàng phải bồi thường theo giá trị sản phẩm.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">5. Trả Lại Thiết Bị</h2>
              <p>Trả lại lều và phụ kiện trong tình trạng sạch sẽ, nguyên vẹn. Nếu lều và phụ kiện bị bẩn quá thì phạt 200k tiền phí vệ sinh, còn nếu vệ sinh không được thì đền bù theo giá trị sản phẩm.</p>
            </section>
            
          </div>
        </div>
      </PageIntro>
    </>
  )
}
