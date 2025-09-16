import { ReactNode } from 'react';

const DetailContent = ({ children }: { children: ReactNode }) => {
  return <p className='text-lg leading-8'>{children}</p>;
};

export default DetailContent;
