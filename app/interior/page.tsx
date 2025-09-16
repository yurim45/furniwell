import Image from 'next/image';

import DetailTitle from '@/components/detailTitle';
import DetailContent from '@/components/detailContent';

export default function InteriorPage() {
  return (
    <main>
      <section className='relative flex flex-col items-center justify-center w-full h-[500px] overflow-hidden'>
        <Image
          src='/images/interior/main_top.jpeg'
          alt='인테리어 샘플'
          fill
          className='object-cover'
          style={{ objectPosition: 'center 40%' }}
          priority
        />
        <p className='relative text-lg mb-2 text-center text-white drop-shadow-2xl'>
          국내, 수출용 목재 인테리어 제작 전문 업체
        </p>
        <h1 className='relative text-4xl font-bold text-center text-white drop-shadow-2xl'>인테리어</h1>
      </section>

      <article className='p-8'>
        <DetailTitle>인테리어</DetailTitle>
        <DetailContent>
          우리는 인도네시아 현지에서 인테리어 디자인부터 가구, 소품, 자재 제작까지 토탈 인테리어 솔루션을 제공하고
          있습니다. <br /> <br />
          오랜 경험과 노하우를 가진 인도네시아 현지팀이 직접 시공을 담당하여, 공장, 식당, 사무실 등 다양한 공간을 고객의
          요구에 맞춰 완벽하게 구현해 드립니다. 복잡한 현지 사정에 대한 이해를 바탕으로, 고품질의 마감재와 가구를
          합리적인 가격으로 제공합니다. <br /> <br />
          단순히 시공만 하는 것이 아닙니다. 디자인 단계부터 고객과 긴밀하게 소통하며, 공간의 목적과 분위기에 맞는 맞춤형
          가구, 소품, 자재를 직접 제작하여 제공합니다. <br /> <br />
        </DetailContent>
      </article>
    </main>
  );
}
