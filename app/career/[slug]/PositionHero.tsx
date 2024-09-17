import { FC } from 'react';

type PositionHeroProps = {
  positionName: string;
  location: string;
};

const PositionHero: FC<PositionHeroProps> = ({ positionName, location }) => {
  return (
    <header className='pb-14 pt-24 xl:pb-20 xl:pt-44 px-4 relative'>
      <div className='container lg:px-14 mx-auto max-w-3xl'>
        <h1
          style={{ lineHeight: '127%' }}
          className='text-theme_purple font-bold text-3xl md:text-6xl lg:mb-4 mb-2'>
          {positionName}
        </h1>
        <p>{location}</p>
      </div>
    </header>
  );
};

export default PositionHero;
