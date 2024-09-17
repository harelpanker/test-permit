'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import TypographyH2 from './components/TypographyH2';
import TypographyH3 from './components/TypographyH3';
import SectionFlexibleItem from './components/SectionFlexibleItem';
import { useInViewport } from '@mantine/hooks';

import dog from '../(home-new)/assets/flexible/dog.svg';
import okta from '../(home-new)/assets/flexible/okta.svg';
import authentik from '../(home-new)/assets/flexible/authentik.svg';
import aws from '../(home-new)/assets/flexible/aws.svg';
import clerk from '../(home-new)/assets/flexible/clerk.svg';
import firebase from '../(home-new)/assets/flexible/firebase.svg';
import workos from '../(home-new)/assets/flexible/workos.svg';
import kinde from '../(home-new)/assets/flexible/kinde.svg';
import hanko from '../(home-new)/assets/flexible/hanko.svg';
import secureauth from '../(home-new)/assets/flexible/secureauth.png';
import unknown from '../(home-new)/assets/flexible/unknown.svg';
import auth0 from '../(home-new)/assets/flexible/auth0.png';
import ory from '../(home-new)/assets/flexible/ory.svg';
import supertokens from '../(home-new)/assets/flexible/supertokens.svg';
import supabase from '../(home-new)/assets/flexible/supabase.svg';
import jwt from '../(home-new)/assets/flexible/jwt.svg';

const SectionFlexible = () => {
  const { ref, inViewport } = useInViewport();
  const [isAnimating1, setIsAnimating1] = useState(false);
  const [isAnimating2, setIsAnimating2] = useState(false);
  const [isAnimating3, setIsAnimating3] = useState(false);
  const [isAnimating4, setIsAnimating4] = useState(false);
  const [isAnimating5, setIsAnimating5] = useState(false);
  const [isAnimating6, setIsAnimating6] = useState(false);

  const [isAnimating7, setIsAnimating7] = useState(false);
  const [isAnimating8, setIsAnimating8] = useState(false);
  const [isAnimating9, setIsAnimating9] = useState(false);

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const delayTime = 2000;
    const animate = async () => {
      setIsAnimating1(true);
      await delay(delayTime);

      setIsAnimating2(true);
      await delay(delayTime);

      setIsAnimating3(true);
      await delay(delayTime);

      setIsAnimating4(true);
      await delay(delayTime);

      setIsAnimating5(true);
      await delay(delayTime);

      setIsAnimating6(true);
      await delay(delayTime);

      setIsAnimating1(false);
      await delay(delayTime);

      setIsAnimating2(false);
      await delay(delayTime);

      setIsAnimating3(false);
      await delay(delayTime);

      setIsAnimating4(false);
      await delay(delayTime);

      setIsAnimating5(false);
      await delay(delayTime);

      setIsAnimating6(false);
      await delay(delayTime);
    };

    const animateLoop = async () => {
      while (true) {
        await animate();
      }
    };

    if (inViewport) {
      animateLoop();
    }
  }, [inViewport]);

  useEffect(() => {
    const delayTime = 2000;
    const animate = async () => {
      setIsAnimating7(true);
      await delay(delayTime);

      setIsAnimating8(true);
      await delay(delayTime);

      setIsAnimating9(true);
      await delay(delayTime);

      setIsAnimating7(false);
      await delay(delayTime);

      setIsAnimating8(false);
      await delay(delayTime);

      setIsAnimating9(false);
      await delay(delayTime);
    };

    const animateLoop = async () => {
      while (true) {
        await animate();
      }
    };

    if (inViewport) {
      animateLoop();
    }
  }, [inViewport]);

  return (
    <section
      ref={ref}
      className="relative z-20  pb-[5.25rem] pt-14 text-theme_orange_12 lg:pb-36 lg:pt-24"
    >
      <div className="container flex max-w-6xl flex-col gap-5 px-4 lg:gap-0">
        <header className="flex flex-col gap-3 lg:gap-5">
          <TypographyH2>
            <span className="lg:block">Flexible, Customizable, </span>and
            Scalable Implementation
          </TypographyH2>
          <TypographyH3>Supports any Authentication provider</TypographyH3>
        </header>
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="hidden w-full max-w-[700px] grid-cols-5 gap-3 md:grid">
              <SectionFlexibleItem opacity0 />
              <SectionFlexibleItem opacity0 />
              <SectionFlexibleItem src={okta} />
              <SectionFlexibleItem
                src={jwt}
                src2={authentik}
                src2opacity={isAnimating7}
              />
              <SectionFlexibleItem isRight src={aws} />
              <SectionFlexibleItem opacity0 />
              <SectionFlexibleItem src={clerk} />
              <SectionFlexibleItem
                src={hanko}
                src2={firebase}
                src2opacity={isAnimating8}
              />
              <SectionFlexibleItem src={workos} />
              <SectionFlexibleItem
                src={secureauth}
                width={'86'}
                src2={kinde}
                src2opacity={isAnimating9}
              />
              <SectionFlexibleItem isLeft src={unknown} />
              <SectionFlexibleItem src={auth0} width={'58'} />
              <SectionFlexibleItem src={ory} />
              <SectionFlexibleItem src={supertokens} />
              <SectionFlexibleItem isRight src={supabase} />
            </div>

            <div className="grid grid-cols-3 gap-3 md:hidden">
              <SectionFlexibleItem isLeft src={okta} />
              <SectionFlexibleItem
                src={jwt}
                src2={authentik}
                src2opacity={isAnimating1}
              />
              <SectionFlexibleItem
                isRight
                src2={workos}
                src2opacity={isAnimating5}
                src={aws}
                width={'78'}
              />
              <SectionFlexibleItem isLeft src={ory} />
              <SectionFlexibleItem
                src={supertokens}
                src2={firebase}
                src2opacity={isAnimating2}
              />
              <SectionFlexibleItem isRight src={supabase} />
              <SectionFlexibleItem
                isLeft
                src={unknown}
                src2={hanko}
                src2opacity={isAnimating4}
              />
              <SectionFlexibleItem
                src={clerk}
                src2={secureauth}
                width={'85'}
                src2opacity={isAnimating6}
              />
              <SectionFlexibleItem
                src={auth0}
                width={'70'}
                src2={kinde}
                src2opacity={isAnimating3}
                isRight
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50, x: -50 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="relative -left-5 -top-8 max-w-[80vw] sm:max-w-[332px] md:absolute md:-left-[270px] md:top-10"
            >
              <Image src={dog} alt="" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFlexible;
