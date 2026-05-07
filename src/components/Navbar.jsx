import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDark]);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      const offset = 80; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false); 
  };

  const navLinks = [
    { name: 'Home', href: '#Home' },
    { name: 'Services', href: '#Services' },
    { name: 'Featured', href: '#Featured' },
    { name: 'About', href: '#About' },
    { name: 'Contact', href: '#Contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-[100] transition-all duration-500 ease-in-out ${
        scrolled 
          ? 'h-16 sm:h-20 bg-lux-white/80 dark:bg-lux-black/80 backdrop-blur-xl shadow-2xl border-b border-lux-gold/20' 
          : 'h-20 sm:h-24 bg-lux-white dark:bg-lux-black shadow-md border-b border-lux-gold/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex justify-between items-center">
        
        {/* LOGO SECTION */}
        <a 
          href="#Home" 
          onClick={(e) => handleScrollTo(e, '#Home')}
          className="flex items-center group cursor-pointer"
        >
          <motion.div
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.6}
            whileDrag={{ scale: 1.1, cursor: "grabbing" }}
            animate={{ y: [0, -5, 0] }}
            transition={{ y: { repeat: Infinity, duration: 3, ease: "easeInOut" } }}
            className="mr-2 sm:mr-4 cursor-grab relative z-40"
          >
            {/* Logo Circle - Slightly smaller for mobile */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-lux-brown via-lux-gold to-lux-tan shadow-[0_0_15px_rgba(233,196,106,0.4)] flex items-center justify-center border border-lux-gold/30">
              <div className="w-5 h-5 sm:w-7 sm:h-7 border-2 border-white/20 rounded-full border-dashed animate-[spin_8s_linear_infinite]" />
            </div>
          </motion.div>

          <div className="relative flex flex-col sm:flex-row sm:items-center py-2 overflow-hidden">
            {/* Logo Text - Responsive Font Sizes to avoid cutting */}
            <div className="flex space-x-[1px] sm:space-x-[2px] font-bold tracking-[0.1em] sm:tracking-[0.2em] text-sm xs:text-base sm:text-xl md:text-2xl relative z-30">
              <span className="text-lux-brown dark:text-lux-gold transition-colors duration-500 uppercase">Earth</span>
              <span className="hidden xs:inline-block w-1"></span>
              <span className="font-light text-gradient-gold uppercase">Developers</span>
            </div>
            
            {/* Shine effect */}
            <motion.div
              animate={{ x: ['-200%', '300%'] }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear", repeatDelay: 1 }}
              className="absolute inset-0 w-24 h-full bg-gradient-to-r from-transparent via-white/40 dark:via-lux-gold/30 to-transparent skew-x-[-25deg] z-20 pointer-events-none"
            />
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
          {navLinks.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className="relative group text-[10px] lg:text-sm uppercase tracking-widest font-semibold overflow-hidden text-lux-black dark:text-lux-white"
            >
              <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
                {item.name}
              </span>
              <span className="absolute left-0 top-full inline-block text-lux-gold transition-transform duration-300 group-hover:-translate-y-full">
                {item.name}
              </span>
            </a>
          ))}
          
          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full border border-lux-gold/30 bg-lux-gold/5 hover:bg-lux-gold/20 transition-all cursor-pointer"
          >
            {isDark ? <Sun className="text-lux-gold" size={16} /> : <Moon className="text-lux-brown" size={16} />}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={() => setIsDark(!isDark)} className="text-lux-gold p-1">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-lux-black dark:text-lux-white p-1"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-lux-white dark:bg-lux-black backdrop-blur-2xl border-t border-lux-gold/20 md:hidden overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col items-center py-8 space-y-6">
              {navLinks.map((link, idx) => (
                <motion.a 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="text-base font-bold tracking-[0.3em] uppercase text-lux-brown dark:text-lux-gold hover:scale-110 transition-transform"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;