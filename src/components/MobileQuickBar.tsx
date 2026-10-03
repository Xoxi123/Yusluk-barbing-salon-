import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface MobileQuickBarProps {
  onOpenBooking: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onOpenBooking }) => {
  const whatsappUrl = `https://wa.me/${SALON_INFO.whatsappUrlDigits}?text=${encodeURIComponent(
    "Hello Yusluk Barbing Salon! I would like to book a haircut appointment."
  )}`;

  return (
    <aside
      aria-label="Quick mobile contact actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#090a0d]/95 backdrop-blur-md border-t border-neutral-800 p-2.5 shadow-2xl"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        <a
          href={`tel:${SALON_INFO.phoneRaw}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white transition-colors"
        >
          <Phone className="w-4 h-4 text-amber-400" />
          <span className="text-[11px] font-semibold mt-1">Call Salon</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 hover:text-white transition-colors"
        >
          <MessageSquare className="w-4 h-4 text-emerald-400" />
          <span className="text-[11px] font-semibold mt-1">WhatsApp</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold active:scale-95 transition-all shadow-md shadow-amber-500/20 cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-black" />
          <span className="text-[11px] font-bold mt-1">Book Cut</span>
        </button>
      </div>
    </aside>
  );
};
