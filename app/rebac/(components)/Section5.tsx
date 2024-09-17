import Image from 'next/image';

import img from '/public/images/rebac/8.svg';
import img_mobile from '/public/images/rebac/88.png';

const Section5 = () => {
  return (
    <section className='bg-[#FFF1E7] px-5 py-16 lg:px-12 lg:py-28'>
      <div className='container flex w-full max-w-xs flex-col items-center gap-6 text-center lg:max-w-[1004px] lg:gap-16'>
        <header className='flex flex-col items-center gap-4 lg:gap-6'>
          <div className='flex flex-col gap-4'>
            <h3 className='text-sm font-bold uppercase text-[#F76808] lg:text-base'>
              Zero latency Permission enforcement
            </h3>
            <h2 className='bg-gradient-to-r from-[#974ef2] to-[#f76808] bg-clip-text text-3xl font-bold leading-tight text-transparent lg:text-4xl'>
              <span className='block lg:inline-block'>Permit.check() </span> in
              your app
            </h2>
          </div>
          <p className='w-full text-lg font-medium text-[#451E11] lg:text-[22px] lg:leading-snug'>
            <span className='lg:block'>
              Adding Permit to your app is as easy as calling a function
            </span>{' '}
            permit.check (identity, resource, action)
          </p>
        </header>
        <figure>
          <Image className='hidden lg:block' src={img} alt='' />
          <Image className='lg:hidden' src={img_mobile} alt='' />
        </figure>
        <div className='hidden flex-col items-center gap-4 lg:flex'>
          <p className='w-full text-[22px] font-medium text-[#43302B]'>
            <span className='lg:block'>
              Effortlessly combine and migrate between policy models (RBAC, ABAC
              and ReBAC) -{' '}
            </span>
            <strong className='font-medium text-theme_purple'>
              without changing a single line of code
            </strong>
          </p>
          <a
            href='https://docs.permit.io/getting-started/quickstart'
            target='_blank'
            rel='noreferrer'
            className='flex items-center gap-[10px] whitespace-nowrap rounded-full bg-[#DEC5FB] px-5 py-3 text-lg font-bold text-theme_purple transition hover:bg-theme_purple hover:text-white lg:text-xl'>
            <span className='mb-px'>Quickstart Docs</span>
            <svg
              width='13'
              height='13'
              viewBox='0 0 13 13'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M10.52 4L1.9 12.62L0.48 11.2L9.1 2.58H1.52V0.579999H12.52V11.58H10.52V4Z'
                fill='currentColor'
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section5;
