'use client'

import Link from 'next/link'
import { MessageCircle, Phone } from 'lucide-react'

export default function MenuContact() {
  return (
    <>
      <div
        className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#cbe7ff] bg-white/95 px-3 py-2 backdrop-blur md:hidden"
        style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 8px)' }}
      >
        <div className="grid grid-cols-2 gap-2">
          <Link href="tel:0339197917" className="flex items-center justify-center gap-2 rounded-xl bg-[#16a34a] px-3 py-3 text-sm font-bold text-white">
            <Phone className="h-4 w-4" /> Gọi ngay
          </Link>
          <Link
            href="https://zalo.me/0339197917"
            target="_blank"
            className="flex items-center justify-center gap-2 rounded-xl bg-[#0f7ec7] px-3 py-3 text-sm font-bold text-white"
          >
            <MessageCircle className="h-4 w-4" /> Zalo nhanh
          </Link>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-40 hidden flex-col gap-2 md:flex">
        <Link href="tel:0339197917" className="rounded-full bg-[#16a34a] px-5 py-3 text-sm font-bold text-white shadow-lg">
          Gọi 0339 197 917
        </Link>
        <Link href="https://zalo.me/0339197917" target="_blank" className="rounded-full bg-[#0f7ec7] px-5 py-3 text-sm font-bold text-white shadow-lg">
          Chat Zalo
        </Link>
      </div>
    </>
  )
}
