const ContactUs = () => {
  return (
    <section className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center'>
      <h3 className='mb-4 text-2xl font-bold text-quaternary-900'>[ Contact us ]</h3>
      <ul className='text-primary-950 text-md leading-8 mb-4'>
        <li>
          <strong className={STYLE_STRONG}>Email</strong>: furniwell2002@gmail.com
        </li>
        <li>
          <strong className={STYLE_STRONG}>Mobile</strong>: indonesia +62 813 250 96078
        </li>
        <li>
          <strong className={STYLE_STRONG}>Kakao talk</strong>: parkindo1957
        </li>
        <li>
          <strong className={STYLE_STRONG}>WhatApp</strong>: -
        </li>
      </ul>
      <p className='text-tertiary-950 text-lg leading-8'>
        연중 대부분을 인도네시아 공장에 상주하므로 현지 모바일로 연락주시길 바랍니다. <br />
        이메일 또는 카카오톡이나 왓츠앱 추가 후 보이스톡으로도 문의가 가능합니다.
      </p>
    </section>
  );
};

export default ContactUs;

const STYLE_STRONG = 'text-quaternary-600';
