import { Link } from "react-router-dom";

import { Seo } from "@/components/shared/Seo";

export function NotFound() {
  return (
    <>
      <Seo title="Page not found | 8888 Masters" description="This page doesn't exist." path="/404" />
      <section className="flex min-h-[60vh] flex-col items-center justify-center bg-brand-cream px-6 text-center">
        <p className="font-display text-6xl text-brand-forest">404</p>
        <h1 className="mt-4 font-display text-2xl text-brand-ink">We couldn't find that page.</h1>
        <Link to="/" className="mt-6 rounded-full bg-brand-forest px-6 py-3 text-sm font-semibold text-brand-cream">
          Back to home
        </Link>
      </section>
    </>
  );
}
