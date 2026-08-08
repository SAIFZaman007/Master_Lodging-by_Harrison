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

export interface LocalInfoTopic {
  slug: string;
  category: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const LOCAL_INFO_TOPICS: LocalInfoTopic[] = [
  {
    slug: "restaurants",
    category: "Dining",
    title: "Restaurants",
    description:
      "Chris's five Augusta favorites, plus private chef dining inside your home. We make the calls.",
    icon: UtensilsCrossed,
  },
  {
    slug: "flights",
    category: "Getting here",
    title: "Flights & airports",
    description:
      "Every airport guests fly into — AGS to the big hubs — plus carriers and private-jet operators.",
    icon: Plane,
  },
  {
    slug: "car-rental",
    category: "On the road",
    title: "Car rental & transport",
    description:
      "Book Avis, Budget, Enterprise, or National — or let us arrange black-car and group transport.",
    icon: CarFront,
  },
  {
    slug: "catering",
    category: "In the home",
    title: "Catering & private chefs",
    description:
      "Private chefs (including chefs who travel in), breakfast service, bartenders, housekeeping, on-site hosts.",
    icon: ChefHat,
  },
  {
    slug: "tee-times",
    category: "On the course",
    title: "Tee times & golf",
    description:
      "Where guests actually play — near the house and beyond — with host-coordinated tee times.",
    icon: Flag,
  },
  {
    slug: "groceries",
    category: "In town",
    title: "Groceries & provisioning",
    description:
      "Publix, Kroger, Costco — distances from the houses, pre-arrival stocking, and early-package holding.",
    icon: ShoppingCart,
  },
  {
    slug: "transportation",
    category: "On the road",
    title: "Transportation",
    description:
      "Black-car services, shuttles, group transport for corporate weeks. Pre-arranged before you land.",
    icon: Bus,
  },
  {
    slug: "bars",
    category: "After-hours",
    title: "Bars & entertainment",
    description:
      "The local picks worth your evening, plus quieter spots for clients and quality conversation.",
    icon: Martini,
  },
];

export function getLocalInfoTopic(slug: string | undefined): LocalInfoTopic | undefined {
  return LOCAL_INFO_TOPICS.find((t) => t.slug === slug);
}
