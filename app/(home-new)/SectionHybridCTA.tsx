'use client';

import Image from 'next/image';
import { Button } from '../../components/ui/button';

import slack from '@/app/blog/[slug]/assets/aside/slack.svg';

const SectionHybridCTA = () => {
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
    <section className='px-5 md:px-12 pb-14 lg:pb-24'>
      <div className='container max-w-6xl flex flex-col md:flex-row md:justify-between md:text-left lg:px-16 rounded-2xl items-center gap-y-16 py-12 px-5 text-center text-[26px] bg-[#FFE8D7]'>
        <h2 className='tracking-[-1px] font-semibold'>
          <span className='block'>How the Hybrid Model</span> fits your
          architecture?
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
              <span className='pointer-events-none'>Talk with Our Devs</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SectionHybridCTA;
