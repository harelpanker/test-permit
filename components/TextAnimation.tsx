import { FC } from 'react';
import './text-animation.css';

type TextAnimationProps = {
  children: React.ReactNode;
};

const TextAnimation: FC<TextAnimationProps> = ({ children }) => {
  return (
    <span className='animate-gradient bg-gradient-to-r from-[#974EF2] to-[#FF953F] bg-clip-text text-transparent'>
      {children}
    </span>
  );
};

export default TextAnimation;
