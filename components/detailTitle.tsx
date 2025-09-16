import { ReactNode } from 'react';

const DetailTitle = ({ children }: { children: ReactNode }) => {
  return <h2 className='py-4 text-2xl font-bold text-primary-600'>{children}</h2>;
};

export default DetailTitle;
