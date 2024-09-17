import PageHeroTag from '@/components/PageHeroTag';

const Header = () => {
  return (
    <header className='relative z-20 flex flex-col items-center gap-y-3 text-center'>
      <PageHeroTag text='Pricing' />
      <h1 className='font-poppins text-[26px] font-semibold leading-tight tracking-[-1px] md:max-w-full md:text-4xl md:leading-[1]'>
        AuthZ from A to Z
      </h1>
    </header>
  );
};

export default Header;
