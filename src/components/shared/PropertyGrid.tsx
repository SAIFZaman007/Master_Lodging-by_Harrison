import { AlertCircle, DatabaseZap } from "lucide-react";

import type { PropertyFilters } from "@/hooks/useProperties";
import { useProperties } from "@/hooks/useProperties";
import { PropertyCard } from "@/components/shared/PropertyCard";
import { Stagger, StaggerItem } from "@/components/shared/Motion";

/**
 * Renders the live property grid.
 *
 * The three non-happy states below are deliberately distinct. Previously an
 * unreachable API and an empty database both bottomed out in the same quiet
 * "no homes match" line, which made a backend/seed problem look like a design
 * decision. Now each failure mode says what actually happened — and in dev,
 * what to run to fix it.
 */
export function PropertyGrid({
  filters = {},
  emptyMessage,
}: {
  filters?: PropertyFilters;
  emptyMessage?: string;
}) {
  const { data: properties, isLoading, isError, error } = useProperties(filters);
  const isDev = import.meta.env.DEV;

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl bg-white/60 shadow-[var(--shadow-card)]"
          >
            <div className="aspect-[4/3] animate-pulse bg-brand-forest/5" />
            <div className="space-y-2.5 p-5">
              <div className="h-4 w-3/4 animate-pulse rounded bg-brand-forest/5" />
              <div className="h-3 w-1/2 animate-pulse rounded bg-brand-forest/5" />
              <div className="h-3 w-2/3 animate-pulse rounded bg-brand-forest/5" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  // The API could not be reached at all (backend down, wrong VITE_API_BASE_URL, CORS).
  if (isError) {
    return (
      <div className="flex items-start gap-4 rounded-2xl border border-red-200 bg-red-50 p-6">
        <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
        <div className="text-sm">
          <p className="font-semibold text-red-800">Couldn't reach the booking API.</p>
          <p className="mt-1 text-red-700">
            Please refresh, or call us directly and we'll check availability for you.
          </p>
          {isDev && (
            <p className="mt-3 font-mono text-xs text-red-600/80">
              Dev: is the backend running on :8000? ({error?.message})
            </p>
          )}
        </div>
      </div>
    );
  }

  // The API answered fine — there simply are no rows matching this filter.
  if (!properties?.length) {
    return (
      <div className="flex items-start gap-4 rounded-2xl border border-brand-forest/10 bg-white/60 p-6">
        <DatabaseZap className="mt-0.5 h-5 w-5 shrink-0 text-brand-forest/50" />
        <div className="text-sm">
          <p className="font-semibold text-brand-ink">
            {emptyMessage ?? "No homes match this filter right now."}
          </p>
          <p className="mt-1 text-brand-ink/60">
            Tell us your dates and group size — we'll match you to the right home directly.
          </p>
          {isDev && (
            <p className="mt-3 font-mono text-xs text-brand-ink/50">
              Dev: API reachable but returned 0 rows. Seed the database:{" "}
              <span className="text-brand-forest">python -m app.seed.seed</span>
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <Stagger stagger={0.06} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {properties.map((property) => (
        <StaggerItem key={property.id} className="h-full">
          <PropertyCard property={property} />
        </StaggerItem>
      ))}
    </Stagger>
  );
}