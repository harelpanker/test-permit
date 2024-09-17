import Image from 'next/image';
import CardsWrapper from './section-hero/CardsWrapper';
import Header from './section-hero/Header';

import bg_mobile from './assets/hero-section/bg_mobile.svg';
import bg_desktop from './assets/hero-section/bg_desktop.svg';

const SectionHero = () => {
  return (
    <section className='relative z-20 flex flex-col gap-y-14 px-5 pb-14 pt-32 lg:gap-y-20 lg:px-12 lg:pb-[86px] lg:pt-52'>
      <Header />
      <CardsWrapper />
      <Image
        src={bg_mobile}
        alt=''
        className='mg:hidden absolute inset-0 right-0 top-0 z-10 w-full'
      />
      <Image
        src={bg_desktop}
        alt=''
        className='absolute inset-0 right-0 top-0 z-10 w-full lg:block'
      />
    </section>
  );
};

export default SectionHero;
