import { Suspense } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import SectionHero from './SectionHero';
import SectionAbout from './SectionAbout';
import SectionDotsBackground from '../(home-new)/SectionDotsBackground';
import SectionLeadership from './SectionLeadership';
import Loading from '@/components/Loading';
import SectionDevLeaders from './SectionDevLeaders';
import SectionAwards from './SectionAwards';
import SectionJoin from './SectionJoin';

import bg_desktop from './assets/bg_desktop.svg';
import bg_mobile from './assets/bg_mobile.svg';

const page_title = 'Company, Team, Vision, Careers | Permit.io';
const page_description =
  'We founded Permit.io after we found ourselves building IAM again and again. Read more about the team, investors & open positions.';
const canonical_url = '/company';

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

const Page = () => {
  return (
    <div
      className='relative'
      style={{ backgroundColor: 'rgba(253, 205, 173, 0.2)' }}>
      <SectionHero />
      <SectionAbout />
      <Suspense fallback={<Loading />}>
        <SectionLeadership />
        <div className='relative'>
          <SectionDevLeaders />
          <SectionAwards />
          <Image
            className='absolute left-0 top-0 z-10 w-full object-cover object-left-top lg:hidden'
            src={bg_mobile}
            alt=''
          />
          <Image
            className='absolute left-0 top-0 z-10 hidden w-full object-cover object-left-top lg:block'
            src={bg_desktop}
            alt=''
          />
        </div>
        <SectionJoin />
      </Suspense>
      <SectionDotsBackground />
    </div>
  );
};

export default Page;
