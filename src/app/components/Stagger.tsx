"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

/**
 * Staggered reveal, used by the home hero, the toolkit chips and the
 * postcards. Motion propagates variant labels to children automatically, so
 * StaggerItem only has to declare its own variants — no context of our own.
 *
 * Server components can render these directly; only this file is client.
 */

const tags = {
  div: motion.div,
  ul: motion.ul,
  li: motion.li,
} as const;

type Tag = keyof typeof tags;

const containerVariants = (stagger: number, delay: number): Variants => ({
  hidden: {},
  shown: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

export function Stagger({
  children,
  className,
  as = "div",
  stagger = 0.06,
  delay = 0,
  /** Reveal when scrolled into view rather than on mount. */
  inView = false,
}: {
  children: ReactNode;
  className?: string;
  as?: Tag;
  stagger?: number;
  delay?: number;
  inView?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const Tag = tags[as];

  const variants = containerVariants(
    reduceMotion ? 0 : stagger,
    reduceMotion ? 0 : delay,
  );

  return (
    <Tag
      className={className}
      variants={variants}
      initial="hidden"
      /* once: the content should never re-animate on scroll-up. */
      {...(inView
        ? { whileInView: "shown", viewport: { once: true, amount: 0.2 } }
        : { animate: "shown" })}
    >
      {children}
    </Tag>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: Tag;
}) {
  const reduceMotion = useReducedMotion();
  const Tag = tags[as];

  const variants: Variants = reduceMotion
    ? {
        hidden: { opacity: 0 },
        shown: { opacity: 1, transition: { duration: 0.2 } },
      }
    : {
        hidden: { opacity: 0, y: 12 },
        shown: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.56, ease: [0.22, 1, 0.36, 1] },
        },
      };

  return (
    <Tag className={className} variants={variants} data-reveal="">
      {children}
    </Tag>
  );
}
