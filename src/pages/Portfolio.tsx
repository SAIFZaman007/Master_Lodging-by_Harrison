import { useState } from "react";

import { Seo } from "@/components/shared/Seo";
import { PropertyGrid } from "@/components/shared/PropertyGrid";
import type { PropertyFilters } from "@/hooks/useProperties";

const TABS: { label: string; filters: PropertyFilters }[] = [
  { label: "All homes", filters: { limit: 100 } },
  { label: "Walking cluster", filters: { walking_cluster: true, limit: 100 } },
  { label: "Large groups (12+)", filters: { large_group: true, limit: 100 } },
  { label: "Signature", filters: { signature: true, limit: 100 } },
];

export function Portfolio() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Seo
        title="The Augusta Portfolio — 24 Private Homes | 8888 Augusta"
        description="Browse all 24 private Augusta homes — filter by walking-distance cluster, large-group capacity, or signature listings. Booked direct, hosted in person."
        path="/portfolio"
      />
      <section className="bg-brand-forest py-16">
        <div className="container-page">
          <p className="eyebrow">The portfolio</p>
          <h1 className="mt-3 font-display text-4xl text-brand-cream sm:text-5xl">
            Browse Augusta your way.
          </h1>
          <p className="mt-4 max-w-xl text-brand-cream/70">
            Twenty-four private homes — find yours by where you want to be, why you're coming, or the
            collection that fits.
          </p>
        </div>
      </section>

      <section className="bg-brand-cream py-14">
        <div className="container-page">
          <div className="flex flex-wrap gap-2">
            {TABS.map((tab, i) => (
              <button
                key={tab.label}
                type="button"
                onClick={() => setActiveTab(i)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                  activeTab === i
                    ? "bg-brand-forest text-brand-cream"
                    : "bg-white text-brand-ink/70 hover:bg-brand-cream-dark"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-8">
            <PropertyGrid filters={TABS[activeTab].filters} />
          </div>
        </div>
      </section>
    </>
  );
}