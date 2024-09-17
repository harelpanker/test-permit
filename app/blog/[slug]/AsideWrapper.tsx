'use client';

import { FC, useEffect } from 'react';
import PostShare from './PostShare';
import Aside from './Aside';
import AsideCTA from './AsideCAT';
import { useViewportSize } from '@mantine/hooks';

type AsideWrapperProps = {
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
    asideButtonLink: string;
    asideButtonText: string;
    asideTitle: string;
    asideIcon: {
      url: string;
    };
    slug: string;
  };
};

const AsideWrapper: FC<AsideWrapperProps> = ({ post }) => {
  const { width } = useViewportSize();
  useEffect(() => {
    width >= 1024 &&
      document
        .querySelector('#main_wrapper')
        ?.classList.remove('overflow-hidden');
  }, [width]);

  return (
    <aside className='relative z-10 col-span-3 hidden h-full min-h-full w-72 max-w-full pb-20 pl-8 pt-12 lg:block'>
      <div className='sticky top-24 max-h-[calc(100vh-8rem)] flex-col gap-5 overflow-auto lg:flex'>
        {/* top-44 */}
        {width >= 1024 ? (
          <>
            <Aside post={post} />
            <PostShare />
            <AsideCTA slug={post.slug} />
          </>
        ) : null}
      </div>
    </aside>
  );
};

export default AsideWrapper;
