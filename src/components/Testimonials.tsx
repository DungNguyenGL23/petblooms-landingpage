import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../constants';

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Reviews</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">What Our Clients Say</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            We are proud of the relationships we have built with our clients and their animal companions. Here are some of their stories.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-10 rounded-[40px] bg-brand-bg border border-slate-100 group hover:bg-white hover:shadow-2xl transition-all duration-300"
            >
              <Quote 
                className="absolute top-8 right-10 text-brand-primary/10 group-hover:text-brand-primary/20 transition-colors" 
                size={60} 
              />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#0D9488" className="text-brand-primary" />
                ))}
              </div>

              <p className="text-slate-700 text-lg leading-relaxed mb-8 italic">
                "{review.content}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={review.avatar} 
                  alt={review.author} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{review.author}</h4>
                  <p className="text-sm text-slate-500 font-medium">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand partners or trust badges could go here */}
        <div className="mt-24 pt-12 border-t border-slate-100 flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
           {/* Placeholders for partner logos */}
           <span className="text-2xl font-display font-bold text-slate-400">PetCare+</span>
           <span className="text-2xl font-display font-bold text-slate-400">VetAssociation</span>
           <span className="text-2xl font-display font-bold text-slate-400">PawsHealth</span>
           <span className="text-2xl font-display font-bold text-slate-400">LuxuryGroom</span>
           <span className="text-2xl font-display font-bold text-slate-400">AnimalWellness</span>
        </div>
      </div>
    </section>
  );
}
