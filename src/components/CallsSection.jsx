import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, User, Headset, Mic, Activity } from 'lucide-react';
import './CallsSection.css';

import adamAudio from '../calls/Adam.mp3';
import emilyAudio from '../calls/Emily.mp3';
import emmaAudio from '../calls/Emma.mp3';
import johnAudio from '../calls/John.mp3';
import mikeAudio from '../calls/Mike.mp3';

const callsData = [
    { id: 1, name: 'Adam', role: 'B2B Tech Sales', src: adamAudio },
    { id: 2, name: 'Emily', role: 'Real Estate Outreach', src: emilyAudio },
    { id: 3, name: 'Emma', role: 'SaaS Demo Setter', src: emmaAudio },
    { id: 4, name: 'John', role: 'High-Ticket Closer', src: johnAudio },
    { id: 5, name: 'Mike', role: 'Cold Outreach Specialist', src: mikeAudio },
];

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
            // Pause currently playing
            audioRefs.current[id].pause();
            setPlayingId(null);
        } else {
            // Pause previously playing audio if any
            if (playingId && audioRefs.current[playingId]) {
                audioRefs.current[playingId].pause();
            }
            // Play new audio
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
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="section-badge px-4 py-2 rounded-full border border-theme bg-theme/10 text-theme inline-flex items-center gap-2 mb-4 mx-auto font-medium" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '9999px', border: '1px solid rgba(99, 102, 241, 0.4)', background: 'rgba(99, 102, 241, 0.1)', color: '#818cf8', fontWeight: '500', marginBottom: '16px' }}>
                        <Activity size={16} /> <span>Live Voice Samples</span>
                    </div>
                    <h2 className="calls-title">Listen to Our AI Callers</h2>
                    <p className="calls-subtitle">
                        Experience the human-like quality, adaptive reasoning, and perfect tonality of our outbound sales agents.
                        They handle objections flawlessly.
                    </p>
                </motion.div>

                <div className="calls-grid">
                    {callsData.map((call, index) => (
                        <motion.div
                            key={call.id}
                            className={`call-card ${playingId === call.id ? 'is-playing' : ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => togglePlay(call.id)}
                        >
                            <audio
                                ref={(el) => (audioRefs.current[call.id] = el)}
                                src={call.src}
                                onEnded={handleEnded}
                                preload="metadata"
                            />

                            <div className="call-avatar">
                                <Headset size={22} />
                            </div>

                            <div className="call-info">
                                <h3 className="call-name">{call.name}</h3>
                                <span className="call-role">{call.role}</span>
                            </div>

                            <button
                                className="call-play-btn"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    togglePlay(call.id);
                                }}
                                aria-label={playingId === call.id ? "Pause" : "Play"}
                            >
                                {playingId === call.id ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
                            </button>

                            {playingId === call.id && <Waveform />}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CallsSection;
