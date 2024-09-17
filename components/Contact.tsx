'use client';

import { FC, useState } from 'react';
import { Mail } from 'lucide-react';
import CTAButton from './ui/CTAButton';
import ConversationModule from './ui/ConversationModule';
import TopFooter from './layout/TopFooter';

const SIGNUP_URL = 'https://hello.permit.io/newsletter';

type ContactProps = {};

const Contact: FC<ContactProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState('');

  const closeModal = () => setIsOpen(false);

  const openAndSetUrlHandler = (url: string) => {
    setUrl(url);
    setIsOpen(true);
  };

  return (
    <section className='z-50 pb-6 pt-20 text-center'>
      <div id='contact' className='container flex flex-col items-center px-4'>
        <h2 className='mb-4 text-4xl font-bold text-theme_purple sm:text-6xl xl:mb-10'>
          Ready to transform your authorization?
        </h2>
        <p className='max-w-[690px] text-center text-2xl'>
          Start using Permit.io and get your permissions and access management
          set up in minutes.
        </p>
        <div className='mt-9 flex flex-col items-center gap-3 xl:mt-14 xl:flex-row xl:gap-6'>
          <button
            onClick={() => openAndSetUrlHandler(SIGNUP_URL)}
            className='flex items-center rounded-full bg-white px-7 py-3 font-bold text-theme_purple transition hover:scale-105 hover:transform focus:outline-none'>
            <Mail className='h-5 w-5' />
            <span className='ml-2'>Sign Up for Updates</span>
          </button>

          <CTAButton
            link='https://app.permit.io/?utm_source=website&utm_medium=website-home&utm_campaign=contact'
            text='Start Now'
            icon
            bgColor='purple'
          />
        </div>
      </div>
      <TopFooter />
      {/* <div className='relative mb-6 mt-10'>
        <Image src={footer} alt='footer decorative image' />
      </div> */}
      <ConversationModule isOpen={isOpen} closeModal={closeModal} url={url} />
    </section>
  );
};

export default Contact;
