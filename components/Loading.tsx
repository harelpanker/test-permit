import Image from 'next/image';
import loading_img from '/public/images/loading.svg';

const Loading = () => {
  return (
    <div className='flex h-100dvh w-full items-center justify-center bg-theme_white'>
      <div className='flex h-[90%] w-10/12 animate-pulse items-center justify-center'>
        <Image src={loading_img} alt='Permit logo' />
      </div>
    </div>
  );
};

export default Loading;
