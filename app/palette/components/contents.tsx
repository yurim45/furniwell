'use client';

import { useState } from 'react';

import { PaletteTabInfo, TabInfo } from '@/types/conmmon';

import { TabNavigation } from '@/components/tabNavigation';

const Contents = () => {
  const [activeTab, setActiveTab] = useState<PaletteTabInfo>('palette');

  const onClickTab = (tab: TabInfo) => {
    setActiveTab(tab as PaletteTabInfo);
  };

  return (
    <>
      {/* 탭 네비게이션 */}
      <TabNavigation tabInfo={TAB_INFO} activeTab={activeTab} onClickTab={onClickTab} />

      {/* 탭 콘텐츠 영역 */}
      <article className='p-8'>
        {activeTab === 'palette' && <div>파렛트</div>}
        {activeTab === 'export_palette' && <div>수출용 파렛트</div>}
        {activeTab === 'paper_box' && <div>목상자</div>}
      </article>
    </>
  );
};

export default Contents;

const TAB_INFO: { id: PaletteTabInfo; label: string }[] = [
  {
    id: 'palette',
    label: '내수용 파렛트',
  },
  {
    id: 'export_palette',
    label: '수출용 팔렛트',
  },
  {
    id: 'paper_box',
    label: '목상자',
  },
];
