import Marquee from 'react-fast-marquee';

const Glow = () => {
  return (
    <div
      style={{ animationDuration: '10s', filter: 'blur(100px)' }}
      className='pointer-events-non absolute -top-10 z-20 flex aspect-[1400/430] w-full items-center justify-center rounded-full motion-safe:animate-bounce md:-top-16 lg:-top-[180px]'>
      <Marquee
        speed={100}
        pauseOnHover={false}
        gradient={false}
        className='h-full w-full'>
        <div
          className='relative z-20 h-[215px] w-[700px] max-w-screen-xl opacity-60 lg:h-[430px] lg:w-[1400px] lg:opacity-40'
          style={{
            background:
              'linear-gradient(140deg, #FFB171 9.83%, #EA9CC2 53.27%, #C89CF4 96.02%)',
          }}
        />
        <div
          className='relative z-20 h-[215px] w-[700px] max-w-screen-xl opacity-60 lg:h-[430px] lg:w-[1400px] lg:opacity-40'
          style={{
            background:
              'linear-gradient(140deg, #FFB171 9.83%, #EA9CC2 53.27%, #C89CF4 96.02%)',
          }}
        />
      </Marquee>
    </div>
  );
};

export default Glow;
