'use client';

import { useViewportSize } from '@mantine/hooks';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

import logo_1 from '/public/images/home/hero/hero-logos/1.png';
import logo_2 from '/public/images/home/hero/hero-logos/2.png';
import logo_3 from '/public/images/home/hero/hero-logos/3.png';
import logo_4 from '/public/images/home/hero/hero-logos/4.png';
import logo_5 from '/public/images/home/hero/hero-logos/5.png';
import logo_6 from '/public/images/home/hero/hero-logos/6.png';
import logo_7 from '/public/images/home/hero/hero-logos/7.png';
import logo_8 from '/public/images/home/hero/hero-logos/intel.svg';
import logo_9 from '/public/images/home/hero/hero-logos/walmart.svg';

const LogosMarquee = () => {
  const { width } = useViewportSize();

  return (
    <Marquee
      speed={width > 1024 ? 10 : 40}
      pauseOnHover={true}
      gradient={false}
      className='flex justify-center bg-[#3E3E3A] py-6 lg:py-8'>
      <figure className='mx-6 flex h-auto w-auto items-center justify-center'>
        <Image
          src={logo_1}
          width={136}
          height={19}
          alt=''
          className='mx-6 h-auto w-auto'
        />
      </figure>
      <figure className='mx-6 flex h-auto w-auto items-center justify-center'>
        <Image
          src={logo_2}
          width={99}
          height={53}
          alt=''
          className='mx-6 h-auto w-auto'
        />
      </figure>
      <figure className='mx-6 flex h-auto w-auto items-center justify-center'>
        <Image
          src={logo_3}
          width={157}
          height={37}
          alt=''
          className='mx-6 h-auto w-auto'
        />
      </figure>
      <figure className='mx-6 flex h-auto w-auto items-center justify-center'>
        <Image
          src={logo_4}
          width={198}
          height={23}
          alt=''
          className='mx-6 h-auto w-auto'
        />
      </figure>
      <figure className='mx-6 flex h-auto w-auto items-center justify-center'>
        <Image
          src={logo_5}
          width={171}
          height={35}
          alt=''
          className='mx-6 h-auto w-auto'
        />
      </figure>
      <figure className='mx-6 flex h-auto w-auto items-center justify-center'>
        <Image
          src={logo_6}
          width={166}
          height={45}
          alt=''
          className='mx-6 h-auto w-auto'
        />
      </figure>
      <figure className='mx-6 flex h-auto w-auto items-center justify-center'>
        <Image
          src={logo_7}
          width={164}
          height={35}
          alt=''
          className='mx-6 h-auto w-auto'
        />
      </figure>
      <figure className='mx-6 flex h-auto w-auto items-center justify-center'>
        <Image
          src={logo_8}
          width={100}
          height={66}
          alt=''
          className='mx-6 h-auto w-auto'
        />
      </figure>
      <figure className='mx-6 flex h-auto w-auto items-center justify-center'>
        <Image src={logo_9} width={150} height={36} alt='' />
      </figure>
      {/*  */}
      <figure className='mx-6 flex h-auto w-auto items-center justify-center'>
        <Image
          src={logo_1}
          width={136}
          height={19}
          alt=''
          className='mx-6 h-auto w-auto'
        />
      </figure>
      <figure className='mx-6 flex h-auto w-auto items-center justify-center'>
        <Image
          src={logo_2}
          width={99}
          height={53}
          alt=''
          className='mx-6 h-auto w-auto'
        />
      </figure>
      <figure className='mx-6 flex h-auto w-auto items-center justify-center'>
        <Image
          src={logo_3}
          width={157}
          height={37}
          alt=''
          className='mx-6 h-auto w-auto'
        />
      </figure>
      <figure className='mx-6 flex h-auto w-auto items-center justify-center'>
        <Image
          src={logo_4}
          width={198}
          height={23}
          alt=''
          className='mx-6 h-auto w-auto'
        />
      </figure>
      <figure className='mx-6 flex h-auto w-auto items-center justify-center'>
        <Image
          src={logo_5}
          width={171}
          height={35}
          alt=''
          className='mx-6 h-auto w-auto'
        />
      </figure>
      <figure className='mx-6 flex h-auto w-auto items-center justify-center'>
        <Image
          src={logo_6}
          width={166}
          height={45}
          alt=''
          className='mx-6 h-auto w-auto'
        />
      </figure>
      <figure className='mx-6 flex h-auto w-auto items-center justify-center'>
        <Image
          src={logo_7}
          width={164}
          height={35}
          alt=''
          className='mx-6 h-auto w-auto'
        />
      </figure>
      <figure className='mx-6 flex h-auto w-auto items-center justify-center'>
        <Image
          src={logo_8}
          width={100}
          height={66}
          alt=''
          className='mx-6 h-auto w-auto'
        />
      </figure>
      <figure className='mx-6 flex h-auto w-auto items-center justify-center'>
        <Image src={logo_9} width={150} height={36} alt='' />
      </figure>
    </Marquee>
  );
};

export default LogosMarquee;
