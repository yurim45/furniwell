import Image from 'next/image';

import Contents from './components/contents';

const PalettePage = () => {
  return (
    <main>
      <section className='relative flex flex-col items-center justify-center w-full h-[500px] overflow-hidden'>
        <Image src='/images/palette/main_palette.jpeg' alt='팔레트 제품' fill className='object-cover' priority />
        <p className='relative text-lg mb-2 text-center text-white drop-shadow-2xl'>
          국내, 수출용 목재파렛트 제작 전문 업체
        </p>
        <h1 className='relative text-4xl font-bold text-center text-white drop-shadow-2xl'>파렛트</h1>
      </section>
      <Contents />
    </main>
  );
};

export default PalettePage;
