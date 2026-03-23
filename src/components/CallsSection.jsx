import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Headset, Activity } from 'lucide-react';
import './CallsSection.css';

const callsData = [
    { id: 1, name: 'Adam',  role: 'B2B Tech Sales',             src: new URL('../calls/Adam.mp3',  import.meta.url).href },
    { id: 2, name: 'Emily', role: 'Real Estate Outreach',        src: new URL('../calls/Emily.mp3', import.meta.url).href },
    { id: 3, name: 'Emma',  role: 'SaaS Demo Setter',            src: new URL('../calls/Emma.mp3',  import.meta.url).href },
    { id: 4, name: 'John',  role: 'High-Ticket Closer',          src: new URL('../calls/John.mp3',  import.meta.url).href },
    { id: 5, name: 'Mike',  role: 'Cold Outreach Specialist',    src: new URL('../calls/Mike.mp3',  import.meta.url).href },
];

const fadeUp = {
    hidden: { y: 24 },
    visible: (delay = 0) => ({
        y: 0,
        transition: { duration: 0.5, delay, ease: 'easeOut' }
    })
};

const Waveform = () => (
    <div className="call-waveform">
        <span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span><span></span>
    </div>
);

const CallsSection = () => {
    const [playingId, setPlayingId] = useState(null);
    const audioRefs = useRef({});

    const togglePlay = (id) => {
        if (playingId === id) {
            audioRefs.current[id].pause();
            setPlayingId(null);
        } else {
            if (playingId && audioRefs.current[playingId]) {
                audioRefs.current[playingId].pause();
            }
            audioRefs.current[id].play();
            setPlayingId(id);
        }
    };

    const handleEnded = () => {
        setPlayingId(null);
    };

    return (
        <section className="calls-section" id="samples">
            <div className="calls-container">
                <motion.div
                    className="calls-header"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="section-badge">
                        <Activity size={16} /> <span>Live Voice Samples</span>
                    </div>
                    <h2 className="calls-title">Listen to Our Callers</h2>
                    <p className="calls-subtitle">
                        Listen to real call recordings showcasing our callers handling objections flawlessly.
                    </p>
                </motion.div>

                <div className="calls-grid">
                    {callsData.map((call, index) => (
                        <motion.div
                            key={call.id}
                            className={`call-card ${playingId === call.id ? 'is-playing' : ''}`}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            custom={index * 0.1}
                            whileHover={{ y: -8 }}
                            animate={playingId === call.id ? { scale: 1.02 } : { scale: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            onClick={() => togglePlay(call.id)}
                        >
                            <audio
                                ref={(el) => (audioRefs.current[call.id] = el)}
                                src={call.src}
                                onEnded={handleEnded}
                                preload="none"
                                aria-label={`Voice sample from ${call.name}, ${call.role}`}
                            />

                            <div className="call-avatar">
                                <Headset size={22} />
                            </div>

                            <div className="call-info">
                                <h3 className="call-name">{call.name}</h3>
                                <span className="call-role">{call.role}</span>
                            </div>

                            <motion.button
                                className="call-play-btn"
                                whileHover={{ scale: 1.1 }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    togglePlay(call.id);
                                }}
                                aria-label={playingId === call.id ? 'Pause' : 'Play'}
                            >
                                {playingId === call.id
                                    ? <Pause size={20} fill="currentColor" />
                                    : <Play size={20} fill="currentColor" className="ml-1" />
                                }
                            </motion.button>

                            {playingId === call.id && <Waveform />}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CallsSection;