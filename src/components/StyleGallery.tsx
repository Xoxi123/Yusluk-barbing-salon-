import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, Calendar, Sparkles, X, Check, ArrowRight } from 'lucide-react';
import { HAIRCUT_STYLES } from '../data/salonData';
import { HaircutStyle } from '../types';

interface StyleGalleryProps {
  onBookStyle: (serviceId: string) => void;
}

export const StyleGallery: React.FC<StyleGalleryProps> = ({ onBookStyle }) => {
  const [filter, setFilter] = useState<'all' | 'fades' | 'locs' | 'beard' | 'dye'>('all');
  const [activeModalStyle, setActiveModalStyle] = useState<HaircutStyle | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Cuts' },
    { id: 'fades', label: 'Fades & Waves' },
    { id: 'locs', label: 'Dreadlocks' },
    { id: 'beard', label: 'Beard Sculpting' },
    { id: 'dye', label: 'Hair Color & Tint' },
  ];

  const filteredStyles = filter === 'all'
    ? HAIRCUT_STYLES
    : HAIRCUT_STYLES.filter((item) => item.category === filter);

  const formatNaira = (amount: number) => '₦' + amount.toLocaleString('en-NG');

  return (
    <section id="gallery" className="py-20 bg-[#0c0d12] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-3">
              <span>Craftsmanship In Action</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Lookbook 2026</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display">
              Signature Haircut Styles
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-lg">
              Explore our most requested cuts and transformations. Every cut is customized to your face shape and hair texture.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-neutral-900/90 border border-neutral-800 rounded-xl self-start md:self-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  filter === tab.id
                    ? 'bg-amber-500 text-black font-semibold shadow-sm shadow-amber-500/30'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredStyles.map((style) => (
              <motion.div
                key={style.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="group relative rounded-2xl overflow-hidden bg-neutral-900/60 border border-neutral-800 hover:border-amber-500/50 transition-all flex flex-col"
              >
                {/* Image Container with 4:3 Aspect Ratio and Zoom Effect */}
                <div
                  className="relative aspect-[4/3] overflow-hidden cursor-pointer"
                  onClick={() => setActiveModalStyle(style)}
                >
                  <img
                    src={style.image}
                    alt={style.title}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Quick View Hover Badge */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-[2px]">
                    <span className="px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-700 text-white text-xs font-medium flex items-center gap-1.5 shadow-lg">
                      <Eye className="w-3.5 h-3.5 text-amber-400" />
                      View Details
                    </span>
                  </div>

                  {/* Price Tag Overlay */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/10 text-amber-400 font-mono text-xs font-bold tabular-nums">
                    {formatNaira(style.price)}
                  </div>
                </div>

                {/* Content block */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors font-display line-clamp-1">
                      {style.title}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-2 line-clamp-2 leading-relaxed">
                      {style.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-3 border-t border-neutral-800/80 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setActiveModalStyle(style)}
                      className="text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
                    >
                      Style Guide
                    </button>

                    <button
                      onClick={() => onBookStyle(style.serviceId)}
                      className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm shadow-amber-500/20 active:scale-95"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      Book Cut
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Style Details Lightbox Modal */}
      <AnimatePresence>
        {activeModalStyle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalStyle(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="relative aspect-[4/3] sm:aspect-auto h-full">
                  <img
                    src={activeModalStyle.image}
                    alt={activeModalStyle.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
                      {activeModalStyle.category.toUpperCase()}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1 font-display">
                      {activeModalStyle.title}
                    </h3>
                    <div className="text-2xl font-extrabold text-amber-400 font-mono mt-2 tabular-nums">
                      {formatNaira(activeModalStyle.price)}
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-300 mt-4 leading-relaxed">
                      {activeModalStyle.description}
                    </p>

                    <div className="mt-4 p-3 rounded-xl bg-neutral-950/80 border border-neutral-800">
                      <span className="text-[11px] font-semibold text-amber-400 flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5" />
                        Barber Care Recommendation:
                      </span>
                      <p className="text-xs text-neutral-400 mt-1">
                        {activeModalStyle.barberTip}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-neutral-800 flex items-center gap-3">
                    <button
                      onClick={() => {
                        const sId = activeModalStyle.serviceId;
                        setActiveModalStyle(null);
                        onBookStyle(sId);
                      }}
                      className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-amber-500/20 active:scale-98 transition-all"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book This Style on WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
