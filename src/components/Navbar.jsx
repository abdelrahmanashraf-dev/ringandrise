import React, { useState, useEffect } from 'react';
import { PhoneCall, Sun, Moon } from 'lucide-react';
import { PopupModal } from 'react-calendly';
import logo from '../images/logo.png';

const Navbar = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(() => {
    return localStorage.getItem('theme') === 'light';
  });

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    }
  }, [isLightMode]);

  const toggleTheme = () => setIsLightMode(prev => !prev);

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="logo">
          <img src={logo} alt="RingRise Logo" className="logo-image" style={{ height: '32px', width: 'auto' }} />
          <span className="logo-text">Ring & Rise</span>
        </div>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#why-us">Why Us</a>
          <a href="#samples">Samples</a>
          <a href="#workflow">Workflow</a>
          <a href="#screens">Clients</a>
          <a href="#stats">Results</a>
          <a href="#about">About</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="nav-cta" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
            {isLightMode ? <Moon size={20} /> : <Sun size={20} />}
          </button> */}
          <button className="btn btn-primary" onClick={() => setIsCalendlyOpen(true)}>Get Started</button>
        </div>
      </div>

      <PopupModal
        url="https://calendly.com/ringandrise-info/closemoredeals"
        onModalClose={() => setIsCalendlyOpen(false)}
        open={isCalendlyOpen}
        rootElement={document.getElementById("root")}
        pageSettings={{
          backgroundColor: '0f172a',
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: '3b82f6',
          textColor: 'ffffff'
        }}
      />
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          display: flex;
          align-items: center;
          background: var(--nav-bg);
          backdrop-filter: blur(10px);
          z-index: 1000;
          border-bottom: 1px solid var(--nav-border);
        }
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
          font-size: 1.5rem;
          color: var(--text-primary);
        }
        .logo-icon {
          color: var(--accent-primary);
        }
        .nav-links {
          display: none;
        }
        @media (min-width: 768px) {
          .nav-links {
            display: flex;
            gap: 2rem;
            color: var(--text-secondary);
            font-size: 0.95rem;
          }
          .nav-links a:hover {
            color: var(--text-primary);
          }
          .theme-toggle {
            color: var(--text-primary);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.5rem;
            border-radius: 50%;
            background: transparent;
            transition: background 0.2s ease;
          }
          .theme-toggle:hover {
            background: rgba(128, 128, 128, 0.1);
          }
        }
        @media (max-width: 767px) {
          .theme-toggle {
            color: var(--text-primary);
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
