'use client'

import clsx from 'clsx'
import { motion, MotionConfig, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { createContext, useEffect, useId, useRef, useState } from 'react'

import { Container, ContainerV2 } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { GridPattern } from '@/components/GridPattern'
import { Offices } from '@/components/Offices'
import { SocialMedia } from '@/components/SocialMedia'
import logo from '@/images/logo.png'
import Image from 'next/image'
import bg1 from '/src/images/bg1.png'
import bg4 from '/src/images/bg4.png'
import bg6 from '/src/images/bg6.png'
import bgAbout from '/src/images/bgAbout.png'


const RootLayoutContext = createContext<{
  logoHovered: boolean
  setLogoHovered: React.Dispatch<React.SetStateAction<boolean>>
} | null>(null)

function XIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z" />
      <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z" />
    </svg>
  )
}

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M2 6h20v2H2zM2 16h20v2H2z" />
    </svg>
  )
}


function Header({
  panelId,
  expanded,
  onToggle,
  toggleRef,
}: {
  panelId: string
  expanded: boolean
  onToggle: () => void
  toggleRef: React.RefObject<HTMLButtonElement>
}) {
  return (
    <Container>
      <div className="flex items-center justify-between py-4">
        <Link href="/" aria-label="Home" className="flex items-center gap-3">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-audio-light/30 backdrop-blur-sm border border-audio-electricBlue/30 shadow-md">
            <Image
              src={logo}
              alt="ĐiĐi Audio Logo"
              fill
              className="object-cover rounded-full p-1"
              sizes="48px"
            />
          </div>
          <div className="hidden sm:block">
            <p className="text-white font-bold text-base">ĐiĐi Audio</p>
            <p className="text-white text-xs">Loa kéo JBL • Đà Nẵng</p>
          </div>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="#products"
            className="hidden sm:inline-flex px-4 py-2 rounded-full bg-gradient-to-r from-audio-electricBlue to-audio-neonPurple text-white text-sm font-semibold hover:shadow-lg hover:shadow-audio-electricBlue/40 transition-all"
          >
            Thuê ngay
          </Link>
          <Link
            href="tel:0339197917"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-audio-neonOrange text-white text-sm font-semibold hover:bg-audio-neonOrange/90 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.81.37 1.6.73 2.33a2 2 0 0 1-.45 2.23l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.23-.45c.73.36 1.52.61 2.33.73A2 2 0 0 1 22 16.92z"/>
            </svg>
            0339197917
          </Link>
          <button
            ref={toggleRef}
            type="button"
            onClick={onToggle}
            aria-expanded={expanded ? 'true' : 'false'}
            aria-controls={panelId}
            className="sm:hidden inline-flex items-center justify-center rounded-full p-2 bg-audio-light/30 border border-audio-electricBlue/30 text-audio-electricBlue hover:bg-audio-light/50"
            aria-label="Toggle navigation"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </Container>
  )
}

function NavigationRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="even:mt-px sm:bg-audio-light/20">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2">{children}</div>
      </Container>
    </div>
  )
}

function NavigationRowV2({ children }: { children: React.ReactNode }) {
  return (
    <div className="even:mt-px rounded-lg">
      <ContainerV2 className='px-0 rounded-lg'>
        <div className="grid grid-cols-1 sm:grid-cols-1 rounded-lg">{children}</div>
      </ContainerV2>
    </div>
  )
}

function NavigationItem({
  href,
  children,
  target,
  className,
  style,
}: {
  href: string
  children: React.ReactNode
  target?: string
  className?: any
  style?: any
}) {
  return (
    <Link
      href={href}
      target={target}
      className={clsx(
        'font-[system-ui] inline-flex items-center gap-2 px-4 py-2 rounded-full',
        'bg-audio-light/30 backdrop-blur-sm border border-audio-electricBlue/20 text-white',
        'hover:border-audio-electricBlue/40 hover:text-audio-electricBlue transition-colors',
        className,
      )}
      style={style}
    >
      {children}
    </Link>
  )
}

function NavigationItemV2({
  href,
  children,
  target,
  className,
  style,
}: {
  href: string
  children: React.ReactNode
  target?: string
  className?: any
  style?: any
}) {
  return (
    <Link
      href={href}
      target={target}
      className={`font-[system-ui] group relative isolate -mx-6 bg-audio-light/30 backdrop-blur-sm px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-20 sm:pl-6 sm:odd:pr-16 rounded-lg sm:even:mt-0 sm:even:border-l sm:even:border-audio-electricBlue/20 sm:even:pl-16 text-white hover:text-audio-electricBlue transition-colors ${className}`}
      style={style}
    >
      {children}
      <span className='absolute inset-y-0 -z-10 w-screen bg-audio-light/50 opacity-0 group-hover:opacity-100 transition group-odd:right-0 group-even:left-0' />
    </Link>
  )
}

