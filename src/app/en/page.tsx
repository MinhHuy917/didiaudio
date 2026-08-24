import { type Metadata } from 'next'
import InternationalLanding from '@/components/InternationalLanding'
import { landingPagesData } from '@/data/landing-pages'

export const metadata: Metadata = {
  title: 'Premium JBL Speaker Rental in Da Nang | Delivery in 30 mins',
  description: 'Rent original JBL PartyBox speakers in Da Nang. Perfect for beach parties, pool villas, and BBQs. Fast delivery and easy setup. Contact via WhatsApp.',
  keywords: ['speaker rental da nang', 'jbl rental da nang', 'bluetooth speaker da nang', 'party speaker da nang', 'rent speaker da nang'],
}

export default function EnglishLandingPage() {
  return <InternationalLanding content={landingPagesData.en} />
}
