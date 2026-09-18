import React from 'react';
import { Heart, Activity, Shield, CheckCircle2, Microscope, Home, Sparkles, ShoppingBag } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: Activity,
      title: 'In-House Ultrasonography & Diagnostics',
      desc: 'Equipped with modern sonography and diagnostic imaging tools to diagnose internal health issues promptly without delay in Sargodha.',
    },
    {
      icon: Shield,
      title: '24/7 Emergency Responsiveness',
      desc: 'Medical emergencies do not wait for business hours. Our dedicated team maintains round-the-clock emergency care for acute trauma and critical pet illnesses.',
    },
    {
      icon: ShoppingBag,
      title: 'In-Hospital Pet Shop & Authentic Food',
      desc: '100% genuine imported pet nutrition (Royal Canin, Reflex, Fluffy), prescription diets, vitamins, grooming tools, and accessories.',
    },
    {
      icon: Heart,
      title: 'Gentle, Low-Stress Animal Handling',
      desc: 'We prioritize patience, gentle soothing techniques, and fear-free handling for cats and dogs during consultations and procedures.',
    },
    {
      icon: Microscope,
      title: 'Rapid Microscopic Pathology',
      desc: 'Immediate skin scraping, fecal testing, cytology, and parasite screening performed right at the clinic for prompt and targeted treatment.',
    },
    {
      icon: CheckCircle2,
      title: 'Certified Vaccination & Deworming',
      desc: 'Protecting your pets against prevalent contagious viral diseases with cold-chain certified immunizations and structured wellness schedules.',
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-20 bg-[#F1F5F9] border-y border-[#CBD5E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFF6FF] text-[#134074] border border-[#BFDBFE] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>Dedicated Clinical Excellence</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2545] mb-4">
            Why Pet Families Trust Asjad Veterinary Hospital
          </h2>
          <p className="text-[#475569] text-base sm:text-lg leading-relaxed">
            We blend modern veterinary medicine with compassionate patient care and an authentic pet shop to serve pet parents throughout Sargodha.
          </p>
        </div>

        {/* 6 Structured Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all duration-300 border border-[#E2E8F0] flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] text-[#0284C7] group-hover:bg-[#134074] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-5 border border-[#BFDBFE]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#0B2545] mb-3 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F1F5F9] flex items-center text-xs font-semibold text-[#134074]">
                  <span className="w-2 h-2 rounded-full bg-sky-500 mr-2" />
                  <span>Clinical Standard of Care</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
