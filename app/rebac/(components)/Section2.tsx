import Link from 'next/link';

const Section2 = () => {
  return (
    <section className='bg-[#FFDCC3] px-5 py-6 text-center text-theme_purple lg:px-12'>
      <h2 className='font-semibold lg:text-[22px]'>
        <Link className='hidden md:block' href='/blog/what-is-rebac'>
          Still deciding between RBAC, ABAC, and ReBAC? Find the right
          authorization model for you -{'>'}
        </Link>
        <Link className='md:hidden' href='/blog/what-is-rebac'>
          Deciding between RBAC, ABAC, and
          <br />
          ReBAC? Learn More -{'>'}
        </Link>
      </h2>
    </section>
  );
};

export default Section2;
