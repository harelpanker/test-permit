'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import ReactPlayer from 'react-player/lazy';
import { PlayCircle } from 'lucide-react';

import thumbnail from '../assets/video/thumbnail.png';
import cloud from '../assets/video/clouds.svg';

const VideoSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen((isOpen) => !isOpen);

  return (
    <section className='px-5 py-14 lg:px-12 lg:pb-36 lg:pt-24'>
      <div className='container flex max-w-[1132px] flex-col justify-between gap-x-8 gap-y-8 lg:flex-row'>
        <h2 className='shrink-0 self-start text-[26px] font-semibold leading-tight tracking-tight sm:text-5xl lg:self-center lg:leading-tight'>
          Made for the{' '}
          <span className='text-[#F76808] sm:block'>
            Best{' '}
            <span className='block sm:inline'>
              Developers <span className='lg:block'>in the World</span>
            </span>
          </span>
        </h2>

        <div className='relative w-full lg:max-w-xl'>
          <Dialog open={isOpen} onOpenChange={handleToggle}>
            <DialogTrigger className='relative z-20 grow shadow-lg'>
              <figure className='group relative w-full grow cursor-pointer rounded-lg'>
                <div className='relative overflow-hidden rounded-lg'>
                  <Image
                    className='transition duration-300 group-hover:scale-110'
                    src={thumbnail}
                    alt=''
                  />
                  <div className='absolute inset-0 z-10 h-full w-full bg-theme_black bg-opacity-50 group-hover:opacity-0'></div>
                  <div className='absolute inset-0 z-20 flex h-full w-full items-center justify-center text-theme_white'>
                    <PlayCircle
                      size='48'
                      className='text-theme_white transition duration-300 group-hover:scale-125 group-hover:opacity-0'
                    />
                  </div>
                </div>
              </figure>
            </DialogTrigger>
            {/*  */}
            <DialogContent className='aspect-video w-[90%] max-w-3xl overflow-hidden rounded-md p-2 lg:rounded-2xl'>
              <div className='overflow-hidden rounded-md'>
                <ReactPlayer
                  url={'https://www.youtube.com/watch?v=JMzr21rnBes'}
                  playing={isOpen ? true : false}
                  controls={false}
                  width='100%'
                  height='100%'
                />
              </div>
            </DialogContent>
          </Dialog>
          <Image
            className='absolute left-1/2 top-8 max-w-none -translate-x-1/2'
            src={cloud}
            alt=''
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
