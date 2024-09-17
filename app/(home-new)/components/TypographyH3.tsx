import { FC } from 'react';

type TypographyH3Props = { children: React.ReactNode };

const TypographyH3: FC<TypographyH3Props> = ({ children }) => {
  return (
    <h3 className='font-poppins text-lg font-semibold leading-tight tracking-[-0.5px] text-[#A18072] lg:text-[26px]'>
      {children}
    </h3>
  );
};

export default TypographyH3;
