import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  
  if (pathname.includes('/_next/') || pathname.includes('/static/')) {
    return NextResponse.next()
  }

  const hostname = req.headers.get('host');
  const subdomain = hostname?.match(/^([^.]+)\./)?.[1];

  switch (true) {
    case subdomain?.startsWith('push'):
      return NextResponse.rewrite(new URL(`/push${req.nextUrl.pathname}`, req.url));
    default:
      return NextResponse.next();
  }

  return NextResponse.next()
}
