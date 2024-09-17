'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import TextTransition, { presets } from 'react-text-transition';
import CTAButton from '@/components/ui/CTAButton';

import img from '/public/images/foaz/section_3.svg';
import done_all from '/public/images/plug-and-play/done_all.svg';

const blue_text = ['Player', 'Admin', 'Accountant', 'Patient'];
const red_text = ['Join', 'View', 'Edit', 'Access'];
const orange_text = ['Server', 'Repository', 'Statement', 'Record'];
const purple_text = [
  'From EU',
  'Form Local IP',
  'During work hours',
  'By Cardiology',
];

const Section2 = () => {
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
    <section className='relative z-20 px-5 pt-16 text-center md:pt-20 lg:px-12'>
      <div className='container flex w-full max-w-2xl flex-col items-center justify-center gap-8 lg:gap-20'>
        {/* animation */}
        <div className='flex flex-wrap justify-center gap-[9px]'>
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
        {/* content */}
        <header className='relative flex flex-col items-center gap-4 lg:gap-9'>
          <h2 className='text-3xl font-bold text-theme_purple lg:text-4xl'>
            <span className='lg:block'>Every application needs </span> an
            authorization layer
          </h2>
          <div className='mx-auto flex w-full max-w-[460px] flex-col gap-3 font-semibold text-[#451E11] lg:gap-8 lg:text-[22px]'>
            <p>
              <span className='lg:block'>That doesn&apos;t mean you need</span>{' '}
              to build it from scratch.
            </p>
            <p>
              Implement secure, flexible, and reliable authorization
              out-of-the-box, and manage it with a no-code UI or API.
            </p>
          </div>
          <CTAButton
            text='Get Started Now'
            bgColor='purple'
            link='https://app.permit.io/?utm_source=website&utm_medium=website-product-hunt'
          />
          <Image
            src={img}
            alt=''
            className='pointer-events-none absolute -bottom-[148px] -left-[306px] top-auto hidden lg:block'
          />
        </header>
      </div>
    </section>
  );
};

export default Section2;
