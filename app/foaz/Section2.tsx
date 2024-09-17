import { FC } from 'react';
import Image from 'next/image';

import bg_2_m from '../../public/images/foaz/bg_2_m.svg';
import bg_2_d from '../../public/images/foaz/bg_2_d.svg';
import shape from '../../public/images/foaz/shape.svg';
import section_3 from '../../public/images/foaz/section_3.svg';
import section_4_m from '../../public/images/foaz/section_4_m.png';
import section_4_d from '../../public/images/foaz/section_4_d.svg';
import Conversation from '@/components/Conversation';

type Section2Props = {};

const Section2: FC<Section2Props> = ({}) => {
  return (
    <div className='relative flex flex-col gap-24 pb-20 pt-40 lg:gap-60 lg:pt-[40dvh]'>
      <section className='relative z-20'>
        <div className='container flex max-w-[1040px] flex-col gap-9 md:flex-row md:items-center md:justify-between md:gap-8 md:px-5 xl:px-0'>
          <header className='mx-auto flex w-full max-w-[362px] shrink-0 flex-col gap-4 px-5 md:order-last md:px-0 lg:mx-0 lg:max-w-[490px] lg:gap-6'>
            <h2 className='max-w-[21rem] text-3xl font-bold leading-[1.4] md:max-w-md md:text-4xl'>
              Free yourself from backend dependencies.
            </h2>
            <div className='flex flex-col gap-3 font-medium lg:text-[22px]'>
              <p>
                Say goodbye to creating, managing, or spending money on hosting
                a backend server. Focus on your product while improving
                security.
              </p>
              <p>
                FoAz acts as your backend proxy, safely injects API tokens, and
                enforces permissions for you - providing all you need to move
                fast and safe.
              </p>
            </div>
          </header>
          <figure className='mx-auto w-[356px] max-w-[92vw] md:mx-0 md:w-auto md:max-w-none'>
            <Image
              className=''
              alt=''
              src={section_3}
              quality={100}
              unoptimized
            />
          </figure>
        </div>
      </section>
      <div className='relative z-20 flex flex-col gap-10'>
        <section>
          <div className='container flex max-w-[1040px] flex-col gap-9 md:flex-row md:items-center md:gap-0 md:px-5 xl:px-0'>
            <header className='mx-auto flex w-full max-w-[362px] shrink-0 flex-col gap-4 px-5 md:mr-20 md:px-0 lg:max-w-[446px] lg:gap-6'>
              <h2 className='max-w-[300px] text-3xl font-bold leading-[1.4] md:text-4xl lg:max-w-none'>
                Fast, Efficient,
                <br />
                No-code UI.
              </h2>
              <div className='flex max-w-[324px] flex-col gap-3 font-medium lg:max-w-[436px] lg:text-[22px]'>
                <p>
                  FoAz is THE fastest way to integrate permissions into your
                  frontend application.
                </p>
                <p className='max-w-[280px] md:max-w-sm'>
                  Save a ton of time and dramatically increase your development
                  velocity with its easy to use no-code UI.
                </p>
              </div>
              <div className='mt-2 hidden lg:block'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  className='get_started rounded-full bg-theme_black2 px-5 py-3 text-base font-bold text-white transition hover:bg-opacity-60 md:text-xl'
                  href='https://docs.permit.io/frontend-only-authz/overview'>
                  CHECK OUT THE DOCS
                </a>
              </div>
            </header>
            <figure className='flex w-full justify-end md:hidden'>
              <Image
                className='w-full max-w-[95%]'
                alt=''
                src={section_4_m}
                quality={100}
              />
            </figure>
            <figure className='hidden w-full max-w-[600px] md:block'>
              <Image
                className='max-w-none'
                alt=''
                src={section_4_d}
                quality={100}
                unoptimized
              />
            </figure>

            <div className='mt-2 flex w-full items-center justify-center px-5 lg:hidden'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                className='get_started rounded-full bg-theme_black2 px-5 py-3 text-base font-bold text-white transition hover:bg-opacity-60 md:text-xl'
                href='https://docs.permit.io/frontend-only-authz/overview'>
                CHECK OUT THE DOCS
              </a>
            </div>
          </div>
        </section>
        <Conversation />
      </div>

      {/* bg stuff */}
      <Image
        alt=''
        quality={100}
        src={bg_2_m}
        unoptimized
        className='absolute left-0 top-0 z-10 w-full md:hidden'
      />
      <Image
        alt=''
        quality={100}
        src={bg_2_d}
        unoptimized
        className='absolute left-0 top-10 z-10 hidden w-full md:block'
      />
      <Image
        alt=''
        quality={100}
        src={shape}
        unoptimized
        className='absolute top-16 z-10 hidden lg:-left-[2vw] lg:block xl:left-[10vw] 2xl:left-[20vw]'
      />
    </div>
  );
};

export default Section2;
