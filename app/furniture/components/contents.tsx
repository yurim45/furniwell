'use client';

import { useState } from 'react';

import { FurnitureTabInfo, TabInfo } from '@/types/conmmon';

import { TabNavigation } from '@/components/tabNavigation';
import DetailTitle from '@/components/detailTitle';
import DetailContent from '@/components/detailContent';
import ContentArticle from '@/components/contentArticle';

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
      <ContentArticle>
        {activeTab === 'indoor' && (
          <>
            <DetailTitle>인도어</DetailTitle>
            <DetailContent>
              우리는 1998년부터 시작된, 원목, 라탄, 철제 등 다양한 소재를 활용하여 실내용 가구를 제작하는 전문 가구
              공장입니다. <br />
              지난 수십 년간 축적된 기술력과 노하우를 바탕으로, 전 세계 시장에 고품질의 가구를 수출해 왔습니다.
              <br />
              <br />
              우리 공장의 강점은 높은 품질을 유지하면서도 합리적인 가격을 제공하는 것입니다. <br />
              <br />
              효율적인 생산 시스템과 엄격한 품질 관리를 통해 뛰어난 내구성과 심미성을 갖춘 가구를 제작하며, <br />
              다양한 소재와 디자인을 다루는 우리의 창의성과 기술력은 어떤 스타일의 가구라도 완벽하게 구현해 낼 수 있는
              기반이 됩니다. <br />
              이를 통해 고객사의 경쟁력 강화에 기여하고 있습니다.
              <br />
            </DetailContent>
          </>
        )}
        {activeTab === 'outdoor' && (
          <>
            <DetailTitle>아웃도어</DetailTitle>
            <DetailContent>
              우리는 야외 공간을 위한 아웃도어 가구 전문 제작 및 수출하고 있습니다. <br />
              테라스에 어울리는 가구부터, 공원이나 대규모 주거 단지에 설치되는 대형 조형물 및 맞춤형 가구까지, 다양한
              프로젝트를 수행하며 제품을 수출하고 있습니다.
              <br /> <br />
              고객의 아이디어를 현실로
              <br />
              아웃도어 가구 제작에서 가장 중요한 것은 내구성과 디자인의 조화입니다. 우리는 여러 소재를 자유자재로 다루는
              숙련된 기술력을 바탕으로, <br />
              고객의 창의적인 아이디어를 현실적인 아웃도어 제품으로 구현해 냅니다. 독특한 디자인의 야외 테이블과 의자
              세트, 특별한 공간을 위한 대형 벤치 등, 고객이 상상하는 모든 것을 실현해 드릴 수 있습니다.
              <br /> <br />
              야외 공간을 위한 가구나 조형물 제작을 고려하고 계신다면, 우리와 함께하세요.풍부한 경험과 뛰어난 기술력으로
              귀사의 프로젝트를 성공적으로 이끌어 나가겠습니다. <br />
            </DetailContent>
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
    label: '인도어',
  },
  {
    id: 'outdoor',
    label: '아웃도어',
  },
];
