import { Link } from "react-router-dom";

import { Seo } from "@/components/shared/Seo";
import { EVENTS } from "@/data/events";

export function EventsHub() {
  return (
    <>
      <Seo
        title="Augusta Event-Week Lodging — Masters, ANWA, Ironman, Peach Jam | 8888 Masters"
        description="Private Augusta homes organized by the event that brought you here: Masters week, ANWA, Ironman 70.3, Peach Jam, private events, and student living."
        path="/events"
      />
      <section className="bg-brand-forest py-16">
        <div className="container-page">
          <p className="eyebrow">Every week, covered</p>
          <h1 className="mt-3 font-display text-4xl text-brand-cream sm:text-5xl">
            What brings you to Augusta?
          </h1>
        </div>
      </section>

      <section className="bg-brand-cream py-14">
        <div className="container-page grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EVENTS.map((event) => (
            <Link
              key={event.slug}
              to={`/events/${event.slug}`}
              className="group overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover)]"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={event.heroImage}
                  alt={event.navLabel}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">{event.eyebrow}</p>
                <h2 className="mt-1 font-display text-xl text-brand-ink">
                  {event.headline} {event.headlineEmphasis}
                </h2>
                <p className="mt-2 text-sm text-brand-ink/60">{event.dates}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
