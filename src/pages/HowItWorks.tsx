import { Link } from "react-router-dom";

import { Seo } from "@/components/shared/Seo";

const STEPS = [
  { step: "01", title: "Inquire", description: "Tell us your event, dates, and group size. We reply directly — no ticket queue, no bot." },
  { step: "02", title: "Fit", description: "We match you to the right home or walking-cluster combination for your group and budget." },
  { step: "03", title: "Confirm", description: "We lock in dates, send an agreement, and coordinate any concierge needs ahead of arrival." },
  { step: "04", title: "Arrive", description: "You're greeted, walked through the home, and handed a direct line for anything you need all week." },
];

export function HowItWorks() {
  return (
    <>
      <Seo
        title="How It Works — Booking Direct with 8888 Augusta"
        description="A simple, four-step process for booking a private Augusta home direct with the operator: inquire, fit, confirm, arrive."
        path="/how-it-works"
      />
      <section className="bg-brand-forest py-16">
        <div className="container-page">
          <p className="eyebrow">The process</p>
          <h1 className="mt-3 font-display text-4xl text-brand-cream sm:text-5xl">How it works.</h1>
          <p className="mt-4 max-w-xl text-brand-cream/70">
            Four steps, one point of contact, from your first message to the day you arrive.
          </p>
        </div>
      </section>

      <section className="bg-brand-cream py-16">
        <div className="container-page grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.step} className="rounded-2xl bg-white p-6 shadow-[var(--shadow-card)]">
              <span className="font-display text-3xl text-brand-gold">{s.step}</span>
              <h2 className="mt-3 font-display text-xl text-brand-ink">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-brand-ink/60">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="container-page mt-12">
          <Link to="/inquire" className="rounded-full bg-brand-forest px-7 py-3.5 text-sm font-semibold text-brand-cream">
            Start with an inquiry
          </Link>
        </div>
      </section>
    </>
  );
}