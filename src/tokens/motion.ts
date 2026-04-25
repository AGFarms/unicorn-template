export const motion = {
  duration: {
    fast: 0.15,
    base: 0.25,
    slow: 0.5,
    cinematic: 0.9,
  },
  ease: {
    standard: [0.2, 0, 0, 1] as const,
    enter: [0, 0, 0.2, 1] as const,
    exit: [0.4, 0, 1, 1] as const,
  },
} as const;

export type MotionToken = typeof motion;
