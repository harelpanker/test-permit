import Image from 'next/image';
import CTAButton from '@/components/ui/CTAButton';
import HeroBG from './HeroBG';

import hero_image from '/public/images/rebac/1.png';
import hero_image_mobile from '/public/images/rebac/11.png';

const Hero = () => {
  return (
    <section className='relative overflow-hidden bg-[#fdede1] px-5 py-9 pb-16 text-center md:py-20 lg:px-12 lg:text-left'>
      <div className='container relative z-20 flex w-full max-w-[990px] flex-col items-center justify-between gap-6 lg:flex-row'>
        {/* content */}
        <div className='flex w-full max-w-[456px] flex-col items-center gap-3 md:gap-6 lg:items-start'>
          <div className='flex flex-col gap-3 md:gap-4'>
            <h2 className='hidden text-lg font-bold uppercase text-[#A18072] lg:block'>
              <span className='lg:block'>Relationship-Based Access</span>{' '}
              Control with Permit
            </h2>
            <h2 className='text-sm font-bold uppercase text-[#A18072] lg:hidden'>
              Relationship Based Access Control
            </h2>
            <h1 className='w-full max-w-xs text-3xl font-bold leading-tight text-theme_purple lg:max-w-full lg:text-4xl'>
              <span className='lg:block'>Implementing ReBAC</span> has never
              been easier
            </h1>
          </div>
          <p className='w-full max-w-[286px] text-lg font-medium text-[#43302B] lg:max-w-full lg:text-[22px]'>
            Manage access in your app based on relationships between users and
            resources with an easy-to-use, low-code interface
          </p>
          <CTAButton
            text='Start Now'
            bgColor='purple'
            link='https://app.permit.io/?utm_source=website&utm_medium=website-rebac'
          />
        </div>
        {/* image */}
        <figure className='w-full max-w-[480px]'>
          <Image
            className='hidden lg:block'
            src={hero_image}
            alt=''
            priority
            quality={100}
          />
          <Image
            className='mx-auto w-full max-w-xs lg:hidden'
            src={hero_image_mobile}
            alt=''
            priority
            quality={100}
          />
        </figure>
      </div>
      {/* bg */}
      <HeroBG />
    </section>
  );
};

export default Hero;
