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
  title: 'FURNIWELL',
  description: 'PT. FURNIWELL MAKMUR ABADI',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    images: '/images/common/main_logo.jpeg',
    title: 'FURNIWELL',
    description: 'PT. FURNIWELL MAKMUR ABADI',
    siteName: 'FURNIWELL',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} w-full max-w-screen-xl mx-auto`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
