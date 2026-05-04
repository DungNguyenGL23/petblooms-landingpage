import React from 'react';
import { PawPrint, Mail, Phone, MapPin, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white">
                <PawPrint size={24} />
              </div>
              <span className="text-2xl font-display font-bold text-white leading-none">
                Petblooms
              </span>
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Premium veterinary care and luxury pet spa services designed to give your furry friends the high-quality life they deserve.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 text-lg">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Our Services', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-brand-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 text-lg">Our Services</h4>
            <ul className="space-y-4">
                {['Veterinary Checkup', 'Pet Spa & Grooming', 'Dental Care', 'Vaccinations', 'Emergency Care'].map((item) => (
                    <li key={item}>
                    <a href="#" className="hover:text-brand-primary transition-colors">{item}</a>
                    </li>
                ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 text-lg">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="text-brand-primary shrink-0" size={20} />
                <span>123 Pet Lane, Animal City <br /> CA 90210, USA</span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-brand-primary shrink-0" size={20} />
                <span>+1 (555) 000-1234</span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-brand-primary shrink-0" size={20} />
                <span>hello@petblooms.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:row-between gap-4 md:flex-row justify-between items-center text-sm font-medium text-slate-500">
          <p>© 2024 Petblooms Veterinary & Spa. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
