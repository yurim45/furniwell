import Image from 'next/image';
import Link from 'next/link';

const MainSection = () => {
  return SECTION_INFO.map((section) => (
    <section key={section.title.id} className='px-4 pt-10 pb-16'>
      <header className='flex justify-between items-center border-b-1 border-solid border-quaternary-300'>
        <h3 className='text-quaternary-400 text-2xl font-bold border-b-2 border-solid border-quaternary-400 cursor-pointer'>
          <Link href={section.href}>{section.title.label}</Link>
        </h3>
        <small className='text-quaternary-400 text-sm cursor-pointer'>
          <Link href={section.href}>more</Link>
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
          <p className='whitespace-pre-line'>{section.description}</p>
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
    description: `(주)퍼니웰은 1998년 창립 이래 다양한 인테리어 공사 프로젝트와 더불어 내수 및 수출용 가구를 안정적으로 공급해왔습니다. 또한, KCC GLASS 특수 팔레트를 합리적인 가격으로 대량 공급하며 업계의 신뢰를 이어가고 있습니다.
    
        국내는 물론 전 세계 바이어와의 직접 수출을 통해 효율적인 가격 경쟁력과 원활한 커뮤니케이션을 강점으로 삼고 있으며, 앞으로도 글로벌 파트너들과의 성공적인 협업을 기대합니다.`,
  },
];
