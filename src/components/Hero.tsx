import React from 'react';
import { Calendar, Navigation, Shield, Heart, Activity, CheckCircle2, Phone, Sparkles } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';
import heroImageWebp from '../assets/images/asjad_clinic_hero.webp';
import heroImageJpg from '../assets/images/asjad_clinic_hero.jpg';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="hero" className="relative overflow-hidden pt-6 sm:pt-10 pb-16 sm:pb-24 lg:pb-28">
      {/* Subtle blue architectural ambient glow behind content */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0284C7]/8 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#134074]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Branding, Typography, Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#134074] text-xs sm:text-sm font-semibold mb-5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-pulse" />
              <span>Sargodha's Premier Pet Hospital, Clinic & Pet Shop</span>
            </div>

            {/* Hospital Name & Main Headline */}
            <h2 className="text-xs sm:text-sm font-bold tracking-widest text-[#0284C7] uppercase mb-2">
              Asjad Veterinary Hospital & Pet Shop
            </h2>
            
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#0B2545] leading-[1.18] tracking-tight mb-5">
              Compassionate Care, <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#134074]">Medical Precision</span>, <br className="hidden sm:inline" />
              For The Pets You Cherish.
            </h1>

            {/* Supporting explanatory sentence */}
            <p className="text-base sm:text-lg text-[#334155] font-normal leading-relaxed max-w-2xl mb-8">
              Dedicated to lifelong animal wellness in Sargodha. We provide complete clinical checkups, 
              ultrasound imaging, microscopic tests, soft-tissue surgeries, certified vaccinations, original pet foods, 
              professional grooming, and 24/7 emergency medical support.
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <button
                id="hero-book-cta"
                type="button"
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-xl bg-[#134074] hover:bg-[#0B2545] active:scale-98 text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2.5 border border-[#1D4ED8]/30"
              >
                <Calendar className="w-4 h-4 text-sky-300" />
                <span>Book an Appointment</span>
              </button>

              <a
                id="hero-directions-cta"
                href={HOSPITAL_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-[#F1F5F9] active:scale-98 text-[#134074] font-semibold text-sm sm:text-base shadow-sm hover:shadow transition-all duration-200 flex items-center justify-center gap-2 border border-[#CBD5E1]"
              >
                <Navigation className="w-4 h-4 text-[#0284C7]" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Trust Motto & Core Highlights */}
            <div className="pt-6 border-t border-[#E2E8F0] w-full">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0284C7] mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
                <span>Hospital • In-House Pharmacy • Certified Pet Food Shop • Grooming</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#1E293B]">
                  <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
                  <span>24/7 Emergency</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#1E293B]">
                  <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
                  <span>Ultrasound Lab</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#1E293B]">
                  <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
                  <span>Vaccination Center</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#1E293B]">
                  <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
                  <span>Pet Food Shop</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Refined card frame with subtle border */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#CBD5E1] bg-white p-2">
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] bg-[#F1F5F9]">
                  <picture>
                    <source srcSet={heroImageWebp} type="image/webp" />
                    <img
                      src={heroImageJpg}
                      alt="Doctor examining a happy pet inside Asjad Veterinary Hospital Sargodha"
                      width={1376}
                      height={768}
                      className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                      loading="eager"
                      decoding="async"
                      fetchPriority="high"
                    />
                  </picture>
                  {/* Subtle soft gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  {/* On-image caption badge */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-white/60 shadow-md flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-[#0B2545]">Asjad Veterinary Clinic & Hospital</p>
                      <p className="text-[11px] text-[#475569]">47 Link Road, Opp C Block, Sargodha</p>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-[#EFF6FF] flex items-center justify-center text-[#0284C7]">
                      <Heart className="w-3.5 h-3.5 fill-[#0284C7]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Emergency Badge */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-[#0B2545] text-white px-4 py-2.5 rounded-xl shadow-lg border border-[#1E3A8A] flex items-center gap-2.5 animate-bounce-slow">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                <div className="text-left">
                  <p className="text-[10px] text-sky-300 font-bold uppercase tracking-wider">Emergency Line</p>
                  <p className="text-xs font-bold text-white">{HOSPITAL_INFO.phones[0].display}</p>
                </div>
              </div>

              {/* Floating Quality Pill */}
              <div className="absolute -bottom-4 -left-2 sm:-left-4 bg-white text-[#1E293B] px-4 py-2.5 rounded-xl shadow-lg border border-[#E2E8F0] flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] flex items-center justify-center text-[#0284C7]">
                  <Shield className="w-4 h-4 text-[#134074]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0B2545]">Trusted in Sargodha</p>
                  <p className="text-[10px] text-[#64748B]">Cantt View • Link Road</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
