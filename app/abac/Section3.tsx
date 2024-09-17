import { FC } from 'react';
import Image from 'next/image';
import image3 from '/public/images/abac/3.png';

type Section3Props = {};

const Section3: FC<Section3Props> = ({}) => {
  return (
    <section className='relative px-5 py-10 text-center text-sm xl:py-20 xl:text-left xl:text-xl'>
      <div className='container flex w-full max-w-7xl flex-col items-center justify-start gap-10 xl:flex-row xl:gap-20'>
        <figure className='shadow-lg hidden items-center justify-center overflow-hidden rounded-xl xl:flex'>
          <Image src={image3} alt='' />
        </figure>

        <div className=' flex flex-col gap-7'>
          <div className='flex flex-col gap-5'>
            <h2 className='text-3xl font-bold text-theme_purple md:text-5xl'>
              Gain Flexibility
            </h2>
            <p className='w-full max-w-[390px] opacity-60'>
              Go beyond RBAC with very little effort through{' '}
              <b>auto-generated ABAC code</b> you can manage directly from your{' '}
              <b>Git repo</b>.
            </p>
          </div>
          <figure className='shadow-lg flex items-center justify-center overflow-hidden rounded-xl xl:hidden'>
            <Image src={image3} alt='' />
          </figure>
          <a
            href='https://app.permit.io/?utm_source=website&utm_medium=website-abac&utm_campaign=abac'
            className='get_started font-semibold text-theme_purple transition hover:opacity-70'>
            Start now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section3;
