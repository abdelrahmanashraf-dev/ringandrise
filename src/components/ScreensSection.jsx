import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import test1 from '../images/Testmonials (1).jpg';
import test2 from '../images/Testmonials (2).jpg';
import heroImg from '../images/Hero.jpg';
import test3 from '../images/Testmonials (3).jpg';
import test4 from '../images/Testmonials (5).jpg';

import './ScreensSection.css';

const images = [test1, test2, heroImg, test3, test4];

const ScreensSection = () => {
    const [currentIndex, setCurrentIndex] = useState(2); // Start with heroImg focused

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const getVisibleItems = () => {
        const items = [];
        // show 3 items across the screen (-1, 0, 1 from center)
        for (let i = -1; i <= 1; i++) {
            let index = (currentIndex + i + images.length) % images.length;
            items.push({ img: images[index], index, position: i });
        }
        return items;
    };

    return (
        <section id="screens" className="screens-ring-section">
            <div className="screens-glow"></div>
            <div className="screens-container-inner">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="screens-header"
                >
                    <h2 className="screens-title">Loved by <span>SDRs and AEs</span></h2>
                    <p className="screens-desc">Real results from real teams using our proven platform.</p>
                </motion.div>

                <div className="carousel-container">
                    <button className="carousel-arrow left-arrow" onClick={handlePrevious}>
                        <ChevronLeft size={36} />
                    </button>

                    <div className="carousel-track">
                        <AnimatePresence mode="popLayout">
                            {getVisibleItems().map((item) => {
                                const isActive = item.position === 0;

                                return (
                                    <motion.div
                                        key={item.img}
                                        layout
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{
                                            opacity: isActive ? 1 : 0.5,
                                            scale: isActive ? 1.05 : 0.85,
                                            zIndex: isActive ? 10 : 5
                                        }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.4 }}
                                        className={`screen-card ${isActive ? 'hero-focus' : ''}`}
                                        onClick={() => setCurrentIndex(item.index)}
                                    >
                                        <img src={item.img} alt={`Testimonial screen`} className="screen-img" />
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>

                    <button className="carousel-arrow right-arrow" onClick={handleNext}>
                        <ChevronRight size={36} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ScreensSection;
