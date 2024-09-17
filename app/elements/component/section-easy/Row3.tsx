import Image from 'next/image';
import image from '../../assets/easy-row-3.svg';

const Row3 = () => {
  return (
    <div className='flex w-full flex-col items-center gap-x-16 gap-y-6 lg:flex-row'>
      <div className='flex w-full max-w-[480px] flex-col gap-y-4 lg:gap-y-6'>
        <div className='flex flex-col lg:gap-y-2'>
          <h3 className='text-lg font-semibold tracking-[-0.5px] lg:text-[26px]'>
            Be Event Driven: Get Notified!
          </h3>
          <p className='font-poppins text-lg font-semibold text-[#846358]'>
            Enable Webhooks or Email Notification for get real-time user
            updates.
          </p>
        </div>
        <div className='flex flex-col gap-y-2 lg:gap-y-6'>
          <p>
            Provide notifications for your end users with fully customizable
            emails, or configure a Webhook to stay informed about actions
            performed in the system.
          </p>
        </div>
      </div>

      <div className='flex flex-col gap-y-6'>
        <figure>
          <Image src={image} alt='' />
        </figure>
      </div>
    </div>
  );
};

export default Row3;
