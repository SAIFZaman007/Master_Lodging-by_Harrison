import { Seo } from "@/components/shared/Seo";

export function Attribution() {
  return (
    <>
      <Seo
        title="Attribution | 8888 Masters"
        description="Photo credits, independence disclaimer, and third-party attributions for 8888masters.com."
        path="/attribution"
      />
      <section className="bg-brand-cream py-20">
        <div className="container-page max-w-2xl">
          <h1 className="font-display text-3xl text-brand-ink">Attribution</h1>

          <div className="mt-8 space-y-6 text-sm leading-relaxed text-brand-ink/70">
            <p>
              8888 Masters is an independent, privately-operated lodging portfolio. It is not
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
              <h2 className="font-semibold text-brand-ink">Photography</h2>
              <p className="mt-1">
                Property photography is owned by 8888 Masters and its host. Please contact us before
                reusing any images from this site.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
