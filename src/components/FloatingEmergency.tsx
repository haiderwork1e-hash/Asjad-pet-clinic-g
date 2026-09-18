import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export const FloatingEmergency: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Bottom-Right Quick Action Group */}
      <div className="fixed bottom-5 right-4 sm:right-6 z-40 flex flex-col items-end gap-2.5">
        
        {/* Back to top button */}
        {showScrollTop && (
          <button
            type="button"
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white text-[#134074] shadow-lg border border-[#CBD5E1] hover:bg-[#EFF6FF] transition-all flex items-center justify-center focus:outline-none"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Floating WhatsApp Action */}
        <a
          href={`https://wa.me/${HOSPITAL_INFO.whatsappNumber}?text=Hello%20Asjad%20Veterinary%20Hospital,%20I%20would%20like%20to%20inquire%20about%20veterinary%20care%20and%20pet%20supplies.`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl hover:shadow-2xl transition-all duration-200"
          title="Chat on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 fill-white text-emerald-600" />
          <span className="text-xs font-bold pr-1 hidden sm:inline">WhatsApp</span>
        </a>

        {/* Floating Emergency Call Action */}
        <a
          href={`tel:${HOSPITAL_INFO.phones[0].raw}`}
          className="group flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#0B2545] hover:bg-[#134074] text-white shadow-xl hover:shadow-2xl border border-sky-600/40 transition-all duration-200"
          title="Emergency Call"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
          <Phone className="w-4 h-4 text-sky-400" />
          <span className="text-xs font-bold hidden sm:inline">Emergency 24/7</span>
        </a>

      </div>
    </>
  );
};
