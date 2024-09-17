import Hero from './Hero';
import VideosList from './VideosList';
import PagesFooter from '@/components/PagesFooter';
import MobilePaddingTop from '@/components/layout/MobilePaddingTop';

// services
import { getVideos } from '@/services';

import { Metadata } from 'next';

const page_title =
  'Watch: Auth-z and Permissions Management in Action | Permit.io';
const page_description =
  'Latest videos from events, tutorials and more. Watch and learn about permissions, policies and access management with open source and code.';
const canonical_url = '/videos';

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

export default async function VideoHome() {
  const videos = await getVideos();

  return (
    <>
      <div className='container max-w-6xl'>
        <MobilePaddingTop />
        <Hero />
        <VideosList videos={videos} />
      </div>
      <PagesFooter />
    </>
  );
}
