import Image from 'next/image';
import { awardsData } from './awards-data';

const SectionAwards = () => {
  return (
    <section className='relative z-20 px-5 pb-[86px] pt-14 lg:pb-36 lg:pt-24'>
      <ul className='container flex max-w-6xl flex-wrap justify-center gap-12'>
        {awardsData.map((award) => (
          <li
            key={award.alt}
            className='flex w-full max-w-xs items-center justify-center transition-opacity hover:opacity-80'>
            <a href={award.link} target='_blank' rel='noopener noreferrer'>
              <Image src={award.image} alt={award.alt} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SectionAwards;
