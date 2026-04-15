import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { ADMIN_SESSION_COOKIE as AUTH_COOKIE } from '@/lib/admin/constants'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (!pathname.startsWith('/admin')) {
    return NextResponse.next()
  }

  if (pathname === '/admin/login') {
    const hasSession = request.cookies.get(AUTH_COOKIE)?.value === 'authenticated'

    if (hasSession) {
      return NextResponse.redirect(new URL('/admin', request.url))
    }

    return NextResponse.next()
  }

  const hasSession = request.cookies.get(AUTH_COOKIE)?.value === 'authenticated'

  if (!hasSession) {
    const url = new URL('/admin/login', request.url)
    url.searchParams.set('redirect', pathname)
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
