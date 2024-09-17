import Benefit from './Benefit';
import authentic from '/public/images/career/authentic.svg';
import empathy from '/public/images/career/empathy.svg';
import experiences from '/public/images/career/experiences.svg';
import professional from '/public/images/career/professional.svg';
import trustworthy from '/public/images/career/trustworthy.svg';

import { v4 as uuidv4 } from 'uuid';

const valueList = [
  {
    name: 'Professional and Ever-evolving',
    text: 'We believe we best grow as a company when we grow as individuals',
    style: 'max-w-[446px]',
    src: professional,
  },
  {
    name: 'Trustworthy and Transparent',
    text: 'We aim in all we do to build trust by working together in the open',
    style: 'max-w-[372px]',
    src: trustworthy,
  },
  {
    name: 'Empathy and Community',
    text: 'We build our company and our products with human connections',
    style: 'max-w-[410px]',
    src: empathy,
  },
  {
    name: 'Authentic and Friendly',
    text: 'We truly care about our colleagues and customers',
    style: 'max-w-[296px]',
    src: authentic,
  },
  {
    name: 'Experiences and Technology',
    text: 'We are and aspire to be deep tech experts, we strive to build amazing experiences through technology for all',
    style: 'max-w-[625px]',
    src: experiences,
  },
];

const Benefits = () => {
  return (
    <section className='px-4 py-14 xl:py-20'>
      <div className='container flex max-w-5xl flex-col gap-8 xl:gap-28'>
        <h2 className='text-center text-3xl font-bold text-theme_purple md:text-4xl'>
          Core Values
        </h2>
        <ul className='mx-auto flex max-w-[855px] flex-col items-center justify-between gap-10 lg:items-start lg:gap-24'>
          {valueList.map((item) => (
            <Benefit
              key={uuidv4()}
              src={item.src}
              name={item.name}
              text={item.text}
              styles={item.style}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Benefits;
