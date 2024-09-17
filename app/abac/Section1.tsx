import Image from 'next/image';
import Link from 'next/link';
import CTAButton from '@/components/ui/CTAButton';
import { FancyboxWrapper } from '@/components/FancyboxWrapper';

import { PlayCircle } from 'lucide-react';

import videoImage from '/public/images/abac/abac-video.png';
import docs from '/public/images/abac/menu_book.svg';
import description from '/public/images/abac/description.svg';

const Section1 = () => {
  return (
    <section className='relative px-5 py-9 text-center text-sm lg:py-28 xl:text-left xl:text-xl'>
      <div className='container flex w-full max-w-7xl flex-col items-center justify-between gap-8 xl:flex-row '>
        <div className='flex w-full max-w-[500px] flex-col items-center gap-7 xl:items-start'>
          <h1 className='bg-gradient-to-r from-theme_purple to-theme_yellow bg-clip-text text-3xl font-bold leading-none text-transparent lg:text-4xl xl:leading-tight'>
            ABAC made simple
          </h1>
          <p className='w-full max-w-[390px] opacity-60'>
            Powerful Attribute Based Access Control with low code and no code
            interfaces. Simple.
          </p>
          <div className='flex flex-col items-center gap-3 md:flex-row md:gap-10'>
            <CTAButton
              bgColor='purple'
              icon
              text='Start Now'
              link='https://app.permit.io/?utm_source=website&utm_medium=website-abac&utm_campaign=abac'
            />
            <Link
              href='/blog/announcing-abac'
              target='_blank'
              rel='noopener noreferrer'
              className='font-semibold text-theme_purple transition hover:opacity-70'>
              Read The Blog
            </Link>
          </div>
        </div>
        <div className='flex w-full flex-col items-center gap-10 md:max-w-[638px]'>
          <figure className='h-[254px] w-full max-w-[340px] overflow-hidden rounded-xl shadow-video md:h-[365px] md:max-w-[638px]'>
            <FancyboxWrapper>
              <button
                data-fancybox='gallery'
                data-src='https://youtu.be/QCsWlsjEE5A'
                className='relative h-full w-full'>
                <Image
                  className='h-full w-full object-cover'
                  src={videoImage}
                  priority
                  quality={100}
                  alt='Easily create ABAC policies with the Permit UI - Tutorial'
                />
                <div className='absolute inset-0 z-10 flex h-full w-full items-center justify-center bg-slate-900 bg-opacity-30 text-slate-50 transition duration-500 hover:bg-opacity-0 hover:text-slate-900'>
                  <PlayCircle className='h-10 w-10 lg:h-14 lg:w-14' />
                </div>
              </button>
            </FancyboxWrapper>
          </figure>
          <div className='grid max-w-[520px] grid-cols-1 justify-start gap-4 text-left text-sm font-bold text-theme_purple md:grid-cols-2 md:gap-16'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2'
              href='https://docs.permit.io/category/abac?utm_source=website&utm_medium=website-abac&utm_campaign=abac'>
              <Image src={docs} alt='abac docs' />
              <span>Check Out ABAC Docs</span>
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2'
              href='https://permitio.canny.io/changelog/abac-policies-ui-1?utm_source=website&utm_medium=website-abac&utm_campaign=abac'>
              <Image src={description} alt='description' />
              <span>Read the release notes</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
