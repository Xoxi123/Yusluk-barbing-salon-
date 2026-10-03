/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesPricing } from './components/ServicesPricing';
import { StyleGallery } from './components/StyleGallery';
import { AboutOwner } from './components/AboutOwner';
import { Testimonials } from './components/Testimonials';
import { LocationMap } from './components/LocationMap';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { BookingModal } from './components/BookingModal';
import { MyBookingsModal } from './components/MyBookingsModal';
import { AppointmentBooking } from './types';

const STORAGE_KEY = 'yusluk_barbing_bookings';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [myBookingsModalOpen, setMyBookingsModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [bookings, setBookings] = useState<AppointmentBooking[]>([]);

  // Load saved bookings from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setBookings(JSON.parse(saved));
      }
    } catch {
      // Ignore parse errors
    }
  }, []);

  const handleBookingCreated = (newBooking: AppointmentBooking) => {
    const updated = [newBooking, ...bookings];
    setBookings(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // Ignore storage errors
    }
  };

  const handleRemoveBooking = (id: string) => {
    const updated = bookings.filter((b) => b.id !== id);
    setBookings(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // Ignore storage errors
    }
  };

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#090a0d] text-neutral-100 flex flex-col selection:bg-amber-500 selection:text-black">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenMyBookings={() => setMyBookingsModalOpen(true)}
        bookingCount={bookings.length}
      />

      <main className="flex-1 pb-16 md:pb-0">
        {/* Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Services & Modern Pricing with animated buttons */}
        <ServicesPricing onSelectService={(serviceId) => handleOpenBooking(serviceId)} />

        {/* Haircut Styles Gallery */}
        <StyleGallery onBookStyle={(serviceId) => handleOpenBooking(serviceId)} />

        {/* About the Owner & Sanitation Craftsmanship */}
        <AboutOwner />

        {/* Client Testimonials */}
        <Testimonials />

        {/* Location Map & Directions */}
        <LocationMap />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar (capped under 15% viewport height) */}
      <MobileQuickBar onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Online Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preSelectedServiceId={selectedServiceId}
        onBookingCreated={handleBookingCreated}
      />

      {/* My Bookings Modal */}
      <MyBookingsModal
        isOpen={myBookingsModalOpen}
        onClose={() => setMyBookingsModalOpen(false)}
        bookings={bookings}
        onRemoveBooking={handleRemoveBooking}
        onNewBookingClick={() => {
          setMyBookingsModalOpen(false);
          handleOpenBooking();
        }}
      />
    </div>
  );
}
