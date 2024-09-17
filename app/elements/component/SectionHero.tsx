'use client';

import { useState } from 'react';
import Image from 'next/image';
import Badge from '@/app/(home-new)/components/Bedge';
import desktopImage from '../assets/hero-desktop.svg';
import mobileImage from '../assets/hero-mobile2.svg';

import icon from '../assets/hero-icon.svg';
import { Button } from '@/components/ui/button';
import CalendlyModal from '@/components/CalendlyModal';

const SectionHero = () => {
  const href = 'https://app.permit.io/?utm_source=website&utm_medium=website';
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <section className='relative z-20 -mt-[76px] overflow-hidden pb-[54px] pt-[130px] lg:px-12 lg:pb-[120px] lg:pt-[196px]'>
      <div className='container relative z-20 flex max-w-5xl flex-col items-center justify-between gap-x-10 gap-y-14 text-center lg:flex-row lg:text-left'>
        <div className='flex shrink-0 flex-col items-center gap-y-4 px-5 lg:items-start lg:px-0'>
          <Badge src={icon} text='Authorization Elements' />
          <h1 className='text-[26px] font-semibold tracking-[-1px] lg:text-4xl'>
            <span className='lg:block'>Out-of-the-box embeddable </span>access
            control components
          </h1>
          <div className='flex items-center gap-3'>
            <Button asChild variant='default'>
              <a href={href}>Start Now</a>
            </Button>
            <CalendlyModal
              text='Talk to Us'
              closeModal={closeModal}
              openModal={openModal}
              isOpen={isOpen}
            />
          </div>
        </div>
        <div className='horizontal-marquee-wrapper overflow-hidden lg:hidden'>
          <div className='horizontal-marquee flex gap-x-4'>
            {[...Array(2)].map((_, index) => (
              <div key={index} className='shrink-0'>
                <Image
                  width={2042}
                  height={333}
                  src={mobileImage}
                  priority
                  alt=''
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='container absolute inset-0 hidden max-w-5xl justify-between lg:flex'>
        <div className='w-full max-w-[600px] shrink-0'></div>
        <div className='marquee-wrapper relative shrink-0 overflow-hidden'>
          <div className='marquee flex flex-col'>
            {[...Array(2)].map((_, index) => (
              <div key={index} className='flex h-full flex-col'>
                <figure>
                  <Image
                    className='mb-6 h-[992px] w-[766px]'
                    width={766}
                    height={992}
                    src={desktopImage}
                    alt=''
                    priority
                  />
                </figure>
                <figure>
                  <Image
                    className='mb-6 h-[992px] w-[766px]'
                    width={766}
                    height={992}
                    src={desktopImage}
                    alt=''
                    priority
                  />
                </figure>
                <figure>
                  <Image
                    className='mb-6 h-[992px] w-[766px]'
                    width={766}
                    height={992}
                    src={desktopImage}
                    alt=''
                    priority
                  />
                </figure>
              </div>
            ))}
          </div>
          <div className='pointer-events-none absolute inset-0 left-0 top-0 flex h-[524px] flex-col justify-between'>
            <div className='h-[126px] w-full bg-gradient-to-b from-[#FDF3EC] via-[#FDF3EC] to-transparent'></div>
            <div className='h-[126px] w-full bg-gradient-to-t from-[#FDF3EC] to-transparent'></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
