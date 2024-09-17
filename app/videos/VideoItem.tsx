import { FC } from 'react';
import Image from 'next/image';
import { FancyboxWrapper } from '@/components/FancyboxWrapper';
import { PlayCircle } from 'lucide-react';

type VideoItemProps = {
  video: {
    url: string;
    image: { url: string; width: number; height: number };
    expert: string;
  };
  index: number;
};

// {
//     id: 'ckwgdf2200rf70c76miw5j53x',
//     url: 'https://www.youtube.com/watch?v=tG8jrdcc7Zo',
//     expert: 'Authorizon and OPAL at Microsoft',
//     image: { url: 'https://media.graphassets.com/NzZ3N7djQyPAcBPPGcxg', width: 640, height: 360 }
//   }

const VideoItem: FC<VideoItemProps> = ({ video, index }) => {
  return (
    <li className='grid w-full max-w-3xl grid-cols-1 gap-3'>
      <figure className='sm:h-111 mx-auto h-64 w-full max-w-3xl overflow-hidden rounded-xl shadow-video xl:h-80'>
        <FancyboxWrapper>
          <button
            data-fancybox='gallery'
            data-src={video.url}
            className='relative aspect-video h-full w-full'>
            {video.image && (
              <Image
                className='h-full w-full object-cover'
                src={video.image.url}
                width={video.image.width}
                height={video.image.height}
                priority={index < 4 ? true : false}
                quality={100}
                alt={video.expert}
              />
            )}
            <div className='absolute inset-0 z-10 flex h-full w-full items-center justify-center bg-slate-900 bg-opacity-30 text-slate-50 transition duration-500 hover:bg-opacity-0 hover:text-slate-900'>
              <PlayCircle className='h-10 w-10 lg:h-14 lg:w-14' />
            </div>
          </button>
        </FancyboxWrapper>
      </figure>
      <p className='text-base font-semibold'>{video.expert}</p>
    </li>
  );
};

export default VideoItem;
