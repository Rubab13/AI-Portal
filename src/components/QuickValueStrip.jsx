import {
  RiRobot2Line,
  RiTimeLine,
  RiCodeSSlashLine,
  RiShieldCheckLine,
} from 'react-icons/ri';

const quickBenefits = [
  { label: 'Automate workflows', Icon: RiRobot2Line },
  { label: 'Save hours daily', Icon: RiTimeLine },
  { label: 'No-code setup', Icon: RiCodeSSlashLine },
  { label: 'Enterprise-ready', Icon: RiShieldCheckLine },
];

export default function QuickValueStrip() {
  return (
    <section className="quick-value-strip" aria-label="Quick value highlights">
      <div className="site-shell quick-value-wrap">
        <div className="quick-value-title-wrap">
          <span className="quick-value-line" aria-hidden="true" />
          <h2 className="quick-value-title">KALSOFT AI QUICK VALUE</h2>
          <span className="quick-value-line" aria-hidden="true" />
        </div>

        <div className="quick-value-grid">
          {quickBenefits.map(({ label, Icon }) => (
            <article key={label} className="quick-value-item">
              <span className="quick-value-icon-wrap" aria-hidden="true">
                <Icon className="quick-value-icon" />
              </span>
              <p className="quick-value-text">{label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
