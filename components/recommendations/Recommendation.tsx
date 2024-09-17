'use client';

import { FC } from 'react';
import Image from 'next/image';

type RecommendationProps = {
  name: string;
  recommendation: { html: string };
  src: {
    width: number;
    height: number;
    url: string;
  };
  company: string;
  companyLogo: {
    width: number;
    height: number;
    url: string;
  };
};

const Recommendation: FC<RecommendationProps> = ({
  name,
  recommendation,
  src,
  company,
  companyLogo,
}) => {
  return (
    <div className='py-10'>
      <div
        className='flex h-full min-h-[638px] max-w-5xl flex-col justify-center rounded-3xl bg-white p-6 pb-10 pt-10 text-black shadow-video md:min-h-[405px] md:pb-12 md:pl-14 md:pr-24 xl:min-h-[465px]'
        style={{ direction: 'ltr' }}>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col items-center justify-start gap-8 sm:flex-row sm:gap-14'>
            <div
              className={`flex items-center justify-center overflow-hidden rounded-full w-${src.width} h-${src.height}`}>
              <Image
                src={src.url}
                alt={name}
                className='img-transition'
                width={src.width}
                height={src.height}
              />
            </div>
            <div className='w-full text-center text-base sm:w-[85%] sm:text-left md:text-xl'>
              <blockquote
                className='prose prose-lg mb-8 line-clamp-6 prose-p:text-base xl:prose-p:text-xl'
                dangerouslySetInnerHTML={{ __html: recommendation.html }}
              />
              <div className='flex flex-col items-center justify-between gap-8 lg:flex-row xl:gap-12'>
                <p>
                  {name}
                  {', '}
                  <span className='font-bold'>{company}</span>
                </p>
                {companyLogo ? (
                  <div className='flex items-center justify-center'>
                    <Image
                      alt={company}
                      loading='eager'
                      src={companyLogo.url}
                      width={companyLogo.width}
                      height={companyLogo.height}
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
