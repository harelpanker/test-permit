import { FC } from 'react';
import Image from 'next/image';
import { format } from 'date-fns';

type HeaderProps = {
  post: {
    title: string;
    summery: string;
    date: string;
    image: { url: string; width: number; height: number };
    tags: { id: string; name: string }[];
    authorReference: {
      name: string;
    };
    titleBottom: string | null;
    titleTop: string | null;
  };
};

const Header: FC<HeaderProps> = ({ post }) => {
  return (
    <header className='relative px-4 pt-10 xl:pt-12'>
      <div className='container relative z-10 max-w-3xl'>
        {/* tags */}
        <div className='mx-auto'>
          <ul className='mb-5 flex flex-wrap justify-start gap-2 lg:px-8'>
            {post.tags.map((tag) => (
              <li
                key={tag.id}
                className='rounded bg-slate-200 px-2 py-1 text-xs font-semibold text-slate-800'>
                <div>{tag.name}</div>
              </li>
            ))}
          </ul>
          {/* title */}
          <div className='mb-10 flex flex-col gap-3 lg:px-8'>
            {post.titleBottom || post.titleTop ? (
              <h1 className='text-3xl font-bold leading-snug text-slate-900 lg:text-5xl lg:leading-snug'>
                {post.titleTop}
                <br />
                {post.titleBottom}
              </h1>
            ) : (
              <h1 className='text-3xl font-bold leading-snug text-slate-900 lg:text-5xl lg:leading-snug'>
                {post.title}
              </h1>
            )}

            <p>{post.summery}</p>
            {/* author */}
            <div className='flex gap-2 text-xs font-semibold text-slate-500'>
              <p>{post.authorReference.name}</p>
              <div>{format(new Date(post.date), 'MMM dd yyyy')}</div>
            </div>
          </div>
        </div>
        {/* image */}
        <div className='lg:px-8'>
          <figure className='overflow-hidden rounded-2xl shadow-video '>
            <Image
              src={post.image.url}
              alt={post.title}
              width={post.image.width}
              height={post.image.height}
              className='w-full bg-contain'
              priority
              quality={60} // what we have now is 75
            />
          </figure>
        </div>
      </div>
    </header>
  );
};

export default Header;
