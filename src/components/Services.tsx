import React from 'react';
import { motion } from 'motion/react';
import { Stethoscope, Bath, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';

const IconMap: { [key: string]: any } = {
  Stethoscope,
  Bath,
  Sparkles,
  ShieldCheck
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
            Comprehensive Care for Your <br />
            <span className="text-brand-primary italic">Better Friends</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            From emergency surgeries to aesthetic grooming, we offer a wide range of services to keep your pets happy and healthy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => {
            const Icon = IconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 rounded-[32px] bg-white border border-slate-100 shadow-sm transition-all hover:shadow-xl hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-brand-primary/10 text-brand-primary rounded-2xl flex items-center justify-center mb-8 border border-brand-primary/10 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  <Icon size={28} />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-slate-50 mt-auto">
                  <span className="text-brand-primary font-bold">{service.price}</span>
                  <button className="text-slate-900 hover:text-brand-primary transition-colors">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 relative rounded-[40px] overflow-hidden bg-brand-secondary p-12 md:p-20 group"
        >
          <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block overflow-hidden">
                <img 
                    src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=1200" 
                    alt="Pet care" 
                    className="w-full h-full object-cover rounded-l-full scale-110 group-hover:scale-100 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary to-transparent" />
          </div>

          <div className="relative z-10 lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Ready to Book Your Pet's Next Appointment?
            </h2>
            <p className="text-teal-50 text-lg mb-10 leading-relaxed">
              Don't wait! Give your pet the high-quality treatment they deserve. Our experts are waitng to welcome you.
            </p>
            <button className="px-10 py-4 bg-brand-accent text-slate-900 rounded-2xl font-bold text-lg transition-all hover:bg-white hover:scale-105 shadow-xl shadow-brand-accent/20">
              Get Started Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
