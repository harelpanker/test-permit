import { Popover } from '@headlessui/react';
import { FC } from 'react';
import { navLinks } from './navbar-links';
import Link from 'next/link';
import { Button } from '../ui/button';
import { useWindowScroll } from '@mantine/hooks';

type MobileMenuProps = {
  handleOpen: () => void;
};

const MobileMenu: FC<MobileMenuProps> = ({ handleOpen }) => {
  const [scroll] = useWindowScroll();
  return (
    <ul className='flex h-full flex-col justify-between gap-8'>
      <li>
        <nav>
          <Popover.Group className='flex flex-col gap-8' as='ul'>
            {navLinks.map((link) => (
              <li
                className='text-xl font-medium'
                key={link.id}
                onClick={handleOpen}>
                {link.isDrop ? (
                  <Popover>
                    <Popover.Button>{link.name}</Popover.Button>
                    <Popover.Panel className='mt-2 grid rounded border border-[#EADDD7] bg-[#FEF8F4] py-2 font-medium'>
                      {link.links &&
                        link.links.map(
                          (l: { id: number; name: string; link: string }) => (
                            <Link
                              key={l.id}
                              href={l.link}
                              className={`w-full p-4 transition hover:bg-[#F3E7FC] hover:text-[#7011E4]`}>
                              {l.name}
                            </Link>
                          )
                        )}
                    </Popover.Panel>
                  </Popover>
                ) : (
                  <>
                    {!link.external && (
                      <Link href={`${link.link && link.link}`}>
                        {link.name}
                      </Link>
                    )}
                    {link.external && (
                      <a
                        target='_blank'
                        rel='noreferrer'
                        href={`${link.link && link.link}`}>
                        {link.name}
                      </a>
                    )}
                  </>
                )}
              </li>
            ))}
          </Popover.Group>
        </nav>
      </li>
      <li className='flex w-full justify-center'>
        <Button
          className={`${
            scroll.y > 400
              ? 'pointer-events-auto opacity-100'
              : 'pointer-events-none opacity-0'
          } duration-300`}
          variant='default'
          asChild>
          <a href='https://app.permit.io/?utm_source=website&utm_medium=website-home&utm_campaign=nav'>
            Start Now
          </a>
        </Button>
      </li>
    </ul>
  );
};

export default MobileMenu;
