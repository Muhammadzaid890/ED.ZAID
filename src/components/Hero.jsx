import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const handleWhatsApp = () => {
    const msg = encodeURIComponent("Salam! I want a powerful online presence for my business.");
    window.open(`https://wa.me/923000000000?text=${msg}`, '_blank');
  };

  // Luxury Reveal Animation for Text
  const reveal = {
    initial: { y: "110%", opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 1.2, ease: [0.6, 0.01, -0.05, 0.95] } 
    }
  };

  return (
    /* Humne yahan sticky aur z-10 add kiya hai taake ye piche ruk jaye */
    <section className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-[#0a0a0a] z-10">
      
      {/* LOCAL VIDEO - Make sure to name your file 'luxury-bg.mp4' in public folder */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-10 w-full h-full object-cover opacity-50"
      >
        <source src="/luxury-bg.mp4" type="video/mp4" />
      </video>

      {/* Premium Vignette Overlay */}
      <div className="absolute z-20 inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />

      {/* Content Container */}
      <div className="relative z-30 text-center px-4">
        
        {/* H2 Heading */}
        <div className="overflow-hidden mb-4">
          <motion.h2
            initial="initial"
            animate="animate"
            variants={reveal}
            className="text-3xl md:text-5xl font-premium text-lux-white tracking-tight leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Your business deserves a <br />
            <span className="text-gradient-gold italic">powerful online presence</span>
          </motion.h2>
        </div>

        {/* Short Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="text-lux-white/50 text-xs md:text-sm max-w-sm mx-auto font-light tracking-[0.2em] mb-12 uppercase"
        >
          Architecting digital excellence for elite brands.
        </motion.p>

        {/* LUXURY CONTACT BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="flex justify-center"
        >
          <button
            onClick={handleWhatsApp}
            className="group relative flex items-center justify-center px-12 py-5 rounded-full overflow-hidden transition-all duration-500 cursor-pointer border border-lux-gold/30 shadow-[0_0_20px_rgba(233,196,106,0.1)] hover:shadow-[0_0_40px_rgba(233,196,106,0.3)] bg-black/20 backdrop-blur-sm"
          >
            {/* Fill Effect on Hover */}
            <span className="absolute inset-0 w-0 bg-gradient-to-r from-lux-gold via-lux-tan to-lux-gold transition-all duration-700 ease-in-out group-hover:w-full" />
            
            {/* Button Text */}
            <span className="relative z-10 text-lux-gold group-hover:text-black font-bold text-xs uppercase tracking-[0.4em] transition-colors duration-500">
              Contact Now
            </span>
            
            {/* External Glow Ring */}
            <div className="absolute inset-0 rounded-full border border-lux-gold opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700" />
          </button>
        </motion.div>
      </div>

      {/* Decorative Bottom Line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.8, duration: 1.5 }}
        className="absolute bottom-10 w-32 h-[1px] bg-gradient-to-r from-transparent via-lux-gold to-transparent"
      />
    </section>
  );
};

export default Hero;