'use client';
import { FC, useState } from 'react';
import { ChevronDown } from 'lucide-react';

type FAQProps = {
  faq: {
    question: string;
    answer: {
      html: string;
    };
  };
};

const FAQ: FC<FAQProps> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isOpenHandler = () => setIsOpen(!isOpen);

  return (
    <li className='border-b border-black border-opacity-25'>
      <article>
        <header
          onClick={isOpenHandler}
          className='flex justify-between gap-2 lg:gap-8 items-center text-xl lg:text-2xl cursor-pointer'>
          <h3>{faq.question}</h3>
          <ChevronDown
            className={`${
              isOpen ? 'transform -rotate-180' : 'transform rotate-0'
            } opacity-50 transition duration-300 ease-in-out w-6 h-6`}
          />
        </header>
        <div
          className={`${
            isOpen ? 'max-h-111 mb-5' : 'max-h-0'
          } prose lg:prose-xl prose-slate mt-4 lg:mt-8 max-w-3xl transition-all duration-300 ease-in-out overflow-hidden`}
          dangerouslySetInnerHTML={{ __html: faq.answer.html }}
        />
      </article>
    </li>
  );
};

export default FAQ;
