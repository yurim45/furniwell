'use client';

import { useState } from 'react';
import Image from 'next/image';

import { useTranslations } from 'next-intl';

import { FurnitureTabInfo, TabInfo } from '@/types/conmmon';

import { TabNavigation } from '@/components/tabNavigation';
import DetailTitle from '@/components/detailTitle';
import DetailContent from '@/components/detailContent';
import ContentArticle from '@/components/contentArticle';

const Contents = () => {
  const t = useTranslations('furniture');
  const [activeTab, setActiveTab] = useState<FurnitureTabInfo>('indoor');

  const onClickTab = (tab: TabInfo) => {
    setActiveTab(tab as FurnitureTabInfo);
  };

  return (
    <>
      {/* 탭 네비게이션 */}
      <div className='sticky top-[80px] max-[500px]:top-[60px] z-10 bg-white'>
        <TabNavigation tabInfo={TAB_INFO} activeTab={activeTab} onClickTab={onClickTab} />
      </div>

      {/* 탭 콘텐츠 영역 */}
      <ContentArticle>
        {activeTab === 'indoor' && (
          <>
            <DetailTitle>{t('tab_indoor')}</DetailTitle>
            <DetailContent>
              {t('furniture_section_indoor_description1')} <br />
              {t('furniture_section_indoor_description2')} <br />
              <br />
              {t('furniture_section_indoor_description3')} <br />
              <br />
              {t('furniture_section_indoor_description4')} <br />
              {t('furniture_section_indoor_description5')} <br />
              {t('furniture_section_indoor_description6')} <br />
            </DetailContent>
            <div className='mt-18 flex flex-col items-center'>
              {Array.from({ length: 4 }, (_, index) => (
                <Image
                  key={index}
                  src={`/images/furniture/indoor${index + 1}.jpg`}
                  alt={`인도어 가구 제품 ${index + 1}`}
                  width={1100}
                  height={1000}
                  quality={85}
                />
              ))}
            </div>
          </>
        )}
        {activeTab === 'outdoor' && (
          <>
            <DetailTitle>{t('tab_outdoor')}</DetailTitle>
            <DetailContent>
              {t('furniture_section_outdoor_description1')} <br />
              {t('furniture_section_outdoor_description2')} <br />
              <br />
              {t('furniture_section_outdoor_description3')} <br />
              {t('furniture_section_outdoor_description4')} <br />
              {t('furniture_section_outdoor_description5')} <br />
              <br />
              {t('furniture_section_outdoor_description6')} <br />
            </DetailContent>
            <div className='mt-18 flex flex-col items-center'>
              {Array.from({ length: 5 }, (_, index) => (
                <Image
                  key={index}
                  src={`/images/furniture/outdoor${index + 1}.jpg`}
                  alt={`아웃도어 가구 제품 ${index + 1}`}
                  width={1100}
                  height={1000}
                  quality={85}
                />
              ))}
            </div>
          </>
        )}
      </ContentArticle>
    </>
  );
};

export default Contents;

const TAB_INFO: { id: FurnitureTabInfo; label: string }[] = [
  {
    id: 'indoor',
    label: 'furniture.tab_indoor',
  },
  {
    id: 'outdoor',
    label: 'furniture.tab_outdoor',
  },
];
