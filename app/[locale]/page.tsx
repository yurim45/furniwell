import ContactUs from '@/components/contactUs';
import MainSection from '@/components/mainSection';
import MainTop from '@/components/mainTop';

export default function Home() {
  return (
    <>
      {/* Section with Image Background */}
      <div className='pt-[80px] max-[500px]:pt-[60px]'></div>
      <MainTop />

      {/* Main Content */}
      <main className='flex-1 bg-white'>
        <MainSection />

        <ContactUs />
      </main>
    </>
  );
}
