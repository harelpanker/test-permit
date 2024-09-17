'use client';

import { useEffect, useState } from 'react';
import hljs from 'highlight.js/lib/common';
import { useViewportSize, useWindowScroll } from '@mantine/hooks';

// https://highlightjs.tiddlyhost.com/
import 'highlight.js/styles/night-owl.css';
import {
  codePermissions,
  codeResource,
  codeRoles,
  codeUsers,
} from '@/lib/code-blocks-text';

import '@/styles/hljs.css';
import '../app/(home-new)/styles/overflow.css';

type TabsOptions = 'Permissions' | 'Users' | 'Roles' | 'Resource';

const CodeTabs = () => {
  const [state, setState] = useState<TabsOptions>('Roles');
  const { width } = useViewportSize();
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
    text,
    onClick,
    state,
  }: {
    id: TabsOptions;
    state: TabsOptions;
    text: string;
    onClick: () => void;
  }) => (
    <button
      role='tab'
      className={`${
        state === id ? '!border-[#FF8B3E] text-[#FF8B3E]' : ''
      } relative z-20 border-b-[2px] border-[#ff8b3e00] py-3 transition hover:text-[#FF8B3E] focus:outline-none`}
      onClick={onClick}>
      {text}
    </button>
  );

  return (
    <div className='relative w-full max-w-full md:w-[520px]'>
      <div className='relative z-20 flex h-full w-full flex-col overflow-hidden rounded-2xl border border-[#DBDBD7] bg-[#2A211F]'>
        <div className='list relative flex justify-between px-5 text-sm font-medium text-[#CBA393]'>
          <ToggleButton
            id='Roles'
            text={width >= 640 ? 'Create Role' : 'Roles'}
            onClick={() => setState('Roles')}
            state={state}
          />
          <ToggleButton
            id='Users'
            text={width >= 640 ? 'Sync User' : 'Users'}
            onClick={() => setState('Users')}
            state={state}
          />
          <ToggleButton
            id='Resource'
            text={width >= 640 ? 'Create Resource' : 'Resource'}
            onClick={() => setState('Resource')}
            state={state}
          />
          <ToggleButton
            id='Permissions'
            text={width >= 640 ? 'Create Permission' : 'Permissions'}
            onClick={() => setState('Permissions')}
            state={state}
          />
        </div>
        <div className='w-full px-3 pt-px'>
          <div className='w-full border-b border-[#57433C]' />
        </div>
        {/* panels */}
        <div
          className={`panels flex h-full w-full grow flex-col overflow-hidden py-2 font-mono`}>
          <div
            className={`${
              state === 'Roles' ? 'block' : 'hidden'
            } overflow-hidden transition-all duration-700`}>
            {scrollHeight ? (
              <pre className={`whitespace-normal !bg-[#1F1206] !p-0 font-mono`}>
                <code className='hide_scrollbar language-bash'>
                  {codeRoles}
                </code>
              </pre>
            ) : null}
          </div>

          <div
            className={`${
              state === 'Users' ? 'block' : 'hidden'
            } codeUsers overflow-hidden transition-all duration-700`}>
            {scrollHeight ? (
              <pre
                className={`whitespace-normal  !bg-[#1F1206] !p-0 font-mono`}>
                <code className='hide_scrollbar language-html'>
                  {codeUsers}
                </code>
              </pre>
            ) : null}
          </div>

          <div
            className={`${
              state === 'Resource' ? 'block' : 'hidden'
            } codeResource overflow-hidden transition-all duration-700`}>
            {scrollHeight ? (
              <pre className={`whitespace-normal !bg-[#1F1206] !p-0 font-mono`}>
                <code className='hide_scrollbar language-html'>
                  {codeResource}
                </code>
              </pre>
            ) : null}
          </div>

          <div
            className={`${
              state === 'Permissions' ? 'block' : 'hidden'
            } overflow-hidden transition-all duration-700`}>
            {scrollHeight ? (
              <pre className={`whitespace-normal !bg-[#1F1206] !p-0 font-mono`}>
                <code className='hide_scrollbar language-bash'>
                  {codePermissions}
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
  );
};

export default CodeTabs;
