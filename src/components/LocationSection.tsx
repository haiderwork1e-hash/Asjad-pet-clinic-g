import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageSquare,
  Navigation,
  Clock,
  CheckCircle,
  Copy,
  ExternalLink,
  Shield,
  Sparkles,
} from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    try {
      if (navigator?.clipboard?.writeText) {
        navigator.clipboard.writeText(HOSPITAL_INFO.address).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 3000);
        }).catch(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 3000);
        });
      } else {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      }
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <section id="location" className="py-16 sm:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFF6FF] text-[#134074] border border-[#BFDBFE] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>Finding Us</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B2545] mb-4">
            Hospital Location & Direct Contact
          </h2>
          <p className="text-[#475569] text-base sm:text-lg">
            Conveniently situated on Link Road opposite C Block in Cantt View, Sargodha. Easy parking for clinical visits, shopping, or 24/7 emergencies.
          </p>
        </div>

        {/* 2-Column Layout: Details on left, Map on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Verified Contact & Address Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Address Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-[#E2E8F0]">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#EFF6FF] text-[#0284C7] flex items-center justify-center shrink-0 border border-[#BFDBFE]">
                    <MapPin className="w-6 h-6 text-[#0284C7]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#0B2545]">
                      Hospital & Pet Shop Address
                    </h3>
                    <span className="text-[11px] font-semibold text-[#0284C7] uppercase tracking-wider">
                      Cantt View, Sargodha
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="p-2 rounded-lg text-[#64748B] hover:text-[#134074] hover:bg-[#F1F5F9] transition-colors text-xs flex items-center gap-1 border border-[#E2E8F0]"
                  title="Copy full address"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              <p className="text-sm sm:text-base font-medium text-[#1E293B] leading-relaxed mb-5">
                {HOSPITAL_INFO.address}
              </p>

              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={HOSPITAL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-[#134074] hover:bg-[#0B2545] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <Navigation className="w-4 h-4 text-sky-300" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Verified Phone & Emergency Hotline Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-[#E2E8F0]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-[#EFF6FF] text-[#134074] flex items-center justify-center shrink-0 border border-[#BFDBFE]">
                  <Phone className="w-5 h-5 text-[#134074]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#0B2545]">
                    Direct Phone Numbers
                  </h3>
                  <span className="text-[11px] font-semibold text-[#0284C7]">
                    24/7 Helpline & Consultations
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                {HOSPITAL_INFO.phones.map((phone, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between"
                  >
                    <div>
                      <p className="text-[11px] text-[#64748B] uppercase font-bold tracking-wider">
                        {phone.label}
                      </p>
                      <p className="text-sm sm:text-base font-bold text-[#0B2545]">
                        {phone.display}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={`tel:${phone.raw}`}
                        className="p-2 px-3 rounded-lg bg-[#134074] hover:bg-[#0B2545] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
                        title={`Call ${phone.display}`}
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp instant chat button */}
              <a
                href={`https://wa.me/${HOSPITAL_INFO.whatsappNumber}?text=Hello%20Asjad%20Veterinary%20Hospital,%20I%20would%20like%20to%20inquire%20about%20veterinary%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Instantly on WhatsApp</span>
              </a>
            </div>

            {/* Arrival Notice Pill */}
            <div className="bg-[#EFF6FF] rounded-xl p-4 border border-[#BFDBFE] text-xs text-[#334155]">
              <p className="font-bold text-[#0B2545] mb-1">
                Visiting with Your Pet:
              </p>
              <p>
                For the comfort and safety of all animals, please bring dogs on a secure leash and cats inside a well-ventilated carrier.
              </p>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Canvas / Frame */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#E2E8F0] flex-1 flex flex-col min-h-[420px]">
              
              {/* Map Canvas Header */}
              <div className="p-4 bg-[#0B2545] text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-sky-400" />
                  <span className="font-serif text-sm font-bold text-white">
                    Asjad Veterinary Hospital & Pet Shop Map
                  </span>
                </div>

                <a
                  href={HOSPITAL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-sky-300 hover:text-white flex items-center gap-1 font-medium"
                >
                  <span>Open Full Screen</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Embedded Interactive Map */}
              <div className="relative flex-1 w-full bg-[#E2E8F0]">
                <iframe
                  title="Asjad Veterinary Hospital Location Map"
                  src="https://maps.google.com/maps?q=32.0836,72.6711&z=15&output=embed"
                  className="w-full h-full min-h-[380px] border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Overlaid Location Card */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-white/80 shadow-md">
                  <p className="font-serif text-xs font-bold text-[#0B2545]">
                    Asjad Veterinary Hospital & Pet Shop
                  </p>
                  <p className="text-[11px] text-[#64748B] mt-0.5">
                    47 Link Rd, Opp C Block, Cantt View, Sargodha
                  </p>
                  <a
                    href={HOSPITAL_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-[11px] font-bold text-[#0284C7] flex items-center gap-1 hover:underline"
                  >
                    <Navigation className="w-3 h-3 text-[#0284C7]" />
                    <span>Start Navigation</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
