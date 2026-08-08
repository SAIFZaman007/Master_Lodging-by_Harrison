import { useMemo } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { Link } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import { useProperties } from "@/hooks/useProperties";
import { formatUsd } from "@/lib/format";
import { Reveal } from "@/components/shared/Motion";

const ANGC_POSITION: [number, number] = [33.503, -82.0199];

const propertyIcon = L.divIcon({
  className: "",
  html: `<span style="display:block;width:15px;height:15px;border-radius:9999px;background:#0e3b2c;border:2.5px solid #f8f4ea;box-shadow:0 2px 6px rgba(10,43,32,.45)"></span>`,
  iconSize: [15, 15],
  iconAnchor: [7.5, 7.5],
});

const angcIcon = L.divIcon({
  className: "",
  html: `<span style="display:block;width:24px;height:24px;border-radius:9999px;background:#c8a34d;border:3px solid #f8f4ea;box-shadow:0 2px 10px rgba(10,43,32,.5)"></span>`,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});

/**
 * Frames the map around whatever markers actually exist.
 *
 * The previous version hard-coded `center`/`zoom` on Augusta National. If the
 * property list came back empty — or if homes ever sit outside that fixed frame —
 * you'd get a plausible-looking map of Augusta with nothing on it, which is exactly
 * how "the map isn't loading properties" presents. Fitting to real bounds means the
 * map can only ever show the homes it actually received.
 */
function FitToMarkers({ points }: { points: [number, number][] }) {
  const map = useMap();

  useMemo(() => {
    if (!points.length) return;
    const bounds = L.latLngBounds([...points, ANGC_POSITION]);
    map.fitBounds(bounds, { padding: [56, 56], maxZoom: 14 });
  }, [map, points]);

  return null;
}

export function MapSection() {
  const { data: properties, isLoading, isError } = useProperties({ limit: 100 });

  const markers = useMemo(
    () => (properties ?? []).filter((p) => p.lat != null && p.lon != null),
    [properties],
  );

  const points = useMemo(
    () => markers.map((p) => [p.lat as number, p.lon as number] as [number, number]),
    [markers],
  );

  return (
    <section className="bg-brand-cream py-24 sm:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-display text-lg text-brand-gold italic">The map</p>
          <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.08] text-brand-ink">
            A private Augusta neighborhood.
          </h2>
          <p className="mt-4 text-brand-ink/60">
            {markers.length > 0
              ? `${markers.length} homes plotted against Augusta National — the gold marker is the club itself.`
              : "Every home in the portfolio, plotted against Augusta National."}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mt-12 overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
            <div style={{ height: 560 }}>
              <MapContainer
                center={ANGC_POSITION}
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />

                <FitToMarkers points={points} />

                <Marker position={ANGC_POSITION} icon={angcIcon}>
                  <Popup>
                    <strong>Augusta National Golf Club</strong>
                    <br />
                    Reference point
                  </Popup>
                </Marker>

                {markers.map((p) => (
                  <Marker key={p.id} position={[p.lat as number, p.lon as number]} icon={propertyIcon}>
                    <Popup>
                      <span className="block text-sm leading-relaxed">
                        <strong className="text-[15px]">{p.address}</strong>
                        <br />
                        {p.bedrooms} bed · {p.baths} bath · {p.guests} guests
                        {p.miles_to_angc != null && (
                          <>
                            <br />
                            {p.miles_to_angc} mi to Augusta National
                          </>
                        )}
                        <br />
                        <strong>{formatUsd(p.price_cents)}</strong>
                        <br />
                        <Link to={`/homes/${p.slug}`} className="text-brand-forest underline">
                          View home →
                        </Link>
                      </span>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>

            {/* Overlay states sit above the tiles so the map never looks "empty but fine". */}
            {(isLoading || isError || markers.length === 0) && (
              <div className="pointer-events-none absolute inset-0 z-[400] flex items-center justify-center bg-brand-cream/70 backdrop-blur-[2px]">
                <p className="rounded-full bg-white px-5 py-2.5 text-sm text-brand-ink/70 shadow-[var(--shadow-card)]">
                  {isLoading
                    ? "Loading the portfolio map…"
                    : isError
                      ? "Map data unavailable — please refresh."
                      : "No mapped homes returned yet."}
                </p>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}