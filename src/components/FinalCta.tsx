import React from 'react';
import { Calendar, Navigation, Heart, Phone, MessageSquare, Sparkles, ShoppingBag } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

interface FinalCtaProps {
  onOpenBooking: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#0B2545] text-white relative overflow-hidden">
      {/* Subtle organic ambient lights */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#134074] rounded-full blur-3xl opacity-40 pointer-events-none -z-1" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0284C7] rounded-full blur-3xl opacity-20 pointer-events-none -z-1" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Emblem Badge */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 text-sky-400 border border-white/20 mb-6 shadow-md">
          <Heart className="w-7 h-7 fill-sky-400" />
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-sky-200 text-xs font-semibold uppercase tracking-wider mb-4 border border-white/15">
          <Sparkles className="w-3.5 h-3.5 text-sky-400" />
          <span>Compassionate Veterinary Excellence & Pet Shop</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6 max-w-3xl mx-auto">
          Your Beloved Companion Deserves Exceptional, Gentle Care.
        </h2>

        <p className="text-blue-100/90 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          Whether you need an immediate diagnostic ultrasound, genuine pet nutrition & supplies, professional grooming, or 24/7 urgent medical intervention, Asjad Veterinary Hospital & Pet Shop in Sargodha is prepared to serve.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-10">
          <button
            type="button"
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
          >
            <Calendar className="w-5 h-5 text-white" />
            <span>Book an Appointment</span>
          </button>

          <a
            href={HOSPITAL_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base border border-white/20 backdrop-blur-xs transition-all flex items-center justify-center gap-2"
          >
            <Navigation className="w-5 h-5 text-sky-300" />
            <span>Get Directions</span>
          </a>
        </div>

        {/* Direct emergency telephone reference */}
        <div className="pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-blue-200/90">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-sky-400" />
            <span>Helpline: <strong className="text-white">{HOSPITAL_INFO.phones[0].display}</strong></span>
          </div>
          <span className="hidden sm:inline text-white/30">•</span>
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp: <strong className="text-white">0311 5030752</strong></span>
          </div>
          <span className="hidden sm:inline text-white/30">•</span>
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-sky-400" />
            <span>Pet Shop & Clinic: <strong className="text-white">Opp C Block, Cantt View</strong></span>
          </div>
        </div>

      </div>
    </section>
  );
};
