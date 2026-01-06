import Image from 'next/image';

import { getTranslations } from 'next-intl/server';

import Contents from './components/contents';

export default async function FurniturePage() {
  const t = await getTranslations('furniture');
  return (
    <main className='max-w-screen-xl mx-auto'>
      <section className='relative flex flex-col items-center justify-center w-full h-[500px] overflow-hidden max-[500px]:h-[280px]'>
        <Image
          src='/images/furniture/main_top.jpg'
          alt='아웃도어 가구 제품'
          fill
          className='object-cover'
          style={{ objectPosition: 'center 70%' }}
          priority
        />
        <p className='relative text-lg mb-2 text-center text-white drop-shadow-2xl'>
          {t('furniture_section_description')}
        </p>
        <h1 className='relative text-4xl font-bold text-center text-white drop-shadow-2xl'>
          {t('furniture_section_page_title')}
        </h1>
      </section>
      <Contents />
    </main>
  );
}
