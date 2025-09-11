import Image from 'next/image';

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
    </main>
  );
}
