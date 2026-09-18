import React, { useState, useEffect } from 'react';
import { X, Calendar, Phone, MessageSquare, CheckCircle, Clock, Heart, Sparkles } from 'lucide-react';
import { HOSPITAL_INFO, SERVICES_LIST } from '../data/hospitalData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [ownerName, setOwnerName] = useState('');
  const [phone, setPhone] = useState('');
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState('Dog');
  const [service, setService] = useState(preselectedService || 'General Health Checkups & Clinical Diagnosis');
  const [preferredDate, setPreferredDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('Morning (10:00 AM - 1:00 PM)');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const buildWhatsAppMessage = () => {
    const msg = `*Appointment Request - Asjad Veterinary Hospital*
👤 *Owner Name:* ${ownerName || 'Not specified'}
📞 *Phone:* ${phone || 'Not specified'}
🐾 *Pet:* ${petName || 'Pet'} (${petType})
🩺 *Service Requested:* ${service}
📅 *Preferred Date:* ${preferredDate || 'Earliest available'}
⏰ *Preferred Time:* ${timeSlot}
📝 *Notes/Symptoms:* ${notes || 'Routine checkup'}`;

    return encodeURIComponent(msg);
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const encoded = buildWhatsAppMessage();
    const url = `https://wa.me/${HOSPITAL_INFO.whatsappNumber}?text=${encoded}`;
    window.open(url, '_blank');
    setIsSubmitted(true);
  };

  const handleStandardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#F8FAFC] rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#CBD5E1] relative my-8 animate-fade-in cursor-default"
      >
        
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#64748B] hover:text-[#0B2545] hover:bg-[#E2E8F0] transition-colors focus:outline-none"
          aria-label="Close appointment modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-5">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#0B2545] mb-2">
              Appointment Request Initiated
            </h3>

            <p className="text-sm text-[#475569] max-w-md mx-auto mb-6 leading-relaxed">
              Thank you, <strong className="text-[#0B2545]">{ownerName || 'valued pet parent'}</strong>. Your request for <strong className="text-[#0B2545]">{service}</strong> for {petName || 'your pet'} has been logged.
            </p>

            <div className="bg-white p-4 rounded-2xl border border-[#E2E8F0] text-left text-xs space-y-2 mb-6 max-w-sm mx-auto shadow-xs">
              <p><strong className="text-[#0B2545]">Hospital & Pet Shop:</strong> 47 Link Road, Opp C Block, Cantt View, Sargodha</p>
              <p><strong className="text-[#0B2545]">Helpline:</strong> {HOSPITAL_INFO.phones[0].display} / {HOSPITAL_INFO.phones[1].display}</p>
              <p><strong className="text-[#0B2545]">Status:</strong> Our clinical staff will confirm your slot via phone/WhatsApp.</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`tel:${HOSPITAL_INFO.phones[0].raw}`}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#134074] hover:bg-[#0B2545] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Hospital Directly</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#EFF6FF] text-[#134074] border border-[#BFDBFE] text-xs sm:text-sm font-semibold hover:bg-[#DBEAFE] transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6 pr-8">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#0284C7] uppercase tracking-wider mb-1">
                <Heart className="w-3.5 h-3.5 text-[#0284C7]" />
                <span>Asjad Veterinary Hospital & Pet Shop</span>
              </div>
              <h3 id="modal-headline" className="font-serif text-2xl sm:text-3xl font-bold text-[#0B2545]">
                Schedule an Appointment
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] mt-1">
                Book a consultation, ultrasound, surgical review, grooming, or food delivery. For emergencies, please call directly.
              </p>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
              
              {/* Pet Parent & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#1E293B] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                    placeholder="e.g. Ahmed Ali"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#CBD5E1] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#134074]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1E293B] mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 0300 1234567"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#CBD5E1] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#134074]"
                  />
                </div>
              </div>

              {/* Pet Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#1E293B] mb-1">
                    Pet's Name
                  </label>
                  <input
                    type="text"
                    value={petName}
                    onChange={(e) => setPetName(e.target.value)}
                    placeholder="e.g. Max, Snowball"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#CBD5E1] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#134074]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1E293B] mb-1">
                    Pet Species *
                  </label>
                  <select
                    value={petType}
                    onChange={(e) => setPetType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#CBD5E1] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#134074]"
                  >
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                    <option value="Bird">Bird</option>
                    <option value="Rabbit">Rabbit</option>
                    <option value="Other">Other Pet</option>
                  </select>
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold text-[#1E293B] mb-1">
                  Requested Service *
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#CBD5E1] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#134074]"
                >
                  {SERVICES_LIST.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#1E293B] mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#CBD5E1] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#134074]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1E293B] mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#CBD5E1] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#134074]"
                  >
                    <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                    <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1:00 PM - 5:00 PM)</option>
                    <option value="Evening (5:00 PM - 9:00 PM)">Evening (5:00 PM - 9:00 PM)</option>
                    <option value="Urgent / Emergency Arrival">Urgent / Emergency Arrival</option>
                  </select>
                </div>
              </div>

              {/* Symptoms / Notes */}
              <div>
                <label className="block text-xs font-bold text-[#1E293B] mb-1">
                  Reason for Visit / Symptoms
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Briefly describe what your pet is experiencing or products required..."
                  className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#CBD5E1] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#134074]"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-3 space-y-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-xs transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-100" />
                  <span>Send Appointment Request via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleStandardSubmit}
                  className="w-full py-2.5 rounded-xl bg-[#EFF6FF] hover:bg-[#DBEAFE] text-[#134074] text-xs font-semibold border border-[#BFDBFE] transition-all flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#134074]" />
                  <span>Log Request for Phone Confirmation</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-[#64748B] pt-1">
                For immediate life-threatening emergencies, please call <a href={`tel:${HOSPITAL_INFO.phones[0].raw}`} className="text-[#134074] font-bold underline">{HOSPITAL_INFO.phones[0].display}</a> right now.
              </p>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
