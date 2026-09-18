import React from 'react';
import { Stethoscope, ClipboardCheck, Activity, HeartHandshake, Sparkles, CheckCircle } from 'lucide-react';

export const PatientJourney: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Warm Welcome & Calm Triage',
      desc: 'We minimize waiting room stress with a gentle reception. Your pet’s temperature, weight, and initial vital signs are measured calmly.',
      icon: ClipboardCheck,
    },
    {
      num: '02',
      title: 'Comprehensive Physical Exam',
      desc: 'A complete nose-to-tail examination assessing coat, ears, oral cavity, heart rhythm, respiration, and abdominal comfort.',
      icon: Stethoscope,
    },
    {
      num: '03',
      title: 'Targeted Diagnostic Testing',
      desc: 'If clinical findings require deeper investigation, we perform immediate ultrasonography or microscopic lab evaluation on-site.',
      icon: Activity,
    },
    {
      num: '04',
      title: 'Clear Guidance & Caring Recovery',
      desc: 'You receive transparent explanations without confusing jargon, an exact treatment regimen, preventive advice, and follow-up support.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-24 bg-[#F8FAFC] border-y border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFF6FF] text-[#134074] border border-[#BFDBFE] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>The Asjad Patient Experience</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B2545] mb-4">
            What to Expect During Your Pet’s Visit
          </h2>
          <p className="text-[#475569] text-base sm:text-lg leading-relaxed">
            Whether it is a first kitten checkup, dietary consultation at our pet shop, or an emergency ultrasound, we make sure you and your companion feel respected, informed, and completely cared for.
          </p>
        </div>

        {/* 4 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-sm border border-[#E2E8F0] hover:border-[#134074]/30 relative flex flex-col justify-between hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-2xl font-bold text-[#0284C7]">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] text-[#134074] flex items-center justify-center border border-[#BFDBFE]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#0B2545] mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#F1F5F9] flex items-center gap-1.5 text-xs text-[#134074] font-semibold">
                  <CheckCircle className="w-3.5 h-3.5 text-[#0284C7]" />
                  <span>Stress-free standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance note for anxious pet owners */}
        <div className="mt-12 bg-[#EFF6FF] rounded-2xl p-6 sm:p-8 border border-[#BFDBFE] max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6 shadow-xs">
          <div className="w-14 h-14 rounded-2xl bg-[#134074] text-white flex items-center justify-center shrink-0 shadow-sm">
            <HeartHandshake className="w-7 h-7" />
          </div>
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-lg font-bold text-[#0B2545]">
              First Time Bringing a Pet to a Hospital?
            </h4>
            <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-relaxed">
              Do not worry if your pet is nervous or shy. Our staff is trained to accommodate timid animals with quiet pacing, gentle reassurance, and comfortable holding techniques.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
