import { MENU } from '@/const/menu';

interface NavigationProps {
  isScrolled: boolean;
}

const Navigation = ({ isScrolled }: NavigationProps) => {
  return (
    <>
      <nav className='hidden md:flex space-x-8'>
        {MENU.map((menu) => (
          <a
            key={menu.name.id}
            href={menu.href}
            className={`transition-colors duration-200 ${
              isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-200'
            }`}
          >
            {menu.name.label}
          </a>
        ))}
      </nav>
      {/* Mobile Menu Button */}
      <div className='md:hidden'>
        <button
          className={`transition-colors duration-200 ${
            isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-200'
          }`}
        >
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Navigation;
