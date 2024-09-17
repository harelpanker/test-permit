import Image from 'next/image';

import jean from '../assets/recommendation/jean.png';

const RecommendationSection = () => {
  return (
    <section className='relative z-20 bg-[#1F1206]  px-5 py-14 text-[#F9EDE7] lg:px-12 lg:py-24'>
      <div className='container flex max-w-[1148px] flex-col gap-y-6'>
        <blockquote className='text-lg'>
          {`"At Jules we aim to streamline the process of buying/selling
          recycled materials, and sharing access as part of our portal is an
          important step to achieve that. Allowing users to share access is both
          important to get right and hard to do so, we're delighted to have
          Permit solve this problem for us end to end."`}
        </blockquote>

        <div className='flex gap-x-[10px] text-sm font-medium'>
          <figure className='shrink-0'>
            <Image src={jean} alt='Jean Philippe Boul' width={42} height={42} />
          </figure>
          <div className='flex flex-col gap-y-1'>
            <h3>Jean Philippe Boul</h3>
            <p className='text-[#A18072]'>Co-founder & COO Jules AI</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendationSection;
