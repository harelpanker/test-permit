'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import CTAButton from '@/components/ui/CTAButton';
import hljs from 'highlight.js/lib/common';
import { Tab } from '@headlessui/react';
import { useViewportSize } from '@mantine/hooks';
import { ArrowUpRight } from 'lucide-react';

import image1 from '/public/images/rbac/s5-m.png';
import image2 from '/public/images/rbac/s5-d.png';

import 'highlight.js/styles/night-owl.css';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Section4 = () => {
  const [change, setChange] = useState(0);
  const { width } = useViewportSize();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      hljs.highlightAll();
    }
  }, []);

  const handleTabChange = (index: number) => {
    hljs.highlightAll();
    setChange(index);
  };
  useEffect(() => {
    hljs.highlightAll();
  }, [change]);

  return (
    <section className='relative z-20 px-5 py-[5dvh] text-center lg:px-12 lg:py-[10dvh]'>
      <div className='container flex w-full max-w-6xl flex-col items-center gap-11 lg:gap-20'>
        <header className='flex flex-col gap-6'>
          <div className='flex flex-col gap-4'>
            <h3 className='text-sm font-bold uppercase tracking-wider text-[#F76808] lg:text-lg'>
              {width >= 640
                ? 'RBAC Policy-as-code generator anyone can use'
                : 'RBAC Policy-as-code generator'}
            </h3>
            <h2 className='mx-auto text-3xl font-bold text-[#451E11] lg:max-w-none lg:text-4xl'>
              <span className='lg:block'>We generate RBAC policy-as-code </span>
              so you don&apos;t have to
            </h2>
          </div>
          <p className='mx-auto text-lg font-medium text-[#43302B] lg:text-[22px]'>
            <span className='sm:block'>
              Permit writes policy-as-code (e.g. Rego, Cedar){' '}
            </span>
            directly into Git. Add and edit more code via Gitops
          </p>
          <div className='mx-auto flex flex-wrap items-center gap-3'>
            <div className='shrink-0'>
              <CTAButton
                bgColor='purple'
                text='Try it Out'
                link='https://app.permit.io/?utm_source=website&utm_medium=website-rbac'
              />
            </div>
            <a
              className='group flex items-center justify-center gap-[10px] rounded-full bg-[#DEC5FB] px-5 py-3 font-bold text-theme_purple transition hover:opacity-90 md:text-[22px]'
              target='_blank'
              rel='noopener noreferrer'
              href='https://docs.permit.io/integrations/gitops/overview/'>
              <span>Gitops Docs</span>
              <ArrowUpRight className='transition group-hover:-translate-y-1 group-hover:translate-x-1' />
            </a>
          </div>
        </header>
        {/* table */}
        <div className='flex flex-col items-center gap-1 md:flex-row lg:items-stretch lg:gap-3'>
          <figure className='md:hidden'>
            <Image src={image1} alt='' width={353} height={334} />
          </figure>
          <figure className='hidden md:block'>
            <Image src={image2} alt='' width={535} height={283} />
          </figure>
          {/* table */}
          <div className='mx-auto max-w-[94vw]'>
            <div className='relative h-full max-w-full text-left'>
              <div className='relative z-20 w-full max-w-[428px] overflow-hidden rounded-2xl border border-[#DBDBD7] bg-[#232320] lg:h-full'>
                <Tab.Group onChange={(index) => handleTabChange(index)}>
                  <Tab.List
                    className={`relative flex gap-7 px-5 text-sm font-medium text-[#CBA393]`}>
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          'relative z-20 border-b-[2px] border-[#ff8b3e00] py-3 transition hover:text-[#FF8B3E] focus:outline-none',
                          selected ? '!border-[#FF8B3E] text-[#FF8B3E]' : ''
                        )
                      }>
                      {width >= 640 ? 'Ceder RBAC' : 'Roles'}
                    </Tab>
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          'relative z-20 border-b-[2px] border-[#ff8b3e00] py-3 transition hover:text-[#FF8B3E] focus:outline-none',
                          selected ? '!border-[#FF8B3E] text-[#FF8B3E]' : ''
                        )
                      }>
                      {width >= 640 ? 'OPA Rego RBAC' : 'Rego'}
                    </Tab>
                    <div className='absolute bottom-0 left-0 right-0 top-auto mx-auto h-px w-[96%] bg-[#57433C]'></div>
                  </Tab.List>
                  <Tab.Panels>
                    <Tab.Panel>
                      <pre className='whitespace-normal py-3 !font-mono'>
                        <code>permit (</code>
                        <code className='!pl-6'>
                          principal in Role::&apos;Admin&apos;,
                        </code>
                        <code className='!pl-6'>
                          action in [Action::&apos;View&apos;,
                          Action::&apos;Create&apos;],
                        </code>
                        <code className='!pl-6'>
                          resource == Repo::&apos;repo.git&apos;
                        </code>
                        <code>);</code>
                      </pre>
                    </Tab.Panel>

                    <Tab.Panel>
                      <pre className='whitespace-normal py-3 font-mono'>
                        <code>default allow := false</code>
                        <code>roles := {'{'}</code>
                        <code className='!pl-6'>&apos;Admin&apos;: {'{'}</code>
                        <code className='!pl-6'>
                          &apos;Repo&apos;:
                          [&apos;View&apos;,&apos;Create&apos;]
                        </code>
                        <code className='!pl-6'>{'}'}</code>
                        <code>{'}'}</code>
                        <code>allow if {'{'}</code>
                        <code className='lan!pl-6'>
                          some action in roles[input.role][input.resource]
                        </code>
                        <code className='!pl-6'>input.action == action</code>
                        <code>{'}'}</code>
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
        </div>
      </div>
      <style jsx>{`
        .hljs {
          background-color: #232320;
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

export default Section4;
