'use client';

import { FC, useState, useEffect, Fragment, Suspense } from 'react';
import Image from 'next/image';
import { Switch } from '@headlessui/react';
import { Tab } from '@headlessui/react';
import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
} from 'react-compare-slider';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Copy } from 'lucide-react';

import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-csharp';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

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
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    Prism.highlightAll();
  }, [change]);

  const copyToClipHandler = (copy: any) => {
    setIsCopy(true);
    const timeout = setTimeout(() => {
      setIsCopy(false);
    }, 2000);

    return () => clearTimeout(timeout);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='w-full pt-6 text-left sm:px-0 lg:pt-9'>
        <Tab.Group onChange={(index) => setChange(index)}>
          <Tab.List className='mx-auto flex max-w-[676px] flex-wrap justify-center gap-3 overflow-x-auto overflow-y-hidden lg:pb-9'>
            {codes.map((code) => (
              <div key={code.id}>
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      onClick={() => setEnabled(false)}
                      className={`relative flex items-center justify-center gap-[6px] overflow-hidden rounded-md border-[1.6px] bg-[#FDFCFC] p-[6px] pr-5 font-medium transition focus:shadow-[0px_0px_0px_1.6px_rgba(110,_86,_207,_0.20)] focus:outline-none lg:border-[2px] lg:p-2
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
                        } inline-block whitespace-nowrap`}>
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
              </div>
            ))}
          </Tab.List>
          <div className='relative'>
            <Tab.Panels className='relative'>
              {codes.map((code) => (
                <div key={code.id}>
                  <Tab.Panel
                    className={classNames('rounded-xl bg-transparent py-3')}>
                    <div className='mt-6 flex flex-col items-center justify-center lg:hidden'>
                      {/* switch */}
                      <div className='mb-6 flex items-center gap-3'>
                        <div className='text-sm text-[#1B1B18]'>Before</div>
                        <Switch
                          checked={enabled}
                          onChange={setEnabled}
                          className={`${
                            enabled ? 'bg-theme_purple' : 'bg-theme_purple/80'
                          } relative inline-flex h-[24px] w-[43px] flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}>
                          <span className='sr-only'>Use setting</span>
                          <span
                            aria-hidden='true'
                            className={`${
                              enabled ? 'translate-x-5' : 'translate-x-0'
                            } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-[#FDFCFE] ring-0 transition duration-200 ease-in-out`}
                          />
                        </Switch>
                        <div className='text-sm text-[#1B1B18]'>After</div>
                      </div>
                      {/* code */}
                      <div
                        className={`Code max-w-full pb-5 ${
                          enabled ? 'hidden' : 'block'
                        }`}>
                        <pre className='rounded-md !bg-[#232320]'>
                          <code
                            className={`language-${
                              code.languageId || code.language
                            }`}>
                            {code.textBefore}
                          </code>
                        </pre>
                      </div>

                      <div
                        className={`Code max-w-full pb-5 ${
                          enabled ? 'block' : 'hidden'
                        }`}>
                        <pre className=' rounded-md !bg-[#232320]'>
                          <code
                            className={`language-${
                              code.languageId || code.language
                            }`}>
                            {code.textAfter}
                          </code>
                        </pre>
                      </div>
                    </div>
                    <div className='hidden aspect-video lg:block'>
                      <ReactCompareSlider
                        itemOne={
                          <div className='Code h-full'>
                            <pre
                              style={{ padding: '2rem 4rem' }}
                              className='relative bottom-2 flex h-full w-full items-center xl:justify-center'>
                              <code
                                className={`language-${
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
                              className='relative bottom-2 flex h-full w-full items-center xl:justify-center'>
                              <code
                                className={`language-${
                                  code.languageId || code.language
                                }`}>
                                {code.textAfter}
                              </code>
                            </pre>
                          </div>
                        }
                        style={{ aspectRatio: '16/9', width: '100%' }}
                        position={60}
                        handle={
                          <ReactCompareSliderHandle
                            buttonStyle={{
                              backdropFilter: undefined,
                              background: 'white',
                              border: 4,
                              color: '#333',
                            }}
                          />
                        }
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
                </div>
              ))}
            </Tab.Panels>
            <div className='hidden lg:block'>
              <div className='absolute left-2 top-5 z-20 flex items-center justify-center rounded bg-slate-700 px-2 py-1 text-center text-xs font-bold uppercase text-slate-50'>
                Before
              </div>
              <div className='absolute right-2 top-5 z-20 flex items-center justify-center rounded bg-slate-700 px-2 py-1 text-center text-xs font-bold uppercase text-slate-50'>
                After
              </div>
            </div>
          </div>
        </Tab.Group>
      </div>
    </Suspense>
  );
};

export default BeforeAfter;
