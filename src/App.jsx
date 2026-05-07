import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesHome from './components/ServicesHome';
import FeaturedProjects from './components/FeaturedProjects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative bg-lux-black">
      <Navbar />
      
      <main id='Home' className="relative">
        {/* Layer 1: HERO - Base Layer (Isko as-is rehne dein) */}
        <Hero />
        
        {/* Layer 2: SERVICES - min-h-screen ensure karta hai ke content poora cover kare */}
        <div id='Services' className="relative z-20 min-h-screen w-full bg-white dark:bg-[#0a0a0a] shadow-[0_-50px_100px_rgba(0,0,0,0.5)] transition-colors duration-700">
          <ServicesHome />
        </div>

        {/* Layer 3: FEATURED PROJECTS - Isay hum Services ke upar charhayenge */}
        {/* Humne negative margin use kiya hai overlapping ke liye */}
        <div id='Featured' className="relative z-30 min-h-screen w-full -mt-[20vh] bg-white dark:bg-[#0a0a0a] shadow-[0_-50px_100px_rgba(0,0,0,0.5)] transition-colors duration-700">
          <FeaturedProjects />
        </div>

        {/* Layer 4: ABOUT US - Isay hum Projects ke upar charhayenge */}
        <div id='About' className="relative z-40 min-h-screen w-full -mt-[20vh] bg-white dark:bg-[#0a0a0a] shadow-[0_-50px_100px_rgba(0,0,0,0.5)] transition-colors duration-700">
          <About />
        </div>

        {/* Layer 5: CONTACT & FOOTER */}
        {/* final layer jo end par slide hogi */}
        <div id='Contact' className="relative z-50 min-h-screen w-full bg-lux-white dark:bg-[#050505] shadow-[0_-50px_100px_rgba(0,0,0,0.5)] transition-colors duration-700">
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;