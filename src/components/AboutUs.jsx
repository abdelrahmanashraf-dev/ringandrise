import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, TrendingUp } from 'lucide-react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <section className="about-section" id="about">
            <div className="about-glow"></div>

            <div className="about-container">
                <div className="about-header">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="about-title"
                    >
                        Your Trusted Partner in <span>Lead Generation Success</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="about-subtitle"
                    >
                        We believe that serving everyone = serving no one powerfully. That's why we only focus on Real Estate.
                    </motion.p>
                </div>

                <div className="about-content">
                    <motion.div
                        className="about-text-content"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="about-paragraph primary">
                            Ring and Rise is a performance-driven lead generation firm based in the USA. We focus on cold calling, virtual assistance, and cold texting, all tailored to secure contracts within just 30 days.
                        </p>
                        <p className="about-paragraph">
                            Our expert team combines industry knowledge with strategic lead management to guide prospects through the entire sales journey, ensuring dependable and high-quality outcomes. Whether you're aiming to grow your clientele, close deals quicker, or optimize your sales workflow, Ring and Rise is your trusted partner to make it all happen.
                        </p>
                        <div className="about-quote-box">
                            <p>
                                While many companies spread their efforts across roofing, debt collection, or solar, we chose to focus exclusively on real estate. Having started as cold callers and grown into acquisition managers, we understand firsthand the true value of a quality lead. That's why we built a one-of-a-kind, three-layer quality control system, ensuring only motivated leads make it through, so you never waste time chasing tire kickers.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-cards"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="about-card highlight">
                            <div className="about-card-icon">
                                <Target size={32} />
                            </div>
                            <h3>100% Focused on Real Estate</h3>
                            <p>We don't do roofing, solar, or debt collection. We do one thing, and we do it better than anyone else.</p>
                        </div>

                        <div className="about-card">
                            <div className="about-card-icon">
                                <TrendingUp size={32} />
                            </div>
                            <h3>New but Driven</h3>
                            <p>Built by acquisition professionals who know exactly what it takes to convert a cold call into a closed deal.</p>
                        </div>

                        <div className="about-card">
                            <div className="about-card-icon">
                                <ShieldCheck size={32} />
                            </div>
                            <h3>Unmatched Quality Control</h3>
                            <p>Our 3-layer verification system ensures every lead delivered to your CRM has genuine motivation to sell.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
