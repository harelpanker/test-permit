import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getPositionDetails } from '@/services';
import PositionHero from './PositionHero';
import PositionMain from './PositionMain';
import PagesFooter from '@/components/PagesFooter';
import MobilePaddingTop from '@/components/layout/MobilePaddingTop';

type PageProps = {
  params: {
    slug: string;
  };
};
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const page = await getPositionDetails(params.slug);

  if (!page || !page[0]) notFound();

  const page_title = `${page[0].positionName} | Permit`;
  const page_description = `${page[0].location}`;
  const canonical_url = `/career/${params.slug}`;

  return {
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
}

export default async function CareerPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const positionArray = await getPositionDetails(slug);
  const position = positionArray[0];

  return (
    <>
      <MobilePaddingTop />
      <PositionHero
        positionName={position.positionName}
        location={position.location}
      />
      <PositionMain position={position} />
      <PagesFooter />
    </>
  );
}
