'use client'

import { useEffect, useRef } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  ChevronRight,
  CircleHelp,
  Home,
  Info,
  Phone,
  ShieldCheck,
  Tag,
  X,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/images/logo.png'

const links = [
  { label: 'Trang chủ', href: '/', Icon: Home },
  { label: 'Bảng giá thuê', href: '/#products', Icon: Tag },
  { label: 'Chính sách', href: '/#chinh-sach', Icon: ShieldCheck },
  { label: 'Về ĐiĐi Audio', href: '/about-didiaudio', Icon: Info },
  { label: 'Câu hỏi thường gặp', href: '/#faq', Icon: CircleHelp },
]

export function MobileMenu({
  expanded,
  onClose,
}: {
  expanded: boolean
  onClose: () => void
}) {
  const dialog = useRef<HTMLDialogElement>(null)
  const closeButton = useRef<HTMLButtonElement>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (!expanded) return
    const node = dialog.current
    node?.showModal()
    closeButton.current?.focus({ preventScroll: true })
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = overflow
    }
  }, [expanded])

  useEffect(() => {
    if (!expanded) return
    const desktop = window.matchMedia('(min-width: 1024px)')
    const resize = () => {
      if (desktop.matches) onClose()
    }
    desktop.addEventListener('change', resize)
    return () => desktop.removeEventListener('change', resize)
  }, [expanded, onClose])

  return (
    <dialog
      ref={dialog}
      id="mobile-navigation"
      aria-labelledby="mobile-menu-title"
      aria-modal="true"
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none border-0 bg-transparent p-0 text-white backdrop:bg-transparent"
    >
      <AnimatePresence onExitComplete={() => dialog.current?.close()}>
        {expanded && (
          <motion.div
            key="menu"
            className="fixed inset-0"
            initial="closed"
            animate="open"
            exit="closed"
          >
            <motion.button
              type="button"
              tabIndex={-1}
              aria-label="Đóng menu bằng vùng bên ngoài"
              onClick={onClose}
              className="absolute inset-0 h-full w-full cursor-default bg-black/50 backdrop-blur-sm"
              variants={{ closed: { opacity: 0 }, open: { opacity: 1 } }}
              transition={{ duration: reducedMotion ? 0 : 0.2 }}
            />
            <motion.div
              className="absolute inset-y-0 right-0 flex w-[80vw] max-w-sm flex-col overflow-y-auto rounded-l-3xl border-l border-white/10 bg-[#0b1922] p-5 shadow-2xl sm:p-6"
              variants={{ closed: { x: '100%' }, open: { x: 0 } }}
              transition={{
                duration: reducedMotion ? 0 : 0.28,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-5">
                <div className="flex items-center gap-2.5">
                  <Image
                    src={logo}
                    alt=""
                    width={36}
                    height={36}
                    className="rounded-xl"
                  />
                  <h2
                    id="mobile-menu-title"
                    className="text-base font-semibold tracking-tight"
                  >
                    ĐiĐi Audio
                  </h2>
                </div>
                <button
                  ref={closeButton}
                  type="button"
                  aria-label="Đóng menu"
                  onClick={onClose}
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-gray-300 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"
                >
                  <X aria-hidden="true" className="h-5 w-5" />
                </button>
              </div>
              <nav aria-label="Menu chính" className="space-y-1 py-5">
                {links.map(({ label, href, Icon }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={onClose}
                    className="group flex min-h-12 items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-gray-200 transition-colors hover:bg-cyan-300/10 hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300 sm:text-base"
                  >
                    <Icon
                      aria-hidden="true"
                      className="h-5 w-5 shrink-0 text-cyan-300/80"
                    />
                    <span className="flex-1">{label}</span>
                    <ChevronRight
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-gray-500"
                    />
                  </Link>
                ))}
              </nav>
              <div className="mt-auto border-t border-white/10 pb-[env(safe-area-inset-bottom)] pt-5">
                <p className="mb-3 text-xs text-gray-400">
                  Cần tư vấn thuê loa?
                </p>
                <a
                  href="tel:0339197917"
                  className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-cyan-300 px-3 py-3 text-sm font-semibold text-gray-950 hover:bg-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                >
                  <Phone aria-hidden="true" className="h-4 w-4" />
                  0339 197 917
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </dialog>
  )
}
