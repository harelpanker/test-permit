import { FC } from 'react';
import Image from 'next/image';

type HeroProps = {
  author: {
    image: { url: string };
    name: string;
    bio: string;
  };
};

const Hero: FC<HeroProps> = ({ author }) => {
  return (
    <section className='px-4 pb-16 pt-24 xl:pt-32'>
      <div className='container lg:max-w-7xl flex-col flex items-start gap-3'>
        <figure className='lg:hidden'>
          <Image
            className='rounded-full'
            src={author.image.url}
            alt={author.name}
            width={80}
            height={80}
            priority
          />
        </figure>
        <h1 className='lg:text-5xl text-3xl font-bold'>{author.name}</h1>
        <p className='lg:hidden text-sm'>{author.bio}</p>
      </div>
    </section>
  );
};

export default Hero;
