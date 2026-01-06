import { getTranslations } from 'next-intl/server';

const Footer = async () => {
  const t = await getTranslations('footer');

  return (
    <footer className='bg-primary-950 text-gray-400 text-xs max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-[100px]'>
      <p className='text-lg text-center font-light text-quaternary-950'>{t('footer_title')}</p>
      <p className='text-2xl text-center font-semibold text-quaternary-950'>{t('footer_title_2')}</p>

      <div className='mt-8 pt-8 border-t border-quaternary-950/20 space-y-1 text-center'>
        <ul className='flex flex-wrap items-center justify-start md:justify-center gap-y-1'>
          {FOOTER_MENU.map((menu, index) => (
            <li key={index} className='text-secondary-500 text-left'>
              {t(menu)}
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

const FOOTER_MENU = ['footer_menu', 'footer_menu_2', 'footer_menu_3', 'footer_menu_4', 'footer_menu_5'];
