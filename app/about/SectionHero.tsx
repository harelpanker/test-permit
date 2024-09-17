import Image from 'next/image';
import PageHeroTag from '@/components/PageHeroTag';

import bg_desktop from './assets/hero_desktop.svg';
import bg_mobile from './assets/hero_mobile.svg';

const SectionHero = () => {
  return (
    <div className='relative z-10'>
      <div className='pt-20 lg:pt-[76px]' />
      <section className='relative z-20 px-4 py-[56px] text-center text-theme_orange_12 lg:py-[120px]'>
        <div className='container flex flex-col items-center gap-y-3'>
          <PageHeroTag text='Our mission at Permit' />
          <div className='flex w-full max-w-[610px]'>
            <h1
              style={{ lineHeight: 1.3 }}
              className='font-poppins text-[26px] font-semibold tracking-[-1px] lg:text-4xl'>
              Build the permissions infrastructure of the cloud -{' '}
              <span className='bg-gradient-to-r from-[#974EF2] to-[#FF953F] bg-clip-text text-transparent'>
                securely connecting developers, software, and users
              </span>
            </h1>
          </div>
        </div>
      </section>
      <Image
        priority
        className='absolute inset-0 z-10 h-full w-full object-cover lg:hidden'
        src={bg_mobile}
        alt=''
      />
      <Image
        priority
        className='absolute inset-0 z-10 hidden h-full w-full object-cover lg:block'
        src={bg_desktop}
        alt=''
      />
    </div>
  );
};

export default SectionHero;
