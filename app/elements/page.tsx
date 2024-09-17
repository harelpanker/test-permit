import { Suspense } from 'react';
import { Metadata } from 'next';
import Loading from '@/components/Loading';
import SectionHero from './component/SectionHero';
import SectionBottomCta from './component/SectionBottomCta';
import SectionEasySetup from './component/SectionEasySetup';
import SectionDotsBackground from '../(home-new)/SectionDotsBackground';
import SectionBGWrapper from '../(home-new)/components/SectionBGWrapper';
import SectionAuthorizationComponents from './component/SectionAuthorizationComponents';

import './index.css';

const page_title = 'Elements: Permissions Your Users Can Manage | Permit.io';
const page_description =
  'Permit Elements - Ready-made access control elements you can embed directly into your app';
const canonical_url = '/elements';

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
      <SectionHero />
      <Suspense fallback={<Loading />}>
        <SectionBGWrapper>
          <SectionAuthorizationComponents />
        </SectionBGWrapper>
        <SectionBGWrapper>
          <SectionEasySetup />
        </SectionBGWrapper>
        <SectionBottomCta />
        <SectionDotsBackground />
      </Suspense>
    </>
  );
};

export default page;
