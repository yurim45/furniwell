import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import DetailTitle from '@/components/detailTitle';
import DetailContent from '@/components/detailContent';
import ContentArticle from '@/components/contentArticle';

export default async function InteriorPage() {
  const t = await getTranslations('interior');

  return (
    <main className='max-w-screen-xl mx-auto'>
      <section className='relative flex flex-col items-center justify-center w-full h-[500px] overflow-hidden max-[500px]:h-[280px]'>
        <Image
          src='/images/interior/main_top.jpeg'
          alt='인도네시아 가구 | 인테리어 샘플'
          fill
          className='object-cover'
          style={{ objectPosition: 'center 40%' }}
          priority
        />
        <p className='relative text-lg mb-2 text-center text-white drop-shadow-2xl'>
          {t('interior_section_description')}
        </p>
        <h1 className='relative text-4xl font-bold text-center text-white drop-shadow-2xl'>
          {t('interior_section_page_title')}
        </h1>
      </section>

      <ContentArticle>
        <DetailTitle> {t('tab_interior')} </DetailTitle>
        <DetailContent>
          {t('interior_section_description1')} <br /> <br />
          {t('interior_section_description2')} <br /> <br />
          {t('interior_section_description3')} <br /> <br />
          <Image
            alt='인도네시아 가구 | 인테리어 샘플 이미지'
            src='/images/palette/interior_content_1.jpeg'
            width={1280}
            height={1000}
          />
        </DetailContent>
      </ContentArticle>
    </main>
  );
}
