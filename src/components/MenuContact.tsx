'use client'

import useVisible from '@/hoooks/useVisible'
import Link from 'next/link'
import { Phone, MessageCircle, Copy, Check } from 'lucide-react'
import { useState } from 'react'

export default function MenuContact() {
  const isMenu = useVisible(false)
  const [copied, setCopied] = useState(false)

  const copyPhone = () => {
    navigator.clipboard.writeText('0909223917')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      {/* Sticky Action Buttons - Mobile First */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-audio-darker/95 backdrop-blur-md border-t border-audio-electricBlue/20">
        <div className="flex items-center justify-around px-4 py-3">
          <Link
            href="tel:0909223917"
            className="flex-1 flex flex-col items-center gap-1 px-4 py-2 bg-gradient-to-r from-audio-electricBlue to-audio-neonPurple rounded-xl text-white font-bold text-sm active:scale-95 transition-transform"
          >
            <Phone className="w-5 h-5" />
            <span>Gọi Ngay</span>
          </Link>
          <Link
            href="https://zalo.me/0909223917"
            target="_blank"
            className="flex-1 flex flex-col items-center gap-1 px-4 py-2 bg-audio-light/50 border border-audio-electricBlue/30 rounded-xl text-white font-semibold text-sm active:scale-95 transition-transform"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Zalo</span>
          </Link>
        </div>
      </div>

      {/* Desktop Floating Button */}
      <button
        onClick={isMenu.toggle}
        className={`
          ${isMenu.visible ? '' : 'animate-pulse'}
          hidden md:flex fixed bottom-8 right-6 z-50 inline-flex items-center gap-x-2 
          font-sans text-sm font-bold leading-6 text-white
        `}
      >
        <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-audio-electricBlue to-audio-neonPurple p-3 shadow-lg hover:shadow-audio-electricBlue/50 transition-all">
          {isMenu.visible ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 8L16 16M8 16l8-8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <Phone className="w-6 h-6" />
          )}
        </div>
      </button>

      {isMenu.visible && (
        <div className="fixed bottom-20 right-4 md:bottom-24 md:right-6 mt-5 z-50">
          <div className="flex-auto overflow-hidden rounded-3xl bg-audio-light/95 backdrop-blur-md text-sm leading-6 shadow-2xl border border-audio-electricBlue/30 ring-1 ring-audio-electricBlue/20">
            <div className="p-4 space-y-2">
              <Link href="tel:0909223917">
                <MenuItem
                  icon={<Phone className="w-5 h-5" />}
                  title="Gọi Ngay"
                  subtitle="0909223917"
                  className="bg-gradient-to-r from-audio-electricBlue to-audio-neonPurple text-white"
                />
              </Link>
              
              <button onClick={copyPhone}>
                <MenuItem
                  icon={copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                  title={copied ? "Đã copy!" : "Copy số điện thoại"}
                  subtitle="0909223917"
                  className="bg-audio-light/50 border border-audio-electricBlue/30 text-white hover:bg-audio-light transition-colors"
                />
              </button>

              <Link href="https://zalo.me/0909223917" target="_blank">
                <MenuItem
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="20"
                      height="20"
                      viewBox="0 0 48 48"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22 12c-5.523 0-10 4.477-10 10c0 6.813 7.666 9.295 9.333 19.851C21.44 32.531 21.448 33 22 33s0.56-0.469 0.667-1.149C24.334 21.295 32 18.813 32 12C32 6.477 27.523 2 22 2z"
                      />
                    </svg>
                  }
                  title="Tư Vấn Zalo"
                  subtitle="Nhắn tin ngay"
                  className="bg-audio-light/50 border border-audio-electricBlue/30 text-white hover:bg-audio-light transition-colors"
                />
              </Link>

              <Link href="https://m.me/ThueLoaKeoDaNang" target="_blank">
                <MenuItem
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="20"
                      height="20"
                      viewBox="0 0 48 48"
                      fill="currentColor"
                    >
                      <radialGradient
                        id="8O3wK6b5ASW2Wn6hRCB5xa_YFbzdUk7Q3F8_gr1"
                        cx="11.087"
                        cy="7.022"
                        r="47.612"
                        gradientTransform="matrix(1 0 0 -1 0 50)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#1292ff"></stop>
                        <stop offset=".079" stopColor="#2982ff"></stop>
                        <stop offset=".23" stopColor="#4e69ff"></stop>
                        <stop offset=".351" stopColor="#6559ff"></stop>
                        <stop offset=".428" stopColor="#6d53ff"></stop>
                        <stop offset=".754" stopColor="#df47aa"></stop>
                        <stop offset=".946" stopColor="#ff6257"></stop>
                      </radialGradient>
                      <path
                        fill="url(#8O3wK6b5ASW2Wn6hRCB5xa_YFbzdUk7Q3F8_gr1)"
                        d="M44,23.5C44,34.27,35.05,43,24,43c-1.651,0-3.25-0.194-4.784-0.564	c-0.465-0.112-0.951-0.069-1.379,0.145L13.46,44.77C12.33,45.335,11,44.513,11,43.249v-4.025c0-0.575-0.257-1.111-0.681-1.499	C6.425,34.165,4,29.11,4,23.5C4,12.73,12.95,4,24,4S44,12.73,44,23.5z"
                      ></path>
                    </svg>
                  }
                  title="Messenger"
                  subtitle="Chat ngay"
                  className="bg-audio-light/50 border border-audio-electricBlue/30 text-white hover:bg-audio-light transition-colors"
                />
              </Link>

              <Link
                href="https://www.google.com/maps/dir//86+Le+Thiet,+Lien+Chieu,+Da+Nang"
                target="_blank"
                className="group relative flex items-center gap-x-4 rounded-xl p-3 hover:bg-audio-light/30 transition-all border border-audio-electricBlue/10"
              >
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-audio-electricBlue/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    viewBox="0 0 48 48"
                    fill="currentColor"
                  >
                    <path
                      fill="#1c9957"
                      d="M42,39V9c0-1.657-1.343-3-3-3H9C7.343,6,6,7.343,6,9v30c0,1.657,1.343,3,3,3h30C40.657,42,42,40.657,42,39z"
                    ></path>
                    <path
                      fill="#3e7bf1"
                      d="M9,42h30c1.657,0-15-16-15-16S7.343,42,9,42z"
                    ></path>
                    <path
                      fill="#ffd73d"
                      d="M36,2c-5.523,0-10,4.477-10,10c0,6.813,7.666,9.295,9.333,19.851C35.44,32.531,35.448,33,36,33s0.56-0.469,0.667-1.149C38.334,21.295,46,18.813,46,12C46,6.477,41.523,2,36,2z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <span className="font-sans font-bold text-white text-sm">Địa điểm cửa hàng</span>
                  <p className="text-xs text-audio-textMuted">86 Lê Thiệt, Liên Chiểu</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function MenuItem({ icon, title, subtitle, className }: any) {
  return (
    <div className={`group relative flex cursor-pointer items-center gap-x-4 rounded-xl p-3 ${className}`}>
      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <span className="font-[system-ui] font-bold text-sm block">{title}</span>
        {subtitle && <span className="font-[system-ui] text-xs opacity-80 block">{subtitle}</span>}
      </div>
    </div>
  )
}
