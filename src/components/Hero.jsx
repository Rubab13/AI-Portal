import '../theme.css';
import '../css/responsiveness.css';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import heroStyles from './Hero.module.css';
import kalsoftLogo from '../assets/logo/logo1.png';
import image1 from '../assets/hero-section-images/image1.jpg';
import image2 from '../assets/hero-section-images/image2.jpg';
import image3 from '../assets/hero-section-images/image3.jpg';
import image4 from '../assets/hero-section-images/image4.png';
import image5 from '../assets/hero-section-images/image5.png';
import image6 from '../assets/hero-section-images/image6.png';

const leftColumnImages = [
  { src: image1, alt: 'Kalsoft AI suite visual one' },
  { src: image2, alt: 'Kalsoft AI suite visual two' },
  { src: image3, alt: 'Kalsoft AI suite visual three' },
  { src: image4, alt: 'Kalsoft AI suite visual four' },
  { src: image5, alt: 'Kalsoft AI suite visual five' },
  { src: image6, alt: 'Kalsoft AI suite visual six' },
];

const rightColumnImages = [
  { src: image1, alt: 'Kalsoft AI suite visual one' },
  { src: image2, alt: 'Kalsoft AI suite visual two' },
  { src: image3, alt: 'Kalsoft AI suite visual three' },
  { src: image4, alt: 'Kalsoft AI suite visual four' },
  { src: image5, alt: 'Kalsoft AI suite visual five' },
  { src: image6, alt: 'Kalsoft AI suite visual six' },
];

export default function Hero() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
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

          <nav className={`${heroStyles.heroNav} desktop-nav`} aria-label="Primary">
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

          <div className={`${heroStyles.headerActions} desktop-actions`}>
            <a
              href="https://www.kalsoft.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={heroStyles.signInButton}
            >
              Visit Website
            </a>
          </div>

          <button
            type="button"
            className={`burger-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <button type="button" className="mobile-menu-item" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); closeMobileMenu(); }}>
              Home
            </button>
            <button type="button" className="mobile-menu-item" onClick={() => { scrollToElementById('quick-value-strip'); closeMobileMenu(); }}>
              Value
            </button>
            <button type="button" className="mobile-menu-item" onClick={() => { scrollToElementById('agent-slider'); closeMobileMenu(); }}>
              Agents
            </button>
            <button type="button" className="mobile-menu-item" onClick={() => { scrollToSelector('footer'); closeMobileMenu(); }}>
              Contact Us
            </button>
            <a
              href="https://www.kalsoft.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-menu-link"
              onClick={closeMobileMenu}
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

            {/* <div className={heroStyles.socialProof}>
              <div className={heroStyles.avatarRow} aria-hidden="true">
                <img src={image1} alt="" className={heroStyles.avatar} />
                <img src={image2} alt="" className={heroStyles.avatar} />
                <img src={image3} alt="" className={heroStyles.avatar} />
              </div>
              <p className={heroStyles.socialText}>Join with millions of users and start generating impact now</p>
            </div> */}
          </div>

          <div className={heroStyles.heroGallery}>
            <div className={heroStyles.galleryColumnViewport}>
              <div className={`${heroStyles.galleryTrack} ${heroStyles.trackUp}`}>
                {[...leftColumnImages, ...leftColumnImages].map((image, index) => (
                  <figure
                    key={`left-${index}`}
                    className={`${heroStyles.galleryCard} ${index % 2 === 0 ? heroStyles.cardSquare : heroStyles.cardRectangle}`}
                  >
                    <img src={image.src} alt={image.alt} className={heroStyles.galleryImage} />
                  </figure>
                ))}
              </div>
            </div>

            <div className={heroStyles.galleryColumnViewport}>
              <div className={`${heroStyles.galleryTrack} ${heroStyles.trackDown}`}>
                {[...rightColumnImages, ...rightColumnImages].map((image, index) => (
                  <figure
                    key={`right-${index}`}
                    className={`${heroStyles.galleryCard} ${index % 3 === 0 ? heroStyles.cardSmall : index % 3 === 1 ? heroStyles.cardLarge : heroStyles.cardMedium}`}
                  >
                    <img src={image.src} alt={image.alt} className={heroStyles.galleryImage} />
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
