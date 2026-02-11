import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import "./Hero.css";
import Carousel from "./Carousel";

const AuroraHero = () => {
  return (
    <section className="aurora-hero-section">
      <div className="aurora-canvas-container">
        {/* Placeholder for Aurora/Stars effect */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15), rgba(0,0,0,0) 50%)'
        }} />
      </div>

      <div className="aurora-content">
        <span className="aurora-badge">New: AI Voice Analysis 2.0</span>
        <h1 className="aurora-title">
          Cold Calling<br />
          Reimagined.
        </h1>
        <p className="aurora-desc">
          Scale your outreach by 10x with our predictive AI dialer.
          Connect with more prospects, book more meetings, and close more deals.
        </p>
        <button className="aurora-cta">
          Start Free Trial <ArrowRight className="cta-icon" />
        </button>
      </div>

      {/* Text Parallax Strip */}
      <div style={{ position: 'absolute', bottom: '10%', width: '100%', overflow: 'hidden', zIndex: 5 }}>
        <Carousel baseVelocity={-2}>RingRise • 10x Calls • AI Power •</Carousel>
        <Carousel baseVelocity={2}>More Leads • Better Conversations •</Carousel>
      </div>
    </section>
  );
};

export default AuroraHero;
