import Section1 from './Section1';
import Section2 from './Section2';
import Section4 from './Section4';
import Section3 from './Section3';
import Conversation from '@/components/Conversation';
import Section5 from './Section5';
import PagesFooter from '@/components/PagesFooter';

import { Metadata } from 'next';
import MobilePaddingTop from '@/components/layout/MobilePaddingTop';

const page_title = 'ABAC | Permit.io';
const page_description =
  'Powerful Attribute Based Access Control with low code and no code interfaces. Simple.';
const canonical_url = '/abac';

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
    <>
      <MobilePaddingTop />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Conversation />
      <Section5 />
      <PagesFooter />
    </>
  );
};

export default Page;
