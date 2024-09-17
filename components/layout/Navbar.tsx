'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useWindowScroll, useViewportSize } from '@mantine/hooks';
import NavbarDesktop from './NavbarDesktop';
// import ProductHuntBanner from './ProductHuntBanner';
import MenuMobileButton from './MenuMobileButton';
import NavbarLogo from './NavbarLogo';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [scroll] = useWindowScroll();
  const { width } = useViewportSize();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isMobile = 1024;

  const isNavTransparent =
    pathname === '/about' || pathname === '/' || pathname === '/pricing';
  const isNoHeader = pathname === '/producthunt' || pathname === '/share-if';

  const handleOpen = () => {
    setOpen(!open);
    document.querySelector('body')?.classList.toggle('overflow-hidden');
    document.querySelector('body')?.classList.toggle('h-full');
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 flex w-full flex-col items-center transition duration-300 ${
          isNoHeader ? 'hidden' : 'block'
        } ${isNavTransparent ? '-mb-20' : ''}`}>
        {/* {!open && <ProductHuntBanner />} */}
        {/* desktop nav */}
        <div
          className={`${
            scroll.y > 50 && !open
              ? isNavTransparent
                ? 'bg-[#FDF3EE]/50 backdrop-blur'
                : 'bg-[#FDF3EE]'
              : 'bg-transparent'
          } relative z-20 flex w-full content-center items-center justify-between border-b border-[#EADDD7] px-5 py-1 transition-all duration-300 xl:grid xl:grid-cols-3`}>
          {/* logo */}
          <NavbarLogo />
          {/* nav links desktop */}
          {width >= isMobile && (
            <>
              <NavbarDesktop />
              <div className='overflow-x-hidden'>
                <div
                  className={`hidden w-full items-center justify-end gap-6 transition duration-300 lg:flex ${
                    scroll.y > 400 ? 'translate-x-0' : 'translate-x-32'
                  } `}>
                  <DesktopMenu />
                </div>
              </div>
            </>
          )}

          {/* nav button mobile  */}
          {width < isMobile && (
            <MenuMobileButton open={open} handleOpen={handleOpen} />
          )}
        </div>
      </header>

      {/* mobile menu */}
      {width < 1280 && (
        <div
          className={`fixed inset-0 left-0 top-0 z-20 h-100dvh w-full translate-x-full overflow-auto bg-[#FDF3EE] px-5 pb-8 pt-28 opacity-0 transition lg:hidden ${
            open ? '!translate-x-0 !opacity-100' : ''
          }`}>
          <MobileMenu handleOpen={handleOpen} />
        </div>
      )}
    </>
  );
};

export default Navbar;
