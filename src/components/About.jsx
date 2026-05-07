import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-32 bg-white dark:bg-[#0a0a0a] transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side: Image with Decorative Elements */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 overflow-hidden rounded-sm border border-lux-gold/20 shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Earth Developers Vision" 
                className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            {/* Decorative Gold Frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-lux-gold/10 -z-10" />
            <div className="absolute -top-10 -left-10 text-[150px] font-premium text-lux-gold/5 pointer-events-none select-none">
              EARTH
            </div>
          </motion.div>

          {/* Right Side: Our Story */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-lux-gold" />
              <span className="text-lux-gold tracking-[0.4em] uppercase text-[10px] font-bold">Our Story</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-premium text-lux-brown dark:text-lux-white mb-8 leading-tight">
              Crafting Digital <br /> 
              <span className="text-gradient-gold italic font-light">Legacies from the Ground Up.</span>
            </h2>

            <div className="space-y-6">
              <p className="text-lux-brown/70 dark:text-lux-white/50 text-sm md:text-base leading-relaxed font-light italic border-l-2 border-lux-gold/30 pl-6">
                "Earth Developers was born from a simple realization: while many build websites, few architect experiences that resonate with the permanence of the earth itself."
              </p>

              <p className="text-lux-brown/60 dark:text-lux-white/40 text-sm md:text-base leading-relaxed font-light">
                Humne **Earth Developers** ki buniyaad is maqsad par rakhi ke har business aik "Digital Kingdom" deserve karta hai. Hamara manna hai ke code sirf software nahi, balkay aapke vision ki buniyaad (foundation) hai. Roohe Sindh jese projects se le kar complex web applications tak, hum har cheez mein perfection aur luxury ko blend karte hain.
              </p>

              <p className="text-lux-brown/60 dark:text-lux-white/40 text-sm md:text-base leading-relaxed font-light">
                We don't just follow trends; we set them. Our team of architects, designers, and developers work in harmony to ensure your online presence is as strong, sustainable, and prestigious as your physical identity.
              </p>
            </div>

            {/* Signature or Sub-note */}
            <div className="mt-12">
              <div className="text-lux-gold font-premium text-2xl italic">Earth Developers</div>
              <div className="text-[10px] text-lux-brown/40 dark:text-lux-white/30 uppercase tracking-[0.3em] mt-1">Founded on Excellence</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;