import MobilePaddingTop from '@/components/layout/MobilePaddingTop';
import Hero from './Hero';
import Section1 from './Section1';
import Section2 from './Section2';
import SectionCTA from './SectionCTA';

import { Metadata } from 'next';

const page_title = 'FoAz: Frontend Only Authorization';
const page_description =
  'Secure and integrate APIs directly from the frontend with the FoAz open standard.';
const canonical_url = '/foaz';

export const metadata: Metadata = {
  title: page_title,
  description: page_description,
  // open graph
  openGraph: {
    title: page_title,
    description: page_description,
    url: `https://www.permit.io${canonical_url}`,
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

const Page = () => {
  return (
    <div className='bg-[#FFF9F4]'>
      <MobilePaddingTop />
      <Hero />
      <Section1 />
      <Section2 />
      <SectionCTA />
    </div>
  );
};

export default Page;
