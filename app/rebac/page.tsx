import { Metadata } from 'next';

import Hero from './(components)/Hero';
import Section2 from './(components)/Section2';
import Section3 from './(components)/Section3';
import Section4 from './(components)/Section4';
import Section5 from './(components)/Section5';
import Section6 from './(components)/Section6';
import Section7 from './(components)/Section7';
import Section8 from './(components)/Section8';
import MobilePaddingTop from '@/components/layout/MobilePaddingTop';
import { getMembersTotalNumber } from '@/services';

const page_title = 'Relationship Based Access Control with Permit';
const page_description =
  'Manage access based on user-resource relationships with a quick low-code interface';
const canonical_url = '/rebac';

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

export default async function PageReBAC() {
  const memberNumber = await getMembersTotalNumber();
  return (
    <>
      <MobilePaddingTop />
      <Hero />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 memberNumber={memberNumber} />
    </>
  );
}
