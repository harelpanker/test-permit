'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FC } from 'react';

type FAQsProps = {
  faqs: {
    id: string;
    answer: {
      html: string;
    };
    question: string;
  }[];
};

const SectionFAQs: FC<FAQsProps> = ({ faqs }) => {
  return (
    <section className='relative z-20 bg-theme_black px-5 py-24 text-[#FEEADD] lg:px-12'>
      <div className='container flex max-w-[1065px] flex-col gap-y-12'>
        <h2 className='text-center text-[26px] font-semibold tracking-[-1px] lg:text-4xl'>
          Frequently asked questions
        </h2>
        <Accordion
          type='single'
          collapsible
          className='border-t border-[#57433C]'>
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className='border-[#57433C]'>
              <AccordionTrigger className='gap-x-3 px-6 py-4 text-left hover:no-underline [&[data-state=open]>div>div.vertical]:rotate-90 [&[data-state]>svg]:hidden'>
                <h3>{faq.question}</h3>{' '}
                <div className='relative flex h-[14px] w-[14px] shrink-0 items-center justify-center'>
                  <div className='horizontal absolute left-1/2 top-1/2 h-[2px] w-full -translate-x-1/2 -translate-y-1/2 bg-[#FEEADD]' />
                  <div className='vertical h-full w-[2px] bg-[#FEEADD] transition' />
                </div>
                {/* rotate-90 */}
              </AccordionTrigger>
              <AccordionContent>
                <div
                  className={`prose max-w-full px-6 text-[#CBA393] prose-a:text-inherit`}
                  dangerouslySetInnerHTML={{ __html: faq.answer.html }}
                />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <style jsx>{`
        button[data-state='open'] .vertical {
          transform: rotate(90deg);
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default SectionFAQs;
