'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useWindowScroll, useViewportSize } from '@mantine/hooks';

import logo from '/public/images/logo_nav.svg';
import Link from 'next/link';

const Header = () => {
  const isMobile = 460;
  const [scroll] = useWindowScroll();
  const { width } = useViewportSize();

  return (
    <header
      className={`${
        scroll.y > (width > isMobile ? 855 : 702)
          ? 'translate-y-0 opacity-100'
          : '-translate-y-full opacity-0'
      } fixed top-0 z-50 flex h-[4.5rem] w-full items-center bg-[#FDF3EE]/50 px-5 shadow-lg backdrop-blur transition duration-300 lg:px-12`}>
      <div className='container flex items-center justify-between'>
        <Link href='/' className='max-w-[150px] lg:max-w-[196px]'>
          <Image width={196} height={68} src={logo} alt='Permit.io logo' />
        </Link>
        <Button variant='default' asChild>
          <a href='https://app.permit.io/?utm_source=website&utm_medium=website-share-if&utm_campaign=nav'>
            Start Now
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
