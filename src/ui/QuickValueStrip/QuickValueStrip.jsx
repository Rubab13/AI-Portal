import {
  RiRobot2Line,
  RiTimeLine,
  RiCodeSSlashLine,
  RiShieldCheckLine,
} from 'react-icons/ri';
import Heading from '../Heading/Heading';
import styles from './QuickValueStrip.module.css';

const quickBenefits = [
  { label: 'Automate workflows', Icon: RiRobot2Line },
  { label: 'Save hours daily', Icon: RiTimeLine },
  { label: 'No-code setup', Icon: RiCodeSSlashLine },
  { label: 'Enterprise-ready', Icon: RiShieldCheckLine },
];

export default function QuickValueStrip() {
  return (
    <section className={styles.quickValueStrip} aria-label="Quick value highlights">
      <div className={`site-shell ${styles.quickValueWrap}`}>
        <Heading text="KALSOFT AI QUICK VALUE" />

        <div className={styles.quickValueGrid}>
          {quickBenefits.map(({ label, Icon }) => (
            <article key={label} className={styles.quickValueItem}>
              <span className={styles.quickValueIconWrap} aria-hidden="true">
                <Icon className={styles.quickValueIcon} />
              </span>
              <p className={styles.quickValueText}>{label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
