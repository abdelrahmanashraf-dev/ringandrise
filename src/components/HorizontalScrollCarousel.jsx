import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import "./HorizontalScrollCarousel.css";

const HorizontalScrollCarousel = () => {
    return (
        <div className="bg-neutral-800">
            <div className="scroll-header">
                <span className="scroll-label">
                    Scroll down to explore
                </span>
            </div>
            <ScrollSection />
            <div className="scroll-footer">
                <span className="scroll-label">
                    Keep scrolling
                </span>
            </div>
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
            <div
                style={{
                    backgroundImage: `url(${card.url})`,
                }}
                className="card-bg"
            ></div>
            <div className="card-content">
                <p className="card-title">
                    {card.title}
                </p>
            </div>
        </div>
    );
};

export default HorizontalScrollCarousel;

const cards = [
    {
        url: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=800&auto=format&fit=crop",
        title: "Efficiency",
        id: 1,
    },
    {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
        title: "Analytics",
        id: 2,
    },
    {
        url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
        title: "Strategy",
        id: 3,
    },
    {
        url: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
        title: "Growth",
        id: 4,
    },
    {
        url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
        title: "Connect",
        id: 5,
    },
    {
        url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
        title: "Team",
        id: 6,
    },
    {
        url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop",
        title: "Success",
        id: 7,
    },
];
