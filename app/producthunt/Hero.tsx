'use client';

import Image from 'next/image';
import CTAButton from '@/components/ui/CTAButton';
import { RefreshOnFocus } from '@/components/ui/refresh-on-focus';
import ProductHuntButton from '@/components/layout/ProductHuntButton';
import { FancyboxWrapper } from '@/components/FancyboxWrapper';
import { PlayCircle } from 'lucide-react';
import { useWindowScroll } from '@mantine/hooks';

import logo from '/public/images/plug-and-play/logo.svg';
import videoImage from '/public/images/plug-and-play/video_tumb.png';
import bg_desktop from '/public/images/plug-and-play/bg_desktop.svg';
import bg_mobile from '/public/images/plug-and-play/bg_mobile.svg';

const Hero = () => {
  const [scroll] = useWindowScroll();

  return (
    <section className='md:bg relative z-20 bg-[#FDF8F6] bg-cover bg-no-repeat px-5 pb-6 pt-16 text-center lg:px-12 lg:pb-0 lg:pt-36'>
      <div className='h-14 lg:hidden' />
      <Image
        src={bg_desktop}
        alt=''
        priority
        className='absolute inset-0 left-0 top-0 z-10 hidden max-h-full w-full object-cover object-bottom md:block'
      />
      <Image
        src={bg_mobile}
        alt=''
        priority
        className='absolute inset-0 left-0 top-0 z-10 h-[120%] w-full object-cover object-bottom md:hidden'
      />
      <div className='container relative z-20 mx-auto flex max-w-4xl flex-col items-center gap-4 lg:gap-9'>
        <div className='flex flex-col items-center gap-4 lg:gap-6'>
          <Image src={logo} alt='Permit Logo' priority quality={100} />
        </div>
        <h1 className='text-lg font-bold text-[#43302B] md:text-4xl'>
          <span className='lg:block'>Plug & Play App-Level Authorization.</span>{' '}
          <span className='lg:block'>Enforce in Frontend or Backend </span>
          Control via No-Code UI.
        </h1>
        <div className='flex flex-col items-center gap-4 lg:gap-5'>
          <CTAButton
            text='Never Build Permissions Again'
            bgColor='purple'
            link='https://app.permit.io/?utm_source=website&utm_medium=website-product-hunt'
          />
          <ProductHuntButton />
        </div>
        <figure className='aspect-video w-full max-w-xs overflow-hidden rounded-xl shadow-video md:max-w-[638px]'>
          <FancyboxWrapper>
            <button
              data-fancybox='gallery'
              // data-src='https://youtu.be/BxZExLXZfQ4'
              data-src='https://www.youtube.com/watch?v=-2B0oBCseUg'
              className='relative h-full w-full'>
              <Image
                className='h-full w-full object-cover'
                src={videoImage}
                priority
                quality={100}
                alt='Permit Elements Tutorial'
              />
              <div className='absolute inset-0 z-10 flex h-full w-full items-center justify-center bg-slate-900 bg-opacity-30 text-slate-50 transition duration-500 hover:bg-opacity-0 hover:text-slate-900'>
                <PlayCircle className='h-10 w-10 lg:h-14 lg:w-14' />
              </div>
            </button>
          </FancyboxWrapper>
        </figure>
      </div>
      {scroll.y < 150 && <RefreshOnFocus />}
    </section>
  );
};

export default Hero;
