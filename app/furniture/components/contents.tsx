'use client';

import { useState } from 'react';

import { FurnitureTabInfo, TabInfo } from '@/types/conmmon';

import { TabNavigation } from '@/components/tabNavigation';

const Contents = () => {
  const [activeTab, setActiveTab] = useState<FurnitureTabInfo>('indoor');

  const onClickTab = (tab: TabInfo) => {
    setActiveTab(tab as FurnitureTabInfo);
  };

  return (
    <>
      {/* 탭 네비게이션 */}
      <TabNavigation tabInfo={TAB_INFO} activeTab={activeTab} onClickTab={onClickTab} />

      {/* 탭 콘텐츠 영역 */}
      <article className='p-8'>
        {activeTab === 'indoor' && <div>인도어</div>}
        {activeTab === 'outdoor' && <div>아웃도어</div>}
      </article>
    </>
  );
};

export default Contents;

const TAB_INFO: { id: FurnitureTabInfo; label: string }[] = [
  {
    id: 'indoor',
    label: '인도어',
  },
  {
    id: 'outdoor',
    label: '아웃도어',
  },
];
