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
        <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>회사 소개</h2>
          <p className='text-gray-600'>환영합니다!</p>
        </div>
      </main>

      <Footer />
    </>
  );
}
