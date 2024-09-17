import { FC } from 'react';
import ImageItem from './ImageItem';
import image1 from '/public/images/career/1.png';
import image2 from '/public/images/career/2.png';
import image3 from '/public/images/career/3.png';
import image4 from '/public/images/career/4.png';
import image5 from '/public/images/career/5.png';

type ImageGridProps = {};

const ImageGrid: FC<ImageGridProps> = ({}) => {
  return (
    <section className='px-4 lg:px-8 py-10 xl:py-20'>
      <div className='container mx-w-[1180px] z-10 relative flex flex-wrap gap-4 lg:gap-0 justify-center'>
        <ImageItem src={image1} classes='z-20 lg:-mr-8' />
        <ImageItem src={image2} classes='z-10 lg:top-22' />
        <ImageItem src={image3} classes='z-40 lg:left-5 lg:bottom-9' />
        <ImageItem src={image4} classes='z-30 lg:right-11 lg:bottom-3' />
        <ImageItem src={image5} classes='z-30 lg:right-11 lg:bottom-20' />
      </div>
    </section>
  );
};

export default ImageGrid;
