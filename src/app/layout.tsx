import { type Metadata } from 'next'
import Script from 'next/script'
import { Inter } from 'next/font/google'

import { seoSite, organizationSchema, jsonLd } from '@/lib/seo'

import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    template: '%s | ĐiĐi Audio',
    default: 'ĐiĐi Audio | Dịch vụ thuê loa tại Đà Nẵng',
  },
  description:
    'ĐiĐi Audio cung cấp dịch vụ cho thuê loa tại Đà Nẵng. Xem thiết bị, giá theo ngày và liên hệ để xác nhận thông tin thuê.',
  metadataBase: new URL(seoSite.url),
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="vi"
      className={`dark h-full bg-audio-darker text-white antialiased ${inter.variable}`}
    >
      <head>
        {/* Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18429521617"
          strategy="lazyOnload"
        />

        <Script id="google-ads" strategy="lazyOnload">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'AW-18429521617');
  `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CJQJY8V1EV"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CJQJY8V1EV');
        `}
        </Script>

        <Script id="google-translate-init" strategy="lazyOnload">
          {`
          window.googleTranslateElementInit = function () {
            new window.google.translate.TranslateElement(
              {
                pageLanguage: 'vi',
                includedLanguages: 'en,ko,ru,zh-CN,zh-TW,th,hi,ja,ms,vi',
                autoDisplay: false,
              },
              'google_translate_element',
            );
          };
        `}
        </Script>
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="lazyOnload"
        />
        <script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(organizationSchema()) }}
        />
      </head>

      <body className="flex min-h-full flex-col bg-audio-darker">
        <div id="google_translate_element" className="hidden" />
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
