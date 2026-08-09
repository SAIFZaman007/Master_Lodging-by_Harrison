import type { LucideIcon } from "lucide-react";
import {
  UtensilsCrossed,
  Plane,
  CarFront,
  ChefHat,
  Flag,
  ShoppingCart,
  Bus,
  Martini,
} from "lucide-react";

export interface GuideItem {
  /** Short accent label, e.g. "Chris's pick" or "Most requested" — rendered in azalea. */
  badge?: string;
  /** Secondary meta line, e.g. "Downtown · 1204 Broad St" or "15–20 min · Public". */
  meta?: string;
  name: string;
  body: string;
  linkLabel?: string;
  linkHref?: string;
}

export interface GuideSection {
  eyebrow: string;
  title: string;
  body?: string;
  items: GuideItem[];
}

export interface ChipGroup {
  eyebrow: string;
  title: string;
  body?: string;
  links: { label: string; href: string }[];
}

export interface LocalInfoTopic {
  slug: string;
  category: string;
  title: string;
  description: string;
  icon: LucideIcon;
  heroLede: string;
  intro?: string;
  sections?: GuideSection[];
  chipGroups?: ChipGroup[];
}

export const LOCAL_INFO_TOPICS: LocalInfoTopic[] = [
  {
    slug: "restaurants",
    category: "Dining",
    title: "Restaurants",
    description:
      "Chris's Augusta favorites, plus private chef dining inside your home. We make the calls.",
    icon: UtensilsCrossed,
    heroLede:
      "Not a review-site dump — the Augusta restaurants Chris actually books for guests, plus private-chef dining inside your home. We'll make the reservation.",
    intro:
      "Augusta fills up fast during event weeks. We hold relationships with the spots that matter so a table is one call away. Prefer to stay in? Ask about a private chef.",
    sections: [
      {
        eyebrow: "Dining",
        title: "The host's table.",
        items: [
          {
            badge: "Chris's pick",
            meta: "Steakhouse · Washington Rd",
            name: "T-Bones Steakhouse",
            body: "The Augusta steakhouse on Washington Road locals actually take guests to — close to the houses and the course.",
            linkLabel: "View on Google Maps",
            linkHref: "https://www.google.com/maps/search/?api=1&query=T-Bones+Steakhouse+Washington+Road+Augusta+GA",
          },
          {
            badge: "Chris's pick",
            meta: "Southern · Downtown",
            name: "Frog Hollow Tavern",
            body: "Chef-driven Southern cooking on Broad Street downtown. A standing recommendation for a nicer night out.",
            linkLabel: "View on Google Maps",
            linkHref: "https://www.google.com/maps/search/?api=1&query=Frog+Hollow+Tavern+Broad+Street+Augusta+GA",
          },
          {
            meta: "Chris's pick",
            name: "Stevens",
            body: "One of Chris's standing favorites in Augusta — full details and reservation notes available directly from the host.",
          },
          {
            meta: "In the home",
            name: "Private chef dining",
            body: "Prefer to stay in? See catering & private chefs for chef's-table dinners and in-home service.",
            linkLabel: "Catering & private chefs",
            linkHref: "/local-info/catering",
          },
        ],
      },
    ],
  },
  {
    slug: "flights",
    category: "Getting here",
    title: "Flights & airports",
    description:
      "Every airport guests fly into — AGS to the big hubs — plus carriers and private-jet operators.",
    icon: Plane,
    heroLede:
      "Every airport guests fly into for Augusta — from the 15-minute regional to the big hubs two hours out — plus the private fields and jet operators who use them.",
    intro:
      "Fly into AGS (Augusta Regional) if you can — it's 15–20 minutes from the houses. If your routing is better through a hub, here's the full picture with honest drive times.",
    sections: [
      {
        eyebrow: "Augusta-area airports",
        title: "Closest to the houses.",
        items: [
          {
            badge: "Chris's pick",
            meta: "AGS · Public · 15–20 min to the houses",
            name: "Augusta Regional Airport",
            body: "The closest commercial airport — the one most guests fly into. Delta and American serve it with connections through Atlanta and Charlotte.",
          },
          {
            meta: "DNL · General aviation",
            name: "Daniel Field",
            body: "In-town general-aviation field — private and charter traffic, very close to the houses.",
          },
          {
            meta: "AIK · General aviation",
            name: "Aiken Regional Airport",
            body: "Private/GA field across the river in Aiken, SC — another close option for charter arrivals.",
          },
        ],
      },
      {
        eyebrow: "Major hubs",
        title: "Within driving distance.",
        items: [
          { meta: "ATL · 2h 15m drive", name: "Hartsfield–Jackson Atlanta", body: "The major hub — most flights, most direct routes. Two-and-a-quarter hours west on I-20." },
          { meta: "CAE · 60 min drive", name: "Columbia Metropolitan", body: "Closest alternate hub — about an hour east in South Carolina. Often easier than Atlanta traffic." },
          { meta: "CHS · 2h 10m drive", name: "Charleston Intl", body: "Coastal SC option — good for guests pairing Augusta with a Charleston leg." },
          { meta: "CLT · 2h 40m drive", name: "Charlotte Douglas", body: "Major American hub to the north — broad route network if ATL and AGS don't fit." },
        ],
      },
    ],
    chipGroups: [
      {
        eyebrow: "Major carriers",
        title: "Serving Augusta Regional and the nearby hubs.",
        links: [
          { label: "Delta ↗", href: "https://www.delta.com" },
          { label: "American Airlines ↗", href: "https://www.aa.com" },
        ],
      },
      {
        eyebrow: "Private jet operators",
        title: "Flying private into AGS, Daniel Field, or Aiken.",
        links: [
          { label: "NetJets ↗", href: "https://www.netjets.com" },
          { label: "Wheels Up ↗", href: "https://wheelsup.com" },
        ],
      },
    ],
  },
  {
    slug: "car-rental",
    category: "On the road",
    title: "Car rental & transport",
    description:
      "Book Avis, Budget, Enterprise, or National — or let us arrange black-car and group transport.",
    icon: CarFront,
    heroLede:
      "Book your car through the majors below — and ask us about black-car and group transport if you'd rather not drive event-week traffic at all.",
    sections: [
      {
        eyebrow: "Rather be driven?",
        title: "For corporate weeks and groups, skip the rental entirely.",
        items: [
          {
            badge: "Most requested by corporate groups",
            meta: "Concierge · Transportation",
            name: "Black-car & group transport",
            body: "We arrange professional drivers and group transport for the week — airport pickups, course runs, dinner reservations, and late nights. Pre-arranged before you arrive.",
            linkLabel: "See transportation",
            linkHref: "/local-info/transportation",
          },
        ],
      },
    ],
    chipGroups: [
      {
        eyebrow: "Rent direct",
        title: "The four majors at Augusta Regional.",
        body: "All four operate at Augusta Regional (AGS) and around town. Book direct through the links below.",
        links: [
          { label: "Avis ↗", href: "https://www.avis.com" },
          { label: "Budget ↗", href: "https://www.budget.com" },
          { label: "Enterprise ↗", href: "https://www.enterprise.com" },
          { label: "National ↗", href: "https://www.nationalcar.com" },
        ],
      },
    ],
  },
  {
    slug: "catering",
    category: "In the home",
    title: "Catering & private chefs",
    description:
      "Private chefs (including chefs who travel in), breakfast service, bartenders, housekeeping, on-site hosts.",
    icon: ChefHat,
    heroLede:
      "The best meal of your Augusta week shouldn't require leaving the house. We bring the kitchen to you — from a single chef's-table dinner to a full week of in-home service.",
    intro:
      "For the highest-end weeks, guests want the whole package handled — and dinner in the home is the centerpiece. We coordinate private chefs, breakfast service, bartenders, and household staff so your group never thinks about logistics.",
    sections: [
      {
        eyebrow: "In-home dining",
        title: "Dinner in the home, handled.",
        items: [
          {
            badge: "Chris's chef",
            meta: "Signature · Travels in",
            name: "Our private chef",
            body: "Our go-to private chef travels in for marquee weeks — chef's-table dinners and multi-night service in the home. Limited dates around Masters week; book early.",
            linkLabel: "Reserve dates",
            linkHref: "/inquire",
          },
          {
            meta: "Marketplace · Vetted chefs",
            name: "Take a Chef",
            body: "National private-chef marketplace — browse menus and book a vetted chef for in-home dinners and brunches. A useful backup for additional nights.",
            linkLabel: "Browse chefs",
            linkHref: "https://www.takeachef.com",
          },
          {
            meta: "Marketplace · In-home dining",
            name: "Cozymeal",
            body: "Private chefs and in-home dining experiences across major markets. Another route to additional chefs and cuisines for larger or multi-home groups.",
            linkLabel: "Browse chefs",
            linkHref: "https://www.cozymeal.com",
          },
        ],
      },
      {
        eyebrow: "Beyond the chef",
        title: "Everything else that makes a home feel staffed.",
        items: [
          { name: "Breakfast & coffee service", body: "Stocked kitchens and optional morning service so the group starts the day without a grocery run." },
          { name: "Bartenders & event staff", body: "For receptions, client dinners, and big nights — professional bar and service staff in the home." },
          { name: "Housekeeping & on-site host", body: "Mid-stay housekeeping and, for large groups, an on-site host to keep the week running." },
        ],
      },
    ],
  },
  {
    slug: "tee-times",
    category: "On the course",
    title: "Tee times & golf",
    description:
      "Where guests actually play — near the house and beyond — with host-coordinated tee times.",
    icon: Flag,
    heroLede:
      "You came to Augusta for golf. Here's where guests actually play — near the house and worth the drive — with the host's relationships where they count.",
    intro:
      "Tee times around Masters week move fast; tell us early and we'll coordinate the booking.",
    sections: [
      {
        eyebrow: "Near the houses",
        title: "Augusta & Aiken area.",
        items: [
          {
            badge: "Chris's pick",
            meta: "Graniteville, SC · Private",
            name: "Sage Valley Golf Club",
            body: "One of the most exclusive clubs in the country — private, by member invitation only. The host has a personal relationship with ownership, which is exactly the kind of access that doesn't show up on a tee-sheet.",
            linkLabel: "By invitation",
          },
          {
            meta: "West Augusta · Private",
            name: "West Lake Country Club",
            body: "Private club on Augusta's west side. Limited guest play is possible around event weeks — we can ask on your behalf.",
          },
        ],
      },
      {
        eyebrow: "Worth the drive",
        title: "Atlanta public courses — many guests play a round on the way in or out (~2 hours).",
        items: [
          { meta: "Atlanta (Buckhead) · Public", name: "Bobby Jones Golf Course", body: "City-owned, fully reversible Bob Cupp design named for the Augusta-born legend. The most bookable marquee public course in Atlanta." },
          { meta: "Stone Mountain · Public", name: "Stone Mountain Golf Club", body: "36 holes (Stonemont + Lakemont) inside Stone Mountain Park — scenic and very playable for a visiting group." },
          { meta: "Braselton · Resort/Public", name: "Château Élan Golf Club", body: "Resort golf northeast of Atlanta — multiple courses, easy to book a group, winery on site for the non-golfers." },
        ],
      },
    ],
  },
  {
    slug: "groceries",
    category: "In town",
    title: "Groceries & provisioning",
    description:
      "Publix, Kroger, Costco — distances from the houses, pre-arrival stocking, and early-package holding.",
    icon: ShoppingCart,
    heroLede: "Everyone asks. Here's what's close, how far, and how we can stock the house before you arrive.",
    intro:
      "Distances are from the house cluster near Augusta National. Want the fridge full when you walk in? We offer pre-arrival provisioning — send a list and it's done.",
    sections: [
      {
        eyebrow: "Nearby stores",
        title: "The everyday go-tos.",
        items: [
          { badge: "Chris's pick", meta: "Supermarket · Washington Rd corridor · 0.3 mi", name: "Publix", body: "The closest full grocery to the houses and the everyday go-to for guests. Fresh, fast, and right around the corner." },
          { meta: "Supermarket · 1.0 mi", name: "Kroger", body: "Larger selection, pharmacy, and bulk basics — about a mile out. Good for the big arrival stock-up." },
          { meta: "Warehouse club · 1.8 mi", name: "Costco", body: "For groups taking a whole house (or the whole cluster) — cases, catering trays, and beverages for the week." },
        ],
      },
      {
        eyebrow: "Ship ahead",
        title: "We'll hold it.",
        items: [
          {
            badge: "Guests always ask for this",
            meta: "Concierge · Receiving",
            name: "Send your boxes early.",
            body: "Shipping wine, gear, gifts, or supplies ahead of the trip? Send them to the house and we'll receive and hold them for 3–4 days before check-in so everything's waiting when you arrive. Just coordinate it with us first.",
            linkLabel: "Arrange it",
            linkHref: "/inquire",
          },
        ],
      },
    ],
  },
  {
    slug: "transportation",
    category: "On the road",
    title: "Transportation",
    description:
      "Black-car services, shuttles, group transport for corporate weeks. Pre-arranged before you land.",
    icon: Bus,
    heroLede:
      "Black-car, shuttles, and group transport around Augusta — arranged before you land so a car is always waiting.",
    intro:
      "During event weeks, transportation is the logistics problem guests underestimate. Rideshare supply thins out, surge pricing spikes, and roads around the course close or reroute. Everything below is pre-arranged.",
    sections: [
      {
        eyebrow: "What we arrange",
        title: "Pick the shape that fits your week.",
        items: [
          { badge: "Most requested", meta: "Sedan or SUV · AGS, DNL, ATL", name: "Airport transfer", body: "A chauffeur meets your flight and handles bags. Flight-tracked, so a delay doesn't cost you the car." },
          { meta: "Dedicated · Per-day", name: "Driver on call all week", body: "One driver and one vehicle assigned to your group for the week — course runs in the morning, dinner downtown at night, no re-booking between legs." },
          { meta: "14–56 passengers", name: "Coach or van for a corporate group", body: "For hospitality weeks where a whole team moves together — one coach to the gates each morning and back." },
          { meta: "For split groups", name: "Multi-home shuttle rotation", body: "If your party is spread across several homes in the walking cluster, we run a rotation between the houses, the course, and dinner." },
          { meta: "On demand", name: "Evening & dinner runs", body: "Downtown Broad Street is a short ride from the houses. We pre-arrange the pickup window so you're not hunting a car late on an event-week night." },
        ],
      },
      {
        eyebrow: "Transfer times",
        title: "From the airports guests actually use.",
        items: [
          { badge: "Chris's pick", meta: "15–20 min · Public", name: "From Augusta Regional (AGS)", body: "The closest commercial airport and the easiest transfer. Rideshare does operate here, but supply is thin during tournament week." },
          { meta: "In town · Private/GA", name: "From Daniel Field (DNL)", body: "General-aviation field inside the city — the shortest possible transfer for charter arrivals." },
          { meta: "2h 15m · I-20 east", name: "From Atlanta (ATL)", body: "The long transfer. Worth a car service rather than a rental if nobody in the group wants to drive after a flight." },
          { meta: "60 min · I-20 west", name: "From Columbia (CAE)", body: "Closest alternate hub. Often a calmer drive than Atlanta." },
        ],
      },
      {
        eyebrow: "Planning notes",
        title: "Worth knowing before event week.",
        items: [
          { meta: "Timing", name: "Book transport early for Masters week", body: "Every car and driver in Augusta is committed well before the first round. Tell us early." },
          { meta: "Uber & Lyft", name: "Rideshare is a gamble that week", body: "Both operate in Augusta year-round and are fine for a normal weekend. During the tournament, availability and pricing are unpredictable." },
          {
            meta: "Car rental",
            name: "Rather drive yourself?",
            body: "Plenty of guests do. See car rental & transport for the agencies at AGS and in town.",
            linkLabel: "See car rental",
            linkHref: "/local-info/car-rental",
          },
        ],
      },
    ],
  },
  {
    slug: "bars",
    category: "After-hours",
    title: "Bars & entertainment",
    description:
      "The local picks worth your evening, plus quieter spots for clients and quality conversation.",
    icon: Martini,
    heroLede:
      "Where to take clients, where to land after the back nine, and where to hear something live. Cocktail rooms, breweries, whiskey libraries, and the historic stages downtown.",
    intro:
      "Augusta's evening scene is small and clustered — most of it lives on a few walkable blocks of Broad Street downtown. Tell us the group and the mood and we'll line up the table, the car, and the tab.",
    sections: [
      {
        eyebrow: "After-hours",
        title: "The host's nightcap list.",
        items: [
          { badge: "Cocktail bar", meta: "Downtown · Broad St", name: "Craft & Vine", body: "A downtown cocktail room with hand-crafted cocktails, a serious wine list, and small plates in a dim, art-deco-leaning space. Our default for a grown-up first drink." },
          { badge: "Whiskey bar & kitchen", meta: "Downtown · Broad St", name: "Whiskey Bar (Kitchen)", body: "Over two hundred whiskeys behind the bar, paired with Japanese cuisine and craft burgers. A late-night staple for groups that want pours worth lingering over." },
          { badge: "Sushi & hidden bar", meta: "Downtown · Broad St", name: "990 Broad & the Ph'rog Bar", body: "Sleek sushi and crudo on Broad Street, with the Ph'rog Bar pouring an extensive sake and Japanese whisky list. Reserve early — the room is small." },
          { badge: "Brewery & taproom", meta: "Downtown", name: "Savannah River Brewing Co.", body: "Award-winning Augusta brewery and kitchen — a relaxed taproom for an afternoon flight or a casual group dinner without the dress code." },
          { badge: "Historic theater · live music", meta: "Downtown · Broad St", name: "Miller Theater", body: "A 1940 Art Moderne theater restored in a $25M renovation. Home of the Augusta Symphony and a year-round calendar of touring music and comedy — the most beautiful room in town to see a show." },
          { badge: "Concert venue", meta: "Downtown", name: "The Bell Auditorium", body: "Augusta's larger touring venue — national music acts, comedy headliners, and Broadway tours. Check the calendar before your week." },
        ],
      },
    ],
  },
];

export function getLocalInfoTopic(slug: string | undefined): LocalInfoTopic | undefined {
  return LOCAL_INFO_TOPICS.find((t) => t.slug === slug);
}