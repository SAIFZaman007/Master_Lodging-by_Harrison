import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { Seo } from "@/components/shared/Seo";
import { EVENTS } from "@/data/events";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/Motion";

const YEAR_ROUND_TILE = {
  to: "/portfolio",
  eyebrow: "Year-round",
  title: "Vacation stays",
  dates: "Book any time",
  image: "/assets/galleries/1204-magnolia-dr/01-1400.webp",
  imageAlt: "A private 8888 Augusta home available for a year-round stay",
};

export function EventsHub() {
  return (
    <>
      <Seo
        title="Augusta Event-Week Lodging — Masters, ANWA, Ironman, Peach Jam | 8888 Augusta"
        description="Private Augusta homes organized by the event that brought you here: Masters week, ANWA, Ironman 70.3, Peach Jam, private events, and year-round stays."
        path="/events"
      />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/events/hub/hero.webp"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-forest-dark/78" />
        </div>
        <div className="container-page relative py-24">
          <p className="eyebrow mb-3">Year-round Augusta hosting</p>
          <h1 className="max-w-2xl font-display text-4xl leading-tight text-brand-cream sm:text-5xl">
            Augusta is more than <em className="text-brand-gold not-italic">Masters week.</em>
          </h1>
          <p className="mt-4 max-w-xl text-brand-cream/80">
            We host the four major Augusta event weeks — and the year-round stays in between.
            Same homes, same operator, same standard.
          </p>
        </div>
      </section>

      <section className="bg-brand-cream py-16">
        <div className="container-page">
          <Stagger stagger={0.06} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {EVENTS.map((event) => (
              <StaggerItem key={event.slug}>
                <Link
                  to={`/events/${event.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover)]"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={event.heroImage}
                      alt={event.heroImageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">
                      {event.eyebrow}
                    </p>
                    <h2 className="mt-1 font-display text-xl text-brand-ink">
                      {event.headline} {event.headlineEmphasis}
                    </h2>
                    <p className="mt-2 text-sm text-brand-ink/60">{event.dates}</p>
                    <span className="mt-auto flex items-center gap-1 pt-4 text-xs font-semibold text-brand-forest">
                      {event.ctaLabel} <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}

            <StaggerItem>
              <Link
                to={YEAR_ROUND_TILE.to}
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover)]"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={YEAR_ROUND_TILE.image}
                    alt={YEAR_ROUND_TILE.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">
                    {YEAR_ROUND_TILE.eyebrow}
                  </p>
                  <h2 className="mt-1 font-display text-xl text-brand-ink">
                    {YEAR_ROUND_TILE.title}
                  </h2>
                  <p className="mt-2 text-sm text-brand-ink/60">{YEAR_ROUND_TILE.dates}</p>
                  <span className="mt-auto flex items-center gap-1 pt-4 text-xs font-semibold text-brand-forest">
                    View available homes <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      <section className="bg-brand-forest-dark py-16">
        <div className="container-page grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <p className="eyebrow mb-3">Multi-event corporate contracts</p>
            <h2 className="font-display text-3xl text-brand-cream sm:text-4xl">
              The same host across every Augusta event week.
            </h2>
            <p className="mt-4 max-w-lg text-brand-cream/75">
              Sponsors and corporate buyers don't just need Masters week — they need Augusta on
              their calendar. We build multi-event, multi-year hosting contracts that lock the
              same homes year after year, across the events that matter to your team.
            </p>
            <Link
              to="/inquire"
              className="mt-7 inline-block rounded-full bg-brand-gold px-7 py-3.5 text-sm font-semibold text-brand-forest-dark transition-transform hover:scale-[1.03]"
            >
              Discuss a multi-event contract
            </Link>
          </Reveal>
          <Reveal delay={0.1} className="grid grid-cols-3 gap-4 border-t border-brand-cream/15 pt-7 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
            <div>
              <p className="font-display text-3xl text-brand-cream">4</p>
              <p className="mt-1 text-xs text-brand-cream/60">major Augusta event weeks</p>
            </div>
            <div>
              <p className="font-display text-3xl text-brand-cream">1</p>
              <p className="mt-1 text-xs text-brand-cream/60">operator across all of them</p>
            </div>
            <div>
              <p className="font-display text-3xl text-brand-cream">Multi-year</p>
              <p className="mt-1 text-xs text-brand-cream/60">repeatable hospitality</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}