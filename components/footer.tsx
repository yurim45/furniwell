const Footer = () => {
  return (
    <footer className='bg-primary-950 text-gray-400 text-xs max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      <p className='text-2xl text-center font-semibold text-quaternary-950'>PT. FURNIWELL MAKMUR ABADI</p>

      <div className='mt-8 pt-8 border-t border-quaternary-950/20 space-y-1 text-center'>
        <ul className='flex flex-wrap items-center justify-start md:justify-center gap-y-1'>
          {FOOTER_MENU.map((menu, index) => (
            <li key={index}>
              {menu}
              {index !== FOOTER_MENU.length - 1 && <span className='mx-2 text-quaternary-950/20'>| </span>}
            </li>
          ))}
        </ul>
        <p className='mt-[50px] text-quaternary-950 font-thin'>© 2025 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

const FOOTER_MENU = [
  '퍼니웰코리아',
  '박준호',
  '경기도 파주시 야당동 427-6 나동',
  '사업자등록번호: 497-01-00458',
  '전화번호: 031-941-5308',
  '이메일: PARKINDO@NAVER.COM',
];
