'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const QandA = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const isOpenHandler1 = () => {
    setIsOpen1(true);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
  };
  const isOpenHandler2 = () => {
    setIsOpen1(false);
    setIsOpen2(true);
    setIsOpen3(false);
    setIsOpen4(false);
  };
  const isOpenHandler3 = () => {
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(true);
    setIsOpen4(false);
  };
  const isOpenHandler4 = () => {
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(true);
  };

  return (
    <section className='px-5 lg:px-12 py-16 lg:py-[9rem] bg-[#FFF9F4] lg:bg-[#FDF8F6]'>
      <div className='container max-w-[852px] flex flex-col gap-9'>
        <h2 className='text-[#43302B] font-bold text-4xl'>Q&A</h2>
        <ul className='grid grid-cols-1 gap-4 lg:gap-6'>
          {/* item 1 */}
          <li className='border-b border-[#EADDD7] text-[#43302B]'>
            <article>
              <button
                aria-label='faq item'
                aria-expanded={isOpen1}
                onClick={isOpenHandler1}
                className='flex  w-full text-left justify-between gap-2 lg:gap-8 items-center text-xl lg:text-2xl cursor-pointer'>
                <h3 className='font-bold text-lg lg:text-[22px] max-w-[90%]'>
                  Is Permit Open Source?
                </h3>
                <ChevronDown
                  className={`${
                    isOpen1 ? 'transform -rotate-180' : 'transform rotate-0'
                  } transition duration-300 ease-in-out w-6 h-6`}
                />
              </button>

              <div
                className={`${
                  isOpen1 ? 'max-h-111 mb-5' : 'max-h-0'
                } prose prose-p:text-[#846358] lg:prose-p:text-lg prose-p:font-medium lg:prose-xl prose-slate mt-4 lg:mt-8 max-w-3xl transition-all duration-300 ease-in-out overflow-hidden`}>
                <p>
                  Permit.io is a full-stack-authorization solution - covering
                  all the layers required for building access-control for
                  products and services - Infrastructure (e.g. Policy-engines,
                  SDKS, APIs), Backoffice (the controls the team behind the
                  product needs), and end-user interfaces (e.g. user management,
                  audit logs, api-keys, and more).
                </p>

                <p>
                  A key part of Permit.io&rsquo;s infrastructure is the
                  open-source combo of OPA / AWS Cedar and OPAL.
                </p>

                <p>
                  OPA (Open-Policy-Agent) and AWS Cedar are policy-based
                  decision engines, and OPAL (Open-Policy-Administration-Layer)
                  is a realtime solution to keep policy agents updated with the
                  policies and data they need, in an event-driven distributed
                  fashion.
                </p>

                <p>
                  When you use Permit.io&rsquo;s authorization microservices you
                  get OPA+OPAL as a built-in default.
                </p>
              </div>
            </article>
          </li>
          {/* item 2 */}
          <li className='border-b border-[#EADDD7] text-[#43302B]'>
            <article>
              <button
                aria-label='faq item'
                aria-expanded={isOpen2}
                onClick={isOpenHandler2}
                className='flex  w-full text-left justify-between gap-2 lg:gap-8 items-center text-xl lg:text-2xl cursor-pointer'>
                <h3 className='font-bold text-lg lg:text-[22px] max-w-[90%]'>
                  Is there a free version of Permit.io?
                </h3>
                <ChevronDown
                  className={`${
                    isOpen2 ? 'transform -rotate-180' : 'transform rotate-0'
                  } transition duration-300 ease-in-out w-6 h-6`}
                />
              </button>

              <div
                className={`${
                  isOpen2 ? 'max-h-111 mb-5' : 'max-h-0'
                } prose prose-p:text-[#846358] lg:prose-p:text-lg prose-p:font-medium lg:prose-xl prose-slate mt-4 lg:mt-8 max-w-3xl transition-all duration-300 ease-in-out overflow-hidden`}>
                <p>
                  Permit.io&apos;s community version is free to use for up to
                  1000 monthly active user.
                </p>
              </div>
            </article>
          </li>
          {/* item 3 */}
          <li className='border-b border-[#EADDD7] text-[#43302B]'>
            <article>
              <button
                aria-label='faq item'
                aria-expanded={isOpen3}
                onClick={isOpenHandler3}
                className='flex  w-full text-left justify-between gap-2 lg:gap-8 items-center text-xl lg:text-2xl cursor-pointer'>
                <h3 className='font-bold text-lg lg:text-[22px] max-w-[90%]'>
                  How much does this cost? What are monthly active users (MAUs)?
                </h3>
                <ChevronDown
                  className={`${
                    isOpen3 ? 'transform -rotate-180' : 'transform rotate-0'
                  } transition duration-300 ease-in-out w-6 h-6`}
                />
              </button>

              <div
                className={`${
                  isOpen3 ? 'max-h-111 mb-5' : 'max-h-0'
                } prose prose-a:text-[#F76808] prose-p:text-[#846358] lg:prose-p:text-lg prose-p:font-medium lg:prose-xl prose-slate mt-4 lg:mt-8 max-w-3xl transition-all duration-300 ease-in-out overflow-hidden`}>
                <p>
                  Our pricing is fully available{' '}
                  <Link href='/pricing'>here</Link>. Monthly active users (MAUs)
                  are the users you check access for, according to the policies
                  you determine. You can divide MAUs according to your own
                  tenants.
                </p>
              </div>
            </article>
          </li>
          {/* item 4 */}
          <li className='border-b border-[#EADDD7] text-[#43302B]'>
            <article>
              <button
                aria-label='faq item'
                aria-expanded={isOpen4}
                onClick={isOpenHandler4}
                className='flex  w-full text-left justify-between gap-2 lg:gap-8 items-center text-xl lg:text-2xl cursor-pointer'>
                <h3 className='font-bold text-lg lg:text-[22px] max-w-[90%]'>
                  Can I own and manage the Git repository policy code is loaded
                  into?
                </h3>
                <ChevronDown
                  className={`${
                    isOpen4 ? 'transform -rotate-180' : 'transform rotate-0'
                  } transition duration-300 ease-in-out w-6 h-6`}
                />
              </button>

              <div
                className={`${
                  isOpen4 ? 'max-h-111 mb-5' : 'max-h-0'
                } prose prose-p:text-[#846358] lg:prose-p:text-lg prose-p:font-medium lg:prose-xl prose-slate mt-4 lg:mt-8 max-w-3xl transition-all duration-300 ease-in-out overflow-hidden`}>
                <p>
                  Yes! You can even have Permit&apos;s policy-editor push the
                  generated Rego code into a different branch than the main one;
                  and have a CI process (tests, benchmarks, CR) before merging
                  into the deployed branch.
                </p>
              </div>
            </article>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default QandA;
