import React from 'react';
import { motion } from 'motion/react';
import { X, Calendar, Clock, Scissors, MessageSquare, Trash2, ExternalLink } from 'lucide-react';
import { AppointmentBooking } from '../types';
import { SALON_INFO } from '../data/salonData';

interface MyBookingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookings: AppointmentBooking[];
  onRemoveBooking: (id: string) => void;
  onNewBookingClick: () => void;
}

export const MyBookingsModal: React.FC<MyBookingsModalProps> = ({
  isOpen,
  onClose,
  bookings,
  onRemoveBooking,
  onNewBookingClick
}) => {
  if (!isOpen) return null;

  const formatNaira = (amt: number) => '₦' + amt.toLocaleString('en-NG');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden my-6"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-neutral-800 bg-neutral-950/60">
          <div>
            <h3 className="text-lg font-bold text-white font-display">My Scheduled Appointments</h3>
            <p className="text-xs text-neutral-400">View and manage your upcoming cuts at Yusluk Barbing Salon</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
          {bookings.length === 0 ? (
            <div className="text-center py-10 space-y-3">
              <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-500 mx-auto">
                <Scissors className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-semibold text-white">No Appointments Scheduled Yet</h4>
              <p className="text-xs text-neutral-400 max-w-xs mx-auto">
                Book a slot to reserve your chair and avoid waiting in line.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onNewBookingClick();
                }}
                className="mt-2 px-4 py-2 rounded-lg bg-amber-500 text-black text-xs font-bold hover:bg-amber-400 cursor-pointer"
              >
                Book An Appointment Now
              </button>
            </div>
          ) : (
            bookings.map((b) => (
              <div
                key={b.id}
                className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-400">{b.id}</span>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Dispatched to WhatsApp
                    </span>
                    <button
                      onClick={() => onRemoveBooking(b.id)}
                      className="p-1 rounded text-neutral-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                      title="Remove appointment"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-white">{b.serviceName}</h4>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400">
                    <span className="flex items-center gap-1 text-white">
                      <Calendar className="w-3 h-3 text-amber-400" />
                      {b.date}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1 text-white">
                      <Clock className="w-3 h-3 text-amber-400" />
                      {b.timeSlot}
                    </span>
                    <span>·</span>
                    <span>Craftsman: {b.barberName}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-neutral-800/80 flex items-center justify-between">
                  <span className="text-xs text-amber-400 font-mono font-bold">
                    {formatNaira(b.price)}
                  </span>

                  <a
                    href={`https://wa.me/${SALON_INFO.whatsappUrlDigits}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-emerald-400 hover:underline flex items-center gap-1 font-medium"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Message Salon</span>
                  </a>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {bookings.length > 0 && (
          <div className="p-4 border-t border-neutral-800 bg-neutral-950/40 flex justify-between items-center">
            <button
              onClick={() => {
                onClose();
                onNewBookingClick();
              }}
              className="text-xs text-amber-400 hover:text-amber-300 font-semibold cursor-pointer"
            >
              + Book Another Service
            </button>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs text-white cursor-pointer"
            >
              Close
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};
