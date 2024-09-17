import Image from 'next/image';
import CodeTabs from '@/components/CodeTabs';
import TypographyH2 from './components/TypographyH2';

import icon1 from '../(home-new)/assets/api/icon1.svg';
import icon2 from '../(home-new)/assets/api/icon2.svg';
import icon3 from '../(home-new)/assets/api/icon3.svg';

const SectionAPIForEverything = () => {
  const IconList = () => (
    <ul className='flex items-center gap-x-3'>
      <li>
        <a
          className='transition hover:opacity-80'
          href='https://docs.permit.io/category/supported-sdks'
          rel='noopener noreferrer'
          target='_blank'>
          <figure>
            <Image src={icon1} alt='' />
          </figure>
        </a>
      </li>
      <li>
        <a
          className='transition hover:opacity-80'
          href='https://api.permit.io/v2/redoc'
          rel='noopener noreferrer'
          target='_blank'>
          <figure>
            <Image src={icon2} alt='' />
          </figure>
        </a>
      </li>
      <li>
        <a
          className='transition hover:opacity-80'
          href='https://docs.permit.io/integrations/infra-as-code/terraform-provider/'
          rel='noopener noreferrer'
          target='_blank'>
          <figure>
            <Image src={icon3} alt='' />
          </figure>
        </a>
      </li>
    </ul>
  );

  return (
    <section className='relative z-20 px-5 py-14 text-theme_orange_12 lg:py-24'>
      <div className='container flex max-w-lg flex-col gap-6 lg:max-w-6xl lg:flex-row lg:justify-between'>
        {/* header */}
        <header className='flex w-full flex-col gap-6'>
          <TypographyH2>
            APIs for{' '}
            <span className=' bg-gradient-to-r from-[#974EF2] to-[#FF953F]  bg-clip-text text-transparent'>
              everything
            </span>
          </TypographyH2>

          <div className='flex flex-col gap-2 font-inter text-sm md:text-base lg:gap-3'>
            <p className='w-full max-w-[500px]'>
              Create, manage and automate your policies with Permit&apos;s API.
              Anything done via the UI can be done with{' '}
              <a
                className='text-[#852EEF] transition hover:opacity-80'
                href='https://api.permit.io/v2/redoc'
                rel='noopener noreferrer'
                target='_blank'>
                our API
              </a>
              ,{' '}
              <a
                className='text-[#852EEF] transition hover:opacity-80'
                href='https://docs.permit.io/integrations/infra-as-code/terraform-provider/'
                rel='noopener noreferrer'
                target='_blank'>
                Terraform
              </a>{' '}
              provider or{' '}
              <a
                className='text-[#852EEF] transition hover:opacity-80'
                href='https://docs.permit.io/category/supported-sdks'
                rel='noopener noreferrer'
                target='_blank'>
                SDKs
              </a>{' '}
              as well!
            </p>
          </div>

          <div className='hidden lg:block'>
            <IconList />
          </div>
        </header>
        {/* code */}
        <div className='flex'>
          <CodeTabs />
        </div>

        <div className='lg:hidden'>
          <IconList />
        </div>
      </div>
    </section>
  );
};

export default SectionAPIForEverything;
