import Image from 'next/image';
import { Button } from '@/components/ui/button';
import TextAnimation from '@/components/TextAnimation';

import dog from '../assets/cta/dog.svg';

const CTASection = () => {
  const href = 'https://app.permit.io/?utm_source=website&utm_medium=website';

  return (
    <section className='relative z-20 bg-[#FFDCC3] px-5 py-[86px] text-center lg:px-12 lg:py-24 lg:text-left'>
      <div className='container flex max-w-[356px] flex-col items-center justify-between gap-x-9 gap-y-16 sm:max-w-[1065px] lg:flex-row'>
        <div className='flex w-full max-w-3xl shrink-0 flex-col items-center gap-y-6 lg:items-start lg:gap-y-16'>
          <h2 className='max-w-xs text-4xl font-semibold leading-tight tracking-[-2.5px] sm:max-w-xl lg:max-w-2xl xl:text-5xl'>
            <span className='hidden sm:inline lg:block'>
              Fully Featured Access Control Interfaces For Your Users:{' '}
            </span>
            <TextAnimation>
              <span className='sm:pr-[2px] lg:pr-0'>The</span> Frontier of
              Access Sharing.
            </TextAnimation>
            {/* <span className='bg-gradient-to-r from-[#974EF2] to-[#FF953F] bg-clip-text text-transparent lg:block lg:pb-1'>

            </span> */}
          </h2>
          <Button asChild variant='default'>
            <a href={href}>Get Started Now</a>
          </Button>
        </div>

        <figure className='shrink-0'>
          <Image src={dog} alt='' />
        </figure>
      </div>
    </section>
  );
};

export default CTASection;
