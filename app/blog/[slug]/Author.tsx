'use client';

import { FC } from 'react';
import Image from 'next/image';
import linkedin from '../../../public/images/sm/linkedin.svg';
import Link from 'next/link';
import AsideCTA from './AsideCAT';
import { useViewportSize } from '@mantine/hooks';

type AuthorProps = {
  post: {
    authorReference: {
      slug: string;
      name: string;
      bio: string;
      image: { url: string };
      linkedin: string;
    };
    authorSecondary: {
      slug: string;
      image: { url: string };
      name: string;
      linkedin: string;
      bio: string;
    } | null;
    asideButtonLink: string;
    asideButtonText: string;
    asideTitle: string;
    asideIcon: {
      url: string;
    };
    slug: string;
  };
};

const Author: FC<AuthorProps> = ({ post }) => {
  const { width } = useViewportSize();

  return (
    <section className='flex flex-col items-center justify-center px-4 pb-20 pt-10 lg:hidden'>
      {width < 1024 ? (
        <>
          <div className='container flex max-w-3xl flex-wrap gap-8 lg:items-center lg:px-8'>
            <div className='flex flex-col items-start gap-3 max-w-xs w-full'>
              <div className='flex items-center justify-center rounded-full border border-slate-100 p-1'>
                <Link href={`/author/${post.authorReference.slug}`} passHref>
                  <Image
                    className='rounded-full'
                    src={post.authorReference.image.url}
                    alt={post.authorReference.name}
                    width={100}
                    height={100}
                  />
                </Link>
              </div>
              <div>
                <div className='mb-1 flex items-center gap-2'>
                  <Link
                    className='text-2xl font-bold'
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
              <div className='flex flex-col items-start gap-3 max-w-xs w-full'>
                <div className='flex items-center justify-center rounded-full border border-slate-100 p-1'>
                  <Link href={`/author/${post.authorSecondary.slug}`} passHref>
                    <Image
                      className='rounded-full'
                      src={post.authorSecondary.image.url}
                      alt={post.authorSecondary.name}
                      width={100}
                      height={100}
                    />
                  </Link>
                </div>
                <div>
                  <div className='mb-1 flex items-center gap-2'>
                    <Link
                      className='text-2xl font-bold'
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

          <AsideCTA slug={post.slug} />
        </>
      ) : null}
    </section>
  );
};

export default Author;
