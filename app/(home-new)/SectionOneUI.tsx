'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';
import ToggleGroupWrapper from './components/ToggleGroupWrapper';
import Badge from './components/Bedge';
import TypographyH2 from './components/TypographyH2';
import SectionOneUIMobileItem from './components/SectionOneUIMobileItem';
import { abacCode, rbacCode, rebacCode } from './lib/code-text';
import CodeBlock from './components/CodeBlock';

import oneDesktop from '../(home-new)/assets/section-one-ui/1-1.svg';
import twoDesktop from '../(home-new)/assets/section-one-ui/2-1.svg';
import threeDesktop from '../(home-new)/assets/section-one-ui/3-1.svg';
import one13Mobile from '../(home-new)/assets/section-one-ui/3-1-mobile.svg';
import iconColor1 from '../(home-new)/assets/section-one-ui/icon_color_1.svg';
import iconColor2 from '../(home-new)/assets/section-one-ui/icon_color_2.svg';
import iconColor3 from '../(home-new)/assets/section-one-ui/icon_color_3.svg';
import iconGray1 from '../(home-new)/assets/section-one-ui/icon_gray_1.svg';
import iconGray2 from '../(home-new)/assets/section-one-ui/icon_gray_2.svg';
import iconGray3 from '../(home-new)/assets/section-one-ui/icon_gray_3.svg';

