import React from 'react';
import { Quote, Sparkles, CheckCircle2, UserCheck, Clock, Award } from 'lucide-react';
import { SALON_INFO, BARBERS } from '../data/salonData';

export const AboutOwner: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#0c0d12] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Owner Statement & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest">
              <span>The Yusluk Standard</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Sagamu, Ogun State</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display leading-tight">
              Masters in the Art of Grooming & African Hair Artistry
            </h2>

            {/* Direct quote from the owner screenshot */}
            <div className="relative p-6 sm:p-8 rounded-2xl bg-neutral-900/60 border border-amber-500/20 backdrop-blur-sm">
              <Quote className="w-10 h-10 text-amber-500/30 absolute top-4 right-4 pointer-events-none" />
              <p className="text-neutral-200 text-base sm:text-lg italic leading-relaxed relative z-10 mb-4">
                "{SALON_INFO.ownerQuote}"
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-neutral-800">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold text-sm">
                  YB
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Yusluk</h4>
                  <p className="text-xs text-neutral-400">Founder & Lead Barber, Yusluk Barbing Salon</p>
                </div>
              </div>
            </div>

            {/* The 4 Core Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Fresh Single-Use Blades</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Every razor is newly unsealed right in front of the customer.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Hospital-Grade UV Sanitation</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Clippers and guards sterilized between every single client.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Guaranteed Standby Power</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Uninterrupted heavy-duty generator keeps air conditioning icy cold.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Zero Wait Time Slots</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Book via WhatsApp and sit straight into the barber chair.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Specialist Team Profiles */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-amber-400" />
                  <span>Our Specialist Craftsmen</span>
                </h3>
                <span className="text-xs text-emerald-400 font-medium">On Duty Today</span>
              </div>

              <div className="space-y-4">
                {BARBERS.map((barber) => (
                  <div
                    key={barber.id}
                    className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800/80 hover:border-amber-500/30 transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-neutral-800 flex items-center justify-center font-bold text-amber-400 text-xs border border-amber-500/20 group-hover:border-amber-500/50">
                          {barber.name.substring(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors">
                            {barber.name}
                          </h4>
                          <p className="text-xs text-amber-400/80 font-medium">{barber.role}</p>
                        </div>
                      </div>
                      <span className="text-xs text-neutral-500 font-mono tabular-nums">
                        {barber.experienceYears}+ yrs exp
                      </span>
                    </div>
                    <p className="text-xs text-neutral-400 mt-2.5 pl-12">
                      {barber.specialty}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-center text-xs text-neutral-400">
                <span>Select your preferred craftsman when booking your appointment.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
