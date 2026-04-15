import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { defaultLocale, localePrefixSet } from '@/lib/i18n'

function getPreferredLocale(request: NextRequest) {
  const cookieLocale = request.cookies.get('preferred-locale')?.value
  if (cookieLocale && localePrefixSet.has(cookieLocale as any)) return cookieLocale

  const accept = request.headers.get('accept-language') || ''
  const preferred = accept.toLowerCase().split(',').map((value) => value.trim().slice(0, 2))
  return preferred.find((locale) => localePrefixSet.has(locale as any))
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname.includes('.')) {
    return NextResponse.next()
  }

  const hasPrefix = Array.from(localePrefixSet).some((locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`))
  if (hasPrefix || pathname.startsWith('/blog') || pathname === '/' || pathname.startsWith('/about') || pathname.startsWith('/products')) {
    if (pathname !== '/') return NextResponse.next()

    const preferredLocale = getPreferredLocale(request)
    if (preferredLocale && preferredLocale !== defaultLocale) {
      return NextResponse.redirect(new URL(`/${preferredLocale}`, request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
