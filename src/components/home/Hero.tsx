import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

import { Counter, Magnetic, MaskedLines } from "@/components/shared/Motion";
import { EASE } from "@/lib/motion";

const STATS = [
  { value: 24, suffix: "", label: "private Augusta homes" },
  { value: 16, suffix: "", label: "home walking cluster" },
  { value: 13, suffix: " min", prefix: "~", label: "walk to the gates" },
  { value: 1, suffix: "", label: "operator, every detail" },
];

/**
 * Full-bleed hero.
 *
 * Sizing: `min-h-svh` (small-viewport-height) rather than `vh` so mobile browser
 * chrome doesn't crop the composition. The previous fixed 640px min-height was
 * the reason this looked cramped on desktop.
 *
 * Imagery: the source photo is only 1200x850, which visibly softens when stretched
 * across a 2560px display. It's been upscaled and sharpened into a 1280/1920/2560/3200
 * responsive set — the browser picks the right one via `srcSet` so we get sharpness
 * on large screens without pushing 1.2MB at phones.
 */
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Image drifts slower than the page and dims slightly — depth without distraction.
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.16]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section ref={sectionRef} className="relative isolate min-h-svh overflow-hidden bg-brand-forest-dark">
      <motion.div
        className="absolute inset-0 -z-10"
        style={reduced ? undefined : { y: imageY, scale: imageScale }}
      >
        <img
          src="/assets/hero/hero-home-1920.webp"
          srcSet={[
            "/assets/hero/hero-home-1280.webp 1280w",
            "/assets/hero/hero-home-1920.webp 1920w",
            "/assets/hero/hero-home-2560.webp 2560w",
            "/assets/hero/hero-home-3200.webp 3200w",
          ].join(", ")}
          sizes="100vw"
          alt="A private 8888 Masters home near Augusta National, framed by a blooming magnolia in early April"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-center"
        />
        {/* Layered scrims: vertical for text legibility, horizontal to weight the
            composition left where the copy sits, and a vignette to hold the edges. */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-forest-dark via-brand-forest-dark/60 to-brand-forest-dark/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-forest-dark/85 via-brand-forest-dark/35 to-transparent" />
        <div className="absolute inset-0 shadow-[inset_0_0_180px_60px_rgba(10,43,32,0.55)]" />
      </motion.div>

      <motion.div
        style={reduced ? undefined : { y: contentY, opacity: contentOpacity }}
        className="container-page relative flex min-h-svh flex-col justify-end pb-14 pt-36 sm:pb-20 sm:pt-44"
      >
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.25 }}
            className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.24em] text-brand-gold uppercase"
          >
            <span className="h-px w-10 bg-brand-gold/60" />
            24 private homes · Augusta, Georgia
          </motion.p>

          <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[1.02] tracking-[-0.02em] text-brand-cream">
            <MaskedLines
              animate
              delay={0.35}
              lines={[
                <>
                  Augusta has a <em className="not-italic text-brand-gold">host.</em>
                </>,
                <>Not a marketplace.</>,
              ]}
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.75 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-brand-cream/80 sm:text-lg"
          >
            A single curated portfolio of homes near Augusta National — booked direct, hosted in
            person, with access and proximity no marketplace can offer. Masters week, Ironman, ANWA,
            Peach Jam, weddings, and every week between.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.9 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <Link
                to="/portfolio"
                className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-brand-gold px-8 py-4 text-sm font-semibold text-brand-forest-dark"
              >
                <span className="relative z-10">Browse the portfolio</span>
                <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                <span className="absolute inset-0 -translate-x-full bg-brand-gold-light transition-transform duration-500 group-hover:translate-x-0" />
              </Link>
            </Magnetic>

            <Link
              to="/inquire"
              className="group flex items-center gap-2 rounded-full border border-brand-cream/25 px-8 py-4 text-sm font-semibold text-brand-cream backdrop-blur-sm transition-colors duration-300 hover:border-brand-cream/50 hover:bg-brand-cream/10"
            >
              Request availability
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>

        <motion.dl
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.09, delayChildren: 1.05 } } }}
          className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-brand-cream/15 pt-9 sm:grid-cols-4"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
              }}
            >
              <dd className="font-display text-3xl text-brand-cream sm:text-4xl">
                <Counter to={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </dd>
              <dt className="mt-1.5 text-xs tracking-wide text-brand-cream/55">{stat.label}</dt>
            </motion.div>
          ))}
        </motion.dl>
      </motion.div>

      {/* Scroll cue — a vertical rail on the right edge. Kept off the bottom so it
          never collides with the stat band. */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="pointer-events-none absolute top-1/2 right-6 hidden -translate-y-1/2 flex-col items-center gap-4 xl:flex"
      >
        <span className="text-[10px] tracking-[0.3em] text-brand-cream/40 uppercase [writing-mode:vertical-rl]">
          Scroll
        </span>
        <span className="relative h-16 w-px overflow-hidden bg-brand-cream/15">
          <motion.span
            className="absolute inset-x-0 top-0 h-6 bg-brand-gold"
            animate={{ y: ["-100%", "360%"] }}
            transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity }}
          />
        </span>
      </motion.div>

    </section>
  );
}