'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import Navigation from './navigation';
import Image from 'next/image';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const onClickLogo = () => {
    router.push('/');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        pathname !== '/' || isScrolled ? 'bg-white shadow-md border-b border-gray-200' : 'bg-transparent'
      }`}
    >
      <div className='flex justify-between items-center h-16 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Logo */}
        {/* <h1
          className={`text-xl font-bold transition-colors duration-300 cursor-pointer ${
            pathname !== '/' || isScrolled ? 'text-primary-950' : 'text-white'
          }`}
          onClick={onClickLogo}
        >
          FURNIWELL
        </h1> */}
        <Image
          onClick={onClickLogo}
          src={`/images/logo${pathname !== '/' || isScrolled ? '' : '_white'}.png`}
          alt='logo'
          width={80}
          height={80}
          className='cursor-pointer'
        />

        <Navigation isScrolled={isScrolled} />
      </div>
    </header>
  );
};

export default Header;
