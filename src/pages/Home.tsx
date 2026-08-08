import { Seo } from "@/components/shared/Seo";
import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { WhatYouGet } from "@/components/home/WhatYouGet";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { MapSection } from "@/components/home/MapSection";
import { ExploreAugustaTeaser } from "@/components/home/ExploreAugustaTeaser";
import { HostBio } from "@/components/home/HostBio";
import { RequestAvailabilitySection } from "@/components/home/RequestAvailabilitySection";

const HOME_JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": ["LodgingBusiness", "LocalBusiness"],
    name: "8888 Masters",
    description:
      "A private portfolio of 24 luxury homes near Augusta National in Augusta, Georgia. Full-service hosting for Masters Tournament week, ANWA, Ironman Augusta, Peach Jam, corporate hospitality, and year-round stays.",
    url: "https://8888masters.com",
    telephone: "+16024788888",
    email: "chris_stocks@yahoo.com",
    slogan: "The Augusta Operator",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Augusta",
      addressRegion: "GA",
      addressCountry: "US",
    },
    priceRange: "$$$$",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How is 8888 Masters different from booking on Airbnb or VRBO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "8888 Masters is a single-operator portfolio, not a marketplace. Every home is hosted directly by the same person — no anonymous listings, no third-party call center — so guests get real proximity guidance, vetted access, and full concierge support.",
        },
      },
      {
        "@type": "Question",
        name: "What events does 8888 Masters host for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Masters Tournament week, the Augusta National Women's Amateur (ANWA), Ironman 70.3 Augusta, Nike EYBL Peach Jam, private events like weddings and corporate retreats, and year-round stays including student housing near Augusta University.",
        },
      },
      {
        "@type": "Question",
        name: "How close are the homes to Augusta National Golf Club?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sixteen of the twenty-four homes sit in a walking cluster roughly 13 minutes on foot from the Augusta National gates. The remaining homes are located across greater Augusta, a short drive from the course.",
        },
      },
    ],
  },
];

export function Home() {
  return (
    <>
      <Seo
        title="8888 Masters — Private Augusta Golf Vacation Rentals Near Augusta National"
        description="A private portfolio of 24 luxury homes near Augusta National — booked direct, hosted in person. Masters week, ANWA, Ironman, Peach Jam, weddings, and year-round stays."
        path="/"
        image="/assets/hero/hero-1920.webp"
        jsonLd={HOME_JSON_LD}
      />
      <Hero />
      <Marquee />
      <WhatYouGet />
      <PortfolioSection />
      <MapSection />
      <ExploreAugustaTeaser />
      <HostBio />
      <RequestAvailabilitySection />
    </>
  );
}