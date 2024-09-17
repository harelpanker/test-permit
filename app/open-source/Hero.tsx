import { FC } from 'react';

type HeroProps = {};

const Hero: FC<HeroProps> = ({}) => {
  return (
    <header className='relative px-4 pb-14 pt-24 text-center xl:pt-40 2xl:pb-20'>
      <div className='container max-w-5xl'>
        <h1
          style={{ lineHeight: '127%' }}
          className='text-3xl font-bold text-theme_purple md:text-4xl'>
          Open Source Projects for the
          <br className='hidden lg:block' /> Developer Community by Permit.io
        </h1>
      </div>
    </header>
  );
};

export default Hero;
