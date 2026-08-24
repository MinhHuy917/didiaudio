import { type Metadata } from 'next'
import { landingPagesData } from '@/data/landing-pages'
import InternationalLandingWrapper from '@/components/InternationalLandingWrapper'

export const metadata: Metadata = {
  title: '岘港JBL音响租赁 | 高端蓝牙音箱 | 快速配送',
  description: '在岘港租赁正品JBL PartyBox音箱。非常适合海滩派对、泳池别墅和烧烤。快速配送，轻松设置。通过WeChat联系。',
  keywords: ['岘港音响租赁', '岘港蓝牙音箱', '岘港jbl租赁', '岘港派对音响', '岘港租音响'],
}

export default function ChineseLandingPage() {
  return <InternationalLandingWrapper content={landingPagesData.zh} />
}
