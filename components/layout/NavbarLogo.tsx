import Image from 'next/image';
import Link from 'next/link';

import logo from '../../public/images/logo_nav.svg';

const NavbarLogo = () => {
  return (
    <Link className='max-w-[150px] md:max-w-[196px]' href='/'>
      <Image src={logo} alt='Permit logo' priority />
    </Link>
  );
};

export default NavbarLogo;
