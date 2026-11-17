import { createPageMetadata } from '@/lib/seo'
import { landingPagesData } from '@/data/landing-pages'
import InternationalLandingWrapper from '@/components/InternationalLandingWrapper'

export const metadata = createPageMetadata({
  title: 'JBL Speaker Rental in Da Nang | ĐiĐi Audio',
  description: 'Explore JBL PartyBox speaker rental in Da Nang. View the current speaker, daily rental price and contact ĐiĐi Audio to confirm rental details.',
  path: '/speaker-rental-da-nang',
  locale: 'en_US',
})

export default function EnglishLandingPage() {
  return <InternationalLandingWrapper language="en" content={landingPagesData.en} />
}
