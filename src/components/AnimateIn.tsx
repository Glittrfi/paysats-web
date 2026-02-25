"use client";

import { useInView } from "@/hooks/useInView";
import { ReactNode } from "react";

type AnimationType = "fade-up" | "fade-left" | "fade-right" | "fade" | "scale";

const animationClasses: Record<AnimationType, { hidden: string; visible: string }> = {
  "fade-up": {
    hidden: "opacity-0 translate-y-8",
    visible: "opacity-100 translate-y-0",
  },
  "fade-left": {
    hidden: "opacity-0 -translate-x-8",
    visible: "opacity-100 translate-x-0",
  },
  "fade-right": {
    hidden: "opacity-0 translate-x-8",
    visible: "opacity-100 translate-x-0",
  },
  fade: {
    hidden: "opacity-0",
    visible: "opacity-100",
  },
  scale: {
    hidden: "opacity-0 scale-95",
    visible: "opacity-100 scale-100",
  },
};

interface AnimateInProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
}

export function AnimateIn({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  className = "",
}: AnimateInProps) {
  const { ref, inView } = useInView();
  const { hidden, visible } = animationClasses[animation];

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${inView ? visible : hidden} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
