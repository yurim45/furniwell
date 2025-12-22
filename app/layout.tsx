import { ReactNode } from 'react';
import type { Metadata } from 'next';

import { Inter } from 'next/font/google';
import './globals.css';

import Header from '@/components/header';
import Footer from '@/components/footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const DESC =
  '인도네시아 가구 제조업체 퍼니웰(주). 인도네시아 현지 직영 공장으로 원목, 라탄, 가구 제작 및 수출, 인테리어 프로젝트, 목재 팔레트 공급을 제공합니다. 인도어/아웃도어 가구 전문 제조업체로 B2B 토탈 솔루션을 제공합니다. Indonesia furniture manufacturer Furniwell Co., Ltd. we manufacture and export wooden, rattan, and furniture, provide interior design projects, and supply wooden pallets from our directly-operated factory in Indonesia.';

export const metadata: Metadata = {
  title: '인도네시아 가구 제조업체 | 퍼니웰(주) FURNIWELL',
  description: DESC,
  keywords: [
    '인도네시아 가구',
    '인도네시아 가구 제조업체',
    '인도네시아 가구 수출',
    '인도어 가구',
    '아웃도어 가구',
    '원목 가구',
    '라탄 가구',
    '철제 가구',
    '인도네시아 인테리어',
    '목재 팔레트',
    'B2B 가구',
    '가구 제조업체',
    'Indonesia furniture',
    'Indonesia furniture manufacturer',
    'furniture export',
    'indoor furniture',
    'outdoor furniture',
    'wooden furniture',
    'rattan furniture',
  ],
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://furniwell.vercel.app',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    other: {
      'naver-site-verification': '41ba215b7c3d1cc4c490deafa82c3ab3c587630e',
      'google-site-verification': 'h06YRSXBS4PV7aibDcBsA_ZaJKTeaMwrAojazuSvmMA',
    },
  },
  openGraph: {
    images: '/images/og_image.jpg',
    title: '인도네시아 가구 제조업체 | 퍼니웰(주) FURNIWELL',
    description: DESC,
    siteName: 'FURNIWELL',
    type: 'website',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: '인도네시아 가구 제조업체 | 퍼니웰(주) FURNIWELL',
    description: DESC,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} w-full mx-auto`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
