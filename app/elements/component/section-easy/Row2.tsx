'use client';

import { useEffect, useState } from 'react';
import { useWindowScroll } from '@mantine/hooks';
import { codeLight, codeDark } from './code-blocks';
import { Moon, Sun } from 'lucide-react';

import hljs from 'highlight.js/lib/common';
import 'highlight.js/styles/night-owl.css';
import '@/styles/hljs.css';
import '@/app/(home-new)/styles/overflow.css';

type TabsOptions = 'Light' | 'Dark';

const Row2 = () => {
  const [state, setState] = useState<TabsOptions>('Light');
  const [scroll] = useWindowScroll();
  const scrollHeight = scroll.y > 800;

  useEffect(() => {
    if (typeof window !== 'undefined' && scrollHeight) {
      hljs.highlightAll();
      hljs.configure({ ignoreUnescapedHTML: true });
    }
    setTimeout(() => {
      if (typeof window !== 'undefined' && scrollHeight) {
        hljs.highlightAll();
        hljs.configure({ ignoreUnescapedHTML: true });
      }
    }, 300);
  }, [scrollHeight]);

  const ToggleButton = ({
    id,
    onClick,
    state,
    children,
  }: {
    id: TabsOptions;
    state: TabsOptions;
    onClick: () => void;
    children: React.ReactNode;
  }) => (
    <button
      role='tab'
      className={`${
        state === id ? '!border-[#FF8B3E] text-[#FF8B3E]' : ''
      } relative z-20 border-b-[2px] border-[#ff8b3e00] py-3 transition hover:text-[#FF8B3E] focus:outline-none`}
      onClick={onClick}>
      {children}
    </button>
  );

  return (
    <div className='flex w-full flex-col items-center gap-x-16 gap-y-6 lg:flex-row'>
      <div className='flex w-full max-w-[480px] flex-col gap-y-4 lg:gap-y-6'>
        <div className='flex flex-col lg:gap-y-2'>
          <h3 className='text-lg font-semibold tracking-[-0.5px] lg:text-[26px]'>
            Embed in Minutes
          </h3>
          <p className='font-poppins text-lg font-semibold text-[#846358]'>
            As easy as copy&paste
          </p>
        </div>
        <div className='flex flex-col gap-y-2 lg:gap-y-6'>
          <p>
            Every element is ready to use out of the box - no need for a lengthy
            development process.
          </p>
        </div>
      </div>

      <div className='relative w-full max-w-full md:w-[480px]'>
        <div className='relative z-20 flex h-full w-full flex-col overflow-hidden rounded-2xl border border-[#DBDBD7] bg-[#2A211F]'>
          <div className='list relative flex gap-x-6 px-5 text-sm font-medium text-[#CBA393]'>
            <ToggleButton
              id='Light'
              onClick={() => setState('Light')}
              state={state}>
              <span className='flex items-center gap-1'>
                Light mode <Sun size={14} />
              </span>
            </ToggleButton>
            <ToggleButton
              id='Dark'
              onClick={() => setState('Dark')}
              state={state}>
              <span className='flex items-center gap-1'>
                Dark mode <Moon size={14} />
              </span>
            </ToggleButton>
          </div>
          <div className='w-full px-3 pt-px'>
            <div className='w-full border-b border-[#57433C]' />
          </div>
          {/* panels */}
          <div
            className={`panels flex h-full w-full grow flex-col overflow-hidden py-2 font-mono`}>
            <div
              className={`${
                state === 'Light' ? 'block' : 'hidden'
              } overflow-hidden transition-all duration-700`}>
              {scrollHeight ? (
                <pre
                  className={`whitespace-normal !bg-[#1F1206] !p-0 font-mono`}>
                  <code className='hide_scrollbar language-bash'>
                    {codeLight}
                  </code>
                </pre>
              ) : null}
            </div>

            <div
              className={`${
                state === 'Dark' ? 'block' : 'hidden'
              } codeUsers overflow-hidden transition-all duration-700`}>
              {scrollHeight ? (
                <pre
                  className={`whitespace-normal !bg-[#1F1206] !p-0 font-mono`}>
                  <code className='hide_scrollbar language-bash'>
                    {codeDark}
                  </code>
                </pre>
              ) : null}
            </div>
          </div>
        </div>
        <div
          className='absolute inset-0 z-10 h-full w-full rounded-2xl'
          style={{ boxShadow: '0px 4px 14.5px 3.6px rgba(0, 0, 0, 0.10)' }}
        />
      </div>
    </div>
  );
};

export default Row2;
