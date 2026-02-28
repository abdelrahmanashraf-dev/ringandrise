import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { Building2, Search, CalendarCheck, Database, PhoneCall, Home } from 'lucide-react';
import "./HorizontalScrollCarousel.css";

const HorizontalScrollCarousel = () => {
    return (
        <div className="bg-neutral-800">
            <div className="carousel-header">
                <h2 className="carousel-title">Real Estate <span>Services</span></h2>
                <p className="carousel-subtitle">Comprehensive solutions designed to supercharge your deal flow and scale your real estate business.</p>
            </div>
            <ScrollSection />
        </div>
    );
};

const ScrollSection = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={targetRef} className="horizontal-scroll-section">
            <div className="sticky-container">
                <motion.div style={{ x }} className="cards-container">
                    {cards.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })}
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ card }) => {
    return (
        <div
            key={card.id}
            className="scroll-card group"
        >
            <div className="card-bg"></div>
            <div className="card-content">
                <div className="service-icon-wrapper-carousel">
                    {card.icon}
                </div>
                <h3 className="card-title">
                    {card.title}
                </h3>
                <p className="card-desc">
                    {card.description}
                </p>
            </div>
        </div>
    );
};

export default HorizontalScrollCarousel;

const cards = [
    {
        title: "Real Estate",
        description: "Specialized lead generation and support customized for real estate professionals.",
        icon: <Home size={40} className="service-icon-carousel" />,
        id: 1,
    },
    {
        title: "Seller Lead Generation",
        description: "Targeted outreach to connect you with motivated property sellers.",
        icon: <Building2 size={40} className="service-icon-carousel" />,
        id: 2,
    },
    {
        title: "Skiptracing",
        description: "High-accuracy affordable data. Better reach. Better results.",
        icon: <Search size={40} className="service-icon-carousel" />,
        id: 3,
    },
    {
        title: "Appointment Setting",
        description: "Seamlessly booking highly qualified appointments directly on your calendar.",
        icon: <CalendarCheck size={40} className="service-icon-carousel" />,
        id: 4,
    },
    {
        title: "CRM Setup",
        description: "We setup a designed CRM specifically for real estate workflows, ensuring no lead gets lost.",
        icon: <Database size={40} className="service-icon-carousel" />,
        id: 5,
    },
    {
        title: "Lead Nurturing & Follow Up",
        description: "Consistent, multi-channel follow up to turn prospects into closed deals.",
        icon: <PhoneCall size={40} className="service-icon-carousel" />,
        id: 6,
    }
];
