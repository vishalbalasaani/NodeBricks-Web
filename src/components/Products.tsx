import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const Products: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="products" className="py-20 sm:py-28 border-t border-slate-200/60 bg-slate-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-8 sm:mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-brand-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-brand-600 font-heading">
              Our Products
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 font-heading">
            Digital Products
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-600 font-sans font-normal max-w-2xl">
            We build digital products designed to solve practical challenges.
          </p>
        </div>

        {/* Compact Horizontal Glassy Card */}
        <div className="relative rounded-3xl bg-gradient-to-b from-white/80 via-white/60 to-white/75 backdrop-blur-xl border border-white/90 shadow-[0_12px_36px_-8px_rgba(0,0,0,0.06),inset_0_1.5px_2px_rgba(255,255,255,1),inset_0_-1px_2px_rgba(255,255,255,0.4)] hover:shadow-[0_20px_48px_-8px_rgba(253,84,2,0.10),inset_0_2px_3px_rgba(255,255,255,1)] hover:-translate-y-0.5 transition-all duration-300 p-6 sm:p-7 lg:p-8 overflow-hidden group">
          {/* Ambient Glass Color Glows */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-brand-500/10 blur-3xl pointer-events-none group-hover:bg-brand-500/15 transition-all duration-500" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />

          {/* Glass Specular Top Rim Reflection */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />

          {/* Horizontal Split Layout: Image on Left, Content on Right */}
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 lg:gap-10">
            {/* Left Column: 3D Illustration directly embedded (cleanly covering/fitting without nested box) */}
            <div className="w-full md:w-[46%] lg:w-[44%] flex items-center justify-center overflow-visible">
              <div className="w-full h-52 sm:h-60 md:h-64 lg:h-72 flex items-center justify-center">
                <motion.img
                  initial={shouldReduceMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 35, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { duration: 0.85, ease: [0.16, 1, 0.3, 1] }
                  }
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : { scale: 1.03, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }
                  }
                  style={{
                    willChange: 'transform, opacity',
                    transform: 'translateZ(0)',
                  }}
                  loading="lazy"
                  decoding="async"
                  src="/school-platform-orange.png"
                  alt="School Management & Parent Communication Platform"
                  className="w-full h-full object-contain select-none"
                />
              </div>
            </div>

            {/* Right Column: Clean Content & Project CTA */}
            <div className="w-full md:w-[54%] lg:w-[56%] flex flex-col justify-center text-left space-y-3.5 sm:space-y-4">
              {/* Product Title (Solid black/dark text, matching headings) */}
              <h3 className="font-heading text-xl sm:text-2xl font-semibold tracking-tight text-slate-900 leading-snug">
                School Management &amp; Parent Communication Platform
              </h3>

              {/* Reduced Body Text Font Size */}
              <p className="font-sans text-sm text-slate-600 font-normal leading-relaxed">
                A digital platform designed to simplify school management and strengthen communication between schools and parents.
              </p>

              {/* Project CTA Button */}
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-brand-500 hover:shadow-[0_6px_20px_-3px_rgba(253,84,2,0.4)] active:scale-[0.98] transition-all duration-200 group/btn"
                >
                  <span>Inquire About Platform</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};