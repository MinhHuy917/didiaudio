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
                <strong>Thuê tại cửa hàng:</strong>  Khách ký hợp đồng và đặt cọc 500k - 2tr tùy số lượng lều. Nếu đặt trước, cần cọc 50% để giữ lều, khi nhận kiểm tra và ký hợp đồng, không giữ căn cước.
            </p>
            <p>
                <strong>Thuê giao hàng tận nơi:</strong> Giao miễn phí trong vòng bán kính 10km từ cửa hàng 
            </p>
        </section>
        
        <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">2. Thanh Toán:</h2>
            <p className="mb-2">
            Chi phí thuê được thanh toán sau khi trả lều để kiểm tra hư hại (nếu có sẽ tính phí bồi thường). Khách có thể thanh toán bằng chuyển khoản hoặc tiền mặt.
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
        
       

        <section className="mt-6">
            <p className="font-semibold">
                Nếu có bất kỳ câu hỏi nào về chính sách thanh toán và giao hàng, xin vui lòng liên hệ với ĐiĐi Camping để được hỗ trợ.
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
