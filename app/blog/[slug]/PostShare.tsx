'use client';

import { FC } from 'react';
import { usePathname } from 'next/navigation';
import linkedin from '../../../public/images/sm/linkedin.svg';
import twitter from '../../../public/images/sm/square-twitter.svg';
import facebook from '../../../public/images/sm/square-facebook.svg';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from 'react-share';
import Image from 'next/image';

type PostShareProps = {};

const PostShare: FC<PostShareProps> = ({}) => {
  const pathname = usePathname();
  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : '';
  const slug = `${origin}${pathname}`;

  return (
    <div className='flex justify-start items-center gap-2 text-base lg:text-lg'>
      <div className='opacity-60'>Share:</div>
      <ul className='flex gap-3 text-[#2F2F2F] text-lg lg:text-xl'>
        <li>
          <LinkedinShareButton url={slug}>
            <Image
              src={linkedin}
              alt='linkedin'
              className='transition hover:text-theme_purple'
              width={17.5}
              height={17.5}
            />
          </LinkedinShareButton>
        </li>
        <li>
          <FacebookShareButton url={slug}>
            <Image
              src={facebook}
              alt='facebook'
              className='transition hover:text-theme_purple'
              width={17.5}
              height={17.5}
            />
          </FacebookShareButton>
        </li>
        <li>
          <TwitterShareButton url={slug}>
            <Image
              src={twitter}
              alt='twitter'
              className='transition hover:text-theme_purple'
              width={17.5}
              height={17.5}
            />
          </TwitterShareButton>
        </li>
      </ul>
    </div>
  );
};

export default PostShare;
