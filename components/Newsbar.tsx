import { FC } from 'react';

type NewsbarProps = {
  newsItem: {
    message: {
      html: string;
    };
    messageMobile: {
      html: string;
    };
    id: string;
    startDate: string;
    endDate: string;
  }[];
};

const Newsbar: FC<NewsbarProps> = ({ newsItem }) => {
  const now = new Date();
  const hasNews =
    newsItem &&
    now >= new Date(newsItem[0].startDate) &&
    now <= new Date(newsItem[0].endDate);
  return (
    <>
      {newsItem.length > 0 && hasNews ? (
        <div
          className={`overflow-hidden duration-300 transform w-full z-50 max-h-16 pt-4 pb-3 flex items-center justify-center text-slate-900 bg-[#D6C5FB] px-4`}>
          {/* sliding-news-banner */}
          <span
            className='lg:block hidden w-full whitespace-pre text-center flex-none prose prose-a:text-[#7151DD] prose-a:font-bold prose-a:text-sm prose-a:md:text-base prose-p:font-bold prose-p:text-sm prose-p:md:text-base'
            dangerouslySetInnerHTML={{
              __html: newsItem[0].message.html,
            }}></span>
          <span
            className='block lg:hidden text-center flex-none prose prose-a:text-[#7151DD] prose-a:font-bold prose-a:text-sm prose-a:md:text-base prose-p:font-bold prose-p:text-sm prose-p:md:text-base'
            dangerouslySetInnerHTML={{
              __html: newsItem[0].messageMobile.html,
            }}></span>
        </div>
      ) : null}
    </>
  );
};

export default Newsbar;
