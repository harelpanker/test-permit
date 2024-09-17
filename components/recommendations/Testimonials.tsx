'use client';

import { FC } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Recommendation from './Recommendation';

import '@splidejs/react-splide/css';

type TestimonialsProps = {
  recommendations: {
    id: string;
    nameAndPosition: string;
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
    avatar: {
      width: number;
      height: number;
      url: string;
    };
  }[];
};

const Testimonials: FC<TestimonialsProps> = ({ recommendations }) => {
  return (
    <div className='pb-10 lg:pb-20'>
      <Splide
        options={{
          rewind: true,
          width: '100%',
          arrows: false,
          trimSpace: false,
          focus: 'center',
          direction: 'rtl',
          autoplay: true,
          easing: 'cubic-bezier(.22,.48,.23,.92)',
          interval: 7000,
          speed: 1000,
          breakpoints: {
            640: {
              autoHeight: true,
            },
          },
          autoHeight: true,
        }}
        tag='section'
        aria-label='Testimonials'
      >
        {recommendations.map((reco) => (
          <SplideSlide
            key={reco.id}
            className='my-14 h-full max-w-[1080px] px-4 lg:px-0'
          >
            <Recommendation
              name={reco.nameAndPosition}
              company={reco.company}
              recommendation={reco.recommendation}
              src={reco.avatar}
              companyLogo={reco.companyLogo}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Testimonials;
