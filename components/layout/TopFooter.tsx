import Image from 'next/image';
import dog from '../../public/images/dog.svg';

const TopFooter = () => {
  return (
    <div className='relative z-20 flex w-full items-center justify-center px-5 py-10'>
      <figure>
        <Image src={dog} alt='' />
      </figure>
    </div>
  );
};

export default TopFooter;
