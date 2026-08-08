import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

import { Reveal } from "@/components/shared/Motion";

/**
 * All five of Chris's photos are portrait — 900x1100, a 0.82 ratio.
 * The old layout forced a single one into an `aspect-[16/10]` landscape box with
 * `object-cover`, which cropped roughly half the frame away (heads cut off, subject
 * off-centre). That's the "unable to show whole image" bug.
 *
 * This version uses a three-image staggered collage on the photos' native 4/5-ish
 * ratio, so nothing meaningful gets cropped, and gives the columns a gentle
 * counter-scroll so the group feels composed rather than pasted down.
 */
const PHOTOS = [
  { src: "/assets/chris/07-img_a7ec42d2f6e3.webp", alt: "Chris with a guest group at Augusta National" },
  { src: "/assets/chris/16-img_d479541345c0.webp", alt: "One of the 8888 Masters homes during tournament week" },
  { src: "/assets/chris/20-img_a95be4f831e4.webp", alt: "Chris hosting guests during Masters week" },
];

export function HostBio() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const colA = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
  const colB = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section ref={sectionRef} className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="container-page grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="grid grid-cols-2 gap-4 sm:gap-5">
          <motion.div
            style={reduced ? undefined : { y: colA }}
            className="flex flex-col gap-4 sm:gap-5"
          >
            {PHOTOS.slice(0, 2).map((photo, i) => (
              <Reveal key={photo.src} delay={i * 0.1}>
                <figure className="group overflow-hidden rounded-2xl bg-brand-cream-dark shadow-[var(--shadow-card)]">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    /* 4/5 sits within the source's native 0.82 ratio, so the crop is
                       a few pixels top and bottom rather than half the photograph. */
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </figure>
              </Reveal>
            ))}
          </motion.div>

          <motion.div
            style={reduced ? undefined : { y: colB }}
            className="flex flex-col justify-center gap-4 sm:gap-5"
          >
            <Reveal delay={0.16}>
              <figure className="group overflow-hidden rounded-2xl bg-brand-cream-dark shadow-[var(--shadow-card)]">
                <img
                  src={PHOTOS[2].src}
                  alt={PHOTOS[2].alt}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </figure>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="rounded-2xl border border-brand-forest/10 bg-brand-cream p-6">
                <p className="font-display text-3xl text-brand-forest">10+</p>
                <p className="mt-1 text-xs leading-relaxed text-brand-ink/55">
                  years hosting Masters-week guests in Augusta
                </p>
              </div>
            </Reveal>
          </motion.div>
        </div>

        <Reveal delay={0.1}>
          <p className="font-display text-lg text-brand-gold italic">Hosted by Chris</p>
          <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.08] tracking-[-0.01em] text-brand-ink">
            The operator behind the portfolio.
          </h2>

          <div className="mt-6 space-y-4 leading-relaxed text-brand-ink/70">
            <p>
              8888 Masters is built on Chris's portfolio of Augusta homes and a decade of hosting
              Masters-week guests — sponsors, families, executives, member guests, and repeat
              patrons. We're not a marketplace. We're the operator.
            </p>
            <p>
              Every home in the portfolio is one we manage or co-manage personally. Every guest is
              one we know before they arrive.
            </p>
          </div>

          <p className="mt-8 border-l-2 border-brand-gold/50 pl-5 text-sm leading-relaxed text-brand-ink/45">
            Photos used with permission. 8888 Masters is an independent lodging portfolio and is not
            affiliated with or endorsed by Augusta National Golf Club or the Masters Tournament.
          </p>
        </Reveal>
      </div>
    </section>
  );
}