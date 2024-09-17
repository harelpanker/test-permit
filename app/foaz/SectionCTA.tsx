'use client';

import { useState } from 'react';
import ConversationModule from '@/components/ui/ConversationModule';

const CALENDLY_URL = 'https://calendly.com/d/44n-hc4-th3';

const SectionCTA = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState('');

  const closeModal = () => setIsOpen(false);

  const openAndSetUrlHandler = (url: string) => {
    setUrl(url);
    setIsOpen(true);
  };

  return (
    <section className='relative px-5 pb-36 pt-20'>
      <div className='container relative z-20 flex w-full max-w-4xl flex-col items-center justify-center gap-3 text-center font-medium lg:text-lg'>
        <h2 className='text-3xl font-bold leading-snug text-[#451E11] md:text-5xl md:leading-snug md:text-[#20134B]'>
          Planning authorization architecture? Choosing policy models?
        </h2>
        <p>
          Jump on a quick call with our dev team, and get help from top
          authorization experts.
        </p>
        <button
          onClick={() => openAndSetUrlHandler(CALENDLY_URL)}
          className='get_started mt-4 rounded-full bg-theme_black2 px-5 py-3 text-base font-bold text-white transition hover:bg-opacity-60 md:text-xl'>
          TALK TO OUR ENGINEERS
        </button>
      </div>
      <ConversationModule isOpen={isOpen} closeModal={closeModal} url={url} />

      <div className='absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-b from-transparent to-theme_gray'></div>
    </section>
  );
};

export default SectionCTA;
