import Image from 'next/image';
import TypographyH2 from '@/app/(home-new)/components/TypographyH2';
import { Button } from '@/components/ui/button';

import dog from '../assets/lover.svg';

const SectionBottomCta = () => {
  const href = 'https://app.permit.io/?utm_source=website&utm_medium=website';

  return (
    <section className='relative z-20 bg-[#FFDCC3] px-5 py-[86px] text-center lg:px-12 lg:py-[96px] lg:text-left'>
      <div className='container flex max-w-5xl flex-col items-center gap-y-[70px] lg:flex-row lg:justify-between'>
        <div className='flex w-full max-w-lg flex-col items-center gap-y-6 lg:items-start'>
          <TypographyH2>
            Test in minutes, Fully featured access control interfaces for your
            users
          </TypographyH2>
          <Button asChild variant='default'>
            <a href={href}>Get Started Now</a>
          </Button>
        </div>
        <Image src={dog} alt='lover' />
      </div>
    </section>
  );
};

export default SectionBottomCta;
