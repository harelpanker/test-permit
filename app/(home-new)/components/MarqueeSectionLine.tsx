import Marquee from 'react-fast-marquee';

const MarqueeSectionLine = () => {
  return (
    <div className='pointer-events-none absolute inset-0 top-0 z-10 h-[2px] w-full bg-theme_purple'>
      <Marquee
        speed={100}
        pauseOnHover={false}
        gradient={false}
        className='h-full w-full'>
        <div className='absolute inset-0 h-full w-full bg-gradient-to-r from-theme_purple via-[#F76808] to-theme_purple'></div>
        <div className='absolute inset-0 h-full w-full bg-gradient-to-r from-theme_purple via-[#F76808] to-theme_purple'></div>
      </Marquee>
    </div>
  );
};

export default MarqueeSectionLine;
