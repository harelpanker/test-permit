import { Metadata } from 'next';
import { getFaqs, getRecommendationsForHomepage } from '@/services';
import SectionHero from './SectionHero';
import SectionDotsBackground from '../(home-new)/SectionDotsBackground';
import SectionCenter from './SectionCenter';
import SectionFAQs from './SectionFAQs';

const page_title = 'Pricing Packages and SaaS Models | Permit.io';
const page_description =
  'Find the right plan for you based on the number of users you check access for. Try our free community plan. Sign up to make Auth-z easy.';
const canonical_url = '/pricing';

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
const jsonData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  url: 'http://www.permit.io/',
  logo: 'http://www.permit.io/_ipx/w_828,q_75/%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimages%2Ficons%2Flogo-dark.a97f7542db97d9e383b7c9f613fff940.svg?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimages%2Ficons%2Flogo-dark.a97f7542db97d9e383b7c9f613fff940.svg&w=828&q=75',
};
const jsonFaqs = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is there a free version of Permit.io?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Of course! Our community version provides authorization capabilities up to 1,000 monthly active users. The best part? It’s free forever.',
      },
    },
    {
      '@type': 'Question',
      name: "What's the difference between OPA+OPAL and Permit.io?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Permit.io is a full-stack-authorization solution - covering all the layers required for building access-control for products and services - Infrastructure (e.g. Policy-engines, SDKS, APIs), Backoffice (the controls the team behind the product needs), and end-user interfaces (e.g. user management, audit logs, api-keys, ...).',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I change my plan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can change your plan at any time based on your scalability needs. Billing takes place each month, and any changes will be implemented immediately.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which plan is right for me?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We know each organization has its own unique needs. If you need help in determining the best plan for you, let’s talk.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are monthly active users (MAUs)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Monthly active users (MAUs) are the users you check access for, according to the policies you determine. You can divide MAUs according to your own tenants.',
      },
    },
  ],
};

export default async function PricingHome() {
  const faqs = await getFaqs();
  const recommendations = await getRecommendationsForHomepage();

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonData) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonFaqs) }}
      />
      <SectionHero />
      <SectionCenter recommendations={recommendations} />
      <SectionFAQs faqs={faqs} />
      <SectionDotsBackground />
    </>
  );
}
