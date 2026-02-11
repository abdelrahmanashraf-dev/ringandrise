import React from 'react';

const Footer = () => {
    return (
        <footer className="footer section-padding">
            <div className="container footer-content">
                <div className="col brand-col">
                    <h3>RingRise</h3>
                    <p>The AI-powered cold calling platform for modern sales teams.</p>
                    <div className="copyright">© 2024 RingRise Inc.</div>
                </div>

                <div className="col">
                    <h4>Product</h4>
                    <a href="#">Features</a>
                    <a href="#">Pricing</a>
                    <a href="#">Integrations</a>
                    <a href="#">Changelog</a>
                </div>

                <div className="col">
                    <h4>Company</h4>
                    <a href="#">About Us</a>
                    <a href="#">Careers</a>
                    <a href="#">Blog</a>
                    <a href="#">Contact</a>
                </div>

                <div className="col">
                    <h4>Legal</h4>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Security</a>
                </div>
            </div>

            <style>{`
        .footer {
          border-top: 1px solid rgba(255,255,255,0.05);
          background: var(--bg-primary);
          padding-bottom: 2rem;
        }
        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 3rem;
        }
        .brand-col p {
          color: var(--text-secondary);
          margin: 1rem 0;
          max-width: 300px;
        }
        .copyright {
          color: var(--text-secondary);
          font-size: 0.875rem;
        }
        .col h4 {
          margin-bottom: 1.5rem;
          color: white;
        }
        .col a {
          display: block;
          color: var(--text-secondary);
          margin-bottom: 0.75rem;
        }
        .col a:hover {
          color: var(--accent-primary);
        }
      `}</style>
        </footer>
    );
};

export default Footer;
