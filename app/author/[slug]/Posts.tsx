import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';

type PostsProps = {
  author: {
    blogPosts: {
      id: string;
      slug: string;
      title: string;
      summery: string;
      tags: { id: string; name: string }[];
      image: { url: string; width: number; height: number };
      thumbnailImage: null | { url: string; width: number; height: number };
    }[];
  };
};

const Posts: FC<PostsProps> = ({ author }) => {
  return (
    <section className='px-4 xl:pr-16'>
      <div className='container'>
        <ul className='flex flex-col gap-9 xl:gap-16 pb-14'>
          {author.blogPosts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.slug}`} passHref>
                <article className='flex border flex-col lg:flex-row border-slate-200 group hover:shadow hover:-translate-y-1 transition duration-500 cursor-pointer justify-between bg-slate-50 rounded overflow-hidden'>
                  <div className='flex justify-center flex-col gap-3 py-5 px-4 lg:px-9 w-full lg:max-w-[55%]'>
                    <h2 className='font-bold text-xl lg:text-2xl'>
                      {post.title}
                    </h2>
                    <p>{post.summery}</p>
                    <div className='mt-3 flex gap-1 items-center'>
                      <span>Read More</span>{' '}
                      <MoveRight className='group-hover:translate-x-1 transition duration-500 w-4' />
                    </div>
                  </div>
                  <figure className='w-full lg:max-w-[35%] relative h-52 lg:h-64 order-first lg:order-last'>
                    <Image
                      src={
                        post.thumbnailImage !== null
                          ? post.thumbnailImage.url
                          : post.image.url
                      }
                      alt={post.title}
                      width={307}
                      height={183}
                      className='bg-cover object-cover'
                    />
                  </figure>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Posts;
