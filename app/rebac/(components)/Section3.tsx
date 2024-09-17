import Section3Top from './Section3Top';
import Section3Center from './Section3Center';
import Section3Bottom from './Section3Bottom';

const Section3 = () => {
  return (
    <div className='flex flex-col gap-12 bg-[#FFF1E7] pb-0 pt-16 md:gap-16 lg:pb-28 lg:pt-28'>
      <Section3Top />
      <Section3Center />
      <Section3Bottom />
    </div>
  );
};

export default Section3;
