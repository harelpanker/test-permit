import './globals.css';
import Script from 'next/script';
import { Metadata } from 'next';
import { getNews } from '@/services';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Newsbar from '@/components/Newsbar';

import { inter, poppins, ibm } from './fonts';

export const metadata: Metadata = {
  // https://nextjs.org/docs/app/api-reference/functions/generate-metadata
  metadataBase: new URL('https://www.permit.io'),
  // open graph
  openGraph: {
    url: 'https://www.permit.io',
    siteName: 'Permit.io',
    images: 'https://www.permit.io/opengraph-image.png',
    locale: 'en_US',
    type: 'website',
  },
  // twitter
  twitter: {
    card: 'summary_large_image',
    creator: '@permit_io',
    // images: ['https://www.permit.io/opengraph-image.png'],
  },
  // canonical
  alternates: {
    languages: {
      'en-US': '/en-US',
    },
  },
};

type LayoutProps = { children: React.ReactNode };

export default async function RootLayout({ children }: LayoutProps) {
  const news = await getNews();
  const newsItem = news.newsList;

  return (
    <html
      lang='en'
      dir='ltr'
      className={`scroll-smooth ${poppins.variable} ${inter.variable} ${ibm.variable}`}>
      <body className={`bg-[#FDF8F6] font-inter text-theme_black2 antialiased`}>
        <Newsbar newsItem={newsItem} />
        {/* <ProductHuntBanner /> */}
        <Navbar />
        <main
          id='main_wrapper'
          className='relative z-10 w-full overflow-hidden'>
          {children}
        </main>
        {/* <ProductHuntFixed /> */}
        <Footer />
        {/* Google Tag Manager (noscript)  */}
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-THM5WG9'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {/* https://morganfeeney.com/how-to/integrate-google-tag-manager-with-next-js */}
        <Script id='google-tag-manager' strategy='lazyOnload'>
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-THM5WG9');
          `}
        </Script>
      </body>
    </html>
  );
}
