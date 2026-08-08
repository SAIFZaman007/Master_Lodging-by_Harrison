import { motion, useReducedMotion } from "motion/react";

const ITEMS = [
  "Masters Week",
  "ANWA",
  "Ironman 70.3",
  "Peach Jam",
  "Weddings",
  "Corporate Hospitality",
  "Private Chefs",
  "Black-Car Transport",
  "Tee Times",
  "Year-Round Stays",
  "16-Home Walking Cluster",
  "Booked Direct",
];

/**
 * Continuous ticker strip, borrowed from the Sudoleap reference — it sits directly
 * under the hero and does a lot of work cheaply: it states the full service range
 * in one glance, and the constant motion keeps the fold from feeling static.
 *
 * Implementation note: the list is rendered twice and translated by exactly -50%,
 * so the second copy lands precisely where the first started. That's what makes
 * the loop seamless rather than visibly snapping.
 */
export function Marquee() {
  const reduced = useReducedMotion();
  const track = [...ITEMS, ...ITEMS];

  return (
    <div className="relative overflow-hidden border-y border-brand-cream/10 bg-brand-forest-dark py-4">
      {/* Edge fades so items dissolve rather than clip at the viewport bounds. */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-brand-forest-dark to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-brand-forest-dark to-transparent" />

      <motion.div
        className="flex w-max items-center gap-10 pr-10"
        animate={reduced ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 42, ease: "linear", repeat: Infinity }}
      >
        {track.map((item, i) => (
          <div key={`${item}-${i}`} className="flex shrink-0 items-center gap-10">
            <span className="text-sm whitespace-nowrap text-brand-cream/65">{item}</span>
            <span className="h-1 w-1 shrink-0 rounded-full bg-brand-gold/70" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}