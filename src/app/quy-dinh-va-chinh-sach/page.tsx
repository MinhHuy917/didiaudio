import { type Metadata } from 'next'

import { PageIntro } from '@/components/PageIntro'
import { loadArticles } from '@/lib/mdx'
import BlogArticleWrapper from '../ky-nang-cam-trai/wrapper'

export const metadata: Metadata = {
  title: 'Quy định và chính sách',
  description: 'Những Quy định và chính sách',
}

export default async function QuyDinhVaChinhSach() {

  return (
    <>
      <PageIntro
        eyebrow="Quy định và chính sách"
        title="Những Quy định và chính sách"
      >
      <div className='font-[system-ui]'>

 
    <h2>1. Chọn địa điểm</h2>
    <p>Chọn một địa điểm cắm trại bằng phẳng, tránh những nơi dễ bị ngập nước hoặc gần các con đường.</p>

    <h2 className='mt-2'>2. Dựng lều</h2>
    <p><strong>Chuẩn bị lều:</strong> Trước khi dựng lều, hãy kiểm tra tất cả các bộ phận của lều và đảm bảo bạn có đủ các phụ kiện cần thiết.</p>
    <p><strong>Lắp đặt khung lều:</strong> Kéo dài các thanh khung và lắp chúng vào các khe phù hợp.</p>
    <p><strong>Gắn vải lều:</strong> Đặt tấm vải lều lên khung và cố định bằng cọc hoặc dây buộc.</p>
    <p><strong>Căng dây:</strong> Căng dây chắn gió để giữ lều ổn định.</p>

    <p className='mt-4'><strong>Xem video hướng dẫn chi tiết về cách dựng lều:</strong> </p>
      </div>
      
      </PageIntro>
    </>
  )
}
