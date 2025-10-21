import Image from 'next/image';
import Link from 'next/link';

const MainSection = () => {
  return (
    <>
      <section className='max-w-screen-xl mx-auto py-16 px-4 max-[500px]:py-8'>
        <h2 className='text-3xl font-bold text-gray-900 text-center mb-4 max-[500px]:text-2xl max-[500px]:text-left'>
          우리의 다양한 서비스를 통해 더 넓은 세상과 소통할 수 있습니다
        </h2>
        <p className='text-lg text-gray-600 text-center mb-16 max-[500px]:text-md max-[500px]:text-left max-[500px]:mb-8'>
          전문적인 서비스와 품질로 고객의 만족을 최우선으로 합니다
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {SECTION_INFO.map((section) => (
            <Link
              href={section.href}
              key={section.title.id}
              className='bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden'
            >
              <div className='w-full h-60 max-[500px]:h-48'>
                <Image
                  src={section.image}
                  alt={section.title.label}
                  width={400}
                  height={300}
                  className='w-full h-full object-cover'
                />
              </div>

              <div className='p-6 text-center max-[500px]:text-left max-[500px]:p-4'>
                <h3 className='text-xl font-bold text-gray-900 mb-3 hover:text-quaternary-600 transition-colors'>
                  {section.title.label}
                </h3>

                <p className='text-gray-600 leading-relaxed text-sm mb-4'>{section.description}</p>

                <span className='inline-flex items-center text-quaternary-600 hover:text-quaternary-800 font-medium text-sm transition-colors'>
                  자세히 보기
                  <svg className='w-4 h-4 ml-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <div className='relative h-[280px] max-[500px]:h-[200px]'>
        <Image src='/images/main/bottom.jpeg' alt='bottom-image' fill className='object-cover' />
      </div>
    </>
  );
};

export default MainSection;

const SECTION_INFO = [
  {
    title: {
      id: 'furniture',
      label: '가구 제조',
    },
    href: '/furniture',
    tag: null,
    image: '/images/main/furniture.jpeg',
    description: `내수 및 수출용 가구를 안정적으로 공급하며, 고품질의 제품으로 고객의 만족을 최우선으로 합니다.`,
  },
  {
    title: {
      id: 'interior',
      label: '인테리어',
    },
    href: '/interior',
    tag: null,
    image: '/images/main/interior.jpeg',
    description: `다양한 인테리어 공사 프로젝트를 통해 고객의 공간을 아름답게 변화시킵니다.`,
  },
  {
    title: {
      id: 'palette',
      label: '팔레트 공급',
    },
    href: '/palette',
    tag: null,
    image: '/images/main/palette.jpeg',
    description: `KCC GLASS 특수 팔레트를 합리적인 가격으로 대량 공급하며 업계의 신뢰를 이어가고 있습니다.`,
  },
];
