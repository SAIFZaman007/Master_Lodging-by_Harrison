import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { Seo } from "@/components/shared/Seo";
import { LOCAL_INFO_TOPICS } from "@/data/localInfo";

export function LocalInfoHub() {
  return (
    <>
      <Seo
        title="Local Info — Where to Eat, Play, and Get Around Augusta | 8888 Masters"
        description="Local info from a private host who actually lives here. Restaurants, tee times, transportation, catering, and more — curated picks, refreshed every event week."
        path="/local-info"
      />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/assets/galleries/2402-wilkshire-dr/01-1400.webp" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-brand-forest-dark/80" />
        </div>
        <div className="container-page relative py-24">
          <p className="eyebrow mb-3">Augusta, hosted</p>
          <h1 className="max-w-2xl font-display text-4xl leading-tight text-brand-cream sm:text-5xl">
            Where to eat, drink, play, and <em className="text-brand-gold not-italic">get around.</em>
          </h1>
          <p className="mt-4 max-w-xl text-brand-cream/80">
            Local info from a private host who actually lives here. Curated picks, not a generic
            list. We refresh it for every event week.
          </p>
        </div>
      </section>

      <section className="bg-brand-cream py-16">
        <div className="container-page grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {LOCAL_INFO_TOPICS.map((topic) => (
            <Link
              key={topic.slug}
              to={`/local-info/${topic.slug}`}
              className="group flex flex-col gap-3 rounded-2xl bg-white p-6 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover)]"
            >
              <topic.icon className="h-5 w-5 text-brand-forest" />
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-gold">{topic.category}</p>
                <h2 className="mt-1 font-display text-lg text-brand-ink">{topic.title}</h2>
              </div>
              <p className="text-sm leading-relaxed text-brand-ink/60">{topic.description}</p>
              <span className="mt-auto flex items-center gap-1 text-xs font-semibold text-brand-forest">
                More info <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-brand-cream pb-20">
        <div className="container-page">
          <div className="rounded-2xl bg-brand-forest-dark p-10 text-brand-cream sm:p-14">
            <p className="eyebrow mb-3">The host advantage</p>
            <h2 className="max-w-md font-display text-3xl">This isn't a Yelp list. It's our calendar.</h2>
            <p className="mt-4 max-w-xl text-brand-cream/75">
              Most "local guides" are an SEO play. Ours is built from the bookings we actually make
              for guests every week. When we recommend a restaurant, it's because we've sent guests
              there and they came back happy.
            </p>
            <Link
              to="/inquire"
              className="mt-7 inline-block rounded-full bg-brand-gold px-7 py-3.5 text-sm font-semibold text-brand-forest-dark"
            >
              Tell us what you need
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
