'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { animate, scroll } from 'motion';
import ReactPlayer from 'react-player/lazy';
import FadeUpAnimationWrapper from '@/components/FadeUpAnimationWrapper';
import TypographyH2 from './components/TypographyH2';
import MarqueeSectionLine from './components/MarqueeSectionLine';
import { Dialog, DialogContent } from '@/components/ui/dialog';

import check from '../(home-new)/assets/section-ui/check.svg';
import image1 from '../(home-new)/assets/section-ui/img1:5.svg';
import image2 from '../(home-new)/assets/section-ui/img2:5.svg';
import image3 from '../(home-new)/assets/section-ui/img3:5.svg';
import image4 from '../(home-new)/assets/section-ui/img4:5.svg';
import image5 from '../(home-new)/assets/section-ui/img5:5.svg';

const imagesData = [
  {
    id: 1,
    image: image1,
  },
  {
    id: 2,
    image: image2,
  },
  {
    id: 3,
    image: image3,
  },
  {
    id: 4,
    image: image4,
  },
];

const SectionUI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen((isOpen) => !isOpen);

  useEffect(() => {
    const element = document.querySelector('.click');
    if (!element) return;
    scroll(
      animate(element, { opacity: [0.7, 1], y: [-200, 0], x: [0, 50, 50, 0] }),
      {
        target: element,
        offset: ['start end', 'end 80%'],
      }
    );
  }, []);
  useEffect(() => {
    const element = document.querySelector('.scroll_bg');
    if (!element) return;
    scroll(animate(element, { y: ['-100%', '0%'] }), {
      target: element,
      offset: ['start end', 'end 50%'],
    });
  }, []);

  return (
    <section className='relative z-30 px-5 pb-14 pt-[5.25rem] text-theme_orange_12 lg:pb-24 lg:pt-36'>
      {/* content */}
      <div className='container relative z-20 flex max-w-lg flex-col items-center justify-between gap-x-16 gap-y-14 lg:max-w-6xl lg:flex-row'>
        <div className='flex w-full max-w-[500px] flex-col items-start gap-9'>
          <div className='flex flex-col gap-3'>
            <div className='hidden md:block'>
              <TypographyH2>
                <span className='lg:block'>End-to-end authorization </span>
                platform{' '}
                <span className=' bg-gradient-to-r from-[#974EF2] to-[#FF953F]  bg-clip-text text-transparent'>
                  anyone can use
                </span>
              </TypographyH2>
            </div>
            <div className='md:hidden'>
              <TypographyH2>
                A no-code authorization platform{' '}
                <span className=' bg-gradient-to-r from-[#974EF2] to-[#FF953F]  bg-clip-text text-transparent'>
                  anyone can use.
                </span>
              </TypographyH2>
            </div>
          </div>

          <ul className='flex max-w-sm flex-col gap-6 font-inter text-sm lg:max-w-[498px] lg:text-base'>
            <li className='flex items-center gap-4 lg:items-start lg:gap-5'>
              <Image src={check} alt='' className='h-8 w-8 shrink-0' />
              <p>
                <span className='lg:block'>
                  Allow your entire team - from devs to sales, to securely{' '}
                </span>
                manage permissions
              </p>
            </li>
            <li className='flex items-center gap-4 lg:items-start lg:gap-5'>
              <Image src={check} alt='' className='h-8 w-8 shrink-0' />
              <p>
                <span className='lg:block'>
                  The only solution with a no-code policy editor. Supports{' '}
                </span>
                any model - RBAC, ABAC and ReBAC.
              </p>
            </li>
            <li className='flex items-center gap-4 lg:gap-5'>
              <Image src={check} alt='' className='h-8 w-8 shrink-0' />
              <p>
                <span className='lg:block'>
                  Permit generates fully transparent policy as code based on{' '}
                </span>
                OPA&apos;s Rego or AWS&apos; Cedar
              </p>
            </li>
            <li className='flex items-center gap-4 lg:items-start lg:gap-5'>
              <Image src={check} alt='' className='h-8 w-8 shrink-0' />
              <p>
                <span className='lg:block'>
                  Everything is managed as code in Git and
                </span>{' '}
                controlled with a simple API
              </p>
            </li>
          </ul>
          <Dialog open={isOpen} onOpenChange={handleToggle}>
            <Button onClick={() => setIsOpen(true)}>See how it works</Button>
            <DialogContent className='aspect-video w-[90%] max-w-3xl overflow-hidden rounded-md p-2 lg:rounded-2xl'>
              <div className='overflow-hidden rounded-md'>
                <ReactPlayer
                  url={'https://www.youtube.com/watch?v=Jac1SCS-Mks'}
                  playing={isOpen ? true : false}
                  controls={false}
                  width='100%'
                  height='100%'
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* images */}
        <div className='relative flex flex-col gap-4'>
          {imagesData.map((item) => (
            <FadeUpAnimationWrapper key={item.id}>
              <figure>
                <Image src={item.image} alt='' />
              </figure>
            </FadeUpAnimationWrapper>
          ))}
          <figure className='click absolute bottom-[-10px] left-auto right-1/4 top-auto z-10'>
            <Image src={image5} alt='' />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default SectionUI;
