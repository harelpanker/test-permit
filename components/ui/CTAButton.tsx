import { FC } from 'react';
import { Wand2 } from 'lucide-react';

type CTAButtonProps = {
  text: string;
  icon?: boolean;
  bgColor?: 'black' | 'purple' | 'FFB381';
  link?: string;
  isSmall?: boolean;
};

const CTAButton: FC<CTAButtonProps> = ({
  text,
  icon,
  bgColor,
  link,
  isSmall,
}) => {
  return (
    <a
      target={link?.includes('https://app.permit.io/') ? '_self' : '_blank'}
      rel={
        link?.includes('https://app.permit.io/') ? '' : 'noopener noreferrer'
      }
      className={`${!bgColor ? 'bg-theme_black2' : 'bg-theme_purple'} ${
        icon ? 'flex items-center gap-1' : null
      } ${
        isSmall
          ? 'px-5 py-2 text-sm sm:text-base'
          : 'px-7 py-3 text-base sm:text-xl'
      } get_started flex items-center whitespace-nowrap rounded-full text-center font-bold text-white transition hover:bg-opacity-70`}
      href={
        link
          ? link
          : 'https://app.permit.io/?utm_source=website&utm_medium=website'
      }>
      <span className='get_started mb-px'>{text}</span>
      {icon && <Wand2 className='get_started' size={16} />}
    </a>
  );
};

export default CTAButton;
