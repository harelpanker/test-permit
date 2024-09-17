'use client';

import { FC, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Facebook, Wand2, Linkedin, Twitter } from 'lucide-react';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from 'react-share';

import ApplayModule from './ApplayModule';

type ApplayAndShareProps = {};

const ApplayAndShare: FC<ApplayAndShareProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const pathname = usePathname();
  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : '';
  const slug = `${origin}${pathname}`;

  return (
    <div className='mt-20'>
      <div className='flex justify-start items-center gap-10 text-base lg:text-lg lg:px-14 mx-auto max-w-3xl'>
        {/* button */}
        <div className='flex'>
          <button
            onClick={openModal}
            className='px-8 flex items-center text-center py-3 font-bold rounded-full bg-theme_purple text-white transition hover:transform hover:scale-105'>
            <Wand2 className='w-4 h-4' />
            <span className='ml-2 whitespace-pre'>Apply</span>
          </button>
        </div>
        {/* share */}
        <div className='flex gap-2'>
          <div className='opacity-60'>Share:</div>
          <ul className='flex gap-3 text-[#2F2F2F] text-lg lg:text-xl'>
            <li>
              <LinkedinShareButton url={`${slug}`}>
                <Linkedin />
              </LinkedinShareButton>
            </li>
            <li>
              <FacebookShareButton url={`${slug}`}>
                <Facebook />
              </FacebookShareButton>
            </li>
            <li>
              <TwitterShareButton url={`${slug}`}>
                <Twitter />
              </TwitterShareButton>
            </li>
          </ul>
        </div>
      </div>
      <ApplayModule isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default ApplayAndShare;
