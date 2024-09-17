'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import imageLight from '../../assets/easy-1.svg';
import imageDark from '../../assets/easy-1-dark.svg';
import topDark from '../../assets/dark-color.svg';
import topLight from '../../assets/light-color.svg';
import dot from '../../assets/dot.svg';
import imageSwitch from '../../assets/switch.svg';

const Row1 = () => {
  const [state, setState] = useState<boolean>(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setState((prevState) => !prevState);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className='flex w-full flex-col items-center gap-x-16 gap-y-6 lg:flex-row'>
      <div className='flex w-full max-w-[480px] flex-col gap-y-4 lg:gap-y-6'>
        <div className='flex flex-col lg:gap-y-2'>
          <h3 className='text-lg font-semibold tracking-[-0.5px] lg:text-[26px]'>
            Make it your own
          </h3>
          <p className='font-poppins text-lg font-semibold text-[#846358]'>
            Secure, event-driven, compliant.
          </p>
        </div>
        <div className='flex flex-col gap-y-2 lg:gap-y-6'>
          <p>
            <span className='lg:block'>
              Easily match element design to your brand -{' '}
            </span>
            change color and set light / dark mode.
          </p>
          <p>
            Full control over the information / data / titles presented in the
            component.
          </p>
          <p>Full flexibility and control via the API.</p>
        </div>
      </div>

      <div className='flex flex-col gap-y-6'>
        <figure className='relative rounded-xl shadow-md'>
          <Image
            className={`transition duration-300 ${
              state ? 'opacity-0' : 'opacity-100'
            }`}
            src={imageLight}
            alt=''
          />
          <Image
            className={`absolute left-0 top-0 z-10 transition duration-300 ${
              state ? 'opacity-100' : 'opacity-0'
            }`}
            src={imageDark}
            alt=''
          />
        </figure>
        <div className='flex items-center justify-between lg:order-first'>
          <div className='relative'>
            <Image
              className={`transition duration-300 ${
                state ? 'opacity-0' : 'opacity-100'
              }`}
              src={topLight}
              alt=''
            />
            <Image
              className={`absolute left-0 top-0 z-10 transition duration-300 ${
                state ? 'opacity-100' : 'opacity-0'
              }`}
              src={topDark}
              alt=''
            />
          </div>
          <div className='relative'>
            <Image className={``} src={imageSwitch} alt='' />
            <Image
              className={`absolute left-0 top-0 z-10  transition duration-300 ${
                state ? 'translate-x-0' : 'translate-x-full'
              }`}
              src={dot}
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Row1;
