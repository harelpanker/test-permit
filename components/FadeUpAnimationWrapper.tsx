'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

type FadeUpAnimationWrapperProps = {
  children: React.ReactNode;
};

const FadeUpAnimationWrapper: FC<FadeUpAnimationWrapperProps> = ({
  children,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.4 }}>
      {children}
    </motion.div>
  );
};

export default FadeUpAnimationWrapper;
