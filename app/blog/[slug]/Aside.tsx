import { FC } from 'react';
import Image from 'next/image';
import linkedin from '/public/images/sm/linkedin.svg';

import Link from 'next/link';

type AsideProps = {
  post: {
    authorReference: {
      slug: string;
      image: { url: string };
      name: string;
      linkedin: string;
      bio: string;
    };
    authorSecondary: {
      slug: string;
      image: { url: string };
      name: string;
      linkedin: string;
      bio: string;
    } | null;
  };
};

const Aside: FC<AsideProps> = ({ post }) => {
  return (
    <div className='flex flex-wrap gap-x-10 gap-y-8'>
      <div className='flex flex-col items-start gap-3'>
        <figure className='flex items-center justify-center rounded-full border border-slate-100 p-1'>
          <Link href={`/author/${post.authorReference.slug}`} passHref>
            <Image
              className='cursor-pointer rounded-full'
              src={post.authorReference.image.url}
              alt={post.authorReference.name}
              width={100}
              height={100}
            />
          </Link>
        </figure>

        <div>
          <div className='mb-1 flex items-center gap-2'>
            <Link
              className='cursor-pointer text-2xl font-bold'
              href={`/author/${post.authorReference.slug}`}
              passHref
            >
              {post.authorReference.name}
            </Link>
            <a
              className='relative top-px flex items-center justify-center text-lg'
              href={post.authorReference.linkedin}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src={linkedin}
                alt='linkedin'
                className='h-4 w-4 transition hover:text-theme_purple'
              />
            </a>
          </div>

          <p className='text-sm'>{post.authorReference.bio}</p>
        </div>
      </div>

      {post.authorSecondary ? (
        <div className='flex flex-col items-start gap-3'>
          <figure className='flex items-center justify-center rounded-full border border-slate-100 p-1'>
            <Link href={`/author/${post.authorSecondary.slug}`} passHref>
              <Image
                className='cursor-pointer rounded-full'
                src={post.authorSecondary.image.url}
                alt={post.authorSecondary.name}
                width={100}
                height={100}
              />
            </Link>
          </figure>

          <div>
            <div className='mb-1 flex items-center gap-2'>
              <Link
                className='cursor-pointer text-2xl font-bold'
                href={`/author/${post.authorSecondary.slug}`}
                passHref
              >
                {post.authorSecondary.name}
              </Link>
              <a
                className='relative top-px flex items-center justify-center text-lg'
                href={post.authorSecondary.linkedin}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image
                  src={linkedin}
                  alt='linkedin'
                  className='h-4 w-4 transition hover:text-theme_purple'
                />
              </a>
            </div>

            <p className='text-sm'>{post.authorSecondary.bio}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Aside;
