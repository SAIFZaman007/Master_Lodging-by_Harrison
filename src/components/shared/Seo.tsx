import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  /** Structured data objects (schema.org) — pass one or more; each becomes its own <script> tag.
   * This is the core AEO/GEO lever: answer engines and LLM crawlers lean heavily on JSON-LD
   * to extract facts (FAQPage, LodgingBusiness, ItemList, BreadcrumbList) without having to
   * parse prose. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const SITE_URL = "https://8888masters.com";

export function Seo({ title, description, path, image, jsonLd }: SeoProps) {
  const url = `${SITE_URL}${path}`;
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
