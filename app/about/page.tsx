// import ContactUs from '@/components/contactUs';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className='max-w-screen-xl mx-auto pt-[100px] px-[32px] flex flex-col items-center'>
      <div className='w-full border-b-1 border-solid border-quaternary-300'>
        <h2 className='inline-block text-quaternary-600 text-xl font-bold border-b-2 border-solid border-quaternary-300 text-left'>
          회사소개
        </h2>
      </div>
      <Image src='/images/logo.png' alt='logo' width={500} height={400} />
      <p className='max-w-[1100px]'>
        우리는 1998년 창립 이래 인도네시아를 거점으로 B2B 대상 가구 수출, 인테리어 프로젝트, 목재 포장재를 공급하고
        있습니다.
        <br />
        국내는 물론 전 세계 바이어와의 직접 수출을 통해 효율적인 가격 경쟁력과 원활한 커뮤니케이션을 강점으로 삼고
        있으며 앞으로도 글로벌 파트너들과의 성공적인 협업을 기대합니다.
        <br /> <br />
      </p>
      <div className='w-full max-w-[1100px] text-right'>대표이사 박종만</div>

      <section className='my-[180px] w-full flex flex-col items-center'>
        <h3 className={STYLE_SUB_TITLE}>ABOUT US</h3>
        {/* CEO */}
        <div className='mt-8 flex flex-col md:flex-row items-center gap-8 md:gap-12'>
          <Image
            src='/images/common/ceo.png'
            alt='CEO-PARK JONG MAN'
            width={200}
            height={200}
            className={STYLE_IMAGE}
          />

          <div className='text-left'>
            <h4 className={STYLE_NAME}>박종만 PARK JONG MAN</h4>
            <p className='text-md text-primary-600 mb-4'>CEO</p>
            <ul className='space-y-2 text-gray-600 text-sm'>
              {CAREER_HISTORY_CEO.map((item, index) => (
                <li key={index} className='flex items-start'>
                  <span className='text-primary-500 font-semibold w-[180px]'>{item.period}</span>
                  <span className='flex-1'>{item.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* MANAGER */}
        {/* <div className='mt-[100px] flex flex-col md:flex-row items-center gap-8 md:gap-12'>
          <Image
            src='/images/common/manager.jpeg'
            alt='MANAGER-PARK JUN HO'
            width={200}
            height={200}
            className={STYLE_IMAGE}
          />

          <div className='text-left'>
            <h4 className={STYLE_NAME}>박준호 PARK JUN HO</h4>
            <p className='text-md text-primary-600 mb-4'>MANAGER</p>
            <ul className='space-y-2 text-gray-600 text-sm'>
              {CAREER_HISTORY_MANAGER.map((item, index) => (
                <li key={index} className='flex items-start'>
                  <span className='text-primary-500 font-semibold w-[180px]'>{item.period}</span>
                  <span className='flex-1'>{item.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div> */}
      </section>

      <div className={STYLE_DIVIDER} />

      {/* <ContactUs /> */}

      <div className={STYLE_DIVIDER} />

      <section className='my-[100px] w-full'>
        <h3 className={STYLE_SUB_TITLE}>ADDRESS</h3>
        <Image src='/images/about/address.jpeg' alt='address' width={1280} height={508} className='my-8' />
        {ADDRESS_INFO.map((item, index) => (
          <div key={index} className='my-4'>
            <h4 className='text-primary-950 text-xl font-bold text-left leading-10'>{item.title}</h4>
            <p>{item.address}</p>
          </div>
        ))}
      </section>

      {/* <section className='my-[100px] w-full'>
        <h3 className={STYLE_SUB_TITLE}>OUR TECHNICIAN TEAM</h3>
        <p className='text-quaternary-900 my-4'>
          목공예, 암수짜임, 천연원료마감 등 가구를 만드는 전과정이 CV.ARIRANG 목공장인들을 통해 수제작으로 이루어 집니다
        </p>
        <Image
          src='/images/about/technician_team.png'
          alt='technician_team'
          width={1280}
          height={508}
          className='my-8'
        />
      </section>

      <section className='my-[100px] w-full'>
        <h3 className={STYLE_SUB_TITLE}>HISTORY[국제가구전시회]</h3>

        {HISTORY_INFO.map((item, index) => (
          <div key={index}>
            <strong className='text-tertiary-950 text-md text-left'>{item.title}</strong>
            <div key={index} className='mb-8 flex gap-4 flex-col md:flex-row'>
              <Image src={item.image1} alt={item.title} width={1280} height={508} />
              <Image src={item.image2} alt={item.title} width={1280} height={508} />
            </div>
          </div>
        ))}
      </section> */}
    </main>
  );
}

const CAREER_HISTORY_CEO = [
  { period: 'From February 2002 until now', detail: 'PT.Furniwell Sinar Jaya / CEO (INDONESIA)' },
  { period: 'From February 2002 until April 2008', detail: 'Furniwell / CEO (KOREA)' },
  { period: 'From February 1995 until February 2002', detail: 'CHL Korea Co.Ltd Adbill' },
  { period: 'From April 1989 until February 1995', detail: 'Samsung Credit Card Co.Ltd' },
  { period: 'From March 1984 until April 1989', detail: 'NH BANK Worked' },
];
// const CAREER_HISTORY_MANAGER = [{ period: 'From May 2008 until now', detail: 'Furniwell / CEO (KOREA)' }];

const ADDRESS_INFO = [
  {
    title: 'Showrooom[Jakarta]',
    address: 'JI. Kembang Permai I Blok 15 No.21 Puri Kembangan - Jakarta Barat Indonesia',
  },
  {
    title: 'Workshop[Jepara]',
    address: 'JI. Sunan Mantingan RT.01 RW.02 Tapael Batas Langon - Ngabul Jepara - Central Java',
  },
];

// const HISTORY_INFO = [
//   {
//     title: 'IFEX 2017',
//     image1: '/images/about/history1.jpeg',
//     image2: '/images/about/history2.jpeg',
//   },
//   {
//     title: 'Mozaik 2016',
//     image1: '/images/about/history3.jpeg',
//     image2: '/images/about/history4.jpeg',
//   },
//   {
//     title: 'JIFFINA 2016 ',
//     image1: '/images/about/history5.jpeg',
//     image2: '/images/about/history6.jpeg',
//   },
// ];

const STYLE_NAME = 'w-full md:w-[460px] text-xl font-bold text-gray-800';
const STYLE_IMAGE = 'flex-shrink-0 rounded-full object-cover w-[150px] h-[150px] md:w-[200px] md:h-[200px] shadow-lg';
const STYLE_DIVIDER = 'w-full border-t-1 border-dashed border-quaternary-400';
const STYLE_SUB_TITLE =
  'w-full text-quaternary-600 text-lg font-bold border-b-2 border-solid border-quaternary-300 text-left';
