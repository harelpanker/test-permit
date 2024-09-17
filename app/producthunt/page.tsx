import { Metadata } from 'next';
import Image from 'next/image';

import Hero from './Hero';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
import SectionCTA from './SectionCTA';
import QandA from './QandA';

import middle_bg from '/public/images/plug-and-play/middle_bg.svg';

// services
import { getCodesPlugAndPlay } from '../../services';
import Banner from './Banner';
import SectionBeforeAfter from '@/components/SectionBeforeAfterCode';

const page_title = 'Permit.io | ProductHunt';
const page_description =
  'Plug & Play App-Level Authorization. Enforce in Frontend or Backend Control via No-Code UI.';
const canonical_url = '/producthunt';

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

export default async function ProductHunt() {
  const codes = await getCodesPlugAndPlay();

  return (
    <>
      <Banner />
      <div className='relative z-10 bg-[#FDF8F6]'>
        <Hero />
        <div className='relative z-10'>
          <Section2 />
          <div className='h-16 lg:h-[278px]' />
          <Section3 />
          <div className='h-11 lg:h-[142px]' />
          <Section4 />
          {/* bg */}
          <Image
            className='absolute inset-0 left-0 top-[29%] hidden w-full lg:block'
            src={middle_bg}
            alt=''
          />
        </div>
        <div className='h-16 lg:h-32' />
        <Section5 />
        <Section6 codes={codes} />
        <Section7 />
        <SectionCTA />
        <QandA />
      </div>
    </>
  );
}
