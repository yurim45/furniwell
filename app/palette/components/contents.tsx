'use client';

import { useState } from 'react';
import Image from 'next/image';

import { PaletteTabInfo, TabInfo } from '@/types/conmmon';

import { TabNavigation } from '@/components/tabNavigation';
import DetailTitle from '@/components/detailTitle';
import DetailContent from '@/components/detailContent';
import ContentArticle from '@/components/contentArticle';

const Contents = () => {
  const [activeTab, setActiveTab] = useState<PaletteTabInfo>('palette');

  const onClickTab = (tab: TabInfo) => {
    setActiveTab(tab as PaletteTabInfo);
  };

  return (
    <>
      {/* 탭 네비게이션 */}
      <div className='sticky top-[65] z-10 bg-white'>
        <TabNavigation tabInfo={TAB_INFO} activeTab={activeTab} onClickTab={onClickTab} />
      </div>

      {/* 탭 콘텐츠 영역 */}
      <ContentArticle>
        {activeTab === 'palette' && (
          <>
            <Image alt='palette_image' src='/images/palette/palette_content_1.jpeg' width={1280} height={1000} />
            <Image alt='palette_image' src='/images/palette/palette_content_2.png' width={1280} height={1000} />
            <br />
            <br />
            <DetailTitle>내수용 파렛트</DetailTitle>
            <DetailContent>
              (주)퍼니웰은 인도네시아 2공장에서 현지 내수용 및 수출용 목재 팔레트를 대량으로 전문 제작하고 있습니다.{' '}
              <br /> <br />
              현지 제재소와 직접 대량 계약하여 고품질의 원자재를 합리적인 가격에 확보합니다. <br />
              이를 통해 고객사에게는 비용 효율적이면서도 내구성이 뛰어난 목재 팔레트를 제공합니다. <br />
              <br />
              우리는 고객사와의 신뢰를 최우선 가치로 생각합니다. 책임감 있는 자세로 약속을 지키며, <br /> 단순한 거래
              관계를 넘어 믿음직한 비즈니스 파트너가 될 수 있도록 최선을 다하고 있습니다.
              <br />
              <br />
              <Image alt='palette_image' src='/images/palette/palette_content_3.jpeg' width={1280} height={1000} />
              <br />
            </DetailContent>
          </>
        )}
        {activeTab === 'export_palette' && (
          <>
            <DetailTitle>수출용 파렛트 열처리방역</DetailTitle>
            <DetailContent>
              해외로 수출할 때, 각국의 식물방역법에 따라 유해 병해충이 유입되는 것을 막아야 합니다. 이는 곧 수출
              대상국의 환경을 보호하기 위한 필수적인 조치입니다. <br /> <br />
              안전한 수출을 위한 열처리 방역 <br />
              수출용 목재 포장재(팔레트, 목상자 등)는 병해충이 숨어있을 수 있기 때문에 반드시 열처리 방역을 거쳐야
              합니다. <br />이 과정은 목재를 고온에서 가열하여 내부의 모든 병해충을 완전히 제거하는 방법입니다.
              <Image
                alt='export_palette_image'
                src='/images/palette/export_palette_content_1.jpeg'
                width={1280}
                height={1000}
              />
              <br />
              이러한 열처리 작업을 마친 목재에만 공인된 소독처리 마크를 부착합니다. <br />이 마크는 해당 목재가 국제
              기준을 충족했음을 증명하며, 원활한 통관 절차를 보장하는 중요한 역할을 합니다. <br /> <br />
              <Image
                alt='export_palette_image'
                src='/images/palette/export_palette_content_2.png'
                width={1280}
                height={1000}
              />
              <br />
            </DetailContent>
          </>
        )}
        {activeTab === 'paper_box' && (
          <>
            <Image alt='paper_box_image' src='/images/palette/paper_box_content_1.jpeg' width={1280} height={1000} />
            <Image alt='paper_box_image' src='/images/palette/paper_box_content_2.png' width={1280} height={1000} />
            <DetailTitle>목상자</DetailTitle>
            <DetailContent>
              고객사의 소중한 화물을 안전하게 운송하기 위한 최적의 솔루션을 제공합니다. <br /> <br />
              ■ 견고하고 안전한 맞춤 제작 <br />• 다양한 종류의 목재: 고객의 요구 사항 및 화물의 특성에 맞게 다양한
              목재를 사용하여 목상자를 제작합니다. <br />
              • 튼튼한 구조: 수출 과정에서 발생할 수 있는 충격과 외부 환경으로부터 화물을 보호할 수 있도록 견고한 구조로
              제작됩니다. <br />
              • 맞춤형 디자인: 화물의 크기, 무게, 형태에 맞춰 1:1 맞춤형 디자인 및 제작이 가능합니다. <br /> <br />
              ■ 국제 규격 준수 (ISPM 15) <br />
              저희가 제작하는 모든 수출용 목상자는 국제식물보호협약(ISPM 15) 기준을 준수합니다. <br /> <br />
              열처리(HT) 방역 처리를 통해 목재에 숨어있는 병해충을 완벽하게 제거하며, 공식 소독처리 마크를 부착하여 전
              세계 어느 국가로든 안심하고 수출할 수 있도록 합니다. <br /> <br />
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
