import TypographyH2 from '@/app/(home-new)/components/TypographyH2';

const Header = () => {
  return (
    <div className='flex flex-col gap-y-2 px-5 lg:px-0'>
      <h3 className='text-[26px] font-semibold leading-tight tracking-[-0.5px] lg:text-5xl'>
        Built on <span className='text-[#F76808]'>Solid Ground</span>
      </h3>
      <p className='font-poppins text-lg font-semibold leading-snug text-[#846358] lg:text-[26px]'>
        <span className='lg:block'>
          The latest addition to the Permit.io&apos;s{' '}
        </span>
        Embeddable Auth Elements
      </p>
    </div>
  );
};

export default Header;
