import TypographyH2 from '@/app/(home-new)/components/TypographyH2';
import Row1 from './section-easy/Row1';
import Row2 from './section-easy/Row2';
import Row3 from './section-easy/Row3';
import RowCta from './section-easy/RowCta';

const SectionEasySetup = () => {
  return (
    <section className='relative z-20 px-5 pb-[54px] pt-[86px] lg:px-12 lg:pb-[96px] lg:pt-[144px]'>
      <div className='container flex max-w-5xl flex-col items-center gap-y-14 lg:gap-y-28'>
        <header className='w-full max-w-[480px] lg:max-w-full'>
          <TypographyH2>
            <span className='block lg:inline'>Easy setup, </span>quick
            implementation
          </TypographyH2>
        </header>
        <Row1 />
        <Row2 />
        <Row3 />
        <RowCta />
      </div>
    </section>
  );
};

export default SectionEasySetup;
