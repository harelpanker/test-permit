import FeaturedCard from './FeaturedCard';
import { FeaturedStoriesProps } from './types';
import Title from '@/components/ui/Title';

const FeaturedStories = ({
  featuredPost1,
  featuredPost2,
}: FeaturedStoriesProps) => {
  return (
    <section className='mx-auto w-full max-w-xl px-5 pb-10 pt-12 text-theme_orange_12 lg:max-w-full lg:px-12 lg:pt-36'>
      <Title size={26} styles='mb-5 uppercase opacity-70'>
        <h1>Featured Stories</h1>
      </Title>
      <div className='mb-14 h-px w-full bg-black opacity-25'></div>
      <ul className='grid grid-cols-1 gap-x-14 gap-y-10'>
        <li>
          {featuredPost1.map((post) => (
            <FeaturedCard key={post.id} post={post} />
          ))}
        </li>
        <li>
          {featuredPost2.map((post) => (
            <FeaturedCard key={post.id} post={post} />
          ))}
        </li>
      </ul>
    </section>
  );
};

export default FeaturedStories;
