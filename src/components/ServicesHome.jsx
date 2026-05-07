import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Cpu, ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Custom Websites",
    desc: "We build high-performance, tailor-made digital experiences using React and modern tech stacks.",
    icon: <Code className="w-7 h-7" />,
    tag: "Handcrafted Code"
  },
  {
    title: "WordPress Development",
    desc: "Premium business solutions designed with custom themes for absolute flexibility and ease.",
    icon: <Layout className="w-7 h-7" />,
    tag: "Scalable Systems"
  },
  {
    title: "Web Applications",
    desc: "Powerful, enterprise-level web apps with complex logic, database integration, and seamless UX.",
    icon: <Cpu className="w-7 h-7" />,
    tag: "Modern Frameworks"
  }
];

const ServicesHome = () => {
  // Animation for text reveal
  const textReveal = {
    initial: { y: "100%", opacity: 0 },
    whileInView: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.95] } }
  };

  return (
    <section className="py-32 bg-[#0a0a0a] transition-colors duration-500 selection:bg-lux-gold selection:text-black">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
          <div className="max-w-2xl">
            {/* Tagline + Line */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-16 h-[1px] bg-lux-gold" />
              <span className="text-lux-gold tracking-[0.5em] uppercase text-[10px] font-bold">What We Built</span>
            </motion.div>
            
            {/* Animated Main Heading */}
            <div className="overflow-hidden">
              <motion.h2 
                variants={textReveal}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-premium text-lux-white leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Exquisite solutions for <br /> 
                <span className="text-gradient-gold italic font-light">modern digital landscapes.</span>
              </motion.h2>
            </div>
          </div>
          
          {/* Explore Button (Circle Style) */}
          <motion.button 
            whileHover={{ x: 10 }}
            className="group flex items-center gap-4 text-lux-gold font-bold uppercase text-[10px] tracking-[0.4em] cursor-pointer"
          >
            Explore Services 
            <div className="w-12 h-12 border border-lux-gold/30 rounded-full flex items-center justify-center group-hover:bg-lux-gold group-hover:text-black transition-all duration-500">
              <ArrowRight size={16} />
            </div>
          </motion.button>
        </div>

        {/* --- PREMIUM CARDS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 1 }}
              viewport={{ once: true }}
              className="group relative p-12 bg-[#111111]/50 border border-white/5 hover:border-lux-gold/20 transition-all duration-700 overflow-hidden"
            >
              {/* Animated Bottom Border */}
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/5" />
              <motion.div 
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-lux-gold to-lux-tan z-20"
              />

              {/* Numbering Overlay */}
              <span className="absolute -right-4 -top-4 text-8xl font-premium text-white/[0.02] group-hover:text-lux-gold/[0.05] transition-colors duration-700 pointer-events-none">
                0{index + 1}
              </span>

              {/* Icon Container */}
              <div className="text-lux-gold mb-10 inline-block transition-transform duration-700 group-hover:scale-110">
                <div className="p-4 rounded-2xl bg-lux-gold/5 group-hover:bg-lux-gold/10 transition-colors">
                  {service.icon}
                </div>
              </div>
              
              {/* Text Animation - Reveal Style */}
              <div className="overflow-hidden mb-3">
                <motion.h3 
                  variants={textReveal}
                  initial="initial"
                  whileInView="whileInView"
                  className="text-xl font-bold text-lux-white tracking-wide"
                >
                  {service.title}
                </motion.h3>
              </div>

              <div className="overflow-hidden">
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                  className="text-lux-white/40 text-xs leading-relaxed mb-10 font-light"
                >
                  {service.desc}
                </motion.p>
              </div>

              {/* Tag */}
              <span className="text-[10px] text-lux-gold/60 uppercase tracking-[0.2em] font-medium block">
                {service.tag}
              </span>

              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-lux-gold/0 to-lux-gold/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesHome;