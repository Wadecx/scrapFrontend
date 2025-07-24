'use client';

import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

type Props = {
  animate?: 'popIn' | 'fadeIn' | 'slideFromBottom';
  delay?: number;
  duration?: number;
  className?: string;
  hasLayout?: boolean;
  inView?: boolean;
};

const FADE_IN = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const POP_IN = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
};

const DEFAULT_TRANSITION = {
  transition: {
    duration: 0.4,
    type: 'spring',
    stiffness: 200,
    damping: 10,
    mass: 0.5,
  },
};

export const AnimateContainer = ({
  children,
  className,
  duration = 0.4,
  delay = 0,
  animate = 'popIn',
  hasLayout = false,
  inView = true,
}: PropsWithChildren<Props>) => {
  const setAnimation = () => {
    switch (animate) {
      case 'fadeIn':
        return FADE_IN;
      case 'popIn':
        return POP_IN;
      default:
        return FADE_IN;
    }
  };

  return (
    <motion.div
      layout={hasLayout}
      initial="initial"
      variants={setAnimation()}
      whileInView={inView ? 'animate' : 'initial'}
      animate={!inView ? 'animate' : 'initial'}
      exit="exit"
      viewport={{ once: true }}
      transition={{ ...DEFAULT_TRANSITION.transition, delay, duration }}
      // @ts-ignore
      className={className}
    >
      {children}
    </motion.div>
  );
};
