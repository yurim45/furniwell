'use client';

import { useState, useEffect } from 'react';

import Navigation from './navigation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md border-b border-gray-200' : 'bg-transparent'
      }`}
    >
      <div className='flex justify-between items-center h-16 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Logo */}
        <h1
          className={`text-xl font-bold transition-colors duration-300 ${
            isScrolled ? 'text-primary-950' : 'text-white'
          }`}
        >
          FURNIWELL
        </h1>

        <Navigation isScrolled={isScrolled} />
      </div>
    </header>
  );
};

export default Header;
