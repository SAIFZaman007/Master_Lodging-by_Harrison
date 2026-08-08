import { useEffect, useRef, type ReactNode } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";

import { EASE, maskLineChild, riseChild, staggerParent } from "@/lib/motion";

/**
 * Reusable motion components.
 *
 * Everything on the site pulls its motion from here rather than hand-rolling
 * transitions per component. That keeps timing consistent (the thing that
 * actually makes motion feel "designed" rather than "animated"), and gives us
 * exactly one place to honour `prefers-reduced-motion`.
 *
 * Easings and variants live in `@/lib/motion`.
 */

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** How far it travels before settling. */
  y?: number;
  once?: boolean;
};

/**
 * Drop-in scroll reveal. Use for one-off elements; use <Stagger> when several
 * siblings should cascade.
 */
export function Reveal({ children, className, delay = 0, y = 24, once = true }: RevealProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduced ? undefined : { opacity: 0, y }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Wraps a group whose children should cascade in. Children must be <StaggerItem>
 * (or any motion element using the `riseChild` variants).
 */
export function Stagger({
  children,
  className,
  stagger = 0.08,
  delay = 0,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  once?: boolean;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={staggerParent(stagger, delay)}
      initial={reduced ? undefined : "hidden"}
      whileInView={reduced ? undefined : "visible"}
      viewport={{ once, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={riseChild}>
      {children}
    </motion.div>
  );
}

/**
 * Headline that wipes up line-by-line from behind an overflow mask.
 * Pass each visual line as a separate string — we don't try to auto-wrap, because
 * where a headline breaks is a design decision, not something to leave to chance.
 */
export function MaskedLines({
  lines,
  className,
  lineClassName,
  delay = 0,
  animate = false,
}: {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  /** Use `animate` for above-the-fold content that shouldn't wait for scroll. */
  animate?: boolean;
}) {
  const reduced = useReducedMotion();
  const trigger = animate ? { animate: "visible" as const } : { whileInView: "visible" as const };

  return (
    <motion.span
      className={className}
      variants={staggerParent(0.1, delay)}
      initial={reduced ? undefined : "hidden"}
      viewport={{ once: true, margin: "-60px" }}
      {...(reduced ? {} : trigger)}
    >
      {lines.map((line, i) => (
        // The outer span is the mask; the inner one is what actually travels.
        <span key={i} className="block overflow-hidden pb-[0.12em]">
          <motion.span className={`block ${lineClassName ?? ""}`} variants={maskLineChild}>
            {line}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/**
 * Counts up to a value when scrolled into view. Used for the hero/stat bands —
 * numbers that animate read as "live" data rather than static decoration.
 */
export function Counter({
  to,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 1.6,
  className,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();
  const value = useMotionValue(0);
  const rounded = useTransform(value, (v) => `${prefix}${v.toFixed(decimals)}${suffix}`);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      value.set(to);
      return;
    }
    const controls = { frame: 0 };
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / (duration * 1000), 1);
      // Same ease-out curve as the rest of the site so numbers settle in sync with layout.
      value.set(to * (1 - Math.pow(1 - t, 3)));
      if (t < 1) controls.frame = requestAnimationFrame(tick);
    };
    controls.frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(controls.frame);
  }, [inView, to, duration, reduced, value]);

  return (
    <span ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
    </span>
  );
}

/**
 * Subtle cursor-follow tilt. Applied to primary CTAs only — used everywhere it
 * becomes noise, but on a single hero button it reads as craft.
 */
export function Magnetic({
  children,
  className,
  strength = 0.28,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18, mass: 0.4 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18, mass: 0.4 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x, y }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      {children}
    </motion.div>
  );
}