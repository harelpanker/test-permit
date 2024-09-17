'use client';

import { useState } from 'react';
import { CalendarDays, Mail, Slack } from 'lucide-react';
import ConversationModule from './ui/ConversationModule';

const SIGNUP_URL = 'https://hello.permit.io/newsletter';
const CALENDLY_URL = 'https://calendly.com/d/44n-hc4-th3';

const Conversation = () => {
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
        event: 'slack_landing_page',
        path: window.location.href,
      });
    }
  };

  return (
    <section className='px-4 py-10 xl:py-20'>
      <div className='container flex flex-col gap-16'>
        <div className='flex flex-col items-center justify-between rounded-2xl bg-theme_purple px-4 py-12 text-white md:px-20 xl:flex-row'>
          <h2 className='text-center text-3xl font-bold xl:text-left xl:text-2xl'>
            Join the Conversation
          </h2>
          <div className='mt-6 flex flex-col gap-6 lg:flex-row xl:mt-0'>
            {/* btn 1 */}
            <button
              onClick={() => openAndSetUrlHandler(CALENDLY_URL)}
              className='schedule_a_meeting flex items-center rounded-full bg-white px-7 py-3 font-bold text-theme_purple transition hover:scale-105 hover:transform focus:outline-none focus:ring-1 focus:ring-offset-2'>
              <CalendarDays className='pointer-events-none h-5 w-5' />
              <span className='pointer-events-none ml-2'>
                Schedule a Meeting
              </span>
            </button>
            {/* btn 2 */}
            <a
              onClick={dataLayerHandler}
              target='_blank'
              rel='noopener noreferrer'
              href='https://opal-access.slack.com/join/shared_invite/zt-nz6yjgnp-RlP9rtOPwO0n0aH_vLbmBQ#/shared-invite/email'
              className='flex items-center rounded-full border border-white bg-transparent px-7 py-3 font-bold text-white transition hover:scale-105 hover:transform'>
              <Slack className='pointer-events-none h-5 w-5' />
              <span className='pointer-events-none ml-2'>
                Join the Community
              </span>
            </a>
            {/* btn 3 */}
            <button
              onClick={() => openAndSetUrlHandler(SIGNUP_URL)}
              className='flex items-center rounded-full border border-white bg-transparent px-7 py-3 font-bold text-white transition hover:scale-105 hover:transform focus:outline-none'>
              <Mail className='h-5 w-5' />
              <span className='ml-2'>Sign Up for Updates</span>
            </button>
          </div>
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

export default Conversation;
