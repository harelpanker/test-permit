import Image from 'next/image';

import img from '/public/images/rebac/avatar.png';

const Section5 = () => {
  return (
    <section className='relative bg-[#FDF8F6] px-5 py-16 lg:px-12 lg:py-32'>
      <blockquote
        style={{
          boxShadow:
            '0px 2.07711px 41.5422px -15.5783px rgba(113, 81, 221, 0.2)',
        }}
        className='shadow-xl relative z-20 mx-auto flex w-full max-w-[1080px] flex-col items-center gap-16 rounded-3xl bg-white px-6 py-6 text-center text-base md:text-xl lg:flex-row lg:py-10 lg:pl-14 lg:pr-24 lg:text-left'>
        <div className='flex max-w-[12rem] items-center justify-center overflow-hidden rounded-full lg:max-w-[16rem]'>
          <Image src={img} alt='Francois Delpech | Architect at SE.com' />
        </div>

        <div className='order-first flex w-full max-w-[690px] flex-col justify-between gap-7 xl:order-last'>
          <p>
            “At Schneider we have to cater to hundreds of thousands of users and
            companies across multiple regions and sites, requiring complex
            hierarchies with fine-grained access-control. We are grateful for
            Permit.io&apos;s user-friendly ReBAC capability for nested
            resources, which has significantly improved and simplified our
            workflow, making access management of complex resource structures a
            breeze.”
          </p>
          <p>
            <strong>Francois Delpech</strong> | Architect at SE.com
          </p>
        </div>
      </blockquote>
      <div className='absolute inset-0 top-auto z-10 h-1/2 bg-[#FFF1E7]'></div>
    </section>
  );
};

export default Section5;
