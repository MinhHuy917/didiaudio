import { type Metadata } from 'next'
import { PageIntro } from '@/components/PageIntro'

export const metadata: Metadata = {
  title: 'Chính Sách Đền Bù và Bồi Thường',
  description: 'Chi tiết về chính sách đền bù và bồi thường của Đà Nẵng Campers',
}

export default async function DenBu() {
  return (
    <>
      <PageIntro
        eyebrow="Chính Sách Đền Bù"
        title="Chính Sách Đền Bù và Bồi Thường"
      >
        <div className='font-[system-ui]'>
          <div className="bg-gray-100 text-gray-900">
            <div className="container mx-auto p-6">
              <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">1. Chính Sách Thiệt Hại và Bồi Thường:</h2>
                <p className="mb-4">
                  <strong>Thiệt Hại:</strong><br />
                  Khách hàng phải thông báo ngay nếu lều hoặc thiết bị bị hư hỏng. Phí sửa chữa hoặc thay thế do lỗi khách hàng sẽ tính theo mức giá thị trường.
                </p>
                <p>
                  <strong>Bồi Thường:</strong><br />
                  Nếu thiệt hại vượt quá số tiền đặt cọc, khách hàng bồi thường theo giá trị thị trường của thiết bị hoặc lều bị hư hỏng hoặc mất mát.
                </p>
              </section>

              <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">2. Chính Sách Hủy Đặt:</h2>
                <p>
                  Hủy ít nhất 24 giờ trước ngày sử dụng để nhận lại 50% số tiền đặt cọc. Sau thời gian này, phí hủy không được hoàn trả.
                </p>
              </section>

              <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">3. Chính Sách Vệ Sinh:</h2>
                <p className="mb-4">
                  <strong>Vệ Sinh:</strong><br />
                  Khách hàng phải giữ lều và thiết bị sạch sẽ. Phí xử lý vệ sinh là 200.000 VNĐ nếu lều trả lại trong tình trạng dơ bẩn.
                </p>
                <p>
                  <strong>Dính Nhớp Không Thể Tẩy Rửa:</strong><br />
                  Phí xử lý vệ sinh áp dụng nếu lều dính nhớp không thể làm sạch bằng phương pháp thông thường.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">4. Quy Trình Đền Bù:</h2>
                <p>
                  Đà Nẵng Campers sẽ thông báo chi phí bồi thường và khách hàng phải thanh toán trong thời gian quy định.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">5. Liên Hệ và Hỗ Trợ:</h2>
                <p>
                  Liên hệ Đà Nẵng Campers nếu có câu hỏi hoặc cần hỗ trợ. Chúng tôi cam kết minh bạch và công bằng.
                </p>
              </section>
            </div>
          </div>
        </div>
      </PageIntro>
    </>
  )
}
