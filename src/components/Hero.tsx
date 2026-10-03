import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MessageSquare, ShieldCheck, Zap, Star, MapPin, ArrowRight } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';
import { salonImages } from '../assets/images';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const whatsappUrl = `https://wa.me/${SALON_INFO.whatsappUrlDigits}?text=${encodeURIComponent(
    "Hello Yusluk Barbing Salon! I would like to book a grooming appointment. Please let me know your available slots today."
  )}`;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-6 pb-16 lg:py-24">
      {/* Background Image with Cinematic Dark Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={salonImages.heroLounge}
          alt="Yusluk Barbing Salon Luxury Grooming Interior"
          className="w-full h-full object-cover object-center scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Measured multi-layer gradient scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090a0d] via-[#090a0d]/85 to-[#090a0d]/70" />
        <div className="absolute inset-0 bg-radial-[circle_at_center] from-transparent via-[#090a0d]/40 to-[#090a0d]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Unboxed Metadata Tagline with Typographic Separators */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-amber-400 mb-4 tracking-wider uppercase"
          >
            <span className="text-white font-bold">Yusluk Barbing Salon</span>
            <span aria-hidden="true" className="text-neutral-500">·</span>
            <span>Sagamu, Ogun State</span>
            <span aria-hidden="true" className="text-neutral-500">·</span>
            <span>Oja Oba Market</span>
            <span aria-hidden="true" className="text-neutral-500">·</span>
            <span className="text-emerald-400 font-semibold">Closes 9:30 PM</span>
          </motion.div>

          {/* Master Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display leading-[1.08] [text-wrap:balance] mb-6"
          >
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">Yusluk Barbing Salon</span>
          </motion.h1>

          {/* Value Proposition */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-8 max-w-2xl font-normal"
          >
            From crisp skin fades and 360 wave definition to dreadlocks styling and custom hair tints. Experience surgical razor precision, hygienic sterile tools, and zero wait time with instant WhatsApp booking.
          </motion.p>

          {/* Action Row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12"
          >
            <button
              onClick={onOpenBooking}
              className="px-7 py-3.5 text-base font-semibold text-black bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-xl hover:from-amber-300 hover:to-amber-500 shadow-lg shadow-amber-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-3 cursor-pointer group"
            >
              <Calendar className="w-5 h-5 text-black" />
              <span>Book an Appointment</span>
              <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 text-base font-semibold text-white bg-emerald-700/80 hover:bg-emerald-600 border border-emerald-500/40 rounded-xl backdrop-blur-sm active:scale-[0.98] transition-all flex items-center justify-center gap-3"
            >
              <MessageSquare className="w-5 h-5 text-emerald-300" />
              <span>WhatsApp: +234 810 732 2203</span>
            </a>
          </motion.div>

          {/* Trust proof bar with quiet editorial math */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10"
          >
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">4.9 / 5.0</span>
              <span className="text-xs text-neutral-400 flex items-center gap-1 mt-0.5">
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                <span>120+ Google Reviews</span>
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-white flex items-center gap-1.5 font-display">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                <span>100% Sterile</span>
              </span>
              <span className="text-xs text-neutral-400 mt-0.5">UV clipper sanitation</span>
            </div>

            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-white flex items-center gap-1.5 font-display">
                <Zap className="w-5 h-5 text-amber-400" />
                <span>24/7 Power</span>
              </span>
              <span className="text-xs text-neutral-400 mt-0.5">Air conditioned lounge</span>
            </div>

            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-white flex items-center gap-1.5 font-display">
                <MapPin className="w-5 h-5 text-amber-400" />
                <span>Oja Oba</span>
              </span>
              <span className="text-xs text-neutral-400 mt-0.5">Beside Vigilante Office</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
