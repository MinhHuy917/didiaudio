import { type Metadata } from 'next'

import { PageIntro } from '@/components/PageIntro'
import { loadArticles } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'Kỹ Năng Cắm Trại',
  description: 'Những kỹ năng cắm trại cơ bản dành cho người mới',
}

export default async function Blog() {
  let articles = await loadArticles()

  return (
    <>
      <PageIntro
        eyebrow="Kỹ Năng Cắm Trại"
        title="Những kỹ năng cắm trại cơ bản dành cho người mới"
      >
        <p>
          🌿 Đối với người mới, những kỹ năng cơ bản như chọn địa điểm 🗺️, dựng
          lều ⛺, chuẩn bị thức ăn 🍳, và bảo vệ môi trường ♻️ là rất quan
          trọng. Nắm vững những kỹ năng này sẽ giúp bạn tự tin khám phá và tận
          hưởng những trải nghiệm đáng nhớ trong tự nhiên. 🏕️🌲
        </p>
      </PageIntro>
    </>
  )
}
