import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';

import card_bg_1 from '../assets/control/bg1.svg';
import card_bg_2 from '../assets/control/bg2.svg';
import FadeUpAnimationWrapper from '@/components/FadeUpAnimationWrapper';
import Badge from './Bedge';

import '../styles/text-pretty.css';

type ControlCardProps = {
  cardBGOption: 'bg1' | 'bg2';
  cardImage: StaticImageData;
  isCenterImage?: boolean;
  tagIcon: StaticImageData;
  tag: string;
  title: string;
  text: string;
  cardLink?: string;
  isExternalLink?: boolean;
  imageMobile: StaticImageData;
};

const ControlCard: FC<ControlCardProps> = ({
  cardBGOption,
  cardImage,
  isCenterImage = true,
  tagIcon,
  tag,
  title,
  text,
  cardLink = '/',
  isExternalLink = false,
  imageMobile,
}) => {
  const ImagePart = () => (
    <>
      <figure className='relative hidden w-full grow items-end justify-center overflow-hidden rounded-lg bg-[#FFF1E7] transition-all duration-300 lg:flex'>
        <div className='hidden lg:block'>
          {isCenterImage ? (
            <Image
              className='absolute left-1/2 top-1/2 z-20 w-full max-w-[90%] -translate-x-1/2 -translate-y-1/2 lg:max-w-sm'
              src={cardImage}
              alt=''
            />
          ) : (
            <Image
              className='absolute left-1/2 top-12 z-20 w-full max-w-[90%] -translate-x-1/2 transition-all duration-300 lg:max-w-sm lg:group-hover:top-8'
              src={cardImage}
              alt=''
            />
          )}
          <Image
            className='absolute left-1/2 top-1/2 z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover transition duration-300 lg:opacity-0 lg:group-hover:opacity-100'
            src={cardBGOption === 'bg1' ? card_bg_1 : card_bg_2}
            alt=''
          />
        </div>
      </figure>
      <figure className='w-full lg:hidden'>
        <Image src={imageMobile} alt='' className='w-full' />
      </figure>
    </>
  );

  const ContentPart = () => (
    <div className='flex flex-col items-start gap-3 px-4 py-5 lg:px-[34px] lg:py-[34px]'>
      {/* tag */}
      <Badge src={tagIcon} text={tag} />
      {/* card text */}
      <div className='flex flex-col gap-2'>
        <h3 className='font-poppins text-2xl font-semibold'>{title}</h3>
        <p className='text-pretty	max-w-[410px] font-inter text-sm lg:text-base'>
          {text}
        </p>
      </div>
      {/* card fake link */}
      <Button
        className='group/arrow h-auto pl-0 text-base font-medium text-[#7011E4] transition-all duration-300 hover:no-underline lg:-mt-[44px] lg:p-0 lg:opacity-0 lg:group-hover:mt-0 lg:group-hover:opacity-100'
        variant={'link'}>
        Learn More{' '}
        <MoveRight
          size={16}
          className='transition group-hover/arrow:translate-x-1'
        />
      </Button>
    </div>
  );

  return (
    <FadeUpAnimationWrapper>
      {isExternalLink ? (
        <a
          href={cardLink}
          rel='noreferrer noopener'
          target='_blank'
          style={{ boxShadow: '0px 0px 6px 2px rgba(67,48,43,0.10)' }}
          className='group flex w-full flex-col rounded-lg bg-[#FDFCFC] p-2 text-[#451E11] transition duration-300 hover:shadow lg:h-[588px] lg:min-h-[554px]'>
          <ImagePart />
          <ContentPart />
        </a>
      ) : (
        <Link
          href={cardLink}
          className='group flex w-full flex-col rounded-lg bg-[#FDFCFC] p-2 text-[#451E11] transition duration-300 hover:shadow lg:h-[588px] lg:min-h-[554px]'
          style={{ boxShadow: '0px 0px 6px 2px rgba(67,48,43,0.10)' }}>
          <ImagePart />
          <ContentPart />
        </Link>
      )}
    </FadeUpAnimationWrapper>
  );
};

export default ControlCard;
