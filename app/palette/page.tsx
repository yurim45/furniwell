import Image from 'next/image';

import Contents from './components/contents';

export default function PalettePage() {
  return (
    <main className='max-w-screen-xl mx-auto'>
      <section className='relative flex flex-col items-center justify-center w-full h-[500px] overflow-hidden max-[500px]:h-[280px]'>
        <Image src='/images/palette/main_top.jpeg' alt='팔렛트 제품' fill className='object-cover' priority />
        <p className='relative text-lg mb-2 text-center text-white drop-shadow-2xl'>
          국내, 수출용 목재팔렛트 제작 전문 업체
        </p>
        <h1 className='relative text-4xl font-bold text-center text-white drop-shadow-2xl'>팔렛트</h1>
      </section>
      <Contents />
    </main>
  );
}
