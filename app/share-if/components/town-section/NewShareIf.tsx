import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';

import image from '../../assets/town-section/side-image.svg';
import imageMobile from '../../assets/town-section/side-image-mobile.svg';
import icon from '../../assets/town-section/icon.svg';
import check from '../../assets/town-section/check.svg';

const NewShareIf = () => {
  const href = '/elements';
  return (
    <div className='flex justify-center overflow-hidden lg:h-[900px]'>
      <div className='container flex max-w-[1132px] flex-col items-center gap-x-8 gap-y-6 lg:flex-row lg:items-start xl:gap-x-16'>
        <div className='flex w-full max-w-[588px] shrink-0 flex-col items-start justify-center gap-y-9 px-5 pt-14 lg:h-full lg:px-0 lg:pt-0'>
          <div className='flex flex-col gap-y-2'>
            <div className='relative'>
              <h2 className='min-w-[320px] text-4xl font-semibold leading-tight tracking-tight lg:text-5xl lg:leading-tight'>
                There&apos;s a New
                <br />
                <span className='pl-[42px] lg:pl-[52px]'></span>
                <span className='text-[#F76808]'>Share-if</span> in Town
              </h2>
              <Image
                className='absolute -left-1 bottom-[2px] top-auto max-w-[42px] lg:bottom-1 lg:max-w-none'
                src={icon}
                alt=''
              />
            </div>
            <p className='font-poppins text-lg font-semibold leading-snug tracking-[-1px] text-[#846358] lg:text-[26px]'>
              Delegate fully functional access control to your users with
              secure, embeddable UI components
            </p>
          </div>
          {/*  */}
          <ul className='flex w-full max-w-[518px] flex-col gap-y-6'>
            <li className='flex items-start gap-x-3'>
              <Image className='shrink-0' src={check} alt='' />
              <p>
                <strong className='font-medium'>Tried and True:</strong> The
                same access-sharing interfaces your users know - without
                building anything from scratch
              </p>
            </li>
            <li className='flex items-start gap-x-3'>
              <Image className='shrink-0' src={check} alt='' />
              <p>
                <strong className='font-medium'>
                  Fully Customizable, API Supported:
                </strong>{' '}
                Tailor each component to integrate perfectly with your app via
                UI and full API support
              </p>
            </li>
            <li className='flex items-start gap-x-3'>
              <Image className='shrink-0' src={check} alt='' />
              <p>
                <strong className='font-medium'>Keep Outlaws Out:</strong>{' '}
                Manage complex authorization policies within safe interface
                boundaries, enforce separation between tenants.
              </p>
            </li>
            <li className='flex items-start gap-x-3'>
              <Image className='shrink-0' src={check} alt='' />
              <p>
                <strong className='font-medium'>
                  Relationship-Based Access Control - Simplified:
                </strong>{' '}
                A user-friendly solution for ReBAC, simplifying hierarchies,
                relationships, and building permissions around them
              </p>
            </li>
          </ul>
          {/*  */}
          <Button asChild variant={'link'}>
            <a
              href={href}
              className='group/arrow h-auto !p-0 text-[#7011E4] transition-all duration-300 hover:no-underline'>
              <span className='font-medium'>Learn more about elements</span>
              <MoveRight
                size={16}
                className='transition group-hover/arrow:translate-x-1'
              />
            </a>
          </Button>
        </div>
        {/*  */}
        <div className='marquee-wrapper relative hidden shrink-0 overflow-hidden lg:block'>
          <div className='marquee flex flex-col'>
            {[...Array(2)].map((_, index) => (
              <div key={index} className='flex h-full flex-col'>
                <figure>
                  <Image
                    className='mb-6 h-[972px] w-[737px]'
                    src={image}
                    alt=''
                    priority
                  />
                </figure>
                <figure>
                  <Image
                    className='mb-6 h-[972px] w-[737px]'
                    src={image}
                    alt=''
                    priority
                  />
                </figure>
                <figure>
                  <Image
                    className='mb-6 h-[972px] w-[737px]'
                    src={image}
                    alt=''
                    priority
                  />
                </figure>
              </div>
            ))}
          </div>
          <div className='pointer-events-none absolute inset-0 left-0 top-0 flex h-[900px] flex-col justify-end'>
            <div className='h-[126px] w-full bg-gradient-to-t from-[#FDF3EC] to-transparent'></div>
          </div>
        </div>

        <div className='horizontal-marquee-wrapper overflow-hidden lg:hidden'>
          <div className='horizontal-marquee flex gap-x-4'>
            {[...Array(2)].map((_, index) => (
              <div key={index} className='shrink-0'>
                <Image src={imageMobile} priority alt='' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewShareIf;
