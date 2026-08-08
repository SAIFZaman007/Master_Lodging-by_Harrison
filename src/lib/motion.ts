import type { Variants } from "motion/react";

/**
 * Shared motion constants and variants.
 *
 * These live apart from the components in `components/shared/Motion.tsx` on
 * purpose: a module that exports both components and plain values breaks React
 * Fast Refresh, so the values sit here and the components stay over there.
 *
 * Easing note: [0.22, 1, 0.36, 1] is a strong ease-out. Elements decelerate into
 * place rather than drifting, which reads as responsive rather than sluggish.
 */
export const EASE = [0.22, 1, 0.36, 1] as const;
export const EASE_SOFT = [0.16, 1, 0.3, 1] as const;

/** Parent that releases its children one after another. */
export const staggerParent = (stagger = 0.08, delay = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

/** Standard child reveal: rises and fades into place. */
export const riseChild: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export const fadeChild: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
};

/** For headline lines that wipe up from behind a mask. */
export const maskLineChild: Variants = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 0.9, ease: EASE } },
};