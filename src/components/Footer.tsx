import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { socialMediaProfiles, socialMediaProfilesV2 } from '@/components/SocialMedia'
import logo from '@/images/logo.png'
import Image from 'next/image'

const navigation = [
  {
    title: "Liên Hệ",
    links: [
      { title: "Phone: 0339197917", href: "tel:0339197917" },
      { title: "Zalo: 0339197917", href: "https://zalo.me/0339197917" },
      { title: "Messenger", href: "//m.me/ThueLoaKeoDaNang" },
    ],
  },
  {
    title: "Thông Tin Cửa Hàng",
    links: [
      { title: "86 Lê Thiệt, Quận Liên Chiểu, TP. Đà Nẵng", href: "https://maps.app.goo.gl/xtErkxmAs9pYEY1B9" },
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
      <ul role="list" className="grid grid-cols-2 lg:grid-cols-4 gap-8 ">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="!font-[system-ui] font-display text-sm font-semibold tracking-wider text-white">
              {/* {section.title} */}
            </div>
            <ul role="list" className="mt-4 text-sm text-white">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href}
                    className="!font-[system-ui] transition hover:text-audio-electricBlue"
                  >
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

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

export function Footer() {
  return (
    <Container as="footer" className="mt-12 w-full sm:mt-16 lg:mt-20 bg-audio-darker">
      <FadeIn>
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <Navigation />
        </div>
        <div className="mb-20 mt-24 flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-t border-audio-electricBlue/20 pt-12">
          <Link href="/" aria-label="Home" className="block">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-audio-light/20 backdrop-blur-sm border border-audio-electricBlue/20 shadow-md hover:shadow-audio-electricBlue/50 transition-all duration-300 hover:scale-105">
              <Image 
                src={logo} 
                alt="ĐiĐi Audio Logo" 
                fill
                className="object-cover rounded-full p-0.5"
                sizes="48px"
              />
            </div>
          </Link>
          <p className="text-sm text-white">
            © ĐiĐi Audio {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
