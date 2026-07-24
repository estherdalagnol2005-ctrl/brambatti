/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

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
  // Convert milliseconds to seconds for Framer Motion if needed
  const durationInSeconds = duration > 10 ? duration / 1000 : duration;
  const delayInSeconds = delay > 10 ? delay / 1000 : delay;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{
        duration: durationInSeconds,
        delay: delayInSeconds,
        ease: [0.16, 1, 0.3, 1], // Custom elegant ease-out curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
