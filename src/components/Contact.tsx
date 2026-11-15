import React from 'react';
import { Phone, ArrowUpRight } from 'lucide-react';

// ============================================================================
// CONTACT CONFIGURATION
// ============================================================================
export const CONTACT_DETAILS = {
  phone1: '+91 85209 36604',
  phone1Raw: '+918520936604',
  phone2: '+91 90303 30384',
  phone2Raw: '+919030330384',
  instagramUrl: 'https://www.instagram.com/node.bricks?utm_source=qr&igsh=MWZxbXJydzBhdnB4dQ%3D%3D',
  instagramDisplay: 'instagram.com/node.bricks',
  instagramHandle: '@node.bricks',
};

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-slate-200/60 bg-slate-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-5 text-left">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-brand-500" />
              <span className="text-xs font-semibold tracking-wider uppercase text-brand-600 font-heading">
                GET IN TOUCH
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 leading-tight font-heading">
              Let's start a conversation.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-md font-sans font-normal">
              Have a question or want to learn more about NodeBricks? Reach out to us. We'd be happy to hear from you.
            </p>
          </div>

          {/* Right Column: Clean, Glassy Contact Cards */}
          <div className="lg:col-span-7 flex flex-col gap-3.5">
            {/* Phone Number 1 */}
            <a
              href={`tel:${CONTACT_DETAILS.phone1Raw}`}
              aria-label={`Call ${CONTACT_DETAILS.phone1}`}
              className="relative group flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-white/65 backdrop-blur-md border border-white/80 shadow-[0_8px_30px_-6px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.95)] hover:bg-white/85 hover:border-white hover:shadow-[0_14px_38px_-4px_rgba(0,0,0,0.08),inset_0_1px_2px_rgba(255,255,255,1)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
            >
              {/* Glass specular top rim */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />

              <div className="flex items-center gap-4 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-brand-50/80 text-brand-600 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-200">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Phone
                  </div>
                  <div className="text-base sm:text-lg font-semibold text-slate-900 group-hover:text-brand-600 transition-colors truncate">
                    {CONTACT_DETAILS.phone1}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-brand-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0 ml-4" />
            </a>

            {/* Phone Number 2 */}
            <a
              href={`tel:${CONTACT_DETAILS.phone2Raw}`}
              aria-label={`Call ${CONTACT_DETAILS.phone2}`}
              className="relative group flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-white/65 backdrop-blur-md border border-white/80 shadow-[0_8px_30px_-6px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.95)] hover:bg-white/85 hover:border-white hover:shadow-[0_14px_38px_-4px_rgba(0,0,0,0.08),inset_0_1px_2px_rgba(255,255,255,1)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
            >
              {/* Glass specular top rim */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />

              <div className="flex items-center gap-4 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-brand-50/80 text-brand-600 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-200">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Phone
                  </div>
                  <div className="text-base sm:text-lg font-semibold text-slate-900 group-hover:text-brand-600 transition-colors truncate">
                    {CONTACT_DETAILS.phone2}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-brand-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0 ml-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};