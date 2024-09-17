import { Button } from '@/components/ui/button';
import Image from 'next/image';

import join from './assets/join.svg';

const SectionJoin = () => {
  return (
    <section className='relative z-10 bg-[#FFDCC3] px-5 py-24 text-center text-theme_orange_12 lg:text-left'>
      <div className='container flex flex-col items-center justify-center gap-[70px] lg:flex-row'>
        <div className='flex max-w-[485px] flex-col items-center gap-y-6 lg:items-start'>
          <h2
            style={{ lineHeight: 1.3 }}
            className='text-center font-poppins text-[26px] font-semibold tracking-[-1px] lg:text-4xl'>
            Join our team
          </h2>
          <p className='font-poppins text-lg font-semibold tracking-[-0.5px] text-[#846358]'>
            We&apos;re always looking for creative and passionate people to join
            our team and help us scale throughout the developer community. We
            have positions in engineering, marketing, design and more.
          </p>
          <Button asChild>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='mailto:rotemh@permit.io'>
              Send your CV
            </a>
          </Button>
        </div>
        <figure>
          <Image src={join} alt={'Join us'} />
        </figure>
      </div>
    </section>
  );
};

export default SectionJoin;
