import React from 'react';
import { CheckCircle2, FileText, Eye, ShieldCheck } from 'lucide-react';
import './WhyRingAndRise.css';

const WhyRingAndRise = () => {
    return (
        <section className="why-ring-section">
            <div className="why-container">
                <h2 className="why-title">Why Ring And Rise!</h2>

                <div className="why-scenario-section">
                    <h3 className="why-subtitle">Tired of Unreliable Cold Calling Services?</h3>
                    <p className="why-desc">
                        If you've worked with cold calling agencies or freelancers before, you've likely experienced one of two frustrating scenarios:
                    </p>

                    <div className="why-bad-cards">
                        <div className="why-bad-card">
                            <h4>Hired a freelancer?</h4>
                            <p>
                                You've dealt with constant turnover, investing countless hours in training sessions only to have your caller disappear without notice. The cycle repeats, and your lead generation suffers.
                            </p>
                        </div>
                        <div className="why-bad-card">
                            <h4>Worked with another agency?</h4>
                            <p>
                                They overpromised results, blamed your list when numbers fell short, and left you wondering if they're even working the hours they committed to. No transparency, no accountability, just excuses.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="why-different-section">
                    <h3 className="why-blue-title">We Do Things Differently</h3>
                    <p className="why-desc center-desc">
                        We operate on a foundation of transparency, accountability, and results. Here's what sets our company apart:
                    </p>

                    <div className="why-good-cards">
                        <div className="why-good-card">
                            <div className="why-icon-wrapper">
                                <CheckCircle2 size={20} color="white" />
                            </div>
                            <h4>Native-Level Communication</h4>
                            <p>
                                While many agencies use callers with heavy accents that hurt credibility and conversion rates, we exclusively employ callers with native-like accents who sound natural, professional, and trustworthy. First impressions matter—especially in cold calling services.
                            </p>
                        </div>

                        <div className="why-good-card">
                            <div className="why-icon-wrapper">
                                <FileText size={20} color="white" />
                            </div>
                            <h4>Data Included. No Excuses</h4>
                            <p>
                                We provide the data. No complaining about your list, no shifting blame. Our real estate cold calling experts work with proven, high-quality data sources so you can focus on closing deals, not sourcing contacts.
                            </p>
                        </div>

                        <div className="why-good-card">
                            <div className="why-icon-wrapper">
                                <Eye size={20} color="white" />
                            </div>
                            <h4>Complete Transparency</h4>
                            <p>
                                You'll receive weekly performance audits that show exactly what we're doing, when we're working, and the results we're generating. Every call, every conversation, every qualified lead—fully documented and accessible to you.
                            </p>
                        </div>

                        <div className="why-good-card">
                            <div className="why-icon-wrapper">
                                <ShieldCheck size={20} color="white" />
                            </div>
                            <h4>Results Guaranteed</h4>
                            <p>
                                Here's our promise: if we don't deliver the number of leads we committed to, we continue working at no additional cost until we hit your target. No fine print, no loopholes, just a straightforward guarantee that puts your success first.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="why-footer-section">
                    <h3>Partner with a Cold Calling Service You Can Trust</h3>
                    <p>
                        Stop wasting time and money on unreliable callers. Our proven system delivers consistent, qualified leads that convert into appointments and revenue for your business.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WhyRingAndRise;
