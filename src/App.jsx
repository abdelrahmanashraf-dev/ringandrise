import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import WhyRingAndRise from './components/WhyRingAndRise';
import Services from './components/Services';
import Stats from './components/Stats';
import FAQ from './components/FAQ';
import LeadJourney from './components/LeadJourney';
import AboutUs from './components/AboutUs';
import VideoSection from './components/VideoSection';
import ScreensSection from './components/ScreensSection';
import CallsSection from './components/CallsSection';

function App() {
  return (
    <div className="App">
      {/* <SmoothScrollHero> */}
      <Navbar />
      <Hero />
      <div style={{ position: 'relative', zIndex: 10, background: 'transparent' }}>
        <Services />
        <WhyRingAndRise />
        <CallsSection />
        <LeadJourney />
        <VideoSection />
        <ScreensSection />
        <Stats />
        <AboutUs />
        <FAQ />
        <Footer />
      </div>
      {/* </SmoothScrollHero> */}
    </div>
  );
}

export default App;
