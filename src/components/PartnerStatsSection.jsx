import Heading from '../ui/Heading/Heading';

const stats = [
  {
    value: '07',
    label: 'GLOBAL OFFICES',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="4" width="10" height="16" rx="2" />
        <rect x="14" y="8" width="7" height="12" rx="1.5" />
        <path d="M7 8h2M7 11h2M7 14h2M17 12h1.5M17 15h1.5" />
      </svg>
    ),
  },
  {
    value: '20+',
    label: 'YEARS OF EXPERIENCE',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="8" cy="8" r="2.5" />
        <path d="M3.5 18v-2.2A3.8 3.8 0 0 1 7.3 12h1.4a3.8 3.8 0 0 1 3.8 3.8V18" />
        <path d="M15.5 10h5M18 7.5v5" />
      </svg>
    ),
  },
  {
    value: '12+',
    label: 'MICROSOFT COMPETENCIES',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    value: '800+',
    label: 'SATISFIED CUSTOMERS GLOBALLY',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M2.5 11.5h5.2l2.6-2.6a2.8 2.8 0 0 1 4 0l1.1 1.1h4.1a2 2 0 0 1 0 4h-4.9l-2.5 2.5a2.8 2.8 0 0 1-4 0l-2.4-2.4H2.5" />
      </svg>
    ),
  },
  {
    value: '1000+',
    label: 'PROJECTS DELIVERED',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="8" width="18" height="11" rx="2" />
        <path d="M9 8V6.5A1.5 1.5 0 0 1 10.5 5h3A1.5 1.5 0 0 1 15 6.5V8" />
      </svg>
    ),
  },
  {
    value: '200+',
    label: 'DEVELOPMENT STAFF',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="7" cy="8" r="2.2" />
        <circle cx="17" cy="8" r="2.2" />
        <circle cx="12" cy="6" r="2.5" />
        <path d="M3 18v-1.6A3.4 3.4 0 0 1 6.4 13h1.2" />
        <path d="M21 18v-1.6a3.4 3.4 0 0 0-3.4-3.4h-1.2" />
        <path d="M8 18v-2a4 4 0 0 1 4-4 4 4 0 0 1 4 4v2" />
      </svg>
    ),
  },
];

export default function PartnerStatsSection() {
  return (
    <section className="partner-stats-section" aria-label="Company metrics">
      <div className="site-shell partner-stats-top">
        <Heading text="MICROSOFT SOLUTIONS PARTNER" />

        <div className="partner-stats-grid">
          {stats.map((item) => (
            <article className="partner-stat-card" key={item.label}>
              <div className="partner-stat-head">
                <span className="partner-stat-icon">{item.icon}</span>
                <p className="partner-stat-value">{item.value}</p>
              </div>
              <p className="partner-stat-label">{item.label}</p>
            </article>
          ))}
        </div>
      </div>

      {/* Contact us section */}
      <div className="partner-cta-strip">
        <div className="site-shell partner-cta-wrap">
          <div className="partner-cta-content">
            <p className="partner-cta-eyebrow">Contact Us</p>
            <p className="partner-cta-title">Let's Start Working On Your Next Big Idea</p>
            <p className="partner-cta-copy">
              We are currently sharing one official channel for inquiries. Visit our website and reach out to
              the Kalsoft team from there.
            </p>
            <div className="partner-cta-website-row" aria-label="Official website">
              <span className="partner-cta-website-label">Official Website</span>
              <a
                className="partner-cta-website-link"
                href="https://www.kalsoft.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.kalsoft.com
              </a>
            </div>
            <a
              className="partner-cta-button"
              href="https://www.kalsoft.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              VISIT WEBSITE
            </a>
          </div>

          <div className="partner-cta-earth" aria-hidden="true">
            <svg className="partner-cta-earth-svg" viewBox="0 0 320 320" role="presentation">
              <defs>
                <radialGradient id="earthGlow" cx="50%" cy="50%" r="55%">
                  <stop offset="0%" stopColor="rgba(229, 57, 53, 0.28)" />
                  <stop offset="100%" stopColor="rgba(229, 57, 53, 0)" />
                </radialGradient>
                <linearGradient id="earthSphere" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f6f8fb" />
                  <stop offset="100%" stopColor="#d7dee8" />
                </linearGradient>
              </defs>
              <circle cx="160" cy="160" r="130" fill="url(#earthGlow)" />
              <circle cx="160" cy="160" r="102" fill="url(#earthSphere)" opacity="0.92" />
              <path
                d="M91 141c16-26 42-43 75-45 30-1 58 12 77 35M89 177c22 22 51 34 82 33 30-1 58-13 76-36"
                fill="none"
                stroke="#c9d2dd"
                strokeWidth="7"
                strokeLinecap="round"
              />
              <ellipse cx="160" cy="160" rx="100" ry="38" fill="none" stroke="#cfd7e2" strokeWidth="4" />
              <ellipse cx="160" cy="160" rx="100" ry="68" fill="none" stroke="#d7dee7" strokeWidth="3.5" />
              <path
                d="M148 79c-14 20-24 47-26 80-1 35 7 66 24 87M191 82c15 21 24 49 24 81 0 33-9 61-24 83"
                fill="none"
                stroke="#d5dde7"
                strokeWidth="3.6"
                strokeLinecap="round"
              />
              <circle cx="224" cy="88" r="5" fill="#dc1f26" />
              <circle cx="88" cy="206" r="4" fill="#dc1f26" opacity="0.7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
