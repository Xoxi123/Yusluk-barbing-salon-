import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, Navigation, ExternalLink, Shield } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const LocationMap: React.FC = () => {
  const whatsappUrl = `https://wa.me/${SALON_INFO.whatsappUrlDigits}?text=${encodeURIComponent(
    "Hello Yusluk Barbing Salon! I am on my way or looking for directions to your salon at Oja Oba Market, Sagamu."
  )}`;

  return (
    <section id="location" className="py-20 bg-[#0c0d12] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-3">
            <span>Find Us In Sagamu</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Easy Access & Parking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display">
            Location & Salon Hours
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-lg mx-auto">
            Conveniently situated in the bustling heart of Sagamu at Oja Oba Market, right beside the local Vigilante Office.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Contact & Hours Details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-6">
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Physical Address</h3>
                  <p className="text-sm text-neutral-300 mt-1 leading-snug">
                    {SALON_INFO.address}
                  </p>
                  <p className="text-xs text-amber-400/90 mt-1 flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5" />
                    <span>Landmark: Directly beside the Vigilante Office</span>
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">Opening Hours</h3>
                    <span className="text-xs text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                      Open 7 Days
                    </span>
                  </div>
                  <div className="mt-2 space-y-1.5 text-xs text-neutral-300">
                    <div className="flex justify-between py-1 border-b border-neutral-800/80">
                      <span className="text-neutral-400">Monday – Saturday</span>
                      <span className="font-semibold text-white font-mono">8:30 AM – 9:30 PM</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-neutral-400">Sunday</span>
                      <span className="font-semibold text-white font-mono">10:00 AM – 9:30 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Communication Channels */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Direct Hotline</h3>
                  <a
                    href={`tel:${SALON_INFO.phoneRaw}`}
                    className="text-base font-bold text-amber-400 hover:underline block mt-0.5 font-mono"
                  >
                    {SALON_INFO.phone}
                  </a>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Call anytime during salon hours for fast inquiries.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-4 border-t border-neutral-800 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={SALON_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold flex items-center justify-center gap-2 border border-neutral-700 transition-colors"
              >
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>Get Directions</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Embedded Map */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 min-h-[380px] relative flex flex-col">
            {/* Map Top Bar */}
            <div className="bg-neutral-950 px-4 py-3 border-b border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
              <span className="flex items-center gap-1.5 text-white font-medium">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Oja Oba Market, Sagamu 121102, Ogun State</span>
              </span>
              <a
                href={SALON_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:underline flex items-center gap-1"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Iframe */}
            <div className="w-full flex-1 relative min-h-[350px]">
              <iframe
                title="Yusluk Barbing Salon Location at Oja Oba Market Sagamu"
                src={SALON_INFO.googleMapsEmbedUrl}
                className="w-full h-full border-0 absolute inset-0 filter invert-[0.9] hue-rotate-[180deg] contrast-[1.1] grayscale-[0.3]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
