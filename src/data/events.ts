import type { EventWeekSlug } from "@/api/types";
import type { PropertyFilters } from "@/hooks/useProperties";

export interface ProofTile {
  label: string;
  value: string;
}

export interface Pillar {
  number: string;
  title: string;
  body: string;
}

export interface AudienceItem {
  title: string;
  body: string;
}

export interface GalleryImage {
  src: string;
  caption: string;
}

export interface Step {
  step: string;
  title: string;
  body: string;
}

export interface VenueItem {
  category: string;
  name: string;
  body: string;
}

/** A secondary highlight band — used for corporate/multi-year packages on the
 * bigger event weeks, and repurposed for the ANWA + Masters extended-stay pitch. */
export interface HighlightBlock {
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
  ctaLabel: string;
  stats: ProofTile[];
}

export interface EventConfig {
  slug: EventWeekSlug;
  navLabel: string;
  /** Event-specific photography — used for both the EventsHub tile *and* the
   * page hero. Deliberately never a property/gallery photo (see EventsHub). */
  heroImage: string;
  heroImageAlt: string;
  eyebrow: string;
  headline: string;
  headlineEmphasis: string;
  lede: string;
  dates: string;
  ctaLabel: string;
  secondaryCtaLabel: string;
  proofTiles: ProofTile[];
  /** Filter applied to the property grid on this page. */
  propertyFilter: PropertyFilters;
  whyUs?: { eyebrow: string; title: string; body: string; pillars: Pillar[] };
  gallery?: { eyebrow: string; title: string; images: GalleryImage[] };
  howItWorks?: { eyebrow: string; title: string; body: string; steps: Step[] };
  highlight?: HighlightBlock;
  audience?: { eyebrow: string; title: string; body: string; items: AudienceItem[] };
  venues?: { eyebrow: string; title: string; body: string; items: VenueItem[] };
  testimonial?: { quote: string; cite: string };
  faqs: { question: string; answer: string }[];
  /** Photo-credit note rendered under the hero — see /attribution for full detail. */
  imageCredit?: string;
}

