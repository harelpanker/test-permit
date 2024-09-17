import { Metadata } from 'next';
import { notFound } from 'next/navigation';
// service
import { getLegalDetails } from '@/services';
import MobilePaddingTop from '@/components/layout/MobilePaddingTop';

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const details = await getLegalDetails(params.slug);
  const legalDetails = details[0];

  if (!details || !legalDetails) notFound();

  //canonical_url
  const cannonicalString = `/legal/${params.slug}`;
  const page_title = `${legalDetails.title} | Permit`;
  const canonical_url = `${cannonicalString}`;
  return {
    title: page_title,
    // open graph
    openGraph: {
      title: page_title,
      url: `https://www.permit.io/legal/${params.slug}`,
    },
    // twitter
    twitter: {
      title: page_title,
    },
    // canonical
    alternates: {
      canonical: canonical_url,
    },
    keywords: [`${legalDetails.metaKeywords ? legalDetails.metaKeywords : ''}`],
  };
}

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const details = await getLegalDetails(slug);
  const legalDetails = details[0];

  if (!details || !legalDetails) notFound();

  return (
    <article>
      <MobilePaddingTop />
      <header className='bg-gray-900 text-gray-50 flex min-h-[40vh] flex-col items-center justify-center px-4 py-20 pt-28 text-center md:min-h-[45vh]'>
        <div className='container max-w-5xl'>
          <h1 className='mb-4 text-5xl font-bold md:text-7xl'>
            {legalDetails.title}
          </h1>
        </div>
      </header>
      <section className='px-4'>
        <div className='container max-w-5xl'>
          <div
            className='prose prose-gray mx-auto py-14'
            dangerouslySetInnerHTML={{ __html: legalDetails.richText.html }}
          />
        </div>
      </section>
    </article>
  );
}
