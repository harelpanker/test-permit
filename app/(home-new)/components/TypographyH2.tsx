import { FC } from 'react';

type TypographyH2Props = {
  children: React.ReactNode;
};

const TypographyH2: FC<TypographyH2Props> = ({ children }) => {
  return (
    <h2 className='font-poppins text-[26px] font-semibold tracking-[-1px] lg:text-4xl'>
      {children}
    </h2>
  );
};

export default TypographyH2;
