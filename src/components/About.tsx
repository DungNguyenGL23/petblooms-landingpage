import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ShieldEllipsis, Users, Award } from 'lucide-react';
import { TEAM } from '../constants';

export function About() {
  const features = [
    { icon: <ShieldEllipsis className="text-brand-primary" />, title: 'Certified Experts', desc: 'All our vets and groomers are fully certified and passionate about pets.' },
    { icon: <Users className="text-brand-primary" />, title: 'Personalized Care', desc: 'We tailor our treatments to meet the unique needs of your furry friend.' },
    { icon: <Award className="text-brand-primary" />, title: 'Award Winning', desc: 'Consistently recognized for excellence in pet healthcare and styling.' }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4 block">About Our Clinic</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
              We Are the Best Treatment For Your Beloved Animals
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Founded in 2010, Petblooms has been at the forefront of pet care. Our mission is simple: to provide high-quality medical care in a compassionate environment and style them to look their absolute best.
            </p>

            <div className="space-y-6 mb-10">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 w-6 h-6 shrink-0">{f.icon}</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{f.title}</h4>
                    <p className="text-slate-600 text-sm">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold transition-transform hover:scale-105">
              Read Our Full Story
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1576201836106-cf1758af1c97?auto=format&fit=crop&q=80&w=600" 
                alt="Vet examining dog" 
                className="rounded-3xl shadow-lg mt-12"
              />
              <img 
                src="https://images.unsplash.com/photo-1597673030062-0a0f1a801a31?auto=format&fit=crop&q=80&w=600" 
                alt="Grooming session" 
                className="rounded-3xl shadow-lg"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-brand-primary text-white p-8 rounded-3xl shadow-2xl hidden md:block">
              <div className="text-4xl font-bold mb-1">15+</div>
              <div className="text-sm font-medium opacity-80 uppercase tracking-wider">Years of Experience</div>
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <span className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4 block">Meet Our Professionals</span>
          <h2 className="text-4xl font-display font-bold text-slate-900">Expert Staff Ready to Help</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TEAM.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative mb-6 rounded-3xl overflow-hidden aspect-[4/5]">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <div className="text-white">
                    <p className="font-medium text-teal-200 mb-1">{member.specialization}</p>
                    <h4 className="text-xl font-bold">{member.name}</h4>
                  </div>
                </div>
              </div>
              <div className="text-center group-hover:hidden">
                <h4 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h4>
                <p className="text-slate-500 font-medium">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
