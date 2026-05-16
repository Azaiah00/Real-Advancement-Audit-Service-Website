"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 110, damping: 22 },
  },
};

export function Reveal({
  children,
  className,
  once = true,
  amount = 0.2,
}: {
  children: ReactNode;
  className?: string;
  once?: boolean;
  amount?: number;
}) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      variants={item}
      transition={{ delay, type: "spring", stiffness: 110, damping: 22 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
