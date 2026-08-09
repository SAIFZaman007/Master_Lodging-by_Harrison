import { Navigate, useParams, Link } from "react-router-dom";

import { getEventBySlug } from "@/data/events";
import { Seo } from "@/components/shared/Seo";
import { PropertyGrid } from "@/components/shared/PropertyGrid";
import { InquiryForm } from "@/components/shared/InquiryForm";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/Motion";

export function EventPage() {
  const { slug } = useParams<{ slug: string }>();
  const event = getEventBySlug(slug);

  if (!event) return <Navigate to="/events" replace />;

  const faqJsonLd = event.faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: event.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }
    : undefined;

  return (
    <>
      <Seo
        title={`${event.headline} ${event.headlineEmphasis} | 8888 Augusta`}
        description={event.lede}
        path={`/events/${event.slug}`}
        image={event.heroImage}
        jsonLd={faqJsonLd}
      />

      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={event.heroImage} alt={event.heroImageAlt} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-forest-dark via-brand-forest-dark/75 to-brand-forest-dark/30" />
        </div>
        <div className="container-page relative flex min-h-[520px] flex-col justify-end gap-8 pb-14 pt-32">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">{event.eyebrow}</p>
            <h1 className="font-display text-4xl leading-tight text-brand-cream sm:text-5xl">
              {event.headline} <em className="text-brand-gold not-italic">{event.headlineEmphasis}</em>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-brand-cream/85">{event.lede}</p>
            <p className="mt-3 text-sm font-semibold text-brand-gold">{event.dates}</p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href="#homes"
                className="inline-block rounded-full bg-brand-gold px-7 py-3.5 text-sm font-semibold text-brand-forest-dark transition-transform hover:scale-[1.03]"
              >
                {event.ctaLabel}
              </a>
              <a
                href="#inquiry"
                className="inline-block rounded-full border border-brand-cream/25 bg-brand-cream/5 px-7 py-3.5 text-sm font-semibold text-brand-cream backdrop-blur-md transition-colors hover:border-brand-cream/50 hover:bg-brand-cream/15"
              >
                {event.secondaryCtaLabel}
              </a>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-6 border-t border-brand-cream/15 pt-7 sm:grid-cols-4">
            {event.proofTiles.map((tile) => (
              <div key={tile.label}>
                <dd className="font-display text-xl text-brand-cream sm:text-2xl">{tile.value}</dd>
                <dt className="mt-1 text-xs text-brand-cream/60">{tile.label}</dt>
              </div>
            ))}
          </dl>
        </div>
        {event.imageCredit && (
          <p className="absolute bottom-2 right-4 text-[10px] text-brand-cream/40">
            {event.imageCredit}
          </p>
        )}
      </section>

      {/* ===================== WHY US ===================== */}
      {event.whyUs && (
        <section className="bg-white py-16 sm:py-20">
          <div className="container-page">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">{event.whyUs.eyebrow}</p>
              <h2 className="mt-3 font-display text-3xl text-brand-ink sm:text-4xl">
                {event.whyUs.title}
              </h2>
              <p className="mt-4 text-brand-ink/60">{event.whyUs.body}</p>
            </Reveal>
            <Stagger stagger={0.08} className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {event.whyUs.pillars.map((pillar) => (
                <StaggerItem key={pillar.number}>
                  <span className="font-display text-2xl text-brand-gold">{pillar.number}</span>
                  <h3 className="mt-2 font-display text-lg text-brand-ink">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-ink/60">{pillar.body}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      {/* ===================== GALLERY ===================== */}
      {event.gallery && (
        <section className="bg-brand-cream py-16">
          <div className="container-page">
            <Reveal>
              <p className="eyebrow">{event.gallery.eyebrow}</p>
              <h2 className="mt-3 font-display text-2xl text-brand-ink sm:text-3xl">
                {event.gallery.title}
              </h2>
            </Reveal>
            <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {event.gallery.images.map((img) => (
                <figure key={img.src} className="group overflow-hidden rounded-xl bg-white shadow-[var(--shadow-card)]">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.caption}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="p-3 text-xs leading-snug text-brand-ink/60">
                    {img.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===================== PROPERTY GRID ===================== */}
      <section id="homes" className="bg-brand-cream py-16">
        <div className="container-page">
          <h2 className="font-display text-2xl text-brand-ink sm:text-3xl">{event.ctaLabel}</h2>
          <div className="mt-8">
            <PropertyGrid filters={event.propertyFilter} />
          </div>
        </div>
      </section>

      {/* ===================== HOW IT WORKS ===================== */}
      {event.howItWorks && (
        <section className="bg-white py-16 sm:py-20">
          <div className="container-page">
            <Reveal className="max-w-2xl">
              <p className="eyebrow">{event.howItWorks.eyebrow}</p>
              <h2 className="mt-3 font-display text-3xl text-brand-ink sm:text-4xl">
                {event.howItWorks.title}
              </h2>
              <p className="mt-4 text-brand-ink/60">{event.howItWorks.body}</p>
            </Reveal>
            <Stagger stagger={0.08} className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {event.howItWorks.steps.map((step) => (
                <StaggerItem key={step.step} className="rounded-2xl bg-brand-cream p-6">
                  <span className="font-display text-2xl text-brand-gold">{step.step}</span>
                  <h3 className="mt-2 font-display text-lg text-brand-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-ink/60">{step.body}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      {/* ===================== HIGHLIGHT (corporate / extended-stay) ===================== */}
      {event.highlight && (
        <section className="bg-brand-forest-dark py-16 sm:py-20">
          <div className="container-page grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
            <Reveal>
              <p className="eyebrow mb-3">{event.highlight.eyebrow}</p>
              <h2 className="font-display text-3xl text-brand-cream sm:text-4xl">
                {event.highlight.title}
              </h2>
              <p className="mt-4 max-w-lg text-brand-cream/75">{event.highlight.body}</p>
              <ul className="mt-5 space-y-2 text-sm text-brand-cream/75">
                {event.highlight.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-brand-gold">—</span>
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href="#inquiry"
                className="mt-7 inline-block rounded-full bg-brand-gold px-7 py-3.5 text-sm font-semibold text-brand-forest-dark transition-transform hover:scale-[1.03]"
              >
                {event.highlight.ctaLabel}
              </a>
            </Reveal>
            <Reveal
              delay={0.1}
              className="grid grid-cols-1 gap-6 border-t border-brand-cream/15 pt-7 sm:grid-cols-3 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10"
            >
              {event.highlight.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl text-brand-cream">{stat.value}</p>
                  <p className="mt-1 text-xs text-brand-cream/60">{stat.label}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {/* ===================== AUDIENCE ===================== */}
      {event.audience && (
        <section className="bg-brand-cream py-16 sm:py-20">
          <div className="container-page">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">{event.audience.eyebrow}</p>
              <h2 className="mt-3 font-display text-3xl text-brand-ink sm:text-4xl">
                {event.audience.title}
              </h2>
              <p className="mt-4 text-brand-ink/60">{event.audience.body}</p>
            </Reveal>
            <Stagger stagger={0.06} className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {event.audience.items.map((item) => (
                <StaggerItem key={item.title} className="rounded-2xl bg-white p-6 shadow-[var(--shadow-card)]">
                  <h3 className="font-display text-lg text-brand-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-ink/60">{item.body}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      {/* ===================== WEDDING VENUES (private events only) ===================== */}
      {event.venues && (
        <section className="bg-white py-16 sm:py-20">
          <div className="container-page">
            <Reveal className="max-w-2xl">
              <p className="eyebrow">{event.venues.eyebrow}</p>
              <h2 className="mt-3 font-display text-3xl text-brand-ink sm:text-4xl">
                {event.venues.title}
              </h2>
              <p className="mt-4 text-brand-ink/60">{event.venues.body}</p>
            </Reveal>
            <Stagger stagger={0.05} className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {event.venues.items.map((venue) => (
                <StaggerItem key={venue.name} className="rounded-2xl bg-brand-cream p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-azalea">
                    {venue.category}
                  </p>
                  <h3 className="mt-1.5 font-display text-lg text-brand-ink">{venue.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-ink/60">{venue.body}</p>
                </StaggerItem>
              ))}
            </Stagger>
            <p className="mt-6 text-xs text-brand-ink/45">
              Venue list is a planning starting point — confirm current availability and pricing
              directly with each venue. We'll coordinate lodging and the guest experience around
              whichever you choose.
            </p>
          </div>
        </section>
      )}

      {/* ===================== TESTIMONIAL ===================== */}
      {event.testimonial && (
        <section className="relative overflow-hidden bg-brand-forest py-20">
          <div className="container-page relative max-w-3xl text-center">
            <blockquote className="font-display text-2xl leading-snug text-brand-cream sm:text-3xl">
              &ldquo;{event.testimonial.quote}&rdquo;
            </blockquote>
            <cite className="mt-5 block text-sm not-italic text-brand-cream/60">
              {event.testimonial.cite}
            </cite>
          </div>
        </section>
      )}

      {/* ===================== FAQ ===================== */}
      {event.faqs.length > 0 && (
        <section className="bg-brand-cream py-16">
          <div className="container-page max-w-3xl">
            <h2 className="font-display text-2xl text-brand-ink">Common questions</h2>
            <div className="mt-6 space-y-6">
              {event.faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="font-semibold text-brand-ink">{faq.question}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-brand-ink/60">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===================== INQUIRY ===================== */}
      <section id="inquiry" className="bg-brand-cream-dark py-16">
        <div className="container-page">
          <h2 className="font-display text-2xl text-brand-ink">
            Request availability for {event.navLabel}
          </h2>
          <div className="mt-6">
            <InquiryForm defaultEventWeek={event.slug} />
          </div>
          <p className="mt-6 text-sm text-brand-ink/50">
            Prefer to browse everything first?{" "}
            <Link to="/events" className="font-semibold text-brand-forest underline">
              See every Augusta event week
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
