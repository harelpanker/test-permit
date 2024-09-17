import { StaticImageData } from 'next/image';

import honeycomb from '../../../public/images/home/sddefault.png';
import maricopa from '../../../public/images/home/maricopa.jpg';

interface SlideProps {
  imageSrc: StaticImageData;
  altText: string;
  videoUrl: string;
}

export const slidesData: SlideProps[] = [
  {
    imageSrc: honeycomb,
    altText: 'Honeycomb recommendation',
    videoUrl: 'https://youtu.be/-W-79h7FJLQ',
  },
  {
    imageSrc: maricopa,
    altText: 'Maricopa County',
    videoUrl: 'https://youtu.be/AGpTLFGpzcY',
  },
];
