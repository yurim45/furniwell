'use client';

import { useState } from 'react';
import Image from 'next/image';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';

const Language = () => {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const onClickLanguage = (newLocale: string) => {
    setIsOpen(false);
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className='relative'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center gap-1 text-primary-950 text-sm font-bold cursor-pointer'
      >
        <Image src={`/images/common/${locale}.svg`} alt={locale} width={24} height={32} />
        {locale.toUpperCase()}
      </button>
      {isOpen && (
        <ul className='absolute top-[calc(100%+10px)] right-0 w-[100px] bg-white shadow-md border border-gray-200 rounded-md flex flex-col items-start'>
          {LANGUAGE_MENU.map((langItem) => (
            <li
              key={langItem.id}
              onClick={() => onClickLanguage(langItem.id)}
              className={`w-full cursor-pointer hover:bg-primary-100 rounded-md p-3 ${
                locale === langItem.id ? 'text-primary-950 font-semibold' : 'text-primary-300 font-thin'
              } transition-colors duration-200`}
            >
              {langItem.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Language;

const LANGUAGE_MENU = [
  {
    id: 'ko',
    label: '한국어',
  },
  {
    id: 'en',
    label: 'English',
  },
];
