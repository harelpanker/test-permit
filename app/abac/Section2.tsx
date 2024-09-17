import { FC } from 'react';
import Image from 'next/image';
import image1 from '/public/images/abac/1.png';
import image2 from '/public/images/abac/2.png';

type Section2Props = {};

const Section2: FC<Section2Props> = ({}) => {
  return (
    <section className='relative px-5 py-10 text-center text-sm xl:py-20 xl:text-left xl:text-xl'>
      <div className='container flex w-full max-w-7xl flex-col items-center justify-between gap-10 xl:flex-row '>
        <div className=' order-last flex flex-col gap-7 xl:order-first'>
          <div className='flex flex-col gap-8 xl:pl-14'>
            <div className='flex flex-col gap-5'>
              <h2 className='text-3xl font-bold text-theme_purple md:text-5xl'>
                Scale Seamlessly
              </h2>
              <p className='w-full max-w-[390px] opacity-60'>
                Move <b>from RBAC to ABAC</b> with little effort as your
                permissions needs grow and become more complex and contextual
              </p>
            </div>
            <div className='flex flex-col gap-3 xl:hidden'>
              <figure className='flex items-center justify-center overflow-hidden rounded-xl shadow-lg'>
                <Image src={image1} alt='' />
              </figure>
              <figure className='flex items-center justify-center overflow-hidden rounded-xl shadow-lg'>
                <Image src={image2} alt='' />
              </figure>
            </div>
            <a
              href='https://app.permit.io/?utm_source=website&utm_medium=website-abac&utm_campaign=abac'
              className='get_started font-semibold text-theme_purple transition hover:opacity-70'>
              Start now
            </a>
          </div>
        </div>

        <div className='hidden flex-col gap-7 xl:flex'>
          <figure className='flex items-center justify-center overflow-hidden rounded-xl shadow-lg'>
            <Image src={image1} alt='' />
          </figure>
          <figure className='flex items-center justify-center overflow-hidden rounded-xl shadow-lg'>
            <Image src={image2} alt='' />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Section2;
