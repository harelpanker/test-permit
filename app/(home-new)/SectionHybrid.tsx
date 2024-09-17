'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';
import TypographyH2 from './components/TypographyH2';
import TypographyH3 from './components/TypographyH3';
import { useViewportSize, useInViewport } from '@mantine/hooks';
import Lottie from 'react-lottie';

import icon1 from '../(home-new)/assets/hybrid/icon1.svg';
import icon2 from '../(home-new)/assets/hybrid/icon2.svg';
import icon3 from '../(home-new)/assets/hybrid/icon3.svg';
import animationData from '../(home-new)/assets/hybrid/lottie.json';
import animationDataMobile from '../(home-new)/assets/hybrid/lottie-mobile.json';

const SectionHybrid = () => {
  const { ref, inViewport } = useInViewport();
  const { width } = useViewportSize();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const defaultOptionsMobile = {
    loop: true,
    autoplay: true,
    animationData: animationDataMobile,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const CheckItem = ({ children }: { children: React.ReactNode }) => (
    <li className='flex items-center gap-2 text-base'>
      <div className='flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-theme_purple lg:h-8 lg:w-8'>
        <Check size={22} />
      </div>
      {children}
    </li>
  );

  const UnderImage = () => (
    <div className='font-sm lg:font-base flex flex-wrap items-center justify-center gap-x-9 gap-y-2 px-4 font-inter text-[#A18072]'>
      <div className='flex items-center gap-2'>
        <p>Engines</p>
        <div className='flex gap-3'>
          <Image src={icon1} alt='' />
          <Image src={icon2} alt='' />
        </div>
        <p className='font-medium text-theme_orange_12'>OPA / Ceder</p>
      </div>
      <div className='flex items-center gap-2'>
        <p>Policy Updater</p>
        <Image src={icon3} alt='' />
        <p className='font-medium text-theme_orange_12'>OPAL</p>
      </div>
    </div>
  );

  return (
    <section className='relative z-20 py-14 text-theme_orange_12 lg:px-5 lg:py-24'>
      <div className='container flex max-w-6xl flex-col gap-2 lg:gap-3'>
        <header className='text-center lg:text-left'>
          <TypographyH2>Hybrid Model</TypographyH2>
        </header>

        <div className='flex gap-9' ref={ref}>
          {/* content */}
          <div className='flex w-full shrink-0 flex-col items-center justify-center gap-9 lg:w-auto lg:items-start lg:gap-6'>
            <div className='text-center lg:text-left'>
              <TypographyH3>Secure, event-driven, compliant.</TypographyH3>
            </div>
            {/* image mobile */}
            <figure className='pointer-events-none w-full lg:hidden'>
              {width < 640 && (
                <div className='relative left-[6%] -mt-8 sm:hidden'>
                  <Lottie
                    isPaused={!inViewport}
                    width={'110%'}
                    options={defaultOptionsMobile}
                  />
                </div>
              )}
              {width >= 640 && width < 1024 && (
                <div className='hidden sm:block'>
                  <Lottie isPaused={!inViewport} options={defaultOptions} />
                </div>
              )}
            </figure>

            <div className='lg:hidden'>
              <UnderImage />
            </div>

            <ul className='flex w-full max-w-md flex-col gap-6 px-4 text-theme_orange_12 lg:px-0'>
              <CheckItem>
                <p>
                  <span className='lg:block'>
                    All authorization decisions are made on
                  </span>{' '}
                  your side{' '}
                  <strong className='font-medium'>with zero latency</strong>
                </p>
              </CheckItem>
              <CheckItem>
                <p>
                  <span className='lg:block'>
                    Use sensitive data for authorization decisions,
                  </span>{' '}
                  <strong className='font-medium'>
                    without it ever leaving your VPC/Network
                  </strong>
                </p>
              </CheckItem>
              <CheckItem>
                <p>
                  <span className='lg:block'>
                    Permit is always up (+99.99) - but you are not
                  </span>{' '}
                  dependent on our availability
                </p>
              </CheckItem>
              <CheckItem>
                <p>Compliant with HIPAA, SOC2, and more</p>
              </CheckItem>
            </ul>
            <div className='flex items-center md:items-start'>
              <Button variant='link' asChild>
                <a
                  href='https://docs.permit.io/overview/how-does-it-work#permits-hybrid-architecture'
                  target='_blank'
                  rel='noreferrer noopener'
                  className='group hover:no-underline'
                >
                  <span className='font-medium'>Learn more</span>
                  <ArrowRight
                    size={18}
                    className='transition group-hover:translate-x-1'
                  />
                </a>
              </Button>
            </div>
          </div>
          {/* image */}
          {width >= 1024 && (
            <div className='hidden flex-col items-center gap-9 lg:flex'>
              <figure className='-mt-6 w-[884px]'>
                <div className='w-full'>
                  <Lottie isPaused={!inViewport} options={defaultOptions} />
                </div>
              </figure>

              <UnderImage />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SectionHybrid;
