import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { Section } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');

  return (
    <div className="min-h-screen">
      <Navbar activeSection={activeSection} onSectionChange={setActiveSection} />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
      </main>

      <Footer />

      {/* Floating Action Button for mobile booking */}
      <div className="fixed bottom-8 right-8 z-40 lg:hidden">
        <button className="w-16 h-16 bg-brand-primary text-white rounded-full shadow-2xl flex items-center justify-center animate-bounce">
          <span className="font-bold text-xs uppercase">Book</span>
        </button>
      </div>
    </div>
  );
}
