'use client';

import Marquee from 'react-fast-marquee';

const HeroBG = () => {
  return (
    <div className='absolute inset-0 z-10 h-full w-full'>
      <Marquee speed={3} gradient={false} className='h-full w-full'>
        <div
          style={{
            backgroundImage:
              'radial-gradient( rgba(238,212,195,1) 1px,rgba(253,237,224,1) 1px )',
            backgroundSize: '24px 24px',
          }}
          className='absolute inset-0 h-full w-full'></div>
        <div
          style={{
            backgroundImage:
              'radial-gradient( rgba(238,212,195,1) 1px,rgba(253,237,224,1) 1px )',
            backgroundSize: '24px 24px',
          }}
          className='absolute inset-0 h-full w-full'></div>
      </Marquee>
    </div>
  );
};

export default HeroBG;
