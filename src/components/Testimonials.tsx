import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, CheckCircle, Plus, MessageSquare, ThumbsUp } from 'lucide-react';
import { TESTIMONIALS } from '../data/salonData';
import { Testimonial } from '../types';

export const Testimonials: React.FC = () => {
  const [reviews, setReviews] = useState<Testimonial[]>(TESTIMONIALS);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [authorName, setAuthorName] = useState('');
  const [location, setLocation] = useState('');
  const [serviceUsed, setServiceUsed] = useState('Skin Fade & Razor Line-Up');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !comment.trim()) return;

    const newRev: Testimonial = {
      id: 'user-rev-' + Date.now(),
      author: authorName.trim(),
      location: location.trim() || 'Sagamu',
      rating,
      date: 'Today',
      comment: comment.trim(),
      verified: true,
      serviceUsed
    };

    setReviews([newRev, ...reviews]);
    setSubmitted(true);
    setTimeout(() => {
      setShowReviewForm(false);
      setSubmitted(false);
      setAuthorName('');
      setComment('');
      setLocation('');
    }, 1800);
  };

  return (
    <section id="testimonials" className="py-20 bg-[#090a0d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-3">
              <span>Client Voices</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Sagamu & Ogun State</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display">
              Loved by Gentlemen Across Town
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-lg">
              Read verified testimonials from regular patrons, university students, and busy professionals who trust Yusluk Barbing Salon.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 border border-neutral-800">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-white font-mono tabular-nums">4.9 / 5.0</span>
            </div>

            <button
              onClick={() => setShowReviewForm(!showReviewForm)}
              className="px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 cursor-pointer border border-neutral-700"
            >
              <Plus className="w-4 h-4 text-amber-400" />
              <span>Leave a Review</span>
            </button>
          </div>
        </div>

        {/* Review Form Drawer / Modal */}
        <AnimatePresence>
          {showReviewForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden mb-10"
            >
              <form
                onSubmit={handleSubmitReview}
                className="p-6 rounded-2xl bg-neutral-900/90 border border-amber-500/30 max-w-2xl mx-auto space-y-4 shadow-xl"
              >
                <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                  <h3 className="text-base font-bold text-white">Share Your Experience at Yusluk</h3>
                  <button
                    type="button"
                    onClick={() => setShowReviewForm(false)}
                    className="text-xs text-neutral-400 hover:text-white"
                  >
                    Cancel
                  </button>
                </div>

                {submitted ? (
                  <div className="py-8 text-center space-y-2">
                    <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
                    <h4 className="text-base font-bold text-white">Thank You for Your Feedback!</h4>
                    <p className="text-xs text-neutral-400">Your review is now live on our site.</p>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-neutral-300 mb-1">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          value={authorName}
                          onChange={(e) => setAuthorName(e.target.value)}
                          placeholder="e.g. Babatunde Ogunlesi"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-sm text-white focus:outline-none focus:border-amber-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-neutral-300 mb-1">Area / Neighborhood</label>
                        <input
                          type="text"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          placeholder="e.g. GRA, Sagamu"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-sm text-white focus:outline-none focus:border-amber-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-neutral-300 mb-1">Service Received</label>
                        <select
                          value={serviceUsed}
                          onChange={(e) => setServiceUsed(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-sm text-white focus:outline-none focus:border-amber-500"
                        >
                          <option value="Skin Fade & Razor Line-Up">Skin Fade & Razor Line-Up</option>
                          <option value="Classic Gentleman's Cut">Classic Gentleman's Cut</option>
                          <option value="Beard Sculpting & Hot Towel">Beard Sculpting & Hot Towel</option>
                          <option value="Dreadlocks Relocking & Styling">Dreadlocks Relocking & Styling</option>
                          <option value="Trendy Blonde / Honey Hair Tint">Trendy Blonde / Honey Hair Tint</option>
                          <option value="Presidential VIP Full Grooming">Presidential VIP Full Grooming</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-neutral-300 mb-1">Rating</label>
                        <div className="flex items-center gap-2 py-2">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <button
                              key={s}
                              type="button"
                              onClick={() => setRating(s)}
                              className="focus:outline-none cursor-pointer"
                            >
                              <Star
                                className={`w-6 h-6 ${
                                  s <= rating
                                    ? 'text-amber-400 fill-amber-400'
                                    : 'text-neutral-700'
                                }`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">Review Comments *</label>
                      <textarea
                        required
                        rows={3}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Tell others about the cut quality, clippers hygiene, barber hospitality, and punctuality..."
                        className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-sm text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div className="flex justify-end pt-2">
                      <button
                        type="submit"
                        className="px-5 py-2.5 rounded-xl bg-amber-500 text-black font-bold text-xs sm:text-sm hover:bg-amber-400 transition-colors shadow-md shadow-amber-500/20 cursor-pointer"
                      >
                        Publish Review
                      </button>
                    </div>
                  </>
                )}
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 flex flex-col justify-between hover:border-neutral-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-neutral-500">{rev.date}</span>
                </div>

                <p className="text-neutral-200 text-sm leading-relaxed mb-6">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-semibold text-white">{rev.author}</h4>
                    {rev.verified && (
                      <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                        <CheckCircle className="w-3 h-3" />
                        <span>Verified Client</span>
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-400 mt-0.5">
                    <span>{rev.location}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-amber-400/90">{rev.serviceUsed}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
