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
              <h2 className="text-2xl font-semibold mb-2">1. Đặt Cọc & thanh toán</h2>
              <p>Khi thuê lều, vui lòng mang theo CCCD hoặc GPLX để bên mình đối chiếu và chụp ảnh làm cơ sở cọc (chỉ lưu thông tin, không giữ giấy tờ). Và thanh toán đầy đủ trước khi nhận lều.
              </p>

            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">2. Thời Gian Thuê</h2>
              <p>Thời gian thuê được tính theo ngày (24 tiếng) kể từ lúc nhận lều và phụ kiện. Tuy nhiên, bên mình hỗ trợ linh hoạt cho khách nhận sớm hoặc trả trễ nếu cần. </p>

              <p className='mt-1 text-base font-bold'>Ví dụ: Nếu bạn đi cắm trại vào thứ 7 mà sáng thứ 7 xuất phát đi sớm, bạn có thể ghé lấy lều từ tối thứ 6 mà không tính thêm phí. Khi kết thúc chuyến cắm trại, bạn có thể trả lều vào Chủ Nhật trong ngày nếu cần thêm thời gian di chuyển. Tuy nhiên, nếu giữ lều qua đêm Chủ Nhật và trả vào thứ 2 hoặc sau đó, bên mình sẽ tính thêm 50% giá thuê cho mỗi ngày tiếp theo.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">3. Kiểm Tra & Sử Dụng</h2>
              <p>Vui lòng kiểm tra kỹ lều và phụ kiện khi nhận. Vì shop có thể quên, tốt nhất bạn hãy kiểm tra lại để tránh thiếu đồ, vì nếu thiếu sẽ khá phiền phức. Trong quá trình sử dụng, giữ đồ sạch sẽ, không làm hỏng hoặc làm mất. Khi trả lại, nếu thiết bị bị hư hỏng, thiếu hoặc quá bẩn, shop sẽ tính phí vệ sinh hoặc bồi thường tùy mức độ.</p>
            </section>


          </div>
        </div>
      </PageIntro>
    </>
  )
}
