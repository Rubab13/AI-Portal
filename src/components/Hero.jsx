import '../theme.css';
import Header from './Header';

export default function Hero() {

  const handleViewAgents = () => {
    const sliderElement = document.getElementById('agent-slider');
    if (sliderElement) {
      sliderElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="oracle-hero">
      <Header />
      <div className="site-shell oracle-hero-shell">

        <div className="oracle-hero-grid">
          <div className="oracle-left">
            <h1 className="oracle-title">
              <span className="oracle-title-dark">Kalsoft AI Portal</span>
              <span className="oracle-title-accent">for Autonomous Growth.</span>
            </h1>

            <p className="oracle-copy">
              Empower your business with Kalsoft's AI-led digital transformation, intelligent business solutions, and enterprise-grade web and mobile platforms.
            </p>

            <div className="oracle-actions">
              <a
                className="oracle-btn oracle-btn-primary"
                href="https://www.kalsoft.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Kalsoft Website
              </a>
              <button className="oracle-btn oracle-btn-secondary" type="button" onClick={handleViewAgents}>
                Explore Agents
              </button>
            </div>
          </div>

          <div className="oracle-right">
            <div className="oracle-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1573496773905-f5b17e717f05?auto=format&fit=crop&w=1400&q=80"
                alt="Neural oracle portrait"
                className="oracle-image"
              />
            </div>

            <div className="oracle-pulse-card">
              <div className="oracle-pulse-top">
                <span className="oracle-bolt">&#9889;</span>
                <span>Real-Time Pulse</span>
              </div>
              <p className="oracle-pulse-value">99.98%</p>
              <p className="oracle-pulse-sub">Consistency Optimization</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
