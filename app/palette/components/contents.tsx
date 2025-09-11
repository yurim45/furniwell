'use client';

import { useState } from 'react';

import { TabNavigation } from '@/components/tabNavigation';

export type TabInfo = 'palette' | 'export_palette' | 'wooden_box' | 'paper_box';

const Contents = () => {
  const [activeTab, setActiveTab] = useState<TabInfo>('palette');

  const onClickTab = (tab: TabInfo) => {
    setActiveTab(tab);
  };

  return (
    <>
      {/* 탭 네비게이션 */}
      <TabNavigation tabInfo={TAB_INFO} activeTab={activeTab} onClickTab={onClickTab} />

      {/* 탭 콘텐츠 영역 */}
      <article className='p-8'>
        {activeTab === 'palette' && <div>파렛트</div>}
        {activeTab === 'export_palette' && <div>수출용 파렛트</div>}
        {activeTab === 'wooden_box' && <div>수출용 목상자</div>}
        {activeTab === 'paper_box' && <div>수출용 종이상자</div>}
      </article>
    </>
  );
};

export default Contents;

const TAB_INFO: { id: TabInfo; label: string }[] = [
  {
    id: 'palette',
    label: '파렛트',
  },
  {
    id: 'export_palette',
    label: '수출용 파렛트',
  },
  {
    id: 'wooden_box',
    label: '수출용 목상자',
  },
  {
    id: 'paper_box',
    label: '수출용 종이상자',
  },
];
