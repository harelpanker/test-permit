import { FC } from 'react';
import Image from 'next/image';

type BenefitProps = {
  src: string;
  name: string;
  text: string;
  styles: string;
};

const Benefit: FC<BenefitProps> = ({ src, name, text, styles }) => {
  return (
    <li className='flex flex-col items-center gap-6 font-semibold lg:flex-row xl:gap-12'>
      <div className='flex h-44 w-44 flex-initial shrink-0 items-center justify-center rounded-full bg-white transition duration-500 hover:shadow-video'>
        <Image src={src} alt='decorative' />
      </div>
      <div className='flex flex-col items-center gap-5 text-center lg:items-start lg:text-left'>
        <h3 className='text-2xl font-bold md:text-4xl lg:text-3xl'>{name}</h3>
        <p className={`text-lg lg:text-[22px] ${styles}`}>{text}</p>
      </div>
    </li>
  );
};

export default Benefit;
