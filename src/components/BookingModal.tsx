import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Calendar as CalendarIcon,
  Clock,
  User,
  Phone,
  MessageSquare,
  CheckCircle2,
  Scissors,
  Sparkles,
  Copy,
  Check,
  CalendarPlus,
  ArrowRight
} from 'lucide-react';
import { SERVICES, BARBERS, SALON_INFO } from '../data/salonData';
import { AppointmentBooking } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedServiceId?: string;
  onBookingCreated: (booking: AppointmentBooking) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preSelectedServiceId,
  onBookingCreated
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    preSelectedServiceId || SERVICES[0].id
  );
  const [selectedBarberId, setSelectedBarberId] = useState<string>('any');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('11:00 AM');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [confirmedBooking, setConfirmedBooking] = useState<AppointmentBooking | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  // Available dates (Today + next 6 days)
  const availableDates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    const dayName = i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : d.toLocaleDateString('en-US', { weekday: 'short' });
    const fullDate = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    const isoDate = d.toISOString().split('T')[0];
    return { dayName, fullDate, isoDate };
  });

  useEffect(() => {
    if (preSelectedServiceId) {
      setSelectedServiceId(preSelectedServiceId);
    }
  }, [preSelectedServiceId]);

  useEffect(() => {
    if (!selectedDate && availableDates.length > 0) {
      setSelectedDate(availableDates[0].isoDate);
    }
  }, []);

  if (!isOpen) return null;

  const currentService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];
  const currentBarber = selectedBarberId === 'any'
    ? { id: 'any', name: 'First Available Craftsman' }
    : BARBERS.find((b) => b.id === selectedBarberId) || { id: 'any', name: 'First Available Craftsman' };

  const timeSlots = [
    '09:00 AM',
    '10:15 AM',
    '11:30 AM',
    '01:00 PM',
    '02:15 PM',
    '03:30 PM',
    '04:45 PM',
    '06:00 PM',
    '07:15 PM',
    '08:30 PM'
  ];

  const formatNaira = (amt: number) => '₦' + amt.toLocaleString('en-NG');

  const handleCompleteBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !clientPhone.trim()) return;

    const chosenDateObj = availableDates.find((d) => d.isoDate === selectedDate) || availableDates[0];

    const newBooking: AppointmentBooking = {
      id: 'YBK-' + Math.floor(1000 + Math.random() * 9000),
      clientName: clientName.trim(),
      clientPhone: clientPhone.trim(),
      serviceId: currentService.id,
      serviceName: currentService.name,
      price: currentService.price,
      barberId: currentBarber.id,
      barberName: currentBarber.name,
      date: `${chosenDateObj.dayName} (${chosenDateObj.fullDate})`,
      timeSlot: selectedTimeSlot,
      notes: notes.trim(),
      createdAt: new Date().toISOString(),
      status: 'confirmed'
    };

    // Save locally
    onBookingCreated(newBooking);
    setConfirmedBooking(newBooking);

    // Format WhatsApp message
    const msg = [
      `*NEW APPOINTMENT BOOKING - YUSLUK BARBING SALON*`,
      `━━━━━━━━━━━━━━━━━━━━━━━`,
      `✂️ *Service:* ${newBooking.serviceName} (${formatNaira(newBooking.price)})`,
      `👤 *Client Name:* ${newBooking.clientName}`,
      `📞 *Client WhatsApp:* ${newBooking.clientPhone}`,
      `💈 *Preferred Craftsman:* ${newBooking.barberName}`,
      `📅 *Date:* ${newBooking.date}`,
      `⏰ *Time Slot:* ${newBooking.timeSlot}`,
      newBooking.notes ? `📝 *Special Request:* ${newBooking.notes}` : ``,
      `🔖 *Ref ID:* ${newBooking.id}`,
      `━━━━━━━━━━━━━━━━━━━━━━━`,
      `📍 *Location:* Oja Oba Market, beside vigilante office, Sagamu 121102, Ogun State`,
      `Please reply with confirmation. Thank you!`
    ]
      .filter(Boolean)
      .join('\n');

    const whatsappUrl = `https://wa.me/${SALON_INFO.whatsappUrlDigits}?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const copyBookingSummary = () => {
    if (!confirmedBooking) return;
    const text = `Yusluk Barbing Salon Appointment: ${confirmedBooking.serviceName} on ${confirmedBooking.date} at ${confirmedBooking.timeSlot} with ${confirmedBooking.barberName}. Ref: ${confirmedBooking.id}. Location: Oja Oba Market, Sagamu.`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.2 }}
        className="relative w-full max-w-2xl bg-[#0e1017] border border-amber-500/30 rounded-2xl shadow-2xl overflow-hidden my-6"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between p-5 border-b border-neutral-800 bg-neutral-900/60">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Scissors className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white font-display">
                {confirmedBooking ? 'Booking Confirmed' : 'Book Your Appointment'}
              </h2>
              <p className="text-xs text-neutral-400">
                {confirmedBooking
                  ? 'Your appointment was sent to WhatsApp. Review details below.'
                  : 'Fast scheduling with direct WhatsApp synchronization'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Confirmation State */}
        {confirmedBooking ? (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white font-display">
                Appointment Dispatched!
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto">
                Your booking request for <span className="text-amber-400 font-semibold">{confirmedBooking.serviceName}</span> has been dispatched to WhatsApp.
              </p>
            </div>

            {/* Receipt Card */}
            <div className="p-5 rounded-xl bg-neutral-900/80 border border-neutral-800 space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-neutral-800 text-neutral-400">
                <span>REFERENCE ID</span>
                <span className="text-amber-400 font-bold">{confirmedBooking.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Client:</span>
                <span className="text-white font-medium">{confirmedBooking.clientName} ({confirmedBooking.clientPhone})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Service:</span>
                <span className="text-white font-medium">{confirmedBooking.serviceName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Craftsman:</span>
                <span className="text-white font-medium">{confirmedBooking.barberName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Scheduled:</span>
                <span className="text-amber-400 font-medium">{confirmedBooking.date} @ {confirmedBooking.timeSlot}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-neutral-800">
                <span className="text-neutral-400 font-bold">TOTAL PRICE:</span>
                <span className="text-white font-bold text-sm">{formatNaira(confirmedBooking.price)}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <a
                href={`https://wa.me/${SALON_INFO.whatsappUrlDigits}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open WhatsApp Chat ({SALON_INFO.phone})</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={copyBookingSummary}
                  className="py-2.5 px-3 rounded-xl bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-neutral-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-amber-400" />}
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Summary'}</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="py-2.5 px-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold flex items-center justify-center transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <form onSubmit={handleCompleteBooking} className="p-5 sm:p-6 space-y-5">
            {/* Step 1: Select Service */}
            <div>
              <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                1. Select Service & Rate
              </label>
              <select
                value={selectedServiceId}
                onChange={(e) => setSelectedServiceId(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-sm text-white focus:outline-none focus:border-amber-500 cursor-pointer"
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name} — {formatNaira(s.price)} ({s.durationMinutes} mins)
                  </option>
                ))}
              </select>
            </div>

            {/* Step 2: Choose Barber */}
            <div>
              <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                2. Choose Craftsman
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedBarberId('any')}
                  className={`p-2.5 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                    selectedBarberId === 'any'
                      ? 'bg-amber-500/15 border-amber-500 text-white font-bold'
                      : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                  }`}
                >
                  <p className="font-semibold truncate">Any Available</p>
                  <p className="text-[10px] text-amber-400 mt-0.5">Fastest Chair</p>
                </button>

                {BARBERS.map((barber) => (
                  <button
                    key={barber.id}
                    type="button"
                    onClick={() => setSelectedBarberId(barber.id)}
                    className={`p-2.5 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                      selectedBarberId === barber.id
                        ? 'bg-amber-500/15 border-amber-500 text-white font-bold'
                        : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                  >
                    <p className="font-semibold truncate">{barber.name}</p>
                    <p className="text-[10px] text-amber-400 mt-0.5 truncate">{barber.role}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                  3. Select Date
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-3 gap-1.5 max-h-32 overflow-y-auto pr-1">
                  {availableDates.map((d) => (
                    <button
                      key={d.isoDate}
                      type="button"
                      onClick={() => setSelectedDate(d.isoDate)}
                      className={`p-2 rounded-lg text-center border text-xs cursor-pointer transition-all ${
                        selectedDate === d.isoDate
                          ? 'bg-amber-500 text-black font-bold border-amber-500 shadow-sm'
                          : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                      }`}
                    >
                      <p className="font-bold">{d.dayName}</p>
                      <p className="text-[10px] opacity-80">{d.fullDate.split(',')[0]}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                  4. Select Time Slot
                </label>
                <div className="grid grid-cols-2 gap-1.5 max-h-32 overflow-y-auto pr-1">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTimeSlot(slot)}
                      className={`p-2 rounded-lg text-center border text-xs cursor-pointer font-mono tabular-nums transition-all ${
                        selectedTimeSlot === slot
                          ? 'bg-amber-500 text-black font-bold border-amber-500 shadow-sm'
                          : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 4: Client Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-neutral-800">
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Your Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. Samuel Adeleke"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  WhatsApp Phone Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="e.g. 0812 345 6789"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-sm text-white focus:outline-none focus:border-amber-500 font-mono"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">
                Haircut Notes / Specific Style Requests (Optional)
              </label>
              <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g. Low drop fade with crisp line-up, light beard dye, sensitive skin"
                className="w-full px-3.5 py-2 rounded-xl bg-neutral-900 border border-neutral-700 text-xs text-white focus:outline-none focus:border-amber-500"
              />
            </div>

            {/* Price Summary & Submit CTA */}
            <div className="p-4 rounded-xl bg-neutral-950 border border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-neutral-400 block">Total Due at Salon</span>
                <span className="text-2xl font-extrabold text-amber-400 font-mono tabular-nums">
                  {formatNaira(currentService.price)}
                </span>
                <span className="text-xs text-neutral-400 ml-2">({currentService.durationMinutes} mins)</span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto py-3 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-98 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm on WhatsApp ({SALON_INFO.whatsappNumber})</span>
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
};
