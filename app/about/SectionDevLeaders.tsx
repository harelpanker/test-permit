'use client';

import { useState } from 'react';
import Image from 'next/image';
import { devLeaders } from './devs-data';
import SectionDivider from './SectionDivider';
import { Button } from '@/components/ui/button';

const SectionDevLeaders = () => {
  const [showMore, SetShawMore] = useState(false);
  const handleShowMore = () => SetShawMore((showMore) => !showMore);
  return (
    <section className='relative z-20 px-5 pb-14 pt-[86px] lg:pb-24 lg:pt-36'>
      <div className='container relative z-20 flex max-w-[1064px] flex-col gap-y-9 text-theme_orange_12'>
        <h2
          style={{ lineHeight: 1.3 }}
          className='text-center font-poppins text-[26px] font-semibold tracking-[-1px] lg:text-4xl'>
          Supported by Dev Leaders
        </h2>
        <div
          className={`relative overflow-hidden sm:max-h-max ${
            !showMore ? 'max-h-[1050px]' : 'max-h-max'
          }`}>
          <ul className='flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:gap-6 lg:p-4'>
            {devLeaders.map((dev) => (
              <li
                key={dev.name}
                className={`flex w-full max-w-[240px] items-start gap-x-[10px] p-[14px] ${
                  dev.noPaddingRight ? 'pr-0' : ''
                }`}>
                <Image
                  width={56}
                  height={56}
                  src={dev.image}
                  alt={`${dev.name} ${dev.position}`}
                />
                <div className='flex flex-col text-sm font-medium'>
                  <h3>{dev.name}</h3>
                  <p className='leading-tight text-[#A18072]'>{dev.position}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <SectionDivider />
      <div
        className={`${
          !showMore
            ? 'absolute h-[10rem] from-transparent via-[#fdede1] pb-14'
            : 'relative h-auto from-transparent pb-3'
        } bottom-0 left-0 z-20 flex w-full items-end justify-center bg-gradient-to-t to-transparent px-3 pt-9 sm:hidden`}>
        <Button onClick={handleShowMore} variant='outline' size='sm'>
          {showMore ? 'Show less' : 'Show more'}
        </Button>
      </div>
    </section>
  );
};

export default SectionDevLeaders;
