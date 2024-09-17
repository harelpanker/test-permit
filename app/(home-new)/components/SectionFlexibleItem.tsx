import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

import bg from '../assets/flexible/bg.svg';
import bgLeft from '../assets/flexible/bg-left.svg';
import bgRight from '../assets/flexible/bg-right.svg';

type SectionFlexibleItemProps = {
  src?: StaticImageData;
  isLeft?: boolean;
  isRight?: boolean;
  opacity0?: boolean;
  width?: string;
  src2?: StaticImageData;
  src2opacity?: boolean;
};

const SectionFlexibleItem: FC<SectionFlexibleItemProps> = ({
  src,
  isLeft,
  isRight,
  opacity0,
  width,
  src2,
  src2opacity,
}) => {
  const backgroundImage = isLeft ? bgLeft : isRight ? bgRight : bg;

  return (
    <div className={`${opacity0 ? 'opacity-0' : 'opacity-100'} relative`}>
      <div className='absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center p-4'>
        {src ? (
          <figure>
            <Image
              style={{ maxWidth: width ? `${width}px` : 'auto' }}
              className={`${
                src2opacity
                  ? 'translate-y-3 opacity-0'
                  : 'translate-y-0 opacity-100'
              } transition duration-300`}
              src={src}
              alt=''
            />
            {src2 ? (
              <Image
                style={{ maxWidth: width ? `${width}px` : 'auto' }}
                className={`${
                  src2opacity
                    ? '-translate-y-1/2 opacity-100'
                    : '-translate-y-[52%] opacity-0'
                } absolute left-1/2 top-1/2 max-w-[80%] -translate-x-1/2 -translate-y-1/2 transition duration-300`}
                src={src2}
                alt=''
              />
            ) : null}
          </figure>
        ) : null}
      </div>
      <Image src={backgroundImage} alt='' />
    </div>
  );
};

export default SectionFlexibleItem;
