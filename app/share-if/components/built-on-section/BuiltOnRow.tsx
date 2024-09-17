import { FC } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';

import check from '../../assets/built-on/check.svg';

type BuiltOnRowProps = {
  title: string;
  listArray: string[];
  href?: string;
  linkText: string;
  imageDesktopSrc: string;
  imageMobileSrc: string;
};

const BuiltOnRow: FC<BuiltOnRowProps> = ({
  title,
  listArray,
  href = '/',
  linkText,
  imageDesktopSrc,
  imageMobileSrc,
}) => {
  return (
    <div className='flex flex-col items-center justify-center gap-x-9 gap-y-7 lg:flex-row'>
      <div className='flex w-full max-w-[480px] flex-col items-start gap-y-6 px-5 lg:px-0'>
        <h3 className='text-lg font-semibold tracking-[-0.5px] lg:text-[26px]'>
          {title}
        </h3>
        <ul className='flex flex-col gap-y-3'>
          {listArray.map((item) => (
            <li key={item} className='flex items-center gap-3'>
              <Image src={check} alt='' /> <p>{item}</p>
            </li>
          ))}
        </ul>
        <Button asChild variant={'link'}>
          <a
            href={href}
            rel='noopener noreferrer'
            target='_blank'
            className='group/arrow h-auto !p-0 text-base text-[#7011E4] transition-all duration-300 hover:no-underline'>
            <span className='font-medium'>{linkText}</span>
            <MoveRight
              size={16}
              className='transition group-hover/arrow:translate-x-1'
            />
          </a>
        </Button>
      </div>

      <figure className='w-full sm:w-auto'>
        <Image src={imageDesktopSrc} alt='' className='hidden sm:block' />
        <Image src={imageMobileSrc} alt='' className='w-full sm:hidden' />
      </figure>
    </div>
  );
};

export default BuiltOnRow;
