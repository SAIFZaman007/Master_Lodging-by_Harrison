import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Seo } from "@/components/shared/Seo";
import { getLocalInfoTopic, LOCAL_INFO_TOPICS, type GuideItem } from "@/data/localInfo";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/Motion";

function GuideLink({ href, label }: { href: string; label: string }) {
  const isExternal = href.startsWith("http");
  const className = "text-sm font-semibold text-brand-forest hover:underline";

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {label} ↗
      </a>
    );
  }
  return (
    <Link to={href} className={className}>
      {label} →
    </Link>
  );
}

function GuideCard({ item }: { item: GuideItem }) {
  return (
    <div className="flex h-full flex-col justify-between gap-3 rounded-2xl bg-white p-5 shadow-[var(--shadow-card)]">
      <div>
        {item.badge && (
          <span className="text-[11px] font-semibold uppercase tracking-wide text-brand-azalea">
            {item.badge}
          </span>
        )}
        {item.meta && <p className="mt-1 text-xs text-brand-ink/45">{item.meta}</p>}
        <h3 className="mt-1.5 font-display text-lg text-brand-ink">{item.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-brand-ink/60">{item.body}</p>
      </div>
      {item.linkLabel && item.linkHref && <GuideLink href={item.linkHref} label={item.linkLabel} />}
    </div>
  );
}

export function LocalInfoTopicPage() {
  const { topic: topicSlug } = useParams<{ topic: string }>();
  const topic = getLocalInfoTopic(topicSlug);

  if (!topic) return <Navigate to="/local-info" replace />;

  const otherTopics = LOCAL_INFO_TOPICS.filter((t) => t.slug !== topic.slug);

  return (
    <>
      <Seo
        title={`${topic.title} in Augusta, GA | 8888 Augusta Local Info`}
        description={topic.description}
        path={`/local-info/${topic.slug}`}
      />

      <section className="bg-brand-forest py-16">
        <div className="container-page">
          <Link to="/local-info" className="flex items-center gap-1.5 text-sm text-brand-cream/70 hover:text-brand-cream">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Local Info
          </Link>
          <p className="eyebrow mb-3 mt-6">{topic.category}</p>
          <h1 className="max-w-2xl font-display text-4xl leading-tight text-brand-cream sm:text-5xl">
            {topic.title}
          </h1>
          <p className="mt-4 max-w-xl text-brand-cream/75">{topic.heroLede}</p>
        </div>
      </section>

      <section className="bg-brand-cream py-16">
        <div className="container-page">
          {topic.intro && (
            <Reveal className="max-w-3xl">
              <p className="text-brand-ink/60">{topic.intro}</p>
            </Reveal>
          )}

          {topic.sections?.map((section, i) => (
            <div key={section.title} className={i === 0 && !topic.intro ? "mt-0" : "mt-12"}>
              <Reveal>
                <p className="eyebrow">{section.eyebrow}</p>
                <h2 className="mt-2 font-display text-2xl text-brand-ink sm:text-3xl">{section.title}</h2>
                {section.body && <p className="mt-3 max-w-2xl text-brand-ink/60">{section.body}</p>}
              </Reveal>
              <Stagger stagger={0.05} className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {section.items.map((item) => (
                  <StaggerItem key={item.name}>
                    <GuideCard item={item} />
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          ))}

          {topic.chipGroups?.map((group) => (
            <div key={group.title} className="mt-12">
              <Reveal>
                <p className="eyebrow">{group.eyebrow}</p>
                <h2 className="mt-2 font-display text-2xl text-brand-ink sm:text-3xl">{group.title}</h2>
                {group.body && <p className="mt-3 max-w-2xl text-brand-ink/60">{group.body}</p>}
              </Reveal>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-brand-forest/15 bg-white px-5 py-2.5 text-sm font-semibold text-brand-ink transition-colors hover:border-brand-forest/40 hover:bg-brand-cream-dark"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-forest-dark py-16">
        <div className="container-page text-center">
          <p className="eyebrow mb-3">Next step</p>
          <h2 className="font-display text-3xl text-brand-cream sm:text-4xl">
            Want us to handle it directly?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-cream/75">
            This guide is maintained by hand and refreshed before every event week. For the current
            picks, pricing, or to have something booked on your behalf ahead of arrival, send a note
            and we'll reply directly.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/inquire"
              className="rounded-full bg-brand-gold px-7 py-3.5 text-sm font-semibold text-brand-forest-dark transition-transform hover:scale-[1.03]"
            >
              Ask about {topic.title.toLowerCase()}
            </Link>
            <a href="tel:+16024788888" className="text-sm font-semibold text-brand-cream/80 hover:text-brand-cream">
              Call (602) 478-8888
            </a>
          </div>
        </div>
      </section>

      <section className="bg-brand-cream py-16">
        <div className="container-page">
          <p className="eyebrow mb-4">More local info</p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {otherTopics.map((t) => (
              <Link
                key={t.slug}
                to={`/local-info/${t.slug}`}
                className="group flex items-center gap-3 rounded-xl bg-white p-4 text-sm shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover)]"
              >
                <t.icon className="h-4 w-4 shrink-0 text-brand-forest" />
                <span className="flex-1 text-brand-ink/80">{t.title}</span>
                <ArrowRight className="h-3.5 w-3.5 shrink-0 text-brand-ink/30 transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
