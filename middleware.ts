import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: ['/', '/index'],
}

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get('authorization')
  const url = req.nextUrl

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    const [user, pwd] = atob(authValue).split(':')

    if (user === 'madeby' && pwd === 'drowkid') {
      return NextResponse.next()
    }
  }
  url.pathname = '/index'

  return NextResponse.rewrite(url)
}
