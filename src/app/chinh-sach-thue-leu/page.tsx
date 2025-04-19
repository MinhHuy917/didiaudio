import { type Metadata } from 'next'

import { PageIntro } from '@/components/PageIntro'


export const metadata: Metadata = {
  title: 'Quy định và chính sách',
  description: 'Những Quy định và chính sách',
}

export default async function QuyDinhVaChinhSach() {

  return (
    <>
     <PageIntro eyebrow="Quy định & Chính sách" title="Chính Sách Thuê Lều">
  <div className="font-[system-ui] bg-gray-100 text-gray-900 py-6 px-4 md:px-8">
    <div className="container mx-auto space-y-6">

      <section>
        <h2 className="text-2xl font-semibold mb-2">1. Giấy Tờ & Đặt Cọc</h2>
        <p>Khi thuê lều, quý khách vui lòng mang theo căn cước công dân để shop kiểm tra và chụp ảnh lại. Shop chỉ đối chiếu, không giữ giấy tờ gốc.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">2. Thanh Toán</h2>
        <p>Thanh toán đầy đủ trước khi nhận lều. Trường hợp lều hư hại hoặc mất, quý khách sẽ bồi thường theo chính sách đền bù của shop.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">3. Thời Gian Thuê</h2>
        <p>Thời gian thuê tiêu chuẩn là 24 giờ kể từ lúc nhận lều và phụ kiện. Nếu thuê thêm, chỉ tính 50% giá thuê cho mỗi ngày tiếp theo.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">4. Kiểm Tra & Sử Dụng</h2>
        <p>Khách hàng cần kiểm tra kỹ lều và phụ kiện trước khi nhận. Nếu phát hiện lỗi hay thiếu đồ, hãy báo ngay để được hỗ trợ. Trong quá trình sử dụng, giữ gìn thiết bị sạch sẽ, tránh lửa, nhiệt độ cao, vật sắc nhọn và không làm hư hỏng hay thất lạc đồ đạc.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">5. Thiệt Hại & Đền Bù</h2>
        <ul className="list-disc list-inside space-y-1 text-base">
          <li><strong>Thông báo:</strong> Vui lòng thông báo ngay nếu lều hoặc phụ kiện bị hư hỏng trong quá trình sử dụng.</li>
          <li><strong>Bồi thường:</strong> Mọi hư hỏng hoặc mất mát do lỗi của khách hàng sẽ được tính phí sửa chữa hoặc thay thế theo <span className="italic">giá trị thị trường hiện tại</span>.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">6. Trả Lại Thiết Bị</h2>
        <p>Thiết bị cần được trả lại trong tình trạng sạch sẽ và nguyên vẹn. Nếu quá bẩn sẽ phụ thu phí vệ sinh từ 100.000đ đến 200.000đ. Trường hợp không thể vệ sinh, khách hàng phải đền bù theo giá trị sản phẩm.</p>
      </section>

    </div>
  </div>
</PageIntro>
    </>
  )
}
