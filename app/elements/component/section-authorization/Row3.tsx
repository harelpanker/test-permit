'use client';

import Image from 'next/image';
import { useViewportSize } from '@mantine/hooks';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';

import imageDesktop from '../../assets/authorization-section/audit-log.svg';
import imageMobile from '../../assets/authorization-section/audit-log-mobile.svg';
import dot from '../../assets/authorization-section/dot.svg';

const Row3 = () => {
  const href = 'https://docs.permit.io/embeddable-uis/element/audit-logs';
  const { width } = useViewportSize();
  const data = [
    'Use the permission levels to define who can view access control audit logs.',
    'Track and trace user activity in an easy-to-use, secure, embeddable UI component.',
    'Enforce security and provide your users with a detailed history of access events.',
  ];

  return (
    <div className='relative flex w-full flex-col items-center gap-x-16 gap-y-6 lg:flex-row'>
      <div className='flex w-full max-w-[480px] flex-col gap-y-4 px-5 lg:gap-y-6 lg:px-0'>
        <div className='flex flex-col lg:gap-y-2'>
          <h3 className='text-lg font-semibold tracking-[-0.5px] lg:text-[26px]'>
            Audit Logs
          </h3>
          <p className='font-poppins text-lg font-semibold text-[#846358]'>
            Provide your users with decision monitoring capabilities for each
            access control policy
          </p>
        </div>
        <ul className='flex flex-col gap-y-2 lg:gap-y-4'>
          {data.map((item) => (
            <li key={item} className='flex items-center gap-x-3'>
              <Image className='shrink-0' src={dot} alt='' />
              <p>{item}</p>
            </li>
          ))}
        </ul>
        <div className='flex'>
          <Button asChild variant={'link'}>
            <a
              href={href}
              target='_blank'
              rel='noopener noreferrer'
              className='group/arrow h-auto !p-0 text-base text-[#7011E4] transition-all duration-300 hover:no-underline'>
              <span className='font-medium'>Learn More</span>
              <MoveRight
                size={16}
                className='transition group-hover/arrow:translate-x-1'
              />
            </a>
          </Button>
        </div>
      </div>

      <figure>
        <Image src={width >= 430 ? imageDesktop : imageMobile} alt='' />
      </figure>

      <div
        id='audit-logs'
        className='pointer-events-none absolute -top-24 left-0 w-full'></div>
    </div>
  );
};

export default Row3;
