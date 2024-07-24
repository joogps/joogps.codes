import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  
  // Bypass __next requests
  if (pathname.startsWith('/_next')) {
    return NextResponse.rewrite(new URL(`/`, req.url));
  }

  const hostname = req.headers.get('host');
  const subdomain = hostname?.match(/^([^.]+)\./)?.[1];

  switch (true) {
    case subdomain?.startsWith('push'):
      return NextResponse.rewrite(new URL(`/push${req.nextUrl.pathname}`, req.url));
    default:
      return NextResponse.next();
  }
}
