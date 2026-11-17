import { createPageMetadata } from '@/lib/seo'
import { landingPagesData } from '@/data/landing-pages'
import InternationalLandingWrapper from '@/components/InternationalLandingWrapper'

export const metadata = createPageMetadata({
  title: 'Аренда колонок JBL в Дананге | ĐiĐi Audio',
  description: 'Информация об аренде колонок JBL PartyBox в Дананге: модель, стоимость аренды за день и контакты ĐiĐi Audio для уточнения условий и дат аренды.',
  path: '/speaker-rental-da-nang-ru',
  locale: 'ru_RU',
})

export default function RussianLandingPage() {
  return <InternationalLandingWrapper language="ru" content={landingPagesData.ru} />
}
