import { getTranslations } from 'next-intl/server';

const ContactUs = async () => {
  const t = await getTranslations('contact');

  return (
    <section className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center'>
      <h3 className='mb-4 text-2xl font-bold text-quaternary-900'>{t('contact_us_title')}</h3>
      <ul className='text-primary-950 text-md leading-8 mb-4'>
        <li>
          <strong className={STYLE_STRONG}>{t('contact_us_email')}</strong>: furniwell2002@gmail.com /
          furniwellkorea@naver.com
        </li>
        <li>
          <strong className={STYLE_STRONG}>{t('contact_us_mobile')}</strong>: indonesia +62 813 250 96078 / +62 822 303
          86996
        </li>
        <li>
          <strong className={STYLE_STRONG}>{t('contact_us_kakao')}</strong>: furniwell / parkindo1957
        </li>
        {/* <li>
          <strong className={STYLE_STRONG}>{t('contact_us_whatsapp')}</strong>: -
        </li> */}
      </ul>
      <p
        className='text-tertiary-950 text-lg leading-8'
        dangerouslySetInnerHTML={{ __html: t('contact_us_description') }}
      />
    </section>
  );
};

export default ContactUs;

const STYLE_STRONG = 'text-quaternary-600';
