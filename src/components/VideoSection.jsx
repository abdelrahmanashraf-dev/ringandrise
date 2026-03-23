import React from 'react';
import { motion } from 'framer-motion';
import mainVideo from '../images/main_video.mp4';
import './VideoSection.css';

const fadeUp = {
    hidden: { y: 24 },
    visible: (delay = 0) => ({
        y: 0,
        transition: { duration: 0.5, delay, ease: 'easeOut' }
    })
};

const VideoSection = () => {
    return (
        <section id="video-demo" className="video-ring-section">
            <div className="video-glow"></div>
            <div className="video-container-inner">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="video-header"
                >
                    <h2 className="video-title">See <span>Ring&Rise</span> in Action</h2>
                    <p className="video-desc">Experience the power of our platform and how we can transform your cold calling.</p>
                </motion.div>
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    custom={0.2}
                    viewport={{ once: true, amount: 0.2 }}
                    className="video-player-wrapper"
                >
                    <video
                        src={mainVideo}
                        controls
                        muted
                        loop
                        className="main-video"
                    >
                        Your browser does not support the video tag.
                    </video>
                </motion.div>
            </div>
        </section>
    );
};

export default VideoSection;
