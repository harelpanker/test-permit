'use client';

import { useState } from 'react';
import Image from 'next/image';
import ReactPlayer from 'react-player/lazy';
import { PlayCircle } from 'lucide-react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { slidesData } from './lib/video-slides-data';

import '@splidejs/react-splide/css';
import './styles/slide-pagination.css';

// Define a type for the props of the VideoDialog component
interface VideoDialogProps {
  isOpen: boolean;
  onToggle: () => void;
  imageSrc: string;
  altText: string;
  videoUrl: string;
}

const VideoDialog: React.FC<VideoDialogProps> = ({
  isOpen,
  onToggle,
  imageSrc,
  altText,
  videoUrl,
}) => (
  <Dialog open={isOpen} onOpenChange={onToggle}>
    <DialogTrigger>
      <figure className='group relative mx-auto w-full max-w-md cursor-pointer rounded-lg'>
        <div className='relative overflow-hidden rounded-lg'>
          <Image
            className='transition duration-300 group-hover:scale-110'
            quality={100}
            alt={altText}
            src={imageSrc}
            width={448}
            height={252}
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
    <DialogContent className='aspect-video w-[90%] max-w-3xl overflow-hidden rounded-md p-2 lg:rounded-2xl'>
      <div className='overflow-hidden rounded-md'>
        <ReactPlayer
          url={videoUrl}
          playing={isOpen}
          controls={false}
          width='100%'
          height='100%'
        />
      </div>
    </DialogContent>
  </Dialog>
);

const SectionRecommendationVideoSlides = () => {
  const [openDialog, setOpenDialog] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenDialog((prev) => (prev === index ? null : index));
  };
  return (
    <Splide
      options={{
        rewind: true,
        width: '100%',
        arrows: false,
        trimSpace: false,
        direction: 'ltr',
        autoplay: true,
        easing: 'cubic-bezier(.22,.48,.23,.92)',
        pagination: true,
        interval: 8500,
        speed: 800,
        perMove: 1,
        perPage: 1,
        gap: '1rem',
      }}
      tag='div'
      aria-label='Testimonials'>
      {slidesData.map((slide, index) => (
        <SplideSlide key={index}>
          <VideoDialog
            isOpen={openDialog === index}
            onToggle={() => handleToggle(index)}
            imageSrc={slide.imageSrc.src}
            altText={slide.altText}
            videoUrl={slide.videoUrl}
          />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default SectionRecommendationVideoSlides;
