import { type Metadata } from 'next'

import { PageIntro } from '@/components/PageIntro'

export const metadata: Metadata = {
  title: 'Quy định và chính sách',
  description: 'Những Quy định và chính sách sử dụng',
}

export default async function SuDung() {

  return (
    <>
      <PageIntro
        eyebrow="Quy định và chính sách"
        title="Quy định sử dụng"
      >
      <div className='font-[system-ui]'>
      <div className="bg-gray-100 text-gray-900">
    <div className="container mx-auto p-6">
        <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">1. Thời Gian Thuê Lều:</h2>
            <p className="mb-2">
            Thời gian thuê lều là 24 giờ, bắt đầu từ thời điểm nhận lều. Để đảm bảo sự thuận lợi cho tất cả khách hàng, chúng tôi mong quý khách vui lòng tuân thủ thời gian này.

            </p>
            <p>
            Nếu quý khách muốn sử dụng lều lâu hơn 1 ngày, chúng tôi rất vui lòng cung cấp dịch vụ cho thuê tiếp theo với mức giá ưu đãi. Chúng tôi chỉ tính thêm 50% giá thuê cho mỗi ngày tiếp theo, giúp quý khách tiết kiệm hơn khi lưu trú lâu dài.

            </p>

        </section>
        
        <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">2. Kiểm Tra Trước Khi Thuê Lều:</h2>
            <p>
                Khách hàng có trách nhiệm kiểm tra kỹ lưỡng lều và các thiết bị trước khi thuê và nhận lều. Nếu có bất kỳ vấn đề hoặc hư hỏng nào, hãy thông báo ngay cho chúng tôi để được hỗ trợ kịp thời.
            </p>
        </section>

        <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">3. Sử Dụng và Bảo Quản Lều:</h2>
            <p>
                Trong quá trình sử dụng lều, khách hàng cần phải có trách nhiệm giữ gìn lều sạch sẽ và trong tình trạng tốt. Không được làm hư hỏng, cháy nổ hoặc mất mát bất kỳ trang thiết bị nào.
            </p>
            <p>
                Vui lòng tránh đặt lều gần các nguồn lửa, nhiệt độ cao hoặc các vật sắc nhọn có thể gây hư hại.
            </p>
        </section>
        
        <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">4. Đền Bù Thiệt Hại:</h2>
            <p>
                Nếu lều hoặc các thiết bị bị hư hỏng, cháy nổ hoặc mất mát trong thời gian thuê, khách hàng sẽ phải bồi thường theo giá trị của sản phẩm. Chi phí đền bù sẽ được tính dựa trên mức độ thiệt hại và giá trị của thiết bị.
            </p>
        </section>
        
        <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">5. Trả Lều:</h2>
            <p>
                Khi trả lều, vui lòng đảm bảo rằng lều và thiết bị được trả lại trong tình trạng sạch sẽ và không hư hỏng. Chúng tôi sẽ kiểm tra lều và thiết bị ngay khi nhận lại để xác nhận tình trạng của chúng.
            </p>
        </section>

        <section>
            <h2 className="text-2xl font-semibold mb-2">6. Chính Sách Đền Bù:</h2>
            <p>
                Chính sách đền bù cụ thể sẽ được thông báo rõ ràng tại thời điểm thuê lều. Khách hàng nên đọc kỹ chính sách này để hiểu rõ về các điều khoản và điều kiện liên quan đến việc bồi thường thiệt hại.
            </p>
        </section>

        <section className="mt-6">
            <p className="font-semibold">
                Nếu có bất kỳ câu hỏi nào về quy định sử dụng lều hoặc chính sách đền bù, xin vui lòng liên hệ với ĐiĐi Camping để được hỗ trợ.
            </p>
            <p className="mt-2">
                Chúng tôi mong rằng quý khách hàng sẽ tuân thủ các quy định trên để đảm bảo việc sử dụng lều được an toàn và thuận lợi. Xin cảm ơn sự hợp tác và tin tưởng của quý khách!
            </p>
        </section>
    </div>
      </div>
    
      </div>
      
      </PageIntro>
    </>
  )
}
