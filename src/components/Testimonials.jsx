import React from 'react';

const Testimonials = () => {
    return (
        <section id="testimonials" className="section-padding testimonials-section">
            <div className="container">
                <div className="section-header">
                    <h2>Loved by SDRs and AEs</h2>
                    <p>Don't just take our word for it.</p>
                </div>

                <div className="testimonials-grid">
                    <div className="testimonial-card">
                        <div className="quote">"RingRise doubled my daily call volume. I went from booking 5 meetings a week to 12. It pays for itself in one day."</div>
                        <div className="author">
                            <div className="avatar">SJ</div>
                            <div>
                                <div className="name">Sarah Jenkins</div>
                                <div className="role">SDR at CloudScale</div>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-card">
                        <div className="quote">"The local presence dialing is a game changer. Our pickup rates skyrocketed overnight. Highly recommended."</div>
                        <div className="author">
                            <div className="avatar">MR</div>
                            <div>
                                <div className="name">Mike Ross</div>
                                <div className="role">VP of Sales at NextGen</div>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-card">
                        <div className="quote">"Finally, a dialer that doesn't feel like 1995 software. The UI is beautiful and the Salesforce integration is seamless."</div>
                        <div className="author">
                            <div className="avatar">AL</div>
                            <div>
                                <div className="name">Amanda Lee</div>
                                <div className="role">Account Executive at GrowthX</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .testimonials-section {
          background: linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary));
        }
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .testimonial-card {
           background: rgba(255,255,255,0.03);
           padding: 2rem;
           border-radius: var(--radius-md);
           border: 1px solid rgba(255,255,255,0.05);
        }
        .quote {
          font-size: 1.125rem;
          margin-bottom: 2rem;
          font-style: italic;
          color: var(--text-primary);
        }
        .author {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .avatar {
          width: 40px;
          height: 40px;
          background: linear-gradient(45deg, var(--accent-primary), var(--accent-secondary));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.875rem;
        }
        .name { font-weight: 600; }
        .role { font-size: 0.875rem; color: var(--text-secondary); }
      `}</style>
        </section>
    );
};

export default Testimonials;
