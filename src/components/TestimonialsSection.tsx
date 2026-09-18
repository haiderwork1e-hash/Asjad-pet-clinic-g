import React, { useState } from 'react';
import { Star, MessageSquarePlus, CheckCircle, Sparkles, X, Heart } from 'lucide-react';
import { INITIAL_REVIEWS, ReviewItem, HOSPITAL_INFO } from '../data/hospitalData';

export const TestimonialsSection: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewItem[]>(INITIAL_REVIEWS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedToast, setSubmittedToast] = useState(false);

  // Form state for new review
  const [author, setAuthor] = useState('');
  const [petType, setPetType] = useState('');
  const [rating, setRating] = useState(5);
  const [serviceUsed, setServiceUsed] = useState('General Consultation');
  const [comment, setComment] = useState('');

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !comment.trim()) return;

    const newReview: ReviewItem = {
      id: `rev-${Date.now()}`,
      author: author.trim(),
      petType: petType.trim() || 'Pet Owner',
      rating,
      date: 'Just now',
      comment: comment.trim(),
      serviceUsed,
    };

    setReviews([newReview, ...reviews]);
    setIsModalOpen(false);
    setAuthor('');
    setPetType('');
    setComment('');
    setSubmittedToast(true);
    setTimeout(() => setSubmittedToast(false), 5000);
  };

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFF6FF] text-[#134074] border border-[#BFDBFE] text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>Pet Parent Community</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B2545] leading-tight">
              Words From Pet Families in Sargodha
            </h2>
            <p className="mt-3 text-[#475569] text-base sm:text-lg">
              Read verified feedback from pet owners across Cantt View and Sargodha, or share your recent experience with our clinic and pet shop.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="px-5 py-3 rounded-xl bg-[#134074] hover:bg-[#0B2545] text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-sm transition-all shrink-0 w-fit"
          >
            <MessageSquarePlus className="w-4 h-4 text-sky-300" />
            <span>Share Your Experience</span>
          </button>
        </div>

        {/* Toast confirmation */}
        {submittedToast && (
          <div className="mb-8 p-4 rounded-xl bg-blue-50 border border-blue-200 text-[#0B2545] flex items-center gap-3 animate-fade-in">
            <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
            <p className="text-sm font-medium">
              Thank you for your review! Your feedback has been added to our community testimonials.
            </p>
          </div>
        )}

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-[#E2E8F0] flex flex-col justify-between hover:shadow-md hover:border-[#134074]/30 transition-all duration-300"
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < rev.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-200'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-xs font-bold text-[#0B2545]">
                    {rev.rating}.0
                  </span>
                </div>

                {/* Comment */}
                <p className="text-sm text-[#334155] leading-relaxed italic mb-6">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#F1F5F9] flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#0B2545]">
                    {rev.author}
                  </h4>
                  <p className="text-xs text-[#64748B]">{rev.petType}</p>
                </div>

                <span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-[#EFF6FF] text-[#134074] border border-[#BFDBFE]">
                  {rev.serviceUsed}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Google Maps link reminder */}
        <div className="mt-10 text-center">
          <a
            href={HOSPITAL_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#134074] hover:text-[#0284C7] transition-colors"
          >
            <span>Read more reviews and check our verified 5.0★ profile on Google Maps</span>
            <span>&rarr;</span>
          </a>
        </div>

      </div>

      {/* Review Submission Modal */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E2E8F0] relative animate-fade-in cursor-default"
          >
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-[#64748B] hover:bg-[#F1F5F9] transition-colors"
              aria-label="Close review modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0284C7] uppercase tracking-wider mb-1">
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                <span>Asjad Veterinary Hospital & Pet Shop</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#0B2545]">
                Share Your Experience
              </h3>
              <p className="text-xs text-[#64748B] mt-1">
                Your feedback helps fellow pet owners in Sargodha find trustworthy care and authentic supplies.
              </p>
            </div>

            <form onSubmit={handleSubmitReview} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#1E293B] mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="e.g. Usman Khan"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-sm focus:outline-none focus:ring-2 focus:ring-[#134074]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#1E293B] mb-1">
                    Pet Type
                  </label>
                  <input
                    type="text"
                    value={petType}
                    onChange={(e) => setPetType(e.target.value)}
                    placeholder="e.g. Cat Parent, Dog Owner"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-sm focus:outline-none focus:ring-2 focus:ring-[#134074]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1E293B] mb-1">
                    Rating
                  </label>
                  <select
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-sm focus:outline-none focus:ring-2 focus:ring-[#134074]"
                  >
                    <option value={5}>5 Stars - Excellent</option>
                    <option value={4}>4 Stars - Very Good</option>
                    <option value={3}>3 Stars - Good</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1E293B] mb-1">
                  Service Received
                </label>
                <select
                  value={serviceUsed}
                  onChange={(e) => setServiceUsed(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-sm focus:outline-none focus:ring-2 focus:ring-[#134074]"
                >
                  <option value="General Consultation">General Consultation</option>
                  <option value="Diagnostic Ultrasonography">Diagnostic Ultrasonography</option>
                  <option value="Emergency Care">Emergency Care</option>
                  <option value="Pet Vaccination">Pet Vaccination</option>
                  <option value="Pet Shop & Food">Pet Shop & Food Supplies</option>
                  <option value="Grooming & Bathing">Grooming & Bathing</option>
                  <option value="Veterinary Surgery">Veterinary Surgery</option>
                  <option value="Pet Boarding">Pet Boarding</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1E293B] mb-1">
                  Your Comments *
                </label>
                <textarea
                  required
                  rows={3}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="How was your pet's visit? What did you appreciate about the hospital?"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-sm focus:outline-none focus:ring-2 focus:ring-[#134074]"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-[#64748B] hover:bg-[#F1F5F9]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#134074] hover:bg-[#0B2545] text-white text-xs font-semibold shadow-sm transition-colors"
                >
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
