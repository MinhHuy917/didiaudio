import { createPageMetadata } from '@/lib/seo'
import { landingPagesData } from '@/data/landing-pages'
import InternationalLandingWrapper from '@/components/InternationalLandingWrapper'

export const metadata = createPageMetadata({
  title: '다낭 JBL 스피커 대여 | ĐiĐi Audio',
  description: '다낭의 JBL PartyBox 스피커 대여 정보를 확인하세요. 제품, 일일 대여 요금과 연락 방법을 보고 ĐiĐi Audio에 대여 일정을 문의하세요.',
  path: '/speaker-rental-da-nang-ko',
  locale: 'ko_KR',
})

export default function KoreanLandingPage() {
  return <InternationalLandingWrapper language="ko" content={landingPagesData.ko} />
}
