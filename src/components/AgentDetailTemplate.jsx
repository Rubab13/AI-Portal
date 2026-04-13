import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiApachekafka,
  SiOpenai,
  SiRedis,
  SiPytorch
} from 'react-icons/si';
import { FaUserTie, FaUser, FaHome, FaBook, FaImage, FaWrench, FaLightbulb } from 'react-icons/fa';
import { MdArrowForward } from 'react-icons/md';

export default function AgentDetailTemplate({ 
  suiteNumber, 
  title, 
  description, 
  features,
  galleryImages,
  howToUse = [],
  howItWorks = [],
  videoSrc = ''
}) {
  const location = useLocation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [areFeaturesInView, setAreFeaturesInView] = useState(false);
  const [isHowToUseInView, setIsHowToUseInView] = useState(false);
  const [centerTechKeys, setCenterTechKeys] = useState([]);
  const [activeNavSection, setActiveNavSection] = useState('hero');
  const heroSectionRef = useRef(null);
  const featuresSectionRef = useRef(null);
  const howToUseSectionRef = useRef(null);
  const howItWorksSectionRef = useRef(null);
  const gallerySectionRef = useRef(null);
  const techStackSectionRef = useRef(null);
  const techMarqueeRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  useEffect(() => {
    if (location.state?.openVideoModal && videoSrc) {
      setIsVideoModalOpen(true);
    }
  }, [location.state, videoSrc]);

  // Handle active nav section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: heroSectionRef, id: 'hero' },
        { ref: featuresSectionRef, id: 'features' },
        { ref: howToUseSectionRef, id: 'howToUse' },
        { ref: howItWorksSectionRef, id: 'howItWorks' },
        { ref: gallerySectionRef, id: 'gallery' },
        { ref: techStackSectionRef, id: 'techStack' }
      ];

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.ref.current) {
          const sectionTop = section.ref.current.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveNavSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const sectionElement = featuresSectionRef.current;
    if (!sectionElement) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAreFeaturesInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.25
      }
    );

    observer.observe(sectionElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const sectionElement = howToUseSectionRef.current;
    if (!sectionElement) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsHowToUseInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2
      }
    );

    observer.observe(sectionElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  const personalizedFeatureNote = (() => {
    switch (String(suiteNumber)) {
      case '01':
        return 'Kalsoft HRM Agent helps your talent team hire faster with AI-screening, interview intelligence, and transparent candidate scoring in one smooth workflow.';
      case '02':
        return 'Kalsoft Contract Evaluator gives procurement and compliance teams AI-backed clarity, so contract risks are surfaced early and decisions stay measurable.';
      case '03':
        return 'Kalsoft Database Agent turns natural language into reliable data operations, helping business users fetch insights quickly without writing complex queries.';
      case '04':
        return 'Kalsoft Forecasting Agent blends historical trends and business context to produce practical demand predictions your operations team can trust.';
      default:
        return 'Kalsoft Agentic Suite combines intelligent automation and enterprise reliability to accelerate decision-making with explainable AI insights.';
    }
  })();

  const techStack = [
    { name: 'React', Icon: SiReact },
    { name: 'Node.js', Icon: SiNodedotjs },
    { name: 'Express', Icon: SiExpress },
    { name: 'Python', Icon: SiPython },
    { name: 'PostgreSQL', Icon: SiPostgresql },
    { name: 'MongoDB', Icon: SiMongodb },
    { name: 'Docker', Icon: SiDocker },
    { name: 'Kubernetes', Icon: SiKubernetes },
    { name: 'Kafka', Icon: SiApachekafka },
    { name: 'OpenAI API', Icon: SiOpenai },
    { name: 'Redis', Icon: SiRedis },
    { name: 'PyTorch', Icon: SiPytorch }
  ];

  useEffect(() => {
    const marqueeElement = techMarqueeRef.current;
    if (!marqueeElement) {
      return;
    }

    const updateCenterChips = () => {
      const marqueeRect = marqueeElement.getBoundingClientRect();
      const marqueeCenterX = marqueeRect.left + marqueeRect.width / 2;

      const chips = Array.from(marqueeElement.querySelectorAll('.agent-tech-chip[data-chip-key]'));
      const visibleChips = chips.filter((chip) => {
        const rect = chip.getBoundingClientRect();
        return rect.right > marqueeRect.left && rect.left < marqueeRect.right;
      });

      const nearestThreeKeys = visibleChips
        .map((chip) => {
          const rect = chip.getBoundingClientRect();
          const chipCenterX = rect.left + rect.width / 2;
          return {
            key: chip.getAttribute('data-chip-key'),
            distance: Math.abs(chipCenterX - marqueeCenterX)
          };
        })
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 3)
        .map((item) => item.key)
        .filter(Boolean);

      setCenterTechKeys((prev) => {
        if (prev.length === nearestThreeKeys.length && prev.every((key, index) => key === nearestThreeKeys[index])) {
          return prev;
        }
        return nearestThreeKeys;
      });
    };

    updateCenterChips();
    const intervalId = window.setInterval(updateCenterChips, 120);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  const styles = `
    .agent-detail-container {
      position: relative;
      min-height: 100vh;
      background: linear-gradient(135deg, #f7f3f4 0%, #ffffff 100%);
    }

    .agent-page-top-left-nav {
      position: absolute;
      top: 1.25rem;
      left: 1.5rem;
      z-index: 20;
    }

    .agent-cta-button {
      display: inline-flex;
      padding: 1rem 2rem;
      background: linear-gradient(135deg, #dc1f26 0%, #b81b20 100%);
      color: white;
      border: none;
      border-radius: 0.75rem;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      box-shadow: 0 12px 24px rgba(220, 31, 38, 0.24);
      transition: all 0.3s ease;
      text-decoration: none;
    }

    .agent-cta-button:hover {
      transform: translateY(-0.25rem);
      box-shadow: 0 16px 32px rgba(220, 31, 38, 0.32);
    }

    /* Hero Section */
    .agent-hero {
      position: relative;
      width: 100%;
      min-height: 100vh;
      padding: 4rem 1.5rem;
      overflow: hidden;
      background: #ffffff;
      display: flex;
      align-items: center;
    }

    .agent-hero::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: clamp(320px, 46vw, 760px);
      height: 100%;
      background-image: url('/pixel-red-pattern.svg');
      background-repeat: no-repeat;
      background-position: right center;
      background-size: cover;
      image-rendering: pixelated;
      opacity: 0.95;
      z-index: 1;
      pointer-events: none;
    }

    .agent-hero-inner {
      position: relative;
      z-index: 2;
      width: 100%;
      max-width: 1400px;
      margin: 0 auto;
    }

    .agent-hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.25rem;
      background: linear-gradient(135deg, #fff7f7 0%, #fce8e8 100%);
      border: 1px solid #e8a5a5;
      border-radius: 50px;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      color: #dc1f26;
      margin-bottom: 1.5rem;
      text-transform: uppercase;
    }

    .agent-hero-title {
      font-size: 3.5rem;
      font-weight: 800;
      color: #0f172a;
      line-height: 1.2;
      margin-bottom: 1.5rem;
    }

    .agent-hero-description {
      font-size: 1.1rem;
      color: #4b5565;
      line-height: 1.8;
      max-width: 800px;
      margin-bottom: 3rem;
    }

    .agent-hero-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: stretch;
    }

    .agent-video-placeholder {
      position: relative;
      width: 100%;
      aspect-ratio: 16 / 9;
      background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%);
      border-radius: 1.5rem;
      overflow: hidden;
      box-shadow: 0 20px 50px rgba(220, 31, 38, 0.15);
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid rgba(220, 31, 38, 0.2);
      transition: all 0.3s ease;
    }

    .agent-video-placeholder:hover {
      box-shadow: 0 30px 70px rgba(220, 31, 38, 0.25);
      border-color: rgba(220, 31, 38, 0.4);
    }

    .agent-video-icon {
      font-size: 4rem;
      opacity: 0.6;
      transition: all 0.3s ease;
    }

    .agent-video-placeholder:hover .agent-video-icon {
      opacity: 1;
      transform: scale(1.1);
    }

    .agent-video-label {
      position: absolute;
      bottom: 1.5rem;
      left: 1.5rem;
      background: rgba(220, 31, 38, 0.9);
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: 0.75rem;
      font-size: 0.9rem;
      font-weight: 600;
      border: none;
      cursor: pointer;
      transition: all 0.25s ease;
    }

    .agent-video-label:hover {
      background: rgba(184, 27, 32, 0.95);
      transform: translateY(-2px);
    }

    .agent-hero-video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      background: #000000;
    }

    .agent-video-modal {
      position: fixed;
      inset: 0;
      background: rgba(5, 8, 15, 0.86);
      backdrop-filter: blur(8px);
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    }

    .agent-video-modal-content {
      position: relative;
      width: min(1100px, 92vw);
      border-radius: 1rem;
      overflow: hidden;
      box-shadow: 0 28px 60px rgba(0, 0, 0, 0.45);
      border: 1px solid rgba(255, 255, 255, 0.18);
      background: #000000;
    }

    .agent-video-modal-player {
      width: 100%;
      max-height: 80vh;
      display: block;
      background: #000000;
    }

    .agent-video-modal-close {
      position: absolute;
      top: 0.9rem;
      right: 0.9rem;
      width: 2.2rem;
      height: 2.2rem;
      border: none;
      border-radius: 9999px;
      background: rgba(220, 31, 38, 0.95);
      color: #ffffff;
      font-size: 1.1rem;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 6px 14px rgba(220, 31, 38, 0.28);
      transition: all 0.25s ease;
    }

    .agent-video-modal-close:hover {
      background: #b81b20;
      transform: scale(1.08);
    }

    .agent-capabilities {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .agent-capabilities-title {
      font-size: 1.4rem;
      font-weight: 700;
      color: #dc1f26;
      margin-bottom: 1rem;
    }

    .agent-capability-item {
      width: 75%;
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      padding: 1rem;
      background: white;
      border-radius: 0.75rem;
      border-left: 4px solid #dc1f26;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
      transition: all 0.3s ease;
    }

    .agent-capability-item:hover {
      transform: translateX(0.5rem);
      box-shadow: 0 4px 16px rgba(220, 31, 38, 0.1);
    }

    .agent-capability-icon {
      font-size: 1.5rem;
      color: #dc1f26;
      flex-shrink: 0;
    }

    .agent-capability-text {
      color: #334155;
      font-weight: 500;
      line-height: 1.5;
    }

    /* Features Section */
    .agent-features {
      padding: 4rem 1.5rem;
      background: white;
      margin-top: 3rem;
    }

    .agent-features-wrapper {
      max-width: 1400px;
      margin: 0 auto;
    }

    .agent-section-title {
      font-size: 2.5rem;
      font-weight: 800;
      color: #0f172a;
      margin-bottom: 3rem;
      text-align: center;
      background: linear-gradient(135deg, #0f172a 0%, #334155 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .agent-features-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1.25rem;
      align-items: stretch;
    }

    .agent-feature-card {
      padding: 1.5rem;
      background: linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%);
      border: 1px solid #e8e8e8;
      border-radius: 1.25rem;
      opacity: 0;
      transform: translateY(24px);
      transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.7s ease, box-shadow 0.3s ease, border-color 0.3s ease;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      min-height: 220px;
      display: flex;
      flex-direction: column;
    }

    .agent-feature-insight {
      grid-column: 1 / 3;
      border: 1px solid #efc8c8;
      border-radius: 1.25rem;
      padding: 1.5rem;
      background: #fff8f8;
      box-shadow: 0 8px 20px rgba(220, 31, 38, 0.08);
      opacity: 0;
      transform: translateY(24px);
      transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.7s ease;
      min-height: 220px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .agent-feature-insight-label {
      margin: 0 0 0.6rem;
      font-size: 0.78rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #b81b20;
    }

    .agent-feature-insight-title {
      margin: 0 0 0.7rem;
      font-size: 1.25rem;
      font-weight: 800;
      color: #0f172a;
      line-height: 1.3;
    }

    .agent-feature-insight-copy {
      margin: 0;
      font-size: 0.98rem;
      color: #475569;
      line-height: 1.7;
    }

    .agent-feature-card.is-highlight {
      grid-column: 3 / 4;
      background: linear-gradient(135deg, #dc1f26 0%, #b81b20 100%);
      border-color: #dc1f26;
      box-shadow: 0 14px 30px rgba(220, 31, 38, 0.22);
      color: #ffffff;
    }

    .agent-features-grid.is-visible .agent-feature-card,
    .agent-features-grid.is-visible .agent-feature-insight {
      opacity: 1;
      transform: translateY(0);
    }

    .agent-feature-card:hover {
      transform: translateY(-0.35rem);
      box-shadow: 0 12px 24px rgba(220, 31, 38, 0.12);
      border-color: #dc1f26;
    }

    .agent-feature-card.is-highlight:hover {
      transform: translateY(-0.35rem);
      box-shadow: 0 16px 30px rgba(220, 31, 38, 0.28);
      border-color: #dc1f26;
    }

    @media (prefers-reduced-motion: reduce) {
      .agent-feature-card,
      .agent-feature-insight {
        transition: none;
        transform: none;
        opacity: 1;
      }
    }

    .agent-feature-icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .agent-feature-name {
      font-size: 1.1rem;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 0.75rem;
    }

    .agent-feature-description {
      font-size: 0.95rem;
      color: #666666;
      line-height: 1.6;
    }

    .agent-feature-card.is-highlight .agent-feature-name,
    .agent-feature-card.is-highlight .agent-feature-description,
    .agent-feature-card.is-highlight .agent-feature-icon {
      color: #ffffff;
    }

    /* How To Use Section */
    .agent-how-use {
      padding: 4rem 1.5rem;
      background: #ffffff;
    }

    .agent-how-use-wrapper {
      max-width: 1400px;
      margin: 0 auto;
    }

    .agent-how-use-subtitle {
      text-align: center;
      max-width: 820px;
      margin: -1.8rem auto 2.5rem;
      color: #5b6575;
      line-height: 1.7;
      font-size: 1rem;
    }

    .agent-how-use-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1.25rem;
    }

    .agent-how-use-patti-wrap {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1rem;
      margin: 0 auto 1.35rem;
      max-width: 980px;
    }

    .agent-how-use-patti {
      display: inline-flex;
      align-items: center;
      gap: 0.65rem;
      border: 1px solid #efc8c8;
      border-radius: 9999px;
      padding: 0.65rem 1rem;
      background: #ffffff;
      color: #b81b20;
      font-weight: 800;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      justify-content: center;
      box-shadow: 0 8px 18px rgba(220, 31, 38, 0.08);
    }

    .agent-how-use-patti-icon {
      width: 1rem;
      height: 1rem;
      color: #dc1f26;
    }

    .agent-how-use-card {
      border: 1px solid #f0cfcf;
      background: #fff8f8;
      border-radius: 1rem;
      padding: 1.35rem;
      box-shadow: 0 8px 20px rgba(220, 31, 38, 0.08);
      opacity: 0;
      transform: translateY(28px);
      transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.7s ease;
    }

    .agent-how-use-grid.is-visible .agent-how-use-card {
      opacity: 1;
      transform: translateY(0);
    }

    .agent-how-use-grid.is-visible .agent-how-use-card:nth-child(1) {
      transition-delay: 0.06s;
    }

    .agent-how-use-grid.is-visible .agent-how-use-card:nth-child(2) {
      transition-delay: 0.15s;
    }

    .agent-how-use-role {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      margin: 0 0 1rem;
      padding: 0.45rem 0.8rem;
      border: 1px solid #e8a5a5;
      border-radius: 9999px;
      background: #ffffff;
      color: #b81b20;
      font-size: 0.82rem;
      font-weight: 800;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }

    .agent-how-use-list {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      gap: 0.6rem;
    }

    .agent-how-use-step {
      display: grid;
      grid-template-columns: 1.8rem 1fr auto;
      align-items: start;
      gap: 0.55rem;
      color: #2b3747;
      font-size: 0.95rem;
      line-height: 1.45;
      opacity: 0;
      transform: translateY(12px);
      transition: transform 0.45s ease, opacity 0.45s ease;
    }

    .agent-how-use-grid.is-visible .agent-how-use-step {
      opacity: 1;
      transform: translateY(0);
    }

    .agent-how-use-grid.is-visible .agent-how-use-card:nth-child(1) .agent-how-use-step:nth-child(1) {
      transition-delay: 0.16s;
    }

    .agent-how-use-grid.is-visible .agent-how-use-card:nth-child(1) .agent-how-use-step:nth-child(2) {
      transition-delay: 0.22s;
    }

    .agent-how-use-grid.is-visible .agent-how-use-card:nth-child(1) .agent-how-use-step:nth-child(3) {
      transition-delay: 0.28s;
    }

    .agent-how-use-grid.is-visible .agent-how-use-card:nth-child(1) .agent-how-use-step:nth-child(4) {
      transition-delay: 0.34s;
    }

    .agent-how-use-grid.is-visible .agent-how-use-card:nth-child(1) .agent-how-use-step:nth-child(5) {
      transition-delay: 0.4s;
    }

    .agent-how-use-grid.is-visible .agent-how-use-card:nth-child(1) .agent-how-use-step:nth-child(6) {
      transition-delay: 0.46s;
    }

    .agent-how-use-grid.is-visible .agent-how-use-card:nth-child(2) .agent-how-use-step:nth-child(1) {
      transition-delay: 0.2s;
    }

    .agent-how-use-grid.is-visible .agent-how-use-card:nth-child(2) .agent-how-use-step:nth-child(2) {
      transition-delay: 0.26s;
    }

    .agent-how-use-grid.is-visible .agent-how-use-card:nth-child(2) .agent-how-use-step:nth-child(3) {
      transition-delay: 0.32s;
    }

    .agent-how-use-grid.is-visible .agent-how-use-card:nth-child(2) .agent-how-use-step:nth-child(4) {
      transition-delay: 0.38s;
    }

    .agent-how-use-grid.is-visible .agent-how-use-card:nth-child(2) .agent-how-use-step:nth-child(5) {
      transition-delay: 0.44s;
    }

    .agent-how-use-index {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 9999px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 0.76rem;
      font-weight: 700;
      color: #ffffff;
      background: #dc1f26;
      margin-top: 0.05rem;
    }

    .agent-how-use-text {
      display: inline-flex;
      align-items: flex-start;
      gap: 0.45rem;
    }

    .agent-how-use-bullet-icon {
      width: 0.92rem;
      height: 0.92rem;
      color: #dc1f26;
      margin-top: 0.22rem;
      flex-shrink: 0;
    }

    .agent-how-use-arrow {
      width: 1.1rem;
      height: 1.1rem;
      color: #dc1f26;
      margin-top: 0.12rem;
      opacity: 0.75;
    }

    /* How It Works Section */
    .agent-how {
      padding: 4rem 1.5rem;
      background: linear-gradient(135deg, #fdf8f8 0%, #ffffff 100%);
    }

    .agent-how-wrapper {
      max-width: 1400px;
      margin: 0 auto;
    }

    .agent-how-subtitle {
      text-align: center;
      max-width: 850px;
      margin: -1.75rem auto 2.5rem;
      color: #5b6575;
      line-height: 1.7;
      font-size: 1rem;
    }

    .agent-flow-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
      gap: 1rem;
      align-items: stretch;
    }

    .agent-flow-step {
      position: relative;
      padding: 1.25rem 1.1rem 1.1rem;
      border: 1px solid #efc8c8;
      border-radius: 1rem;
      background: #ffffff;
      box-shadow: 0 8px 22px rgba(220, 31, 38, 0.08);
      transition: transform 0.25s ease, box-shadow 0.25s ease;
    }

    .agent-flow-step:hover {
      transform: translateY(-0.2rem);
      box-shadow: 0 14px 28px rgba(220, 31, 38, 0.14);
    }

    .agent-flow-index {
      width: 2rem;
      height: 2rem;
      border-radius: 9999px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 0.9rem;
      color: #ffffff;
      background: linear-gradient(135deg, #dc1f26 0%, #b81b20 100%);
      margin-bottom: 0.8rem;
    }

    .agent-flow-title {
      font-size: 1rem;
      font-weight: 700;
      color: #111827;
      margin-bottom: 0.5rem;
      line-height: 1.35;
    }

    .agent-flow-copy {
      font-size: 0.9rem;
      color: #556070;
      line-height: 1.55;
      margin: 0;
    }

    .agent-flow-list {
      margin: 0;
      padding-left: 1rem;
      color: #556070;
      line-height: 1.55;
      font-size: 0.9rem;
    }

    .agent-flow-arrow {
      position: absolute;
      right: -0.9rem;
      top: 50%;
      transform: translateY(-50%);
      width: 1.8rem;
      height: 1.8rem;
      border-radius: 9999px;
      background: #dc1f26;
      color: #ffffff;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 0.9rem;
      box-shadow: 0 4px 12px rgba(220, 31, 38, 0.24);
    }

    .agent-flow-step:last-child .agent-flow-arrow {
      display: none;
    }

    /* Gallery Section */
    .agent-gallery {
      padding: 4rem 1.5rem;
      background: linear-gradient(135deg, #f7f3f4 0%, #ffffff 100%);
    }

    .agent-gallery-wrapper {
      max-width: 1400px;
      margin: 0 auto;
    }

    .agent-gallery-layout {
      display: grid;
      grid-template-columns: minmax(0, 3.35fr) minmax(220px, 1.35fr);
      gap: 1.25rem;
      align-items: stretch;
      width: min(100%, 1400px);
      margin: 0 auto;
    }

    .agent-gallery-main {
      position: relative;
      width: 100%;
      height: 680px;
      border-radius: 1.5rem;
      overflow: hidden;
      background: #000;
      box-shadow: 0 20px 50px rgba(220, 31, 38, 0.15);
    }

    .agent-gallery-main-image {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
      transition: opacity 0.25s ease, transform 0.35s ease;
      filter: none;
    }

    .agent-gallery-thumbs {
      display: flex;
      flex-direction: column;
      gap: 0.9rem;
      // max-height: min(72vh, 760px);
      height: 680px;
      overflow-y: auto;
      padding-right: 0.25rem;
      scrollbar-width: thin;
      scrollbar-color: #dc1f26 #f3f4f6;
    }

    .agent-gallery-thumb {
      position: relative;
      border: none;
      padding: 0;
      border-radius: 1rem;
      overflow: hidden;
      min-height: 92px;
      background: #ffffff;
      box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);
      cursor: pointer;
      opacity: 0.76;
      transform: translateZ(0);
      transition: transform 0.25s ease, opacity 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
      border: 2px solid transparent;
      flex-shrink: 0;
    }

    .agent-gallery-thumb:hover {
      opacity: 0.92;
      transform: translateY(-2px);
      box-shadow: 0 14px 28px rgba(15, 23, 42, 0.1);
    }

    .agent-gallery-thumb.is-active {
      opacity: 1;
      border-color: #dc1f26;
      box-shadow: 0 14px 28px rgba(220, 31, 38, 0.16);
    }

    .agent-gallery-thumb-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      filter: brightness(0.92);
    }

    .agent-gallery-thumb-label {
      position: absolute;
      left: 0.75rem;
      bottom: 0.75rem;
      padding: 0.35rem 0.6rem;
      border-radius: 9999px;
      background: rgba(15, 23, 42, 0.72);
      color: #ffffff;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.02em;
      backdrop-filter: blur(6px);
    }

    .agent-gallery-main-overlay {
      position: absolute;
      inset: 0;
      // background: linear-gradient(180deg, rgba(15, 23, 42, 0.02), rgba(15, 23, 42, 0.2));
      pointer-events: none;
    }

    .agent-gallery-count {
      position: absolute;
      left: 1rem;
      bottom: 1rem;
      padding: 0.5rem 0.9rem;
      border-radius: 9999px;
      background: rgba(15, 23, 42, 0.7);
      color: #ffffff;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      backdrop-filter: blur(8px);
    }

    /* Tech Stack Carousel */
    .agent-tech-strip {
      padding: 2rem 0 2.8rem;
      background: #ffffff;
      border-top: 1px solid #f2d3d3;
      border-bottom: 1px solid #f2d3d3;
      overflow: hidden;
    }

    .agent-tech-title {
      max-width: 1400px;
      margin: 0 auto 1.1rem;
      padding: 0 1.5rem;
      font-size: 0.95rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #c3282f;
    }

    .agent-tech-marquee {
      position: relative;
      width: 100%;
      overflow: hidden;
      mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
      -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
    }

    .agent-tech-track {
      display: flex;
      align-items: center;
      width: max-content;
      gap: 1rem;
      animation: agent-tech-scroll 26s linear infinite;
      will-change: transform;
      padding: 0.35rem 0;
    }

    .agent-tech-marquee:hover .agent-tech-track {
      animation-play-state: paused;
    }

    .agent-tech-chip {
      display: inline-flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;
      gap: 0.35rem;
      padding: 0.9rem 1.2rem 0.8rem;
      border-radius: 10px;
      background: #ffffff;
      border: 1px solid transparent;
      color: #2a3442;
      box-shadow: 0 7px 16px rgba(220, 31, 38, 0.08);
      white-space: nowrap;
      min-width: 9.2rem;
      transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
    }

    .agent-tech-chip.is-center {
      border: 1px solid #dc1f26;
    }

    .agent-tech-chip:hover {
      transform: translateY(-2px);
      border-color: #dc1f26;
      box-shadow: 0 12px 22px rgba(220, 31, 38, 0.16);
    }

    .agent-tech-icon {
      width: 3rem;
      height: 3rem;
      color: #dc1f26;
      flex-shrink: 0;
    }

    .agent-tech-name {
      font-size: 0.83rem;
      font-weight: 700;
      color: #253041;
      line-height: 1.1;
    }

    @keyframes agent-tech-scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }

    /* Side Navigation */
    .agent-side-nav {
      position: fixed;
      left: 2rem;
      top: 50%;
      transform: translateY(-50%);
      z-index: 100;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(10px);
      border-radius: 50px;
      padding: 1.25rem 0.9rem;
      box-shadow: 0 8px 32px rgba(220, 31, 38, 0.12);
      border: 1px solid rgba(220, 31, 38, 0.15);
    }

    .agent-nav-item {
      width: 2.5rem;
      height: 2.5rem;
      border: none;
      background: transparent;
      color: #9ca3af;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.25rem;
      transition: all 0.3s ease;
      border-radius: 12px;
      position: relative;
    }

    .agent-nav-item:hover {
      color: #dc1f26;
      background: rgba(220, 31, 38, 0.08);
      transform: scale(1.1);
    }

    .agent-nav-item.is-active {
      color: #ffffff;
      background: linear-gradient(135deg, #dc1f26 0%, #b81b20 100%);
      box-shadow: 0 4px 12px rgba(220, 31, 38, 0.3);
    }

    .agent-nav-item.is-active::after {
      content: '';
      position: absolute;
      right: -0.95rem;
      width: 0.35rem;
      height: 1.25rem;
      background: #dc1f26;
      border-radius: 0 2px 2px 0;
    }

    /* Responsive - Hide nav on mobile */
    @media (max-width: 1024px) {
      .agent-side-nav {
        display: none;
      }
    }

    /* Responsive */
    @media (max-width: 768px) {
      .agent-hero-title {
        font-size: 2rem;
      }

      .agent-hero-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .agent-section-title {
        font-size: 1.8rem;
      }

      .agent-features-grid {
        grid-template-columns: 1fr;
      }

      .agent-feature-insight,
      .agent-feature-card.is-highlight {
        grid-column: auto;
      }

      .agent-hero {
        min-height: auto;
        padding: 2rem 1rem;
      }

      .agent-page-top-left-nav {
        top: 0.75rem;
        left: 1rem;
      }

      .agent-cta-button {
        padding: 0.8rem 1.2rem;
        font-size: 0.9rem;
      }

      .agent-hero::after {
        width: 100%;
        height: 46%;
        top: auto;
        bottom: 0;
        background-position: center bottom;
        opacity: 0.5;
      }

      .agent-features {
        padding: 2rem 1rem;
      }

      .agent-how {
        padding: 2rem 1rem;
      }

      .agent-how-use {
        padding: 2rem 1rem;
      }

      .agent-how-use-grid {
        grid-template-columns: 1fr;
      }

      .agent-how-use-patti-wrap {
        grid-template-columns: 1fr;
        gap: 0.65rem;
      }

      .agent-how-use-card {
        padding: 1rem;
      }

      .agent-how-use-step {
        font-size: 0.88rem;
        grid-template-columns: 1.7rem 1fr auto;
      }

      .agent-gallery {
        padding: 2rem 1rem;
      }

      .agent-gallery-main {
        height: 340px;
      }

      .agent-gallery-layout {
        grid-template-columns: 1fr;
      }

      .agent-gallery-main {
        min-height: 340px;
      }

      .agent-gallery-thumbs {
        flex-direction: row;
        max-height: none;
        overflow-x: auto;
        overflow-y: hidden;
        padding-bottom: 0.2rem;
      }

      .agent-gallery-thumb {
        min-width: 130px;
        min-height: 90px;
      }

      .agent-tech-title {
        padding: 0 1rem;
      }

      .agent-tech-strip {
        padding: 1.6rem 0 2.1rem;
      }

      .agent-tech-track {
        animation-duration: 20s;
      }

      .agent-tech-chip {
        padding: 0.75rem 0.95rem 0.65rem;
        gap: 0.28rem;
        min-width: 7.8rem;
      }

      .agent-tech-icon {
        width: 1.6rem;
        height: 1.6rem;
      }

      .agent-tech-name {
        font-size: 0.76rem;
      }

      .agent-flow-step {
        padding: 1rem;
      }

      .agent-flow-arrow {
        display: none;
      }

      .agent-gallery-slider {
        aspect-ratio: auto;
        min-height: 300px;
      }

      .agent-video-modal {
        padding: 1rem;
      }

      .agent-video-modal-content {
        width: 96vw;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="agent-detail-container">
        {/* Side Navigation */}
        <nav className="agent-side-nav" aria-label="Section navigation">
          <button
            type="button"
            className={`agent-nav-item ${activeNavSection === 'hero' ? 'is-active' : ''}`}
            onClick={() => scrollToSection(heroSectionRef)}
            title="Home"
            aria-label="Home"
          >
            <FaHome />
          </button>
          <button
            type="button"
            className={`agent-nav-item ${activeNavSection === 'features' ? 'is-active' : ''}`}
            onClick={() => scrollToSection(featuresSectionRef)}
            title="Key Features"
            aria-label="Key Features"
          >
            <FaLightbulb />
          </button>
          {howToUse.length > 0 && (
            <button
              type="button"
              className={`agent-nav-item ${activeNavSection === 'howToUse' ? 'is-active' : ''}`}
              onClick={() => scrollToSection(howToUseSectionRef)}
              title="How to Use"
              aria-label="How to Use"
            >
              <FaBook />
            </button>
          )}
          {howItWorks.length > 0 && (
            <button
              type="button"
              className={`agent-nav-item ${activeNavSection === 'howItWorks' ? 'is-active' : ''}`}
              onClick={() => scrollToSection(howItWorksSectionRef)}
              title="How It Works"
              aria-label="How It Works"
            >
              <FaWrench />
            </button>
          )}
          <button
            type="button"
            className={`agent-nav-item ${activeNavSection === 'gallery' ? 'is-active' : ''}`}
            onClick={() => scrollToSection(gallerySectionRef)}
            title="Images"
            aria-label="Images"
          >
            <FaImage />
          </button>
          <button
            type="button"
            className={`agent-nav-item ${activeNavSection === 'techStack' ? 'is-active' : ''}`}
            onClick={() => scrollToSection(techStackSectionRef)}
            title="Tech Stack"
            aria-label="Tech Stack"
          >
            <FaWrench />
          </button>
        </nav>
        <div className="agent-page-top-left-nav">
          <Link to="/" className="agent-cta-button">
            ← Back to Home
          </Link>
        </div>
        {/* Hero Section */}
        <section className="agent-hero" ref={heroSectionRef}>
          <div className="agent-hero-inner">
            <div className="agent-hero-badge">
              ✨ Agentic Suite {suiteNumber}
            </div>
            <h1 className="agent-hero-title">{title}</h1>
            <p className="agent-hero-description">{description}</p>
            
            <div className="agent-hero-content">
              {/* Video Placeholder */}
              <div className="agent-video-placeholder">
                {videoSrc ? (
                  <video
                    className="agent-hero-video"
                    src={videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    preload="metadata"
                  />
                ) : (
                  <div className="agent-video-icon">▶</div>
                )}
                {videoSrc && (
                  <button
                    type="button"
                    className="agent-video-label"
                    onClick={() => setIsVideoModalOpen(true)}
                  >
                    View Full Video
                  </button>
                )}
                {!videoSrc && <div className="agent-video-label">Watch Demo</div>}
              </div>

              {/* Capabilities */}
              <div className="agent-capabilities">
                <h2 className="agent-capabilities-title">Core Capabilities</h2>
                {features.map((feature, index) => (
                  <div key={index} className="agent-capability-item" style={{borderBottom: "1px solid #dc1f26"}}>
                    <div className="agent-capability-icon">{feature.icon}</div>
                    <div className="agent-capability-text">{feature.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="agent-features" ref={featuresSectionRef}>
          <div className="agent-features-wrapper">
            <h2 className="agent-section-title">Key Features</h2>
            <div className={`agent-features-grid ${areFeaturesInView ? 'is-visible' : ''}`}>
              {features.slice(0, 3).map((feature, index) => (
                <div key={index} className="agent-feature-card">
                  <div className="agent-feature-icon">{feature.icon}</div>
                  <h3 className="agent-feature-name">{feature.name}</h3>
                  <p className="agent-feature-description">{feature.description}</p>
                </div>
              ))}

              <article className="agent-feature-insight">
                <p className="agent-feature-insight-label">Why It Matters</p>
                <h3 className="agent-feature-insight-title">Kalsoft Personalization for Suite {suiteNumber}</h3>
                <p className="agent-feature-insight-copy">{personalizedFeatureNote}</p>
              </article>

              {features[3] && (
                <div className="agent-feature-card is-highlight">
                  <div className="agent-feature-icon">{features[3].icon}</div>
                  <h3 className="agent-feature-name">{features[3].name}</h3>
                  <p className="agent-feature-description">{features[3].description}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {howToUse.length > 0 && (
          <section className="agent-how-use" ref={howToUseSectionRef}>
            <div className="agent-how-use-wrapper">
              <h2 className="agent-section-title">How to Use</h2>
              <p className="agent-how-use-subtitle">
                Step-by-step usage flow for both user types inside the HRM Agentic Suite.
              </p>
              <div className="agent-how-use-patti-wrap">
                <div className="agent-how-use-patti">
                  <FaUserTie className="agent-how-use-patti-icon" aria-hidden="true" />
                  For HR
                </div>
                <div className="agent-how-use-patti">
                  <FaUser className="agent-how-use-patti-icon" aria-hidden="true" />
                  For Candidates
                </div>
              </div>
              <div className={`agent-how-use-grid ${isHowToUseInView ? 'is-visible' : ''}`}>
                {howToUse.map((group) => (
                  <article key={group.role} className="agent-how-use-card">
                    <h3 className="agent-how-use-role">{group.role}</h3>
                    <ol className="agent-how-use-list">
                      {group.steps.map((step, index) => (
                        <li key={index} className="agent-how-use-step">
                          <span className="agent-how-use-index">{index + 1}</span>
                          <span className="agent-how-use-text">
                            <SiOpenai className="agent-how-use-bullet-icon" aria-hidden="true" />
                            <span>{step}</span>
                          </span>
                          <MdArrowForward className="agent-how-use-arrow" aria-hidden="true" />
                        </li>
                      ))}
                    </ol>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {howItWorks.length > 0 && (
          <section className="agent-how" ref={howItWorksSectionRef}>
            <div className="agent-how-wrapper">
              <h2 className="agent-section-title">How It Works</h2>
              <p className="agent-how-subtitle">
                End-to-end working and technical architecture from ingestion to final decision output.
              </p>
              <div className="agent-flow-grid">
                {howItWorks.map((step) => (
                  <article key={step.id} className="agent-flow-step">
                    <span className="agent-flow-index">{step.id}</span>
                    <h3 className="agent-flow-title">{step.title}</h3>
                    {Array.isArray(step.points) && step.points.length > 0 ? (
                      <ul className="agent-flow-list">
                        {step.points.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="agent-flow-copy">{step.copy}</p>
                    )}
                    <span className="agent-flow-arrow">{'>'}</span>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Gallery Section */}
        <section className="agent-gallery" ref={gallerySectionRef}>
          <div className="agent-gallery-wrapper">
            <h2 className="agent-section-title">Experience the Suite</h2>
            <div className="agent-gallery-layout">
              <div className="agent-gallery-main">
                <img
                  src={galleryImages[currentImageIndex]}
                  alt={`Gallery ${currentImageIndex + 1}`}
                  className="agent-gallery-main-image"
                />
                <div className="agent-gallery-main-overlay" />
                <div className="agent-gallery-count">
                  {String(currentImageIndex + 1).padStart(2, '0')} / {String(galleryImages.length).padStart(2, '0')}
                </div>
              </div>

              <div className="agent-gallery-thumbs" aria-label="Gallery thumbnails">
                {galleryImages.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
                    type="button"
                    className={`agent-gallery-thumb ${index === currentImageIndex ? 'is-active' : ''}`}
                    onClick={() => selectImage(index)}
                    aria-label={`Show image ${index + 1}`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="agent-gallery-thumb-image"
                    />
                    <span className="agent-gallery-thumb-label">{index + 1}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="agent-tech-strip" aria-label="Agent tech stack carousel" ref={techStackSectionRef}>
          <h3 className="agent-tech-title">Tech Stack</h3>
          <div className="agent-tech-marquee" ref={techMarqueeRef}>
            <div className="agent-tech-track">
              {[...techStack, ...techStack].map((tech, index) => {
                const Icon = tech.Icon;
                const chipKey = `${tech.name}-${index}`;
                return (
                  <div
                    className={`agent-tech-chip ${centerTechKeys.includes(chipKey) ? 'is-center' : ''}`}
                    key={chipKey}
                    data-chip-key={chipKey}
                  >
                    <Icon className="agent-tech-icon" aria-hidden="true" />
                    <span className="agent-tech-name">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {isVideoModalOpen && videoSrc && (
          <div className="agent-video-modal" onClick={() => setIsVideoModalOpen(false)}>
            <div className="agent-video-modal-content" onClick={(event) => event.stopPropagation()}>
              <button
                type="button"
                className="agent-video-modal-close"
                aria-label="Close full video"
                onClick={() => setIsVideoModalOpen(false)}
              >
                x
              </button>
              <video
                className="agent-video-modal-player"
                src={videoSrc}
                controls
                autoPlay
                playsInline
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
