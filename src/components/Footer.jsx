import React from 'react';
import { Facebook, Linkedin, Instagram, PhoneCall, MessageCircle } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import logo from '../images/logo.png';

const Footer = () => {
  return (
    <footer className="footer section-padding">
      <div className="container footer-content">
        <div className="col brand-col">
          <img src={logo} alt="RingRise Logo" className="footer-logo" style={{ height: '40px', width: 'auto', marginBottom: '1rem' }} />
          <p>Empowering real estate professionals with qualified leads and exceptional cold calling services.</p>
          <div className="copyright">© 2024 Ring And Rise.</div>
        </div>

        <div className="col contact-col">
          <h4>Phone Number</h4>
          <a href="tel:+19014790250" className="contact-link">
            <span>(901)479-0250</span>
          </a>
        </div>

        <div className="col contact-col">
          <h4>Email Address</h4>
          <a href="mailto:info@ringandrise.com" className="contact-link">
            <span>info@ringandrise.com</span>
          </a>
        </div>

        <div className="col social-col">
          <h4>Follow Us On</h4>
          <div className="social-links">
            <a href="https://www.facebook.com/ringnrise" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook size={24} />
            </a>
            <a href="https://www.linkedin.com/company/ring-and-rise/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="https://www.instagram.com/ringnrise/#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={24} />
            </a>
            <a href="https://www.tiktok.com/@ringandrise" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <FaTiktok size={24} />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          border-top: solid var(--alpha-5);
          background: var(--bg-primary);
          padding-bottom: 2rem;
        }
        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
          gap: 2em;
        }
        .brand-col p {
          color: var(--text-muted);
          margin: 1rem 0;
          max-width: 300px;
        }
        .copyright {
          color: var(--text-muted);
          font-size: 0.875rem;
        }
        .col h4 {
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }
        .col a {
          display: block;
          color: var(--text-muted);
          margin-bottom: 0.75rem;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .col a:hover {
          color: var(--accent-primary);
        }
        .contact-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          padding: 0.75rem 1rem;
          background: var(--alpha-5);
          border: 1px solid var(--alpha-8);
          border-radius: 12px;
          color: var(--text-primary);
          font-weight: 500;
          transition: all 0.3s ease;
        }
        .contact-link:hover {
          background: var(--blue-alpha-10);
          border-color: var(--accent-primary);
          transform: translateY(-2px);
          color: var(--accent-primary);
        }
        .social-links {
          display: flex;
          gap: 1rem;
        }
        .social-links a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--alpha-5);
          color: var(--text-secondary);
          transition: all 0.3s ease;
          margin-bottom: 0;
        }
        .social-links a:hover {
          background: var(--accent-primary);
          color: white;
          transform: translateY(-3px);
        }
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr 1fr;
          }
          .brand-col {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 480px) {
          .footer-content {
            grid-template-columns: 1fr;
          }
          .brand-col {
            grid-column: auto;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
