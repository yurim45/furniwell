import ContactUs from '@/components/contactUs';
import Footer from '@/components/footer';
import Header from '@/components/header';
import MainSection from '@/components/mainSection';
import MainTop from '@/components/mainTop';

export default function Home() {
  return (
    <>
      <Header />

      {/* Section with Image Background */}
      <MainTop />

      {/* Main Content */}
      <main className='flex-1 bg-white'>
        <ContactUs />
        <MainSection />
      </main>

      <Footer />
    </>
  );
}
