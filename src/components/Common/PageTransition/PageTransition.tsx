import { matchingStepState } from '@recoil/matching/atoms';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import { useRecoilValue } from 'recoil';

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const matchingStep = useRecoilValue(matchingStepState);

  const animate = {
    initial: {
      opacity: 0,
      transition: `transform 0.33s ease`,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={matchingStep}
          initial={animate.initial}
          animate={animate.animate}
          exit={animate.exit}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default PageTransition;
