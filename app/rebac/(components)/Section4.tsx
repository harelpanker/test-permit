'use client';

import { useEffect } from 'react';
import { useViewportSize } from '@mantine/hooks';
import hljs from 'highlight.js/lib/common';

import CTAButton from '@/components/ui/CTAButton';
import Image from 'next/image';

import img from '/public/images/rebac/7.svg';
import img_mobile from '/public/images/rebac/77.png';

import 'highlight.js/styles/night-owl.css';

const Section4 = () => {
  const { width } = useViewportSize();

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <section className='bg-[#FDF8F6] px-5 py-16 lg:px-12 lg:py-28'>
      <div className='container flex w-full max-w-[1066px] flex-col items-center gap-9 text-center'>
        <header className='flex w-full max-w-xs flex-col items-center gap-4 lg:max-w-[640px] lg:gap-6'>
          <div className='flex flex-col gap-4'>
            <h3 className='text-sm font-bold uppercase tracking-[2px] text-[#F76808] lg:text-base'>
              Zero latency, fine granularity
            </h3>
            <h2 className='text-3xl font-bold leading-tight text-[#451E11] lg:text-4xl'>
              Policy as a graph? Policy as code? Enjoy both with OPAL
            </h2>
          </div>
          <div className='flex flex-col gap-4'>
            <p className='hidden w-full text-[22px] font-medium text-[#846358] lg:block'>
              Combine the power of{' '}
              <a
                className='text-theme_purple transition hover:text-theme_purple/80'
                target='_blank'
                rel='noopener noreferrer'
                href='https://zanzibar.academy/'>
                Google Zanzibar
              </a>{' '}
              style graph-based authorization in the cloud with zero latency at
              the edge thanks to{' '}
              <a
                className='text-theme_purple transition hover:text-theme_purple/80'
                target='_blank'
                rel='noopener noreferrer'
                href='https://github.com/permitio/opal'>
                Permit&apos;s OPAL
              </a>{' '}
              (Open Policy Administration Layer)
            </p>
            <p className='w-full text-lg font-medium text-[#846358] lg:hidden'>
              Combine the power of{' '}
              <a
                className='text-theme_purple'
                target='_blank'
                rel='noopener noreferrer'
                href='https://zanzibar.academy/'>
                Google Zanzibar
              </a>{' '}
              style authorization in the cloud with zero latency at the edge
              thanks to{' '}
              <a
                className='text-theme_purple'
                target='_blank'
                rel='noopener noreferrer'
                href='https://github.com/permitio/opal'>
                Permit&apos;s OPAL
              </a>{' '}
              (Open Policy Administration Layer)
            </p>
          </div>
          <div className='flex gap-3'>
            <CTAButton
              text={`${width >= 640 ? 'See how it works' : 'How it works'}`}
              link='https://docs.permit.io/how-to/build-policies/rebac/overview'
              bgColor='purple'
            />
            <a
              href='https://docs.opal.ac/'
              target='_blank'
              rel='noreferrer'
              className='flex items-center gap-[10px] whitespace-nowrap rounded-full bg-[#DEC5FB] px-5 py-3 text-lg font-bold text-theme_purple transition hover:bg-theme_purple hover:text-white lg:text-xl'>
              <span className='mb-px'>OPAL docs</span>
              <svg
                width='13'
                height='13'
                viewBox='0 0 13 13'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M10.52 4L1.9 12.62L0.48 11.2L9.1 2.58H1.52V0.579999H12.52V11.58H10.52V4Z'
                  fill='currentColor'
                />
              </svg>
            </a>
          </div>
        </header>
        <figure className='relative hidden lg:block'>
          <Image src={img} alt='' />
          <div className='code-wrap absolute inset-0 left-auto top-auto h-[420px] w-full max-w-[362px] px-7 pt-[128px] xl:max-w-[412px] xl:pt-[94px]'>
            <pre className='max-h-[200px] overflow-scroll overscroll-none whitespace-normal text-left font-mono'>
              <code>{`package app.rebac`}</code>
              <code>{`import future.keywords.in`}</code>
              <code>{`
              files[id] := file_instance {
                some file_instance in data.files
                id := sprintf("file:%s",[file_instance.id])
              }
              `}</code>
              <code>{`
              folders[id] := folder_instance {
                some team_instance in data.folders
                id := sprintf("team:%s",[folder_instance.id])
              }
              `}</code>
              <code>{`
              full_graph[subject] := ref_object {
                some subject, object_instance in object.union_n([files, files.folders])
                ref_object := [object.get(object_instance, "parent_id", null)]
              }
              `}</code>
              <code>{`
              users[id] := user {
                some user in data.users
                id := user.id
              }
              `}</code>
              <code>{`input_user := users[input.user]c`}</code>
              <code>{`
              allowing_assignments[assignment] {
                some assignment in input_user.assignments

                input.action in data.roles[assignment.role].grants

                assignment.resource in graph.reachable(full_graph, {input.resource})
              }
              `}</code>
              <code>{`default allow := false`}</code>
              <code>{`
              allow {
                count(allowing_assignments) > 0
              }
              `}</code>
            </pre>
          </div>
        </figure>
        <figure className='relative flex flex-col items-center justify-center lg:hidden'>
          <Image width={349} height={1021} src={img_mobile} alt='' />
          <div className='code-wrap absolute inset-0 left-0 top-auto h-[400px] w-full px-6 pt-[97px]'>
            <pre className='max-h-[190px] overflow-scroll whitespace-normal text-left font-mono'>
              <code>{`package app.rebac`}</code>
              <code>{`import future.keywords.in`}</code>
              <code>{`
              files[id] := file_instance {
                some file_instance in data.files
                id := sprintf("file:%s",[file_instance.id])
              }
              `}</code>
              <code>{`
              folders[id] := folder_instance {
                some team_instance in data.folders
                id := sprintf("team:%s",[folder_instance.id])
              }
              `}</code>
              <code>{`
              full_graph[subject] := ref_object {
                some subject, object_instance in object.union_n([files, files.folders])
                ref_object := [object.get(object_instance, "parent_id", null)]
              }
              `}</code>
              <code>{`
              users[id] := user {
                some user in data.users
                id := user.id
              }
              `}</code>
              <code>{`input_user := users[input.user]c`}</code>
              <code>{`
              allowing_assignments[assignment] {
                some assignment in input_user.assignments

                input.action in data.roles[assignment.role].grants

                assignment.resource in graph.reachable(full_graph, {input.resource})
              }
              `}</code>
              <code>{`default allow := false`}</code>
              <code>{`
              allow {
                count(allowing_assignments) > 0
              }
              `}</code>
            </pre>
          </div>
        </figure>
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
        .code-wrap > pre::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Section4;
