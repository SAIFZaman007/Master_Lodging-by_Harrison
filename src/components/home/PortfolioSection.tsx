import { useState } from "react";
import { Link } from "react-router-dom";

import { PropertyGrid } from "@/components/shared/PropertyGrid";
import type { PropertyFilters } from "@/hooks/useProperties";

const FILTER_TABS: { label: string; filters: PropertyFilters }[] = [
  { label: "All homes", filters: { limit: 9 } },
  { label: "Walking cluster", filters: { walking_cluster: true, limit: 9 } },
  { label: "Large groups (12+)", filters: { large_group: true, limit: 9 } },
  { label: "Signature", filters: { signature: true, limit: 9 } },
];

export function PortfolioSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="homes" className="bg-brand-forest py-20">
      <div className="container-page">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">The full portfolio</p>
            <h2 className="mt-3 font-display text-3xl text-brand-cream sm:text-4xl">
              The Augusta portfolio.
            </h2>
          </div>
          <Link to="/portfolio" className="text-sm font-semibold text-brand-gold hover:underline">
            Show all homes →
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {FILTER_TABS.map((tab, i) => (
            <button
              key={tab.label}
              type="button"
              onClick={() => setActiveTab(i)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                activeTab === i
                  ? "bg-brand-gold text-brand-forest-dark"
                  : "bg-brand-cream/10 text-brand-cream/80 hover:bg-brand-cream/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-8">
          <PropertyGrid filters={FILTER_TABS[activeTab].filters} />
        </div>
      </div>
    </section>
  );
}
