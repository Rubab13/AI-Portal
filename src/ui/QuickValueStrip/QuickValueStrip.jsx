import { useEffect, useRef, useState } from 'react';
import {
  RiRobot2Line,
  RiTimeLine,
  RiCodeSSlashLine,
  RiShieldCheckLine,
} from 'react-icons/ri';
import Heading from '../Heading/Heading';
import styles from './QuickValueStrip.module.css';

const quickBenefits = [
  {
    label: 'Automate workflows',
    Icon: RiRobot2Line,
    metricValue: 10,
    metricSuffix: '',
    metricLabel: 'flows automated',
    description: 'Build repeatable automations in minutes and let teams focus on high-value decisions.',
  },
  {
    label: 'Save hours daily',
    Icon: RiTimeLine,
    metricValue: 6,
    metricSuffix: '+',
    metricLabel: 'hours saved per day',
    description: 'Reduce manual back-and-forth with intelligent task orchestration and smart routing.',
  },
  {
    label: 'No-code setup',
    Icon: RiCodeSSlashLine,
    metricValue: 15,
    metricSuffix: 'm',
    metricLabel: 'average launch time',
    description: 'Configure assistants quickly using guided flows, templates, and business-first controls.',
  },
  {
    label: 'Enterprise-ready',
    Icon: RiShieldCheckLine,
    metricValue: 99,
    metricSuffix: '.9%',
    metricLabel: 'process reliability',
    description: 'Designed for scale with governance-ready workflows and dependable operational performance.',
  },
];

export default function QuickValueStrip() {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [animatedMetrics, setAnimatedMetrics] = useState(() => quickBenefits.map(() => 0));

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.24,
      }
    );

    observer.observe(sectionElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    const duration = 1300;
    const targets = quickBenefits.map((item) => item.metricValue);
    const startTime = performance.now();
    let frameId = 0;

    const tick = (timestamp) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setAnimatedMetrics(targets.map((target) => Math.round(target * easedProgress)));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [isInView]);

  return (
    <section ref={sectionRef} className={styles.quickValueStrip} aria-label="Quick value highlights">
      <div className={`site-shell ${styles.quickValueWrap}`}>
        <Heading text="KALSOFT AI QUICK VALUE" />

        <div className={styles.quickValueGrid}>
          {quickBenefits.map(({ label, Icon, metricSuffix, metricLabel, description }, index) => {
            const directionClass = index < 2 ? styles.fromLeft : styles.fromRight;
            return (
              <article
                key={label}
                className={`${styles.quickValueItem} ${directionClass} ${isInView ? styles.isVisible : ''}`}
              >
                <div className={styles.quickValueTop}>
                  <span className={styles.quickValueIconWrap} aria-hidden="true">
                    <Icon className={styles.quickValueIcon} />
                  </span>
                  <p className={styles.quickValueText}>{label}</p>
                </div>
                <p className={styles.quickValueMetric}>
                  <span className={styles.quickValueMetricValue}>{animatedMetrics[index]}</span>
                  <span className={styles.quickValueMetricSuffix}>{metricSuffix}</span>
                  <span className={styles.quickValueMetricLabel}>{metricLabel}</span>
                </p>
                <p className={styles.quickValueDescription}>{description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
