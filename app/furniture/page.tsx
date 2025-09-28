import Image from 'next/image';

import Contents from './components/contents';

export default function FurniturePage() {
  return (
    <main>
      <section className='relative flex flex-col items-center justify-center w-full h-[500px] overflow-hidden max-[500px]:h-[280px]'>
        <Image
          src='/images/furniture/main_top.jpeg'
          alt='아웃도어 가구 제품'
          fill
          className='object-cover'
          style={{ objectPosition: 'center 70%' }}
          priority
        />
        <p className='relative text-lg mb-2 text-center text-white drop-shadow-2xl'>
          국내, 수출용 목재/엔틱 가구 제작 전문 업체
        </p>
        <h1 className='relative text-4xl font-bold text-center text-white drop-shadow-2xl'>가구</h1>
      </section>
      <Contents />
    </main>
  );
}
