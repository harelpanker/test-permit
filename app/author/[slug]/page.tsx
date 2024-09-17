import { Metadata } from 'next';
// service
import { getAuthorDetails } from '@/services';
import Hero from './Hero';
import Posts from './Posts';
import Aside from './Aside';
import MobilePaddingTop from '@/components/layout/MobilePaddingTop';
// components

type PageProps = {
  params: {
    slug: string;
  };
};
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const details = await getAuthorDetails(params.slug);

  const page_title = `${details[0].name}`;
  const page_description = `${details[0].bio}`;
  const canonical_url = `/blog/${params.slug}`;

  if (!details) {
    return {};
  }

  return {
    title: page_title,
    description: page_description,
    // open graph
    openGraph: {
      title: page_title,
      description: page_description,
      url: `https://www.permit.io/author/${params.slug}`,
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

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const authorData = await getAuthorDetails(slug);

  return (
    <div className='container grid h-full min-h-screen max-w-screen-xl grid-cols-12 divide-x divide-theme_black2/25'>
      <MobilePaddingTop />
      <div className='col-span-12 lg:col-span-9'>
        <Hero author={authorData[0]} />
        <Posts author={authorData[0]} />
      </div>
      <Aside author={authorData[0]} />
    </div>
  );
}
