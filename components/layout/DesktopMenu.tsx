import Image, { StaticImageData } from 'next/image';
import { useWindowScroll } from '@mantine/hooks';
import { Button } from '../ui/button';
import { socialMediaLink } from './navbar-links';

const DesktopMenu = () => {
  const [scroll] = useWindowScroll();
  const dataLayerHandler = () => {
    let dataLayer = (window as any).dataLayer;
    if (typeof window !== 'undefined') {
      dataLayer = dataLayer || [];
      dataLayer.push({
        event: 'slack_header',
        path: window.location.href,
      });
    }
  };

  return (
    <div className='flex items-center gap-6'>
      <div className='flex items-center gap-2'>
        {socialMediaLink.map((link) => (
          <a
            onClick={() => {
              if (link.id === 2) {
                dataLayerHandler();
              }
            }}
            key={link.id}
            className={`${
              link.id === 2 ? 'slack_header' : ''
            } flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#D1B9B0] bg-[#FFF1E7] transition duration-300 hover:border-[#BFA094] hover:bg-[#FFCCA7]`}
            target='_blank'
            rel='noreferrer'
            href={link.link}>
            <Image
              src={link.icon}
              alt={link.name}
              className='pointer-events-none flex'
            />
          </a>
        ))}
      </div>
      <div className={`flex items-center gap-2`}>
        <Button variant='outline' asChild>
          <a href='https://app.permit.io/?utm_source=website&utm_medium=website-home&utm_campaign=nav'>
            Sign In
          </a>
        </Button>
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
      </div>
    </div>
  );
};

export default DesktopMenu;
