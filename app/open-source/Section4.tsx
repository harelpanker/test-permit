import { FC } from 'react';
import Image from 'next/image';
import { MoveRight } from 'lucide-react';
import opto from '/public/images/open-source/opto.svg';

type Section4Props = {};

const Section4: FC<Section4Props> = ({}) => {
  return (
    <section>
      <div className='container relative my-24 max-w-[940px] p-4 text-base xl:mt-32 xl:text-2xl'>
        <div className='relative z-20 flex w-full flex-col justify-start rounded-3xl bg-white p-6 shadow-video xl:p-12'>
          <h2 className='text-3xl font-bold text-[#111112] xl:mb-5 xl:text-5xl'>
            OPTOGGLES
          </h2>
          <div className='my-6 flex flex-col items-start justify-between gap-6 xl:flex-row'>
            <Image src={opto} alt='OPTOGGLES' />
            <p className='max-w-[600px] text-lg font-bold xl:text-2xl'>
              We often want our frontend to reflect the permissions enforced by
              the backend. E.g. if a user is not allowed to click run the action
              behind a button - don&apos;t show them that button.
            </p>
          </div>
          <p>
            OPToggles uses OPA + OPAL to sync open-policy to your frontend with
            the help of feature flag solutions. OPA is the source of truth for
            what features users are authorized to see, and OPAL keeps OPA
            updated in real-time with policy and data updates.
          </p>

          <div className='mt-7 flex flex-col gap-3 xl:flex-row xl:gap-14'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/permitio/optoggles'
              className='group flex items-center gap-2 text-base text-theme_purple xl:text-2xl'>
              <span>Github</span>{' '}
              <MoveRight className='h-4 w-4 transition group-hover:translate-x-1' />
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://optoggles.opal.ac/tutorials/demo/'
              className='group flex items-center gap-2 text-base text-theme_purple xl:text-2xl'>
              <span>Read More</span>{' '}
              <MoveRight className='h-4 w-4 transition group-hover:translate-x-1' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
