import styles from './Footer.module.css';

import microsoftPartnerLogo from '../../assets/footer/Microsoft Partner.png';
import nintexLogo from '../../assets/footer/Nintex Logo.png';
import sitecoreLogo from '../../assets/footer/Site-core logo.png';
import uiPathLogo from '../../assets/footer/UI Path Logo.png';

const partnerLogos = [
  { src: microsoftPartnerLogo, alt: 'Microsoft Partner' },
  { src: nintexLogo, alt: 'Nintex' },
  { src: sitecoreLogo, alt: 'Sitecore' },
  { src: uiPathLogo, alt: 'UiPath' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`site-shell ${styles.footerWrap}`}>
        <div className={styles.footerLeft}>
          <p className={styles.footerBrand}>Kalsoft AI Portal</p>
          <p className={styles.footerCopy}>© 2026 Kalsoft AI Portal. All rights reserved.</p>
        </div>

        <ul className={styles.footerMenu} aria-label="Footer links">
          <li><a href="https://www.kalsoft.com/about-our-company/" target='_blank' className={styles.menuLink}>COMPANY</a></li>
          <li><a href="https://www.kalsoft.com/case-studies/" target='_blank' className={styles.menuLink}>CASE STUDIES</a></li>
          <li><a href="https://www.kalsoft.com/careers/" target='_blank' className={styles.menuLink}>CAREER</a></li>
          <li><a href="https://www.kalsoft.com/contact-us/" target='_blank' className={`${styles.menuLink} ${styles.supportLink}`}>Contact Us</a></li>
        </ul>

        {/* <div className={styles.footerIcons} aria-label="Footer actions">
          <button type="button" className={styles.iconButton} aria-label="Open terminal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3.5" y="5" width="17" height="14" rx="2.5" />
              <path d="M8 10.5l2.8 1.8L8 14.2" />
              <path d="M12.5 14.2h3.5" />
            </svg>
          </button>
          <button type="button" className={styles.iconButton} aria-label="Switch language">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="12" r="6.8" />
              <path d="M5.2 12h13.6" />
              <path d="M12 5.2c2.1 2 2.1 11.6 0 13.6" />
              <path d="M12 5.2c-2.1 2-2.1 11.6 0 13.6" />
            </svg>
          </button>
        </div> */}
      </div>
      <div className={`site-shell ${styles.footerWrap} ${styles.partnerStrip}`}>
        <div className={styles.partnerLogoRow} aria-label="Partner logos">
          {partnerLogos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className={styles.partnerLogo}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </footer>
  );
}
