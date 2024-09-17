import { FC } from 'react';
import VideoItem from './VideoItem';

type VideosListProps = {
  videos: {
    id: string;
    url: string;
    expert: string;
    image: { url: string; width: number; height: number };
  }[];
};

const VideosList: FC<VideosListProps> = ({ videos }) => {
  return (
    <section className='px-4 pb-14'>
      <ul className='grid grid-cols-1 max-w-lg mx-auto xl:grid-cols-2 gap-10 xl:gap-16 justify-items-center w-full xl:max-w-none'>
        {videos.map((video, index) => (
          <VideoItem key={video.id} video={video} index={index} />
        ))}
      </ul>
    </section>
  );
};

export default VideosList;
