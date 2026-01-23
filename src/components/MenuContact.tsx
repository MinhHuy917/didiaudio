'use client'

import useVisible from '@/hoooks/useVisible'
import Link from 'next/link'
import { Phone, MessageCircle, Copy, Check } from 'lucide-react'
import { useState } from 'react'

export default function MenuContact() {
  const isMenu = useVisible(false)
  const [copied, setCopied] = useState(false)

  const copyPhone = () => {
    navigator.clipboard.writeText('0339197917')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      {/* Sticky Action Buttons - Mobile First */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-audio-darker/95 backdrop-blur-md border-t border-audio-electricBlue/20"
        style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 0px))' }}
      >
        <div className="flex items-center justify-around px-4 py-3">
          <Link
            href="tel:0339197917"
            className="flex-1 flex flex-col items-center gap-1 px-4 py-2 bg-green-500 rounded-xl text-white font-bold text-sm active:scale-95 transition-transform"
          >
            <Phone className="w-5 h-5" />
            <span>Gọi Ngay</span>
          </Link>
          <Link
            href="//m.me/chothueloakeokeodanang"
            target="_blank"
            className="flex-1 flex flex-col items-center gap-1 px-4 py-2 bg-gradient-to-r from-audio-electricBlue to-audio-neonPurple rounded-xl text-white font-semibold text-sm active:scale-95 transition-transform mx-4"
          >
             <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="24"
                      height="24"
                      viewBox="0 0 48 48"
                    >
                      <radialGradient
                        id="8O3wK6b5ASW2Wn6hRCB5xa_YFbzdUk7Q3F8_gr1"
                        cx="11.087"
                        cy="7.022"
                        r="47.612"
                        gradientTransform="matrix(1 0 0 -1 0 50)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#1292ff"></stop>
                        <stop offset=".079" stop-color="#2982ff"></stop>
                        <stop offset=".23" stop-color="#4e69ff"></stop>
                        <stop offset=".351" stop-color="#6559ff"></stop>
                        <stop offset=".428" stop-color="#6d53ff"></stop>
                        <stop offset=".754" stop-color="#df47aa"></stop>
                        <stop offset=".946" stop-color="#ff6257"></stop>
                      </radialGradient>
                      <path
                        fill="url(#8O3wK6b5ASW2Wn6hRCB5xa_YFbzdUk7Q3F8_gr1)"
                        d="M44,23.5C44,34.27,35.05,43,24,43c-1.651,0-3.25-0.194-4.784-0.564	c-0.465-0.112-0.951-0.069-1.379,0.145L13.46,44.77C12.33,45.335,11,44.513,11,43.249v-4.025c0-0.575-0.257-1.111-0.681-1.499	C6.425,34.165,4,29.11,4,23.5C4,12.73,12.95,4,24,4S44,12.73,44,23.5z"
                      ></path>
                      <path
                        d="M34.992,17.292c-0.428,0-0.843,0.142-1.2,0.411l-5.694,4.215	c-0.133,0.1-0.28,0.15-0.435,0.15c-0.15,0-0.291-0.047-0.41-0.136l-3.972-2.99c-0.808-0.601-1.76-0.918-2.757-0.918	c-1.576,0-3.025,0.791-3.876,2.116l-1.211,1.891l-4.12,6.695c-0.392,0.614-0.422,1.372-0.071,2.014	c0.358,0.654,1.034,1.06,1.764,1.06c0.428,0,0.843-0.142,1.2-0.411l5.694-4.215c0.133-0.1,0.28-0.15,0.435-0.15	c0.15,0,0.291,0.047,0.41,0.136l3.972,2.99c0.809,0.602,1.76,0.918,2.757,0.918c1.576,0,3.025-0.791,3.876-2.116l1.211-1.891	l4.12-6.695c0.392-0.614,0.422-1.372,0.071-2.014C36.398,17.698,35.722,17.292,34.992,17.292L34.992,17.292z"
                        opacity=".05"
                      ></path>
                      <path
                        d="M34.992,17.792c-0.319,0-0.63,0.107-0.899,0.31l-5.697,4.218	c-0.216,0.163-0.468,0.248-0.732,0.248c-0.259,0-0.504-0.082-0.71-0.236l-3.973-2.991c-0.719-0.535-1.568-0.817-2.457-0.817	c-1.405,0-2.696,0.705-3.455,1.887l-1.21,1.891l-4.115,6.688c-0.297,0.465-0.32,1.033-0.058,1.511c0.266,0.486,0.787,0.8,1.325,0.8	c0.319,0,0.63-0.107,0.899-0.31l5.697-4.218c0.216-0.163,0.468-0.248,0.732-0.248c0.259,0,0.504,0.082,0.71,0.236l3.973,2.991	c0.719,0.535,1.568,0.817,2.457,0.817c1.405,0,2.696-0.705,3.455-1.887l1.21-1.891l4.115-6.688c0.297-0.465,0.32-1.033,0.058-1.511	C36.051,18.106,35.531,17.792,34.992,17.792L34.992,17.792z"
                        opacity=".07"
                      ></path>
                      <path
                        fill="#fff"
                        d="M34.394,18.501l-5.7,4.22c-0.61,0.46-1.44,0.46-2.04,0.01L22.68,19.74	c-1.68-1.25-4.06-0.82-5.19,0.94l-1.21,1.89l-4.11,6.68c-0.6,0.94,0.55,2.01,1.44,1.34l5.7-4.22c0.61-0.46,1.44-0.46,2.04-0.01	l3.974,2.991c1.68,1.25,4.06,0.82,5.19-0.94l1.21-1.89l4.11-6.68C36.434,18.901,35.284,17.831,34.394,18.501z"
                      ></path>
                    </svg>
            <span>Messenger</span>
          </Link>
          <Link
            href="https://zalo.me/0339197917"
            target="_blank"
            className="flex-1 flex flex-col items-center gap-1 px-4 py-2 bg-blue-500 border border-audio-electricBlue/30 rounded-xl text-white font-semibold text-sm active:scale-95 transition-transform"
          >
             <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="24"
                      height="24"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#2962ff"
                        d="M15,36V6.827l-1.211-0.811C8.64,8.083,5,13.112,5,19v10c0,7.732,6.268,14,14,14h10	c4.722,0,8.883-2.348,11.417-5.931V36H15z"
                      ></path>
                      <path
                        fill="#eee"
                        d="M29,5H19c-1.845,0-3.601,0.366-5.214,1.014C10.453,9.25,8,14.528,8,19	c0,6.771,0.936,10.735,3.712,14.607c0.216,0.301,0.357,0.653,0.376,1.022c0.043,0.835-0.129,2.365-1.634,3.742	c-0.162,0.148-0.059,0.419,0.16,0.428c0.942,0.041,2.843-0.014,4.797-0.877c0.557-0.246,1.191-0.203,1.729,0.083	C20.453,39.764,24.333,40,28,40c4.676,0,9.339-1.04,12.417-2.916C42.038,34.799,43,32.014,43,29V19C43,11.268,36.732,5,29,5z"
                      ></path>
                      <path
                        fill="#2962ff"
                        d="M36.75,27C34.683,27,33,25.317,33,23.25s1.683-3.75,3.75-3.75s3.75,1.683,3.75,3.75	S38.817,27,36.75,27z M36.75,21c-1.24,0-2.25,1.01-2.25,2.25s1.01,2.25,2.25,2.25S39,24.49,39,23.25S37.99,21,36.75,21z"
                      ></path>
                      <path
                        fill="#2962ff"
                        d="M31.5,27h-1c-0.276,0-0.5-0.224-0.5-0.5V18h1.5V27z"
                      ></path>
                      <path
                        fill="#2962ff"
                        d="M27,19.75v0.519c-0.629-0.476-1.403-0.769-2.25-0.769c-2.067,0-3.75,1.683-3.75,3.75	S22.683,27,24.75,27c0.847,0,1.621-0.293,2.25-0.769V26.5c0,0.276,0.224,0.5,0.5,0.5h1v-7.25H27z M24.75,25.5	c-1.24,0-2.25-1.01-2.25-2.25S23.51,21,24.75,21S27,22.01,27,23.25S25.99,25.5,24.75,25.5z"
                      ></path>
                      <path
                        fill="#2962ff"
                        d="M21.25,18h-8v1.5h5.321L13,26h0.026c-0.163,0.211-0.276,0.463-0.276,0.75V27h7.5	c0.276,0,0.5-0.224,0.5-0.5v-1h-5.321L21,19h-0.026c0.163-0.211,0.276-0.463,0.276-0.75V18z"
                      ></path>
                    </svg>
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
              <Link href="tel:0339197917">
                <MenuItem
                  icon={<Phone className="w-5 h-5" />}
                  title="Gọi Ngay"
                  subtitle="0339197917"
                  className="bg-gradient-to-r from-audio-electricBlue to-audio-neonPurple text-white"
                />
              </Link>
              
              <button onClick={copyPhone}>
                <MenuItem
                  icon={copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                  title={copied ? "Đã copy!" : "Copy số điện thoại"}
                  subtitle="0339197917"
                  className="bg-audio-light/50 border border-audio-electricBlue/30 text-white hover:bg-audio-light transition-colors"
                />
              </button>

              <Link href="https://zalo.me/0339197917" target="_blank">
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

              <Link href="https://m.me/chothueloakeokeodanang" target="_blank">
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
                  <p className="text-xs text-white">43 Tống Duy Tân, Liên Chiểu</p>
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
