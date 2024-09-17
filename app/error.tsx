'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import Image from 'next/image';

import error_image from '../public/images/not_found.svg';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className='relative isolate flex items-center text-center pb-20 pt-36 px-5'>
      <div className='container max-w-[370px] flex flex-col gap-9'>
        <div className='flex flex-col items-center gap-2'>
          <div className='font-bold text-4xl text-[#FA934E]'>500</div>
          <h1 className='font-bold text-5xl text-[#20134B]'>
            Something went wrong!
          </h1>
        </div>
        <figure className='flex justify-center'>
          <Image src={error_image} alt='error' />
        </figure>
        <div className='flex justify-center'>
          <button
            className='py-3 px-5 text-[22px] font-bold rounded-full bg-theme_purple text-[#FDFDFC]'
            onClick={() => reset()}>
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
