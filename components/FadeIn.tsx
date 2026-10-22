"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  const reduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        className={className ? `min-w-0 ${className}` : "min-w-0"}
        initial={reduce ? false : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: "some" }}
        transition={{ duration: 0.7, ease: "easeOut", delay }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
