import { FC } from 'react';
import Image from 'next/image';
import BeforeAfter from './BeforeAfter';
import check from '/public/images/plug-and-play/check.svg';

type Section6Props = {
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

const Section6: FC<Section6Props> = ({ codes }) => {
  return (
    <section className='bg-[#FDF8F6] px-5 lg:px-12'>
      <div className='h-16 lg:h-[130px]' />
      <div className='container w-full max-w-[990px]'>
        {/* header */}
        <header className='mx-auto flex w-full flex-col items-center gap-4 text-center text-[#451E11] lg:max-w-[496px] lg:gap-6'>
          <h2 className='text-2xl font-bold lg:text-4xl'>
            <span className='block md:inline-block'>Fully functional</span>{' '}
            authorization in 5 minutes
          </h2>
          <p className='w-full max-w-[432px] text-lg font-medium lg:text-[22px]'>
            Just add{' '}
            <span className='rounded bg-[#E0CEC7] px-[6px] pb-[2px]'>
              permit.check()
            </span>{' '}
            to your code, middleware, mesh, or API gateway.
          </p>
        </header>
        <BeforeAfter codes={codes} />

        <ul className='flex flex-col gap-4 px-4 lg:mx-auto lg:mt-9 lg:grid lg:max-w-[660px] lg:grid-cols-2 lg:gap-9 lg:px-0'>
          <li className='flex gap-3 text-lg font-semibold text-[#451E11]'>
            <Image src={check} alt='' className='h-6 w-6 shrink-0' />
            <p className=''>
              Seamlessly migrate from any existing authorization solution
            </p>
          </li>
          <li className='flex gap-3 text-lg font-semibold text-[#451E11]'>
            <Image src={check} alt='' className='h-6 w-6 shrink-0' />
            <p className=''>
              GitOps and Multi-tenancy available out-of-the-box
            </p>
          </li>
        </ul>
      </div>
      <div className='h-16 lg:h-[94px]' />
    </section>
  );
};

export default Section6;
