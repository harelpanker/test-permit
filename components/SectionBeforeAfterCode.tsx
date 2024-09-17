import { FC } from 'react';
import Image from 'next/image';
import check from '/public/images/plug-and-play/check.svg';
import BeforeAfter from './BeforeAfter';
import MarqueeSectionLine from '@/app/(home-new)/components/MarqueeSectionLine';
import TypographyH2 from '@/app/(home-new)/components/TypographyH2';

type SectionBeforeAfterProps = {
  codes: {
    id: string;
    nameOnTag: string;
    iconActive: {
      url: string;
      width: number;
      height: number;
    };
    iconNotActive: {
      url: string;
      width: number;
      height: number;
    };
    language: string;
    languageId: null;
    copy: string;
    textAfter: string;
    textBefore: string;
    active: boolean;
    docsLink: string;
  }[];
};

const SectionBeforeAfter: FC<SectionBeforeAfterProps> = ({ codes }) => {
  return (
    <section className='relative z-20 px-5 pb-14 pt-[5.25rem] text-theme_orange_12 lg:pb-24 lg:pt-36'>
      <div className='container z-20 w-full max-w-[990px]'>
        {/* header */}
        <header className='mx-auto flex w-full flex-col items-center gap-4 text-center text-[#451E11] lg:max-w-[496px] lg:gap-6'>
          <TypographyH2>
            <span className='block md:inline-block'>Fully functional</span>{' '}
            authorization{' '}
            <span className=' bg-gradient-to-r from-[#974EF2] to-[#FF953F]  bg-clip-text text-transparent'>
              in 5 minutes
            </span>
          </TypographyH2>
          <p className='w-full max-w-[432px] font-inter text-lg font-medium lg:text-xl'>
            Just add{' '}
            <span className='rounded bg-[#FFDCC3] px-[6px] pb-[2px] font-ibm'>
              permit.check()
            </span>{' '}
            to your code, middleware, mesh, or API gateway.
          </p>
        </header>

        <BeforeAfter codes={codes} />

        <ul className='mx-auto mt-6 flex max-w-xs flex-col gap-4 px-4 font-inter text-sm font-medium lg:mt-9 lg:grid lg:max-w-[660px] lg:grid-cols-2 lg:gap-9 lg:px-0 lg:text-base'>
          <li className='flex items-center gap-3'>
            <Image src={check} alt='' className='h-6 w-6 shrink-0' />
            <p className=''>
              Seamlessly migrate from any existing authorization solution
            </p>
          </li>
          <li className='flex items-center gap-3'>
            <Image src={check} alt='' className='h-6 w-6 shrink-0' />
            <p className=''>
              GitOps and Multi-tenancy
              <br className='hidden lg:block' /> available out-of-the-box
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SectionBeforeAfter;
