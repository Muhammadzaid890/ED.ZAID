import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Custom SVGs to avoid Lucide errors
  const icons = {
    mail: <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6" />,
    map: <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />,
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.81 12.81 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />,
    instagram: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01" /></>,
    facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  };

  return (
    <footer className="relative bg-[#050505] pt-24 pb-12 border-t border-lux-gold/10 overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Column 1: Brand Story */}
          <div className="space-y-6">
            <h3 className="text-lux-gold font-premium text-2xl tracking-[0.2em]">EARTH<br/>DEVELOPERS</h3>
            <p className="text-white/40 text-xs leading-relaxed font-light">
              We architect digital legacies by blending cultural heritage with modern technology. Every pixel is a foundation for your future.
            </p>
            <div className="flex gap-5">
              {[ {id:'instagram', url:'https://www.instagram.com/eart_h.dev'}, {id:'facebook', url:'https://www.facebook.com/share/1B91bDEJkA/'} ].map((social) => (
                <a key={social.id} href={social.url} target="_blank" className="text-lux-gold/50 hover:text-lux-gold transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {icons[social.id]}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lux-gold text-[10px] uppercase tracking-[0.4em] font-bold">Navigation</h4>
            <ul className="space-y-4 text-sm text-white/50 font-light">
              <li className="hover:text-lux-gold cursor-pointer transition-colors">Digital Architecture</li>
              <li className="hover:text-lux-gold cursor-pointer transition-colors">Featured Works</li>
              <li className="hover:text-lux-gold cursor-pointer transition-colors">Our Philosophy</li>
              <li className="hover:text-lux-gold cursor-pointer transition-colors">Contact Studio</li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="space-y-6">
            <h4 className="text-lux-gold text-[10px] uppercase tracking-[0.4em] font-bold">Get in Touch</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-sm text-white/50 group">
                <svg className="text-lux-gold mt-1 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{icons.mail}</svg>
                <a href="mailto:earthdev.10@gmail.com" className="group-hover:text-white transition-colors">earthdev.10@gmail.com</a>
              </li>
              <li className="flex items-start gap-4 text-sm text-white/50 group">
                <svg className="text-lux-gold mt-1 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{icons.phone}</svg>
                <span className="group-hover:text-white transition-colors">+92 313 2099816</span>
              </li>
              <li className="flex items-start gap-4 text-sm text-white/50 group">
                <svg className="text-lux-gold mt-1 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{icons.map}</svg>
                <span className="group-hover:text-white transition-colors leading-relaxed">DHA Phase 6, Bukhari Commercial, Karachi</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter or Quote */}
          <div className="space-y-6">
            <h4 className="text-lux-gold text-[10px] uppercase tracking-[0.4em] font-bold">New Projects</h4>
            <p className="text-white/40 text-xs font-light italic">
              "Building the web, one foundation at a time."
            </p>
            <button className="text-[10px] uppercase tracking-widest border border-lux-gold/30 px-6 py-3 hover:bg-lux-gold hover:text-black transition-all duration-500">
              Request a Quote
            </button>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-[9px] uppercase tracking-[0.3em]">
            &copy; {currentYear} Earth Developers — Crafted with Excellence
          </p>
          <div className="flex gap-8 text-[9px] uppercase tracking-[0.3em] text-white/20">
            <span className="hover:text-lux-gold cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-lux-gold cursor-pointer transition-colors">Terms</span>
          </div>
        </div>
      </div>

      {/* Aesthetic Background Decoration */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[14vw] font-premium text-white/[0.02] whitespace-nowrap pointer-events-none uppercase">
        Earth Developers
      </div>
    </footer>
  );
};

export default Footer;