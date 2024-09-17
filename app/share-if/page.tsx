import { Suspense } from 'react';
import { Metadata } from 'next';
import Loading from '@/components/Loading';
import SectionDotsBackground from '../(home-new)/SectionDotsBackground';
import SectionBGWrapper from '../(home-new)/components/SectionBGWrapper';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TownSection from './components/TownSection';
import BuiltOnSection from './components/BuiltOnSection';
import RecommendationSection from './components/RecommendationSection';
import CTASection from './components/CTASection';
import VideoSection from './components/VideoSection';

import './index.css';

const page_title =
  'Permit Share-If - Prebuilt, Embeddable Access Sharing Components';
const page_description =
  'Delegate fully functional access control to your users with secure, embeddable UI components';
const canonical_url = '/share-if';

const jsonData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  url: 'http://www.permit.io/',
  logo: 'http://www.permit.io/_ipx/w_828,q_75/%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimages%2Ficons%2Flogo-dark.a97f7542db97d9e383b7c9f613fff940.svg?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimages%2Ficons%2Flogo-dark.a97f7542db97d9e383b7c9f613fff940.svg&w=828&q=75',
};

export const metadata: Metadata = {
  title: page_title,
  description: page_description,
  // open graph
  openGraph: {
    title: page_title,
    description: page_description,
    url: `https://www.permit.io${canonical_url}`,
    images: 'https://www.permit.io/opengraph-image.png',
  },
  // twitter
  twitter: {
    title: page_title,
    description: page_description,
  },
  // canonical
  alternates: {
    canonical: canonical_url,
  },
};

const page = () => {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonData) }}
      />
      <Header />
      <HeroSection />
      <Suspense fallback={<Loading />}>
        <SectionBGWrapper>
          <TownSection />
          <VideoSection />
        </SectionBGWrapper>
        <RecommendationSection />
        <SectionBGWrapper>
          <BuiltOnSection />
        </SectionBGWrapper>
        <CTASection />
        <SectionDotsBackground />
      </Suspense>
    </>
  );
};

export default page;
