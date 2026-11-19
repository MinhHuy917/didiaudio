import Link from 'next/link'
import { Container } from '@/components/Container'
import {
  socialMediaProfiles,
  socialMediaProfilesV2,
} from '@/components/SocialMedia'
import logo from '@/images/logo.png'
import Image from 'next/image'
import { Music, Phone, MapPin } from 'lucide-react'

const navigation = [
  {
    title: 'Liên Hệ',
    links: [
      { title: 'Phone: 0339197917', href: 'tel:0339197917' },
      {
        title: 'Video JBL PartyBox Stage 320',
        href: '/video-jbl-partybox-320',
      },
      { title: 'Messenger', href: '//m.me/thueloakeodanang.didiaudio' },
    ],
  },
  {
    title: 'Thông Tin Cửa Hàng',
    links: [
      {
        title: '41 Tống Duy Tân, Đà Nẵng',
        href: 'https://www.google.com/maps/search/?api=1&query=41+T%E1%BB%91ng+Duy+T%C3%A2n%2C+%C4%90%C3%A0+N%E1%BA%B5ng',
      },
    ],
  },
  {
    title: 'Về chúng tôi',
    links: socialMediaProfiles,
  },
  {
    title: 'Về chúng tôi',
    links: socialMediaProfilesV2,
  },
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <ul role="list" className="space-y-3">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-cyan-400"
                  >
                    {linkIndex === 0 && sectionIndex === 0 && (
                      <Phone className="h-4 w-4" />
                    )}
                    {linkIndex === 0 && sectionIndex === 1 && (
                      <MapPin className="h-4 w-4" />
                    )}
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#050b12] pt-12 text-white sm:pt-16">
      <Container>
        <div>
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            Ghé ĐiĐi Audio
          </h2>
          <div className="mb-8 mt-6 h-[240px] w-full overflow-hidden rounded-2xl border border-white/10 shadow-lg sm:h-[320px]">
            <iframe
              src="https://www.google.com/maps?q=41+T%E1%BB%91ng+Duy+T%C3%A2n%2C+%C4%90%C3%A0+N%E1%BA%B5ng&amp;output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bản đồ ĐiĐi Audio"
            ></iframe>
          </div>
          <div>

            <Navigation />
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-t border-white/10 pb-32 pt-8 sm:pb-16">
            <Link href="/" aria-label="Home" className="group block">
              <Image
                src={logo}
                alt="ĐiĐi Audio"
                width={60}
                height={60}
                className="w-auto object-cover "
                priority
              />
            </Link>
            <div className="mt-4 flex flex-col items-start gap-2 sm:mt-0 sm:items-end">
              <div className="flex items-center gap-2">
                <Music className="h-4 w-4 text-cyan-400" />
                <p className="text-sm text-gray-300">
                  © ĐiĐi Audio {new Date().getFullYear()}
                </p>
              </div>
              <p className="mt-1 text-xs text-gray-500 sm:text-right sm:text-sm">
                Website được thiết kế & phát triển bởi{' '}
                <a
                  href="https://huyseolocal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 transition-colors hover:text-cyan-400"
                >
                  huyseolocal.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
