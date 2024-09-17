'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useViewportSize } from '@mantine/hooks';
import { Tab } from '@headlessui/react';

// mobile images
import section_7_mobile_1 from '/public/images/plug-and-play/section_7_mobile_1.png';
import section_7_mobile_2 from '/public/images/plug-and-play/section_7_mobile_2.png';
import section_7_mobile_3 from '/public/images/plug-and-play/section_7_mobile_3.png';
import section_7_mobile_bg_1 from '/public/images/plug-and-play/section_7_mobile_bg_1.svg';
import section_7_mobile_bg_2 from '/public/images/plug-and-play/section_7_mobile_bg_2.svg';
import section_7_mobile_bg_3 from '/public/images/plug-and-play/section_7_mobile_bg_3.svg';
// desktop images
import section_7_1 from '/public/images/plug-and-play/section_7_1.svg';
import section_7_2 from '/public/images/plug-and-play/section_7_2.png';
import section_7_3 from '/public/images/plug-and-play/section_7_3.svg';
import section_7_bg from '/public/images/plug-and-play/section_7_bg.svg';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

const Section7 = () => {
  const { width } = useViewportSize();
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const handleOpen1 = () => {
    setOpen1(true);
    setOpen2(false);
    setOpen3(false);
  };
  const handleOpen2 = () => {
    setOpen1(false);
    setOpen2(true);
    setOpen3(false);
  };
  const handleOpen3 = () => {
    setOpen1(false);
    setOpen2(false);
    setOpen3(true);
  };

  return (
    <section className='relative z-20 bg-[#F9EDE7] lg:px-12'>
      <div className='h-16 lg:h-[88px]' />
      <div className='container mx-auto w-full max-w-7xl'>
        {width < 1024 && (
          <div className='flex flex-col gap-8'>
            <h2 className='mx-auto max-w-[364px] px-5 text-3xl font-bold text-theme_purple'>
              All of your access control needs in one place.
            </h2>
            <ul className='flex flex-col gap-16'>
              {/* mobile item 1 */}
              <li className='flex flex-col gap-5'>
                <div className='relative z-20 mx-auto flex max-w-[364px] flex-col gap-2 px-5'>
                  <h3 className='font-bold text-[#43302B]'>Permit Elements</h3>
                  <p className='font-medium text-[#846358]'>
                    Embed customizable access control elements like User
                    Management, Approval Flows, and Audit Logs directly into
                    your app
                  </p>
                </div>
                <figure className='relative flex justify-center'>
                  <Image
                    src={section_7_mobile_1}
                    alt=''
                    className='relative z-20'
                    width={336}
                    height={346}
                  />
                  <Image
                    src={section_7_mobile_bg_1}
                    alt=''
                    className='absolute inset-0 left-1/2 top-1/2 z-10 w-full max-w-none -translate-x-1/2 -translate-y-1/2 sm:hidden'
                  />
                </figure>
              </li>
              {/* mobile item 2 */}
              <li className='-mt-8 flex flex-col gap-5'>
                <div className='relative z-20 mx-auto flex max-w-[364px] flex-col gap-2 px-5'>
                  <h3 className='font-bold text-[#43302B]'>
                    Authorization for Authorization
                  </h3>
                  <p className='font-medium text-[#846358]'>
                    Manage and audit who can grant, change and revoke
                    permissions within your application&apos;s authorization
                    system.
                  </p>
                </div>
                <figure className='relative mt-7 flex justify-center'>
                  <Image
                    src={section_7_mobile_2}
                    alt=''
                    className='relative z-20'
                    width={333}
                    height={166}
                  />
                  <Image
                    src={section_7_mobile_bg_2}
                    alt=''
                    className='absolute inset-0 left-1/2 top-1/2 z-10 w-full max-w-none -translate-x-1/2 -translate-y-1/2 sm:hidden'
                  />
                </figure>
              </li>
              {/* mobile item 1 */}
              <li className='flex flex-col gap-5'>
                <div className='relative z-20 mx-auto flex max-w-[364px] flex-col gap-2 px-5'>
                  <h3 className='font-bold text-[#43302B]'>Audit Logs</h3>
                  <p className='font-medium text-[#846358]'>
                    Enjoy automatically generated audit logs for your app and
                    the permission management control plane, and easily
                    propagate them to any logging solution
                  </p>
                </div>
                <figure className='relative flex justify-center'>
                  <Image
                    src={section_7_mobile_3}
                    alt=''
                    className='relative z-20'
                    width={356}
                    height={181}
                  />
                  <Image
                    src={section_7_mobile_bg_3}
                    alt=''
                    className='absolute inset-0 left-1/2 top-1/2 z-10 w-full max-w-none -translate-x-1/2 -translate-y-1/2 sm:hidden'
                  />
                </figure>
              </li>
            </ul>
          </div>
        )}
        {width >= 1024 && (
          <div className='flex items-center justify-between gap-12'>
            {/* content */}
            <div className='flex w-full max-w-[462px] flex-col gap-9'>
              <h2 className='text-4xl font-bold leading-tight text-theme_purple'>
                All of your access control needs in one place.
              </h2>
              <div>
                <Tab.Group vertical>
                  <Tab.List as='ul' className='flex flex-col gap-6'>
                    <Tab
                      as='li'
                      className={() =>
                        classNames('focus:outline-none focus:ring-0')
                      }>
                      {({ selected }) => (
                        <div
                          className={`${
                            selected
                              ? 'border-[#A666F4]'
                              : 'border-[#BFA094] hover:border-[#DEC5FB]'
                          } border-l-[3px] transition`}>
                          <button
                            onClick={() => handleOpen1()}
                            className={`${
                              !selected ? 'text-[#43302B]' : 'text-[#2F075F]'
                            } w-full py-2 pl-[14px] text-left text-lg font-bold`}>
                            Permit Elements
                          </button>
                          <div
                            className={`${
                              selected ? 'max-h-[10000px]' : 'max-h-0'
                            } overflow-hidden`}>
                            <div className=''>
                              <p className='pl-[14px] text-lg font-medium text-[#2F075F]'>
                                Embed customizable access control elements like
                                User Management, Approval Flows, and Audit Logs
                                directly into your app
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </Tab>
                    <Tab
                      as='li'
                      className={() =>
                        classNames('focus:outline-none focus:ring-0')
                      }>
                      {({ selected }) => (
                        <div
                          className={`${
                            selected
                              ? 'border-[#A666F4]'
                              : 'border-[#BFA094] hover:border-[#DEC5FB]'
                          } border-l-[3px] transition`}>
                          <button
                            onClick={() => handleOpen2()}
                            className={`${
                              !selected ? 'text-[#43302B]' : 'text-[#2F075F]'
                            } w-full py-2 pl-[14px] text-left text-lg font-bold`}>
                            Authorization for Authorization
                          </button>
                          <div
                            className={`${
                              selected ? 'max-h-[10000px]' : 'max-h-0'
                            } overflow-hidden`}>
                            <div className=''>
                              <p className='pl-[14px] text-lg font-medium text-[#2F075F]'>
                                Manage and audit who can grant, change and
                                revoke permissions within your
                                application&apos;s authorization system.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </Tab>
                    <Tab
                      as='li'
                      className={() =>
                        classNames('focus:outline-none focus:ring-0')
                      }>
                      {({ selected }) => (
                        <div
                          className={`${
                            selected
                              ? 'border-[#A666F4]'
                              : 'border-[#BFA094] hover:border-[#DEC5FB]'
                          } border-l-[3px] transition`}>
                          <button
                            onClick={() => handleOpen3()}
                            className={`${
                              !selected ? 'text-[#43302B]' : 'text-[#2F075F]'
                            } w-full py-2 pl-[14px] text-left text-lg font-bold`}>
                            Audit Logs
                          </button>
                          <div
                            className={`${
                              selected ? 'max-h-[10000px]' : 'max-h-0'
                            } overflow-hidden`}>
                            <div className=''>
                              <p className='pl-[14px] text-lg font-medium text-[#2F075F]'>
                                Enjoy automatically generated audit logs for
                                your app and the permission management control
                                plane, and easily propagate them to any logging
                                solution
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </Tab>
                  </Tab.List>
                </Tab.Group>
              </div>
            </div>
            {/* images */}
            <figure className='relative'>
              <Image src={section_7_bg} alt='' />
              <Image
                className={`${
                  open1 ? 'opacity-100' : 'opacity-0'
                } absolute inset-0 left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transition duration-500`}
                src={section_7_1}
                alt=''
                width={496}
                height={469}
              />
              <Image
                className={`${
                  open2 ? 'opacity-100' : 'opacity-0'
                } absolute inset-0 left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transition duration-500`}
                src={section_7_2}
                width={575}
                height={281}
                alt=''
              />
              <Image
                className={`${
                  open3 ? 'opacity-100' : 'opacity-0'
                } absolute inset-0 left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transition duration-500`}
                src={section_7_3}
                width={575}
                height={286}
                alt=''
              />
            </figure>
          </div>
        )}
      </div>
      <div className='h-16 lg:h-[88px]' />
    </section>
  );
};

export default Section7;
