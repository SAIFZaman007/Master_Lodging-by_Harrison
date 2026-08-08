import { InquiryForm } from "@/components/shared/InquiryForm";

export function RequestAvailabilitySection() {
  return (
    <section id="inquiry" className="bg-brand-cream-dark py-20">
      <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="eyebrow">Next step</p>
          <h2 className="mt-3 font-display text-3xl text-brand-ink sm:text-4xl">
            Request Augusta availability.
          </h2>
          <p className="mt-4 max-w-md text-brand-ink/60">
            For Masters week, ANWA, Ironman Augusta, Peach Jam, or a year-round stay. Tell us what
            you need and we'll respond directly.
          </p>
        </div>
        <InquiryForm />
      </div>
    </section>
  );
}
