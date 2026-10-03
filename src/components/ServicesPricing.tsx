import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Calendar, Check, Sparkles, Flame } from 'lucide-react';
import { SERVICES } from '../data/salonData';
import { ServiceItem } from '../types';

interface ServicesPricingProps {
  onSelectService: (serviceId: string) => void;
}

export const ServicesPricing: React.FC<ServicesPricingProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'cuts', label: 'Cuts & Haircare' },
    { id: 'beard', label: 'Beard & Shave' },
    { id: 'locs', label: 'Dreadlocks' },
    { id: 'color', label: 'Color & Tint' },
    { id: 'vip', label: 'VIP Packages' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  const formatNaira = (amount: number) => {
    return '₦' + amount.toLocaleString('en-NG');
  };

  return (
    <section id="services" className="py-20 bg-[#090a0d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-3">
            <span>Transparent Pricing</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>No Hidden Charges</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display [text-wrap:balance]">
            Service Menu & Modern Salon Rates
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-4 max-w-xl mx-auto">
            Choose your service below and book directly on WhatsApp with your preferred craftsman.
          </p>

          {/* Interactive Category Segmented Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-neutral-900/90 border border-neutral-800 rounded-xl max-w-2xl mx-auto">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-amber-500 text-black font-semibold shadow-sm shadow-amber-500/30'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Grid with Smooth Animated Transitions */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 ${
                  service.popular
                    ? 'bg-gradient-to-b from-neutral-900/90 to-neutral-950/90 border border-amber-500/40 shadow-lg shadow-amber-500/5 hover:border-amber-500/70 hover:shadow-amber-500/10'
                    : 'bg-neutral-900/40 border border-neutral-800/80 hover:bg-neutral-900/80 hover:border-neutral-700'
                }`}
              >
                {/* Popular Marker */}
                {service.popular && (
                  <div className="absolute -top-3 left-6 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-black text-[11px] font-bold tracking-wider uppercase flex items-center gap-1 shadow-sm">
                    <Flame className="w-3 h-3 fill-black text-black" />
                    <span>Popular</span>
                  </div>
                )}

                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors font-display">
                      {service.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800/60 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                      <Clock className="w-3.5 h-3.5 text-amber-500" />
                      <span className="font-mono tabular-nums">{service.durationMinutes} mins</span>
                    </div>

                    <div className="text-right">
                      <span className="text-2xl font-extrabold text-amber-400 font-mono tabular-nums tracking-tight">
                        {formatNaira(service.price)}
                      </span>
                    </div>
                  </div>

                  {/* Smooth animated booking button with interactive hover & tap feedback */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onSelectService(service.id)}
                    className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer bg-neutral-800 hover:bg-amber-500 text-neutral-200 hover:text-black border border-neutral-700/80 hover:border-amber-400 shadow-sm"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book for {formatNaira(service.price)}</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Custom Service Note */}
        <div className="mt-12 p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800/60 text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-neutral-400">
            Need a custom haircut, home service in Sagamu, or a groom party reservation?
          </p>
          <button
            onClick={() => onSelectService('vip-presidential')}
            className="mt-3 text-xs sm:text-sm font-semibold text-amber-400 hover:text-amber-300 underline underline-offset-4 cursor-pointer"
          >
            Inquire directly for personalized grooming packages →
          </button>
        </div>
      </div>
    </section>
  );
};
