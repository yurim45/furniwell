import ContactUs from '@/components/contactUs';
import MainTop from '@/components/mainTop';

export default function Home() {
  return (
    <>
      {/* Section with Image Background */}
      <MainTop />

      {/* Main Content */}
      <main className='flex-1 bg-white'>
        <ContactUs />
        {/* <MainSection /> */}
      </main>
    </>
  );
}
