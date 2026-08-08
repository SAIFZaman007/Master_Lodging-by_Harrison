import type { EventWeekSlug } from "@/api/types";

export interface ProofTile {
  label: string;
  value: string;
}

export interface EventConfig {
  slug: EventWeekSlug;
  navLabel: string;
  heroImage: string;
  eyebrow: string;
  headline: string;
  headlineEmphasis: string;
  lede: string;
  dates: string;
  ctaLabel: string;
  proofTiles: ProofTile[];
  /** Filter applied to the property grid on this page. */
  propertyFilter: { walking_cluster?: boolean; large_group?: boolean };
  faqs: { question: string; answer: string }[];
}

export const EVENTS: EventConfig[] = [
  {
    slug: "masters",
    navLabel: "Masters",
    heroImage: "/assets/galleries/1204-magnolia-dr/01-1400.webp",
    eyebrow: "The Masters Tournament",
    headline: "Your private Augusta —",
    headlineEmphasis: "for Masters week.",
    lede: "A curated portfolio of Augusta homes for the families, friend groups, executive teams, and patron parties who already know they're coming for Masters week. Walking-cluster proximity, vetted homes, full concierge — handled from inquiry to departure.",
    dates: "April 5–11, 2027",
    ctaLabel: "View Masters homes",
    proofTiles: [
      { label: "Walk to the gates", value: "~13 min" },
      { label: "Walking-cluster homes", value: "16" },
      { label: "Total portfolio", value: "24 homes" },
      { label: "Operator", value: "1 (Chris)" },
    ],
    propertyFilter: {},
    faqs: [
      {
        question: "How far in advance should I book Masters week housing?",
        answer:
          "Most of the walking-cluster inventory is reserved 9–12 months ahead of the tournament. Patron badge holders and returning corporate groups typically lock in their homes the week Masters wraps for the following year.",
      },
      {
        question: "What's included with a Masters-week booking?",
        answer:
          "Every 8888 Masters booking includes direct communication with the operator (not a call center), pre-arrival concierge planning, and access to vetted local vendors for catering, transport, and tee times.",
      },
    ],
  },
  {
    slug: "anwa",
    navLabel: "ANWA",
    heroImage: "/assets/galleries/2606-springwood-dr/02-1400.webp",
    eyebrow: "Augusta National Women's Amateur",
    headline: "The quiet week at",
    headlineEmphasis: "Augusta National.",
    lede: "Private Augusta homes for the families of invited amateurs, college coaches recruiting from the field, member-network patrons, and anyone who wants to walk Augusta National on the rare day it's open to the public. Our walking cluster is ~13 minutes on foot to the gates — the same walk you'd take for Masters week.",
    dates: "April 1–3, 2027",
    ctaLabel: "View ANWA-week homes",
    proofTiles: [
      { label: "Walk to the gates", value: "~13 min" },
      { label: "To the club entrance", value: "~1.1 mi" },
      { label: "Walking-cluster homes", value: "16" },
      { label: "Total portfolio", value: "24 homes" },
    ],
    propertyFilter: {},
    faqs: [
      {
        question: "Is ANWA final-round access included with lodging?",
        answer:
          "Lodging is separate from tournament access. We can point you toward official ANWA ticketing channels, but the home booking itself covers housing and hosting only.",
      },
    ],
  },
  {
    slug: "ironman",
    navLabel: "Ironman 70.3",
    heroImage: "/assets/galleries/2442-riverlook-dr/01-1400.webp",
    eyebrow: "Ironman 70.3 Augusta",
    headline: "Race weekend lodging,",
    headlineEmphasis: "walking-close to the start.",
    lede: "Private Augusta homes for athletes, families, support crews, and tri-club groups racing Ironman 70.3 Augusta. Our walking cluster sits ~3.5 miles from the swim start at SRP Park — close enough to roll a bike to transition the morning of, far enough to actually sleep the night before.",
    dates: "September 25–27, 2027",
    ctaLabel: "View race-weekend homes",
    proofTiles: [
      { label: "To the swim start", value: "~3.5 mi" },
      { label: "Bike course length", value: "56 mi" },
      { label: "Run course length", value: "13.1 mi" },
      { label: "Walking-cluster homes", value: "16" },
    ],
    propertyFilter: {},
    faqs: [
      {
        question: "Can groups book multiple homes together for a tri-club?",
        answer:
          "Yes — this is exactly what the walking cluster was built for. Message Chris directly with your group size and we'll map out which combination of homes keeps everyone within a few minutes' walk of each other.",
      },
    ],
  },
  {
    slug: "peach-jam",
    navLabel: "Peach Jam",
    heroImage: "/assets/galleries/2706-wicklow-dr/01-1400.webp",
    eyebrow: "Nike EYBL Peach Jam",
    headline: "Tournament-week lodging,",
    headlineEmphasis: "walking-close to the gym.",
    lede: "Private Augusta homes for the AAU teams, families, coaches, and scouts headed to Riverview Park for Peach Jam week. Our walking cluster sits 1.9 miles from the activities center — close enough to run a team van between sessions, quiet enough for HS players to actually sleep between games.",
    dates: "July 13–18, 2027",
    ctaLabel: "View tournament-week homes",
    proofTiles: [
      { label: "To Riverview Park", value: "1.9 mi" },
      { label: "Drive time", value: "~6 min" },
      { label: "Large-group homes", value: "12+ guest options" },
      { label: "Walking-cluster homes", value: "16" },
    ],
    propertyFilter: { large_group: true },
    faqs: [
      {
        question: "Do you coordinate team-van transport between the houses and the venue?",
        answer:
          "We can put you in touch with the same local transport vendors we use for Masters-week corporate groups — useful for teams running multiple sessions a day between the cluster and Riverview Park.",
      },
    ],
  },
  {
    slug: "private-event",
    navLabel: "Private Events",
    heroImage: "/assets/galleries/2402-wilkshire-dr/01-1400.webp",
    eyebrow: "Weddings & special occasions",
    headline: "The gatherings you only do once,",
    headlineEmphasis: "hosted in Augusta.",
    lede: "Weddings, milestone birthdays, anniversaries, corporate retreats, family reunions, bachelor & bachelorette weekends. The same hosting desk that runs Masters week, turned toward the moments that matter most. One phone call. Every detail handled.",
    dates: "Year-round, by request",
    ctaLabel: "Plan your event",
    proofTiles: [
      { label: "Event types hosted", value: "6+" },
      { label: "Vendors on call", value: "Caterers, florists, transport" },
      { label: "Total portfolio", value: "24 homes" },
      { label: "Operator", value: "1 (Chris)" },
    ],
    propertyFilter: {},
    faqs: [
      {
        question: "Can a wedding party book several homes as one block?",
        answer:
          "Yes. Tell us your guest count and we'll recommend a walking-cluster combination — or a single large-group home — so the wedding party stays together.",
      },
    ],
  },
  {
    slug: "student-living",
    navLabel: "Student Living",
    heroImage: "/assets/galleries/921-avocado-st/01-1400.webp",
    eyebrow: "Augusta University · AU Health",
    headline: "A real home near campus.",
    headlineEmphasis: "Not a dorm.",
    lede: "Private Augusta homes leased year-round to Augusta University's medical, dental, and nursing students — plus traveling nurses and hospital staff — who want to live like adults instead of stacking roommates into a 200 sq ft cinderblock. There's one catch — one week a year — and in exchange, you get an entire month rent-free.",
    dates: "Year-round leases",
    ctaLabel: "How the deal works",
    proofTiles: [
      { label: "Rent-free month", value: "1 / year" },
      { label: "The catch", value: "Out during Masters week" },
      { label: "Lease term", value: "12 months" },
      { label: "Near AU Health", value: "Multiple homes" },
    ],
    propertyFilter: {},
    faqs: [
      {
        question: "What's the 'one week a year' catch?",
        answer:
          "Tenants relocate for Masters week each April so the home can host tournament guests — and receive a full month of free rent in exchange. Everything else about the lease works like a normal year-round rental.",
      },
    ],
  },
];

export function getEventBySlug(slug: string | undefined): EventConfig | undefined {
  return EVENTS.find((e) => e.slug === slug);
}
