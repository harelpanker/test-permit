import Image from 'next/image';
import TypographyH2 from '@/app/(home-new)/components/TypographyH2';
import { Button } from '@/components/ui/button';
import stop from '../../assets/authorization-section/stop.svg';

const RowCta = () => {
  const href = 'https://app.permit.io/?utm_source=website&utm_medium=website';
  return (
    <div className='flex w-full justify-center px-5 lg:px-0'>
      <div className='flex w-full max-w-[480px] flex-col items-center justify-between gap-y-16 rounded-[20px] bg-[#FFE8D7] py-9 text-center lg:max-w-full lg:flex-row lg:px-16 lg:py-12 lg:text-left'>
        <div className='flex w-full max-w-[340px] flex-col items-center gap-y-6 px-5 lg:max-w-[440px] lg:items-start lg:px-0'>
          <div className='flex flex-col gap-y-2'>
            <TypographyH2>Delegate control within safe boundaries</TypographyH2>
            <p className='font-poppins text-lg font-semibold text-[#846358]'>
              Limit end users within safe interface boundaries, with complete
              separation between tenants.
            </p>
          </div>
          <Button asChild variant='default'>
            <a href={href}>Start Now</a>
          </Button>
        </div>
        <figure className='px-5 lg:px-0'>
          <Image src={stop} alt='' />
        </figure>
      </div>
    </div>
  );
};

export default RowCta;
