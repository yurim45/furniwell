'use client';

import { useState } from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const onClickMenu = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  return (
    <>
      <nav className='hidden md:flex space-x-8'>
        {MENU.map((menu) => {
          const isActive = pathname === menu.href;
          return (
            <button
              key={menu.name.id}
              onClick={() => onClickMenu(menu.href)}
              className={`transition-colors duration-200 cursor-pointer 
              text-primary-950 hover:text-primary-600 ${isActive ? 'font-extrabold' : 'font-thin'}`}
            >
              {menu.name.label}
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
        <div className='md:hidden fixed inset-0 bg-white z-50'>
          <Image src='/images/logo.png' alt='logo' width={140} height={100} className='pl-6' />
          <button onClick={toggleMenu} className={`transition-colors duration-200 absolute top-4 right-4`}>
            <svg className='w-6 h-6' fill='none' stroke='black' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>
          <ul className='pt-[20px] flex flex-col'>
            {MENU.map((menu) => {
              const isActive = pathname === menu.href;
              return (
                <li
                  key={menu.name.id}
                  className={`py-[18px] px-[32px] text-primary-950 text-xl ${
                    isActive ? 'font-extrabold' : 'font-thin'
                  }`}
                  onClick={() => onClickMenu(menu.href)}
                >
                  {menu.name.label}
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

const MENU = [
  {
    name: {
      id: 'home',
      label: 'HOME',
    },
    href: '/',
  },
  {
    name: {
      id: 'about',
      label: '회사소개',
    },
    href: '/about',
  },
  {
    name: {
      id: 'furniture',
      label: '가구',
    },
    href: '/furniture',
  },
  {
    name: {
      id: 'interior',
      label: '인테리어',
    },
    href: '/interior',
  },
  {
    name: {
      id: 'palette',
      label: '팔렛트',
    },
    href: '/palette',
  },
];
