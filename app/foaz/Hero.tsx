import Image from 'next/image';

import hero_image_d from '../../public/images/foaz/hero_d.svg';
import hero_image_m from '../../public/images/foaz/hero_m.png';
import hero_bg_m from '../../public/images/foaz/hero_bg_m.svg';
import hero_bg_d from '../../public/images/foaz/hero_bg_d.svg';

const Hero = () => {
  return (
    <section className='relative -mt-[70px] pb-32 pt-28 text-center lg:-mt-[90px] lg:pb-8 lg:pt-52'>
      <div className='container relative z-10 flex max-w-[1120px] flex-col gap-6 md:gap-2'>
        {/* hero header */}
        <div className='px-5'>
          <header className='mx-auto flex max-w-[360px] flex-col items-center gap-4 md:max-w-[448px] lg:gap-6'>
            <div className='flex flex-col gap-4'>
              <h2 className='text-lg font-bold tracking-[2px] text-theme_purple'>
                FoAz:{' '}
                <span className='uppercase lg:inline-block'>
                  Frontend Only
                  <br className='lg:hidden' /> Authorization
                </span>
              </h2>
              <h1 className='text-3xl font-bold text-[#451E11] md:text-5xl md:text-[#20134B]'>
                Use secure APIs
                <br />
                from the frontend
              </h1>
            </div>
            <p className='font-semibold'>
              FoAz proxy accepts API calls, verifies identity, checks for
              permissions, and adds secrets - allowing secure use of APIs with
              granular permissions directly from the frontend.
            </p>
            {/* button */}
            <a
              className='rounded-full bg-[#974EF2] px-5 py-3 text-lg font-bold text-[#FDFDFC] transition duration-300 hover:opacity-70'
              href='https://app.permit.io/'>
              Get Started
            </a>
          </header>
        </div>
        {/* hero Image */}
        <figure className='flex w-full justify-end md:hidden'>
          <Image
            className='max-w-[90%]'
            alt=''
            priority
            src={hero_image_m}
            quality={100}
            unoptimized
          />
        </figure>
        <div className='hidden px-5 md:block xl:px-0'>
          <figure>
            <Image
              alt=''
              priority
              src={hero_image_d}
              quality={100}
              unoptimized
            />
          </figure>
        </div>
      </div>
      {/* bg mobile */}
      <Image
        className='absolute left-0 top-0 z-0 h-full w-full object-cover object-bottom md:hidden'
        alt=''
        src={hero_bg_m}
        quality={100}
        unoptimized
      />

      {/* bg desktop */}
      <Image
        className='absolute left-0 top-0 z-0 hidden h-full w-full object-cover object-bottom md:block'
        alt=''
        src={hero_bg_d}
        quality={100}
        unoptimized
      />
    </section>
  );
};

export default Hero;
