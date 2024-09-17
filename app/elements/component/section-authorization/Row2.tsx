'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useViewportSize } from '@mantine/hooks';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';
import imageDesktop1 from '../../assets/authorization-section/access-request.svg';
import imageDesktop2 from '../../assets/authorization-section/operation-approval.svg';
import imageDesktop3 from '../../assets/authorization-section/approval-management.svg';
import imageMobile1 from '../../assets/authorization-section/access-request-mobile.svg';
import imageMobile2 from '../../assets/authorization-section/operation-approval-mobile.svg';
import imageMobile3 from '../../assets/authorization-section/approval-management-mobile.svg';
import dot from '../../assets/authorization-section/dot.svg';

import '@splidejs/react-splide/css';
import './styles.css';

const Row2 = () => {
  const href =
    'https://docs.permit.io/embeddable-uis/element/operation-approval';
  const data = [
    {
      title: 'Access Request',
      text: 'Allows users to request resource access.',
    },
    {
      title: 'Operation Approval',
      text: 'Allows users to get approval for completing operations.',
    },
    {
      title: 'Approval Management',
      text: 'Allows users to review operation approval requests.',
    },
  ];
  const { width } = useViewportSize();
  const [state, setState] = useState<
    'Access Request' | 'Operation Approval' | 'Approval Management'
  >('Access Request');

  return (
    <div className='relative flex w-full flex-col items-center gap-x-16 gap-y-6 lg:flex-row'>
      <div className='flex w-full max-w-[480px] flex-col gap-y-4 px-5 lg:gap-y-6 lg:px-0'>
        <div className='flex flex-col lg:gap-y-2'>
          <div className='flex items-center gap-x-2'>
            <h3 className='text-lg font-semibold tracking-[-0.5px] lg:text-[26px]'>
              Approval Flows
            </h3>
            <div className='rounded-[2px] bg-[#12A594] px-[6px] py-[2px] text-sm font-semibold text-[#FDFCFF]'>
              New
            </div>
          </div>
          <p className='font-poppins text-lg font-semibold text-[#846358]'>
            Enable your users to manage access and process approval requests
          </p>
        </div>
        <ul className='flex flex-col gap-y-2 lg:gap-y-4'>
          {data.map((item) => (
            <li key={item.title} className='flex items-center gap-x-3'>
              <Image className='shrink-0' src={dot} alt='' />
              <div>
                <h4 className='font-medium'>{item.title}</h4>
                <p>{item.text}</p>
              </div>
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

      {width > 640 ? (
        <div className='flex flex-col gap-y-3'>
          <div className='relative'>
            <Image
              className={`transition duration-300 ${
                state === 'Access Request'
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-3 opacity-0'
              }`}
              src={imageDesktop1}
              alt=''
            />
            <Image
              className={`absolute inset-0 transition duration-300 ${
                state === 'Operation Approval'
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-3 opacity-0'
              }`}
              src={imageDesktop2}
              alt=''
            />
            <Image
              className={`absolute inset-0 transition duration-300 ${
                state === 'Approval Management'
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-3 opacity-0'
              }`}
              src={imageDesktop3}
              alt=''
            />
          </div>
          <div className='flex justify-center'>
            <div className='flex text-sm font-medium leading-none'>
              <div
                className={`${
                  state === 'Access Request' ? 'z-20' : 'z-10'
                } relative z-20 rounded-l border border-r-0 border-[#D1B9B0] p-px`}>
                <button
                  onClick={() => setState('Access Request')}
                  className={`${
                    state === 'Access Request'
                      ? 'pointer-events-none bg-[#FFE8D7] ring-2'
                      : 'pointer-events-auto bg-[#FEF8F4] ring-0'
                  } rounded-l-[2px] p-2 ring-[#FFB381] transition duration-300 hover:bg-[#fff1e7]`}>
                  Access Request
                </button>
              </div>

              <div>
                <div className='h-full w-px bg-[#D1B9B0]'></div>
              </div>

              <div
                className={`${
                  state === 'Operation Approval' ? 'z-20' : 'z-10'
                } relative z-20 border border-x-0 border-[#D1B9B0] p-px`}>
                <button
                  onClick={() => setState('Operation Approval')}
                  className={`${
                    state === 'Operation Approval'
                      ? 'pointer-events-none bg-[#FFE8D7] ring-2'
                      : 'pointer-events-auto bg-[#FEF8F4] ring-0'
                  } bg-[#FEF8F4] p-2 ring-[#FFB381] transition duration-300 hover:bg-[#fff1e7]`}>
                  Operation Approval
                </button>
              </div>

              <div>
                <div className='h-full w-px bg-[#D1B9B0]'></div>
              </div>

              <div
                className={`${
                  state === 'Approval Management' ? 'z-20' : 'z-10'
                } relative z-20 rounded-r border border-l-0 border-[#D1B9B0] p-px`}>
                <button
                  onClick={() => setState('Approval Management')}
                  className={`${
                    state === 'Approval Management'
                      ? 'pointer-events-none bg-[#FFE8D7] ring-2'
                      : 'pointer-events-auto bg-[#FEF8F4] ring-0'
                  } rounded-r-[2px] bg-[#FEF8F4] p-2 ring-[#FFB381] transition duration-300 hover:bg-[#fff1e7]`}>
                  Approval Management
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='slider_wrapper'>
          <Splide
            options={{
              rewind: true,
              width: '100%',
              arrows: false,
              trimSpace: false,
              direction: 'ltr',
              autoplay: true,
              easing: 'cubic-bezier(.22,.48,.23,.92)',
              pagination: true,
              interval: 7000,
              speed: 800,
            }}
            tag='section'
            aria-label='Testimonials'>
            <SplideSlide>
              <Image src={imageMobile1} alt='' />
            </SplideSlide>
            <SplideSlide>
              <Image src={imageMobile2} alt='' />
            </SplideSlide>
            <SplideSlide>
              <Image src={imageMobile3} alt='' />
            </SplideSlide>
          </Splide>
        </div>
      )}

      <div
        id='approval-flows'
        className='pointer-events-none absolute -top-24 left-0 w-full'></div>
    </div>
  );
};

export default Row2;
