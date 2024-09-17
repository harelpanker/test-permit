import { Metadata } from 'next';
import { notFound } from 'next/navigation';
// services
import { getPostsTags, getTags } from '@/services';

// components
import PagesFooter from '@/components/PagesFooter';
import MobilePaddingTop from '@/components/layout/MobilePaddingTop';
import SectionDotsBackground from '@/app/(home-new)/SectionDotsBackground';
import Posts from '@/app/tags/[slug]/Posts';
import { Tag } from '@/app/blog/types';

type PageProps = {
  params: {
    slug: string;
  };
};
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const details = await getTags(params.slug);
  const tagsDetails = details[0];

  if (!details || !tagsDetails) notFound();

  //canonical_url
  const page_title = `${tagsDetails.name} | Permit`;
  const page_description = `Blogs, articles, best practices and guides. Everything you need to know about ${tagsDetails.name}. Read to become a pro.`;
  const canonical_url = `/tags/${params.slug}`;
  const twitter_creator = '@permit_io';

  return {
    title: page_title,
    description: page_description,
    // open graph
    openGraph: {
      title: page_title,
      description: page_description,
      url: `https://www.permit.io/tags/${params.slug}`,
      images: 'https://www.permit.io/opengraph-image.png',
      type: 'website',
    },
    // twitter
    twitter: {
      title: page_title,
      description: page_description,
      creator: twitter_creator,
      images: 'https://www.permit.io/opengraph-image.png',
      card: 'summary_large_image',
    },
    // canonical
    alternates: {
      canonical: canonical_url,
    },
  };
}

export default async function Page({ params: { slug } }: PageProps) {
  const data = await getTags(slug);
  const tagData = data[0];
  const getAllTags = await getPostsTags();
  const filteredTags = getAllTags.filter((tag: Tag) => tag.slug !== slug);

  if (!data || !tagData) notFound();

  return (
    <>
      <MobilePaddingTop />
      <Posts posts={tagData} tags={filteredTags} />
      <PagesFooter />
      <SectionDotsBackground />
    </>
  );
}
