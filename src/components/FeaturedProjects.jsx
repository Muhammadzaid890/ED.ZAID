import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Roohe Sindh",
    category: "Premium Clothing Brand",
    desc: "A high-end e-commerce experience showcasing the soul of Sindhi heritage and modern fashion.",
    // Luxurious clothing/fashion image from a stable source
    image: "https://images.pexels.com/photos/7679454/pexels-photo-7679454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
    link: "https://roohe-sindh.vercel.app/" 
  },
  {
    id: 2,
    title: "Project Alpha",
    category: "Digital Architecture",
    desc: "Future-ready web solution under development for premium corporate clients.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    id: 3,
    title: "Project Beta",
    category: "Web Application",
    desc: "Seamless enterprise application focusing on high-performance user interactions.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    link: "#"
  }
];

const FeaturedProjects = () => {
  return (
    <section className="py-32 bg-white dark:bg-[#0a0a0a] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="max-w-xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-12 h-[1px] bg-lux-gold" />
              <span className="text-lux-gold tracking-[0.4em] uppercase text-[10px] font-bold">Portfolio</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-premium text-lux-brown dark:text-lux-white"
            >
              Featured <span className="text-gradient-gold italic">Works</span>
            </motion.h2>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative block cursor-pointer"
            >
              {/* Image Container with Luxury Effects */}
              <div className="relative h-[480px] overflow-hidden rounded-sm bg-[#111]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-1000 ease-out"
                />
                
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                
                {/* External Link Button - Floating Effect */}
                <div className="absolute top-6 right-6 p-4 bg-lux-gold/10 backdrop-blur-md rounded-full border border-lux-gold/20 -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-xl">
                  <ArrowUpRight className="text-lux-gold w-5 h-5" />
                </div>

                {/* Optional: Branding Tag on Image */}
                <div className="absolute bottom-6 left-6 overflow-hidden">
                   <motion.div 
                     initial={{ y: 20, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     className="text-[10px] text-lux-gold/80 border border-lux-gold/20 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm"
                   >
                     View Case Study
                   </motion.div>
                </div>
              </div>

              {/* Information Section */}
              <div className="mt-8">
                <span className="text-[10px] text-lux-gold/70 uppercase tracking-[0.3em] font-bold mb-3 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-premium text-lux-brown dark:text-lux-white mb-3 group-hover:text-lux-gold transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-lux-brown/60 dark:text-lux-white/40 text-[13px] leading-relaxed mb-6 font-light max-w-[90%]">
                  {project.desc}
                </p>
                
                {/* Gold Progress Line Decoration */}
                <div className="w-full h-[1px] bg-lux-gold/10 relative overflow-hidden">
                  <motion.div 
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "0%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute inset-0 bg-lux-gold/40"
                  />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;