export function Navigation() {
  return (
    <nav className="mt-6">
      <Container>
        <ul className="flex flex-wrap gap-3">
          <li><NavigationItem href="#about">Về chúng tôi</NavigationItem></li>
          <li><NavigationItem href="#products">Sản phẩm</NavigationItem></li>
          <li><NavigationItem href="#usecases">Ứng dụng</NavigationItem></li>
          <li><NavigationItem href="#faq">Câu hỏi</NavigationItem></li>
          <li><NavigationItem href="tel:0339197917" className="bg-audio-neonOrange border-audio-neonOrange text-white hover:text-white">Gọi ngay</NavigationItem></li>
        </ul>
      </Container>
    </nav>
  )
}

export function NavigationV2() {
  return (
    <nav className="mt-2 space-y-2 font-display text-white text-xl lg:text-4xl font-black tracking-tight">

      <NavigationRowV2>
        <NavigationItemV2
          href="/about-didiaudio"
          className="relative sm:bg-none md:bg-none"
        >
          <div
            className="absolute inset-0 "
            style={{
              backgroundImage: `url(${bgAbout.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '8px',
              zIndex: -1,
            }}
          />
          <span className="relative z-10 text-white">ĐiĐi Audio Story</span>
        </NavigationItemV2>
      </NavigationRowV2>

      <NavigationRowV2>

        <NavigationItemV2
          href="https://www.facebook.com/groups/695950148016396"
          target='_blank'
          className="relative sm:bg-none md:bg-none"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${bg6.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '8px',
              zIndex: -1,
            }}
          />
          <span className="relative z-10 text-white">  Cộng đồng âm thanh Đà Nẵng</span>
        </NavigationItemV2>

      </NavigationRowV2>


      <NavigationRowV2>
        <NavigationItemV2
          href="/dich-vu-cho-thue-loa-keo-keo-da-nang"
          className="relative sm:bg-none md:bg-none"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${bg1.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '8px',
              zIndex: -1,
            }}
          />
          <span className="relative z-10 text-white">Dịch vụ cho thuê loa kéo Đà Nẵng</span>
        </NavigationItemV2>


      </NavigationRowV2>



      <NavigationRowV2>
        <NavigationItemV2
          href="/thue-loa-keo-keo-da-nang"
          className="relative sm:bg-none md:bg-none"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${bg4.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '8px',
              zIndex: -1,
            }}
          />
          <span className="relative z-10 text-white">Thuê loa kéo Đà Nẵng</span>
        </NavigationItemV2>
      </NavigationRowV2>







    </nav>
  )
}


function RootLayoutInner({ children }: { children: React.ReactNode }) {
  let panelId = useId()
  let [expanded, setExpanded] = useState(false)
  let openRef = useRef<React.ElementRef<'button'>>(null)
  let closeRef = useRef<React.ElementRef<'button'>>(null)
  let navRef = useRef<React.ElementRef<'div'>>(null)
  let shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (
        event.target instanceof HTMLElement &&
        event.target.closest('a')?.href === window.location.href
      ) {
        setExpanded(false)
      }
    }

    window.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <>
        <div
          className="absolute left-0 right-0 top-2 z-40"
          aria-hidden={expanded ? 'true' : undefined}
          // @ts-ignore (https://github.com/facebook/react/issues/17157)
          inert={expanded ? '' : undefined}
        >
          <Header
            panelId={panelId}
            icon={MenuIcon}
            toggleRef={openRef}
            expanded={expanded}
            onToggle={() => {
              setExpanded((expanded) => !expanded)
              window.setTimeout(() =>
                closeRef.current?.focus({ preventScroll: true }),
              )
            }}
          />
        </div>

        <motion.div
          layout
          id={panelId}
          style={{ height: expanded ? 'auto' : '0.5rem' }}
          className="relative z-50 overflow-hidden bg-audio-darker"
          aria-hidden={expanded ? undefined : 'true'}
          // @ts-ignore (https://github.com/facebook/react/issues/17157)
          inert={expanded ? undefined : ''}
        >
          <motion.div layout className="bg-audio-darker">
            <div ref={navRef} className={clsx(
              'py-10',
              expanded ? 'bg-audio-light/50' : 'bg-audio-darker',
            )}>
              <Header
                invert
                panelId={panelId}
                icon={XIcon}
                toggleRef={closeRef}
                expanded={expanded}
                onToggle={() => {
                  setExpanded((expanded) => !expanded)
                  window.setTimeout(() =>
                    openRef.current?.focus({ preventScroll: true }),
                  )
                }}
              />
            </div>
            <Navigation />
            <div className="relative bg-audio-light/30 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-audio-electricBlue/20">
            </div>
          </motion.div>
        </motion.div>
      </>

      <motion.div
        layout
        className="relative flex flex-auto overflow-hidden bg-audio-darker"
      >
        <motion.div
          layout
          className="relative isolate flex w-full flex-col"
        >
          <main className="w-full flex-auto">{children}</main>

          <Footer />
        </motion.div>
      </motion.div>
    </MotionConfig>
  )
}

export function RootLayout({ children }: { children: React.ReactNode }) {
  let pathname = usePathname()
  let [logoHovered, setLogoHovered] = useState(false)

  return (
    <RootLayoutContext.Provider value={{ logoHovered, setLogoHovered }}>
      <RootLayoutInner key={pathname}>{children}</RootLayoutInner>
    </RootLayoutContext.Provider>
  )
}
