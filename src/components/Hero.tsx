import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, Heart, Activity } from 'lucide-react';
import { STATS } from '../constants';

export function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden hero-gradient">
      {/* Decorative blobs */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-teal-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-semibold mb-6">
              <Star size={16} fill="currentColor" />
              <span>Ranked #1 Veterinary & Spa in the City</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-extra-bold text-slate-900 leading-tight mb-6">
              High Quality <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">
                Pet Services
              </span> For You
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              We provide the best care for your beloved animals. Join thousands of happy pet owners who trust Petblooms for expert veterinary and premium spa treatments.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button className="px-8 py-4 bg-brand-primary text-white rounded-2xl font-bold flex items-center gap-2 transition-transform hover:scale-105 hover:bg-brand-secondary shadow-xl shadow-brand-primary/20">
                Book Appointment <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 bg-white text-slate-800 border border-slate-200 rounded-2xl font-bold transition-all hover:bg-slate-50">
                Our Services
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {STATS.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-2xl font-display font-bold text-slate-900">{stat.value}</div>
                  <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl z-10">
              <img 
                src="https://images.unsplash.com/photo-1548191265-cc70d3d45ba1?auto=format&fit=crop&q=80&w=1200" 
                alt="Happy dog at salon"
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass-morphism p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-rose-100 text-rose-500 rounded-full flex items-center justify-center">
                <Heart size={20} fill="currentColor" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-800">Best Care</div>
                <div className="text-xs text-slate-500">Professional Staff</div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 -left-10 glass-morphism p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-teal-100 text-brand-primary rounded-full flex items-center justify-center">
                <Activity size={20} />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-800">24/7 Priority</div>
                <div className="text-xs text-slate-500">Ready to Help</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
