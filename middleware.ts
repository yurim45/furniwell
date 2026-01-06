// src/middleware.ts
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // 아래 경로들에 대해서만 미들웨어가 실행되도록 설정
  // 1. 모든 로케일 경로 (예: /ko, /en)
  // 2. 로케일이 없는 루트 경로 (/)
  matcher: ['/', '/(ko|en)/:path*'],
};
