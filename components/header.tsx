'use client';

import { useRouter } from 'next/navigation';

import Navigation from './navigation';
import Image from 'next/image';

const Header = () => {
  const router = useRouter();

  const onClickLogo = () => {
    router.push('/');
  };

  return (
    <header className='fixed top-0 left-0 right-0 bg-white shadow-md border-b border-gray-200 z-50'>
      <div className='flex justify-between items-center h-[80px] max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 max-[500px]:h-[60px]'>
        <Image
          onClick={onClickLogo}
          src='/images/logo.png'
          alt='logo'
          width={90}
          height={90}
          className='cursor-pointer'
        />

        <Navigation />
      </div>
    </header>
  );
};

export default Header;
