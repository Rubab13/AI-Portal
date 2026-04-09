import { Link, useLocation } from 'react-router-dom';
import '../theme.css';
import kalsoftLogo from '../assets/Logo.png';

export default function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleViewAgents = () => {
    const sliderElement = document.getElementById('agent-slider');
    if (sliderElement) {
      sliderElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="oracle-header">
      <nav className="site-shell oracle-nav">
        <Link to="/" className="oracle-brand">
          <img src={kalsoftLogo} alt="Kalsoft logo" className="oracle-brand-logo" />
        </Link>

        <div className="oracle-nav-actions">
          <button className="oracle-spark" type="button" aria-label="spark actions">
            &#10022;
          </button>
          {isHomePage && (
            <button className="oracle-connect" type="button" onClick={handleViewAgents}>
              View Agents
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
