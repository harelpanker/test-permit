'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/styles.module.css';

import tesla from '../assets/logos/tesla.svg';
import palo from '../assets/logos/palo.svg';
import cisco from '../assets/logos/cisco.svg';
import medical from '../assets/logos/medicalib.svg';
import intel from '../assets/logos/intel.svg';
import honey from '../assets/logos/honeycomb.svg';
import bp from '../assets/logos/bp.svg';
import anecdotes from '../assets/logos/anecdotes.svg';
import granulate from '../assets/logos/granulate.svg';
import nebula from '../assets/logos/nebula.svg';
import optum from '../assets/logos/optum.svg';
import rubicon from '../assets/logos/rubicon.svg';
import salt from '../assets/logos/salt.svg';
import inventa from '../assets/logos/inventa.svg';

const LogosHero = () => {
  // 1
  const [isAnimating0, setIsAnimating0] = useState(true);
  const [isAnimating1, setIsAnimating1] = useState(false);
  const [isAnimating2, setIsAnimating2] = useState(false);
  // 2
  const [isAnimating3, setIsAnimating3] = useState(true);
  const [isAnimating4, setIsAnimating4] = useState(false);
  const [isAnimating5, setIsAnimating5] = useState(false);
  // 3
  const [isAnimating6, setIsAnimating6] = useState(true);
  const [isAnimating7, setIsAnimating7] = useState(false);
  // 4
  const [isAnimating8, setIsAnimating8] = useState(true);
  const [isAnimating9, setIsAnimating9] = useState(false);
  // 5
  const [isAnimating10, setIsAnimating10] = useState(true);
  const [isAnimating11, setIsAnimating11] = useState(false);
  // 6
  const [isAnimating12, setIsAnimating12] = useState(true);
  const [isAnimating13, setIsAnimating13] = useState(false);

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const delayTime = 2000;
    const animate = async () => {
      await delay(delayTime);
      // 1
      setIsAnimating0(false);
      setIsAnimating1(true);
      setIsAnimating2(false);
      await delay(delayTime);
      // 5
      setIsAnimating10(false);
      setIsAnimating11(true);
      await delay(delayTime);
      // 3
      setIsAnimating6(false);
      setIsAnimating7(true);
      await delay(delayTime);
      // 2
      setIsAnimating3(false);
      setIsAnimating4(true);
      setIsAnimating5(false);
      await delay(delayTime);
      // 6
      setIsAnimating12(false);
      setIsAnimating13(true);
      await delay(delayTime);
      // 1
      setIsAnimating0(false);
      setIsAnimating1(false);
      setIsAnimating2(true);
      await delay(delayTime);
      // 4
      setIsAnimating8(false);
      setIsAnimating9(true);
      await delay(delayTime);
      // 2
      setIsAnimating3(false);
      setIsAnimating4(false);
      setIsAnimating5(true);
      await delay(delayTime);
      // 1
      setIsAnimating0(true);
      setIsAnimating1(false);
      setIsAnimating2(false);
      await delay(delayTime);
      // 5
      setIsAnimating10(true);
      setIsAnimating11(false);
      await delay(delayTime);
      // 3
      setIsAnimating6(true);
      setIsAnimating7(false);
      await delay(delayTime);
      // 2
      setIsAnimating3(true);
      setIsAnimating4(false);
      setIsAnimating5(false);
      await delay(delayTime);
      // 6
      setIsAnimating12(true);
      setIsAnimating13(false);
      await delay(delayTime);
      // 4
      setIsAnimating8(true);
      setIsAnimating9(false);
    };

    const animateLoop = async () => {
      while (true) {
        await animate();
      }
    };

    animateLoop();
  }, []);

  return (
    <ul className='relative z-20 grid grid-cols-2 justify-between gap-4 md:grid-cols-3 lg:flex lg:gap-x-9'>
      {/* Group 1 */}
      <li className='relative h-[38px] w-[150px]'>
        <figure
          className={`${styles.img__w} ${
            isAnimating0 ? styles.active_image : ''
          }`}>
          <Image src={tesla} alt='tesla' />
        </figure>
        <figure
          className={`${styles.img__w} ${
            isAnimating1 ? styles.active_image : ''
          }`}>
          <Image src={nebula} alt='Nebula' />
        </figure>
        <figure
          className={`${styles.img__w} ${
            isAnimating2 ? styles.active_image : ''
          }`}>
          <Image src={bp} alt='bp' />
        </figure>
      </li>
      {/* Group 2 */}
      <li className='relative h-[38px] w-[150px]'>
        <figure
          className={`${styles.img__w} ${
            isAnimating3 ? styles.active_image : ''
          }`}>
          <Image src={palo} alt='paloalto' />
        </figure>
        <figure
          className={`${styles.img__w} ${
            isAnimating4 ? styles.active_image : ''
          }`}>
          <Image src={salt} alt='salt' />
        </figure>
        <figure
          className={`${styles.img__w} ${
            isAnimating5 ? styles.active_image : ''
          }`}>
          <Image src={inventa} alt='inventa' />
        </figure>
      </li>

      {/* Group 3 */}
      <li className='relative h-[38px] w-[150px]'>
        <figure
          className={`${styles.img__w} ${
            isAnimating6 ? styles.active_image : ''
          }`}>
          <Image src={cisco} alt='Cisco' />
        </figure>
        <figure
          className={`${styles.img__w} ${
            isAnimating7 ? styles.active_image : ''
          }`}>
          <Image src={rubicon} alt='Rubicon' />
        </figure>
      </li>

      {/* Group 4 */}
      <li className='relative h-[38px] w-[150px]'>
        <figure
          className={`${styles.img__w} ${
            isAnimating8 ? styles.active_image : ''
          }`}>
          <Image src={medical} alt='Medicalib' />
        </figure>
        <figure
          className={`${styles.img__w} ${
            isAnimating9 ? styles.active_image : ''
          }`}>
          <Image width={150} height={38} src={anecdotes} alt='vega' />
        </figure>
      </li>

      {/* Group 5 */}
      <li className='relative h-[38px] w-[150px]'>
        <figure
          className={`${styles.img__w} ${
            isAnimating10 ? styles.active_image : ''
          }`}>
          <Image src={intel} alt='Intel' />
        </figure>
        <figure
          className={`${styles.img__w} ${
            isAnimating11 ? styles.active_image : ''
          }`}>
          <Image src={granulate} alt='Granulate' />
        </figure>
      </li>

      {/* Group 6 */}
      <li className='relative h-[38px] w-[150px]'>
        <figure
          className={`${styles.img__w} ${
            isAnimating12 ? styles.active_image : ''
          }`}>
          <Image src={honey} alt='Honeycomb' />
        </figure>
        <figure
          className={`${styles.img__w} ${
            isAnimating13 ? styles.active_image : ''
          }`}>
          <Image src={optum} alt='optum' />
        </figure>
      </li>
    </ul>
  );
};

export default LogosHero;
