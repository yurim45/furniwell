import { headers } from 'next/headers';

import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';

import { routing } from './routing';

// 브라우저 언어 가져오는 헬퍼 함수
async function getBrowserLanguage(): Promise<string> {
  const headersList = await headers();
  const acceptLanguage = headersList.get('accept-language');

  if (!acceptLanguage) {
    return routing.defaultLocale;
  }

  // 예: "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7"
  const languages = acceptLanguage.split(',');
  const primaryLanguage = languages[0].split(';')[0].trim(); // "ko-KR"
  const langCode = primaryLanguage.split('-')[0].toLowerCase(); // "ko"

  return langCode;
}

export default getRequestConfig(async ({ requestLocale }) => {
  // URL에서 요청된 locale (예: /ko/about)
  const requested = await requestLocale;

  let locale: string;
  if (requested && hasLocale(routing.locales, requested)) {
    // URL에 locale이 있으면 사용
    locale = requested;
  } else {
    // URL에 locale이 없으면 브라우저 언어 확인
    const browserLang = await getBrowserLanguage();
    locale = hasLocale(routing.locales, browserLang) ? browserLang : routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
