import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, FileText, Eye, ShieldCheck, AlertTriangle, XCircle } from 'lucide-react';
import './WhyRingAndRise.css';

const fadeUp = {
    hidden: { y: 24 },
    visible: (delay = 0) => ({
        y: 0,
        transition: { duration: 0.5, delay, ease: 'easeOut' }
    })
};

const goodCards = [
    {
        icon: <CheckCircle2 size={24} color="white" />,
        title: 'Native-Level Communication',
        delay: 0.1,
        text: "While many agencies use callers with heavy accents that hurt credibility and conversion rates, we exclusively employ callers with native-like accents who sound natural, professional, and trustworthy. First impressions matter—especially in cold calling services."
    },
    {
        icon: <FileText size={24} color="white" />,
        title: 'Data Included. No Excuses',
        delay: 0.2,
        text: "We provide the data. No complaining about your list, no shifting blame. Our real estate cold calling experts work with proven, high-quality data sources so you can focus on closing deals, not sourcing contacts."
    },
    {
        icon: <Eye size={24} color="white" />,
        title: 'Complete Transparency',
        delay: 0.3,
        text: "You'll receive weekly performance audits that show exactly what we're doing, when we're working, and the results we're generating. Every call, every conversation, every qualified lead—fully documented and accessible to you."
    },
    {
        icon: <ShieldCheck size={24} color="white" />,
        title: 'Results Guaranteed',
        delay: 0.4,
        text: "Here's our promise: if we don't deliver the number of leads we committed to, we continue working at no additional cost until we hit your target. No fine print, no loopholes, just a straightforward guarantee that puts your success first."
    },
];

const WhyRingAndRise = () => {
    return (
        <section id="why-us" className="why-ring-section">
            <div className="why-glow"></div>

            <div className="why-container">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="why-header"
                >
                    <h2 className="why-title">Why Ring <span>And Rise!</span></h2>
                </motion.div>

                <div className="why-scenario-section">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        custom={0.1}
                        viewport={{ once: true, amount: 0.2 }}
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
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            custom={0.2}
                            whileHover={{ y: -5 }}
                            viewport={{ once: true, amount: 0.2 }}
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
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            custom={0.3}
                            whileHover={{ y: -5 }}
                            viewport={{ once: true, amount: 0.2 }}
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
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <h3 className="why-blue-title">We Do Things Differently</h3>
                        <p className="why-desc center-desc">
                            We operate on a foundation of transparency, accountability, and results. Here's what sets our company apart:
                        </p>
                    </motion.div>

                    <div className="why-good-cards">
                        {goodCards.map(({ icon, title, delay, text }) => (
                            <motion.div
                                key={title}
                                className="why-good-card"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                custom={delay}
                                whileHover={{ y: -5 }}
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                <div className="why-icon-wrapper">{icon}</div>
                                <h4>{title}</h4>
                                <p>{text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    className="why-footer-section"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    custom={0.2}
                    viewport={{ once: true, amount: 0.2 }}
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