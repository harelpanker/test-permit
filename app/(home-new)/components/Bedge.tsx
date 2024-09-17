import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

type BadgeProps = {
  src: StaticImageData;
  text: string;
  isGray?: boolean;
};

const Badge: FC<BadgeProps> = ({ src, text, isGray = false }) => {
  return (
    <div
      className={`${
        isGray ? 'bg-[#EADDD7]' : 'bg-[#FFE8D7]'
      } flex h-8 items-center gap-1 rounded px-1 pr-2 font-inter text-[10px] font-medium uppercase tracking-[0.5px] transition`}>
      <Image src={src} alt='' />
      <p>{text}</p>
    </div>
  );
};

export default Badge;
