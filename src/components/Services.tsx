import React, { useState } from 'react';
import {
  Stethoscope,
  Activity,
  Eye,
  Microscope,
  Shield,
  Syringe,
  Home,
  Heart,
  Check,
  Calendar,
  MessageSquare,
  ChevronRight,
  Sparkles,
  ShoppingBag,
  Scissors,
  Phone,
} from 'lucide-react';
import { SERVICES_LIST, ServiceItem, HOSPITAL_INFO } from '../data/hospitalData';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const getIcon = (name: string) => {
    switch (name) {
      case 'Stethoscope':
        return Stethoscope;
      case 'Activity':
        return Activity;
      case 'Eye':
        return Eye;
      case 'Microscope':
        return Microscope;
      case 'Shield':
        return Shield;
      case 'Syringe':
        return Syringe;
      case 'Home':
        return Home;
      case 'ShoppingBag':
        return ShoppingBag;
      case 'Scissors':
        return Scissors;
      default:
        return Heart;
    }
  };

  const filteredServices =
    activeFilter === 'all'
      ? SERVICES_LIST
      : activeFilter === 'emergency'
      ? SERVICES_LIST.filter((s) => s.id === 'emergency')
      : activeFilter === 'diagnostics'
      ? SERVICES_LIST.filter((s) => s.id === 'ultrasonography' || s.id === 'pathology')
      : activeFilter === 'shop'
      ? SERVICES_LIST.filter((s) => s.id === 'pet-shop' || s.id === 'grooming')
      : SERVICES_LIST.filter((s) => s.id !== 'ultrasonography' && s.id !== 'pathology' && s.id !== 'emergency');

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFF6FF] text-[#134074] border border-[#BFDBFE] text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>Full Medical & Pet Care Range</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B2545] leading-tight">
              Veterinary Services, Pet Shop & Grooming
            </h2>
            <p className="mt-3 text-[#475569] text-base sm:text-lg">
              From routine clinical checkups and diagnostic ultrasound to our authentic pet food shop, in-house pharmacy, and 24/7 emergency care.
            </p>
          </div>

          {/* Service quick filter pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'diagnostics', label: 'Diagnostics & Ultrasound' },
              { id: 'emergency', label: 'Emergency 24/7' },
              { id: 'shop', label: 'Pet Shop & Grooming' },
              { id: 'clinical', label: 'Wellness & Surgery' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeFilter === tab.id
                    ? 'bg-[#134074] text-white shadow-sm'
                    : 'bg-white text-[#475569] hover:bg-[#F1F5F9] border border-[#CBD5E1]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service: ServiceItem) => {
            const Icon = getIcon(service.iconName);
            const isEmergency = service.id === 'emergency';

            return (
              <div
                key={service.id}
                className={`rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group relative ${
                  isEmergency
                    ? 'bg-gradient-to-b from-[#EFF6FF] to-[#DBEAFE]/60 border-2 border-[#1D4ED8]/60 shadow-sm'
                    : 'bg-white border border-[#E2E8F0] hover:border-[#134074]/50 hover:shadow-lg'
                }`}
              >
                <div>
                  {/* Top Header inside card */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                        isEmergency
                          ? 'bg-[#134074] text-white'
                          : 'bg-[#EFF6FF] text-[#0284C7] group-hover:bg-[#134074] group-hover:text-white'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    {service.badge && (
                      <span
                        className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                          isEmergency
                            ? 'bg-red-100 text-red-700 border border-red-200'
                            : 'bg-[#EFF6FF] text-[#134074] border border-[#BFDBFE]'
                        }`}
                      >
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="font-serif text-xl font-bold text-[#0B2545] mb-2 leading-snug">
                    {service.name}
                  </h3>
                  <p className="text-sm text-[#475569] mb-5 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Inclusions List */}
                  <div className="space-y-2 mb-6 pt-3 border-t border-[#F1F5F9]">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#0284C7]">
                      Service Highlights:
                    </p>
                    {service.inclusions.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#334155]">
                        <Check className="w-3.5 h-3.5 text-[#0284C7] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-[#F1F5F9] flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onSelectService(service.name)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-[#134074] hover:bg-[#0B2545] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-xs border border-[#1D4ED8]/30"
                  >
                    <Calendar className="w-3.5 h-3.5 text-sky-300" />
                    <span>Book Service</span>
                  </button>

                  <a
                    href={`https://wa.me/${HOSPITAL_INFO.whatsappNumber}?text=Hello%20Asjad%20Veterinary%20Hospital,%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(
                      service.name
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 transition-colors border border-emerald-200"
                    title="Inquire via WhatsApp"
                    aria-label={`Inquire about ${service.name} on WhatsApp`}
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Emergency Notice Banner */}
        <div className="mt-12 bg-[#0B2545] rounded-2xl p-6 sm:p-8 text-white shadow-xl border border-[#1E3A8A] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <Activity className="w-6 h-6 animate-pulse text-red-400" />
            </div>
            <div>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
                Does Your Pet Require Immediate Emergency Care?
              </h4>
              <p className="text-sm text-sky-100/90 mt-1 max-w-2xl">
                Do not hesitate. Our team prioritizes severe trauma, poisoning, urinary blockage, respiratory distress, and sudden collapse 24/7 in Sargodha.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href={`tel:${HOSPITAL_INFO.phones[0].raw}`}
              className="flex-1 md:flex-none px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 active:scale-98 text-white font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>Emergency: {HOSPITAL_INFO.phones[0].display}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
