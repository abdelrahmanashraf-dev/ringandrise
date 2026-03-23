import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import './Stats.css';

const fadeUp = {
    hidden: { y: 24 },
    visible: (delay = 0) => ({
        y: 0,
        transition: { duration: 0.5, delay, ease: 'easeOut' }
    })
};

const AnimatedNumber = ({ value, suffix = "", prefix = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            let startTimestamp = null;
            let rafId = null;
            const duration = 2000;

            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);

                // easeOutQuart
                const ease = 1 - Math.pow(1 - progress, 4);
                setDisplayValue(Math.floor(ease * value));

                if (progress < 1) {
                    rafId = window.requestAnimationFrame(step);
                }
            };

            rafId = window.requestAnimationFrame(step);

            return () => {
                if (rafId) window.cancelAnimationFrame(rafId);
            };
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
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <h2 className="stats-title">Proven Results</h2>
                </motion.div>

                <div className="stats-grid">
                    {[
                        { value: 50, suffix: '+', label: 'Happy Clients', delay: 0.1 },
                        { value: 100, suffix: '%', label: 'Data Driven Approach', delay: 0.2 },
                        { value: 200, prefix: '+', label: 'Closed Deals From Our Calls', delay: 0.3 },
                    ].map(({ value, suffix, prefix, label, delay }) => (
                        <motion.div
                            key={label}
                            className="stat-card"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            custom={delay}
                            whileHover={{ y: -10 }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <h3 className="stat-value">
                                <AnimatedNumber value={value} suffix={suffix} prefix={prefix} />
                            </h3>
                            <p className="stat-label">{label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
