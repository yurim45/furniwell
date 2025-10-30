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

export const metadata: Metadata = {
  title: '퍼니웰(주) FURNIWELL',
  description: '원목가구 목재 전문업체 PT. FURNIWELL MAKMUR ABADI',
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
    description: '원목가구 목재 전문업체 PT. FURNIWELL MAKMUR ABADI',
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
