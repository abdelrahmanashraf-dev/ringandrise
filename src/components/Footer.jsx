import React from 'react';
import { Facebook, Linkedin, Instagram, PhoneCall } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import logo from '../images/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer section-padding">
            <div className="container footer-content">
                <div className="col brand-col">
                    <img src={logo} alt="Ring and Rise Logo" className="footer-logo" />
                    <p>Empowering real estate professionals with qualified leads and exceptional cold calling services.</p>
                    <div className="copyright">© {new Date().getFullYear()} Ring And Rise.</div>
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
                            <Facebook size={24} aria-hidden="true" />
                        </a>
                        <a href="https://www.linkedin.com/company/ring-and-rise/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin size={24} aria-hidden="true" />
                        </a>
                        <a href="https://www.instagram.com/ringnrise/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <Instagram size={24} aria-hidden="true" />
                        </a>
                        <a href="https://www.tiktok.com/@ringandrise" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                            <FaTiktok size={24} aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
