import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, Heart, Shield, Navigation } from 'lucide-react';
import { HOSPITAL_INFO, SERVICES_LIST } from '../data/hospitalData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Veterinary Services', href: '#services' },
    { name: 'Pet Shop & Pharmacy', href: '#services' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Patient Experience', href: '#experience' },
    { name: 'About Hospital', href: '#about' },
    { name: 'Facility Gallery', href: '#gallery' },
    { name: 'Community Reviews', href: '#reviews' },
    { name: 'Frequently Asked Questions', href: '#faq' },
    { name: 'Location & Map', href: '#location' },
  ];

  return (
    <footer className="bg-[#07162C] text-[#E2E8F0] pt-16 pb-12 border-t border-[#1E3A8A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#134074] flex items-center justify-center text-white border border-[#1D4ED8]/40 shadow-sm">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="1.75" />
                  <path d="M12 8v8m-4-4h8" strokeLinecap="round" strokeWidth="2.2" stroke="#38BDF8" />
                </svg>
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight text-white block">
                  ASJAD
                </span>
                <span className="text-[10px] font-bold tracking-widest text-sky-400 uppercase block">
                  Veterinary Hospital & Pet Shop
                </span>
              </div>
            </div>

            <p className="text-sm text-sky-100/80 leading-relaxed max-w-md mb-6">
              A trusted veterinary medical center in Sargodha offering compassionate clinical examinations, in-house diagnostic sonography, genuine imported pet food, grooming, and 24/7 emergency response.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-4 py-2 rounded-xl bg-[#134074] hover:bg-[#1D4ED8] text-white text-xs font-semibold border border-[#1D4ED8]/50 transition-colors shadow-sm"
              >
                Book Appointment
              </button>

              <a
                href={HOSPITAL_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/15 transition-colors flex items-center gap-1.5"
              >
                <Navigation className="w-3 h-3 text-sky-400" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4">
              Quick Navigation
            </h3>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sky-100/70 hover:text-white hover:underline transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Contact & Hospital Location */}
          <div className="lg:col-span-4">
            <h3 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4">
              Hospital Contact & Location
            </h3>

            <div className="space-y-3.5 text-xs text-sky-100/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{HOSPITAL_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <div className="flex items-center gap-2">
                  <a href={`tel:${HOSPITAL_INFO.phones[0].raw}`} className="hover:text-white font-semibold">
                    {HOSPITAL_INFO.phones[0].display}
                  </a>
                  <span>/</span>
                  <a href={`tel:${HOSPITAL_INFO.phones[1].raw}`} className="hover:text-white font-semibold">
                    {HOSPITAL_INFO.phones[1].display}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${HOSPITAL_INFO.whatsappNumber}?text=Hello%20Asjad%20Veterinary%20Hospital`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white font-semibold text-emerald-300"
                >
                  WhatsApp: 0311 5030752
                </a>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="font-medium text-sky-200">
                  {HOSPITAL_INFO.hours}
                </span>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/10 text-[11px] text-sky-100/90">
                <strong className="text-white block mb-0.5">Emergency Triage Notice:</strong>
                If your pet has sustained severe physical trauma, poisoning, or urinary blockage, call immediately so emergency medical equipment can be prepped.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Medical Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sky-200/60">
          <p>
            &copy; {new Date().getFullYear()} Asjad Veterinary Hospital & Pet Shop. All rights reserved.
          </p>

          <p className="text-center sm:text-right text-[11px]">
            47 Link Road, Opposite C Block, Cantt View, Sargodha • Grounded in Compassion & Trust
          </p>
        </div>

      </div>
    </footer>
  );
};
