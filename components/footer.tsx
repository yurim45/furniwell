const Footer = () => {
  return (
    <footer className='bg-primary-950 text-gray-400 text-xs max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      <p className='text-2xl text-center font-semibold text-quaternary-950'>PT. FURNIWELL MAKMUR ABADI</p>

      <div className='mt-8 pt-8 border-t border-quaternary-950/20 space-y-1 text-center'>
        <ul className='flex flex-wrap items-center justify-start md:justify-center gap-y-1'>
          {FOOTER_MENU.map((menu, index) => (
            <li key={index} className='text-secondary-500'>
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
  'PARK JONG MAN',
  'Mobile: +62 813 250 96078',
  'Business registration number : 99.912.123.9-516.000',
  'E-mail: furniwell2002@gmail.com',
  'Adress: JALAN BAWU-BATEALIT RT. 001 RW. 001 MINDAHAN, BATEALIT KAB. JEPARA JAWA TENGAH',
];
