import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Wand2 } from 'lucide-react';

import image1 from '/public/images/career/more--1.png';
import image2 from '/public/images/career/more--2.png';

type ReadMoreProps = {};

const ReadMore: FC<ReadMoreProps> = ({}) => {
  return (
    <section className='px-4 py-10 lg:px-8 xl:py-20'>
      <div className='container flex max-w-5xl flex-col gap-20'>
        <h2 className='relative z-20 text-center text-3xl font-bold md:text-4xl'>
          Read More
        </h2>

        <ul className='flex flex-col items-center justify-between gap-6 lg:flex-row'>
          <li>
            <a
              target='_blank'
              rel='noopener noreferrer'
              className='hover:shadow-none group flex flex-col overflow-hidden rounded-lg bg-white shadow-video transition duration-500 hover:translate-y-2'
              href='https://techcrunch.com/2022/02/15/permit-io-raises-6m-to-make-permissions-easier/'>
              <figure className='transition duration-500 group-hover:scale-105'>
                <Image src={image2} alt='' />
              </figure>
              <div className='px-6 pb-7 pt-5 text-xl font-bold'>
                <h3 className='min-h-[55px] max-w-[300px]'>
                  Permit.io Raises $6M to Make Permissions Easier
                </h3>
              </div>
            </a>
          </li>

          <li>
            <Link
              passHref
              href='/blog/what-is-authorization'
              className='hover:shadow-none group flex flex-col overflow-hidden rounded-lg bg-white shadow-video transition duration-500 hover:translate-y-2'>
              <figure className='transition duration-500 group-hover:scale-105'>
                <Image src={image1} alt='' />
              </figure>
              <div className='px-6 pb-7 pt-5 text-xl font-bold'>
                <h3 className='min-h-[55px] max-w-[300px]'>
                  What is Authorization
                </h3>
              </div>
            </Link>
          </li>
        </ul>

        <div className='flex justify-center'>
          <a
            href='mailto:rotemh@permit.io'
            className='flex cursor-pointer items-center justify-between gap-4 rounded-full border border-transparent bg-theme_purple px-5 py-2 text-sm font-semibold text-slate-50 transition duration-300 hover:border-theme_purple hover:bg-transparent hover:text-theme_purple'>
            <div className='flex items-center gap-3'>
              <Wand2 className='h-3 w-3' />
              <span>Join Us</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReadMore;
