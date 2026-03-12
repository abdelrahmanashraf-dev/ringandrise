import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import './Stats.css';

const AnimatedNumber = ({ value, suffix = "", prefix = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            let startTimestamp = null;
            const duration = 2000; // 2 seconds

            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);

                // easeOutQuart
                const ease = 1 - Math.pow(1 - progress, 4);
                setDisplayValue(Math.floor(ease * value));

                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };

            window.requestAnimationFrame(step);
        }
    }, [isInView, value]);

    return (
        <span ref={ref} className="stat-number-wrapper">
            {prefix}{displayValue}{suffix}
        </span>
    );
};

const Stats = () => {
    return (
        <section className="stats-section" id="stats">
            <div className="stats-container">
                <motion.div
                    className="stats-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="stats-title">Proven Results</h2>
                </motion.div>

                <div className="stats-grid">
                    <motion.div
                        className="stat-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h3 className="stat-value">
                            <AnimatedNumber value={50} suffix="+" />
                        </h3>
                        <p className="stat-label">Happy Clients</p>
                    </motion.div>

                    <motion.div
                        className="stat-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="stat-value">
                            <AnimatedNumber value={100} suffix="%" />
                        </h3>
                        <p className="stat-label">Data Driven Approach</p>
                    </motion.div>

                    <motion.div
                        className="stat-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h3 className="stat-value">
                            <AnimatedNumber value={200} prefix="+" />
                        </h3>
                        <p className="stat-label">Closed Deals From Our Calls</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