type Options = {
  step: 1 | 2 | 3;
  option: 'image' | 'code';
};
const SectionOneUI = () => {
  const [state, setState] = useState<Options>({
    step: 1,
    option: 'image',
  });
  const [selectedImage, setSelectedImage] = useState('image11');
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(true);
  const [toggle3, setToggle3] = useState(true);

  const handleImageSelect = (image: string) => setSelectedImage(image);

  const condition1 = selectedImage === 'image11' || selectedImage === 'image21';
  const condition2 = selectedImage === 'image12' || selectedImage === 'image22';
  const condition3 = selectedImage === 'image13' || selectedImage === 'image23';

  return (
    <section className='relative z-20 flex flex-col gap-y-9 px-5 pb-[5.25rem] pt-14 text-theme_orange_12 lg:pb-36 lg:pt-24'>
      <div className='container max-w-lg lg:max-w-6xl'>
        <header className='flex w-full flex-col gap-2 lg:w-auto'>
          <TypographyH2>
            One platform,{' '}
            <span className=' bg-gradient-to-r from-[#974EF2] to-[#FF953F]  bg-clip-text text-transparent'>
              any use case
            </span>
          </TypographyH2>
        </header>
      </div>
      {/* mobile */}
      <div className='container max-w-lg lg:hidden lg:max-w-6xl'>
        <ul className='flex flex-col gap-9'>
          <SectionOneUIMobileItem
            title='Role based access'
            state={toggle1}
            image1={oneDesktop}
            onClick={() => setToggle1((toggle1) => !toggle1)}
            link='/rbac'
            linkText='Start with RBAC'
            badgeIcon={iconColor1}
            badgeText='RBAC'
            code={rbacCode}>
            <p>Create dynamic Role Based Access Control policies, like:</p>
            <p className='italic'>
              <span className='text-[#A18072]'>&quot;</span> Banker can Approve
              Loan <span className='text-[#A18072]'>&quot;</span>
            </p>
          </SectionOneUIMobileItem>
          <SectionOneUIMobileItem
            title='Granular attributes'
            state={toggle2}
            image1={twoDesktop}
            onClick={() => setToggle2((toggle2) => !toggle2)}
            link='/abac'
            linkText='Learn about ABAC'
            badgeIcon={iconColor2}
            badgeText='ABAC'
            code={abacCode}>
            <p>
              <span className='lg:block'>
                Build nuanced attribute based access control{' '}
              </span>
              policies by adding attributes, like:
            </p>
            <p className='italic'>
              <span className='text-[#A18072]'>&quot;</span> Weekend Shift
              Employees
              <br />
              can access Database during Weekend{' '}
              <span className='text-[#A18072]'>&quot;</span>
            </p>
          </SectionOneUIMobileItem>
          <SectionOneUIMobileItem
            title='Resource and user hierarchies'
            state={toggle3}
            image1={one13Mobile}
            onClick={() => setToggle3((toggle3) => !toggle3)}
            link='/rebac'
            linkText='Explore ReBAC'
            badgeIcon={iconColor1}
            badgeText='ReBAC'
            code={rebacCode}>
            <p>
              <span className='lg:block'>
                Create policies based on relationships between{' '}
              </span>
              users and resources, like:
            </p>
            <p className='italic'>
              <span className='text-[#A18072]'>&quot;</span> Caregiver of a
              Patient
              <br />
              can View Patient&apos;s Medical Files{' '}
              <span className='text-[#A18072]'>&quot;</span>
            </p>
          </SectionOneUIMobileItem>
        </ul>
      </div>

      {/* desktop */}
      <div className='container hidden max-w-6xl flex-col items-center gap-y-9 lg:flex lg:items-stretch'>
        {/* tabs */}
        <div className='flex flex-col gap-12 lg:flex-row'>
          {/* left side desktop only */}
          <div className='hidden min-h-[510px] w-full max-w-[630px] flex-col rounded-[20px] bg-[#FFE8D7] p-6 lg:flex lg:items-center lg:gap-4'>
            <div className='relative flex w-full grow items-center justify-center'>
              <div className='group flex h-full w-full items-center justify-center'>
                {/* group 1 */}
                <div
                  className={`${
                    state.step === 1
                      ? 'z-20 -translate-y-1/2 opacity-100'
                      : 'z-10 -translate-y-[54%] opacity-0'
                  } absolute left-1/2 top-1/2 flex h-full w-full max-w-[80%] -translate-x-1/2 items-center justify-center transition duration-500`}>
                  <figure
                    className={`${
                      state.option === 'image'
                        ? 'translate-y-0 opacity-100'
                        : '-translate-y-3 opacity-0'
                    } flex w-full justify-center transition`}>
                    <Image src={oneDesktop} alt='' />
                  </figure>
                  <div
                    style={{
                      boxShadow: '0px 3.583px 22.397px 0px rgba(0, 0, 0, 0.10)',
                    }}
                    className={`${
                      state.option === 'code'
                        ? '-translate-y-1/2 opacity-100'
                        : '-translate-y-[46%] opacity-0'
                    } absolute left-1/2 top-1/2 mx-auto w-full max-w-[90%] -translate-x-1/2 overflow-scroll rounded-lg border-[2.5px] border-[#D1B9B0]  bg-[#2A211F] transition duration-500`}>
                    <CodeBlock overflowXNone>{rbacCode}</CodeBlock>
                  </div>
                </div>
                {/* group 2 */}
                <div
                  className={`${
                    state.step === 2
                      ? 'z-20 -translate-y-1/2 opacity-100'
                      : 'z-10 -translate-y-[54%] opacity-0'
                  } absolute left-1/2 top-1/2 flex h-full w-full max-w-[80%] -translate-x-1/2 items-center justify-center transition duration-500`}>
                  <figure
                    className={`${
                      state.option === 'image'
                        ? 'translate-y-0 opacity-100'
                        : '-translate-y-3 opacity-0'
                    } flex w-full justify-center transition`}>
                    <Image src={twoDesktop} alt='' />
                  </figure>
                  <div
                    style={{
                      boxShadow: '0px 3.583px 22.397px 0px rgba(0, 0, 0, 0.10)',
                    }}
                    className={`${
                      state.option === 'code'
                        ? '-translate-y-1/2 opacity-100'
                        : '-translate-y-[46%] opacity-0'
                    } absolute left-1/2 top-1/2 mx-auto max-h-full w-full -translate-x-1/2 overflow-scroll rounded-lg border-[2.5px] border-[#D1B9B0]  bg-[#2A211F] transition duration-500`}>
                    <CodeBlock>{abacCode}</CodeBlock>
                  </div>
                </div>
                {/* group 3 */}
                <div
                  className={`${
                    state.step === 3
                      ? 'z-20 -translate-y-1/2 opacity-100'
                      : 'z-10 -translate-y-[54%] opacity-0'
                  } absolute left-1/2 top-1/2 flex h-full w-full max-w-[570px] -translate-x-1/2 items-center justify-center transition duration-500`}>
                  <figure
                    className={`${
                      state.option === 'image'
                        ? 'translate-y-0 opacity-100'
                        : '-translate-y-3 opacity-0'
                    } flex w-full justify-center transition`}>
                    <Image src={threeDesktop} alt='' />
                  </figure>
                  <div
                    style={{
                      boxShadow: '0px 3.583px 22.397px 0px rgba(0, 0, 0, 0.10)',
                    }}
                    className={`${
                      state.option === 'code'
                        ? '-translate-y-1/2 opacity-100'
                        : '-translate-y-[46%] opacity-0'
                    } absolute left-1/2 top-1/2 mx-auto h-full max-h-full w-full -translate-x-1/2 overflow-scroll rounded-lg border-[2.5px] border-[#D1B9B0] bg-[#2A211F] transition duration-500`}>
                    <CodeBlock>{rebacCode}</CodeBlock>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{ boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.10)' }}
              className='relative grid grid-cols-2 gap-0 rounded-[6px] text-sm font-semibold leading-none text-[#451E11]'>
              {/* button 1 */}
              <button
                onClick={() => setState({ option: 'image', step: state.step })}
                className={`${
                  state.option === 'image'
                    ? 'pointer-events-none border-[#FFB381] bg-[#FFE8D7] text-[#ED5F00]'
                    : 'border-[#D1B9B0] bg-[#FEF8F4] text-[#451E11]'
                }
                relative h-auto overflow-hidden rounded-[6px] rounded-br-none rounded-tr-none border border-r-0 p-2 text-sm font-medium hover:bg-[#FFF1E7]`}>
                <div className='relative z-20'>Policy UI Editor</div>
                <div
                  className={`absolute left-0 top-0 h-full w-full rounded-[5px] rounded-br-none rounded-tr-none border-[1px] border-r-0 border-[#FFB381] transition ${
                    state.option === 'image' ? '!opacity-100' : '!opacity-0'
                  }`}
                />
              </button>
              {/* button 2 */}
              <button
                onClick={() => setState({ option: 'code', step: state.step })}
                className={`${
                  state.option === 'code'
                    ? 'pointer-events-none border-[#FFB381] bg-[#FFE8D7] text-[#ED5F00]'
                    : 'border-[#D1B9B0] bg-[#FEF8F4] text-[#451E11]'
                }
                relative h-auto overflow-hidden rounded-[6px] rounded-bl-none rounded-tl-none border border-l-0 p-2 text-sm font-medium hover:bg-[#FFF1E7]`}>
                <div className='relative z-20'>Policy as Code</div>
                <div
                  className={`absolute left-0 top-0 h-full w-full rounded-[5px] rounded-bl-none rounded-tl-none border-[1px] border-l-0 border-[#FFB381] transition ${
                    state.option === 'code' ? '!opacity-100' : '!opacity-0 '
                  }`}
                />
              </button>

              <div className='absolute left-1/2 top-1/2 h-full w-[2px] -translate-x-1/2 -translate-y-1/2 bg-[#FFB381]' />
            </div>
          </div>
          <Accordion
            className='flex w-full max-w-[390px] flex-col gap-6 lg:py-6'
            type='single'
            defaultValue='item-1'
            collapsible>
            {/* item 1 */}
            <AccordionItem
              value='item-1'
              className='flex flex-col gap-2 border-b-0 border-l-[3px] border-[#BFA094] pl-[14px]  [&[data-state="open"]]:border-[#F76808]'>
              <AccordionTrigger
                onClick={() => {
                  handleImageSelect(
                    selectedImage === 'image22' || selectedImage === 'image23'
                      ? 'image21'
                      : 'image11'
                  );
                  setState({ option: 'image', step: 1 });
                }}
                className='flex flex-col items-start gap-1 py-0 text-left font-poppins font-poppins text-lg font-semibold text-[#846358] transition hover:text-theme_orange_12 hover:no-underline lg:text-2xl [&[data-state="open"]]:pointer-events-none [&[data-state="open"]]:text-[#451E11] [&[data-state]>svg]:hidden'>
                <Badge
                  src={condition1 ? iconColor1 : iconGray1}
                  text='RBAC'
                  isGray={condition1 ? false : true}
                />
                <span>Role based access</span>
              </AccordionTrigger>
              <AccordionContent className='flex flex-col items-start gap-2 pb-0 font-inter text-sm lg:text-base'>
                <div className='flex flex-col gap-2 '>
                  <p>
                    <span className='lg:block'>
                      Create dynamic Role Based Access Control{' '}
                    </span>
                    policies, like:
                  </p>
                  <p className='italic'>
                    <span className='text-[#A18072]'>&quot;</span> Banker can
                    Approve Loan <span className='text-[#A18072]'>&quot;</span>
                  </p>
                </div>
                <Button
                  asChild
                  className='group h-auto p-0 text-sm font-medium  hover:no-underline lg:text-base'
                  variant={'link'}>
                  <Link href={'/rbac'}>
                    Start with RBAC{' '}
                    <MoveRight
                      size={16}
                      className='transition group-hover:translate-x-1'
                    />
                  </Link>
                </Button>
              </AccordionContent>
            </AccordionItem>
            {/* item 2 */}
            <AccordionItem
              value='item-2'
              className='flex flex-col gap-2 border-b-0 border-l-[3px] border-[#BFA094] pl-[14px] [&[data-state="open"]]:border-[#F76808]'>
              <AccordionTrigger
                onClick={() => {
                  handleImageSelect(
                    selectedImage === 'image21' || selectedImage === 'image23'
                      ? 'image22'
                      : 'image12'
                  );
                  setState({ option: 'image', step: 2 });
                }}
                className='flex flex-col items-start gap-1 py-0 text-left font-poppins font-poppins text-lg font-semibold text-[#846358] transition hover:text-theme_orange_12 hover:no-underline lg:text-2xl [&[data-state="open"]]:pointer-events-none [&[data-state="open"]]:text-[#451E11] [&[data-state]>svg]:hidden'>
                <Badge
                  src={condition2 ? iconColor2 : iconGray2}
                  text='ABAC'
                  isGray={condition2 ? false : true}
                />
                <span>Granular attributes</span>
              </AccordionTrigger>
              <AccordionContent className='flex flex-col items-start gap-2 pb-0 font-inter text-sm lg:text-base'>
                <div className='flex flex-col gap-2'>
                  <p>
                    <span className='lg:block'>
                      Build nuanced attribute based access control{' '}
                    </span>
                    policies by adding attributes, like:
                  </p>
                  <p className='italic'>
                    <span className='text-[#A18072]'>&quot;</span> Weekend Shift
                    Employees
                    <br />
                    can access Database during Weekend{' '}
                    <span className='text-[#A18072]'>&quot;</span>
                  </p>
                </div>
                <Button
                  asChild
                  className='group h-auto p-0 text-sm font-medium hover:no-underline lg:text-base'
                  variant={'link'}>
                  <Link href={'/abac'}>
                    See how it works{' '}
                    <MoveRight
                      size={16}
                      className='transition group-hover:translate-x-1'
                    />
                  </Link>
                </Button>
              </AccordionContent>
            </AccordionItem>
            {/* item 3 */}
            <AccordionItem
              value='item-3'
              className='flex flex-col gap-2 border-b-0 border-l-[3px] border-[#BFA094] pl-[14px] [&[data-state="open"]]:border-[#F76808]'>
              <AccordionTrigger
                onClick={() => {
                  handleImageSelect(
                    selectedImage === 'image22' || selectedImage === 'image21'
                      ? 'image23'
                      : 'image13'
                  );
                  setState({ option: 'image', step: 3 });
                }}
                className='flex flex-col items-start gap-1 py-0 text-left font-poppins font-poppins text-lg font-semibold text-[#846358] transition hover:text-theme_orange_12 hover:no-underline lg:text-2xl [&[data-state="open"]]:pointer-events-none [&[data-state="open"]]:text-[#451E11] [&[data-state]>svg]:hidden'>
                <Badge
                  src={condition3 ? iconColor3 : iconGray3}
                  text='ReBAC'
                  isGray={condition3 ? false : true}
                />
                <span>Resource/User hierarchies</span>
              </AccordionTrigger>
              <AccordionContent className='flex flex-col items-start gap-2 pb-0 font-inter text-sm lg:text-base'>
                <div className='flex flex-col gap-2'>
                  <p>
                    <span className='lg:block'>
                      Create policies based on relationships between{' '}
                    </span>
                    users and resources, like:
                  </p>
                  <p className='italic'>
                    <span className='text-[#A18072]'>&quot;</span> Caregiver of
                    a Patient
                    <br />
                    can View Patient&apos;s Medical Files{' '}
                    <span className='text-[#A18072]'>&quot;</span>
                  </p>
                </div>

                <Button
                  asChild
                  className='group h-auto p-0 text-sm font-medium  hover:no-underline lg:text-base'
                  variant={'link'}>
                  <Link href={'/rebac'}>
                    Explore ReBAC{' '}
                    <MoveRight
                      size={16}
                      className='transition group-hover:translate-x-1'
                    />
                  </Link>
                </Button>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className='lg:hidden'>
            <ToggleGroupWrapper
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOneUI;
