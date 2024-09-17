import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import ToggleGroupWrapperMobile from './ToggleGroupWrapperMobile';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';
import Badge from './Bedge';
import CodeBlock from './CodeBlock';

type SectionOneUIMobileItemProps = {
  title: string;
  state: boolean;
  image1: StaticImageData;
  onClick: () => void;
  children: React.ReactNode;
  link: string;
  linkText: string;
  badgeIcon: StaticImageData;
  badgeText: string;
  code: string;
};

const SectionOneUIMobileItem: FC<SectionOneUIMobileItemProps> = ({
  title,
  state,
  image1,
  onClick,
  children,
  link,
  linkText,
  badgeIcon,
  badgeText,
  code,
}) => {
  return (
    <li className='flex flex-col gap-y-4 pb-3 pt-2'>
      <div className='flex flex-col items-start gap-1'>
        <Badge src={badgeIcon} text={badgeText} />
        <h3 className='font-poppins text-lg font-semibold tracking-[-0.5px]'>
          {title}
        </h3>
      </div>
      <div className='flex flex-col gap-y-4 rounded-[20px] bg-[#FFE8D7] py-6'>
        <div className='relative'>
          <figure
            className={`${
              state ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
            } flex min-h-[190px] items-center justify-center px-4 transition duration-500`}>
            <Image src={image1} alt={title} />
          </figure>
          <div
            style={{
              boxShadow: '0px 3.583px 22.397px 0px rgba(0, 0, 0, 0.1)',
            }}
            className={`${
              !state
                ? '-translate-y-1/2 opacity-100'
                : '-translate-y-[46%] opacity-0'
            } absolute left-1/2 top-1/2 mx-auto h-full max-h-full w-full max-w-[90%] -translate-x-1/2 overflow-scroll rounded-lg border-[2.5px] border-[#D1B9B0] bg-[#2A211F] transition duration-500`}>
            <CodeBlock>{code}</CodeBlock>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <ToggleGroupWrapperMobile onClick={onClick} />
        </div>
      </div>
      <div className='flex flex-col gap-2'>{children}</div>
      <div className='flex'>
        <Button
          asChild
          className='group h-auto p-0 text-base font-medium text-theme_purple hover:no-underline'
          variant={'link'}>
          <Link href={link}>
            {linkText}{' '}
            <MoveRight
              size={16}
              className='transition group-hover:translate-x-1'
            />
          </Link>
        </Button>
      </div>
    </li>
  );
};

export default SectionOneUIMobileItem;
