import Image from 'next/image';

import DetailTitle from '@/components/detailTitle';

export default function AboutPage() {
  return (
    <main className='max-w-screen-xl mx-auto pt-[100px] px-[32px] flex flex-col items-center'>
      {/* 회사소개 */}
      <section className='w-full flex flex-col items-center'>
        <h2 className={STYLE_SUB_TITLE}>회사소개</h2>
        <Image src='/images/logo.png' alt='logo' width={400} height={300} />
        <div className='my-[20px] text-center'>
          <DetailTitle>
            주식회사 퍼니웰(FUNIWELL)
            <br />
            [Since 1998] 인도네시아 현지 직영, B2B 토탈 솔루션 파트너
          </DetailTitle>
          <p className='max-w-[800px]'>
            퍼니웰(주)은 창립 이래 인도네시아를 기반으로 25년 이상 B2B 전문 사업을 수행해 왔습니다.
          </p>
        </div>

        <br />

        <div className='max-w-[550px]'>
          <div className={STYLE_DIVIDER} />
          <DetailTitle> | 주요 사업 분야</DetailTitle>
          <ul className='my-[10px]'>
            <li>- 가구 제작 및 수출: 인도어/아웃도어 가구의 정밀 제작 및 글로벌 수출</li>
            <li>- 인테리어 프로젝트: 공간을 완성하는 차별화된 맞춤형 인테리어 솔루션 제공</li>
            <li>- 목재 파렛트: 내수용 및 수출용 목재 포장재(파렛트) 대량 생산 및 공급</li>
          </ul>
          <DetailTitle> | 퍼니웰(주)의 강점</DetailTitle>
          <ul className='my-[10px]'>
            <li>- 신뢰 기반 커뮤니케이션: 원활하고 정확한 소통을 통해 고객의 요구를 완벽히 반영</li>
            <li>- 고품질 & 합리적 가격: 현지 직영의 효율성으로 정밀한 품질을 경쟁력 있는 가격에 제공</li>
            <li>- 성실한 파트너십: 모든 프로젝트에 성실함과 책임감으로 임하는 자세</li>
          </ul>

          <br />

          <div className={STYLE_DIVIDER} />
        </div>
        <p className='py-16'>
          전 세계 바이어와의 직접 수출을 통해 효율적인 가격 경쟁력과 원활한 커뮤니케이션을 강점으로 삼고 있으며 앞으로도
          글로벌 파트너들과의 성공적인 협업을 기대합니다.
        </p>
        <div className='w-full max-w-[1100px] text-right'>대표이사 박종만</div>
      </section>

      {/* 조직도 */}
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

      {/* 위치 */}
      <section className='w-full'>
        <h3 className={STYLE_SUB_TITLE}>ADDRESS</h3>
        <div className='flex flex-col items-center'>
          {Array.from({ length: 2 }, (_, index) => (
            <Image
              key={index}
              src={`/images/about/address${index + 1}.jpg`}
              alt={`location ${index + 1}`}
              width={1100}
              height={1000}
              quality={85}
              className='my-[10px]'
            />
          ))}
        </div>
        {/* {ADDRESS_INFO.map((item, index) => (
          <div key={index} className='my-4'>
            <h4 className='text-primary-950 text-xl font-bold text-left leading-10'>{item.title}</h4>
            <p>{item.address}</p>
          </div>
        ))} */}
      </section>
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

// const ADDRESS_INFO = [
//   {
//     title: 'Showrooom[Jakarta]',
//     address: 'JI. Kembang Permai I Blok 15 No.21 Puri Kembangan - Jakarta Barat Indonesia',
//   },
//   {
//     title: 'Workshop[Jepara]',
//     address: 'JI. Sunan Mantingan RT.01 RW.02 Tapael Batas Langon - Ngabul Jepara - Central Java',
//   },
// ];

const STYLE_NAME = 'w-full md:w-[460px] text-xl font-bold text-gray-800';
const STYLE_IMAGE = 'flex-shrink-0 rounded-full object-cover w-[150px] h-[150px] md:w-[200px] md:h-[200px] shadow-lg';
const STYLE_DIVIDER = 'w-full border-t-1 border-dashed border-quaternary-400';
const STYLE_SUB_TITLE =
  'w-full text-quaternary-600 text-lg font-bold border-b-2 border-solid border-quaternary-300 text-left';
