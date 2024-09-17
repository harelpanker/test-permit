import { FC } from 'react';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

type LogosProps = { title?: string };

import iconFacebook from '../public/images/icons/facebook.svg';
import iconMicrosoft from '../public/images/icons/microsoft.svg';
import iconRookout from '../public/images/icons/rookout.svg';
import iconIDF from '../public/images/icons/IDF.svg';

const logos = [
  {
    text: 'Meta',
    src: iconFacebook,
    width: 33,
    height: 33,
  },
  {
    text: 'Microsoft',
    src: iconMicrosoft,
    width: 31,
    height: 31,
  },
  {
    text: 'Rookout',
    src: iconRookout,
    width: 33,
    height: 38,
  },
  {
    text: 'IDF intel. corps',
    src: iconIDF,
    width: 30,
    height: 30,
  },
];

const Logos: FC<LogosProps> = ({ title }) => {
  return (
    <section className='px-4 py-8 md:py-16'>
      {title && (
        <h2 className='text-center text-2xl lg:text-4xl mb-9 lg:mb-12'>
          {title}
        </h2>
      )}
      <ul className='container md:flex-row gap-y-8 flex-col max-w-7xl bg-white rounded-3xl shadow-video px-8 md:px-12 py-8 md:py-16 flex justify-between items-center'>
        {logos.map((logo) => (
          <li key={uuidv4()} className='flex items-center gap-2'>
            <Image
              src={logo.src}
              alt={logo.text}
              width={logo.width}
              height={logo.height}
            />
            <h3 className='text-2xl sm:text-3xl'>{logo.text}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Logos;
