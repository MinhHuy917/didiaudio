'use client'

import { useEffect, useRef, useState } from 'react'

type LanguageOption = {
  id: string
  code: string
  label: string
  flag: string
}

const LANGUAGE_OPTIONS: LanguageOption[] = [
  { id: 'vi', code: 'vi', label: 'Việt Nam', flag: '🇻🇳' },
  { id: 'en', code: 'en', label: 'English', flag: '🇬🇧' },
  { id: 'ko', code: 'ko', label: '한국어', flag: '🇰🇷' },
  { id: 'ru', code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { id: 'zh-cn', code: 'zh-CN', label: '中文 (Trung Quốc)', flag: '🇨🇳' },
  { id: 'zh-tw', code: 'zh-TW', label: '中文 (Đài Loan)', flag: '🇹🇼' },
  { id: 'zh-hk', code: 'zh-TW', label: '中文 (Hồng Kông)', flag: '🇭🇰' },
  { id: 'th', code: 'th', label: 'ไทย', flag: '🇹🇭' },
  { id: 'hi', code: 'hi', label: 'हिन्दी', flag: '🇮🇳' },
  { id: 'ja', code: 'ja', label: '日本語', flag: '🇯🇵' },
  { id: 'ms', code: 'ms', label: 'Bahasa Melayu', flag: '🇲🇾' },
]

function setGoogleTranslateCookie(languageCode: string) {
  const cookieValue = `/vi/${languageCode}`
  document.cookie = `googtrans=${cookieValue}; path=/`
  document.cookie = `googtrans=${cookieValue}; path=/; domain=${window.location.hostname}`
}

function readGoogleTranslateLanguageCode() {
  const match = document.cookie.match(/(?:^|; )googtrans=([^;]+)/)

  if (!match) return 'vi'

  const value = decodeURIComponent(match[1])
  const parts = value.split('/')
  return parts[2] || 'vi'
}

function ChevronIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 7.5 10 12.5 15 7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function LanguageSwitcher() {
  const [currentLanguageId, setCurrentLanguageId] = useState('vi')
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const savedLanguageId = window.localStorage.getItem('preferred-language-id')
    if (savedLanguageId && LANGUAGE_OPTIONS.some((language) => language.id === savedLanguageId)) {
      setCurrentLanguageId(savedLanguageId)
      return
    }

    const languageCode = readGoogleTranslateLanguageCode()
    const matchingLanguage = LANGUAGE_OPTIONS.find((language) => language.code === languageCode)
    setCurrentLanguageId(matchingLanguage?.id || 'vi')
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    window.addEventListener('click', handleClickOutside)
    return () => window.removeEventListener('click', handleClickOutside)
  }, [])

  const activeLanguage =
    LANGUAGE_OPTIONS.find((language) => language.id === currentLanguageId) ||
    LANGUAGE_OPTIONS[0]

  const handleChangeLanguage = (language: LanguageOption) => {
    setIsOpen(false)

    if (language.id === currentLanguageId) return

    window.localStorage.setItem('preferred-language-id', language.id)
    setGoogleTranslateCookie(language.code)
    window.location.reload()
  }

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-label="Chọn ngôn ngữ"
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex h-10 items-center gap-2 rounded-full border border-white/20 bg-black/25 px-3 text-sm font-semibold text-white transition hover:bg-white/10"
      >
        <span className="text-base" aria-hidden="true">{activeLanguage.flag}</span>
        <span className="hidden sm:inline">{activeLanguage.label}</span>
        <ChevronIcon className={`h-4 w-4 text-gray-300 transition ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          role="menu"
          className="absolute right-0 top-12 z-50 w-56 rounded-xl border border-white/20 bg-audio-darker/95 p-1 shadow-2xl backdrop-blur"
        >
          {LANGUAGE_OPTIONS.map((language) => {
            const isActive = language.id === currentLanguageId

            return (
              <button
                key={language.id}
                type="button"
                role="menuitem"
                onClick={() => handleChangeLanguage(language)}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-200'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <span aria-hidden="true" className="text-base">{language.flag}</span>
                <span>{language.label}</span>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
