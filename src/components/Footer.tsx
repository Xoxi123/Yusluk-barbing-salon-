import React from 'react';
import { Scissors, MapPin, Phone, MessageSquare, Clock } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#07080a] border-t border-white/5 py-12 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-amber-500 flex items-center justify-center text-black font-black">
                <Scissors className="w-4 h-4 stroke-[2.5]" />
              </div>
              <span className="text-base font-bold text-white font-display">
                Yusluk Barbing Salon
              </span>
            </div>
            <p className="text-neutral-400 leading-relaxed text-xs">
              Premier men's hair grooming, trendy skin fades, dreadlocks, and beard craftsmanship in Sagamu, Ogun State.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-1.5">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">Services & Pricing</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition-colors">Haircut Styles Gallery</a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">About & Sanitation</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-amber-400 transition-colors">Client Testimonials</a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-400 transition-colors">Location Map & Directions</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Working Hours</h4>
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-neutral-300">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Monday – Saturday: 8:30 AM – 9:30 PM</span>
              </div>
              <p className="text-neutral-400 pl-5">Sunday: 10:00 AM – 9:30 PM</p>
              <p className="text-emerald-400 text-[11px] pl-5">Open all public holidays</p>
            </div>
          </div>

          {/* Location & Contact */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Contact & Address</h4>
            <div className="space-y-1.5">
              <p className="flex items-start gap-1.5 text-neutral-300">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Oja Oba Market, beside vigilante office, Sagamu 121102, Ogun State</span>
              </p>
              <p className="flex items-center gap-1.5 text-neutral-300">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <a href={`tel:${SALON_INFO.phoneRaw}`} className="hover:underline">{SALON_INFO.phone}</a>
              </p>
              <p className="flex items-center gap-1.5 text-neutral-300">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp: {SALON_INFO.whatsappNumber}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Quiet Bottom Legal */}
        <div className="pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500">
          <p>© {new Date().getFullYear()} Yusluk Barbing Salon. All rights reserved.</p>
          <p className="text-neutral-500">
            Sagamu, Ogun State, Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
};
