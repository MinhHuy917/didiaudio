import { createPageMetadata } from '@/lib/seo'
import { landingPagesData } from '@/data/landing-pages'
import InternationalLandingWrapper from '@/components/InternationalLandingWrapper'

export const metadata = createPageMetadata({
  title: '岘港 JBL 音箱租赁 | ĐiĐi Audio',
  description: '了解岘港 JBL PartyBox 音箱租赁信息，查看现有型号、每日租金和联系方式，并向 ĐiĐi Audio 确认租赁日期及相关细节。',
  path: '/speaker-rental-da-nang-zh',
  locale: 'zh_CN',
})

export default function ChineseLandingPage() {
  return <InternationalLandingWrapper language="zh" content={landingPagesData.zh} />
}
