import Image from 'next/image';

import section_1_m from '../../public/images/foaz/section_1_m.png';
import section_1_d from '../../public/images/foaz/section_1_d.svg';
import section_2_m from '../../public/images/foaz/section_2_m.svg';
import section_2_d from '../../public/images/foaz/section_2_d.svg';

const Section1 = () => {
  return (
    <div className='flex flex-col gap-24 pt-8 text-[#451E11] lg:gap-32 lg:pt-24'>
      <section>
        <div className='container flex max-w-[1040px] flex-col gap-9 md:flex-row md:items-center md:gap-0 md:px-5 xl:px-0'>
          <header className='mx-auto flex w-full max-w-[362px] shrink-0 flex-col gap-4 px-5 md:mr-24 md:px-0 lg:mx-0 lg:mr-40 lg:max-w-[490px] lg:gap-6'>
            <h2 className='max-w-[22rem] text-3xl font-bold leading-[1.4] md:text-4xl'>
              Use 3rd party APIs without glue-code.
            </h2>
            <div className='flex flex-col gap-3 font-medium lg:text-[22px]'>
              <p>
                Call any external service directly from the frontend without
                writing any backend logic.
              </p>
              <p>
                Add new capabilities to your app seamlessly and securely by
                integrating any third-party APIs.
              </p>
            </div>
          </header>
          <figure className='w-full md:hidden'>
            <Image className='w-full' alt='' src={section_1_m} quality={100} />
          </figure>
          <figure className='hidden w-full max-w-[600px] md:block'>
            <Image
              className='max-w-none'
              alt=''
              src={section_1_d}
              quality={100}
              unoptimized
            />
          </figure>
        </div>
      </section>
      <section>
        <div className='container flex max-w-[1040px] flex-col gap-9 md:flex-row md:items-center md:gap-0 md:px-5 xl:px-0'>
          <header className='mx-auto flex w-full max-w-[362px] shrink-0 flex-col gap-4 px-5 md:mr-10 md:px-0 lg:mx-0 lg:mr-16 lg:max-w-[538px] lg:gap-6'>
            <h2 className='max-w-[300px] text-3xl font-bold leading-[1.4] md:text-4xl lg:max-w-none'>
              Slap on granular permissions to protect your APIs.
            </h2>
            <div className='flex max-w-[324px] flex-col gap-3 font-medium lg:max-w-[436px] lg:text-[22px]'>
              <p>
                Your APIs lack the policy your app needs? No need to re-write
                them!
              </p>
              <p>
                Wrap and protect any API call with robust authorization policies
                like RBAC, ABAC and ReBAC with just a few clicks.
              </p>
            </div>
            <div className='mt-2 hidden lg:block'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                className='get_started rounded-full bg-theme_black2 px-5 py-3 text-base font-bold text-white transition hover:bg-opacity-60 md:text-xl'
                href='https://docs.permit.io/frontend-only-authz/overview'>
                SEE HOW IT WORKS
              </a>
            </div>
          </header>
          <div className='relative'>
            <figure className='flex w-full justify-end md:hidden'>
              <Image
                className='w-full max-w-[95%]'
                alt=''
                src={section_2_m}
                quality={100}
                unoptimized
              />
            </figure>
            <figure className='hidden w-full max-w-[600px] md:block'>
              <Image
                className='max-w-none'
                alt=''
                src={section_2_d}
                quality={100}
                unoptimized
              />
            </figure>
            <div className='mt-8 flex w-full items-center justify-center px-5 lg:hidden'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                className='get_started rounded-full bg-theme_black2 px-5 py-3 text-base font-bold text-white transition hover:bg-opacity-60 md:text-xl'
                href='https://docs.permit.io/frontend-only-authz/overview'>
                SEE HOW IT WORKS
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section1;
