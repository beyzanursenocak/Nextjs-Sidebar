/* eslint-disable import/no-anonymous-default-export */
import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

const nextIntlMiddleware = createMiddleware({
  locales: ['en', 'tr'],
  defaultLocale: 'en',
});

export default function(req: NextRequest): NextResponse {
  return nextIntlMiddleware(req)
}

export const config = {
  // Sadece uluslararasılaştırılmış yolları eşleştir
  matcher: ['/', '/(tr|en)/:path*']
};
