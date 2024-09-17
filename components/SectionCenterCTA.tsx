'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import ConversationModule from '@/components/ui/ConversationModule';

import slack from '@/app/blog/[slug]/assets/aside/slack.svg';
import video from '@/app/(home-new)/assets/control/video-chat.svg';

const CALENDLY_URL = 'https://calendly.com/d/44n-hc4-th3';

const SectionCenterCTA = ({
  isPricingWidth = false,
}: {
  isPricingWidth?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState('');

  const closeModal = () => setIsOpen(false);

  const openAndSetUrlHandler = (url: string) => {
    setUrl(url);
    setIsOpen(true);
  };
  const dataLayerHandler = () => {
    let dataLayer = (window as any).dataLayer;
    if (typeof window !== 'undefined') {
      dataLayer = dataLayer || [];
      dataLayer.push({
        event: 'slack_cta_section',
        path: window.location.href,
      });
    }
  };

  return (
    <section
      className={`md:px-12 ${
        isPricingWidth
          ? 'max-w-[338px] mx-auto sm:w-full sm:max-w-full'
          : 'lg:pb-24 px-5'
      }`}
    >
      <div
        className={`container ${
          isPricingWidth
            ? 'max-w-[1064px] bg-[#FFDCC3]'
            : 'max-w-6xl bg-[#FFE8D7]'
        } flex flex-col md:flex-row md:justify-between md:text-left lg:px-16 rounded-2xl items-center gap-y-16 py-12 px-5 text-center text-[26px]`}
      >
        <h2 className='tracking-[-1px] font-semibold'>
          <span className='block'>Got questions?</span> Talk with our devs.
        </h2>
        <div className='flex flex-wrap items-center justify-center gap-3'>
          <Button variant='outline' asChild>
            <a
              onClick={dataLayerHandler}
              href='https://permit-io.slack.com/join/shared_invite/zt-nz6yjgnp-RlP9rtOPwO0n0aH_vLbmBQ#/shared-invite/email'
            >
              <Image
                src={slack}
                alt=''
                width={24}
                height={24}
                className='w-6 h-6 pointer-events-none'
              />{' '}
              <span className='pointer-events-none'>Chat over Slack</span>
            </a>
          </Button>

          <Button
            variant='outline'
            onClick={() => openAndSetUrlHandler(CALENDLY_URL)}
          >
            <Image
              src={video}
              alt=''
              width={24}
              height={24}
              className='w-6 h-6 pointer-events-none'
            />{' '}
            <span className='pointer-events-none'>Schedule Zoom</span>
          </Button>
        </div>
      </div>
      <ConversationModule
        isOpen={isOpen}
        closeModal={closeModal}
        url={url}
        width={'80vw'}
      />
    </section>
  );
};

export default SectionCenterCTA;
