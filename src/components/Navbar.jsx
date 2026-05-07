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

  // Smooth Scroll Function
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      const offset = 80; // Navbar ki height ke liye thora gap
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false); // Mobile menu band karne ke liye
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
          ? 'h-20 bg-lux-white/70 dark:bg-lux-black/70 backdrop-blur-xl shadow-2xl border-b border-lux-gold/20' 
          : 'h-24 bg-lux-white dark:bg-lux-black shadow-md border-b border-lux-gold/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
        
        {/* LOGO SECTION - Click karne pe Home pe scroll karega */}
        <a 
          href="#Home" 
          onClick={(e) => handleScrollTo(e, '#Home')}
          className="flex items-center group cursor-pointer"
        >
          <motion.div
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.6}
            whileDrag={{ scale: 1.2, cursor: "grabbing" }}
            animate={{ y: [0, -8, 0] }}
            transition={{ y: { repeat: Infinity, duration: 3, ease: "easeInOut" } }}
            className="mr-4 cursor-grab relative z-40"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-lux-brown via-lux-gold to-lux-tan shadow-[0_0_20px_rgba(233,196,106,0.5)] flex items-center justify-center border border-lux-gold/30">
              <div className="w-7 h-7 border-2 border-white/20 rounded-full border-dashed animate-[spin_8s_linear_infinite]" />
            </div>
            <div className="absolute inset-0 bg-lux-gold/30 blur-lg rounded-full -z-10" />
          </motion.div>

          <motion.div 
            initial="animate" 
            whileHover="hover"
            className="relative flex items-center py-2 overflow-hidden"
          >
            <div className="flex space-x-[2px] font-bold tracking-[0.2em] text-2xl relative z-30">
              <span className="text-lux-brown dark:text-lux-gold transition-colors duration-500">EARTH</span>
              <span className="w-2"></span>
              <span className="font-light text-gradient-gold">DEVELOPERS</span>
            </div>
            <motion.div
              animate={{ x: ['-200%', '300%'] }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear", repeatDelay: 1 }}
              className="absolute inset-0 w-24 h-full bg-gradient-to-r from-transparent via-white/60 dark:via-lux-gold/40 to-transparent skew-x-[-25deg] z-20 pointer-events-none"
            />
          </motion.div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className="relative group text-sm uppercase tracking-widest font-semibold overflow-hidden text-lux-black dark:text-lux-white transition-colors duration-500"
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
            className="p-2 rounded-full border border-lux-gold/30 bg-lux-gold/5 hover:bg-lux-gold/20 transition-all cursor-pointer shadow-inner"
          >
            {isDark ? (
              <Sun className="text-lux-gold animate-pulse" size={18} />
            ) : (
              <Moon className="text-lux-brown" size={18} />
            )}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setIsDark(!isDark)} className="text-lux-gold">
            {isDark ? <Sun size={22} /> : <Moon size={22} />}
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-lux-black dark:text-lux-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-lux-white/95 dark:bg-lux-black/95 backdrop-blur-2xl border-t border-lux-gold/20 md:hidden"
          >
            <div className="flex flex-col items-center py-10 space-y-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="text-xl font-bold tracking-widest text-lux-brown dark:text-lux-gold"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;