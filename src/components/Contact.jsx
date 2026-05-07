import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const socialLinks = [
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/eart_h.dev',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e9c46a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    { 
      name: 'Facebook', 
      url: 'https://www.facebook.com/share/1B91bDEJkA/',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e9c46a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      )
    },
    { 
      name: 'Email', 
      url: 'mailto:earthdev.10@gmail.com',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e9c46a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      )
    },
  ];

  return (
    <section className="py-32 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Info Side */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-lux-gold" />
              <span className="text-lux-gold tracking-[0.4em] uppercase text-[10px] font-bold">Connect</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-premium mb-12 leading-tight">
              Let’s build <br /> 
              <span className="text-gradient-gold italic">your legacy.</span>
            </h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <span className="text-lux-gold">📍</span>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-white/30 mb-1">Office</h4>
                  <p className="text-lg font-light text-white/80">DHA Phase 6, Bukhari Commercial, Karachi</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-lux-gold">📞</span>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-white/30 mb-1">WhatsApp</h4>
                  <p className="text-lg font-light text-white/80">+92 313 2099816</p>
                </div>
              </div>
            </div>
          </div>

          {/* Links Side */}
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-1 gap-4 mb-8">
              {socialLinks.map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-8 border border-white/5 bg-white/5 flex justify-between items-center group hover:border-lux-gold/40 transition-all duration-500"
                >
                  <div className="flex items-center gap-4">
                    {link.icon}
                    <span className="text-sm tracking-widest uppercase group-hover:text-lux-gold transition-colors">{link.name}</span>
                  </div>
                  <span className="text-lux-gold opacity-30 group-hover:opacity-100 group-hover:translate-x-2 transition-all">→</span>
                </a>
              ))}
            </div>

            <motion.a 
              href="https://wa.me/923132099816"
              target="_blank"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-6 bg-lux-gold text-black text-center font-bold uppercase tracking-[0.3em] text-sm shadow-lg shadow-lux-gold/10"
            >
              Start a Conversation
            </motion.a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;