'use client';

// import Link from 'next/link';
import Marquee from 'react-fast-marquee';

const Banner = () => {
  return (
    <a
      href='#get-started-today'
      className='group fixed top-0 z-30 flex min-h-[52px] w-full items-center justify-center px-5 py-2 text-center text-sm font-bold text-[#FDFCFF] md:text-lg lg:px-12'>
      <h2 className='pointer-events-none relative z-20 transition duration-500 group-hover:opacity-70'>
        <span className='block md:inline'>
          💸 Click here to get et 250$ towards your
        </span>{' '}
        Permit.io account! 💸
      </h2>
      <div className='pointer-events-none absolute inset-0 z-10 h-full w-full bg-[#974EF2]'>
        <Marquee
          speed={50}
          pauseOnHover={false}
          gradient={false}
          className='h-full w-full'>
          <div className='absolute inset-0 h-full w-full bg-gradient-to-r from-[#974EF2] via-[#F76808] to-[#974EF2]'></div>
          <div className='absolute inset-0 h-full w-full bg-gradient-to-r from-[#974EF2] via-[#F76808] to-[#974EF2]'></div>
        </Marquee>
      </div>
    </a>
  );
};

export default Banner;
