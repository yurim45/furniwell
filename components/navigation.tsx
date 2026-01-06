'use client';

import { useState } from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

import { useLocale, useTranslations } from 'next-intl';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations('nav');
  const locale = useLocale();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const onClickMenu = (href: string) => {
    router.push(`/${locale}/${href.includes('home') ? '' : href}`);
    setIsOpen(false);
  };

  return (
    <>
      <nav className='hidden md:flex space-x-8'>
        {MENU.map((menu) => {
          const isActive = menu === 'home' ? pathname === `/${locale}` : pathname === `/${locale}/${menu}`;
          return (
            <button
              key={menu}
              onClick={() => onClickMenu(`/${menu}`)}
              className={`transition-colors duration-200 cursor-pointer 
              text-primary-950 hover:text-primary-600 ${isActive ? 'font-extrabold' : 'font-thin'}`}
            >
              {t(`menu_${menu}`)}
            </button>
          );
        })}
      </nav>

      {/* Mobile Menu Button */}
      <div className='md:hidden'>
        <button
          onClick={toggleMenu}
          className={`pt-[4px] transition-colors duration-200 text-gray-700 hover:text-primary-600`}
        >
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden w-full fixed inset-0 bg-white z-50'>
          <Image src='/images/logo.png' alt='logo' width={140} height={100} className='pl-6' />
          <button onClick={toggleMenu} className={`transition-colors duration-200 absolute top-4 right-4`}>
            <svg className='w-6 h-6' fill='none' stroke='black' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>
          <ul className='pt-[20px] flex flex-col'>
            {MENU.map((menu) => {
              const isActive = menu === 'home' ? pathname === `/${locale}` : pathname === `/${locale}/${menu}`;

              return (
                <li
                  key={menu}
                  className={`py-[18px] px-[32px] text-primary-950 text-xl ${
                    isActive ? 'font-extrabold' : 'font-thin'
                  }`}
                  onClick={() => onClickMenu(`/${menu}`)}
                >
                  {t(`menu_${menu}`)}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navigation;

const MENU = ['home', 'about', 'furniture', 'interior', 'palette'];
