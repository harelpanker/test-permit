import { FC } from 'react';
import ApplayAndShare from './ApplayAndShare';

type PositionMainProps = {
  position: {
    intro: { html: string };
    aboutUs: { html: string };
    aboutYou: { html: string };
    whatYoullDo: { html: string };
  };
};

const PositionMain: FC<PositionMainProps> = ({ position }) => {
  return (
    <section className='px-4 pb-14 lg:pb-32 pt-8'>
      <div className='container max-w-[820px]'>
        <article>
          <h2 className='text-3xl font-bold text-slate-900 lg:px-14 mx-auto max-w-3xl'>
            Intro
          </h2>
          <div
            className='prose xl:prose-lg lg:px-14 prose-slate mx-auto mt-4 lg:mt-8 max-w-3xl transition-all duration-500 overflow-hidden'
            dangerouslySetInnerHTML={{ __html: position.intro.html }}
          />
          <h2 className='text-3xl font-bold text-slate-900 lg:px-14 mx-auto max-w-3xl mt-16'>
            About Us
          </h2>
          <div
            className='prose xl:prose-lg lg:px-14 prose-slate mx-auto mt-4 lg:mt-8 max-w-3xl transition-all duration-500 overflow-hidden'
            dangerouslySetInnerHTML={{ __html: position.aboutUs.html }}
          />
          <h2 className='text-3xl font-bold text-slate-900 lg:px-14 mx-auto max-w-3xl mt-16'>
            About You
          </h2>
          <div
            className='prose xl:prose-lg lg:px-14 prose-slate mx-auto mt-4 lg:mt-8 max-w-3xl transition-all duration-500 overflow-hidden'
            dangerouslySetInnerHTML={{ __html: position.aboutYou.html }}
          />
          <h2 className='text-3xl font-bold text-slate-900 lg:px-14 mx-auto max-w-3xl mt-16'>
            What you&apos;ll do
          </h2>
          <div
            className='prose xl:prose-lg lg:px-14 prose-slate mx-auto mt-4 lg:mt-8 max-w-3xl transition-all duration-500 overflow-hidden'
            dangerouslySetInnerHTML={{ __html: position.whatYoullDo.html }}
          />
        </article>
        <ApplayAndShare />
      </div>
    </section>
  );
};

export default PositionMain;
