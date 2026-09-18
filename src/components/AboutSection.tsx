import React from 'react';
import { ShieldCheck, Heart, MapPin, Sparkles, Navigation, Calendar, ShoppingBag } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';
import clinicInteriorImg from '../assets/images/asjad_clinic_hero.webp';

interface AboutProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutProps> = ({ onOpenBooking }) => {
  const commitments = [
    {
      title: 'Animal Welfare First',
      desc: 'Every medical assessment and care decision is guided strictly by the best physical and emotional interest of your pet.',
    },
    {
      title: 'Hygienic & Sterile Protocols',
      desc: 'Rigorous sanitization across our examination tables, ultrasound lab, surgical theater, and boarding rooms.',
    },
    {
      title: 'Genuine Pet Food & Pharmacy',
      desc: 'We stock only 100% genuine pet foods, clinical supplements, imported veterinary medicines, and accessories.',
    },
    {
      title: '24/7 Emergency Availability',
      desc: 'Direct phone lines and prompt response whenever your pet experiences sudden illness or accidental injury.',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Composition */}
          <div className="lg:col-span-6">
            <div className="relative">
              
              {/* Main Image */}
              <div className="rounded-3xl overflow-hidden shadow-xl border border-[#CBD5E1] bg-white p-2">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-[#F1F5F9] relative">
                  <img
                    src={clinicInteriorImg}
                    alt="Clean and hygienic consultation room at Asjad Veterinary Hospital Sargodha"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    width={900}
                    height={675}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/70 shadow-sm flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-[#0B2545]">Asjad Clinical Consultation Room</p>
                      <p className="text-[11px] text-[#64748B]">Sanitary, calm & Fear-Free atmosphere</p>
                    </div>
                    <Heart className="w-4 h-4 text-[#0284C7] fill-[#0284C7]" />
                  </div>
                </div>
              </div>

              {/* Verified Location Card */}
              <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-[#0B2545] text-white p-5 rounded-2xl shadow-xl max-w-xs border border-[#1E3A8A]">
                <div className="flex items-center gap-2 text-xs text-sky-300 font-bold uppercase tracking-wider mb-1.5">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  <span>Sargodha Facility</span>
                </div>
                <p className="text-xs text-sky-100 font-medium leading-snug">
                  47 Link Road, Opposite C Block, Cantt View, Sargodha
                </p>
                <div className="mt-3 pt-2 border-t border-white/15 flex items-center justify-between">
                  <span className="text-[10px] text-sky-200/90">Hospital & Pet Shop</span>
                  <span className="text-[10px] text-red-400 font-bold">24/7 Emergency</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Text Column: Story & Commitments */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFF6FF] text-[#134074] border border-[#BFDBFE] text-xs font-semibold uppercase tracking-wider mb-3 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>About Asjad Hospital</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2545] leading-tight mb-5">
              Built on Compassion, Medical Precision, and Genuine Care.
            </h2>

            <p className="text-sm sm:text-base text-[#334155] leading-relaxed mb-4">
              At <strong className="text-[#0B2545] font-semibold">Asjad Veterinary Hospital & Pet Shop</strong>, we understand that your pets are family. Conveniently located on Link Road opposite C Block Cantt View in Sargodha, our hospital offers complete clinical veterinary diagnostics, surgical care, and a fully stocked pet nutrition and accessory shop.
            </p>

            <p className="text-sm sm:text-base text-[#334155] leading-relaxed mb-8">
              From real-time abdominal ultrasound sonography and accurate lab tests to genuine pet food brands (Royal Canin, Reflex, Fluffy) and professional grooming, our team ensures every visit is comfortable and stress-free.
            </p>

            {/* Commitments Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {commitments.map((c, i) => (
                <div key={i} className="bg-white p-4 rounded-xl border border-[#E2E8F0] shadow-xs">
                  <h4 className="text-sm font-bold text-[#0B2545] flex items-center gap-2 mb-1">
                    <ShieldCheck className="w-4 h-4 text-[#0284C7] shrink-0" />
                    <span>{c.title}</span>
                  </h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-5 py-3 rounded-xl bg-[#134074] hover:bg-[#0B2545] text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-sm transition-all border border-[#1D4ED8]/30"
              >
                <Calendar className="w-4 h-4 text-sky-300" />
                <span>Book Consultation</span>
              </button>

              <a
                href={HOSPITAL_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-white hover:bg-[#F1F5F9] text-[#134074] border border-[#CBD5E1] text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all shadow-xs"
              >
                <Navigation className="w-4 h-4 text-[#0284C7]" />
                <span>Visit Us in Cantt View</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
