'use client';

import { FC, useState, useEffect, Fragment, Suspense } from 'react';
import Image from 'next/image';
import { Switch } from '@headlessui/react';
import { Tab } from '@headlessui/react';
import Loading from './Loading';
import { ReactCompareSlider } from 'react-compare-slider';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Copy } from 'lucide-react';
import { useWindowScroll } from '@mantine/hooks';

import hljs from 'highlight.js/lib/common';
import '@/styles/hljs.css';

// import Prism from 'prismjs';
// import 'prismjs/themes/prism-tomorrow.css';
// import 'prismjs/components/prism-python';
// import 'prismjs/components/prism-java';
// import 'prismjs/components/prism-ruby';
// import 'prismjs/components/prism-go';
// import 'prismjs/components/prism-csharp';

type BeforeAfterProps = {
  codes: {
    id: string;
    nameOnTag: string;
    language: string;
    languageId: null;
    copy: string;
    textAfter: string;
    textBefore: string;
    active: boolean;
    docsLink: string;
    iconActive: {
      url: string;
      width: number;
      height: number;
    };
    iconNotActive: {
      url: string;
      width: number;
      height: number;
    };
  }[];
};

const BeforeAfter: FC<BeforeAfterProps> = ({ codes }) => {
  const [isCopy, setIsCopy] = useState(false);
  const [change, setChange] = useState(0);
  const [enabled, setEnabled] = useState(false);

  const [scroll] = useWindowScroll();
  const scrollHeight = scroll.y > 800;

  // useEffect(() => {
  //   Prism.highlightAll();
  // }, [change]);

  useEffect(() => {
    if (scrollHeight) {
      hljs.highlightAll();
    }
  }, [change, scrollHeight]);

  const copyToClipHandler = (copy: any) => {
    setIsCopy(true);
    const timeout = setTimeout(() => {
      setIsCopy(false);
    }, 2000);

    return () => clearTimeout(timeout);
  };

  const CustomHandle = () => (
    <div className='relative h-full w-2 cursor-move'>
      <div className='h-1/2 bg-gradient-to-t from-theme_purple to-theme_yellow' />
      <div className='absolute left-1/2 top-1/2 z-20 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-theme_purple shadow-2xl' />
      <div className='h-1/2 bg-gradient-to-b from-theme_purple to-theme_yellow' />
    </div>
  );

  return (
    <Suspense fallback={<Loading />}>
      <div className='w-full pt-4 text-left sm:px-0 lg:pt-9'>
        {/* switch */}
        <div className='mb-6 flex w-full items-center justify-center gap-3 lg:hidden'>
          <div className='text-sm font-medium text-theme_orange_12'>
            Homebrew
          </div>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${
              enabled ? 'bg-theme_purple' : 'bg-[#D1B9B0]'
            } relative inline-flex h-[24px] w-[43px] flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}>
            <span className='sr-only'>Use setting</span>
            <span
              style={{
                filter: 'drop-shadow(0px 2px 4px rgba(0, 35, 11, 0.20))',
              }}
              aria-hidden='true'
              className={`${
                enabled ? 'translate-x-[1.15rem]' : 'translate-x-0'
              } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-[#FDFCFE] ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
          <div className='text-sm font-medium text-theme_orange_12'>
            With Permit
          </div>
        </div>

        <Tab.Group onChange={(index) => setChange(index)}>
          <div className='relative flex flex-col overflow-hidden rounded-lg border-[#CBA393] bg-[#2A211F] lg:border-none lg:bg-transparent'>
            <Tab.List className='flex max-w-[676px] justify-start gap-3 overflow-x-auto overflow-y-hidden p-4 lg:mx-auto lg:flex-wrap lg:justify-center lg:pb-9'>
              {codes.map((code) => (
                <Tab key={code.id} as={Fragment}>
                  {({ selected }) => (
                    <button
                      onClick={() => setEnabled(false)}
                      className={`relative flex h-[50px] w-[60px] shrink-0 grow items-center justify-center gap-[6px] overflow-hidden rounded-lg border-[2px] border-[#D1B9B0]  bg-[#FDFCFC] p-[6px] font-medium transition focus:shadow-[0px_0px_0px_1.6px_rgba(110,_86,_207,_0.20)] focus:outline-none lg:h-auto lg:w-auto lg:border-[2px] lg:p-2 lg:pr-5
                      ${
                        selected
                          ? 'border-theme_purple text-theme_purple'
                          : 'border-[#D1B9B0] text-[#43302B] hover:border-[#D3B3FA]'
                      } ${
                        code.active
                          ? 'cursor-pointer'
                          : 'cursor-not-allowed opacity-75'
                      } ${!code.active ? 'pointer-events-none opacity-75' : ''}
                    `}>
                      <span
                        className={`flex w-full max-w-[26px] justify-center lg:max-w-none`}>
                        <Image
                          src={
                            selected
                              ? code.iconActive.url
                              : code.iconNotActive.url
                          }
                          alt={code.nameOnTag}
                          width={code.iconActive.width}
                          height={code.iconActive.height}
                          className='w-full max-w-[26px] lg:max-w-[34px]'
                        />
                      </span>
                      <span
                        className={`${
                          selected ? '' : ''
                        } hidden whitespace-nowrap lg:inline-block`}>
                        {code.nameOnTag}
                      </span>
                      {!code.active && (
                        <span className='absolute right-0 top-0 z-10 translate-x-[2rem] translate-y-[6px] rotate-45 bg-[#EADDD7] px-8 text-[7px] font-bold uppercase text-[#846358]'>
                          Soon
                        </span>
                      )}
                    </button>
                  )}
                </Tab>
              ))}
            </Tab.List>

            <div className='w-full px-1 lg:hidden'>
              <div className='h-px w-full bg-[#3B2E29]' />
            </div>

            <Tab.Panels>
              {scrollHeight &&
                codes.map((code) => (
                  <Tab.Panel key={code.id}>
                    <div className='flex flex-col items-center justify-center lg:hidden'>
                      {/* code */}
                      <div
                        className={`Code max-w-full ${
                          enabled ? 'hidden' : 'block'
                        }`}>
                        <pre className=' rounded-md !bg-[#1F1206] !p-0 font-mono'>
                          <code
                            style={{ padding: '1rem' }}
                            className={`hide_scrollbar language-${
                              code.languageId || code.language
                            }`}>
                            {code.textBefore}
                          </code>
                        </pre>
                      </div>

                      <div
                        className={`Code max-w-full ${
                          enabled ? 'block' : 'hidden'
                        }`}>
                        <pre className=' rounded-md !bg-[#1F1206] !p-0 font-mono'>
                          <code
                            style={{ padding: '1rem' }}
                            className={`hide_scrollbar language-${
                              code.languageId || code.language
                            }`}>
                            {code.textAfter}
                          </code>
                        </pre>
                      </div>
                    </div>
                    <div className='hidden aspect-video overflow-hidden rounded-2xl border-4 border-[#E0CEC7] bg-[#2a211f] lg:block'>
                      <ReactCompareSlider
                        itemOne={
                          <div className='Code h-full'>
                            <pre
                              style={{ padding: '2rem 4rem' }}
                              className='relative bottom-2 flex h-full w-full items-center !bg-[#2a211f] !p-0 font-mono lg:justify-center'>
                              <code
                                className={`hide_scrollbar max-w-[70%] language-${
                                  code.languageId || code.language
                                }`}>
                                {code.textBefore}
                              </code>
                            </pre>
                          </div>
                        }
                        itemTwo={
                          <div className='Code h-full'>
                            <pre
                              style={{ padding: '2rem 4rem' }}
                              className='relative bottom-2 flex h-full w-full items-center !bg-[#2a211f] !p-0 font-mono lg:justify-center'>
                              <code
                                className={`hide_scrollbar max-w-[70%] language-${
                                  code.languageId || code.language
                                }`}>
                                {code.textAfter}
                              </code>
                            </pre>
                          </div>
                        }
                        style={{ aspectRatio: '16/9', width: '100%' }}
                        position={60}
                        handle={<CustomHandle />}
                      />
                    </div>
                    <div className='hidden lg:block'>
                      <CopyToClipboard
                        text={code.copy}
                        onCopy={() => copyToClipHandler(code)}>
                        <div
                          className={`${
                            isCopy ? 'invert' : 'invert-0'
                          } absolute bottom-5 right-3 z-10 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-slate-100 p-1 transition-all duration-300`}>
                          <Copy className='h-4 w-4' />
                        </div>
                      </CopyToClipboard>
                    </div>
                  </Tab.Panel>
                ))}
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    </Suspense>
  );
};

export default BeforeAfter;
