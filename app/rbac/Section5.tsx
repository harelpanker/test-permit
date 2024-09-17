'use client';

import Image from 'next/image';
import { useViewportSize } from '@mantine/hooks';
import CTAButton from '@/components/ui/CTAButton';

import image1 from '/public/images/rbac/s6.png';
import bgMobile from '/public/images/rbac/s5-bg-m.png';
import bgDesktop from '/public/images/rbac/s5-bg-d.png';

const Section5 = () => {
  const { width } = useViewportSize();

  return (
    <section className='relative z-10 px-5 py-[10dvh] lg:px-12'>
      <div className='container relative z-20 flex w-full max-w-[1060px] flex-col items-center md:flex-row md:justify-between'>
        <header className='relative z-20 flex w-full max-w-[326px] flex-col gap-6 lg:max-w-[545px]'>
          <div className='flex flex-col gap-4'>
            <h3 className='text-sm font-bold uppercase tracking-wider text-[#F76808] lg:text-lg'>
              Fully flexible policy modeling
            </h3>
            {width >= 640 ? (
              <h2 className='text-4xl font-bold text-[#451E11]'>
                Projects, Environments
                <br />
                and Multi-Tenancy -<br />
                All out of the box.
              </h2>
            ) : (
              <h2 className='text-3xl font-bold text-[#451E11]'>
                Projects, Envs
                <br />
                and Multi-Tenancy -<br />
                All out of the box.
              </h2>
            )}
          </div>
          <div className='flex flex-col gap-2'>
            <p className='text-lg font-medium text-[#43302B] lg:text-[22px]'>
              Model RBAC permissions for multiple projects, environments and
              tenants in one unified interface.
            </p>
            <p className='text-lg font-medium text-[#43302B] lg:text-[22px]'>
              Roles, actions, resources and policies defined for each
              environment are unique, allowing complete separation between each
              silo.
            </p>
          </div>
          <div className='flex'>
            <CTAButton
              bgColor='purple'
              text='Model your authorization layer '
              link='https://docs.permit.io/features/policy-editor/editor-overview'
            />
          </div>
        </header>
        <figure className='relative aspect-[362/370] w-full max-w-[420px] md:aspect-[522/746]'>
          <Image
            src={image1}
            className='absolute -left-[3vw] -top-[20%] w-[120%] max-w-none md:left-0 md:top-[-25%] md:w-[160%]'
            alt=''
          />
        </figure>
      </div>
      {/* bg */}
      <Image
        className='absolute inset-0 bottom-auto left-0 top-[-20%] w-full object-cover md:hidden'
        src={bgMobile}
        alt=''
      />
      <Image
        className='absolute inset-0 bottom-auto left-0 top-[-14dvh] hidden w-full object-cover md:block'
        src={bgDesktop}
        alt=''
      />
    </section>
  );
};

export default Section5;
