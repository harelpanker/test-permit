import { FC } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';

import dot from '../../assets/access-sharing/dot.svg';

type AccessSharingCardProps = {
  title: string;
  description: string;
  array: string[];
  linkHref: string;
  linkText: string;
  imageSrc: string;
};

const AccessSharingCard: FC<AccessSharingCardProps> = ({
  title,
  description,
  array,
  linkHref,
  linkText,
  imageSrc,
}) => {
  return (
    <div className='flex w-full flex-col justify-between gap-x-9 gap-y-6 overflow-hidden rounded-2xl border-2 border-[#E0CEC7] bg-[#FEFCFB] transition duration-300 lg:flex-row lg:rounded-[20px] lg:hover:-translate-y-1 lg:hover:shadow-lg'>
      <div className='flex grow flex-col items-start justify-center gap-y-6 px-5 pt-6 lg:py-6 lg:pl-16 lg:pr-3'>
        <div className='flex flex-col gap-y-2'>
          <div className='flex items-center gap-x-2'>
            <h3 className='text-lg font-semibold tracking-[-0.5px] lg:text-[26px]'>
              {title}
            </h3>
            <div className='rounded-[2px] bg-[#12A594] px-[6px] py-[2px] text-sm font-semibold text-[#FDFCFF]'>
              New
            </div>
          </div>
          <p className='max-w-[25rem] font-poppins text-lg font-semibold leading-snug text-[#846358]'>
            {description}
          </p>
        </div>

        <ul className='flex flex-col gap-y-6'>
          {array.map((item) => (
            <li key={item} className='flex items-center gap-x-3'>
              <Image className='shrink-0' src={dot} alt='' />
              <p>{item}</p>
            </li>
          ))}
        </ul>

        <Button asChild variant={'link'}>
          <a
            href={linkHref}
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

      <figure className='shrink-0'>
        <Image className='h-full object-cover' src={imageSrc} alt='' />
      </figure>
    </div>
  );
};

export default AccessSharingCard;
