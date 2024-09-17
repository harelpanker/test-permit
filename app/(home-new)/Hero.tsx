'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import LogosHero from './components/LogosHero';
import CalendlyModal from '@/components/CalendlyModal';
import {
  useViewportSize,
  useInViewport,
  useWindowScroll,
} from '@mantine/hooks';
import Lottie from 'react-lottie';

import bg from '../(home-new)/assets/hero/bg.svg';
import mobile_hero from '../(home-new)/assets/hero/mobile_hero.svg';
import animationData from './assets/hero/data.json';
import animationDataMobile from './assets/hero/data-mobile.json';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const { ref, inViewport } = useInViewport();
  const { width } = useViewportSize();
  const [scroll] = useWindowScroll();

  useEffect(() => {
    if (scroll.y > 0 && !active) {
      setActive(true);
    }
  }, [scroll, active]);

  useEffect(() => {
    setTimeout(() => {
      if (!active) {
        setActive(true);
      }
    }, 5000);
  }, [active]);

  return (
    <section className='flex flex-col items-center pb-12 pt-24 text-center lg:px-12 lg:pb-12 lg:pt-52'>
      <header className='container relative z-30 flex flex-col items-center gap-6 px-4 lg:gap-10'>
        <h1 className='max-w-[370px] font-poppins text-4xl font-semibold leading-tight tracking-[-2.5px] md:max-w-full md:text-[4rem] md:leading-[1]'>
          <span className='bg-gradient-to-r from-[#974EF2] to-[#FF953F]  bg-clip-text text-transparent'>
            Never Build Permissions Again
          </span>
        </h1>
        <p className='hidden font-poppins text-lg font-semibold tracking-[-0.5px] text-[#451E11] md:block'>
          <span className='lg:block'>
            Full Stack authorization as a service - build and manage permissions
            for any application
          </span>{' '}
          with Policy-as-Code, APIs, developer-friendly SDKs, and user facing
          UIs.
        </p>
        <p className='font-poppins text-lg font-semibold tracking-[-0.5px] text-[#451E11] md:hidden'>
          Developer-friendly full stack authorization for any application
          powered by - <span className='whitespace-pre'>Policy-as-Code</span>,
          APIs, SDKs, and UIs
        </p>
        <div className='flex flex-wrap items-center justify-center gap-3'>
          <Button asChild variant='default'>
            <a href='https://app.permit.io/?utm_source=website&utm_medium=website'>
              Get Started
            </a>
          </Button>
          <CalendlyModal
            closeModal={closeModal}
            openModal={openModal}
            isOpen={isOpen}
          />
        </div>
      </header>
      <div className='container relative z-20 flex min-h-[760px] flex-col items-center lg:min-h-[612px]'>
        <figure ref={ref} className='pointer-events-none relative z-20 w-full'>
          {width >= 1024 && (
            <div className='-mt-16 hidden lg:block 2xl:min-h-[736px]'>
              <Lottie
                isPaused={!active || !inViewport}
                options={{
                  loop: true,
                  autoplay: false,
                  animationData: animationData,
                  rendererSettings: { preserveAspectRatio: 'xMidYMid slice' },
                }}
              />
            </div>
          )}
          {width < 1024 && (
            <div className={`relative sm:w-auto lg:hidden`}>
              <div className='absolute inset-0 mt-[3rem] w-full'>
                <Image
                  className={`mx-auto mt-3 w-full max-w-[85%] transition-opacity ${
                    scroll.y === 0 && !active ? 'opacity-100' : 'opacity-0'
                  }`}
                  src={mobile_hero}
                  alt=''
                />
              </div>
              {scroll.y === 0 && !active ? null : (
                <div className='relative -left-[10vw] z-20 w-[120vw]'>
                  <Lottie
                    isPaused={!inViewport}
                    options={{
                      loop: true,
                      autoplay: false,
                      animationData: animationDataMobile,
                      rendererSettings: {
                        preserveAspectRatio: 'xMidYMid slice',
                      },
                    }}
                  />
                </div>
              )}
            </div>
          )}
        </figure>
      </div>
      <div className='relative z-20'>
        <LogosHero />
      </div>
      <Image
        className='pointer-events-none absolute bottom-auto left-auto right-0 top-0 z-10 hidden w-full md:block'
        src={bg}
        alt=''
      />
    </section>
  );
};

export default Hero;
