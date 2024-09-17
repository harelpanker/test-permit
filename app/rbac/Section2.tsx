import Link from 'next/link';

const Section2 = () => {
  return (
    <section className='bg-[#FFDCC3] px-5 py-6 text-center text-theme_purple lg:px-12'>
      <h2 className='font-semibold lg:text-[22px]'>
        <p>
          Looking for a more granular authorization <br className='md:hidden' />
          model? Try{' '}
          <Link
            className='underline transition hover:text-theme_purple/80'
            href='/abac'>
            ABAC
          </Link>{' '}
          or{' '}
          <Link
            className='underline transition hover:text-theme_purple/80'
            href='/rebac'>
            ReBAC
          </Link>
        </p>
      </h2>
    </section>
  );
};

export default Section2;
