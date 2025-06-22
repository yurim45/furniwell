import Image from 'next/image';

const MainSection = () => {
  return SECTION_INFO.map((section) => (
    <section key={section.title.id} className='px-4 py-8'>
      <header className='flex justify-between items-center border-b-1 border-solid border-quaternary-300'>
        <h3 className='text-quaternary-400 text-2xl font-bold border-b-2 border-solid border-quaternary-400 cursor-pointer'>
          <a href={section.href}>{section.title.label}</a>
        </h3>
        <small className='text-quaternary-400 text-sm cursor-pointer'>
          <a href={section.href}>more</a>
        </small>
      </header>

      <div className='mt-[24px] md:mt-[32px] flex flex-col gap-4 md:flex-row md:gap-8'>
        <Image
          src={section.image}
          alt={section.title.label}
          width={400}
          height={400}
          className='w-full md:w-1/2 h-auto object-contain rounded-[24px]'
        />

        <div className='w-full md:w-1/2 text-[16px] md:text-[18px] leading-8'>
          <p>{section.description}</p>
        </div>
      </div>
    </section>
  ));
};

export default MainSection;

const SECTION_INFO = [
  {
    title: {
      id: 'about',
      label: '회사소개',
    },
    href: '/about',
    tag: null,
    image: '/images/common/main_logo.jpeg',
    description:
      'CV.ARIRANG(PT법인.FURNIWELL)은 1998년 창립 이후 지금까지 유럽형 클래식 엔틱 및 Minimalis 모던원목가구 제작과 인도네시아 소품 및 커피류 수출대행을 진행하고 있습니다. 저희 회사는 국내 및 전세계 바이어와 직접 수출을 함으로써 보다 합리적이며, 원활한 커뮤니케이션이 강점으로 바이어분들과의 멋진 협업을 기대합니다.',
  },
];
