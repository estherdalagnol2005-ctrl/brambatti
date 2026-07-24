/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface ScrollFadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  key?: React.Key;
}

export default function ScrollFadeIn({
  children,
  delay = 0,
  duration = 800,
  className = '',
}: ScrollFadeInProps) {
  const prefersReducedMotion = useReducedMotion();
  const durationInSeconds = duration > 10 ? duration / 1000 : duration;
  const delayInSeconds = delay > 10 ? delay / 1000 : delay;

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: '0px 0px -8% 0px' }}
      transition={{
        duration: prefersReducedMotion ? 0 : durationInSeconds,
        delay: prefersReducedMotion ? 0 : delayInSeconds,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
