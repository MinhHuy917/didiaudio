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

export function LanguageSwitcher() {
  const [currentLanguageId, setCurrentLanguageId] = useState('vi')

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

  const handleChangeLanguage = (language: LanguageOption) => {
    if (language.id === currentLanguageId) return

    window.localStorage.setItem('preferred-language-id', language.id)
    setGoogleTranslateCookie(language.code)
    window.location.reload()
  }

  return (
    <div className="inline-flex max-w-[220px] items-center gap-1 rounded-full border border-white/20 bg-black/25 p-1">
      {LANGUAGE_OPTIONS.map((language) => {
        const isActive = language.id === currentLanguageId

        return (
          <button
            key={language.id}
            type="button"
            aria-label={language.label}
            title={language.label}
            onClick={() => handleChangeLanguage(language)}
            className={`flex h-8 w-8 items-center justify-center rounded-full text-base transition ${
              isActive
                ? 'bg-cyan-400/20 ring-1 ring-cyan-300/60'
                : 'hover:bg-white/10'
            }`}
          >
            <span aria-hidden="true">{language.flag}</span>
          </button>
        )
      })}
    </div>
  )
}
