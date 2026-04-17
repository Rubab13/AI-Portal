import '../theme.css';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import heroStyles from './Hero.module.css';
import kalsoftLogo from '../assets/logo/logo1.png';
import suiteImage1 from '../assets/suite-landing-page-images/agentsuite1.jpg';
import suiteImage2 from '../assets/suite-landing-page-images/agentSuite2.jpg';
import suiteImage3 from '../assets/suite-landing-page-images/agentSuite3.png';
import suiteImage4 from '../assets/suite-landing-page-images/agentSuite4.png';

export default function Hero() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 8) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollYRef.current + 8) {
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollYRef.current - 8) {
        setIsHeaderVisible(true);
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToElementById = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSelector = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewAgents = () => {
    const sliderElement = document.getElementById('agent-slider');
    if (sliderElement) {
      sliderElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={heroStyles.heroSection}>
      <div className={`site-shell ${heroStyles.heroShell}`}>
        <header
          className={`${heroStyles.heroHeader} ${isHeaderVisible ? heroStyles.headerVisible : heroStyles.headerHidden}`}
        >
          <Link to="/" className={heroStyles.logoLink} aria-label="Kalsoft AI Portal home">
            <img src={kalsoftLogo} alt="Kalsoft logo" className={heroStyles.logoImage} />
          </Link>

          <nav className={heroStyles.heroNav} aria-label="Primary">
            <button type="button" className={heroStyles.navItem} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Home
            </button>
            <button type="button" className={heroStyles.navItem} onClick={() => scrollToElementById('quick-value-strip')}>
              Value
            </button>
            <button type="button" className={heroStyles.navItem} onClick={() => scrollToElementById('agent-slider')}>
              Agents
            </button>
            <button type="button" className={heroStyles.navItem} onClick={() => scrollToSelector('footer')}>
              Contact Us
            </button>
          </nav>

          <div className={heroStyles.headerActions}>
            <a
              href="https://www.kalsoft.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={heroStyles.signInButton}
            >
              Visit Website
            </a>
          </div>
        </header>

        <div className={heroStyles.heroGrid}>
          <div className={heroStyles.heroLeft}>
            <h1 className={heroStyles.heroTitle}>
              <span>Kalsoft AI Portal</span>
              <span>for Autonomous Growth.</span>
            </h1>

            <p className={heroStyles.heroCopy}>
              Empower your business with Kalsoft&apos;s AI-led digital transformation, intelligent business solutions,
              and enterprise-grade web and mobile platforms.
            </p>

            <div className={heroStyles.heroActions}>
              <a
                className={`${heroStyles.heroButton} ${heroStyles.primaryButton}`}
                href="https://www.kalsoft.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Kalsoft Website
              </a>
              <button
                className={`${heroStyles.heroButton} ${heroStyles.secondaryButton}`}
                type="button"
                onClick={handleViewAgents}
              >
                Explore Agents
              </button>
            </div>

            <div className={heroStyles.socialProof}>
              <div className={heroStyles.avatarRow} aria-hidden="true">
                <img src={suiteImage1} alt="" className={heroStyles.avatar} />
                <img src={suiteImage3} alt="" className={heroStyles.avatar} />
                <img src={suiteImage4} alt="" className={heroStyles.avatar} />
              </div>
              <p className={heroStyles.socialText}>Join with 2100+ users and start generating impact now</p>
            </div>
          </div>

          <div className={heroStyles.heroGallery}>
            <figure className={`${heroStyles.galleryCard} ${heroStyles.cardTopLeft}`}>
              <img src={suiteImage1} alt="Kalsoft AI suite visual one" className={heroStyles.galleryImage} />
            </figure>
            <figure className={`${heroStyles.galleryCard} ${heroStyles.cardTopRight}`}>
              <img src={suiteImage4} alt="Kalsoft AI suite visual two" className={heroStyles.galleryImage} />
            </figure>
            <figure className={`${heroStyles.galleryCard} ${heroStyles.cardMiddleLeft}`}>
              <img src={suiteImage2} alt="Kalsoft AI suite visual two" className={heroStyles.galleryImage} />
            </figure>
            <figure className={`${heroStyles.galleryCard} ${heroStyles.cardMiddleRight}`}>
              <img src={suiteImage3} alt="Kalsoft AI suite visual three" className={heroStyles.galleryImage} />
            </figure>
            <figure className={`${heroStyles.galleryCard} ${heroStyles.cardBottomLeft}`}>
              <img src={suiteImage1} alt="Kalsoft AI suite visual repeated" className={heroStyles.galleryImage} />
            </figure>
            <figure className={`${heroStyles.galleryCard} ${heroStyles.cardBottomRight}`}>
              <img src={suiteImage4} alt="Kalsoft AI suite visual repeated fourth" className={heroStyles.galleryImage} />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
