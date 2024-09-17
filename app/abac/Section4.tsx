import { FC } from 'react';
import Image from 'next/image';
import image4 from '/public/images/abac/4.png';

type Section4Props = {};

const Section4: FC<Section4Props> = ({}) => {
  return (
    <section className='relative px-5 py-10 text-center text-sm xl:py-20 xl:text-left xl:text-xl'>
      <div className='container flex w-full max-w-7xl flex-col items-center justify-between gap-10 xl:flex-row '>
        <div className=' order-last flex flex-col gap-7 xl:order-first'>
          <div className='flex flex-col gap-8 xl:pl-14'>
            <div className='flex flex-col gap-5'>
              <h2 className='text-3xl font-bold text-theme_purple md:text-5xl'>
                Save Significant Time
              </h2>
              <p className='w-full max-w-[505px] opacity-60'>
                Save time, effort and complexity versus building and maintaining
                yourself while empowering other stakeholders with no code
                interfaces.
              </p>
            </div>
            <figure className='flex items-center justify-center overflow-hidden rounded-lg shadow-lg xl:hidden'>
              <Image src={image4} alt='' />
            </figure>
            <a
              href='https://app.permit.io/?utm_source=website&utm_medium=website-abac&utm_campaign=abac'
              className='get_started font-semibold text-theme_purple transition hover:opacity-70'>
              Start now
            </a>
          </div>
        </div>

        <figure className='hidden items-center justify-center overflow-hidden rounded-lg shadow-lg xl:flex'>
          <Image src={image4} alt='' />
        </figure>
      </div>
    </section>
  );
};

export default Section4;