export const EVENTS: EventConfig[] = [
  {
    slug: "masters",
    navLabel: "Masters",
    heroImage: "/assets/events/masters/hero.webp",
    heroImageAlt: "Augusta National Golf Club during Masters Tournament week",
    eyebrow: "Masters week 2027 · April 5–11",
    headline: "Your private Augusta —",
    headlineEmphasis: "for Masters week.",
    lede: "A curated portfolio of Augusta homes for the families, friend groups, executive teams, and patron parties who already know they're coming for Masters week. Walking-cluster proximity, vetted homes, full concierge — handled from inquiry to departure.",
    dates: "April 5–11, 2027",
    ctaLabel: "View Masters homes",
    secondaryCtaLabel: "Request 2027 availability",
    proofTiles: [
      { label: "Walk to the gates", value: "~13 min" },
      { label: "Walking-cluster homes", value: "16" },
      { label: "Total portfolio", value: "24 homes" },
      { label: "Operator", value: "1 (Chris)" },
    ],
    propertyFilter: {},
    imageCredit: "Augusta National Golf Club, 2013 — Dan Perry, CC BY 2.0 (Wikimedia Commons)",
    whyUs: {
      eyebrow: "Why 8888 Augusta for Masters week",
      title: "Masters week is not the week to wing it.",
      body: "Availability collapses 18 months out. Prices double. Marketplace hosts go quiet the moment they're needed most. Patrons who treat Masters week as just another rental booking end up scrambling — the people who know better book with a private operator.",
      pillars: [
        { number: "01", title: "Every detail handled", body: "Inquire, confirm, arrive. The person you book with is the same person running the home, the calendar, and your concierge needs during the week." },
        { number: "02", title: "Walking to the gates", body: "Most homes sit inside a 16-house walking cluster — averaging ~13 minutes on foot to the patron gates at Augusta National." },
        { number: "03", title: "The week, handled", body: "Catering, transportation, tee times, restaurant reservations, on-site setup. Masters week is a logistics puzzle. We solve it before you land." },
      ],
    },
    gallery: {
      eyebrow: "Masters week · Augusta National",
      title: "What Masters week looks like.",
      images: [
        { src: "/assets/events/masters/gallery-1.webp", caption: "Augusta National in tournament condition" },
        { src: "/assets/events/masters/gallery-2.webp", caption: "The back nine, the toughest stretch in golf" },
        { src: "/assets/events/masters/gallery-3.webp", caption: "Azaleas in bloom — Augusta every April" },
        { src: "/assets/events/masters/gallery-4.webp", caption: "The gallery, patron-side" },
      ],
    },
    howItWorks: {
      eyebrow: "How Masters week works with us",
      title: "Four steps. Every detail handled.",
      body: "From the first call to the day you walk through the gates, the same person you spoke to is running the home, the calendar, and the concierge. No hand-off, no other inbox, no chasing.",
      steps: [
        { step: "01", title: "Inquire", body: "Tell us your group, your dates, and what kind of home you want for Masters week. Phone, email, or the inquiry form." },
        { step: "02", title: "We match & confirm", body: "We propose homes that fit, vet your group, lock the dates, and send a clean booking confirmation — usually within 48 hours." },
        { step: "03", title: "We prep the week", body: "Pre-arrival concierge: catering, transportation, tee times, restaurant reservations, household setup, any VIP needs." },
        { step: "04", title: "You arrive hosted", body: "Walk in. Everything's ready for Masters week. Anything you need during the tournament, one phone call away." },
      ],
    },
    highlight: {
      eyebrow: "Corporate & sponsor contracts",
      title: "Multi-year Masters-week packages.",
      body: "Several of our 2027 Masters homes are already locked under corporate contracts. We build repeatable, multi-year hosting partnerships for sponsors, sales teams, and client-entertainment programs that come back to Augusta every April.",
      bullets: [
        "Block multiple homes inside the walking cluster",
        "Same homes year after year — your team gets to know the space",
        "Concierge handled across all units",
        "Custom packages: catering, transport, tee times, on-site staff",
      ],
      ctaLabel: "Discuss a Masters-week contract",
      stats: [
        { label: "homes on corporate contract already", value: "6" },
        { label: "homes available in the walking cluster", value: "11" },
        { label: "operator across every home and detail", value: "1" },
      ],
    },
    audience: {
      eyebrow: "Who books Masters week with us",
      title: "Hosting for many kinds of Masters groups.",
      body: "From single-home families to multi-home corporate clusters — the homes, the hosting, and the standard stay the same.",
      items: [
        { title: "Families & friend groups", body: "Plan Masters week the way you'd plan a family trip — without juggling messages and hoping the host shows up." },
        { title: "Patron parties", body: "For badge-holders bringing friends, clients, or family. We host the side of the week that isn't inside the ropes." },
        { title: "Executive & client teams", body: "Private homes for leadership, clients, and partners who need privacy, proximity, and predictable hosting." },
        { title: "Sponsors & sales orgs", body: "Multi-home packages for entertaining customers, partners, and prospects during the highest-stakes week in golf." },
        { title: "Members & member guests", body: "For guests who already know Augusta and want the rental side handled with the same standard as everything else." },
      ],
    },
    testimonial: {
      quote: "Easiest Masters week we've ever booked. One call, every detail handled, and the house was exactly what was promised.",
      cite: "Corporate sponsor group · Masters 2026 · 14-guest walking-cluster stay",
    },
    faqs: [
      {
        question: "How far in advance should I book Masters week housing?",
        answer: "Most of the walking-cluster inventory is reserved 9–12 months ahead of the tournament. Patron badge holders and returning corporate groups typically lock in their homes the week Masters wraps for the following year.",
      },
      {
        question: "What's included with a Masters-week booking?",
        answer: "Every 8888 Augusta booking includes direct communication with the operator (not a call center), pre-arrival concierge planning, and access to vetted local vendors for catering, transport, and tee times.",
      },
    ],
  },
  {
    slug: "anwa",
    navLabel: "ANWA",
    heroImage: "/assets/events/anwa/hero.webp",
    heroImageAlt: "Golf course fairway at dawn during ANWA week in Augusta",
    eyebrow: "Augusta National Women's Amateur · March 31 – April 3",
    headline: "The quiet week at",
    headlineEmphasis: "Augusta National.",
    lede: "Private Augusta homes for the families of invited amateurs, college coaches recruiting from the field, member-network patrons, and anyone who wants to walk Augusta National on the rare day it's open to the public. Our walking cluster is ~13 minutes on foot to the gates — the same walk you'd take for Masters week.",
    dates: "March 31 – April 3, 2027",
    ctaLabel: "View ANWA-week homes",
    secondaryCtaLabel: "Request 2027 availability",
    proofTiles: [
      { label: "Walk to the gates", value: "~13 min" },
      { label: "Free public day", value: "Saturday" },
      { label: "Championship days", value: "4" },
      { label: "Field size", value: "72 players" },
    ],
    propertyFilter: {},
    imageCredit: "Stock photography, free commercial license — swap for host-supplied photos before public launch",
    whyUs: {
      eyebrow: "Why 8888 Augusta for ANWA",
      title: "The week before the storm. The right way to come to Augusta.",
      body: "ANWA week is Augusta at its best and quietest — spring foliage, smaller crowds, the course in the same condition Masters competitors will see four days later. It's also the only week Augusta National opens its gates to the public for free.",
      pillars: [
        { number: "01", title: "Walking distance to the gates", body: "Our walking cluster is ~13 minutes on foot to the same patron gates Masters guests use the following week. For families watching a daughter, niece, or granddaughter compete, that proximity matters." },
        { number: "02", title: "The free Saturday inside ANGC", body: "Saturday's final round is free and open to the public — the rarest entry ticket in golf. Stay with us and your group walks to it. No traffic, no parking, no early-morning logistics." },
        { number: "03", title: "Same homes, quieter week", body: "Same portfolio, same hosting, same operator — but at ANWA pricing instead of Masters pricing. Many of our repeat Masters guests come back for ANWA to host extended family." },
      ],
    },
    gallery: {
      eyebrow: "ANWA week · spring at Augusta",
      title: "What the week looks like.",
      images: [
        { src: "/assets/events/anwa/gallery-1.webp", caption: "The world's top women amateurs · 72-player field" },
        { src: "/assets/events/anwa/gallery-2.webp", caption: "Championship-condition course · early April" },
        { src: "/assets/events/anwa/gallery-3.webp", caption: "Azaleas in bloom — Augusta's spring signature" },
        { src: "/assets/events/anwa/gallery-4.webp", caption: "The walk · free Saturday inside ANGC" },
      ],
    },
    howItWorks: {
      eyebrow: "How ANWA week works with us",
      title: "Four days. Every detail handled.",
      body: "Many of the families we host at ANWA are first-time Augusta visitors — sometimes the player's only trip before her college season. We handle the logistics so the family can focus on watching her play.",
      steps: [
        { step: "01", title: "Inquire", body: "Tell us your group. Player's family? Coach scouting? Member-network patron group? Each profile gets a slightly different home recommendation." },
        { step: "02", title: "We match & confirm", body: "We propose a home that fits your group, lock the dates, and send a clean confirmation. For international families, we coordinate around arrival logistics." },
        { step: "03", title: "We prep the week", body: "Transport between Champions Retreat and the cluster, the walk to ANGC for the final round, restaurant reservations, catering for family gatherings." },
        { step: "04", title: "You arrive hosted", body: "Walk in. Everything's ready. Whether your week ends Saturday or you stay through the Masters that follows, we run the logistics." },
      ],
    },
    highlight: {
      eyebrow: "ANWA + Masters extended stays",
      title: "Stay through both weeks.",
      body: "ANWA ends Saturday, Masters practice rounds start the following Monday. For families who want both — daughter plays ANWA, parents stay through the Masters — we coordinate the extended week as one continuous booking. Same home, same operator, no checkout in between.",
      bullets: [
        "Block a home from the Tuesday before ANWA through the Masters final Sunday",
        "Same hosting standard across both weeks",
        "We run ANWA logistics and Masters logistics",
        "Pricing structured around the dual-week stay",
      ],
      ctaLabel: "Discuss an ANWA + Masters stay",
      stats: [
        { label: "days, ANWA through the Masters final", value: "12" },
        { label: "homes inside the walking cluster", value: "11" },
        { label: "operator across both championships", value: "1" },
      ],
    },
    audience: {
      eyebrow: "Who books ANWA with us",
      title: "Families. Coaches. Patrons. First-time visitors.",
      body: "ANWA week brings a smaller, quieter, more international crowd to Augusta than Masters week. Same homes, same hosting standard — tuned per group.",
      items: [
        { title: "Families of invitees", body: "One of the invited amateurs is yours. Parents, siblings, grandparents, the coach who got her here — all under one roof, walking distance to where she plays." },
        { title: "International families", body: "For families flying in from Europe, Asia, or South America to watch a daughter play. We handle ground transport, dietary accommodations, and first-U.S.-trip logistics." },
        { title: "College golf coaches", body: "Private home base for a recruiting trip. The field is the densest concentration of college-bound talent on the calendar — you need a base, not a hotel lobby." },
        { title: "Member-network patrons", body: "For patrons who already know Augusta and want the rental side handled with the same standard as the rest of their week — at ANWA pricing, not Masters pricing." },
        { title: "First-time ANGC visitors", body: "For anyone who wants the rare public Saturday inside Augusta National. We host the rest of the week — the airport pickup, the walk to the gate, the restaurant after." },
      ],
    },
    faqs: [
      {
        question: "Is ANWA final-round access included with lodging?",
        answer: "Lodging is separate from tournament access. We can point you toward official ANWA ticketing channels, but the home booking itself covers housing and hosting only.",
      },
      {
        question: "Can we book ANWA and Masters week as one continuous stay?",
        answer: "Yes — see the extended-stay option above. Tell us you want both weeks and we'll structure it as a single booking with one check-in and one check-out.",
      },
    ],
  },
  {
    slug: "ironman",
    navLabel: "Ironman 70.3",
    heroImage: "/assets/events/ironman/hero.webp",
    heroImageAlt: "Cyclist on the Ironman 70.3 Augusta bike course",
    eyebrow: "Ironman 70.3 Augusta · September 27",
    headline: "Race weekend lodging,",
    headlineEmphasis: "walking-close to the start.",
    lede: "Private Augusta homes for athletes, families, support crews, and tri-club groups racing Ironman 70.3 Augusta. Our walking cluster sits a short drive from the swim start at the Savannah River — close enough to load a bike the morning of, far enough to actually sleep the night before.",
    dates: "September 27, 2026",
    ctaLabel: "View race-weekend homes",
    secondaryCtaLabel: "Request 2026 availability",
    proofTiles: [
      { label: "Swim", value: "1.2 mi" },
      { label: "Bike", value: "56 mi" },
      { label: "Run", value: "13.1 mi" },
      { label: "Walking-cluster homes", value: "16" },
    ],
    propertyFilter: {},
    imageCredit: "Stock photography, free commercial license — swap for host-supplied photos before public launch",
    whyUs: {
      eyebrow: "Why 8888 Augusta for race weekend",
      title: "Race-weekend lodging isn't a regular rental stay.",
      body: "You need a bike-safe garage. You need to sleep well the night before. You need to know your family can walk to the finish line. You need someone who picks up the phone at 5 a.m. when something breaks. Most rentals aren't built for any of that — we are.",
      pillars: [
        { number: "01", title: "Built for bike storage", body: "Garages, bike-friendly entry, and indoor staging space. No fighting a marketplace host about where your tri bike sleeps the night before race day." },
        { number: "02", title: "Walking distance to spectating", body: "Our cluster sits within a short ride of the Savannah River swim start and walking distance to the downtown Riverwalk where the run, transition, and finish line all sit." },
        { number: "03", title: "Hosted all race weekend", body: "Catering, transport, early breakfast, late checkouts after the race, recovery setup — handled by the same person who booked you in." },
      ],
    },
    gallery: {
      eyebrow: "Race day · 70.3 Augusta",
      title: "What the weekend looks like.",
      images: [
        { src: "/assets/events/ironman/gallery-1.webp", caption: "1.2 mi swim · current-assisted downriver" },
        { src: "/assets/events/ironman/gallery-2.webp", caption: "13.1 mi run · Greeneway & Riverwalk" },
        { src: "/assets/events/ironman/gallery-3.webp", caption: "Finish · downtown Augusta" },
        { src: "/assets/events/ironman/gallery-4.webp", caption: "56 mi bike · rolling Aiken County loop" },
      ],
    },
    howItWorks: {
      eyebrow: "How race weekend works with us",
      title: "From inquiry to finish line.",
      body: "We know what athletes need — sleep, garage, bike-safe entry, predictable breakfast — and what families need: a place close to the finish, room for kids, knowing where to stand at mile 10.",
      steps: [
        { step: "01", title: "Tell us your race weekend", body: "Most groups stay Thursday or Friday through Monday — tell us your dates, group size, and whether you're racing or supporting." },
        { step: "02", title: "We match the home", body: "Bike storage, kitchen for athlete nutrition, room for kids and crew. We propose a home that actually fits race weekend, not just a generic listing." },
        { step: "03", title: "We handle the logistics", body: "Bike transport to transition, race-morning ride to the swim start, breakfast at 4:30 a.m. when nothing else is open, spectator transport." },
        { step: "04", title: "Race day, on call", body: "If anything breaks on race weekend — flat tire, cold breakfast, lost wetsuit — call us. We're not a marketplace. We're the operator." },
      ],
    },
    highlight: {
      eyebrow: "Tri-clubs & team bookings",
      title: "Multi-home packages for race weekend.",
      body: "Hosting a tri-club, training group, sponsor team, or sales org racing 70.3 Augusta? Block multiple homes inside the walking cluster and we'll run the entire weekend — bike logistics, group breakfasts, race-morning transport, after-party space.",
      bullets: [
        "Block 3–16 homes inside the walking cluster",
        "Bike-friendly garages, indoor staging, mechanic-on-call",
        "Group catering before and after the race",
        "Race-morning shuttle to the swim start",
      ],
      ctaLabel: "Discuss a team booking",
      stats: [
        { label: "homes inside the walking cluster", value: "11" },
        { label: "to the swim start", value: "short drive" },
        { label: "operator handling everything race weekend", value: "1" },
      ],
    },
    audience: {
      eyebrow: "Who books race weekend with us",
      title: "Athletes. Families. Tri-clubs. Support crews.",
      body: "Race weekend is a logistics puzzle harder than any other weekend in Augusta. Same homes, same hosting standard — purpose-built for it.",
      items: [
        { title: "Athletes & partners", body: "The athlete needs sleep and a garage for the bike. The partner needs a room that doesn't smell like chamois cream. We host both well." },
        { title: "Athletes traveling with kids", body: "Race weekend with a family is a different sport. Crib, high chair, kid-friendly kitchen, walking distance to the finish. Done it before." },
        { title: "Tri-clubs & training groups", body: "Block multiple homes in the walking cluster. We run group breakfasts, bike logistics, race-morning shuttle, and the after-party." },
        { title: "Support crews & coaches", body: "Coaches, mechanics, photographers, family — staying near the athlete without sharing the athlete's pre-race anxiety." },
        { title: "Repeat 70.3 athletes", body: "You know what you need by year three. So do we. Roll in, race, recover, roll out — without explaining anything twice." },
      ],
    },
    faqs: [
      {
        question: "Can groups book multiple homes together for a tri-club?",
        answer: "Yes — this is exactly what the walking cluster was built for. Message us directly with your group size and we'll map out which combination of homes keeps everyone within a few minutes' walk of each other.",
      },
    ],
  },
  {
    slug: "peach-jam",
    navLabel: "Peach Jam",
    heroImage: "/assets/events/peach-jam/hero.webp",
    heroImageAlt: "Nike EYBL Peach Jam basketball tournament action in North Augusta",
    eyebrow: "Nike EYBL Peach Jam · July 13–18",
    headline: "Tournament-week lodging,",
    headlineEmphasis: "walking-close to the gym.",
    lede: "Private Augusta homes for the AAU teams, families, coaches, and scouts headed to Riverview Park for Peach Jam week. Our walking cluster sits close enough to run a team van between sessions, quiet enough for HS players to actually sleep between games.",
    dates: "July 13–18, 2027",
    ctaLabel: "View tournament-week homes",
    secondaryCtaLabel: "Request 2027 availability",
    proofTiles: [
      { label: "To Riverview Park", value: "1.9 mi" },
      { label: "Drive time", value: "~6 min" },
      { label: "Large-group homes", value: "12+ guests" },
      { label: "Walking-cluster homes", value: "16" },
    ],
    propertyFilter: { large_group: true },
    imageCredit: "Stock photography, free commercial license — swap for host-supplied photos before public launch",
    whyUs: {
      eyebrow: "Why 8888 Augusta for Peach Jam",
      title: "Tournament week is not a hotel week.",
      body: "Twelve players, two coaches, three parents, a trainer, and a couple of scouts shouldn't be split across four hotel rooms on different floors. They need a house. Sometimes two. Game-film space. A real kitchen for team breakfast. A quiet bedroom for the player who has to be sharp at 9am.",
      pillars: [
        { number: "01", title: "A house, not a hotel block", body: "Team breakfast in a real kitchen. Film review in a living room. Bedrooms with doors that actually close. Players, coaches, and family under one roof." },
        { number: "02", title: "Walking close to the gym", body: "Our cluster is about 1.9 miles from Riverview Park — roughly 6 minutes by van. Players who lose 45 minutes in tournament-week traffic from a hotel across town arrive cold. Ours arrive ready." },
        { number: "03", title: "Hosted all tournament week", body: "Catering, transport, ice baths, late-night court access for shootarounds — handled by the same person who booked you in. Coaches don't need another inbox during Peach Jam." },
      ],
    },
    gallery: {
      eyebrow: "Tournament week · Peach Jam",
      title: "What the week looks like.",
      images: [
        { src: "/assets/events/peach-jam/gallery-1.webp", caption: "Free-throw moment · pool play" },
        { src: "/assets/events/peach-jam/gallery-2.webp", caption: "Tournament action · Riverview Park" },
        { src: "/assets/events/peach-jam/gallery-3.webp", caption: "Team energy · between sessions" },
        { src: "/assets/events/peach-jam/gallery-4.webp", caption: "The moment scouts come for" },
      ],
    },
    howItWorks: {
      eyebrow: "How tournament week works with us",
      title: "From first inquiry to final whistle.",
      body: "Peach Jam is six days and a dozen games. Teams that arrive prepared play differently. Same homes, same hosting standard — tuned to the rhythm of a tournament week instead of a vacation.",
      steps: [
        { step: "01", title: "Tell us your team", body: "Player count, coach count, family travelers, scouts joining. The earlier we lock the homes, the better the side-by-side block." },
        { step: "02", title: "We block the homes", body: "For most Peach Jam groups, 2–3 walking-cluster homes side by side. Team house, coach/family house, optional third for scouts or sponsors." },
        { step: "03", title: "We prep tournament logistics", body: "Team-van parking, game-film projector setup, daily team breakfast, ice baths or recovery, transport to Riverview Park." },
        { step: "04", title: "Game-week, on call", body: "If a player gets sick, a van breaks down, or the team needs late-night court time for a walkthrough — call us." },
      ],
    },
    highlight: {
      eyebrow: "Team blocks & sponsor packages",
      title: "Multi-home blocks for Peach Jam.",
      body: "Hosting a program with multiple teams? An AAU organization bringing 3+ age groups? A shoe-company sponsorship tour? Block multiple homes inside the walking cluster and we'll run the entire week — vans, breakfasts, film rooms, ice baths, and after-game space.",
      bullets: [
        "Block 2–5 homes side by side in the walking cluster",
        "Team-van parking, indoor staging, film-room setup",
        "Group breakfasts & team dinners coordinated",
        "Optional vans to Riverview Park session by session",
      ],
      ctaLabel: "Discuss a team block",
      stats: [
        { label: "homes inside the walking cluster", value: "11" },
        { label: "to Riverview Park Activities Center", value: "1.9 mi" },
        { label: "operator handling the whole tournament week", value: "1" },
      ],
    },
    audience: {
      eyebrow: "Who books Peach Jam with us",
      title: "AAU teams. Families. Coaches. Scouts.",
      body: "Tournament week brings the entire grassroots basketball world to a few square miles of North Augusta. Same homes, same hosting — tuned per group.",
      items: [
        { title: "AAU teams & programs", body: "One house for players, one for coaches and parents. Team breakfast, film space, recovery setup. Everyone walks out the door together on game day." },
        { title: "HS players & families", body: "For individual players invited without a full team booking. Private home for the family, quiet bedroom for the player, walking to the gym." },
        { title: "College coaches", body: "Private home base for a recruiting trip. Discreet, comfortable, walkable — not a hotel lobby where every coach in the country sees who you're with." },
        { title: "NBA & agency scouts", body: "Privacy and proximity in equal measure. Get to the gym fast, get back fast, no shared elevators with the people you're evaluating." },
        { title: "Sponsors & sneaker brands", body: "Multi-home packages for hospitality, athlete meetings, media days, and after-tournament events." },
      ],
    },
    faqs: [
      {
        question: "Do you coordinate team-van transport between the houses and the venue?",
        answer: "We can put you in touch with the same local transport vendors we use for Masters-week corporate groups — useful for teams running multiple sessions a day between the cluster and Riverview Park.",
      },
    ],
  },
  {
    slug: "private-event",
    navLabel: "Weddings & Private Events",
    heroImage: "/assets/events/private/hero.webp",
    heroImageAlt: "Bride and groom holding a bouquet at golden hour, backlit by evening sun",
    eyebrow: "Custom & private events · By request, year-round",
    headline: "The gatherings you only do once,",
    headlineEmphasis: "hosted in Augusta.",
    lede: "Weddings, milestone birthdays, anniversaries, corporate retreats, family reunions, bachelor & bachelorette weekends. The same hosting desk that runs Masters week, turned toward the moments that matter most. One phone call. Every detail handled.",
    dates: "Year-round, by request",
    ctaLabel: "Plan your event",
    secondaryCtaLabel: "Talk to Chris directly",
    proofTiles: [
      { label: "Augusta homes", value: "24+" },
      { label: "Operator, end-to-end", value: "One" },
      { label: "Walking cluster available", value: "16-home" },
      { label: "Event types hosted", value: "6+" },
    ],
    propertyFilter: {},
    imageCredit: "Photography courtesy of the host — used with permission",
    whyUs: {
      eyebrow: "Why book your event with us",
      title: "You're not renting a house. You're hiring a host.",
      body: "Anyone can list a home. Hosting an event — when the photographer needs a staging room, the caterer needs the kitchen prepped, and grandparents need a quiet bedroom on the first floor — is a different job. That's the job we do.",
      pillars: [
        { number: "01", title: "The right home for the moment", body: "A bridal-party house needs different bones than a corporate retreat or a milestone-birthday family weekend. We know which homes have the lawn, the kitchen, the bedroom count, and the parking your event needs — and we'll tell you honestly which ones don't." },
        { number: "02", title: "Walking-distance clusters", body: "Sixteen homes inside one Augusta walking radius. Put the wedding party in one, parents and grandparents next door, friends down the block, and the rehearsal dinner on a shared lawn. Nobody driving home after the toasts." },
        { number: "03", title: "Vendors who know the houses", body: "Catering, florals, transportation, private chefs, photography, day-of coordination — local partners we've worked with for years. They know which doorway the catering tables fit through." },
      ],
    },
    gallery: {
      eyebrow: "Private events · weddings & celebrations",
      title: "The moments we host.",
      images: [
        { src: "/assets/events/private/gallery-1.webp", caption: "Private-chef dinners & rehearsal nights" },
        { src: "/assets/events/private/gallery-2.webp", caption: "The details that make it a wedding, not just a weekend" },
      ],
    },
    audience: {
      eyebrow: "Events we host well",
      title: "If it's a gathering that matters, we can host it.",
      body: "Single-home or multi-home blocks, hosted start to finish by the same person you called on day one.",
      items: [
        { title: "Weddings & rehearsal weekends", body: "Bridal-party homes, parents-of suites, rehearsal dinners, ceremony lawns. Single-home or multi-home blocks." },
        { title: "Milestone birthdays & anniversaries", body: "50th, 60th, 70th, 80th. Multi-generational family weekends with the right bedrooms in the right places." },
        { title: "Corporate retreats & offsites", body: "Executive teams, board weekends, partner offsites. Working spaces by day, a private chef and quiet bedrooms by night." },
        { title: "Family reunions & bachelor/bachelorette", body: "Big extended families across two or three houses, or a group of friends in a single near-course home. Group transportation arranged." },
      ],
    },
    venues: {
      eyebrow: "Planning the wedding itself",
      title: "Augusta's best wedding venues.",
      body: "We don't pick your venue — but our guests almost always need one. Here are the Augusta-area venues couples book most. Stay with us; celebrate at any of these.",
      items: [
        { category: "Downtown · Historic landmark", name: "Sacred Heart Cultural Center", body: "A restored late-1800s Romanesque church turned showpiece event venue — Augusta's most recognizable wedding backdrop." },
        { category: "Harrisburg · Canal-side mill", name: "Enterprise Mill", body: "Restored 19th-century textile mill on the Augusta Canal — industrial-elegant ceremony and reception space." },
        { category: "Summerville · Historic hotel", name: "The Partridge Inn", body: "Iconic 1890s Southern hotel with wrap-around verandas — full-service weddings and receptions." },
        { category: "Martinez · Riverfront pavilion", name: "Savannah Rapids Pavilion", body: "Overlooking the Savannah Rapids and canal headgates — indoor/outdoor ceremonies with a water view." },
        { category: "Downtown · Riverfront ballroom", name: "Augusta Marriott at the Convention Center", body: "Riverfront hotel ballrooms on the Savannah River — larger receptions and out-of-town guest blocks." },
        { category: "Downtown · Museum venue", name: "Augusta Museum of History", body: "A distinctive near-riverfront venue for ceremonies and receptions with a sense of place." },
      ],
    },
    faqs: [
      {
        question: "Can a wedding party book several homes as one block?",
        answer: "Yes. Tell us your guest count and we'll recommend a walking-cluster combination — or a single large-group home — so the wedding party stays together.",
      },
      {
        question: "Do you book the wedding venue for us?",
        answer: "No — venue booking stays directly between you and the venue. We handle lodging, and coordinate catering, transport, and the guest experience around whichever venue you choose.",
      },
    ],
  },
];

export function getEventBySlug(slug: string | undefined): EventConfig | undefined {
  return EVENTS.find((e) => e.slug === slug);
}