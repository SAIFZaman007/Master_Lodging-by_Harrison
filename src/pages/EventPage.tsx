import { Navigate, useParams } from "react-router-dom";

import { getEventBySlug } from "@/data/events";
import { Seo } from "@/components/shared/Seo";
import { PropertyGrid } from "@/components/shared/PropertyGrid";
import { InquiryForm } from "@/components/shared/InquiryForm";

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
        title={`${event.headline} ${event.headlineEmphasis} | 8888 Masters`}
        description={event.lede}
        path={`/events/${event.slug}`}
        image={event.heroImage}
        jsonLd={faqJsonLd}
      />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={event.heroImage} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-forest-dark via-brand-forest-dark/75 to-brand-forest-dark/30" />
        </div>
        <div className="container-page relative flex min-h-[480px] flex-col justify-end gap-8 pb-14 pt-32">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">{event.eyebrow}</p>
            <h1 className="font-display text-4xl leading-tight text-brand-cream sm:text-5xl">
              {event.headline} <em className="text-brand-gold not-italic">{event.headlineEmphasis}</em>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-brand-cream/85">{event.lede}</p>
            <p className="mt-3 text-sm font-semibold text-brand-gold">{event.dates}</p>
            <a
              href="#homes"
              className="mt-7 inline-block rounded-full bg-brand-gold px-7 py-3.5 text-sm font-semibold text-brand-forest-dark transition-transform hover:scale-[1.03]"
            >
              {event.ctaLabel}
            </a>
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
      </section>

      <section id="homes" className="bg-brand-cream py-16">
        <div className="container-page">
          <h2 className="font-display text-2xl text-brand-ink sm:text-3xl">{event.ctaLabel}</h2>
          <div className="mt-8">
            <PropertyGrid filters={event.propertyFilter} />
          </div>
        </div>
      </section>

      {event.faqs.length > 0 && (
        <section className="bg-white py-16">
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

      <section className="bg-brand-cream-dark py-16">
        <div className="container-page">
          <h2 className="font-display text-2xl text-brand-ink">Request availability for {event.navLabel}</h2>
          <div className="mt-6">
            <InquiryForm defaultEventWeek={event.slug} />
          </div>
        </div>
      </section>
    </>
  );
}
