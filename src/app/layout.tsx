import { type Metadata } from 'next'
import Script from 'next/script';

import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

// export const metadata: Metadata = {
//   title: {
//     template: '%s | ĐiĐi Camping',
//     default: 'ĐiĐi Camping',
//   },
// }


export const metadata: Metadata = {
  title: {
    template: '%s | ĐiĐi Camping - Thuê lều cắm trại Đà Nẵng',
    default: 'ĐiĐi Camping - Thuê lều cắm trại Đà Nẵng, lều cắm trại Đà Nẵng giá rẻ',
  },
  description:
    'ĐiĐi Camping chuyên cho thuê lều cắm trại Đà Nẵng, lều du lịch, lều dã ngoại. Dịch vụ giao tận nơi, đầy đủ thiết bị, giá rẻ, hỗ trợ lắp đặt tận tình.',
  keywords: [
    'lều cắm trại Đà Nẵng',
    'thuê lều cắm trại Đà Nẵng',
    'thuê lều Đà Nẵng',
    'cho thuê lều trại Đà Nẵng',
    'dịch vụ cắm trại Đà Nẵng',
    'lều du lịch Đà Nẵng',
    'ĐiĐi Camping',
  ],
  openGraph: {
    title: 'ĐiĐi Camping - Thuê lều cắm trại Đà Nẵng, lều du lịch, dã ngoại',
    description:
      'Dịch vụ thuê lều cắm trại tại Đà Nẵng giá rẻ, giao tận nơi. Phù hợp du lịch, dã ngoại, teambuilding. Trang bị đầy đủ, hỗ trợ lắp đặt.',
    url: 'https://www.didicamping.com',
    siteName: 'ĐiĐi Camping',
    locale: 'vi_VN',
    type: 'website',
    images: [
      {
        url: 'https://www.didicamping.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Thuê lều cắm trại Đà Nẵng - ĐiĐi Camping',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ĐiĐi Camping - Thuê lều cắm trại Đà Nẵng, lều du lịch, dã ngoại',
    description:
      'Dịch vụ thuê lều uy tín tại Đà Nẵng, giao tận nơi, giá rẻ, hỗ trợ lắp đặt.',
    images: ['https://www.didicamping.com/og-image.jpg'],
  },
  metadataBase: new URL('https://www.didicamping.com'),
}


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RGJ5VKVX7J"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RGJ5VKVX7J');
          `}
        </Script>
      </head>
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
