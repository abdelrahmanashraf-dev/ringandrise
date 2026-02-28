import React from 'react';
import { motion } from 'framer-motion';
import {
    Headset,
    UserCheck,
    Target,
    ShieldCheck,
    Link,
    Trophy
} from 'lucide-react';
import './LeadJourney.css';

const journeySteps = [
    {
        title: "Maximizing Efficiency with Advanced Technology",
        description: "We use multi-line dialer systems (ReadyMode) that eliminate manual dialing and maximize agent talk time. This outbound calling process ensures your investment goes toward actual conversations with property owners, not wasted time between calls.",
        icon: <Headset size={32} className="journey-icon" />
    },
    {
        title: "Stage 1: Expert Lead Qualification",
        description: "When a property owner expresses interest in selling, our trained agents immediately begin the lead qualification process. We ask targeted questions based on your specific criteria: Asking price, condition, number of beds and baths.\n\nOur real estate cold calling specialists are extensively trained to distinguish between genuinely motivated sellers and homeowners simply seeking a free property appraisal. This critical filtering happens in real-time, saving you from wasting appointments on unqualified prospects.",
        icon: <UserCheck size={32} className="journey-icon" />
    },
    {
        title: "Stage 2: Capturing Motivation & Timeline",
        description: "Once basic qualifications are met, we dive deeper into seller motivation. Why are they selling? What's driving their decision? We capture the story behind the sale: divorce, relocation, financial distress, inherited property, or other compelling reasons.\n\nWe then validate that their timeline aligns with yours. A seller who 'might consider selling next year' doesn't reach your pipeline. Only prospects ready to move within your preferred timeframe advance to the next stage.",
        icon: <Target size={32} className="journey-icon" />
    },
    {
        title: "Stage 3: Triple-Layer Quality Control",
        description: "This is where our system separates us from typical cold calling services:\n\n• Layer 1: Agent Validation\nYour dedicated caller conducts the initial qualification and documentation.\n\n• Layer 2: Internal Quality Team Review\nOur specialized quality assurance team validates every detail, ensuring accuracy and completeness before the lead moves forward.\n\n• Layer 3: AI-Powered Scoring\nEach lead passes through our proprietary AI scoring module, trained on thousands of successful real estate lead generation calls. The system assigns a quality score from 1 to 10 based on conversation patterns, motivation indicators, and historical conversion data.",
        icon: <ShieldCheck size={32} className="journey-icon" />
    },
    {
        title: "Seamless CRM Integration",
        description: "Only leads that pass all three quality layers are delivered to your system. We integrate directly with your existing CRM, ensuring fast lead delivery and immediate follow-up capability.\n\nDon't have a CRM yet? Our technical team will set one up for you, at no additional cost, so you can start tracking and converting leads from day one.",
        icon: <Link size={32} className="journey-icon" />
    },
    {
        title: "The Result: Only the Best Leads Reach Your Team",
        description: "By the time a lead lands in your pipeline, it's been vetted by experienced agents, validated by our quality team, and scored by AI trained on real conversion data. You get qualified leads you can actually close, not just names and numbers.",
        icon: <Trophy size={32} className="journey-icon" />,
        isHighlight: true
    }
];

const LeadJourney = () => {
    return (
        <section className="journey-section">
            <div className="journey-bg-glow"></div>

            <div className="journey-container">
                <div className="journey-header">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="journey-title"
                    >
                        Your Lead Journey: <span>From First Ring to Closed Deal</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="journey-subtitle"
                    >
                        Every qualified lead that reaches your CRM has been through our rigorous qualification process. Here's how we transform cold calls into motivated sellers ready for your team.
                    </motion.p>
                </div>

                <div className="journey-timeline">
                    <div className="timeline-line"></div>

                    {journeySteps.map((step, index) => (
                        <motion.div
                            key={index}
                            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} ${step.isHighlight ? 'timeline-highlight' : ''}`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="timeline-content">
                                <div className="timeline-icon-container">
                                    {step.icon}
                                </div>
                                <h3 className="timeline-content-title">{step.title}</h3>
                                <div className="timeline-content-desc">
                                    {step.description.split('\n').map((paragraph, i) => (
                                        <p key={i}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LeadJourney;
