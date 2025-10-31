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
  '단순한 거래가 아닌 장기적 파트너로 함께 성장합니다. 인도네시아 현지 직영 공장으로써 가구 및 파렛트 제작 수출, 종합 인테리어 서비스를 제공하는 (주)퍼니웰입니다. We grow together as long-term partners, not just simple transactions. As a directly-operated factory in Indonesia, Furniwell Co., Ltd. manufactures and exports furniture and pallets, as well as providing comprehensive interior design services.';

export const metadata: Metadata = {
  title: '퍼니웰(주) FURNIWELL',
  description: DESC,
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
    title: '퍼니웰(주) FURNIWELL',
    description: DESC,
    siteName: 'FURNIWELL',
    type: 'website',
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
