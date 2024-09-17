'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

import topIcon from '../assets/hero-section/hero-top-icon.svg';
import googleDrive from '../assets/hero-section/google-drive.png';
import airtable from '../assets/hero-section/airtable.png';
import github from '../assets/hero-section/github.png';
import notion from '../assets/hero-section/notion.png';
import bg from '../assets/hero-section/bg.svg';
import clouds from '../assets/hero-section/clouds.svg';
import TextAnimation from '@/components/TextAnimation';

const HeroSection = () => {
  const href = 'https://app.permit.io/?utm_source=website&utm_medium=website';
  const dataLayerHandler = () => {
    let dataLayer = (window as any).dataLayer;
    if (typeof window !== 'undefined') {
      dataLayer = dataLayer || [];
      dataLayer.push({
        event: 'share_if_hero_cta',
        path: window.location.href,
      });
    }
  };

  return (
    <section className='relative z-20 px-5 py-12 text-center lg:px-12 lg:py-24'>
      <div className='container relative z-30 flex max-w-[948px] flex-col items-center gap-y-9'>
        {/*  */}
        <div className='flex items-center gap-x-3 font-poppins text-2xl font-semibold tracking-tight text-[#846358]'>
          <div>Permit.io</div>
          <figure>
            <Image src={topIcon} alt='' className='max-w-[60vw]' priority />
          </figure>
          <div>Share-if</div>
        </div>
        {/*  */}
        <h1 className='text-[24px] font-semibold tracking-[-1px] lg:text-4xl'>
          <span className='lg:block'>You&apos;ve Seen Access-Sharing </span>a
          Million Times Before
        </h1>
        {/*  */}
        <div className='flex items-center justify-center'>
          <Image
            className='relative z-10 -mr-[305px]'
            src={github}
            width={414}
            height={152}
            alt=''
            priority
          />
          <Image
            className='relative z-20 -mr-[108px] max-w-[60vw]'
            src={notion}
            width={287}
            height={196}
            alt=''
            priority
          />
          <Image
            className='relative z-30 max-w-[76vw]'
            src={googleDrive}
            width={363}
            height={220}
            alt=''
            priority
          />
          <Image
            className='relative z-20 -ml-[100px] max-w-[76vw]'
            src={airtable}
            width={389}
            height={201}
            alt=''
            priority
          />
        </div>
        {/*  */}
        <h2 className='max-w-[370px] font-poppins text-3xl font-semibold leading-tight tracking-[-2.5px] md:max-w-[720px] md:text-[4rem] md:leading-[1]'>
          <TextAnimation>Now You Don&apos;t Have to</TextAnimation>
          <br />
          <TextAnimation>Build It From Scratch</TextAnimation>
        </h2>

        <Button asChild variant='default'>
          <a onClick={dataLayerHandler} href={href}>
            Start Now
          </a>
        </Button>
      </div>
      {/*  */}
      <Image
        src={bg}
        alt=''
        priority
        className='absolute inset-0 bottom-0 left-0 top-auto z-20 min-w-full max-w-[140vw]'
      />
      <div className='absolute inset-0 z-10 flex h-full items-center justify-center'>
        <Image
          src={clouds}
          alt=''
          priority
          className='min-w-[200vw] max-w-none md:min-w-0'
        />
      </div>
    </section>
  );
};

export default HeroSection;
