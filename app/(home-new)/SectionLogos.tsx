'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

import tesla from '../(home-new)/assets/logos/tesla.svg';
import palo from '../(home-new)/assets/logos/palo.svg';
import cisco from '../(home-new)/assets/logos/cisco.svg';
import medical from '../(home-new)/assets/logos/medicalib.svg';
import honey from '../(home-new)/assets/logos/honeycomb.svg';

const SectionLogos = () => {
  const LogoImage = ({ src, alt }: { src: string; alt: string }) => {
    return (
      <li className='mr-10 flex h-full items-center justify-center md:mr-0'>
        <figure>
          <Image src={src} alt={`${alt} logo`} />
        </figure>
      </li>
    );
  };

  return (
    <section className='relative z-20 pb-12 text-center text-theme_orange_12 lg:pb-24'>
      <div className='container flex flex-col items-center gap-8 px-0 lg:gap-12'>
        <div className='flex w-full max-w-[800px] flex-col items-center gap-3 px-8 tracking-tighter lg:px-0 '>
          <h3 className='text-sm font-semibold lg:text-2xl'>
            Every application needs an authorization layer.
          </h3>
          <h2 className='text-2xl font-semibold lg:text-[52px] lg:leading-[1]'>
            That doesn&apos;t mean you need to build it{' '}
            <span className='relative'>
              from scratch.
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className='absolute inset-0 bottom-1 top-auto -z-10 h-[2px] w-full bg-theme_orange_12 lg:bottom-2 lg:h-[3px]'
              />
            </span>
          </h2>
        </div>

        <p className='px-2 text-sm font-medium lg:px-0 lg:text-base'>
          <span className='lg:block'>
            Implement a secure, flexible, authorization layer,{' '}
          </span>
          and focus on building something cool instead!{' '}
          <span className='italic text-theme_bronze_11'>Just like them -</span>
        </p>
        <div className='md:hidden'>
          <Marquee speed={30} pauseOnHover={true} gradient={false}>
            <LogoImage src={tesla} alt='Tesla' />
            <LogoImage src={palo} alt='Paloalto' />
            <LogoImage src={cisco} alt='Cisco' />
            <LogoImage src={medical} alt='Medicalib' />
            <LogoImage src={honey} alt='Honeycomb' />
          </Marquee>
        </div>

        <ul className='hidden w-full max-w-[700px] grid-cols-2 flex-wrap items-center justify-center gap-x-12 gap-y-3 md:flex'>
          <LogoImage src={tesla} alt='Tesla' />
          <LogoImage src={palo} alt='Paloalto' />
          <LogoImage src={cisco} alt='Cisco' />
          <LogoImage src={medical} alt='Medicalib' />
          <LogoImage src={honey} alt='Honeycomb' />
        </ul>
      </div>
    </section>
  );
};

export default SectionLogos;
