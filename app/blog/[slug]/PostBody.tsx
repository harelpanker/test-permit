'use client';

import { FC, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { unified } from 'unified';
import rehypeParse from 'rehype-parse/lib';
import rehypeStringify from 'rehype-stringify';
import { visit } from 'unist-util-visit';
import parameterize from 'parameterize';
import { Disclosure, Transition } from '@headlessui/react';
import { FancyboxWrapper } from '@/components/FancyboxWrapper';
import PostShare from './PostShare';

import hljs from 'highlight.js/lib/common';
import 'highlight.js/styles/night-owl.css';

type PostBodyProps = {
  post: {
    richText: {
      html: string;
    };
    removeToc: boolean | null;
  };
};

const PostBody: FC<PostBodyProps> = ({ post }) => {
  const toc: { id: string; title: string }[] = [];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      hljs.highlightAll();
    }
  }, []);

  useEffect(() => {
    const images = document.querySelectorAll('.prose.prose-base > img');
    const links = document.querySelectorAll('.prose.prose-base a');
    const filteredLinks = Array.from(links).filter(
      (link) =>
        !(link instanceof HTMLAnchorElement) ||
        !link.href.includes('https://www.permit.io/')
    );

    filteredLinks.forEach((link) => {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    });

    images.forEach((image) => image.setAttribute('data-fancybox', 'gallery'));
  }, []);

  const content = unified()
    .use(rehypeParse, { fragment: true })
    .use(() => {
      return (tree: any) => {
        visit(tree, 'element', (node) => {
          if (node.tagName === 'h2') {
            const id = parameterize(
              node.children[0].value
                ? node.children[0].value
                : node.children[0].children[0].value
            );
            node.properties.id = id;

            toc.push({
              id,
              title: node.children[0].value
                ? node.children[0].value
                : node.children[0].children[0].value,
            });
          }
        });
      };
    })
    //@ts-ignore
    .use(rehypeStringify)
    .processSync(post.richText.html)
    .toString();

  return (
    <section className='px-4 pt-8 lg:pb-20'>
      <div className='container max-w-4xl'>
        <div className='block lg:hidden'>
          <PostShare />
        </div>
        {/* table of content */}
        {/* https://github.com/rehypejs/rehype/tree/main/packages/rehype */}
        {post.removeToc === null ||
          (post.removeToc === false && (
            <div className='toc mx-auto mt-4 w-full max-w-3xl rounded-2xl bg-white lg:mt-0 lg:px-8'>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex w-full items-center justify-between rounded-lg bg-purple-100 px-6 py-5 text-left text-sm font-medium text-purple-900 transition hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
                      <p className='text-lg font-semibold'>
                        What&apos;s Inside
                      </p>
                      <ChevronDown
                        className={`${
                          open && 'rotate-180 transform'
                        } h-5 w-5 text-purple-500 transition duration-300`}
                      />
                    </Disclosure.Button>
                    <Transition
                      enter='transition duration-100 ease-out'
                      enterFrom='transform scale-95 opacity-0'
                      enterTo='transform scale-100 opacity-100'
                      leave='transition duration-75 ease-out'
                      leaveFrom='transform scale-100 opacity-100'
                      leaveTo='transform scale-95 opacity-0'>
                      <Disclosure.Panel className='px-4 pb-2 pt-4 text-sm text-slate-500'>
                        <ul className='flex flex-col gap-2 text-xl'>
                          {toc.map(({ id, title }) => (
                            <li
                              className='text-purple-900 transition hover:text-purple-800'
                              key={id}>
                              <a href={`#${id}`}>{title}</a>
                            </li>
                          ))}
                        </ul>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </div>
          ))}

        {/* rich text */}
        <FancyboxWrapper>
          <div
            className='prose prose-base prose-slate mx-auto
                       mt-10 max-w-3xl overflow-hidden
                       transition-all duration-500
                       prose-h2:-mt-20 prose-h2:pt-32 prose-h2:text-4xl prose-h3:text-2xl prose-a:text-blue-700 hover:prose-a:text-blue-500
                       prose-pre:p-0 prose-table:inline-block prose-table:min-w-full prose-table:table-fixed prose-table:overflow-hidden
                       prose-table:overflow-x-auto prose-td:min-w-[120px]
                       prose-img:cursor-pointer prose-img:rounded-lg md:prose-td:min-w-0 lg:mt-8 lg:px-8'
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </FancyboxWrapper>
      </div>
    </section>
  );
};

export default PostBody;
