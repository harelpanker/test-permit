import { FC } from 'react';
import PostCard from '../PostCard';

type RelatedPostsProps = {
  shuffledArray: {
    id: string;
    slug: string;
    title: string;
    summery: string;
    date: string;
    authorReference: { id: string; name: string };
    authorSecondary: { id: string; name: string } | null;
    image: { url: string; width: number; height: number };
    tags: [{ id: string; name: string }[]];
  }[];
};

const RelatedPosts: FC<RelatedPostsProps> = ({ shuffledArray }) => {
  return (
    <section className='bg-slate-50 px-4 pt-16 lg:py-24'>
      <div className='container max-w-6xl'>
        <p className='mb-12 text-xl font-bold uppercase text-theme_black opacity-30'>
          MORE TO READ
        </p>
        <ul className='grid grid-cols-1 gap-14 md:grid-cols-2 xl:grid-cols-3'>
          {shuffledArray.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RelatedPosts;
