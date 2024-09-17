'use client';

import Image from 'next/image';
import { useViewportSize } from '@mantine/hooks';
import CTAButton from '@/components/ui/CTAButton';

import img from '/public/images/rebac/9.png';
import img_mobile from '/public/images/rebac/99.png';

const Section7 = () => {
  const { width } = useViewportSize();

  return (
    <section className='relative grid gap-9 overflow-hidden bg-[#FDF8F6] px-5 pb-4 pt-16 lg:grid-cols-2 lg:px-0 lg:pb-28 lg:pl-12 lg:pt-28'>
      <div className='container relative z-20 row-start-1 flex w-full max-w-[1066px] flex-col items-center justify-between gap-16 lg:col-span-2 lg:col-start-1 lg:flex-row'>
        <header className='flex w-full max-w-[20.2rem] flex-col items-start gap-4 lg:max-w-[30rem] lg:gap-6 xl:max-w-[546px]'>
          <div className='flex flex-col gap-4'>
            <h3 className='text-sm font-bold uppercase text-[#F76808] lg:text-base'>
              Fully flexible policy modeling
            </h3>
            {width >= 1024 && (
              <h2 className='text-4xl font-bold text-[#451E11]'>
                <span className='lg:block'>Projects, Environments </span>
                <span className='lg:block'>and Multi-Tenancy - </span>All out of
                the box.
              </h2>
            )}
            {width < 1024 && (
              <h2 className='text-3xl font-bold text-[#451E11]'>
                Projects, Envs
                <br />
                and Multi-Tenancy - All out of the box.
              </h2>
            )}
          </div>
          <div className='flex flex-col gap-3 text-lg font-medium leading-normal text-[#451E11] xl:text-[22px]'>
            <p>
              Model ReBAC permissions for multiple projects, environments and
              tenants in one unified interface.
            </p>
            <p>
              Relationships, role assignments and derivations defined for each
              environment are unique, allowing complete policy separation
              between silos.
            </p>
          </div>
          <CTAButton
            link='https://docs.permit.io/features/policy-editor/editor-overview/'
            text='Model your authorization layer'
            bgColor='purple'
          />
        </header>
      </div>
      <figure className='w-full lg:col-start-2 lg:row-start-1  lg:flex lg:justify-end lg:py-14 lg:pl-12'>
        <Image
          width={767}
          height={429}
          className='w-ful hidden lg:block'
          src={img}
          alt=''
        />

        <Image
          className='mx-auto lg:hidden'
          width={374}
          height={398}
          src={img_mobile}
          alt=''
        />
      </figure>
    </section>
  );
};

export default Section7;
