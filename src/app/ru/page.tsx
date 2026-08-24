import { type Metadata } from 'next'
import InternationalLanding from '@/components/InternationalLanding'
import { landingPagesData } from '@/data/landing-pages'

export const metadata: Metadata = {
  title: 'Аренда колонок JBL в Дананге | Премиум звук для вечеринок',
  description: 'Аренда оригинальных Bluetooth колонок JBL PartyBox в Дананге. Идеально для пляжных вечеринок и барбекю на вилле. Быстрая доставка.',
  keywords: ['аренда колонок дананг', 'аренда jbl дананг', 'bluetooth колонка дананг', 'вечеринка дананг'],
}

export default function RussianLandingPage() {
  return <InternationalLanding content={landingPagesData.ru} />
}
