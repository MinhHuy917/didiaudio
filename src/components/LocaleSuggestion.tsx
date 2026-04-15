'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { mapLocalizedSlug } from '@/data/blog-i18n'
import { localeFromPath, localeMeta, locales, removeLocalePrefix, type Locale, withLocalePrefix } from '@/lib/i18n'

function detectBrowserLocale(): Locale | null {
  if (typeof navigator === 'undefined') return null
  const code = navigator.language.toLowerCase().split('-')[0]
  return locales.find((locale) => locale === code) ?? null
}

function getLocalizedPath(pathname: string, targetLocale: Locale) {
  const currentLocale = localeFromPath(pathname)
  const normalizedPath = removeLocalePrefix(pathname)
  const parts = normalizedPath.split('/').filter(Boolean)

  if (parts[0] === 'blog' && parts[1]) {
    const slug = mapLocalizedSlug(parts[1], currentLocale, targetLocale)
    return withLocalePrefix(targetLocale, `/blog/${slug}`)
  }

  return withLocalePrefix(targetLocale, normalizedPath)
}

export default function LocaleSuggestion() {
  const pathname = usePathname() || '/'
  const [targetLocale, setTargetLocale] = useState<Locale | null>(null)
  const currentLocale = localeFromPath(pathname)

  useEffect(() => {
    const saved = window.localStorage.getItem('preferred-locale')
    if (saved && locales.includes(saved as Locale)) return

    const browserLocale = detectBrowserLocale()
    if (browserLocale && browserLocale !== currentLocale) {
      setTargetLocale(browserLocale)
    }
  }, [currentLocale])

  const targetPath = useMemo(() => {
    if (!targetLocale) return '/'
    return getLocalizedPath(pathname, targetLocale)
  }, [pathname, targetLocale])

  if (!targetLocale) return null

  return (
    <div className="fixed bottom-4 left-1/2 z-[70] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 rounded-2xl border border-cyan-400/30 bg-black/85 p-3 text-sm text-white shadow-xl backdrop-blur">
      <p className="mb-2">
        We detected your browser language as <strong>{localeMeta[targetLocale].label}</strong>. Switch now?
      </p>
      <div className="flex gap-2">
        <Link
          href={targetPath}
          className="rounded-lg bg-cyan-500 px-3 py-2 font-semibold text-black"
          onClick={() => {
            window.localStorage.setItem('preferred-locale', targetLocale)
            document.cookie = `preferred-locale=${targetLocale}; path=/; max-age=31536000`
            setTargetLocale(null)
          }}
        >
          Switch
        </Link>
        <button
          type="button"
          className="rounded-lg border border-white/20 px-3 py-2"
          onClick={() => {
            window.localStorage.setItem('preferred-locale', currentLocale)
            setTargetLocale(null)
          }}
        >
          Keep current
        </button>
      </div>
    </div>
  )
}
