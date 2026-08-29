"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Must stay one motion component across both branches. Rendering a plain <div>
 * when reduced motion resolves lets React reuse the DOM node, freezing the
 * server-rendered opacity:0.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section";
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as];

  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y: 18 }}
      animate={reduce ? { opacity: 1, y: 0 } : undefined}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={reduce ? undefined : { once: true, amount: 0.25 }}
      transition={
        reduce
          ? { duration: 0 }
          : { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }
      }
    >
      {children}
    </Tag>
  );
}

export function HeroStagger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : "hidden"}
      animate="shown"
      variants={{
        hidden: {},
        shown: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function HeroItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 14 },
        shown: {
          opacity: 1,
          y: 0,
          transition: reduce
            ? { duration: 0 }
            : { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
