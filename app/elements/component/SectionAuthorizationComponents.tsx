import Row1 from './section-authorization/Row1';
import Header from './section-authorization/Header';
import Row3 from './section-authorization/Row3';
import RowCta from './section-authorization/RowCta';
import Row2 from './section-authorization/Row2';

const SectionAuthorizationComponents = () => {
  return (
    <section className='relative z-20 pb-[54px] pt-[86px] lg:px-12 lg:pb-[96px] lg:pt-[144px]'>
      <div className='container flex max-w-5xl flex-col items-center gap-y-14 lg:gap-y-28'>
        <Header />
        <Row1 />
        <Row2 />
        <Row3 />
        <RowCta />
      </div>
    </section>
  );
};

export default SectionAuthorizationComponents;
