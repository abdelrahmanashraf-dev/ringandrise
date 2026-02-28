import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HorizontalScrollCarousel from './components/HorizontalScrollCarousel';
import Features from './components/Features';
import { MouseImageTrail } from './components/MouseImageTrail';
import { SmoothScrollHero } from './components/SmoothScrollHero';
import BrandLogos from './components/BrandLogos';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhyRingAndRise from './components/WhyRingAndRise';
import Services from './components/Services';
import Stats from './components/Stats';
import FAQ from './components/FAQ';
import LeadJourney from './components/LeadJourney';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="App">
      <SmoothScrollHero>
        <Navbar />
        <Hero />
        <div style={{ position: 'relative', zIndex: 10, background: 'transparent' }}>
          <Services />
          {/* <Features /> */}
          <WhyRingAndRise />
          {/* <MouseImageTrail /> */}
          {/* <BrandLogos /> */}
          {/* <HorizontalScrollCarousel /> */}
          <LeadJourney />
          {/* <Testimonials /> */}
          <Stats />
          <AboutUs />
          <FAQ />
          <Footer />
        </div>
      </SmoothScrollHero>
    </div>
  );
}

export default App;
