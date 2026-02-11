import React from 'react';
import { PhoneCall } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container nav-content">
                <div className="logo">
                    <PhoneCall size={24} className="logo-icon" />
                    <span className="logo-text">RingRise</span>
                </div>
                <div className="nav-links">
                    <a href="#features">Features</a>
                    <a href="#testimonials">Testimonials</a>
                    <a href="#pricing">Pricing</a>
                </div>
                <div className="nav-cta">
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
            <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          display: flex;
          align-items: center;
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(10px);
          z-index: 1000;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
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
          color: white;
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
            color: white;
          }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
