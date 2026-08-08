import { Link } from "react-router-dom";
import { Flag, UtensilsCrossed, CarFront, MapPinned } from "lucide-react";

const TILES = [
  { icon: Flag, label: "Tee times & golf", to: "/local-info/tee-times" },
  { icon: UtensilsCrossed, label: "Dining & reservations", to: "/local-info/restaurants" },
  { icon: CarFront, label: "Transport & flights", to: "/local-info/flights" },
  { icon: MapPinned, label: "The full local guide", to: "/local-info" },
];

export function ExploreAugustaTeaser() {
  return (
    <section className="relative overflow-hidden bg-brand-forest py-20 text-brand-cream">
      <div className="absolute inset-0 opacity-20">
        <img src="/assets/hero/hero-home.webp" alt="" className="h-full w-full object-cover" />
      </div>
      <div className="container-page relative">
        <p className="eyebrow">Explore Augusta</p>
        <h2 className="mt-3 max-w-lg font-display text-3xl sm:text-4xl">
          The week is about more than the house.
        </h2>
        <p className="mt-4 max-w-lg text-brand-cream/75">
          We're the local operator — so the whole of Augusta comes handled. Golf, tables, transport,
          and everything around the course.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {TILES.map((tile) => (
            <Link
              key={tile.label}
              to={tile.to}
              className="group flex flex-col items-start gap-3 rounded-xl border border-brand-cream/15 p-5 transition-colors hover:bg-brand-cream/5"
            >
              <tile.icon className="h-5 w-5 text-brand-gold" />
              <span className="text-sm font-medium">{tile.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
