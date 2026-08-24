import { type Metadata } from 'next'
import { landingPagesData } from '@/data/landing-pages'
import InternationalLandingWrapper from '@/components/InternationalLandingWrapper'

export const metadata: Metadata = {
  title: '다낭 JBL 스피커 대여 | 프리미엄 블루투스 스피커 | 빠른 배송',
  description: '다낭에서 정품 JBL 파티박스 스피커를 대여하세요. 풀빌라 바비큐, 해변 파티에 완벽합니다. 빠른 배송 및 설치. 카카오톡으로 예약하세요.',
  keywords: ['다낭 스피커 대여', '다낭 블루투스 스피커', '다낭 jbl 대여', '다낭 파티룸', '다낭 풀빌라 스피커'],
}

export default function KoreanLandingPage() {
  return <InternationalLandingWrapper content={landingPagesData.ko} />
}
