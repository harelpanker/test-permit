import { FC } from 'react';
import FAQ from './FAQ';

type FAQsProps = {
  faqs: {
    id: string;
    answer: {
      html: string;
    };
    question: string;
  }[];
};

const FAQs: FC<FAQsProps> = ({ faqs }) => {
  return (
    <section id='faqs' className='px-4 py-10'>
      <h2 className='mb-10 text-center text-2xl lg:mb-16 lg:text-4xl'>
        Frequently Asked Questions
      </h2>
      <ul className='grid grid-cols-1 gap-8'>
        {faqs.map((faq) => (
          <FAQ key={faq.id} faq={faq} />
        ))}
      </ul>
    </section>
  );
};

export default FAQs;
