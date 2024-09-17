'use client';

import { useEffect, useState } from 'react';
import { useViewportSize } from '@mantine/hooks';
import hljs from 'highlight.js/lib/common';
import { Tab } from '@headlessui/react';

import 'highlight.js/styles/night-owl.css';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Section3Bottom = () => {
  const [change, setChange] = useState(0);
  const { width } = useViewportSize();

  useEffect(() => {
    typeof window !== 'undefined' && hljs.highlightAll();
  }, []);

  const handleTabChange = (index: number) => {
    hljs.highlightAll();
    setChange(index);
  };
  useEffect(() => {
    hljs.highlightAll();
  }, [change]);

  return (
    <section className='lg:px-12'>
      <div className='container flex w-full max-w-[1064px] flex-col items-center gap-6 bg-[#FFE8D7] p-12 text-center lg:flex-row lg:rounded-2xl lg:text-left'>
        <header className='flex w-full max-w-[328px] flex-col items-center gap-3 lg:items-start'>
          <h2 className='pb-1 text-3xl font-bold text-transparent lg:text-4xl'>
            <span className='text-[#451E11]'>APIs for</span>{' '}
            <br className='hidden lg:block' />
            <span className='bg-gradient-to-r from-[#974ef2] to-[#f76808] bg-clip-text'>
              everything
            </span>
          </h2>
          <div className='flex flex-col gap-1 text-lg font-medium text-[#451E11] lg:text-[22px]'>
            <p>
              Create, manage and automate your policies with Permit&apos;s API.
            </p>
            <p>Anything done via the UI can be done with our API as well!</p>
          </div>
          <a
            href='https://api.permit.io/v2/redoc'
            target='_blank'
            rel='noreferrer'
            className='flex items-center gap-[10px] rounded-full bg-[#DEC5FB] px-5 py-3 text-lg font-bold text-theme_purple transition hover:bg-theme_purple hover:text-white lg:text-xl'>
            <span className='mb-px'>API Docs</span>
            <svg
              width='13'
              height='13'
              viewBox='0 0 13 13'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M10.1201 3.67603L1.5001 12.296L0.0800977 10.876L8.7001 2.25603H1.1201V0.256025H12.1201V11.256H10.1201V3.67603Z'
                fill='currentColor'
              />
            </svg>
          </a>
        </header>
        {/* table */}
        <div className='relative w-full max-w-[617px] text-left'>
          <div className='relative z-20 w-full overflow-hidden rounded-2xl border border-[#DBDBD7] bg-[#232320]'>
            <Tab.Group onChange={(index) => handleTabChange(index)}>
              <Tab.List
                className={`relative flex justify-between gap-2 whitespace-nowrap px-5 text-sm font-medium text-[#CBA393]`}>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      'relative z-20 border-b-[2px] border-[#ff8b3e00] py-3 transition hover:text-[#FF8B3E] focus:outline-none',
                      selected ? '!border-[#FF8B3E] text-[#FF8B3E]' : ''
                    )
                  }>
                  {width >= 640 ? 'Create Resource' : 'Roles'}
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      'relative z-20 border-b-[2px] border-[#ff8b3e00] py-3 transition hover:text-[#FF8B3E] focus:outline-none',
                      selected ? '!border-[#FF8B3E] text-[#FF8B3E]' : ''
                    )
                  }>
                  {width >= 640 ? 'Relationships' : 'Users'}
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      'relative z-20 border-b-[2px] border-[#ff8b3e00] py-3 transition hover:text-[#FF8B3E] focus:outline-none',
                      selected ? '!border-[#FF8B3E] text-[#FF8B3E]' : ''
                    )
                  }>
                  {width >= 640 ? 'Resource#Roles' : 'Resource'}
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      'relative z-20 border-b-[2px] border-[#ff8b3e00] py-3 transition hover:text-[#FF8B3E] focus:outline-none',
                      selected ? '!border-[#FF8B3E] text-[#FF8B3E]' : ''
                    )
                  }>
                  {width >= 640 ? 'Derivations' : 'Permissions'}
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      'relative z-20 hidden border-b-[2px] border-[#ff8b3e00] py-3 transition hover:text-[#FF8B3E] focus:outline-none md:block',
                      selected ? '!border-[#FF8B3E] text-[#FF8B3E]' : ''
                    )
                  }>
                  {width >= 640 ? 'Assign Roles' : 'Roles'}
                </Tab>
                <div className='absolute bottom-0 left-0 right-0 top-auto mx-auto h-px w-[96%] bg-[#57433C]'></div>
              </Tab.List>
              <Tab.Panels className='tabs_list h-[18.5rem] overflow-auto'>
                {/* 1 */}
                <Tab.Panel>
                  <pre className='whitespace-normal py-3 font-mono'>
                    <code>{`curl -L X POST`}</code>
                    <code>{`"https://api.permit.io/v2/schema/{project_id}/{env_id}/resources" \ `}</code>
                    <code>{`-H 'authorization: Bearer API_SECRET_KEY' `}</code>
                    <code>{`--data-raw '{"key":"folder","name":"Folder","actions":{"create":{}, "edit":{},"view":{}}}'`}</code>

                    <code>{`curl "https://api.permit.io/v2/schema/{project_id}/{env_id}/resources" \ `}</code>
                    <code>{`-H 'authorization: Bearer API_SECRET_KEY' \ `}</code>
                    <code>{`--data-raw '{"key":"file","name":"File","actions":{"create":{}, "edit":{},"view":{}}}'`}</code>
                  </pre>
                </Tab.Panel>
                {/* 2 */}
                <Tab.Panel>
                  <pre className='whitespace-normal py-3 font-mono'>
                    <code>{`curl -L X POST`}</code>
                    <code>{`"https://api.permit.io/v2/schema/{project_id}/{env_id}/resources/file/relations" \ `}</code>
                    <code>{`-H 'authorization: Bearer API_SECRET_KEY' \ `}</code>
                    <code>{`--data-raw '{"key":"parent","name":"Parent","subject_resource":"folder"}'`}</code>
                  </pre>
                </Tab.Panel>
                {/* 3 */}
                <Tab.Panel>
                  <pre className='whitespace-normal py-3 font-mono'>
                    <code>{`curl -L X POST`}</code>
                    <code>{`"https://api.permit.io/v2/schema/{project_id}/{env_id}/resources/folder/roles" \ `}</code>
                    <code>{`-H 'authorization: Bearer API_SECRET_KEY' \ `}</code>
                    <code>{`--data-raw '{"key":"editor","name":"Editor","permissions":["create","edit","view"]}'`}</code>

                    <code>{`curl -L X POST`}</code>
                    <code>{`"https://api.permit.io/v2/schema/{project_id}/{env_id}/resources/folder/roles" \ `}</code>
                    <code>{`-H 'authorization: Bearer API_SECRET_KEY' \ `}</code>
                    <code>{`--data-raw '{"key":"viewer","name":"Viewer","permissions":["view"]}'`}</code>

                    <code>{`curl -L X POST`}</code>
                    <code>{`"https://api.permit.io/v2/schema/{project_id}/{env_id}/resources/file/roles" \ `}</code>
                    <code>{`-H 'authorization: Bearer API_SECRET_KEY' \ `}</code>
                    <code>{`--data-raw '{"key":"editor","name":"Editor","permissions":["create","edit","view"]}'`}</code>

                    <code>{`curl -L X POST`}</code>
                    <code>{`"https://api.permit.io/v2/schema/{project_id}/{env_id}/resources/file/roles" \ `}</code>
                    <code>{`-H 'authorization: Bearer API_SECRET_KEY' \ `}</code>
                    <code>{`--data-raw '{"key":"viewer","name":"Viewer","permissions":["view"]}'`}</code>
                  </pre>
                </Tab.Panel>
                {/* 4 */}
                <Tab.Panel>
                  <pre className='whitespace-normal py-3 font-mono'>
                    <code>{`curl -L X PATCH`}</code>
                    <code>{`"https://api.permit.io/v2/schema/{project_id}/{env_id}/resources/file/roles/editor" \ `}</code>
                    <code>{`-H 'authorization: Bearer API_SECRET_KEY' \ `}</code>
                    <code>{`--data-raw '{"granted_to":{"users_with_role":[{"linked_by_relation":"parent","on_resource":"folder","role":"editor"}]}}'`}</code>

                    <code>{`curl -L X PATCH`}</code>
                    <code>{`"https://api.permit.io/v2/schema/{project_id}/{env_id}/resources/file/roles/viewer" \ `}</code>
                    <code>{`-H 'authorization: Bearer API_SECRET_KEY' \ `}</code>
                    <code>{`--data-raw '{"granted_to":{"users_with_role":[{"linked_by_relation":"parent","on_resource":"folder","role":"viewer"}]}}'`}</code>
                  </pre>
                </Tab.Panel>
                {/* 5 */}
                <Tab.Panel className='hidden md:block'>
                  <pre className='whitespace-normal py-3 font-mono'>
                    <code>{`curl -L`}</code>
                    <code>{`"https://api.permit.io/v2/facts/{project_id}/{env_id}/role_assignments" \ `}</code>
                    <code>{`-H 'authorization: Bearer API_SECRET_KEY' \ `}</code>
                    <code>{`-d '{"role":"editor","user":"susan_from_rnd","tenant":"default","resource_instance":"folder:repository"}'`}</code>
                  </pre>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          <div
            className='absolute inset-0 z-10 h-full w-full rounded-2xl'
            style={{
              boxShadow: '0px 4px 14.5px 3.6px rgba(0, 0, 0, 0.10)',
            }}></div>
        </div>
      </div>

      <style jsx>{`
        .hljs {
          background-color: #232320 !important;
        }
        pre code.hljs {
          padding-top: 0.5em;
          padding-bottom: 0.5em;
          word-wrap: break-word !important;
        }
        code {
          font-size: 14px !important;
          word-wrap: break-word !important;
          padding-top: 0.3em !important;
          padding-bottom: 0.3em !important;
        }
        .hljs-string {
          font-size: 14px !important;
          display: none;
          word-wrap: break-word !important;
          max-width: 100%;
        }
      `}</style>
    </section>
  );
};

export default Section3Bottom;
