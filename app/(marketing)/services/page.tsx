import Link from 'next/link';
import type { Metadata } from 'next';
import { serviceCategories } from '../../config/servicesCatalog';

export const metadata: Metadata = {
  title: 'Services | Deepthink Studio Growth & Experience Lab',
  description:
    'Explore Deepthink Studio’s 50-service lineup covering SEO, paid media, product design, and engineering. Built to accelerate ambitious brands with measurable outcomes.',
  alternates: {
    canonical: 'https://deepthinkstudio.com/services',
  },
  openGraph: {
    title: 'Deepthink Studio Services',
    description:
      'Browse 50 battle-tested services spanning SEO, design, engineering, and growth. Every playbook is built for velocity, clarity, and ROI.',
    url: 'https://deepthinkstudio.com/services',
    siteName: 'Deepthink Studio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deepthink Studio Services',
    description:
      '50 proven services that compound growth across acquisition, experience, and technology.',
  },
};

const heroStats = [
  { metric: '50+', label: 'Hyper-focused services' },
  { metric: '32%', label: 'Average lift in qualified pipeline' },
  { metric: '4.8★', label: 'Client partner rating' },
  { metric: '12yrs', label: 'Scaling digital-first brands' },
];

const pillarHighlights = [
  {
    title: 'Acquisition Ops',
    copy: 'Own every touchpoint from awareness to retention with channel specialists who obsess over ROAS, LTV, and CAC payback.',
  },
  {
    title: 'Experience Design',
    copy: 'Ship digital experiences that convert — crafted with research, motion systems, and modular design frameworks.',
  },
  {
    title: 'Engineering Velocity',
    copy: 'Deploy scalable platforms, APIs, and automation pipelines built to integrate seamlessly with your existing stack.',
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section style={{ padding: '6rem 0 4rem', background: 'linear-gradient(135deg, #16181d 0%, #20242c 100%)', color: '#fff' }}>
        <div className="container" style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', alignItems: 'center' }}>
          <div>
            <span style={{ textTransform: 'uppercase', letterSpacing: '0.2em', color: '#C6FF1A', fontWeight: 600 }}>
              Services
            </span>
            <h1 style={{ fontSize: '3rem', lineHeight: 1.1, marginTop: '1rem', marginBottom: '1.5rem' }}>
              Every lever you need to build, market, and scale a dominant digital brand.
            </h1>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.8)' }}>
              From high-velocity SEO sprints to custom apps and always-on reputation systems, each service is engineered
              to compound growth, not just deliver assets. Partner with squads who join your team, ship weekly, and make performance nerds proud.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
              <a
                href="#catalog"
                style={{
                  background: '#C6FF1A',
                  color: '#16181d',
                  padding: '0.9rem 1.8rem',
                  borderRadius: '999px',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                View all services
              </a>
              <a
                href="#conversation"
                style={{
                  border: '1px solid rgba(255,255,255,0.4)',
                  color: '#fff',
                  padding: '0.9rem 1.8rem',
                  borderRadius: '999px',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                Book a discovery session
              </a>
            </div>
          </div>
          <div style={{ background: 'rgba(14,16,20,0.6)', borderRadius: '20px', padding: '2rem', border: '1px solid rgba(255,255,255,0.08)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#C6FF1A' }}>Built on measurable outcomes</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(120px,1fr))', gap: '1.5rem' }}>
              {heroStats.map((stat) => (
                <div key={stat.metric}>
                  <div style={{ fontSize: '2rem', fontWeight: 700 }}>{stat.metric}</div>
                  <div style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)' }}>{stat.label}</div>
                </div>
              ))}
            </div>
            <p style={{ marginTop: '1.5rem', fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)' }}>
              Data sourced from active client engagements, GSC, GA4, and internal delivery benchmarks for 2022-2025.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container" style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          {pillarHighlights.map((pillar) => (
            <article
              key={pillar.title}
              style={{
                borderRadius: '18px',
                padding: '2rem',
                background: '#f8fafc',
                border: '1px solid #e5e9ef',
                boxShadow: '0 12px 32px rgba(15,23,42,0.08)',
              }}
            >
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#1f2937' }}>{pillar.title}</h3>
              <p style={{ color: '#475569', lineHeight: 1.7 }}>{pillar.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="catalog" style={{ padding: '5rem 0', background: '#f1f5f9' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {serviceCategories.map((category) => (
            <div key={category.id} id={category.id}>
              <div style={{ marginBottom: '2.5rem', maxWidth: '720px' }}>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.18em', fontSize: '0.85rem', color: '#6366f1', fontWeight: 600 }}>
                  {category.title}
                </span>
                <h2 style={{ fontSize: '2.4rem', color: '#0f172a', marginTop: '0.75rem', marginBottom: '1rem' }}>
                  {category.title}
                </h2>
                <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8 }}>{category.description}</p>
                {category.highlight ? (
                  <div
                    style={{
                      marginTop: '1.25rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      background: '#fff',
                      borderRadius: '999px',
                      padding: '0.4rem 1.1rem',
                      border: '1px solid #cbd5f5',
                      color: '#334155',
                      fontSize: '0.95rem',
                    }}
                  >
                    <span style={{ fontSize: '1.1rem' }}>✨</span>
                    <span>{category.highlight}</span>
                  </div>
                ) : null}
              </div>
              <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
                {category.services.map((service) => (
                  <div
                    key={service.slug}
                    style={{
                      background: '#fff',
                      borderRadius: '18px',
                      padding: '1.8rem',
                      border: '1px solid #e2e8f0',
                      boxShadow: '0 24px 48px rgba(15, 23, 42, 0.07)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                      minHeight: '220px',
                    }}
                  >
                    <div>
                      <h3 style={{ fontSize: '1.25rem', color: '#1f2937', marginBottom: '0.6rem' }}>
                        {service.name}
                      </h3>
                      <p style={{ color: '#475569', lineHeight: 1.6 }}>{service.excerpt}</p>
                    </div>
                    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Link
                        href={`/${service.slug}`}
                        style={{ color: '#4f46e5', fontWeight: 600, textDecoration: 'none' }}
                      >
                        View playbook →
                      </Link>
                      {service.badges ? (
                        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                          {service.badges.map((badge) => (
                            <span
                              key={badge}
                              style={{
                                fontSize: '0.75rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.08em',
                                background: '#eef2ff',
                                color: '#4338ca',
                                padding: '0.2rem 0.6rem',
                                borderRadius: '999px',
                                fontWeight: 600,
                              }}
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container" style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          <div>
            <h2 style={{ fontSize: '2.1rem', color: '#0f172a', marginBottom: '1rem' }}>Engagement frameworks that flex with you</h2>
            <p style={{ color: '#475569', lineHeight: 1.7 }}>
              Choose fully managed growth pods, hybrid squads that embed with your team, or targeted sprints that unblock high-impact initiatives.
              Each engagement includes the tooling, insights, and documentation you need to move faster after every delivery cycle.
            </p>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '1.2rem' }}>
            {[
              'CRO dashboards with GA4, Looker Studio, and real-time Slack alerts.',
              'Dedicated strategists, PMs, and senior specialists aligned to your KPIs.',
              'Weekly momentum calls with proactive ideas, blockers, and backlog grooming.',
              'Transparency from brief to launch with Notion workspaces and Loom walkthroughs.',
            ].map((item) => (
              <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', color: '#334155' }}>
                <span style={{ fontSize: '1.2rem', color: '#4f46e5' }}>▹</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="conversation"
        style={{
          padding: '4.5rem 0',
          background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
          color: '#fff',
        }}
      >
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1.5rem', maxWidth: '720px' }}>
          <h2 style={{ fontSize: '2.4rem', lineHeight: 1.1 }}>Let’s architect your next growth leap</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.85)' }}>
            Share your pipeline targets, product roadmap, and customer truths. We’ll map a service mix that compounds wins, not workload.
            First strategy call is on us.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a
              href="#contact"
              style={{
                background: '#C6FF1A',
                color: '#1f2937',
                padding: '0.95rem 2.2rem',
                borderRadius: '999px',
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              Plan my roadmap
            </a>
            <a
              href="tel:+13853551138"
              style={{
                border: '1px solid rgba(255,255,255,0.45)',
                color: '#fff',
                padding: '0.95rem 2.2rem',
                borderRadius: '999px',
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              Call (385) 355-1138
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
