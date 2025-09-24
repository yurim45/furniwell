import { ReactNode } from 'react';

const ContentArticle = ({ children }: { children: ReactNode }) => {
  return <article className='p-8 max-[500px]:p-4'>{children}</article>;
};

export default ContentArticle;
