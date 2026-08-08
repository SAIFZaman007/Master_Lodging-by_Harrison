import { motion } from "motion/react";
import { Home, ShieldCheck, Star, PhoneCall } from "lucide-react";

const FEATURES = [
  {
    icon: Home,
    title: "Near-course proximity",
    description: "An 16-home walking cluster ~13 minutes from the gates — keep your whole group together, steps from Augusta National.",
  },
  {
    icon: PhoneCall,
    title: "Hosted end to end",
    description: "No marketplace inbox, no mystery host. The person you call runs the booking, the home, and the concierge.",
  },
  {
    icon: ShieldCheck,
    title: "Vetted both ways",
    description: "We know the homes and we know the guests. Every booking is qualified on both sides — privacy guaranteed.",
  },
  {
    icon: Star,
    title: "Full concierge",
    description: "Catering, transport, tee times, restaurant bookings, on-site staff arranged before you arrive, handled all week.",
  },
];

export function WhatYouGet() {
  return (
    <section className="bg-white py-20">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Booked direct with 8888</p>
          <h2 className="mt-3 font-display text-3xl text-brand-ink sm:text-4xl">
            What you get that Airbnb can't give you.
          </h2>
          <p className="mt-4 text-brand-ink/60">
            Only guests who book direct with us get the full Augusta experience — the proximity,
            the access, and a real host who runs the home, the calendar, and the week.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-cream-dark text-brand-forest">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg text-brand-ink">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-ink/60">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
