import { type Metadata } from 'next'
import Script from 'next/script';

import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

// export const metadata: Metadata = {
//   title: {
//     template: '%s | ĐiĐi Audio',
//     default: 'ĐiĐi Audio',
//   },
// }


export const metadata: Metadata = {
  title: {
    template: '%s | ĐiĐi Audio - Cho thuê loa kéo Đà Nẵng',
    default: 'ĐiĐi Audio - Cho thuê loa kéo Đà Nẵng, loa kéo giá rẻ, chất lượng',
  },
  description:
    'ĐiĐi Audio - Cho thuê loa kéo JBL chính hãng tại Đà Nẵng. Giao nhanh 30-60 phút, setup miễn phí, hỗ trợ 24/7. Phù hợp du lịch, cắm trại, sinh nhật, team building.',
  keywords: [
    'cho thuê loa kéo JBL Đà Nẵng',
    'thuê loa kéo JBL Đà Nẵng',
    'thuê loa karaoke Đà Nẵng',
    'cho thuê loa JBL chính hãng',
    'dịch vụ cho thuê loa kéo Đà Nẵng',
    'loa kéo JBL Đà Nẵng',
    'ĐiĐi Audio',
    'thuê loa party Đà Nẵng',
  ],
  openGraph: {
    title: 'ĐiĐi Audio - Cho thuê loa kéo JBL chính hãng Đà Nẵng | Giao nhanh 30-60 phút',
    description:
      'Cho thuê loa kéo JBL chính hãng tại Đà Nẵng. Giao nhanh 30-60 phút, setup miễn phí, hỗ trợ 24/7. Phù hợp du lịch, cắm trại, sinh nhật, team building.',
    url: 'https://www.didiaudio.com',
    siteName: 'ĐiĐi Audio',
    locale: 'vi_VN',
    type: 'website',
    images: [
      {
        url: 'https://www.didiaudio.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cho thuê loa kéo Đà Nẵng - ĐiĐi Audio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ĐiĐi Audio - Cho thuê loa kéo Đà Nẵng, loa karaoke, loa bluetooth',
    description:
      'Dịch vụ cho thuê loa kéo uy tín tại Đà Nẵng, giao tận nơi, giá rẻ, hỗ trợ lắp đặt.',
    images: ['https://www.didiaudio.com/og-image.jpg'],
  },
  metadataBase: new URL('https://www.didiaudio.com'),
}


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className="h-full dark bg-audio-darker text-white antialiased">
    <head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-CJQJY8V1EV"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CJQJY8V1EV');
        `}
      </Script>
    </head>
  
    <body className="flex min-h-full flex-col bg-audio-darker">
      <RootLayout>{children}</RootLayout>
    </body>
  </html>
  
  )
}

