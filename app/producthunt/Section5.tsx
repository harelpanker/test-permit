'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useViewportSize } from '@mantine/hooks';

import section_5_left from '/public/images/plug-and-play/section_5_left.png';
import section_5_left_mobile from '/public/images/plug-and-play/section_5_left_mobile.png';
import section_5_1 from '/public/images/plug-and-play/section_5_1.png';
import section_5_2 from '/public/images/plug-and-play/section_5_2.png';
import section_5_3 from '/public/images/plug-and-play/section_5_3.png';
import section_5_4 from '/public/images/plug-and-play/section_5_4.png';
import section_5_5 from '/public/images/plug-and-play/section_5_5.png';
import section_5_6 from '/public/images/plug-and-play/section_5_6.png';
import section_5_7 from '/public/images/plug-and-play/section_5_7.png';
import section_5_8 from '/public/images/plug-and-play/section_5_8.png';
import section_5_9 from '/public/images/plug-and-play/section_5_9.png';
import section_5_10 from '/public/images/plug-and-play/section_5_10.png';
import section_5_right from '/public/images/plug-and-play/section_5_right.png';
import section_5_right_mobile from '/public/images/plug-and-play/section_5_right_mobile.png';

const row_1_data = [
  { id: 1, src: section_5_left },
  { id: 2, src: section_5_1 },
  { id: 3, src: section_5_2 },
  { id: 4, src: section_5_3 },
  { id: 5, src: section_5_4 },
  { id: 6, src: section_5_5 },
  { id: 7, src: section_5_10 },
];
const row_1_data_mobile_top = [
  { id: 1, src: section_5_left_mobile, isSm: true },
  { id: 2, src: section_5_1, isSm: false },
  { id: 3, src: section_5_2, isSm: false },
  { id: 4, src: section_5_5, isSm: false },
  { id: 5, src: section_5_right_mobile, isSm: true },
];
const row_1_data_mobile_bottom = [
  { id: 1, src: section_5_left_mobile, isSm: true },
  { id: 2, src: section_5_4, isSm: false },
  { id: 3, src: section_5_3, isSm: false },
  { id: 4, src: section_5_6, isSm: false },
  { id: 5, src: section_5_right_mobile, isSm: true },
];
const row_2_data = [
  { id: 1, src: section_5_left },
  { id: 2, src: section_5_7 },
  { id: 3, src: section_5_8 },
  { id: 4, src: section_5_9 },
  { id: 5, src: section_5_right },
];
const row_2_data_mobile = [
  { id: 1, src: section_5_left_mobile, isSm: true },
  { id: 2, src: section_5_7, isSm: false },
  { id: 3, src: section_5_8, isSm: false },
  { id: 4, src: section_5_9, isSm: false },
  { id: 5, src: section_5_right_mobile, isSm: true },
];

