import { type Metadata } from 'next'
import { landingPagesData } from '@/data/landing-pages'
import InternationalLandingWrapper from '@/components/InternationalLandingWrapper'

export const metadata: Metadata = {
  title: 'Аренда колонок JBL в Дананге | Премиум Bluetooth колонки',
  description: 'Аренда оригинальных колонок JBL PartyBox в Дананге. Идеально для пляжных вечеринок, вилл с бассейном и барбекю. Быстрая доставка. Пишите в Telegram.',
  keywords: ['аренда колонок дананг', 'bluetooth колонка дананг', 'аренда jbl дананг', 'колонки для вечеринки дананг', 'прокат звука дананг'],
}

export default function RussianLandingPage() {
  return <InternationalLandingWrapper content={landingPagesData.ru} />
}
