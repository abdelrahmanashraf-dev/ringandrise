import React from 'react';
import { motion } from 'framer-motion';
import mainVideo from '../images/main_video.mp4';
import './VideoSection.css';

const VideoSection = () => {
    return (
        <section id="video-demo" className="video-ring-section">
            <div className="video-glow"></div>
            <div className="video-container-inner">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="video-header"
                >
                    <h2 className="video-title">See <span>Ring&Rise</span> in Action</h2>
                    <p className="video-desc">Experience the power of our platform and how we can transform your cold calling.</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="video-player-wrapper"
                >
                    <video
                        src={mainVideo}
                        controls
                        autoPlay
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