const Section5 = () => {
  const { width } = useViewportSize();
  return (
    <section className='bg-[#FFF1E7] px-1 py-16 text-center lg:px-12'>
      <div className='container flex flex-col gap-6 lg:gap-16'>
        <h2 className='text-2xl font-bold lg:text-4xl'>
          <span className='bg-gradient-to-r from-[#974EF2] to-[#F76808] bg-clip-text text-transparent'>
            Flexible, Customizable,{' '}
          </span>
          <br className='' />
          <span className='bg-gradient-to-r from-[#974EF2] to-[#F76808] bg-clip-text text-transparent'>
            and Scalable Implementation
          </span>
        </h2>

        <ul className='flex flex-col items-center gap-6 lg:gap-9'>
          <li className='flex flex-col items-center gap-2'>
            <h3 className='text-sm font-semibold uppercase tracking-[.5px] text-[#A18072] lg:text-lg'>
              <span className='block lg:inline-block'>
                Supports{' '}
                <span className='bg-gradient-to-r from-[#AD55BE] to-[#B757A5] bg-clip-text text-transparent'>
                  any
                </span>
              </span>{' '}
              Authentication provider
            </h3>
            <ul className='hidden w-full gap-2 md:grid md:grid-cols-7 md:gap-3'>
              {row_1_data.map((item) => (
                <li key={item.id}>
                  <figure>
                    <Image
                      className='max-h-[90px] max-w-[96px] lg:max-h-[122px] lg:max-w-[130px]'
                      src={item.src}
                      alt=''
                    />
                  </figure>
                </li>
              ))}
            </ul>
            <div className='flex flex-col gap-2 md:hidden'>
              <ul className='flex w-full gap-2'>
                {row_1_data_mobile_top.map((item) => (
                  <li key={item.id}>
                    <figure>
                      <Image
                        className={`${
                          item.isSm ? 'max-w-[32px]' : 'max-w-[96px]'
                        } max-h-[90px]`}
                        src={item.src}
                        alt=''
                      />
                    </figure>
                  </li>
                ))}
              </ul>
              <ul className='flex w-full gap-2'>
                {row_1_data_mobile_bottom.map((item) => (
                  <li key={item.id}>
                    <figure>
                      <Image
                        className={`${
                          item.isSm ? 'max-w-[32px]' : 'max-w-[96px]'
                        } max-h-[90px]`}
                        src={item.src}
                        alt=''
                      />
                    </figure>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className='flex flex-col items-center gap-2'>
            <h3 className='text-sm font-semibold uppercase tracking-[.5px] text-[#A18072] lg:text-lg'>
              <span className='block lg:inline-block'>
                Generates Policy-as-Code
              </span>{' '}
              for your engine of choice
            </h3>
            <ul className='hidden w-full grid-cols-2 gap-2 md:grid md:grid-cols-5 md:gap-3'>
              {row_2_data.map((item) => (
                <li key={item.id}>
                  <figure>
                    <Image
                      className='max-h-[90px] max-w-[96px] lg:max-h-[122px] lg:max-w-[130px]'
                      src={item.src}
                      alt=''
                    />
                  </figure>
                </li>
              ))}
            </ul>
            <ul className='flex w-full gap-2 md:hidden'>
              {row_2_data_mobile.map((item) => (
                <li key={item.id}>
                  <figure>
                    <Image
                      className={`${
                        item.isSm ? 'max-w-[32px]' : 'max-w-[96px]'
                      } max-h-[90px]`}
                      src={item.src}
                      alt=''
                    />
                  </figure>
                </li>
              ))}
            </ul>
          </li>
          <li className='flex flex-col items-center gap-2'>
            <h3 className='text-sm font-semibold uppercase tracking-[.5px] text-[#A18072] lg:text-lg'>
              <span className='block lg:inline-block'>Supports multiple</span>{' '}
              policy models
            </h3>
            <div className='flex w-full justify-center gap-2 md:gap-3'>
              <Link
                target='_blank'
                href='/rbac'
                className='flex h-[90px] w-[96px] items-center justify-center rounded-md border-[2px] border-[#FFDCC3] bg-white text-center font-extrabold text-theme_purple lg:h-[122px] lg:w-[130px] lg:text-[22px]'>
                RBAC
              </Link>
              <Link
                target='_blank'
                href='/abac'
                className='flex h-[90px] w-[96px] items-center justify-center rounded-md border-[2px] border-[#FFDCC3] bg-white text-center font-extrabold text-theme_purple lg:h-[122px] lg:w-[130px] lg:text-[22px]'>
                ABAC
              </Link>
              <Link
                target='_blank'
                href='/rebac'
                className='flex h-[90px] w-[96px] items-center justify-center rounded-md border-[2px] border-[#FFDCC3] bg-white text-center font-extrabold text-theme_purple lg:h-[122px] lg:w-[130px] lg:text-[22px]'>
                ReBAC
              </Link>
            </div>
          </li>
        </ul>

        {/* All without having to add a single line of code - while leaving the code  fully accessible and editable. */}
        {width > 1024 ? (
          <h2 className='text-2xl font-bold lg:text-4xl'>
            <span className='lg:bg-gradient-to-r lg:from-[#974EF2] lg:to-[#F76808] lg:bg-clip-text lg:text-transparent'>
              All without having to add a single line of code -{' '}
            </span>
            <br />
            <span className='lg:bg-gradient-to-r lg:from-[#974EF2] lg:to-[#F76808] lg:bg-clip-text lg:text-transparent'>
              while leaving the code fully accessible and editable.
            </span>
          </h2>
        ) : (
          <h2 className='text-2xl font-bold lg:text-4xl'>
            <span className='bg-gradient-to-r from-[#974EF2] to-[#F76808] bg-clip-text text-transparent'>
              All without having to add a
            </span>{' '}
            <span className='block bg-gradient-to-r from-[#974EF2] to-[#F76808] bg-clip-text text-transparent'>
              single line of code -
            </span>{' '}
            <span className='bg-gradient-to-r from-[#974EF2] to-[#F76808] bg-clip-text text-transparent'>
              while leaving the code fully
            </span>{' '}
            <span className='bg-gradient-to-r from-[#974EF2] to-[#F76808] bg-clip-text text-transparent'>
              accessible and editable.
            </span>
          </h2>
        )}
      </div>
    </section>
  );
};

export default Section5;
