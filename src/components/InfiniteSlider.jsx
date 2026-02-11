import React from 'react';
import { motion } from 'framer-motion';
import './InfiniteSlider.css';

export function InfiniteSlider({
    children,
    gap = 20,
    duration = 25,
    reverse = false,
}) {
    return (
        <div className="infinite-slider-container">
            <motion.div
                className="infinite-slider-track"
                style={{ gap: `${gap}px` }}
                animate={{
                    x: reverse ? ['-50%', '0%'] : ['0%', '-50%'],
                }}
                transition={{
                    duration: duration,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {/* Render children twice to create seamless loop effect */}
                {children}
                {children}
            </motion.div>
        </div>
    );
}
