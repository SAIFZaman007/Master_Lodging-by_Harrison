import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { Seo } from "@/components/shared/Seo";
import { getLocalInfoTopic, LOCAL_INFO_TOPICS } from "@/data/localInfo";

export function LocalInfoTopicPage() {
  const { topic: topicSlug } = useParams<{ topic: string }>();
  const topic = getLocalInfoTopic(topicSlug);

  if (!topic) return <Navigate to="/local-info" replace />;

  const otherTopics = LOCAL_INFO_TOPICS.filter((t) => t.slug !== topic.slug);

  return (
    <>
      <Seo
        title={`${topic.title} in Augusta, GA | 8888 Masters Local Info`}
        description={topic.description}
        path={`/local-info/${topic.slug}`}
      />
      <section className="bg-brand-forest py-16">
        <div className="container-page">
          <Link to="/local-info" className="flex items-center gap-1.5 text-sm text-brand-cream/70 hover:text-brand-cream">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Local Info
          </Link>
          <p className="eyebrow mb-3 mt-6">{topic.category}</p>
          <h1 className="font-display text-4xl text-brand-cream sm:text-5xl">{topic.title}</h1>
          <p className="mt-4 max-w-xl text-brand-cream/75">{topic.description}</p>
        </div>
      </section>

      <section className="bg-brand-cream py-16">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-white p-8 shadow-[var(--shadow-card)]">
              <h2 className="font-display text-xl text-brand-ink">Ask Chris directly</h2>
              <p className="mt-3 leading-relaxed text-brand-ink/65">
                This guide is maintained by hand and refreshed before every event week — recommendations
                are pulled from bookings Chris actually makes for guests, not scraped review sites. For
                the current picks, pricing, or to have something booked on your behalf ahead of arrival,
                send a note and we'll reply directly.
              </p>
              <Link
                to="/inquire"
                className="mt-6 inline-block rounded-full bg-brand-forest px-6 py-3 text-sm font-semibold text-brand-cream"
              >
                Ask about {topic.title.toLowerCase()}
              </Link>
            </div>
          </div>

          <aside>
            <p className="eyebrow mb-4">More local info</p>
            <ul className="space-y-3">
              {otherTopics.map((t) => (
                <li key={t.slug}>
                  <Link
                    to={`/local-info/${t.slug}`}
                    className="flex items-center gap-3 rounded-xl bg-white p-4 text-sm shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover)]"
                  >
                    <t.icon className="h-4 w-4 shrink-0 text-brand-forest" />
                    <span className="text-brand-ink/80">{t.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
