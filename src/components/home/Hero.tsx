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
 * Colour treatment: the previous version washed the whole photograph in
 * `brand-forest-dark`, which turned a spring magnolia into a flat green plate.
 * The scrims here are neutral black instead, so the image keeps its own colour —
 * the source already runs dark on the left (storm cloud, pines) and warm on the
 * right (magnolia, sun break), so the gradients only need to deepen what's there
 * rather than impose a tint.
 *
 * Art direction: the frame is 1.73:1. Letting `object-cover` crop that down to a
 * 390px phone viewport would leave little but the centre of the driveway, so a
 * separate 4:5 crop centred on the house and the magnolia is served below 640px
 * via <picture>.
 */
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.14]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section ref={sectionRef} className="relative isolate min-h-svh overflow-hidden bg-[#0b0d0c]">
      <motion.div
        className="absolute inset-0 -z-10"
        style={reduced ? undefined : { y: imageY, scale: imageScale }}
      >
        <picture>
          <source
            media="(max-width: 639px)"
            srcSet="/assets/hero/hero-portrait-800.webp 800w, /assets/hero/hero-portrait-1200.webp 1200w"
            sizes="100vw"
          />
          <img
            src="/assets/hero/hero-1920.webp"
            srcSet={[
              "/assets/hero/hero-1280.webp 1280w",
              "/assets/hero/hero-1920.webp 1920w",
              "/assets/hero/hero-2560.webp 2560w",
              "/assets/hero/hero-3200.webp 3200w",
            ].join(", ")}
            sizes="100vw"
            alt="A private 8888 Augusta home near Augusta National, framed by a magnolia in full bloom under an early-April sky"
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover object-center"
          />
        </picture>

        {/*
          Four neutral layers, each doing one job:
          1. Left wedge — carries the headline and body copy.
          2. Bottom lift — carries the stat band.
          3. Top scrim — hands the header legible contrast before it goes frosted.
          4. Warm bloom — a low-opacity amber wash that keeps the magnolia's warmth
             from being flattened by layers 1-3.
        */}
        <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/45 via-55% to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 via-45% to-transparent" />
        <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-black/45 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_55%_at_82%_38%,rgba(200,163,77,0.16),transparent_70%)]" />
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

          <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[1.02] tracking-[-0.02em] text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)]">
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
            className="mt-7 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
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
                className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-brand-gold px-8 py-4 text-sm font-semibold text-brand-forest-dark shadow-lg shadow-black/25"
              >
                <span className="relative z-10">Browse the portfolio</span>
                <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                <span className="absolute inset-0 -translate-x-full bg-brand-gold-light transition-transform duration-500 group-hover:translate-x-0" />
              </Link>
            </Magnetic>

            <Link
              to="/inquire"
              className="group flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition-colors duration-300 hover:border-white/50 hover:bg-white/15"
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
          className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/15 pt-9 sm:grid-cols-4"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
              }}
            >
              <dd className="font-display text-3xl text-white sm:text-4xl">
                <Counter to={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </dd>
              <dt className="mt-1.5 text-xs tracking-wide text-white/55">{stat.label}</dt>
            </motion.div>
          ))}
        </motion.dl>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="pointer-events-none absolute top-1/2 right-6 hidden -translate-y-1/2 flex-col items-center gap-4 xl:flex"
      >
        <span className="text-[10px] tracking-[0.3em] text-white/45 uppercase [writing-mode:vertical-rl]">
          Scroll
        </span>
        <span className="relative h-16 w-px overflow-hidden bg-white/20">
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