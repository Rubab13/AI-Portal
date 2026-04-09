import '../theme.css';

export default function Footer() {
  return (
    <footer className="oracle-footer">
      <div className="site-shell oracle-footer-wrap">
        <div className="oracle-footer-left">
          <p className="oracle-footer-brand">Kalsoft AI Portal</p>
          <p className="oracle-footer-copy">© 2024 Kalsoft AI Portal. All rights reserved.</p>
        </div>

        <ul className="oracle-footer-menu" aria-label="Footer links">
          <li><a href="#">Ethics</a></li>
          <li><a href="#">API</a></li>
          <li><a href="#">Documentation</a></li>
          <li><a href="#" className="oracle-footer-support">Support</a></li>
        </ul>

        <div className="oracle-footer-icons" aria-label="Footer actions">
          <button type="button" className="oracle-footer-icon-btn" aria-label="Open terminal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3.5" y="5" width="17" height="14" rx="2.5" />
              <path d="M8 10.5l2.8 1.8L8 14.2" />
              <path d="M12.5 14.2h3.5" />
            </svg>
          </button>
          <button type="button" className="oracle-footer-icon-btn" aria-label="Switch language">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="12" r="6.8" />
              <path d="M5.2 12h13.6" />
              <path d="M12 5.2c2.1 2 2.1 11.6 0 13.6" />
              <path d="M12 5.2c-2.1 2-2.1 11.6 0 13.6" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
