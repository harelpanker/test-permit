import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

type ImageItemProps = {
  classes: string;
  src: StaticImageData;
};

const ImageItem: FC<ImageItemProps> = ({ classes, src }) => {
  return (
    <figure
      className={`${classes} relative flex lg:rounded-[50px] rounded-3xl shadow-video border-8 border-white overflow-hidden`}>
      <Image src={src} alt='' quality={100} />
    </figure>
  );
};

export default ImageItem;
