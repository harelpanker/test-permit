import { Suspense } from 'react';
import { Metadata } from 'next';

// services
import {
  getCodesPlugAndPlay,
  getMembersTotalNumber,
  getRecommendationsForHomepage,
} from '../services';
import SectionDotsBackground from './(home-new)/SectionDotsBackground';

// images
import bg_control_desktop from './(home-new)/assets/control/bg_section_control_desktop.svg';
import bg_control_mobile from './(home-new)/assets/control/bg_section_control_mobile.svg';
import bg_before_after_desktop from './(home-new)/assets/section-before-after/bg_section_before_after_desktop.svg';
import bg_before_after_mobile from './(home-new)/assets/section-before-after/bg_section_before_after_mobile.svg';

// components
import Hero from '@/app/(home-new)/Hero';
import Loading from '@/components/Loading';
import SectionUI from '@/app/(home-new)/SectionUI';
import SectionOneUI from './(home-new)/SectionOneUI';
import SectionFlexible from './(home-new)/SectionFlexible';
import SectionHybrid from './(home-new)/SectionHybrid';
import SectionControl from './(home-new)/SectionControl';
import SectionAPIForEverything from './(home-new)/SectionAPIForEverything';
import SectionBGWrapper from './(home-new)/components/SectionBGWrapper';
import SectionBeforeAfter from '@/components/SectionBeforeAfterCode';
import SectionRecommendation from './(home-new)/SectionRecommendation';
import SectionCTA from './(home-new)/SectionCTA';
import SectionCenterCTA from '../components/SectionCenterCTA';
import SectionHybridCTA from './(home-new)/SectionHybridCTA';

const page_title = 'Never Build Permissions Again | Permit.io';
const page_description =
  'Easily bake-in access control in minutes regardless of previous experience or expertise. Based on OPA and OPAL. Treat policy as code to make Auth-z easy.';
const canonical_url = '/';

export const metadata: Metadata = {
  title: page_title,
  description: page_description,
  // open graph
  openGraph: {
    title: page_title,
    description: page_description,
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

const jsonData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  url: 'http://www.permit.io/',
  logo: 'http://www.permit.io/_ipx/w_828,q_75/%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimages%2Ficons%2Flogo-dark.a97f7542db97d9e383b7c9f613fff940.svg?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimages%2Ficons%2Flogo-dark.a97f7542db97d9e383b7c9f613fff940.svg&w=828&q=75',
};

export default async function Home() {
  const codes = await getCodesPlugAndPlay();
  const recommendations = await getRecommendationsForHomepage();
  const memberNumber = await getMembersTotalNumber();

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonData) }}
      />
      <Hero />
      <Suspense fallback={<Loading />}>
        <SectionBGWrapper>
          <SectionUI />
          <SectionAPIForEverything />
        </SectionBGWrapper>
        <SectionOneUI />
        <SectionBGWrapper
          isRight
          imageDesktop={bg_before_after_desktop}
          imageMobile={bg_before_after_mobile}>
          <SectionBeforeAfter codes={codes} />
          <SectionHybrid />
          <SectionHybridCTA />
        </SectionBGWrapper>
        <SectionFlexible />
        <SectionBGWrapper
          imageDesktop={bg_control_desktop}
          imageMobile={bg_control_mobile}>
          <SectionControl />
          <SectionCenterCTA />
          <SectionRecommendation recommendations={recommendations} />
        </SectionBGWrapper>
        <SectionCTA memberNumber={memberNumber} />
        <SectionDotsBackground />
      </Suspense>
    </>
  );
}
