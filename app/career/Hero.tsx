import { FC } from 'react';

type HeroProps = {};

const Hero: FC<HeroProps> = ({}) => {
  return (
    <header className='relative px-5 py-9 text-center lg:py-28'>
      <div className='container max-w-5xl'>
        <h1
          style={{ lineHeight: '127%' }}
          className='text-3xl font-bold text-theme_purple md:text-4xl'>
          Permit.io is Hiring Developers, <br className='hidden md:block' />
          Marketers, and more!
        </h1>
      </div>
    </header>
  );
};

export default Hero;
