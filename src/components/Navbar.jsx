import React, { useState, useEffect } from 'react';
import { PhoneCall, Sun, Moon, Menu, X } from 'lucide-react';
import { PopupModal } from 'react-calendly';
import logo from '../images/logo.png';

const Navbar = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="logo">
          <img src={logo} alt="RingRise Logo" className="logo-image" style={{ height: '32px', width: 'auto' }} />
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
          <button className="btn btn-primary get-started-btn" onClick={() => setIsCalendlyOpen(true)}>Get Started</button>
          
          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#why-us" onClick={closeMenu}>Why Us</a>
        <a href="#samples" onClick={closeMenu}>Samples</a>
        <a href="#workflow" onClick={closeMenu}>Workflow</a>
        <a href="#screens" onClick={closeMenu}>Clients</a>
        <a href="#stats" onClick={closeMenu}>Results</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#faq" onClick={closeMenu}>FAQ</a>
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
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: 0.5rem;
          align-items: center;
          justify-content: center;
        }
        .mobile-menu {
          display: none;
          position: fixed;
          top: 80px;
          left: 0;
          width: 100%;
          background: var(--nav-bg);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--nav-border);
          flex-direction: column;
          padding: 1rem 0;
          z-index: 999;
          gap: 0.5rem;
        }
        .mobile-menu.active {
          display: flex;
        }
        .mobile-menu a {
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 500;
          padding: 0.75rem 2rem;
          font-size: 1.1rem;
          transition: color 0.2s, background 0.2s;
        }
        .mobile-menu a:hover {
          color: var(--text-primary);
          background: rgba(128, 128, 128, 0.05);
        }
        @media (min-width: 900px) {
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
        @media (max-width: 899px) {
          .theme-toggle {
            color: var(--text-primary);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .mobile-menu-btn {
            display: flex;
          }
          .get-started-btn {
            padding: 0.5rem 1rem;
            font-size: 0.85rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
