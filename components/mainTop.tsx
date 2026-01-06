import Image from 'next/image';

import { getTranslations } from 'next-intl/server';

const MainTop = async () => {
  const t = await getTranslations('home');

  return (
    <section className='pt-16 relative min-h-[700px] flex items-center overflow-hidden max-[500px]:min-h-[300px]'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image src='/images/main/bg_main.jpeg' alt='background-image' fill className='object-cover' priority />
      </div>

      {/* Content */}
      <div className='relative max-w-screen-xl mx-auto px-4 text-center text-white py-20 flex flex-col items-center justify-center z-10 sm:px-6 lg:px-8'>
        <p className='text-md md:text-lg text-primary-200 drop-shadow-md'>{t('main_top_description')}</p>
        <h1 className='text-5xl md:text-6xl font-bold drop-shadow-lg'>{t('main_top_title')}</h1>
        <h3 className='text-2xl md:text-3xl mb-6 drop-shadow-lg'>{t('main_top_sub_title')}</h3>
        <p className='text-xl md:text-2xl text-primary-200 mb-8 drop-shadow-md'>{t('main_top_description_2')}</p>
      </div>
    </section>
  );
};

export default MainTop;
