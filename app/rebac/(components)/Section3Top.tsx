import CTAButton from '@/components/ui/CTAButton';

const Section3Top = () => {
  return (
    <section className='px-5 text-center lg:px-12 lg:text-left'>
      <div className='container flex w-full max-w-xs flex-col items-center gap-4 lg:max-w-[1064px] lg:items-start lg:gap-6 lg:px-12'>
        <div className='flex flex-col gap-4'>
          <h3 className='text-sm font-bold uppercase text-[#F76808] lg:text-lg'>
            Author ReBAC policies with ease
          </h3>
          <h2 className='hidden text-4xl font-bold text-[#451E11] lg:block'>
            <span className='lg:block'>Effortless policy creation </span>and
            management
          </h2>
          <h2 className='text-3xl font-bold text-[#451E11] lg:hidden'>
            <span className='block'>Effortless creation </span>
            and management
          </h2>
        </div>
        <p className='hidden w-full max-w-[630px] text-lg font-medium text-[#43302B] lg:block lg:text-[22px]'>
          Create and manage complex{' '}
          <a
            className='text-theme_purple transition hover:text-theme_purple/80'
            target='_blank'
            rel='noopener noreferrer'
            href='https://zanzibar.academy/'>
            Google Zanzibar
          </a>{' '}
          style relationship graphs with the click of a button in an
          easy-to-use, fully customizable, no-code UI or via API.
        </p>
        <p className='w-full max-w-[630px] text-lg font-medium text-[#43302B] lg:hidden lg:text-[22px]'>
          Create and manage complex{' '}
          <a
            className='text-theme_purple'
            target='_blank'
            rel='noopener noreferrer'
            href='https://zanzibar.academy/'>
            Google Zanzibar
          </a>{' '}
          style relationship graphs with an easy-to-use, fully customizable,
          no-code UI or via API.
        </p>
        <div className='flex gap-3'>
          <CTAButton text='Add it to your app' bgColor='purple' />
          <a
            href='https://docs.permit.io/modeling/google-drive/'
            target='_blank'
            rel='noreferrer'
            className='flex items-center gap-[10px] rounded-full bg-[#DEC5FB] px-5 py-3 text-lg font-bold text-theme_purple transition hover:bg-theme_purple hover:text-white lg:text-xl'>
            <span className='mb-px hidden lg:block'>Read the docs</span>
            <span className='lg:hidden'>Docs</span>
            <svg
              width='13'
              height='13'
              viewBox='0 0 13 13'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M10.1201 3.67603L1.5001 12.296L0.0800977 10.876L8.7001 2.25603H1.1201V0.256025H12.1201V11.256H10.1201V3.67603Z'
                fill='currentColor'
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section3Top;
