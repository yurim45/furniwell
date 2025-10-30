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
  verification: {
    other: {
      'naver-site-verification': '41ba215b7c3d1cc4c490deafa82c3ab3c587630e',
    },
  },
  openGraph: {
    images: '/images/common/main_logo.jpeg',
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
