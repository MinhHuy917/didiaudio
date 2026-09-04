'use client'

import useVisible from '@/hoooks/useVisible'
import Link from 'next/link'
import { Phone, Copy, Check, MoreHorizontal, MapPin } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import iconMaps from '/src/images/contact/IconGGMaps.jpg'
import iconZalo from '/src/images/contact/IconZalo.jpg'


export default function MenuContact() {
  const isMenu = useVisible(false)
  const [copied, setCopied] = useState(false)

  const copyPhone = () => {
    navigator.clipboard.writeText('0339197917')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const icons = {
    zalo: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        width="24"
        height="24"
        className="text-white"
      >
        <path d="M12.49 10.2722v-.4496h1.3467v6.3218h-.7704a.576.576 0 01-.5763-.5729l-.0006.0005a3.273 3.273 0 01-1.9372.6321c-1.8138 0-3.2844-1.4697-3.2844-3.2823 0-1.8125 1.4706-3.2822 3.2844-3.2822a3.273 3.273 0 011.9372.6321l.0006.0005zM6.9188 7.7896v.205c0 .3823-.051.6944-.2995 1.0605l-.03.0343c-.0542.0615-.1815.206-.2421.2843L2.024 14.8h4.8948v.7682a.5764.5764 0 01-.5767.5761H0v-.3622c0-.4436.1102-.6414.2495-.8476L4.8582 9.23H.1922V7.7896h6.7266zm8.5513 8.3548a.4805.4805 0 01-.4803-.4798v-7.875h1.4416v8.3548H15.47zM20.6934 9.6C22.52 9.6 24 11.0807 24 12.9044c0 1.8252-1.4801 3.306-3.3066 3.306-1.8264 0-3.3066-1.4808-3.3066-3.306 0-1.8237 1.4802-3.3044 3.3066-3.3044zm-10.1412 5.253c1.0675 0 1.9324-.8645 1.9324-1.9312 0-1.065-.865-1.9295-1.9324-1.9295s-1.9324.8644-1.9324 1.9295c0 1.0667.865 1.9312 1.9324 1.9312zm10.1412-.0033c1.0737 0 1.945-.8707 1.945-1.9453 0-1.073-.8713-1.9436-1.945-1.9436-1.0753 0-1.945.8706-1.945 1.9436 0 1.0746.8697 1.9453 1.945 1.9453z"/>
      </svg>
    ),
    messenger: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="24"
        height="24"
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
          d="M44,23.5C44,34.27,35.05,43,24,43c-1.651,0-3.25-0.194-4.784-0.564 c-0.465-0.112-0.951-0.069-1.379,0.145L13.46,44.77C12.33,45.335,11,44.513,11,43.249v-4.025c0-0.575-0.257-1.111-0.681-1.499 C6.425,34.165,4,29.11,4,23.5C4,12.73,12.95,4,24,4S44,12.73,44,23.5z"
        ></path>
        <path
          fill="#fff"
          d="M34.394,18.501l-5.7,4.22c-0.61,0.46-1.44,0.46-2.04,0.01L22.68,19.74 c-1.68-1.25-4.06-0.82-5.19,0.94l-1.21,1.89l-4.11,6.68c-0.6,0.94,0.55,2.01,1.44,1.34l5.7-4.22c0.61-0.46,1.44-0.46,2.04-0.01 l3.974,2.991c1.68,1.25,4.06,0.82,5.19-0.94l1.21-1.89l4.11-6.68C36.434,18.901,35.284,17.831,34.394,18.501z"
        ></path>
      </svg>
    ),
    whatsapp: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#25D366" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle">
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" fill="none" stroke="currentColor"/>
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" fill="#25D366" stroke="none"/>
        <path fill="#fff" d="M16.6 14c-.2-.1-1.3-.6-1.5-.7-.2-.1-.4-.1-.6.1-.2.2-.6.7-.7.9-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-.8-1.1-1.1-1.7-.1-.2 0-.3.1-.4.1-.1.2-.3.3-.4.1-.1.2-.2.2-.4.1-.2 0-.3 0-.4-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2.1-1.4.2-.7.2-1.3.1-1.4-.1-.1-.3-.2-.5-.3z"/>
      </svg>
    ),
    map: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 48 48"
        fill="currentColor"
      >
        <path fill="#1c9957" d="M42,39V9c0-1.657-1.343-3-3-3H9C7.343,6,6,7.343,6,9v30c0,1.657,1.343,3,3,3h30C40.657,42,42,40.657,42,39z"></path>
        <path fill="#3e7bf1" d="M9,42h30c1.657,0-15-16-15-16S7.343,42,9,42z"></path>
        <path fill="#ffd73d" d="M36,2c-5.523,0-10,4.477-10,10c0,6.813,7.666,9.295,9.333,19.851C35.44,32.531,35.448,33,36,33s0.56-0.469,0.667-1.149C38.334,21.295,46,18.813,46,12C46,6.477,41.523,2,36,2z"></path>
      </svg>
    )
  }

  return (
    <>
      {/* Sticky Action Buttons - Mobile First */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-audio-darker/95 backdrop-blur-md border-t border-audio-electricBlue/20"
        style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 0px))' }}
      >
        <div className="flex items-center justify-around px-2 py-3 gap-2">
          <Link
            href="tel:0339197917"
            className="flex-1 flex flex-col items-center gap-1 px-2 py-2 bg-green-500 rounded-xl text-white font-bold text-sm active:scale-95 transition-transform"
          >
            <Phone className="w-5 h-5" />
            <span>Gọi Ngay</span>
          </Link>

          <Link
            href="https://zalo.me/0339197917"
            target="_blank"
            className="flex-1 flex flex-col items-center gap-1 px-2 py-2 bg-gradient-to-r from-[#0068FF] to-[#0091FF] rounded-xl text-white font-semibold text-sm active:scale-95 transition-transform"
          >
           {<Image src={iconZalo} alt="Zalo" width={24} height={24} className="w-6 h-6 rounded-full" />}
            <span>Zalo</span>
          </Link>

          <button
            onClick={isMenu.toggle}
            className="flex-1 flex flex-col items-center gap-1 px-2 py-2 bg-audio-light/50 border border-audio-electricBlue/30 rounded-xl text-white font-semibold text-sm active:scale-95 transition-transform"
          >
            <MoreHorizontal className="w-5 h-5" />
            <span>Khác</span>
          </button>
        </div>
      </div>

      {/* Mobile expanding menu (when Khác is clicked) */}
      {isMenu.visible && (
        <div className="fixed bottom-20 left-4 right-4 md:hidden mt-5 z-50">
          <div className="flex-auto overflow-hidden rounded-3xl bg-audio-light/95 backdrop-blur-md text-sm leading-6 shadow-2xl border border-audio-electricBlue/30 ring-1 ring-audio-electricBlue/20">
            <div className="p-4 space-y-2">
              <Link href="https://m.me/thueloakeodanang.didiaudio" target="_blank">
                <MenuItem
                  icon={icons.messenger}
                  title="Messenger"
                  subtitle="Chat ngay"
                  className="bg-audio-light/50 border border-audio-electricBlue/30 text-white hover:bg-audio-light transition-colors"
                />
              </Link>

              <Link href="https://wa.me/84339197917" target="_blank">
                <MenuItem
                  icon={icons.whatsapp}
                  title="WhatsApp"
                  subtitle="Nhắn tin"
                  className="bg-audio-light/50 border border-[#25D366]/30 text-white hover:bg-audio-light transition-colors"
                />
              </Link>

              <Link
                href="https://www.google.com/maps/dir//43+Tống+Duy+Tân,+Liên+Chiểu,+Đà+Nẵng"
                target="_blank"
                className="group relative flex items-center gap-x-4 rounded-xl p-3 hover:bg-audio-light/30 transition-all border border-audio-electricBlue/10"
              >
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-audio-electricBlue/20">
                  {icons.map}
                </div>
                <div>
                  <span className="font-sans font-bold text-white text-sm">Địa điểm cửa hàng</span>
                  <p className="text-xs text-white">43 Tống Duy Tân, Liên Chiểu</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Fixed Side Menu */}
      <div className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 z-50 flex-col gap-3">
        <DesktopMenuItem
          href="tel:0339197917"
          icon={<Phone className="w-6 h-6 text-white" />}
          label="Gọi Ngay"
          bgColor="bg-green-500"
        />
        <DesktopMenuItem
          href="https://zalo.me/0339197917"
          icon={<Image src={iconZalo} alt="Bản Đồ" width={28} height={28} className="w-8 h-8" />}
          label="Zalo"
          bgColor="bg-white"
        />
        <DesktopMenuItem
          href="https://m.me/thueloakeodanang.didiaudio"
          icon={icons.messenger}
          label="Messenger"
          bgColor="bg-[#A033FF]"
        />
        <DesktopMenuItem
          href="https://wa.me/84339197917"
          icon={icons.whatsapp}
          label="WhatsApp"
          bgColor="bg-[#25D366]"
        />
        <DesktopMenuItem
          href="https://www.google.com/maps/dir//43+Tống+Duy+Tân,+Liên+Chiểu,+Đà+Nẵng"
          icon={<Image src={iconMaps} alt="Bản Đồ" width={24} height={24} className="w-8 h-8" />}
          label="Bản Đồ"
          bgColor="bg-white text-black"
          iconColor="text-red-500"
        />
      </div>
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

function DesktopMenuItem({ href, icon, label, bgColor, iconColor = "text-white" }: any) {
  return (
    <Link
      href={href}
      target={href.startsWith('http') ? '_blank' : '_self'}
      className={`group relative flex items-center justify-center w-12 h-12 rounded-full shadow-lg ${bgColor} hover:scale-110 transition-transform cursor-pointer`}
    >
      <div className={iconColor}>
        {icon}
      </div>
      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-black/80 text-white text-sm font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {label}
        {/* Arrow */}
        <div className="absolute top-1/2 -translate-y-1/2 left-full w-0 h-0 border-t-4 border-b-4 border-l-[6px] border-transparent border-l-black/80"></div>
      </div>
    </Link>
  )
}
