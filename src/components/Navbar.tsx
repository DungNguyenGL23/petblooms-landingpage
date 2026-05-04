import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, PawPrint } from 'lucide-react';
import { Section } from '../types';

interface NavbarProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

export function Navbar({ activeSection, onSectionChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; id: Section }[] = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Testimonials', id: 'testimonials' }
  ];

  const handleNavClick = (id: Section) => {
    onSectionChange(id);
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4 glass-morphism shadow-md' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 group outline-none"
        >
          <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white transition-transform group-hover:scale-110">
            <PawPrint size={24} />
          </div>
          <span className="text-xl font-display font-bold text-slate-800">
            Petblooms
          </span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm font-medium transition-colors hover:text-brand-primary ${
                activeSection === item.id ? 'text-brand-primary' : 'text-slate-600'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div 
                  layoutId="activeNav"
                  className="h-0.5 bg-brand-primary mt-0.5 rounded-full"
                />
              )}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('booking')}
            className="px-6 py-2.5 bg-brand-primary text-white rounded-full text-sm font-semibold transition-all hover:bg-brand-secondary hover:shadow-lg active:scale-95"
          >
            Schedules
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-morphism border-t border-slate-200 mt-4 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-lg font-medium py-2 text-left ${
                    activeSection === item.id ? 'text-brand-primary font-semibold' : 'text-slate-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('booking')}
                className="w-full py-4 bg-brand-primary text-white rounded-xl text-center font-bold"
              >
                Book Schedule
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
