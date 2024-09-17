import { Metadata } from 'next';
import { notFound } from 'next/navigation';
// service
import { getMax6PostsCards, getPostDetails } from '@/services';

// components
import Article from './Article';
import AsideWrapper from './AsideWrapper';
import Author from './Author';
import RelatedPosts from './RelatedPosts';
import PagesFooter from '@/components/PagesFooter';
import logo from '../../../public/images/logo_text.svg';
import MobilePaddingTop from '@/components/layout/MobilePaddingTop';

type PageProps = {
  params: {
    slug: string;
  };
};
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const details = await getPostDetails(params.slug);
  const postDetails = details[0];

  if (!details || !postDetails) notFound();

  //canonical_url
  const cannonicalString = `/blog/${params.slug}`;
  const page_title = `${postDetails.title} | Permit`;
  const page_description = `${postDetails.summery}`;
  const canonical_url = `${
    postDetails.canonical_url ? postDetails.canonical_url : cannonicalString
  }`;
  const twitter_creator = postDetails.authorReference.twitterCreator
    ? postDetails.authorReference.twitterCreator
    : '@permit_io';

  return {
    title: page_title,
    description: page_description,
    // open graph
    openGraph: {
      title: page_title,
      description: page_description,
      url: `https://www.permit.io/blog/${params.slug}`,
      images: `${postDetails.image.url}`,
      type: 'website',
    },
    // twitter
    twitter: {
      title: page_title,
      description: page_description,
      creator: twitter_creator,
      images: [`${postDetails.image.url}`],
      card: 'summary_large_image',
    },
    // canonical
    alternates: {
      canonical: canonical_url,
    },
    keywords: [`${postDetails.metaKeywords ? postDetails.metaKeywords : ''}`],
  };
}

export default async function Page({ params: { slug } }: PageProps) {
  const postD = await getPostDetails(slug);
  const postData = postD[0];
  const readMoreData = await getMax6PostsCards();

  if (!postD || !postData) notFound();

  const shuffledArray = readMoreData
    .filter((post: { id: string }) => post.id !== postData.id)
    .sort((a: number, b: number) => 0.5 - Math.random())
    .slice(0, 3);

  const jsonArticle = {
    '@context': 'https://schema.org',
    '@type': postData.articleType ? postData.articleType : 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.permit.io/blog/${slug}`,
    },
    headline: postData.title,
    image: [postData.image.url],
    datePublished: postData.createdAt,
    dateModified: postData.updatedAt,
    author: {
      '@type': 'Person',
      name: postData.authorReference.name,
      url: `https://www.permit.io/author/${postData.authorReference.slug}`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Permit.io',
      logo: {
        '@type': 'ImageObject',
        url: logo.src,
      },
    },
  };

  const jsonBreadcrumbs = {
    '@context': 'https://schema.org/',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Never Build Permissions Again | Permit.io',
        item: 'https://www.permit.io/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Auth-z and Permissions Management Updates and News | Permit.io',
        item: 'https://www.permit.io/blog/',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: postData.title,
        item: `https://www.permit.io/blog/${slug}`,
      },
    ],
  };

  const jsonOrganization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    url: 'http://www.permit.io/',
    logo: 'http://www.permit.io/_ipx/w_828,q_75/%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimages%2Ficons%2Flogo-dark.a97f7542db97d9e383b7c9f613fff940.svg?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimages%2Ficons%2Flogo-dark.a97f7542db97d9e383b7c9f613fff940.svg&w=828&q=75',
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonArticle) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonBreadcrumbs) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonOrganization) }}
      />
      <MobilePaddingTop />
      <div className='relative bg-white'>
        <section className='max-w-screen-3xl container grid grid-cols-12 divide-x divide-theme_black2/25'>
          <Article post={postData} />
          <AsideWrapper post={postData} />
        </section>
        <Author post={postData} />
        <RelatedPosts shuffledArray={shuffledArray} />
      </div>
      <PagesFooter />
    </>
  );
}
