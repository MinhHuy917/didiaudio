import { type Metadata } from 'next'

import { PageIntro } from '@/components/PageIntro'

export const metadata: Metadata = {
  title: 'Quy định và chính sách',
  description: 'Những Quy định và chính sách',
}

export default async function ThanhToan() {

  return (
    <>
      <PageIntro
        eyebrow="Quy định và chính sách"
        title="Chính sách thanh toán"
      >
      <div className='font-[system-ui]'>
      <div className="bg-gray-100 text-gray-900">
    <div className="container mx-auto p-6">
        <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">1. Đặt Cọc:</h2>
            <p className="mb-2">
                <strong>Thuê tại cửa hàng:</strong> Khách hàng thanh toán tiền thuê lều và để lại 01 bản sao căn cước công dân (hoặc bằng lái xe).
            </p>
            <p>
                <strong>Thuê giao hàng tận nơi:</strong> Khách hàng cần thanh toán tiền thuê lều và đặt cọc 500.000 VNĐ qua chuyển khoản. Vui lòng ghi thông tin chuyển khoản (SĐT thuê), chụp màn hình và gửi cho chúng tôi kèm bản sao căn cước công dân và link Facebook cá nhân.
            </p>
        </section>
        
        <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">2. Thanh Toán:</h2>
            <p className="mb-2">
                Toàn bộ chi phí thuê lều và thiết bị phải được thanh toán trước khi nhận lều và thiết bị. Khách hàng có thể thanh toán qua chuyển khoản ngân hàng, hoặc tiền mặt.
            </p>
            <p className="mb-2">
                
            </p>
        </section>

        <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">3. Giao Hàng:</h2>
            <p className="mb-2">
                <strong>Miễn phí giao hàng:</strong> Đối với đơn hàng có tổng hóa đơn trên 1.000.000 VNĐ, chúng tôi cung cấp dịch vụ giao hàng miễn phí một chiều trong thành phố Đà Nẵng. Đơn hàng phải được đặt trước 24 giờ để chúng tôi có thời gian thu xếp. Dịch vụ miễn phí giao hàng không áp dụng vào các dịp lễ lớn.
            </p>
            <p>
                <strong>Giao hàng có phí:</strong> Đối với các đơn hàng không đủ điều kiện miễn phí giao hàng, chúng tôi sẽ tính phí giao hàng theo giá của dịch vụ Grab.
            </p>
        </section>
        
        <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">4. Quy Trình:</h2>
            <p className="mb-2">
                Sau khi nhận được đặt cọc và thanh toán đầy đủ, chúng tôi sẽ chuẩn bị lều và thiết bị cho khách hàng. Khách hàng sẽ nhận lều và thiết bị vào thời gian đã hẹn sau khi thanh toán hoàn tất.
            </p>
        </section>

        <section>
            <h2 className="text-2xl font-semibold mb-2">5. Hoàn Tiền Đặt Cọc:</h2>
            <p>
                Đặt cọc sẽ được hoàn lại khi khách hàng trả lều và thiết bị trong tình trạng tốt, không hư hỏng và đúng thời gian quy định.
            </p>
        </section>

        <section className="mt-6">
            <p className="font-semibold">
                Nếu có bất kỳ câu hỏi nào về chính sách thanh toán và giao hàng, xin vui lòng liên hệ với Đà Nẵng Campers để được hỗ trợ.
            </p>
            <p className="mt-2">
                Chúng tôi xin cảm ơn sự hợp tác và tin tưởng của quý khách!
            </p>
        </section>
    </div>
      </div>
      </div>

      
      </PageIntro>
    </>
  )
}
