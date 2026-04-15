'use client'

import { useEffect, useState } from 'react'

const LANGUAGE_OPTIONS = [
  { value: 'vi', label: 'VI' },
  { value: 'en', label: 'EN' },
  { value: 'ko', label: 'KO' },
  { value: 'ru', label: 'RU' },
]

function setGoogleTranslateCookie(language: string) {
  const cookieValue = `/vi/${language}`
  document.cookie = `googtrans=${cookieValue}; path=/`
  document.cookie = `googtrans=${cookieValue}; path=/; domain=${window.location.hostname}`
}

function readGoogleTranslateLanguage() {
  const match = document.cookie.match(/(?:^|; )googtrans=([^;]+)/)

  if (!match) return 'vi'

  const value = decodeURIComponent(match[1])
  const parts = value.split('/')
  return parts[2] || 'vi'
}

export function LanguageSwitcher() {
  const [currentLanguage, setCurrentLanguage] = useState('vi')

  useEffect(() => {
    setCurrentLanguage(readGoogleTranslateLanguage())
  }, [])

  const handleChangeLanguage = (language: string) => {
    if (language === currentLanguage) return

    setGoogleTranslateCookie(language)
    window.location.reload()
  }

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold text-white">
      <span className="text-gray-300">Ngôn ngữ</span>
      <select
        aria-label="Chọn ngôn ngữ"
        className="rounded-md border border-white/20 bg-audio-darker px-2 py-1 text-white outline-none"
        value={currentLanguage}
        onChange={(event) => handleChangeLanguage(event.target.value)}
      >
        {LANGUAGE_OPTIONS.map((language) => (
          <option key={language.value} value={language.value}>
            {language.label}
          </option>
        ))}
      </select>
    </div>
  )
}
