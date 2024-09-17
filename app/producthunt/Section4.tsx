import Image from 'next/image';

import check from '/public/images/plug-and-play/check.svg';
import mobile_image from '/public/images/plug-and-play/section_4_mobile.png';
import desktop_image from '/public/images/plug-and-play/section_4_desktop.png';

const listItems = [
  { id: 1, text: 'No sensitive data leaves your network/cloud' },
  {
    id: 2,
    text: 'All authorization decisions are made on your side with zero latency',
  },
  {
    id: 3,
    text: 'Permit is always up (+99.99) - but you are not dependant on our availability',
  },
  {
    id: 4,
    text: 'Compliant with HIPAA, SOC2, and more',
  },
];

const Section4 = () => {
  return (
    <section className='relative z-20 px-5 text-left lg:px-12'>
      <div className='container mx-auto flex w-full max-w-[1145px] flex-col items-center gap-9 lg:flex-row lg:items-center lg:justify-between'>
        <Image
          width={610}
          height={416}
          src={desktop_image}
          alt=''
          className='hidden lg:relative lg:bottom-8 lg:block'
        />
        <Image
          width={356}
          height={322}
          src={mobile_image}
          alt=''
          className='lg:hidden'
        />
        <article className='flex w-full max-w-[534px] flex-col gap-4 lg:pb-5'>
          <h2 className='text-3xl font-bold text-[#451E11] lg:max-w-[420px] lg:text-4xl lg:leading-tight'>
            Secure, Event-driven, and Compliant
          </h2>
          <p className='font-medium text-[#451E11] lg:text-[22px]'>
            Thanks to Permit&apos;s unique hybrid model
          </p>
          <ul className='flex flex-col gap-4'>
            {listItems.map((item) => (
              <li
                key={item.id}
                className='flex gap-[10px] font-medium text-[#451E11] lg:gap-5 lg:text-[22px]'
              >
                <Image
                  src={check}
                  alt=''
                  className='h-5 w-5 shrink-0 lg:h-10 lg:w-10'
                />
                <p className='lg:pt-[2px]'>{item.text}</p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Section4;
