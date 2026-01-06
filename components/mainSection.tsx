import { getTranslations } from 'next-intl/server';

import Image from 'next/image';
import Link from 'next/link';

const MainSection = async () => {
  const t = await getTranslations('home');
  const tCommon = await getTranslations('common');

  return (
    <>
      <section className='max-w-screen-xl mx-auto py-16 px-4 max-[500px]:py-8'>
        <h2 className='text-3xl font-bold text-gray-900 text-center mb-4 max-[500px]:text-2xl max-[500px]:text-left'>
          {t('main_section_title')}
        </h2>
        <p className='text-lg text-gray-600 text-center mb-16 max-[500px]:text-md max-[500px]:text-left max-[500px]:mb-8'>
          {t('main_section_description')}
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {SECTION_INFO.map((section) => (
            <Link
              href={section.href}
              key={section.title.id}
              className='bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden'
            >
              <div className='w-full h-60 max-[500px]:h-46'>
                <Image
                  src={section.image}
                  alt={t(section.title.label)}
                  width={400}
                  height={300}
                  className={`w-full h-full ${section.title.id === 'about' ? 'object-contain' : 'object-cover'}`}
                />
              </div>

              <div className='p-6 text-center max-[500px]:text-left max-[500px]:p-4'>
                <h3 className='text-xl font-bold text-gray-900 mb-3 hover:text-quaternary-600 transition-colors'>
                  {t(section.title.label)}
                </h3>

                <p className='text-gray-600 leading-relaxed text-sm mb-4'>{t(section.description)}</p>

                <span className='inline-flex items-center text-quaternary-600 hover:text-quaternary-800 font-medium text-sm transition-colors'>
                  {tCommon('view_more')}
                  <svg className='w-4 h-4 ml-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default MainSection;

const SECTION_INFO = [
  {
    title: {
      id: 'about',
      label: 'about_section_title',
    },
    href: '/about',
    tag: null,
    image: '/images/main/about.png',
    description: `about_section_description`,
  },
  {
    title: {
      id: 'furniture',
      label: 'furniture_section_title',
    },
    href: '/furniture',
    tag: null,
    image: '/images/main/furniture.jpeg',
    description: `furniture_section_description`,
  },
  {
    title: {
      id: 'interior',
      label: 'interior_section_title',
    },
    href: '/interior',
    tag: null,
    image: '/images/main/interior.jpeg',
    description: `interior_section_description`,
  },
  {
    title: {
      id: 'palette',
      label: 'palette_section_title',
    },
    href: '/palette',
    tag: null,
    image: '/images/main/palette.jpeg',
    description: `palette_section_description`,
  },
];
