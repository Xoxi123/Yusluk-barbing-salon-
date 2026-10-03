import React, { useState, useEffect } from 'react';
import { Scissors, Calendar, Clock, Phone, Menu, X, BookmarkCheck } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
  onOpenMyBookings: () => void;
  bookingCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenMyBookings,
  bookingCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Calculate if salon is currently open (8:30 AM - 9:30 PM)
    const now = new Date();
    const currentHour = now.getHours() + now.getMinutes() / 60;
    setIsOpenNow(currentHour >= SALON_INFO.openingHour24 && currentHour < SALON_INFO.closingHour24);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#090a0d]/95 backdrop-blur-md border-b border-amber-950/30 shadow-lg shadow-black/50'
          : 'bg-[#090a0d] border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Single text wordmark */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-black font-black shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform duration-200">
            <Scissors className="w-5 h-5 stroke-[2.5]" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors font-display">
              Yusluk Barbing Salon
            </span>
            <div className="flex items-center gap-2 text-xs text-neutral-400">
              <span className="inline-flex items-center gap-1.5 text-xs">
                <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`} />
                <span className={isOpenNow ? 'text-emerald-400 font-medium' : 'text-neutral-400'}>
                  {isOpenNow ? 'Open Now · Closes 9:30 PM' : 'Closed · Opens 8:30 AM'}
                </span>
              </span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="hidden sm:inline text-neutral-400">Sagamu, Ogun State</span>
            </div>
          </div>
        </a>

        {/* Zone 2: Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
          <a
            href="#services"
            className="hover:text-amber-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-amber-500 after:transition-all"
          >
            Services & Pricing
          </a>
          <a
            href="#gallery"
            className="hover:text-amber-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-amber-500 after:transition-all"
          >
            Haircut Styles
          </a>
          <a
            href="#about"
            className="hover:text-amber-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-amber-500 after:transition-all"
          >
            About & Craft
          </a>
          <a
            href="#testimonials"
            className="hover:text-amber-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-amber-500 after:transition-all"
          >
            Testimonials
          </a>
          <a
            href="#location"
            className="hover:text-amber-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-amber-500 after:transition-all"
          >
            Location Map
          </a>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-3">
          {bookingCount > 0 && (
            <button
              onClick={onOpenMyBookings}
              className="relative p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-amber-400 hover:border-amber-500/40 transition-colors focus:outline-none"
              title="My Scheduled Appointments"
              aria-label="View scheduled appointments"
            >
              <BookmarkCheck className="w-5 h-5 text-amber-400" />
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-amber-500 text-black text-xs font-bold flex items-center justify-center">
                {bookingCount}
              </span>
            </button>
          )}

          <a
            href={`tel:${SALON_INFO.phoneRaw}`}
            className="hidden lg:flex items-center gap-2 text-xs font-semibold text-neutral-300 hover:text-white px-3 py-2 rounded-lg bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>0810 732 2203</span>
          </a>

          <button
            onClick={() => onOpenBooking()}
            className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-black bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-lg hover:from-amber-300 hover:to-amber-500 shadow-md shadow-amber-500/20 active:scale-[0.98] transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-black" />
            <span>Book Appointment</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e1015] border-b border-neutral-800 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-2">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-base font-medium text-neutral-200 hover:bg-neutral-800 hover:text-amber-400"
            >
              Services & Pricing
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-base font-medium text-neutral-200 hover:bg-neutral-800 hover:text-amber-400"
            >
              Haircut Styles Gallery
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-base font-medium text-neutral-200 hover:bg-neutral-800 hover:text-amber-400"
            >
              About & Craftsmanship
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-base font-medium text-neutral-200 hover:bg-neutral-800 hover:text-amber-400"
            >
              Client Testimonials
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-base font-medium text-neutral-200 hover:bg-neutral-800 hover:text-amber-400"
            >
              Location & Map
            </a>
          </nav>

          <div className="pt-3 border-t border-neutral-800 space-y-2">
            <div className="flex items-center gap-2 text-xs text-neutral-400 px-3">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Open Daily: 8:30 AM – 9:30 PM</span>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-2">
              <a
                href={`tel:${SALON_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-200 hover:text-white"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                Call Salon
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-amber-500 text-black text-xs font-bold"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
