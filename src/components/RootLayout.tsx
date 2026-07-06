'use client'

import clsx from 'clsx'
import { motion, MotionConfig, useReducedMotion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { createContext, useEffect, useId, useRef, useState } from 'react'

import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import logo from '@/images/logo.png'
import Image from 'next/image'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'

const RootLayoutContext = createContext<{
  logoHovered: boolean
  setLogoHovered: React.Dispatch<React.SetStateAction<boolean>>
} | null>(null)

// --- Components nhỏ hỗ trợ UI ---

function NavLink({ href, children, external = false }: { href: string, children: React.ReactNode, external?: boolean }) {
  return (
    <Link
      href={href}
      target={external ? '_blank' : undefined}
      className="relative group px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
    >
      <span>{children}</span>
      <span className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/70 to-cyan-500/0 opacity-0 transition-opacity group-hover:opacity-100" />
    </Link>
  )
}

function ContactButton({ className }: { className?: string }) {
  return (
    <Link
      href="tel:0339197917"
      className={clsx(
        "group relative inline-flex items-center justify-center rounded-full bg-cyan-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] active:scale-95",
        className
      )}
    >
      <span className="relative flex items-center gap-2">
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" />
        </svg>
        0339 197 917
      </span>
    </Link>
  )
}

// --- Header Chính ---

function Header({
  expanded,
  onToggle,
  isScrolled
}: {
  expanded: boolean
  onToggle: () => void
  isScrolled: boolean
}) {
  return (
    <header 
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled ? "py-2" : "py-4 sm:py-6"
      )}
    >
      <Container>
        <div 
          className={clsx(
            "relative flex items-center justify-between gap-4 rounded-2xl border transition-all duration-300 px-4 py-2",
            isScrolled 
              ? "border-white/10 bg-black/60 backdrop-blur-xl shadow-2xl" 
              : "border-transparent bg-transparent"
          )}
        >
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-transform group-hover:scale-105 sm:h-11 sm:w-11">
              <Image
                src={logo}
                alt="ĐiĐi Audio"
                fill
                className="object-cover p-1.5"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-white">ĐiĐi Audio</p>
              <p className="text-xs text-gray-300">Thuê loa kéo Đà Nẵng</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-2 lg:flex">
            <nav className="flex items-center gap-1 mr-4">
              <NavLink href="/#products">Bảng giá</NavLink>
              <NavLink href="/#usecases">Dịch vụ</NavLink>
              <NavLink href="/about-didiaudio">Về chúng tôi</NavLink>
              <NavLink href="/#blog">Blog</NavLink>
            </nav>
            <div className="h-6 w-px bg-white/10 mx-2" />
            <LanguageSwitcher />
            <ContactButton className="ml-2" />
          </div>

          {/* Mobile Right Section */}
          <div className="flex items-center gap-3 lg:hidden">
            <LanguageSwitcher />
            <button
              onClick={onToggle}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
              aria-label="Toggle Menu"
            >
              <div className="relative h-5 w-5">
                <span className={clsx(
                  "absolute block h-0.5 w-5 bg-current transition-all duration-300",
                  expanded ? "top-2 rotate-45" : "top-1"
                )} />
                <span className={clsx(
                  "absolute block h-0.5 w-5 bg-current transition-all duration-300",
                  expanded ? "top-2 -rotate-45" : "top-3"
                )} />
              </div>
            </button>
          </div>
        </div>
      </Container>
    </header>
  )
}

// --- Mobile Menu Overlay ---

function MobileMenu({ expanded, onClose }: { expanded: boolean, onClose: () => void }) {
  return (
    <AnimatePresence>
      {expanded && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 lg:hidden"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-2xl" onClick={onClose} />
          
          <nav className="relative flex flex-col justify-center h-full px-6 space-y-1">
  {[
    { label: 'Trang chủ', href: '/' },
    { label: 'Bảng giá thuê', href: '/#products' },
    { label: 'Dịch vụ loa kéo', href: '/dich-vu-cho-thue-loa-keo-keo-da-nang' },
    { label: 'Cộng đồng âm thanh', href: 'https://facebook.com/...' },
    { label: 'Về ĐiĐi Audio', href: '/about-didiaudio' },
  ].map((item, idx) => (
    <motion.div
      key={item.href}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: idx * 0.05 }}
    >
      <Link 
        href={item.href} 
        onClick={onClose}
        // Thêm padding, bo góc nhẹ và hiệu ứng khi nhấn (active:scale)
        className="block py-4 px-4 text-2xl font-bold text-white/90 hover:text-cyan-400 active:bg-white/5 active:scale-[0.98] rounded-2xl transition-all"
      >
        {item.label}
      </Link>
    </motion.div>
  ))}
  
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    transition={{ delay: 0.4 }}
    className="pt-8 mt-4 border-t border-white/10 px-4"
  >
    <ContactButton className="w-full py-4 text-lg font-bold rounded-xl bg-cyan-500 text-white shadow-lg shadow-cyan-500/20" />
  </motion.div>
</nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function RootLayoutInner({ children }: { children: React.ReactNode }) {
  const [expanded, setExpanded] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  // Xử lý scroll để thay đổi header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Đóng menu khi đổi route
  const pathname = usePathname()
  useEffect(() => {
    setExpanded(false)
  }, [pathname])

  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : { type: 'spring', bounce: 0, duration: 0.4 }}>
      <div className="relative flex min-h-full flex-col bg-audio-darker font-sans antialiased selection:bg-cyan-500/30">
        
        <Header 
          expanded={expanded} 
          onToggle={() => setExpanded(!expanded)} 
          isScrolled={isScrolled} 
        />

        <MobileMenu 
          expanded={expanded} 
          onClose={() => setExpanded(false)} 
        />

        <main className="relative flex-auto pt-24 sm:pt-32">
          {children}
        </main>

        <Footer />
      </div>
    </MotionConfig>
  )
}

export function RootLayout({ children }: { children: React.ReactNode }) {
  const [logoHovered, setLogoHovered] = useState(false)

  return (
    <RootLayoutContext.Provider value={{ logoHovered, setLogoHovered }}>
      <RootLayoutInner>{children}</RootLayoutInner>
    </RootLayoutContext.Provider>
  )
}