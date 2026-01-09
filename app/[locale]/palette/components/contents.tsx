'use client';

import { useState } from 'react';
import Image from 'next/image';

import { useTranslations } from 'next-intl';

import { PaletteTabInfo, TabInfo } from '@/types/conmmon';

import { TabNavigation } from '@/components/tabNavigation';
import DetailTitle from '@/components/detailTitle';
import DetailContent from '@/components/detailContent';
import ContentArticle from '@/components/contentArticle';

const Contents = () => {
  const [activeTab, setActiveTab] = useState<PaletteTabInfo>('palette');
  const t = useTranslations('palette');

  const onClickTab = (tab: TabInfo) => {
    setActiveTab(tab as PaletteTabInfo);
  };

  return (
    <>
      {/* 탭 네비게이션 */}
      <div className='sticky top-[80px] max-[500px]:top-[60px] z-10 bg-white'>
        <TabNavigation tabInfo={TAB_INFO} activeTab={activeTab} onClickTab={onClickTab} />
      </div>

      {/* 탭 콘텐츠 영역 */}
      <ContentArticle>
        {activeTab === 'palette' && (
          <>
            <DetailTitle>{t('palette_section_palette_title')}</DetailTitle>
            <DetailContent>
              {t('palette_section_palette_description1')} <br /> <br />
              {t('palette_section_palette_description2')} <br />
              {t('palette_section_palette_description3')} <br /> <br />
              {t('palette_section_palette_description4')} <br />
              {t('palette_section_palette_description5')} <br />
            </DetailContent>
            <div className='mt-18 flex flex-col items-center'>
              {Array.from({ length: 2 }, (_, index) => (
                <Image
                  key={index}
                  src={`/images/palette/palette${index + 1}.jpg`}
                  alt={`인도네시아 가구 | 팔렛트 제품 ${index + 1}`}
                  width={1100}
                  height={1000}
                  quality={85}
                />
              ))}
            </div>
          </>
        )}
        {activeTab === 'export_palette' && (
          <>
            <DetailTitle>{t('palette_section_palette_export_title')}</DetailTitle>
            <DetailContent>
              {t('palette_section_palette_export_description1')} <br />
              <br />
              {t('palette_section_palette_export_description2')} <br />
              {t('palette_section_palette_export_description3')} <br />
              {t('palette_section_palette_export_description4')} <br />
              <br />
              {t('palette_section_palette_export_description5')} <br />
              {t('palette_section_palette_export_description6')} <br />
              <br />
              <Image alt='ippc logo' src='/images/palette/ippc1.jpg' width={600} height={300} />
              <br />
            </DetailContent>
            <DetailTitle>{t('palette_section_palette_export_title2')}</DetailTitle>
            <DetailContent>
              {t('palette_section_palette_export_description7')} <br />
              {t('palette_section_palette_export_description8')} <br />
              {t('palette_section_palette_export_description9')} <br />
              {t('palette_section_palette_export_description10')} <br />
            </DetailContent>
            <DetailTitle>{t('palette_section_palette_export_title3')}</DetailTitle>
            <DetailContent>
              {t('palette_section_palette_export_description11')} <br />
              {t('palette_section_palette_export_description12')} <br />
              {t('palette_section_palette_export_description13')} <br />
              {t('palette_section_palette_export_description14')} <br />
              {t('palette_section_palette_export_description15')} <br />
              {t('palette_section_palette_export_description16')} <br />
            </DetailContent>
            <Image alt='ippc logo' src='/images/palette/ippc2.jpg' width={600} height={400} />
          </>
        )}
        {activeTab === 'paper_box' && (
          <>
            <Image
              alt='인도네시아 가구 | 목상자 이미지'
              src='/images/palette/paper_box_content_1.jpeg'
              width={1280}
              height={1000}
            />
            <DetailTitle>{t('palette_section_paper_box_title')}</DetailTitle>
            <DetailContent>
              {t('palette_section_paper_box_description1')} <br /> <br />
              {t('palette_section_paper_box_description2')} <br />
              {t('palette_section_paper_box_description3')} <br />
              {t('palette_section_paper_box_description4')} <br />
              {t('palette_section_paper_box_description5')} <br /> <br />
              {t('palette_section_paper_box_description6')} <br />
              {t('palette_section_paper_box_description7')} <br /> <br />
              {t('palette_section_paper_box_description8')} <br />
              <Image
                alt='인도네시아 가구 | 목상자 이미지'
                src='/images/palette/paper_box_content_2.png'
                width={1280}
                height={1000}
              />
              <br /> <br />
            </DetailContent>
          </>
        )}
      </ContentArticle>
    </>
  );
};

export default Contents;

const TAB_INFO: { id: PaletteTabInfo; label: string }[] = [
  {
    id: 'palette',
    label: 'palette.tab_palette',
  },
  {
    id: 'export_palette',
    label: 'palette.tab_palette_export',
  },
  {
    id: 'paper_box',
    label: 'palette.tab_palette_paper_box',
  },
];
