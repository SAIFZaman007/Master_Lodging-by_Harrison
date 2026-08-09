import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import { useSiteInfo } from "@/hooks/useProperties";
import { formatPhoneDisplay, mailtoHref, telHref } from "@/lib/format";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/Motion";

const EXPLORE = [
  { to: "/portfolio", label: "Portfolio" },
  { to: "/events", label: "Events" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/local-info", label: "Local Info" },
];

const EVENTS = [
  { to: "/events/masters", label: "Masters Week" },
  { to: "/events/anwa", label: "ANWA" },
  { to: "/events/ironman", label: "Ironman 70.3" },
  { to: "/events/peach-jam", label: "Peach Jam" },
  { to: "/events/private-event", label: "Weddings & Private Events" },
];

export function Footer() {
  const { data: siteInfo } = useSiteInfo();
  const year = new Date().getFullYear();
  const phone = siteInfo?.phone ?? "+16024788888";
  const email = siteInfo?.email ?? "chris_stocks@yahoo.com";

  return (
    <footer className="relative overflow-hidden bg-brand-forest-dark text-brand-cream/70">
      {/* Closing CTA band — the last chance to convert before the link farm. */}
      <div className="border-b border-brand-cream/10">
        <div className="container-page py-16 sm:py-20">
          <Reveal className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <p className="font-display text-lg text-brand-gold italic">Still deciding?</p>
              <h2 className="mt-2 max-w-lg font-display text-[clamp(1.75rem,3.2vw,2.75rem)] leading-[1.1] text-brand-cream">
                Tell us the week. We'll tell you what's open.
              </h2>
            </div>
            <Link
              to="/inquire"
              className="group flex shrink-0 items-center gap-2 rounded-full bg-brand-gold px-8 py-4 text-sm font-semibold text-brand-forest-dark transition-transform duration-300 hover:scale-[1.03]"
            >
              Request availability
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>
      </div>

      <Stagger
        stagger={0.07}
        className="container-page grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8"
      >
        <StaggerItem className="lg:col-span-4">
          <div className="flex items-center gap-3">
            <img
              src="/assets/logo/logo.png"
              alt=""
              className="h-10 w-10 rounded-full ring-1 ring-brand-gold/30"
            />
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg text-brand-cream">8888 Augusta</span>
              <span className="mt-1 text-[9px] tracking-[0.26em] text-brand-gold/90 uppercase">
                The Augusta Operator
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            Private Augusta hosting for Masters week, other event weeks, and year-round stays.
            Twenty-four homes, one operator, booked direct.
          </p>
          <p className="mt-5 flex items-center gap-2 text-sm">
            <MapPin className="h-3.5 w-3.5 text-brand-gold/70" />
            Augusta, Georgia
          </p>
        </StaggerItem>

        <StaggerItem className="lg:col-span-2">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-brand-gold uppercase">
            Explore
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            {EXPLORE.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition-colors hover:text-brand-cream">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </StaggerItem>

        <StaggerItem className="lg:col-span-3">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-brand-gold uppercase">
            Event weeks
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            {EVENTS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition-colors hover:text-brand-cream">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </StaggerItem>

        <StaggerItem className="lg:col-span-3">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-brand-gold uppercase">
            Direct line
          </p>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a
                href={telHref(phone)}
                className="group flex items-center gap-2.5 transition-colors hover:text-brand-cream"
              >
                <Phone className="h-3.5 w-3.5 text-brand-gold/70" />
                <span className="font-display text-lg text-brand-cream">
                  {formatPhoneDisplay(phone)}
                </span>
              </a>
            </li>
            <li>
              <a
                href={mailtoHref(email)}
                className="flex items-center gap-2.5 break-all transition-colors hover:text-brand-cream"
              >
                <Mail className="h-3.5 w-3.5 shrink-0 text-brand-gold/70" />
                {email}
              </a>
            </li>
            <li className="text-brand-cream/45">Available 7 days · Augusta time</li>
          </ul>
        </StaggerItem>
      </Stagger>

      <div className="border-t border-brand-cream/10">
        <div className="container-page flex flex-col gap-4 py-7 text-xs text-brand-cream/45 lg:flex-row lg:items-center lg:justify-between">
          <p>&copy; {year} 8888 Augusta. All rights reserved.</p>
          <p className="max-w-2xl lg:text-right">
            Independent lodging portfolio. Not affiliated with or endorsed by Augusta National Golf
            Club or the Masters Tournament.{" "}
            <Link to="/attribution" className="underline transition-colors hover:text-brand-cream">
              Attribution
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}