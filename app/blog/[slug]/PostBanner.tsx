import { FC } from 'react';
import Image from 'next/image';
import logo from '../../../public/images/logo_text.svg';

type PostBannerProps = {
  post: {
    postBanners: {
      image: {
        url: string;
        width: number;
        height: number;
      };
      title: string;
      shortText: string;
      buttonLink: string;
      buttonText: string;
    }[];
  };
};

const PostBanner: FC<PostBannerProps> = ({ post }) => {
  return (
    <>
      {post.postBanners[0] && (
        <section className='flex flex-col xl:flex-row xl:items-center'>
          <div className='container flex flex-col xl:flex-row xl:items-center'>
            <div className='xl:block hidden w-2/3 relative z-10 h-[60vh]'>
              <Image
                src={post.postBanners[0].image.url}
                alt='decorative'
                className='bg-cover object-cover'
              />
            </div>
            <div className='xl:hidden relative z-10'>
              <Image
                src={post.postBanners[0].image.url}
                width={post.postBanners[0].image.width}
                height={post.postBanners[0].image.height}
                alt='decorative'
              />
            </div>

            <div className='p-5 py-7 xl:p-20 xl:w-1/3 flex flex-col items-center text-center'>
              <h2 className='xl:text-5xl text-3xl font-bold text-slate-900 mb-4'>
                {post.postBanners[0].title}
              </h2>
              <p className='xl:text-lg text-sm mb-10'>
                {post.postBanners[0].shortText}
              </p>
              <a
                className='px-8 min-w-[270px] hover:-translate-y-2 transition-all duration-300 py-3 text-lg xl:text-xl bg-gradient-to-r rounded-full text-white font-semibold from-theme_purple to-theme_yellow'
                href={`${post.postBanners[0].buttonLink}`}>
                {post.postBanners[0].buttonText}
              </a>
              <div className='xl:mt-16 mt-12 xl:max-w-[25%] max-w-[36%]'>
                <Image
                  quality={100}
                  unoptimized
                  src={logo}
                  alt='Authhorizon logo'
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default PostBanner;
