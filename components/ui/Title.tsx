import { FC } from 'react';
import { cn } from '@/lib/utils';

type TitleProps = {
  children: React.ReactNode;
  styles?: string;
  size: 26 | 36; // size of desktop
};

const Title: FC<TitleProps> = ({ children, styles, size }) => {
  return (
    <div
      className={cn(
        `text-balance font-poppins font-semibold tracking-[-1px] ${
          size === 26 ? 'text-lg lg:text-[1.625rem] lg:leading-snug' : ''
        } ${size === 36 ? 'text-[1.625rem] lg:text-4xl' : ''}`,
        styles
      )}>
      {children}
    </div>
  );
};

export default Title;
