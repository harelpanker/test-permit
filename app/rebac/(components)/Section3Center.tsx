'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useViewportSize } from '@mantine/hooks';
import { inView } from 'motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import image2 from '/public/images/rebac/2.svg';
import image3 from '/public/images/rebac/3.png';
import image4 from '/public/images/rebac/4.svg';
import image5 from '/public/images/rebac/5.svg';
import image6 from '/public/images/rebac/6.png';

import image22 from '/public/images/rebac/22.png';
import image33 from '/public/images/rebac/33.png';
import image44 from '/public/images/rebac/44.png';
import image55 from '/public/images/rebac/55.png';
import image66 from '/public/images/rebac/66.png';

const data = [
  {
    title: 'Create Resources',
    text: 'Define the resources you want to manage permissions for.',
    number: 1,
    img: image2,
  },
  {
    title: 'Create Resource Relationships',
    text: 'Possible relationships include ownership, parent-child hierarchies, groups/teams or any custom relationship types.',
    text_mobile:
      'Possible relationships include ownership, parent-child hierarchies, groups/teams or custom relationship types.',
    number: 2,
    img: image3,
  },
  {
    title: 'Add Roles to Resources',
    text: 'Each role can be defined with a set of actions a user can perform on the resource.',
    number: 3,
    img: image4,
  },
  {
    title: 'Define Role Derivation',
    text: 'Formulate new roles using existing roles as a foundation.',
    number: 4,
    img: image5,
  },
  {
    title: 'Assign Resource instance to user',
    text: 'Assign a user to a resource#role on a resource instance - Now the user can access all related instances.',
    number: 5,
    img: image6,
  },
];

const Section3Center = () => {
  const { width } = useViewportSize();
  const [state, setState] = useState(1);
  const [activeCarusel, setActiveCarusel] = useState(false);
  const [once, setOnce] = useState(false);

  useEffect(() => {
    inView('#play_tabs', () => {
      setOnce(true);
      if (!once && width >= 768) {
        setActiveCarusel(true);
      }
    });
  }, [once, width]);

  useEffect(() => {
    let timerFunc = setTimeout(() => {
      if (activeCarusel && width >= 768) {
        if (state >= 5) {
          setState(1);
        } else {
          setState(state + 1);
        }
      }
    }, 4000);

    return () => clearTimeout(timerFunc);
  }, [state, activeCarusel, width]);

  const handleState = (number: number) => {
    setState(number);
    setActiveCarusel(false);
  };

  const handleStateBack = () => setState(state - 1);
  const handleStateNext = () => setState(state + 1);
  return (
    <section className='px-5 lg:px-12'>
      <div className='container flex w-full max-w-sm flex-col gap-6 md:grid md:max-w-[1064px] md:grid-cols-2'>
        <figure className='relative'>
          <Image
            className={`relative transition duration-300 lg:duration-500 ${
              state === 1 ? 'opacity-100' : 'opacity-0'
            }`}
            src={width >= 768 ? image2 : image22}
            alt=''
          />
          <Image
            className={`absolute inset-0 h-full w-full ${
              state === 2 ? 'opacity-100' : 'opacity-0'
            } transition duration-300 lg:duration-500`}
            src={width >= 768 ? image3 : image33}
            alt=''
          />
          <Image
            className={`absolute inset-0 h-full w-full ${
              state === 3 ? 'opacity-100' : 'opacity-0'
            } transition duration-300 lg:duration-500`}
            src={width >= 768 ? image4 : image44}
            alt=''
          />
          <Image
            className={`absolute inset-0 h-full w-full ${
              state === 4 ? 'opacity-100' : 'opacity-0'
            } transition duration-300 lg:duration-500`}
            src={width >= 768 ? image5 : image55}
            alt=''
          />
          <Image
            className={`absolute inset-0 h-full w-full ${
              state === 5 ? 'opacity-100' : 'opacity-0'
            } transition duration-300 lg:duration-500`}
            src={width >= 768 ? image6 : image66}
            alt=''
          />
        </figure>
        <div className='mx-auto flex w-full max-w-xs items-center justify-between md:hidden'>
          <button
            role='btn'
            onClick={handleStateBack}
            className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-[#DEC5FB] ${
              state === 1
                ? 'pointer-events-none bg-[#EADDD7] text-[#D1B9B0]'
                : 'bg-[#DEC5FB] text-[#43302B]'
            }`}>
            <ChevronLeft />
          </button>
          <div className='text-sm font-bold uppercase tracking-[2px] text-theme_purple'>
            Step {state} / 5
          </div>
          <button
            role='btn'
            onClick={handleStateNext}
            className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-[#DEC5FB] ${
              state === 5
                ? 'pointer-events-none bg-[#EADDD7] text-[#D1B9B0]'
                : 'bg-[#DEC5FB] text-[#43302B]'
            }`}>
            <ChevronRight />
          </button>
        </div>

        <ul className='mx-auto w-full max-w-xs md:hidden'>
          {data.map((item) => (
            <li key={item.number}>
              {state === item.number && (
                <div className='flex flex-col gap-2 text-center text-lg font-medium text-[#2F075F]'>
                  <h3 className='font-bold'>{item.title}</h3>
                  <p>{item.text_mobile ? item.text : item.text}</p>
                </div>
              )}
            </li>
          ))}
        </ul>

        <ul
          id='play_tabs'
          className='hidden w-full max-w-[414px] flex-col justify-center gap-6 py-6 pl-12 md:flex'>
          {data.map((item) => (
            <li key={item.number}>
              <button
                onClick={() => handleState(item.number)}
                className={`flex flex-col border-l-[3px] pl-[14px] text-left text-lg font-medium transition ${
                  state === item.number
                    ? 'border-[#A666F4] text-[#2F075F]'
                    : 'border-[#BFA094] text-[#43302B] hover:border-[#DEC5FB]'
                }`}
                type='button'>
                <h3 className='font-bold'>{item.title}</h3>
                <div
                  className={`overflow-hidden ${
                    state === item.number
                      ? 'max-h-[1000px] pb-1 pt-2'
                      : 'max-h-0 pb-0 pt-0'
                  }`}>
                  <p>{item.text}</p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Section3Center;
