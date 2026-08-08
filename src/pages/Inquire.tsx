import { Seo } from "@/components/shared/Seo";
import { InquiryForm } from "@/components/shared/InquiryForm";

export function Inquire() {
  return (
    <>
      <Seo
        title="Request Availability — 8888 Masters"
        description="Request availability for a private Augusta home — Masters week, ANWA, Ironman, Peach Jam, private events, or a year-round stay. We reply directly."
        path="/inquire"
      />
      <section className="bg-brand-forest py-16">
        <div className="container-page">
          <p className="eyebrow">Talk to Chris directly</p>
          <h1 className="mt-3 font-display text-4xl text-brand-cream sm:text-5xl">
            Request Augusta availability.
          </h1>
          <p className="mt-4 max-w-xl text-brand-cream/70">
            Tell us your dates, group size, and what brings you to Augusta. We reply directly — no
            ticket queue, no bot.
          </p>
        </div>
      </section>

      <section className="bg-brand-cream py-16">
        <div className="container-page max-w-2xl">
          <InquiryForm />
        </div>
      </section>
    </>
  );
}
