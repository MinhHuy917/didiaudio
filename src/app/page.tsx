import { type Metadata } from 'next'
import Script from 'next/script'

import PremiumLanding from '@/components/PremiumLanding'

export const metadata: Metadata = {
  title: 'Cho Thuê Loa Kéo Đà Nẵng | Loa Kéo JBL Chính Hãng Giá Rẻ - ĐiĐi Audio',
  description:
    'Cho thuê loa kéo JBL chính hãng tại Đà Nẵng. Giao nhanh 30-60 phút, setup miễn phí, hỗ trợ 24/7. Phù hợp du lịch, cắm trại, sinh nhật, team building. Giá từ 50k/ngày.',
  keywords: [
    'cho thuê loa kéo đà nẵng',
    'thuê loa kéo đà nẵng',
    'thuê loa kẹo kéo đà nẵng giá rẻ',
    'cho thuê loa kéo JBL đà nẵng',
    'thuê loa karaoke đà nẵng',
    'cho thuê loa JBL chính hãng',
    'dịch vụ cho thuê loa kéo đà nẵng',
    'loa kéo JBL đà nẵng',
    'thuê loa party đà nẵng',
    'cho thuê loa bluetooth đà nẵng',
  ],
  openGraph: {
    title: 'Cho Thuê Loa Kéo Đà Nẵng | Loa Kéo JBL Chính Hãng Giá Rẻ',
    description:
      'Cho thuê loa kéo JBL chính hãng tại Đà Nẵng. Giao nhanh 30-60 phút, setup miễn phí, hỗ trợ 24/7. Phù hợp du lịch, cắm trại, sinh nhật, team building.',
    url: 'https://www.didi-audio.com',
    siteName: 'ĐiĐi Audio',
    locale: 'vi_VN',
    type: 'website',
    images: [
      {
        url: 'https://www.didi-audio.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cho thuê loa kéo Đà Nẵng - ĐiĐi Audio',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.didi-audio.com',
  },
}

export default async function Home() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'ĐiDi Audio - Thuê loa JBL Đà Nẵng',
    image: 'https://www.didi-audio.com/og-image.jpg',
    telephone: '+84-339-197-917',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Đà Nẵng',
      addressCountry: 'VN',
    },
    areaServed: 'Đà Nẵng',
    url: 'https://www.didi-audio.com',
  }

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <PremiumLanding />
    </>
  )
}
