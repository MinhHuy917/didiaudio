'use client'

import { useEffect, useState } from 'react'

type LanguageOption = {
  id: string
  code: string
  label: string
  flag: string
}

const LANGUAGE_OPTIONS: LanguageOption[] = [
  { id: 'vi', code: 'vi', label: 'Việt Nam', flag: '🇻🇳' },
  { id: 'en', code: 'en', label: 'English', flag: '🇺🇸' },
  { id: 'ru', code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { id: 'ko', code: 'ko', label: '한국어', flag: '🇰🇷' },
  { id: 'zh-cn', code: 'zh-CN', label: '中文', flag: '🇨🇳' },
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

export function LanguageSwitcher() {
  const [currentLanguageId, setCurrentLanguageId] = useState('vi')

  useEffect(() => {
    const savedLanguageId = window.localStorage.getItem('preferred-language-id')
    if (savedLanguageId && LANGUAGE_OPTIONS.some((lang) => lang.id === savedLanguageId)) {
      setCurrentLanguageId(savedLanguageId)
      return
    }
    const languageCode = readGoogleTranslateLanguageCode()
    const matchingLanguage = LANGUAGE_OPTIONS.find((lang) => lang.code === languageCode)
    setCurrentLanguageId(matchingLanguage?.id || 'vi')
  }, [])

  const handleChangeLanguage = (language: LanguageOption) => {
    if (language.id === currentLanguageId) return

    // Redirect to custom localized pages for specific languages
    if (['en', 'ko', 'zh-cn', 'ru'].includes(language.id)) {
      const routeMap: Record<string, string> = {
        'en': '/speaker-rental-da-nang',
        'ko': '/speaker-rental-da-nang-ko',
        'zh-cn': '/speaker-rental-da-nang-zh',
        'ru': '/speaker-rental-da-nang-ru'
      }
      window.location.href = routeMap[language.id]
      return
    }

    // Default Google Translate behavior for other languages
    window.localStorage.setItem('preferred-language-id', language.id)
    setGoogleTranslateCookie(language.code)
    window.location.href = '/' // redirect to home and let translate take over
  }

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/25 p-1 backdrop-blur-md">
      {LANGUAGE_OPTIONS.map((language) => {
        const isActive = language.id === currentLanguageId

        return (
          <button
            key={language.id}
            type="button"
            onClick={() => handleChangeLanguage(language)}
            title={language.label}
            className={`relative flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200 ${
              isActive 
                ? 'bg-[#1a7f43] shadow-inner' // Vòng tròn xanh cho flag đang chọn
                : 'hover:bg-white/10'
            }`}
          >
            <span className="text-lg leading-none select-none">
              {language.flag}
            </span>
          </button>
        )
      })}
    </div>
  )
}