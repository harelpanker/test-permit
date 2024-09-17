import Hero from './Hero';
import Section1 from './Section1';
import Positions from './Positions';
import Benefits from './Benefits';
import ImageGrid from './ImageGrid';
import ReadMore from './ReadMore';

import { getPositionsCards } from '@/services';

import { Metadata } from 'next';
import MobilePaddingTop from '@/components/layout/MobilePaddingTop';

const page_title =
  'Permit.io is Hiring Developers, Marketers, and more! | Permit.io';
const page_description =
  "If you are passionate about developer tools and the developer community, we're looking for you!";
const canonical_url = '/career';

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

export default async function Home() {
  const positions = await getPositionsCards();

  return (
    <>
      <div className='container max-w-7xl'>
        <MobilePaddingTop />
        <Hero />
        <Section1 />
        <Positions positions={positions} />
        <Benefits />
        <ImageGrid />
        <ReadMore />
      </div>
    </>
  );
}
