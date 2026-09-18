import React, { useState } from 'react';
import { ChevronDown, Sparkles, HelpCircle, Phone, MessageSquare } from 'lucide-react';
import { FAQ_ITEMS, HOSPITAL_INFO } from '../data/hospitalData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq1');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = FAQ_ITEMS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#F1F5F9] border-y border-[#CBD5E1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFF6FF] text-[#134074] border border-[#BFDBFE] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2545] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#475569] text-base sm:text-lg">
            Essential information about appointments, diagnostic ultrasound, pet food shop, emergency care, and visiting our Sargodha hospital.
          </p>

          {/* Quick search input */}
          <div className="mt-6 max-w-md mx-auto relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics (e.g., ultrasound, pet food, emergency)..."
              className="w-full pl-4 pr-10 py-2.5 rounded-xl bg-white border border-[#CBD5E1] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#134074] shadow-xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#64748B] hover:text-[#0B2545] text-xs font-bold px-1.5 py-0.5 rounded-md hover:bg-[#F1F5F9]"
                aria-label="Clear search"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="bg-white p-6 rounded-xl text-center text-sm text-[#64748B] border border-[#E2E8F0] space-y-3">
              <p>No questions matched "{searchQuery}". Contact us directly on WhatsApp or call our helpline.</p>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="px-4 py-1.5 rounded-lg bg-[#134074] text-white text-xs font-semibold hover:bg-[#0B2545] transition-colors"
              >
                Reset Search
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-[#134074]/40 shadow-sm'
                      : 'border-[#E2E8F0] hover:border-[#CBD5E1]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#134074] px-2.5 py-0.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] shrink-0">
                        {faq.category}
                      </span>
                      <span className="font-serif text-base sm:text-lg font-bold text-[#0B2545]">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#134074] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#0284C7]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm text-[#334155] leading-relaxed border-t border-[#F1F5F9] animate-fade-in">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Contact banner below FAQ */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-[#E2E8F0] text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] text-[#134074] flex items-center justify-center shrink-0 border border-[#BFDBFE]">
              <HelpCircle className="w-5 h-5 text-[#0284C7]" />
            </div>
            <div>
              <h4 className="font-serif text-base font-bold text-[#0B2545]">
                Have a specific question about your pet?
              </h4>
              <p className="text-xs text-[#64748B]">
                Our hospital staff is available to answer questions via WhatsApp or phone call.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`https://wa.me/${HOSPITAL_INFO.whatsappNumber}?text=Hello%20Asjad%20Veterinary%20Hospital,%20I%20have%20a%20question%20regarding%20my%20pet.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Ask on WhatsApp</span>
            </a>

            <a
              href={`tel:${HOSPITAL_INFO.phones[0].raw}`}
              className="px-4 py-2 rounded-xl bg-[#EFF6FF] hover:bg-[#DBEAFE] text-[#0B2545] border border-[#BFDBFE] text-xs font-semibold flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Helpline</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
