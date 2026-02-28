import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, FileText, Eye, ShieldCheck, AlertTriangle, XCircle } from 'lucide-react';
import './WhyRingAndRise.css';

const WhyRingAndRise = () => {
    return (
        <section className="why-ring-section">
            <div className="why-glow"></div>

            <div className="why-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="why-header"
                >
                    <h2 className="why-title">Why Ring <span>And Rise!</span></h2>
                </motion.div>

                <div className="why-scenario-section">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="why-scenario-header"
                    >
                        <h3 className="why-subtitle">Tired of Unreliable Cold Calling Services?</h3>
                        <p className="why-desc">
                            If you've worked with cold calling agencies or freelancers before, you've likely experienced one of two frustrating scenarios:
                        </p>
                    </motion.div>

                    <div className="why-bad-cards">
                        <motion.div
                            className="why-bad-card"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="bad-card-header">
                                <AlertTriangle className="bad-icon" size={24} />
                                <h4>Hired a freelancer?</h4>
                            </div>
                            <p>
                                You've dealt with constant turnover, investing countless hours in training sessions only to have your caller disappear without notice. The cycle repeats, and your lead generation suffers.
                            </p>
                        </motion.div>
                        <motion.div
                            className="why-bad-card"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <div className="bad-card-header">
                                <XCircle className="bad-icon" size={24} />
                                <h4>Worked with another agency?</h4>
                            </div>
                            <p>
                                They overpromised results, blamed your list when numbers fell short, and left you wondering if they're even working the hours they committed to. No transparency, no accountability, just excuses.
                            </p>
                        </motion.div>
                    </div>
                </div>

                <div className="why-different-section">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="why-blue-title">We Do Things Differently</h3>
                        <p className="why-desc center-desc">
                            We operate on a foundation of transparency, accountability, and results. Here's what sets our company apart:
                        </p>
                    </motion.div>

                    <div className="why-good-cards">
                        <motion.div
                            className="why-good-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <div className="why-icon-wrapper">
                                <CheckCircle2 size={24} color="white" />
                            </div>
                            <h4>Native-Level Communication</h4>
                            <p>
                                While many agencies use callers with heavy accents that hurt credibility and conversion rates, we exclusively employ callers with native-like accents who sound natural, professional, and trustworthy. First impressions matter—especially in cold calling services.
                            </p>
                        </motion.div>

                        <motion.div
                            className="why-good-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="why-icon-wrapper">
                                <FileText size={24} color="white" />
                            </div>
                            <h4>Data Included. No Excuses</h4>
                            <p>
                                We provide the data. No complaining about your list, no shifting blame. Our real estate cold calling experts work with proven, high-quality data sources so you can focus on closing deals, not sourcing contacts.
                            </p>
                        </motion.div>

                        <motion.div
                            className="why-good-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <div className="why-icon-wrapper">
                                <Eye size={24} color="white" />
                            </div>
                            <h4>Complete Transparency</h4>
                            <p>
                                You'll receive weekly performance audits that show exactly what we're doing, when we're working, and the results we're generating. Every call, every conversation, every qualified lead—fully documented and accessible to you.
                            </p>
                        </motion.div>

                        <motion.div
                            className="why-good-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <div className="why-icon-wrapper">
                                <ShieldCheck size={24} color="white" />
                            </div>
                            <h4>Results Guaranteed</h4>
                            <p>
                                Here's our promise: if we don't deliver the number of leads we committed to, we continue working at no additional cost until we hit your target. No fine print, no loopholes, just a straightforward guarantee that puts your success first.
                            </p>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    className="why-footer-section"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h3>Partner with a Cold Calling Service You Can Trust</h3>
                    <p>
                        Stop wasting time and money on unreliable callers. Our proven system delivers consistent, qualified leads that convert into appointments and revenue for your business.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyRingAndRise;
