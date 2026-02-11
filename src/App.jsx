import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HorizontalScrollCarousel from './components/HorizontalScrollCarousel';
import { MouseImageTrail } from './components/MouseImageTrail';
import { SmoothScrollHero } from './components/SmoothScrollHero';
import BrandLogos from './components/BrandLogos';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div style={{ position: 'relative', zIndex: 10, background: 'var(--bg-primary)' }}>
        <Features />
        <HorizontalScrollCarousel />
        <MouseImageTrail />
        <BrandLogos />
        <SmoothScrollHero />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}

export default App;
