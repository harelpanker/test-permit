import PostCard from './PostCard';
import { AllPostsProps } from './types';
import Title from '@/components/ui/Title';
import { Button } from '@/components/ui/button';
import TagsList from './TagsList';

const AllPosts = ({
  posts,
  tags,
  currentPage,
  totalCount,
  pageSize,
}: AllPostsProps) => {
  const totalPages = Math.ceil(totalCount / pageSize);

  return (
    <section
      id='all-posts'
      className='mx-auto max-w-xl px-5 py-10 lg:max-w-full lg:px-12'>
      <div>
        {/* title */}
        <Title size={26} styles='mb-5 uppercase opacity-70'>
          <h2>All Stories</h2>
        </Title>
        {/* hr */}
        <div className='mb-14 h-px w-full bg-black opacity-25'></div>
      </div>

      <div>
        {/* posts */}
        {posts.length > 0 ? (
          <ul className='container grid grid-cols-1 gap-14 lg:grid-cols-2 xl:grid-cols-3'>
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </ul>
        ) : null}
        {/* prev-next */}
        <div className='mt-8 flex justify-center space-x-4'>
          {currentPage > 1 && (
            <Button variant='outline' asChild>
              <a href={`?page=${currentPage - 1}#all-posts`}>
                <span className='pointer-events-none'>Previous</span>
              </a>
            </Button>
          )}
          {currentPage < totalPages && (
            <Button variant='outline' asChild>
              <a href={`?page=${currentPage + 1}#all-posts`}>
                <span className='pointer-events-none'>Next</span>
              </a>
            </Button>
          )}
        </div>
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
    </section>
  );
};

export default AllPosts;
