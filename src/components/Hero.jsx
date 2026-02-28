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
        {/* <span className="aurora-badge">New: AI Voice Analysis 2.0</span> */}
        <h2 className="aurora-title">
          The only cold calling company with a guaranteed results.
        </h2>
        <p className="aurora-desc">
          We guarantee 40 qualified leads per month for each caller, or we work for free until you get them.
        </p>
        <button className="aurora-cta">
          Start closing deals now <ArrowRight className="cta-icon" />
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
