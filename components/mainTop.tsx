import Image from 'next/image';

const MainTop = () => {
  return (
    <section className='pt-16 relative min-h-screen flex items-center overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image src='/images/common/bg-main.jpg' alt='Hero background' fill className='object-cover' priority />
        <div className='absolute inset-0 bg-gradient-to-b from-primary-950/90 to-primary-900/80'></div>
      </div>

      {/* Content */}
      <div className='relative max-w-screen-xl mx-auto px-4 text-center text-white py-20 flex flex-col items-center justify-center z-10 sm:px-6 lg:px-8'>
        <h1 className='text-5xl md:text-6xl font-bold drop-shadow-lg'>FURNIWELL</h1>
        <h3 className='text-2xl md:text-3xl mb-6 drop-shadow-lg'>MAKMUR ABADI</h3>
        <p className='text-xl md:text-2xl text-primary-200 mb-8 drop-shadow-md'>혁신적인 가구 솔루션을 제공합니다</p>
        <button className='bg-quaternary-500 hover:bg-quaternary-600 text-primary-950 font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg'>
          자세히 보기
        </button>
      </div>

      {/* Decorative Elements */}
      <div className='absolute top-1/4 left-10 w-32 h-32 bg-quaternary-300/20 rounded-full blur-xl'></div>
      <div className='absolute bottom-1/4 right-10 w-24 h-24 bg-tertiary-300/20 rounded-full blur-xl'></div>
    </section>
  );
};

export default MainTop;
