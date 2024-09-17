import Image from 'next/image';
import { Button } from '@/components/ui/button';

import check from '../assets/hero-section/check_small.svg';

const CardCommunity = () => {
  const href =
    'https://app.permit.io?utm_source=website&utm_medium=website-pricing&utm_campaign=pricing-free';
  return (
    <div
      className='flex w-full max-w-[340px] flex-col gap-y-14 rounded-lg bg-[#FEFCFB] px-6 py-9 text-sm'
      style={{ boxShadow: '0px 3.5px 22px 0px rgba(0, 0, 0, 0.10)' }}>
      <div className='relative flex min-h-[300px] flex-col justify-between'>
        <div className='flex flex-col gap-y-[10px]'>
          <div className='flex items-center justify-between'>
            <h2 className='text-[26px] font-semibold leading-relaxed'>
              Community
            </h2>
          </div>
          <hr className='border-[#EADDD7]' />
          <p className='font-medium leading-tight text-[#846358]'>
            Perfect for individuals or small teams - all essential features
            included.
          </p>
        </div>

        <div className='flex flex-col items-start gap-y-5'>
          <div>
            <h3 className='text-[26px] font-semibold leading-relaxed'>
              Free Forever
            </h3>
            <p className='font-medium text-[#846358]'>
              1000 Monthly Active Users, 20 Tenants
            </p>
          </div>
          <Button asChild variant={'outline'}>
            <a href={href} rel='noopener noreferrer' target='_blank'>
              Get Started
            </a>
          </Button>
        </div>
      </div>

      <div className='flex flex-col gap-y-[10px] border-t border-[#EADDD7] pt-[10px]'>
        <h4 className='font-medium'>Community features:</h4>
        <ul className='flex flex-col gap-y-[10px] text-[#846358]'>
          <li className='flex items-center gap-x-2'>
            <Image className='shrink-0' src={check} alt='' />
            <p>UI and API for all authorization models (RBAC, ABAC, ReBAC)</p>
          </li>
          <li className='flex items-center gap-x-2'>
            <Image className='shrink-0' src={check} alt='' />
            <p>
              Authorization Microservice{' '}
              <a
                className='text-theme_purple transition hover:text-theme_purple/70'
                target='_blank'
                rel='noreferrer'
                href='https://docs.permit.io/overview/how-does-it-work#the-policy-decision-point-pdp'>
                (PDP)
              </a>
            </p>
          </li>
          <li className='flex items-center gap-x-2'>
            <Image className='shrink-0' src={check} alt='' />
            <p>
              <a
                className='text-theme_purple transition hover:text-theme_purple/70'
                target='_blank'
                rel='noreferrer'
                href='https://docs.permit.io/embeddable-uis/overview'>
                Embeddable authorization
              </a>{' '}
              interfaces (e.g. User Management)
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardCommunity;
