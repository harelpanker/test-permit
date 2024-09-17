import { FC } from 'react';
import PostCard from '@/app/blog/PostCard';
import Title from '@/components/ui/Title';
import TagsList from '@/app/blog/TagsList';
import { Button } from '@/components/ui/button';
import { Tag } from '@/app/blog/types';
import { ArrowRight } from 'lucide-react';

type PostCardProps = {
  posts: {
    name: string;
    tags: {
      id: string;
      slug: string;
      title: string;
      summery: string;
      date: string;
      isHidden: boolean;
      authorReference: {
        id: string;
        name: string;
      };
      authorSecondary: {
        id: string;
        name: string;
      } | null;
      image: {
        url: string;
        width: number;
        height: number;
      };
    }[];
  };
  tags: Tag[];
};

const Posts: FC<PostCardProps> = ({ posts, tags }) => {
  return (
    <section className='relative z-20 px-5 py-10 lg:px-12'>
      <div className='container mx-auto'>
        <div>
          {/* title */}
          <div className='flex items-center justify-between pb-5'>
            <Title size={26} styles='uppercase opacity-70'>
              <h1>{posts.name}</h1>
            </Title>

            <Button variant='link' asChild>
              <a href='/blog' className='group hover:no-underline'>
                <span className='font-medium'>Back to all posts</span>
                <ArrowRight
                  size={18}
                  className='transition group-hover:translate-x-1'
                />
              </a>
            </Button>
          </div>
          {/* hr */}
          <div className='mb-14 h-px w-full bg-black opacity-25'></div>
        </div>

        <div>
          {/* posts */}
          <ul className='container grid grid-cols-1 gap-14 lg:grid-cols-2 xl:grid-cols-3'>
            {posts.tags.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </ul>
        </div>

        <div className='pt-24'>
          {/* title */}
          <Title size={26} styles='mb-5 uppercase opacity-70'>
            <h2>Select by Tag</h2>
          </Title>
          {/* hr */}
          <div className='mb-14 h-px w-full bg-black opacity-25'></div>
        </div>
        <TagsList tags={tags} />
      </div>
    </section>
  );
};

export default Posts;
