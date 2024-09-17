'use client';

import { FC, Fragment, useState } from 'react';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';

type NewFeatureProps = {
  data: {
    title: string;
    topTitle: string;
    mainButtonLink: string;
    mainButtonText: string;
    secondaryButtonLink: string;
    secondaryButtonText: string;
    description: { html: string };
    image: { url: string; width: number; height: number };
    imageMobile: { url: string; width: number; height: number };
  };
};

const NewFeature: FC<NewFeatureProps> = ({ data }) => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const {
    title,
    topTitle,
    mainButtonLink,
    mainButtonText,
    secondaryButtonLink,
    secondaryButtonText,
    description,
    image,
    imageMobile,
  } = data;

  return (
    <>
      <section className='text-theme_white bg-[#282826] px-5 lg:px-12 pt-[50px] pb-[25px] lg:py-24 text-center lg:text-left w-full overflow-hidden'>
        <div className='container max-w-[1260px] flex lg:flex-row flex-col gap-9 md:gap-14 justify-between items-center'>
          {/* content */}
          <div className='w-full max-w-[338px] md:max-w-[452px] flex flex-col gap-4 md:gap-9'>
            {/* header */}
            <div className='flex flex-col gap-4 lg:gap-6'>
              <h3 className='font-semibold text-sm tracking-[1.2px]'>
                {topTitle}
              </h3>
              <h2 className='text-3xl md:text-4xl font-semibold'>{title}</h2>
            </div>
            {/* rich text */}
            <div
              className='prose-a:text-white prose text-white xl:prose-lg prose-p:m-0 flex flex-col lg:block lg:gap-0 gap-4 prose-p:lg:text-lg prose-p:font-semibold transition-all duration-500 overflow-hidden'
              dangerouslySetInnerHTML={{ __html: description.html }}
            />

            {/* btns */}
            <div className='flex w-full justify-center lg:justify-start gap-5 items-center'>
              <button
                onClick={openModal}
                className='px-5 flex justify-center items-center h-[50px] text-center rounded-full bg-theme_white text-theme_black2 font-bold lg:text-lg hover:bg-theme_white/80 transition border-2 border-transparent'>
                {mainButtonText}
              </button>
              <a
                target='_blank'
                rel='noreferrer'
                className='px-5 flex justify-center items-center h-[50px] text-center rounded-full bg-transparent text-theme_white hover:text-theme_black2 min-w-[90px] font-bold lg:text-lg hover:bg-theme_white transition border-2 border-theme_white'
                href={secondaryButtonLink}>
                {secondaryButtonText}
              </a>
            </div>
          </div>
          {/* image */}
          <figure className='w-full max-w-[710px]'>
            <Image
              className='hidden lg:block'
              src={image.url}
              width={image.width}
              height={image.height}
              alt=''
            />
            <Image
              className='lg:hidden w-[120vw] max-w-none relative -left-[4vw]'
              src={imageMobile.url}
              width={imageMobile.width}
              height={imageMobile.height}
              alt=''
            />
          </figure>
        </div>
      </section>
      {/* module */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-50' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <div className='fixed inset-0 bg-black bg-opacity-50' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'>
                <Dialog.Panel className='w-full max-w-6xl max-h-[80vh] transform overflow-auto rounded-2xl bg-white py-2 lg:p-6 text-left align-middle shadow-xl transition-all'>
                  <iframe
                    src={mainButtonLink}
                    title={title}
                    style={{
                      boxSizing: 'border-box',
                      width: '100%',
                      height: '80vh',
                    }}></iframe>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default NewFeature;
