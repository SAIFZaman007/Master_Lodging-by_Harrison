import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { BedDouble, Bath, ExternalLink, MapPin, Star, Users } from "lucide-react";

import { useProperty } from "@/hooks/useProperties";
import { Seo } from "@/components/shared/Seo";
import { InquiryForm } from "@/components/shared/InquiryForm";
import { formatUsd } from "@/lib/format";

export function PropertyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { data: property, isLoading, isError } = useProperty(slug);
  const [activeImage, setActiveImage] = useState(0);

  if (isLoading) {
    return <div className="container-page py-24 text-center text-brand-ink/50">Loading home…</div>;
  }

  if (isError || !property) {
    return (
      <div className="container-page py-24 text-center">
        <h1 className="font-display text-2xl">We couldn't find that home.</h1>
        <Link to="/portfolio" className="mt-4 inline-block text-brand-forest underline">
          Back to the full portfolio
        </Link>
      </div>
    );
  }

  const images = property.images.length ? property.images : null;
  const heroSrc = images?.[activeImage]?.hero_url;

  return (
    <>
      <Seo
        title={`${property.address} — ${property.title} | 8888 Masters`}
        description={`${property.bedrooms} bed / ${property.baths} bath home for up to ${property.guests} guests near Augusta National. ${property.miles_to_angc ? `${property.miles_to_angc} miles to Augusta National.` : ""}`}
        path={`/homes/${property.slug}`}
        image={heroSrc}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          name: property.title,
          address: { "@type": "PostalAddress", streetAddress: property.address, addressLocality: property.city, addressRegion: property.state },
          ...(property.lat && property.lon
            ? { geo: { "@type": "GeoCoordinates", latitude: property.lat, longitude: property.lon } }
            : {}),
        }}
      />

      <section className="bg-brand-cream pt-8">
        <div className="container-page">
          {heroSrc && (
            <div className="overflow-hidden rounded-2xl">
              <img src={heroSrc} alt={property.title} className="aspect-[16/9] w-full object-cover" />
            </div>
          )}
          {images && images.length > 1 && (
            <div className="mt-3 flex gap-2 overflow-x-auto pb-2">
              {images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(i)}
                  className={`h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 ${
                    i === activeImage ? "border-brand-gold" : "border-transparent"
                  }`}
                >
                  <img src={img.thumb_url} alt={img.alt_text ?? ""} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-brand-cream py-10">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="flex items-center gap-1.5 text-sm text-brand-ink/50">
                  <MapPin className="h-4 w-4" /> {property.address}, {property.city}, {property.state}
                </p>
                <h1 className="mt-1 font-display text-3xl text-brand-ink sm:text-4xl">{property.title}</h1>
              </div>
              {property.rating != null && (
                <span className="flex items-center gap-1 text-sm text-brand-ink/70">
                  <Star className="h-4 w-4 fill-brand-gold text-brand-gold" />
                  {property.rating.toFixed(1)} ({property.reviews_count} reviews)
                </span>
              )}
            </div>

            <div className="mt-6 flex flex-wrap gap-6 rounded-2xl bg-white p-6 text-sm shadow-[var(--shadow-card)]">
              <Spec icon={Users} label={`${property.guests} guests`} />
              <Spec icon={BedDouble} label={`${property.bedrooms} bedrooms`} />
              <Spec icon={Bath} label={`${property.baths} baths`} />
              {property.miles_to_angc != null && <Spec icon={MapPin} label={`${property.miles_to_angc} mi to Augusta National`} />}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {property.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-brand-cream-dark px-3 py-1 text-xs text-brand-ink/70">
                  {tag}
                </span>
              ))}
            </div>

            {property.description && (
              <p className="mt-6 leading-relaxed text-brand-ink/70">{property.description}</p>
            )}

            {property.airbnb_url && (
              <a
                href={property.airbnb_url}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-forest hover:underline"
              >
                View reviews on Airbnb <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-28 rounded-2xl bg-white p-6 shadow-[var(--shadow-card)]">
              <p className="font-display text-2xl text-brand-forest">{formatUsd(property.price_cents)}</p>
              {property.price_cents != null && <p className="text-xs text-brand-ink/50">per event week</p>}
              <p className="mt-4 text-sm text-brand-ink/60">
                Request availability for this home and Chris will follow up directly with dates and
                pricing for your event.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-brand-cream-dark py-16">
        <div className="container-page">
          <h2 className="font-display text-2xl text-brand-ink">Request this home</h2>
          <div className="mt-6">
            <InquiryForm propertySlug={property.slug} />
          </div>
        </div>
      </section>
    </>
  );
}

function Spec({ icon: Icon, label }: { icon: typeof Users; label: string }) {
  return (
    <span className="flex items-center gap-1.5 text-brand-ink/70">
      <Icon className="h-4 w-4 text-brand-forest" /> {label}
    </span>
  );
}
