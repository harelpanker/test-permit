import Image from 'next/image';

import section_2_mobile from '/public/images/plug-and-play/section_2_mobile.png';
import desktop_image from '/public/images/plug-and-play/section_3_desktop.svg';
import section_3_shape from '/public/images/plug-and-play/section_3_shape.svg';
import check from '/public/images/plug-and-play/check.svg';

const listItems = [
  { id: 1, text: 'Easy-to-use, fully customizable, no-code policy-editor.' },
  {
    id: 2,
    text: 'Allow your entire team to securely manage permissions - no coding knowledge required',
  },
  {
    id: 3,
    text: 'Permit generates fully transparent policy code - managable through Git / API / our no-code UI',
  },
];

const Section3 = () => {
  return (
    <section className='relative z-20 px-5 text-left lg:px-12'>
      <div className='container mx-auto flex w-full max-w-[1145px] flex-col items-center gap-9 lg:flex-row lg:items-end lg:justify-between'>
        <Image
          className='lg:hidden'
          src={section_2_mobile}
          alt=''
          width={344}
          height={389}
          quality={100}
          unoptimized
        />
        <article className='flex w-full max-w-[534px] flex-col gap-4 lg:pb-5'>
          <h2 className='text-3xl font-bold text-[#451E11] lg:max-w-[496px] lg:text-4xl lg:leading-tight'>
            Accessible no-code authorization UI anyone can use.
          </h2>
          <ul className='flex flex-col gap-4'>
            {listItems.map((item) => (
              <li
                key={item.id}
                className='flex gap-[10px] font-medium text-[#451E11] lg:gap-5 lg:text-[22px]'>
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
        <div className='relative hidden lg:block'>
          <Image src={desktop_image} alt='' className='relative z-20' />
          <Image
            src={section_3_shape}
            alt=''
            className='absolute -left-[134px] -top-[202px] z-10 max-w-none'
          />
        </div>
      </div>
    </section>
  );
};

export default Section3;
