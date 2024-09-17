import { FC } from 'react';
import Image from 'next/image';
import { MoveRight } from 'lucide-react';
import opal from '/public/images/open-source/opal.svg';

type Section3Props = {};

const Section3: FC<Section3Props> = ({}) => {
  return (
    <section>
      <div className='container relative mt-24 max-w-[940px] p-4 text-base xl:mt-32 xl:text-2xl'>
        <div className='relative z-20 flex w-full flex-col justify-start rounded-3xl bg-white p-6 shadow-video xl:p-12'>
          <h2 className='text-3xl font-bold text-[#111112] xl:mb-5 xl:text-5xl'>
            OPAL
          </h2>
          <div className='my-6 flex flex-col items-start justify-between gap-6 xl:flex-row'>
            <Image src={opal} alt='opal' />
            <p className='max-w-[600px] text-lg font-bold xl:text-2xl'>
              An administration layer for Open Policy Agent (OPA) that detects
              changes in policies and policy data in real-time and pushes live
              updates to your agents. OPAL brings open-policy up to the speed
              needed by live applications.
            </p>
          </div>
          <p>
            As your application state changes (whether it&apos;s via your APIs,
            DBs, Git, S3 or 3rd-party SaaS services), OPAL will make sure your
            services are always in sync with the authorization data and policy
            they need (and only those they need).
          </p>

          <div className='mt-7 flex flex-col gap-3 xl:flex-row xl:gap-14'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/permitio/opal'
              className='group flex items-center gap-2 text-base text-theme_purple xl:text-2xl'>
              <span>Github</span>{' '}
              <MoveRight className='h-4 w-4 transition group-hover:translate-x-1' />
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.youtube.com/watch?v=A5adHlkmdC0'
              className='group flex items-center gap-2 text-base text-theme_purple xl:text-2xl'>
              <span>OPAL Demo</span>{' '}
              <MoveRight className='h-4 w-4 transition group-hover:translate-x-1' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
