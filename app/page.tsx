import ContactUs from '@/components/contactUs';
import Footer from '@/components/footer';
import Header from '@/components/header';
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
        <div>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>회사 소개</h2>
        </div>
      </main>

      <Footer />
    </>
  );
}
