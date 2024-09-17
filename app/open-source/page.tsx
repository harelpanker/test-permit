import Hero from './Hero';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import CommingSoon from './CommingSoon';
import SectionJoin from '../about/SectionJoin';
import PagesFooter from '@/components/PagesFooter';

import { Metadata } from 'next';
import MobilePaddingTop from '@/components/layout/MobilePaddingTop';

const page_title =
  'Open Source Authorization Solutions for Developers | Permit.io';
const page_description =
  'Discover new open source tools for access management, authorization and permissions management for the developer community by Permit.io. Join and contribute.';
const canonical_url = '/open-source';

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
      <MobilePaddingTop />
      <div className='container max-w-7xl'>
        <Hero />
        <Section2 />
        <Section3 />
        <Section4 />
        <CommingSoon />
        <SectionJoin />
      </div>
      <PagesFooter />
    </>
  );
};

export default page;
