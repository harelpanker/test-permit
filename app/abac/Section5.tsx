import { FC } from 'react';
import Image from 'next/image';
import avatar from '/public/images/abac/avatar.png';

type Section5Props = {};

const Section5: FC<Section5Props> = ({}) => {
  return (
    <section className='relative z-40 mt-20 px-5'>
      <blockquote
        style={{
          boxShadow:
            '0px 2.07711px 41.5422px -15.5783px rgba(113, 81, 221, 0.2)',
        }}
        className='shadow-xl mx-auto flex w-full max-w-[1080px] flex-col items-center gap-16 rounded-3xl bg-white px-6 py-6 text-center text-base md:text-2xl lg:flex-row lg:py-10 lg:pl-14 lg:pr-24 lg:text-left'>
        <div className='flex items-center justify-center overflow-hidden rounded-full'>
          <Image
            src={avatar}
            alt='John Henson Software Architect at Nucor Building Systems'
          />
        </div>

        <div className='order-first flex w-full max-w-[690px] flex-col justify-between gap-7 xl:order-last'>
          <p>
            “I just need more flexibility than I get with traditional
            permissions architectures like Role-Based Access Controls (RBAC).”
          </p>
          <p>
            <strong>John Henson</strong> | Software Architect at Nucor Building
            Systems
          </p>
        </div>
      </blockquote>
    </section>
  );
};

export default Section5;
