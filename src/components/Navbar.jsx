import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PopupModal } from 'react-calendly';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../images/logo.png';
import './Navbar.css';

const NAV_LINKS = [
    { href: '#services', label: 'Services' },
    { href: '#why-us',   label: 'Why Us'  },
    { href: '#samples',  label: 'Samples' },
    { href: '#workflow', label: 'Workflow' },
    { href: '#screens',  label: 'Clients' },
    { href: '#stats',    label: 'Results' },
    { href: '#about',    label: 'About'   },
    { href: '#faq',      label: 'FAQ'     },
];

const Navbar = () => {
    const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    // Active section tracker
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { rootMargin: '-10% 0px -80% 0px', threshold: 0 }
        );
        document.querySelectorAll('section[id]').forEach(s => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    const closeMenu = () => setIsMobileMenuOpen(false);

    return (
        <nav className="navbar">
            <div className="container nav-content">
                <div className="logo">
                    <img src={logo} alt="Ring and Rise Logo" className="logo-image" />
                </div>

                <div className="nav-links">
                    {NAV_LINKS.map(({ href, label }) => (
                        <a
                            key={href}
                            href={href}
                            className={activeSection === href.slice(1) ? 'nav-link active' : 'nav-link'}
                        >
                            {label}
                        </a>
                    ))}
                </div>

                <div className="nav-cta">
                    <button
                        className="btn btn-primary get-started-btn"
                        onClick={() => setIsCalendlyOpen(true)}
                    >
                        Get Started
                    </button>
                    <button
                        className="mobile-menu-btn"
                        onClick={() => setIsMobileMenuOpen(prev => !prev)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobile-nav"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        id="mobile-nav"
                        className="mobile-menu"
                        role="navigation"
                        aria-label="Mobile navigation"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                    >
                        {NAV_LINKS.map(({ href, label }) => (
                            <a
                                key={href}
                                href={href}
                                className={activeSection === href.slice(1) ? 'active' : ''}
                                onClick={closeMenu}
                            >
                                {label}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <PopupModal
                url="https://calendly.com/ringandrise-info/closemoredeals"
                onModalClose={() => setIsCalendlyOpen(false)}
                open={isCalendlyOpen}
                rootElement={document.getElementById('root')}
                pageSettings={{
                    backgroundColor: '0f172a',
                    hideEventTypeDetails: false,
                    hideLandingPageDetails: false,
                    primaryColor: '3b82f6',
                    textColor: 'ffffff'
                }}
            />
        </nav>
    );
};

export default Navbar;
