import { FC } from 'react';
import Image from 'next/image';

import bg_ui_desktop from '@/app/(home-new)/assets/section-ui/bg_section_ui_desktop.svg';
import bg_ui_mobile from '@/app/(home-new)/assets/section-ui/bg_section_ui_mobile.svg';

type SectionBGWrapperProps = {
  children: React.ReactNode;
  isRight?: boolean;
  imageMobile?: string;
  imageDesktop?: string;
};

const SectionBGWrapper: FC<SectionBGWrapperProps> = ({
  children,
  isRight = false,
  imageMobile = bg_ui_mobile,
  imageDesktop = bg_ui_desktop,
}) => {
  return (
    <div className='relative overflow-hidden'>
      <div className='relative z-30'>{children}</div>
      <div
        className={`pointer-events-none absolute left-0 top-0 z-20 h-[2px] w-full from-[#FF953F] to-[#974EF2] ${
          isRight ? 'bg-gradient-to-r' : 'bg-gradient-to-l'
        }`}></div>
      <figure className='absolute left-0 top-0 z-10 w-full'>
        <Image src={imageDesktop} alt='' className='hidden w-full lg:block' />
        <Image src={imageMobile} alt='' className='w-full lg:hidden' />
      </figure>
    </div>
  );
};

export default SectionBGWrapper;
