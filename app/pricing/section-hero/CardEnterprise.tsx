import Image from 'next/image';
import { Button } from '@/components/ui/button';

import check from '../assets/hero-section/check_small.svg';
import stars from '../assets/hero-section/stars.svg';

const CardEnterprise = () => {
  const href =
    'https://app.permit.io?utm_source=website&utm_medium=website-pricing&utm_campaign=pricing-enterprise';
  return (
    <div
      className='flex w-full max-w-[340px] flex-col gap-y-14 rounded-lg bg-[#1F1206] px-6 py-9 text-sm text-[#FFDCC3]'
      style={{ boxShadow: '0px 3.5px 22px 0px rgba(0, 0, 0, 0.10)' }}>
      <div className='relative flex min-h-[300px] flex-col justify-between'>
        <div className='flex flex-col gap-y-[10px]'>
          <div className='flex items-center justify-between'>
            <h2 className='text-[26px] font-semibold leading-relaxed'>
              Enterprise
            </h2>
          </div>
          <hr className='border-[#846358]' />
          <p className='font-medium leading-tight text-[#FFDCC3]'>
            Got special requirements? Large organization? Get full access to all
            features, premium support, and pricing tailored to your needs.
          </p>
        </div>

        <div className='flex flex-col items-start gap-y-7'>
          <Image src={stars} alt='' />
          <Button asChild variant={'outline'}>
            <a href={href} rel='noopener noreferrer' target='_blank'>
              Contact Us
            </a>
          </Button>
        </div>
      </div>

      <div className='flex flex-col gap-y-[10px] border-t border-[#846358] pt-[10px]'>
        <h4 className='font-medium'>
          All <span className='font-bold'>Pro</span> Features, plus:
        </h4>
        <ul className='flex flex-col gap-y-[10px] text-[#FFDCC3]'>
          <li className='flex items-center gap-x-2'>
            <Image className='shrink-0' src={check} alt='' />
            <p>Single Sign On</p>
          </li>
          <li className='flex items-center gap-x-2'>
            <Image className='shrink-0' src={check} alt='' />
            <p>Custom uptime and support SLAs</p>
          </li>
          <li className='flex items-center gap-x-2'>
            <Image className='shrink-0' src={check} alt='' />
            <p>
              Compliance: SOC2 Report, HIPAA BAA Agreement, GDPR agreement &
              hosting
            </p>
          </li>
          <li className='flex items-center gap-x-2'>
            <Image className='shrink-0' src={check} alt='' />
            <p>Professional Services</p>
          </li>
          <li className='flex items-center gap-x-2'>
            <Image className='shrink-0' src={check} alt='' />
            <p>
              Advanced Deployment Options (Different Regions, Multi-Cloud, etc.)
            </p>
          </li>
          <li className='flex items-center gap-x-2'>
            <Image className='shrink-0' src={check} alt='' />
            <p>
              <a
                href='https://docs.permit.io/how-to/deploy/on-prem'
                rel='noopener noreferrer'
                target='_blank'
                className='text-[#D3B3FA] transition hover:text-[#D3B3FA]/70'>
                On-Prem
              </a>{' '}
              Deployment Options
            </p>
          </li>
          <li className='flex items-center gap-x-2'>
            <Image className='shrink-0' src={check} alt='' />
            <p>Anomaly detection and UBA (Early Access)</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardEnterprise;
