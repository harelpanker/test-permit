import { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import error_image from '/public/images/not_found.svg';

type NotFoundProps = { link?: string; text?: string };

const NotFound404: FC<NotFoundProps> = ({ link, text }) => {
  return (
    <div className='relative isolate flex items-center text-center pb-20 pt-36 px-5'>
      <div className='container max-w-[370px] flex flex-col gap-9'>
        <div className='flex flex-col items-center gap-2'>
          <div className='font-bold text-4xl text-[#FA934E]'>404</div>
          <h1 className='font-bold text-5xl text-[#20134B]'>Page not found</h1>
        </div>
        <figure className='flex justify-center'>
          <Image src={error_image} alt='error' />
        </figure>
        <div className='flex justify-center'>
          <Link
            href={link ? link : '/'}
            passHref
            className='py-3 px-5 text-[22px] font-bold rounded-full bg-theme_purple text-[#FDFDFC]'>
            {text ? text : 'Back Home'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound404;
