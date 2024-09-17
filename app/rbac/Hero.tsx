'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import { RefreshOnFocus } from '@/components/ui/refresh-on-focus';
import { useWindowScroll } from '@mantine/hooks';
import CTAButton from '@/components/ui/CTAButton';

import done_all from '/public/images/rbac/done_all.svg';

const blue_text = ['Player', 'Admin', 'Accountant', 'Patient'];
const red_text = ['Join', 'View', 'Edit', 'Access'];
const orange_text = ['Server', 'Repository', 'Statement', 'Record'];
const purple_text = [
  'From EU',
  'From local IP',
  'During work hours',
  'By Cardiology',
];

const Hero = () => {
  const [scroll] = useWindowScroll();
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [index3, setIndex3] = useState(0);
  const [index4, setIndex4] = useState(0);

  useEffect(() => {
    const intervalIndex1 = setInterval(
      () => setIndex1((index1) => index1 + 1),
      3000
    );
    return () => clearTimeout(intervalIndex1);
  }, []);
  useEffect(() => {
    const intervalIndex2 = setInterval(
      () => setIndex2((index2) => index2 + 1),
      3000
    );
    return () => clearTimeout(intervalIndex2);
  }, []);
  useEffect(() => {
    const intervalIndex3 = setInterval(
      () => setIndex3((index3) => index3 + 1),
      3000
    );
    return () => clearTimeout(intervalIndex3);
  }, []);
  useEffect(() => {
    const intervalIndex4 = setInterval(
      () => setIndex4((index4) => index4 + 1),
      3000
    );
    return () => clearTimeout(intervalIndex4);
  }, []);
  return (
    <section className='-mt-[70px] bg-[#FFF1E7] px-5 pb-14 pt-28 text-center text-[#43302B] lg:-mt-[90px] lg:px-12 lg:py-36 lg:pt-52'>
      <div className='container flex flex-col gap-6 lg:gap-9'>
        <header className='flex flex-col gap-4'>
          <h2 className='text-sm font-bold uppercase tracking-wider text-[#A18072] md:text-lg'>
            Role Based Access Control{' '}
            <span className='hidden md:inline-block'>with Permit</span>
          </h2>

          <h1 className='mx-auto max-w-[18rem] text-3xl font-bold text-theme_purple lg:max-w-none lg:text-4xl'>
            RBAC now as easy as checking a box
          </h1>
        </header>
        {/* animation */}
        <div className='flex max-w-full flex-wrap justify-center gap-[9px] lg:grid lg:min-w-[720px] lg:grid-cols-[repeat(5,minmax(0,auto))]'>
          {/* blue */}
          <div className='flex items-center rounded border border-[#CEE7FE] bg-[#F5FAFF] px-3 py-[6px] font-semibold leading-none text-[#006ADC] md:text-xl'>
            <TextTransition springConfig={presets.gentle}>
              {blue_text[index1 % blue_text.length]}
            </TextTransition>
          </div>
          {/* green */}
          <div className='flex items-center justify-center gap-2 rounded border border-[#C7EBE5] bg-[#F1FCFA] px-3 py-[6px] font-semibold leading-none text-[#067A6F] md:text-xl lg:gap-3'>
            <span>Can</span>
            <Image
              src={done_all}
              alt=''
              className='h-5 w-5 md:h-[26px] md:w-[26px]'
            />
          </div>
          {/* red */}
          <div className='flex items-center rounded border border-[#F9D8EC] bg-[#FFF7FC] px-3 py-[6px] font-semibold leading-none text-[#CD1D8D] md:text-xl'>
            <TextTransition springConfig={presets.gentle}>
              {red_text[index2 % red_text.length]}
            </TextTransition>
          </div>
          {/* orange */}
          <div className='flex items-center rounded border border-[#FFDCC3] bg-[#FEF8F4] px-3 py-[6px] font-semibold leading-none text-[#BD4B00] md:text-xl'>
            <TextTransition springConfig={presets.gentle}>
              {orange_text[index3 % orange_text.length]}
            </TextTransition>
          </div>
          {/* purple */}
          <div className='flex items-center rounded border border-[#E9D9FC] bg-[#F4ECFD] px-3 py-[6px] font-semibold leading-none text-[#7011E4] md:text-xl'>
            <TextTransition springConfig={presets.gentle}>
              {purple_text[index4 % purple_text.length]}
            </TextTransition>
          </div>
        </div>
        <p className='mx-auto max-w-[290px] text-lg font-medium md:max-w-none lg:text-[22px]'>
          <span className='lg:block'>Manage access using dynamic roles </span>
          in seconds with a quick low-code interface
        </p>
        <div className='flex justify-center'>
          <CTAButton
            bgColor='purple'
            text='Start Now'
            link='https://app.permit.io/?utm_source=website&utm_medium=website-rbac'
          />
        </div>
      </div>
      {scroll.y < 150 && <RefreshOnFocus />}
      {/* <RefreshOnFocus /> */}
    </section>
  );
};

export default Hero;
