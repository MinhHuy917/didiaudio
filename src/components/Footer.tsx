import Link from 'next/link'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { socialMediaProfiles, socialMediaProfilesV2 } from '@/components/SocialMedia'
import logo from '@/images/logo.png'
import Image from 'next/image'
import { Music, Phone, MapPin } from 'lucide-react'

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
      <ul role="list" className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <ul role="list" className="space-y-3">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-cyan-400 transition-colors flex items-center gap-2"
                  >
                    {linkIndex === 0 && sectionIndex === 0 && <Phone className="w-4 h-4" />}
                    {linkIndex === 0 && sectionIndex === 1 && <MapPin className="w-4 h-4" />}
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
    <Container as="footer" className="mt-12 w-full sm:mt-16 lg:mt-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <FadeIn>
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <Navigation />
        </div>
        <div className="mb-20 mt-24 flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-t border-white/10 pt-12">
          <Link href="/" aria-label="Home" className="block group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 shadow-md hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 group-hover:border-cyan-500/50">
              <Image 
                src={logo} 
                alt="ĐiĐi Audio Logo" 
                fill
                className="object-cover rounded-full p-0.5"
                sizes="48px"
              />
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <Music className="w-4 h-4 text-cyan-400" />
            <p className="text-sm text-gray-300">
              © ĐiĐi Audio {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
