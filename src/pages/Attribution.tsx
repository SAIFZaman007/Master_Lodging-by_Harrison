import { Seo } from "@/components/shared/Seo";

export function Attribution() {
  return (
    <>
      <Seo
        title="Attribution | 8888 Augusta"
        description="Photo credits, independence disclaimer, and third-party attributions for 8888augusta.com."
        path="/attribution"
      />
      <section className="bg-brand-cream py-20">
        <div className="container-page max-w-2xl">
          <h1 className="font-display text-3xl text-brand-ink">Attribution</h1>

          <div className="mt-8 space-y-6 text-sm leading-relaxed text-brand-ink/70">
            <p>
              8888 Augusta is an independent, privately-operated lodging portfolio. It is not
              affiliated with, endorsed by, or sponsored by Augusta National Golf Club, the Masters
              Tournament, ANWA, the Augusta National Women's Amateur, Ironman Group, or Nike EYBL
              Peach Jam. Event and venue names are used solely to describe the weeks and occasions
              our guests travel to Augusta for.
            </p>

            <div>
              <h2 className="font-semibold text-brand-ink">Mapping</h2>
              <p className="mt-1">
                Map tiles &copy;{" "}
                <a href="https://carto.com/attributions" className="underline">
                  CARTO
                </a>
                , map data &copy;{" "}
                <a href="https://www.openstreetmap.org/copyright" className="underline">
                  OpenStreetMap
                </a>{" "}
                contributors, rendered with{" "}
                <a href="https://leafletjs.com" className="underline">
                  Leaflet
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-brand-ink">Property photography</h2>
              <p className="mt-1">
                Property photography is owned by 8888 Augusta and its host. Please contact us
                before reusing any images from this site.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-brand-ink">Augusta National course imagery</h2>
              <p className="mt-1">
                Course photography used on the Masters event page is sourced from{" "}
                <a href="https://commons.wikimedia.org/" className="underline">
                  Wikimedia Commons
                </a>
                , credited to Dan Perry (Atlanta, USA), licensed{" "}
                <a href="https://creativecommons.org/licenses/by/2.0/" className="underline">
                  CC BY 2.0
                </a>
                . Used with attribution; no affiliation with or endorsement by Augusta National
                Golf Club is implied.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-brand-ink">Event-week photography</h2>
              <p className="mt-1">
                Placeholder imagery on the ANWA, Ironman 70.3, Peach Jam, and Private Events pages
                is stock photography used under a free commercial license, standing in until
                event-specific or host-supplied photography is available. It will be replaced with
                real 8888 Augusta hosting photos over time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
