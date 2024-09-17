import { Metadata } from 'next';

import Hero from './Hero';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
import Section8 from './Section8';
import MobilePaddingTop from '@/components/layout/MobilePaddingTop';
import { getMembersTotalNumber } from '@/services';

const page_title = 'Role Based Access Control with Permit';
const page_description =
  'Manage access using dynamic Roles in seconds with a quick low-code interface';
const canonical_url = '/rbac';

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

export default async function PageRBAC() {
  const memberNumber = await getMembersTotalNumber();
  return (
    <>
      <MobilePaddingTop />
      <Hero />
      <Section2 />
      <div className='bg-[#FDF8F6]'>
        <Section3 />
        <Section4 />
        <Section5 />
      </div>
      <Section6 />
      <Section7 />
      <Section8 memberNumber={memberNumber} />
    </>
  );
}
