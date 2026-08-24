import { type Metadata } from 'next'
import InternationalLanding from '@/components/InternationalLanding'
import { landingPagesData } from '@/data/landing-pages'

export const metadata: Metadata = {
  title: '岘港 JBL 蓝牙音箱租赁 | 海滩派对及别墅烧烤首选',
  description: '在岘港租赁正品 JBL PartyBox 音箱。极速送达，专为海滩派对、泳池别墅和烧烤设计。支持微信联系。',
  keywords: ['岘港音箱租赁', '岘港蓝牙音箱', '岘港 JBL', '岘港派对设备'],
}

export default function ChineseLandingPage() {
  return <InternationalLanding content={landingPagesData.zh} />
}
