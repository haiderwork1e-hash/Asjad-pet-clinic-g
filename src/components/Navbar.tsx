import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Menu, X, Calendar, MessageSquare, Shield } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Experience', href: '#experience' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Location', href: '#location' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Notification / Emergency Bar */}
      <div className="bg-[#0B2545] text-[#F0F9FF] text-xs py-2 px-4 border-b border-[#1E3A8A]/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="font-semibold text-white">24/7 Emergency Hospital & Pet Shop</span>
            </span>
            <span className="hidden sm:inline text-sky-300/40">•</span>
            <span className="hidden sm:flex items-center gap-1 text-sky-100/90">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              Cantt View, Sargodha
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={`tel:${HOSPITAL_INFO.phones[0].raw}`}
              className="flex items-center gap-1 text-sky-200 hover:text-white transition-colors font-semibold"
              title="Call Asjad Veterinary Hospital"
            >
              <Phone className="w-3 h-3 text-sky-400" />
              {HOSPITAL_INFO.phones[0].display}
            </a>
            <span className="text-sky-300/40 hidden md:inline">•</span>
            <a
              href={`https://wa.me/${HOSPITAL_INFO.whatsappNumber}?text=Hello%20Asjad%20Veterinary%20Hospital,%20I%20would%20like%20to%20inquire%20about%20veterinary%20care%20or%20pet%20supplies.`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1 text-emerald-300 hover:text-emerald-100 transition-colors font-semibold"
            >
              <MessageSquare className="w-3 h-3 text-emerald-400" />
              WhatsApp Support
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-[#E2E8F0] py-3'
            : 'bg-white border-b border-[#E2E8F0] py-4'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#hero');
            }}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#134074] rounded-lg p-1"
            aria-label="Asjad Veterinary Hospital & Pet Shop Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#134074] to-[#0B2545] flex items-center justify-center text-white shadow-sm border border-[#1D4ED8]/40 group-hover:scale-105 transition-transform duration-200">
              {/* Refined Medical Shield & Cross */}
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="1.75" />
                <path d="M12 8v8m-4-4h8" strokeLinecap="round" strokeWidth="2.2" stroke="#38BDF8" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#0B2545] leading-tight group-hover:text-[#134074] transition-colors">
                ASJAD
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-[#0284C7] uppercase leading-none">
                Hospital & Pet Shop
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-sm font-medium text-[#334155] hover:text-[#134074] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#134074] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${HOSPITAL_INFO.phones[0].raw}`}
              className="px-3.5 py-2 rounded-lg text-xs font-semibold text-[#134074] bg-[#EFF6FF] hover:bg-[#DBEAFE] transition-all border border-[#BFDBFE] flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#0284C7]" />
              Call Hospital
            </a>

            <button
              id="nav-book-btn"
              type="button"
              onClick={() => onOpenBooking()}
              className="px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold text-white bg-[#134074] hover:bg-[#0B2545] active:scale-98 transition-all shadow-sm hover:shadow flex items-center gap-2 border border-[#1D4ED8]/40"
            >
              <Calendar className="w-4 h-4 text-sky-300" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => onOpenBooking()}
              className="sm:hidden px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#134074] hover:bg-[#0B2545] transition-all flex items-center gap-1"
              aria-label="Book appointment"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book
            </button>

            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#134074] hover:bg-[#EFF6FF] focus:outline-none focus:ring-2 focus:ring-[#134074]"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[96px] z-40 bg-black/40 backdrop-blur-sm animate-fade-in">
            <div className="bg-white border-b border-[#E2E8F0] px-6 py-6 max-h-[85vh] overflow-y-auto shadow-xl flex flex-col justify-between">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-wider text-[#0284C7] font-bold pb-1 border-b border-[#E2E8F0]">
                  Navigation Menu
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.href);
                      }}
                      className="block px-3 py-2.5 rounded-lg text-sm font-medium text-[#334155] hover:bg-[#EFF6FF] hover:text-[#134074] transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-[#E2E8F0] space-y-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 rounded-lg text-sm font-semibold text-white bg-[#134074] hover:bg-[#0B2545] shadow flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-sky-300" />
                  Book an Appointment
                </button>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={`tel:${HOSPITAL_INFO.phones[0].raw}`}
                    className="py-2.5 px-3 rounded-lg text-xs font-semibold text-[#134074] bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Call Primary
                  </a>
                  <a
                    href={`https://wa.me/${HOSPITAL_INFO.whatsappNumber}?text=Hello%20Asjad%20Veterinary%20Hospital`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-lg text-xs font-semibold text-emerald-800 bg-emerald-100/80 border border-emerald-300 flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    WhatsApp
                  </a>
                </div>

                <div className="pt-2 text-center text-xs text-[#64748B]">
                  <p className="font-medium text-[#1E293B]">{HOSPITAL_INFO.shortAddress}</p>
                  <p className="text-[11px] text-red-600 font-semibold mt-0.5">24/7 Emergency Support Available</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
