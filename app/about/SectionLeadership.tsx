import Image from 'next/image';

import or from './assets/or.png';
import asaf from './assets/asaf.png';
import rookout from './assets/rookout.svg';
import meta from './assets/meta.png';
import microsoft from './assets/microsoft.svg';

const SectionLeadership = () => {
  return (
    <section className='relative z-10 px-5 py-14 text-center text-theme_orange_12 lg:py-24'>
      <div className='container flex flex-col items-center gap-y-8'>
        <h2
          style={{ lineHeight: 1.3 }}
          className='font-poppins text-[26px] font-semibold tracking-[-1px] lg:text-4xl'>
          Our Leadership
        </h2>
        <ul className='flex flex-col gap-x-[100px] gap-y-16 lg:flex-row'>
          <li className='flex flex-col items-center gap-y-[10px] lg:order-last'>
            <Image
              width={230}
              height={235}
              src={or}
              alt='Or Weis | Co-Founder / CEO'
            />
            <h3 className='font-poppins text-lg font-semibold tracking-[-0.5px] lg:text-[26px]'>
              Or Weis{' '}
              <span className='block text-lg text-[#846358]'>
                Co-Founder / CEO
              </span>
            </h3>
            <figure>
              <Image src={rookout} alt='Rookout' />
            </figure>
          </li>
          <li className='flex flex-col items-center gap-y-[10px]'>
            <Image
              width={230}
              height={235}
              src={asaf}
              alt='Asaf Cohen | Co-Founder / CTO'
            />
            <h3 className='font-poppins text-lg font-semibold tracking-[-0.5px] lg:text-[26px]'>
              Asaf Cohen{' '}
              <span className='block text-lg text-[#846358]'>
                Co-Founder / CTO
              </span>
            </h3>
            <div className='flex items-center justify-center gap-x-6 py-2'>
              <figure>
                <Image src={microsoft} alt='Microsoft' />
              </figure>
              <figure>
                <Image width={82} height={16} src={meta} alt='Meta' />
              </figure>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SectionLeadership;
