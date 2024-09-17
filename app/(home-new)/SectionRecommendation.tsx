'use client';

import { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import TextTransition from 'react-text-transition';
import { useInViewport } from '@mantine/hooks';
import SectionRecommendationVideoSlides from './SectionRecommendationVideoSlides';
import { Button } from '@/components/ui/button';

import '@splidejs/react-splide/css';

function TextRoll() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 2000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <TextTransition
      style={{ color: COLORS[index % COLORS.length] }}
      className='flex items-center justify-center text-center text-5xl font-semibold leading-tight tracking-[-2.5px] lg:text-[4rem]'
      direction='down'>
      {TEXTS[index % TEXTS.length]}
    </TextTransition>
  );
}

export type TestimonialsProps = {
  recommendations: {
    id: string;
    nameAndPosition: string;
    name: string;
    recommendation: { html: string };
    companyAndPosition: string;
    short: string;
    avatar: {
      width: number;
      height: number;
      url: string;
    };
  }[];
  showOnlyRecommendations?: boolean;
};

const TEXTS = ['Fintech', 'Healthcare', 'Whatever', 'Security', 'Gaming'];
const COLORS = ['#D6409F', '#0091FF', '#F76808', '#12A594', '#E5484D'];

const SectionRecommendation: FC<TestimonialsProps> = ({
  recommendations,
  showOnlyRecommendations = false,
}) => {
  const [showMore, SetShawMore] = useState(false);
  const { ref, inViewport } = useInViewport();

  const handleShowMore = () => SetShawMore((showMore) => !showMore);

  return (
    <section
      ref={ref}
      className={`relative z-20 text-theme_orange_12 ${
        !showOnlyRecommendations ? 'px-5 py-32 lg:py-36' : ''
      }`}>
      <div className='container flex max-w-7xl flex-col gap-10 lg:gap-24'>
        {!showOnlyRecommendations ? (
          <header className='mx-auto flex flex-col items-center gap-4 text-center font-poppins'>
            <h2 className='relative z-10 text-lg font-semibold leading-[-0.5px] text-[#A18072]'>
              Works great for any industry
            </h2>
            {inViewport && <TextRoll></TextRoll>}
          </header>
        ) : null}
        {!showOnlyRecommendations ? (
          <div className='section-recommendation-slider inter relative z-10 flex flex-col items-center gap-3 text-center font-medium italic text-[#846358]'>
            <p>Just listen to what these folks had to say...</p>
            <SectionRecommendationVideoSlides />
          </div>
        ) : null}
        <div className='relative'>
          <ul
            className={`${
              showMore ? 'max-h-none' : 'max-h-[47rem]'
            } flex flex-col gap-4 overflow-hidden py-4 transition-all md:grid md:grid-cols-2 md:gap-6 lg:max-h-none lg:grid-cols-3`}>
            {recommendations.map((recommendation) => (
              <li
                key={recommendation.id}
                className='flex flex-col gap-3 p-[14px]'>
                <div className='flex items-center gap-[10px]'>
                  <figure className='flex h-[42px] w-[42px] overflow-hidden rounded-lg border border-[#D1B9B0]'>
                    <Image
                      src={recommendation.avatar.url}
                      alt={`${recommendation.name} | ${recommendation.companyAndPosition}`}
                      width={recommendation.avatar.width}
                      height={recommendation.avatar.height}
                      className='relative -top-[15%] h-[130%] w-[130%] object-cover'
                    />
                  </figure>
                  <div className='flex flex-col font-inter text-sm font-medium'>
                    <p>{recommendation.name}</p>
                    <p className='text-[#A18072]'>
                      {recommendation.companyAndPosition}
                    </p>
                  </div>
                </div>

                <blockquote className='font-inter text-sm text-[#846358] xl:text-base'>
                  {recommendation.short}
                </blockquote>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={`${
          !showMore
            ? `absolute ${
                !showOnlyRecommendations ? 'bottom-32' : 'bottom-0'
              } h-[24rem] from-[#fdf3ec]`
            : 'relative bottom-0 h-auto from-transparent'
        } absolute left-0 flex h-[10rem] w-full items-end justify-center bg-gradient-to-t to-transparent p-3 lg:hidden`}>
        <Button onClick={handleShowMore} variant='outline' size='sm'>
          {showMore ? 'Show less' : 'Show more'}
        </Button>
      </div>
    </section>
  );
};

export default SectionRecommendation;
