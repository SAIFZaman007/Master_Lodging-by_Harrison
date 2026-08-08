import { Link } from "react-router-dom";
import { BedDouble, Bath, Star, Users } from "lucide-react";
import { motion } from "motion/react";

import type { PropertySummary } from "@/api/types";
import { formatUsd } from "@/lib/format";

export function PropertyCard({ property, index = 0 }: { property: PropertySummary; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
    >
      <Link
        to={`/homes/${property.slug}`}
        className="group block overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover)]"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-brand-cream-dark">
          {property.thumb_url ? (
            <img
              src={property.thumb_url}
              alt={property.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-brand-forest/40">No photo</div>
          )}

          <div className="absolute left-3 top-3 flex gap-1.5">
            {property.is_signature && (
              <span className="rounded-full bg-brand-gold px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-brand-forest-dark">
                Signature
              </span>
            )}
            {property.walking_cluster && (
              <span className="rounded-full bg-brand-forest/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-brand-cream">
                Walking cluster
              </span>
            )}
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display text-base leading-snug text-brand-ink">{property.address}</h3>
            {property.rating != null && (
              <span className="flex shrink-0 items-center gap-1 text-sm text-brand-ink/70">
                <Star className="h-3.5 w-3.5 fill-brand-gold text-brand-gold" />
                {property.rating.toFixed(1)}
              </span>
            )}
          </div>

          <div className="mt-2 flex items-center gap-3 text-xs text-brand-ink/60">
            <span className="flex items-center gap-1">
              <Users className="h-3.5 w-3.5" /> {property.guests}
            </span>
            <span className="flex items-center gap-1">
              <BedDouble className="h-3.5 w-3.5" /> {property.bedrooms}
            </span>
            <span className="flex items-center gap-1">
              <Bath className="h-3.5 w-3.5" /> {property.baths}
            </span>
            {property.miles_to_angc != null && <span>{property.miles_to_angc} mi to ANGC</span>}
          </div>

          <div className="mt-3 flex items-center justify-between">
            <div>
              <span className="font-display text-lg text-brand-forest">
                {formatUsd(property.price_cents)}
              </span>
              {property.price_cents != null && (
                <span className="ml-1 text-xs text-brand-ink/50">/ event week</span>
              )}
            </div>
            <span className="rounded-full border border-brand-forest px-4 py-1.5 text-xs font-semibold text-brand-forest transition-colors group-hover:bg-brand-forest group-hover:text-brand-cream">
              View home
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
