import Image from 'next/image';
import TypographyH2 from '@/app/(home-new)/components/TypographyH2';

import image from '../../assets/atom.svg';
import { Button } from '@/components/ui/button';

const RowCta = () => {
  const href =
    'https://permitio.canny.io/feature-requests/p/permit-elements-as-react-components';

  return (
    <div className='flex w-full max-w-[480px] flex-col items-center gap-y-16 rounded-[20px] bg-[#FFE8D7] px-16 py-12 text-center lg:max-w-full lg:flex-row lg:justify-between lg:text-left'>
      <div className='relative flex'>
        <div className='relative z-20'>
          <TypographyH2>
            <span>
              React Elements
              <br />
              <span className='relative -left-[20px] lg:left-0'>
                coming soon!
              </span>
            </span>
          </TypographyH2>
        </div>
        <Image
          className='absolute inset-0 -right-[10px] bottom-1 left-auto top-auto max-w-[32px] lg:-right-4 lg:bottom-[2px] lg:max-w-full'
          src={image}
          alt=''
        />
      </div>
      <Button asChild variant='outline'>
        <a rel='noopener noreferrer' target='_blank' href={href}>
          Sign Up for Early Access
        </a>
      </Button>
    </div>
  );
};

export default RowCta;
