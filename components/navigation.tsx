'use client';

import { useState } from 'react';

interface NavigationProps {
  isScrolled: boolean;
}

const Navigation = ({ isScrolled }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className='hidden md:flex space-x-8'>
        {MENU.map((menu) => (
          <a
            key={menu.name.id}
            href={menu.href}
            className={`transition-colors duration-200 ${
              isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-200'
            }`}
          >
            {menu.name.label}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <div className='md:hidden'>
        <button
          onClick={toggleMenu}
          className={`transition-colors duration-200 ${
            isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-200'
          }`}
        >
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden fixed inset-0 bg-white z-50'>
          <button onClick={toggleMenu} className={`transition-colors duration-200 absolute top-4 right-4`}>
            <svg className='w-6 h-6' fill='none' stroke='black' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>
          <ul className='pt-[60px] px-[32px] flex flex-col gap-8'>
            {MENU.map((menu) => (
              <li key={menu.name.id} className='text-primary-950 font-bold text-xl'>
                <a href={menu.href}>{menu.name.label}</a>
              </li>
            ))}
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
      label: 'Home',
    },
    href: '/',
  },
  {
    name: {
      id: 'about',
      label: 'About',
    },
    href: '/about',
  },
];
