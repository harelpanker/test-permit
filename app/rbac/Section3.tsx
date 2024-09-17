'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { animate, inView } from 'motion';
import { BookOpenCheck } from 'lucide-react';
import CodeTabs from '@/components/CodeTabs';

import image1 from '/public/images/rbac/s3-1.png';
import image2 from '/public/images/rbac/s3-2.png';
import image3 from '/public/images/rbac/s3-3.png';
import image4 from '/public/images/rbac/s3-4.png';
import bgDesktop from '/public/images/rbac/s3-bg-d.png';
import bgMobile from '/public/images/rbac/s3-bg-m.png';

import 'highlight.js/styles/night-owl.css';

const Section3 = () => {
  useEffect(() => {
    inView('.li__add_animate.is-1', (info) => {
      animate(
        info.target,
        { opacity: [0.3, 1], y: [50, 0] },
        { delay: 0.3, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
      );
    });
    inView('.li__add_animate.is-2', (info) => {
      animate(
        info.target,
        { opacity: [0.3, 1], y: [50, 0] },
        { delay: 0.5, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
      );
    });
    inView('.li__add_animate.is-3', (info) => {
      animate(
        info.target,
        { opacity: [0.3, 1], y: [50, 0] },
        { delay: 0.7, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
      );
    });
    inView('.li__add_animate.is-4', (info) => {
      animate(
        info.target,
        { opacity: [0.3, 1], y: [50, 0] },
        { delay: 0.9, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
      );
    });
  }, []);

  return (
    <div className='relative z-10 bg-[#FDF8F6] px-5 pb-[8dvh] pt-16 lg:px-12 lg:pb-[10dvh] lg:pt-24'>
      <div className='container relative z-20 flex w-full max-w-[970px] flex-col gap-16 lg:gap-32'>
        <section className='flex flex-col gap-11 lg:gap-16'>
          <header className='mx-auto flex max-w-[324px] flex-col items-center gap-4 text-center lg:mx-0 lg:max-w-[546px] lg:items-start lg:gap-6 lg:text-left'>
            <div className='flex flex-col gap-4'>
              <h3 className='hidden text-sm font-bold uppercase tracking-wider text-[#F76808] md:block lg:text-lg'>
                Author RBAC POLICIES with EASE
              </h3>
              <h3 className='text-sm font-bold uppercase tracking-wider text-[#F76808] md:hidden lg:text-lg'>
                Role Based Access Control
              </h3>
              <h2 className='max-w-[18rem] text-3xl font-bold text-[#451E11] lg:max-w-none lg:text-4xl'>
                Effortless implementation and management
              </h2>
            </div>
            <p className='mx-auto text-lg font-medium text-[#43302B] lg:text-[22px]'>
              Create and manage robust RBAC authorization policies in an
              easy-to-use, fully customizable, no-code UI.
            </p>
            <div className='flex'>
              <a
                href='https://app.permit.io/?utm_source=website&utm_medium=website-rbac'
                className='rounded-full bg-gradient-to-r from-[rgba(255,177,113,0.40)] to-[rgba(189,138,252,0.4)] px-5 py-3 text-lg font-bold text-theme_purple transition hover:opacity-90 lg:text-[22px]'>
                Add it to your app in minutes!
              </a>
            </div>
          </header>
          <ul className='ul_add_animate mx-auto grid w-full max-w-[360px] text-center lg:max-w-none lg:grid-cols-2 lg:gap-16 lg:gap-x-16 lg:text-left'>
            {/* item 1 */}
            <li className='li__add_animate is-1 mb-11 lg:mb-0'>
              <div className='mb-2 flex flex-col items-center gap-2 lg:items-start lg:gap-5'>
                <div className='flex h-9 w-9 items-center justify-center rounded-full bg-theme_purple/20 text-lg font-bold text-theme_purple  lg:h-11 lg:w-11 lg:text-[22px]'>
                  1
                </div>
                <h3 className='text-[22px] font-bold text-[#451E11]'>
                  Create a role
                </h3>
              </div>
              <p className='mb-5 font-medium text-[#846358]'>
                <span className='lg:block'>
                  Unlimited dynamic roles with a click in the{' '}
                </span>
                UI, or a simple API call
              </p>
              <figure className='relative flex w-full max-w-full justify-center lg:justify-start'>
                <Image width={268} height={42} src={image1} alt='' />
              </figure>
            </li>
            {/* item 2 */}
            <li className='li__add_animate is-2 mb-24 lg:mb-0'>
              <div className='mb-2 flex flex-col items-center gap-2 lg:items-start lg:gap-5'>
                <div className='flex h-9 w-9 items-center justify-center rounded-full bg-theme_purple/20 text-lg font-bold text-theme_purple  lg:h-11 lg:w-11 lg:text-[22px]'>
                  2
                </div>
                <h3 className='text-[22px] font-bold text-[#451E11]'>
                  Assign it to a user
                </h3>
              </div>
              <p className='mb-5 font-medium text-[#846358]'>
                <span className='lg:block'>
                  Each user can have multiple roles in{' '}
                </span>
                multiple tenants
              </p>
              <figure className='relative aspect-[358/210] max-w-full'>
                <Image
                  className='absolute inset-0 left-[160px] top-32 max-w-[130vw] -translate-x-1/2 -translate-y-1/2 lg:top-[126px]'
                  width={532}
                  height={516}
                  src={image2}
                  alt=''
                />
              </figure>
            </li>
            {/* item 3 */}
            <li className='li__add_animate is-3 mb-14 lg:mb-0'>
              <div className='mb-2 flex flex-col items-center gap-2 lg:items-start lg:gap-5'>
                <div className='flex h-9 w-9 items-center justify-center rounded-full bg-theme_purple/20 text-lg font-bold text-theme_purple  lg:h-11 lg:w-11 lg:text-[22px]'>
                  3
                </div>
                <h3 className='text-[22px] font-bold text-[#451E11]'>
                  Create a resource
                </h3>
              </div>
              <p className='mb-5 font-medium text-[#846358]'>
                <span className='lg:block'>
                  Connect roles to resources and easily map
                </span>
                out your application&apos;s logic
              </p>
              <figure className='relative flex w-full max-w-full justify-center lg:justify-start'>
                <Image src={image3} width={307} height={129} alt='' />
              </figure>
            </li>
            {/* item 4 */}
            <li className='li__add_animate is-4'>
              <div className='mb-2 flex flex-col items-center gap-2 lg:items-start lg:gap-5'>
                <div className='flex h-9 w-9 items-center justify-center rounded-full bg-theme_purple/20 text-lg font-bold text-theme_purple  lg:h-11 lg:w-11 lg:text-[22px]'>
                  4
                </div>
                <h3 className='text-[22px] font-bold text-[#451E11]'>
                  Set up permissions
                </h3>
              </div>
              <p className='mb-5 font-medium text-[#846358]'>
                It&apos;s literally ticking a box!
              </p>
              <figure className='relative aspect-[344/246] max-w-full'>
                <Image
                  className='absolute inset-0 left-[160px] top-32 max-w-[130vw] -translate-x-1/2 -translate-y-1/2 lg:top-[126px]'
                  width={532}
                  height={415}
                  src={image4}
                  alt=''
                />
              </figure>
            </li>
          </ul>
        </section>
        <section className='flex flex-col items-center gap-4 lg:flex-row lg:justify-between lg:gap-16'>
          <header className='flex w-full max-w-[340px] flex-col gap-3 text-center lg:text-left'>
            <h2 className='pb-1 text-3xl font-bold text-transparent lg:text-4xl'>
              <span className='text-[#451E11]'>APIs for</span>{' '}
              <br className='hidden lg:block' />
              <span className='bg-gradient-to-r from-[#974ef2] to-[#f76808] bg-clip-text'>
                everything
              </span>
            </h2>
            <p className='text-lg font-medium text-[#451E11] lg:text-[22px]'>
              Create, manage and automate your policies with Permit&lsquo;s API.
              Anything done via the UI can be done with our API as well!
            </p>
            <a
              target='_blank'
              rel='noopener noreferrer'
              className='mt-4 hidden items-center gap-2 text-lg font-semibold text-theme_purple hover:text-theme_purple lg:flex lg:text-theme_purple/80'
              href='https://api.permit.io/redoc'>
              <BookOpenCheck />
              <span>Check Out the API Docs</span>
            </a>
          </header>
          {/* table */}
          <CodeTabs />

          <a
            target='_blank'
            rel='noopener noreferrer'
            className='mt-4 flex items-center gap-2 text-lg font-semibold text-theme_purple hover:text-theme_purple lg:hidden lg:text-theme_purple/80'
            href='https://api.permit.io/redoc'>
            <BookOpenCheck />
            <span>Check Out the API Docs</span>
          </a>
        </section>
      </div>
      {/* bg */}
      <Image
        className='absolute inset-0 bottom-0 left-0 top-auto w-full object-cover md:hidden'
        src={bgMobile}
        alt=''
      />
      <Image
        className='absolute inset-0 -bottom-[14dvh] left-0 top-auto hidden w-full object-cover md:block'
        src={bgDesktop}
        alt=''
      />
    </div>
  );
};

export default Section3;
