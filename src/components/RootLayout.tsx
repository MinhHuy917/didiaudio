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
  icon: Icon,
  expanded,
  onToggle,
  toggleRef,
  invert = false,
}: {
  panelId: string
  icon: React.ComponentType<{ className?: string }>
  expanded: boolean
  onToggle: () => void
  toggleRef: React.RefObject<HTMLButtonElement>
  invert?: boolean
}) {
  return (
    <Container>
      <div className="flex items-center justify-between z-100">
        <Link href="/" aria-label="Home">
          <Image src={logo} alt="Logo" width={80} height={80} className="rounded-full object-cover w-[48px] lg:w-[80px] mt-3" />
        </Link>
      <div className="flex items-center gap-x-8 mt-1">
  <button 
    ref={toggleRef} 
    type="button" 
    onClick={onToggle} 
    aria-expanded={expanded ? 'true' : 'false'} 
    aria-controls={panelId} 
    className={clsx( 
      'group -m-2.5 rounded-full p-2 transition mr-[1px]', 
      'bg-music-light/30 backdrop-blur-sm border border-music-purple/20',
      invert ? 'hover:bg-music-light/50 hover:border-music-purple/40' : 'hover:bg-music-light/50 hover:border-music-purple/40', 
    )} 
    aria-label="Toggle navigation"
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={clsx(
        'h-6 w-6', 
        'text-music-purple', 
      )}
    >
      <circle cx="5" cy="5" r="1.5" />
      <circle cx="12" cy="5" r="1.5" />
      <circle cx="19" cy="5" r="1.5" />
      <circle cx="5" cy="12" r="1.5" />
      <circle cx="12" cy="12" r="1.5" />
      <circle cx="19" cy="12" r="1.5" />
      <circle cx="5" cy="19" r="1.5" />
      <circle cx="12" cy="19" r="1.5" />
      <circle cx="19" cy="19" r="1.5" />
    </svg>
  </button>
</div>
      </div>
    </Container>
  )
}

function NavigationRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="even:mt-px sm:bg-music-light/20">
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
      className={`font-[system-ui] group relative isolate -mx-6 bg-music-light/30 backdrop-blur-sm px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-music-purple/20 sm:even:pl-16 text-white hover:text-music-purple transition-colors ${className}`}
      style={style}
    >
      {children}
      <span className='absolute inset-y-0 -z-10 w-screen bg-music-light/50 opacity-0 group-hover:opacity-100 transition group-odd:right-0 group-even:left-0' />
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
      className={`font-[system-ui] group relative isolate -mx-6 bg-[#EFE9DA] px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-20 sm:pl-6 sm:odd:pr-16 rounded-lg sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16 text-[#1F3329] ${className}`}
      style={style}
    >
      {children}
      <span className='absolute inset-y-0 -z-10 w-screen bg-[#EFE9DA] opacity-0 transition group-odd:right-0 group-even:left-0' />
    </Link>
  )
}

export function Navigation() {
  return (
    <nav className="mt-px font-display text-3xl lg:text-5xl font-medium tracking-tight">
      <NavigationRow>
        <NavigationItem href="/about-didiaudio">
          <span className="bg-gradient-to-r from-music-purple to-music-pink bg-clip-text text-transparent">
            ĐiĐi Audio Story
          </span>
        </NavigationItem>
        <NavigationItem target='_blank' href="https://www.facebook.com/groups/695950148016396">
          <span className="bg-gradient-to-r from-music-pink to-music-cyan bg-clip-text text-transparent">
            Cộng đồng âm thanh
          </span>
        </NavigationItem>
      </NavigationRow>
      <NavigationRow>
        <NavigationItem href="/dich-vu-cho-thue-loa-keo-keo-da-nang">
          <span className="bg-gradient-to-r from-music-cyan to-music-blue bg-clip-text text-transparent">
            Dịch vụ cho thuê loa kéo
          </span>
        </NavigationItem>
        <NavigationItem href="/thue-loa-keo-keo-da-nang">
          <span className="bg-gradient-to-r from-music-blue to-music-purple bg-clip-text text-transparent">
            Thuê loa kéo Đà Nẵng
          </span>
        </NavigationItem>
      </NavigationRow>
    </nav>
  )
}

export function NavigationV2() {
  return (
    <nav className="mt-2 space-y-2 font-display text-gray-100 sm:text-[#DD6B20] text-xl lg:text-4xl font-semibold tracking-tight">

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
          className="relative z-50 overflow-hidden bg-music-darker"
          aria-hidden={expanded ? undefined : 'true'}
          // @ts-ignore (https://github.com/facebook/react/issues/17157)
          inert={expanded ? undefined : ''}
        >
          <motion.div layout className="bg-music-darker">
            <div ref={navRef} className={clsx(
              'py-10',
              expanded ? 'bg-music-light/50' : 'bg-music-darker',
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
            <div className="relative bg-music-light/30 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-music-purple/20">
            </div>
          </motion.div>
        </motion.div>
      </>

      <motion.div
        layout
        className="relative flex flex-auto overflow-hidden bg-music-darker"
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
