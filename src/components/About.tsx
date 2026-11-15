import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const About: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const cardVariant = (delay: number) => ({
    initial: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: shouldReduceMotion
      ? { duration: 0 }
      : { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  });

  return (
    <section id="about" className="py-20 sm:py-28 border-t border-slate-200/60 bg-slate-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-brand-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-brand-600 font-heading">
              Company Overview
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 font-heading">
            About NodeBricks
          </h2>

          <p className="mt-4 text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-3xl font-sans">
            NodeBricks is a technology company focused on building practical digital products and software solutions. We believe technology should make everyday processes simpler and more effective.
          </p>

          {/* 3 Clean Glassy Cards with Equal Heights & Standardised Typography */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left items-stretch">
            {/* Card 1 */}
            <motion.div
              {...cardVariant(0.1)}
              className="relative p-6 sm:p-7 rounded-2xl bg-white/65 backdrop-blur-md border border-white/80 shadow-[0_8px_30px_-6px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.95)] hover:bg-white/85 hover:border-white hover:shadow-[0_16px_40px_-6px_rgba(0,0,0,0.09),inset_0_1px_2px_rgba(255,255,255,1)] hover:-translate-y-1 transition-all duration-300 overflow-hidden group h-full flex flex-col justify-start"
            >
              {/* Glass specular top rim */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />

              <h3 className="font-heading text-lg font-semibold text-slate-900 tracking-tight mb-2">
                Purpose-Built
              </h3>
              <p className="font-sans text-sm text-slate-600 font-normal leading-relaxed">
                Every solution originates from genuine real-world operational challenges rather than speculative trends.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              {...cardVariant(0.25)}
              className="relative p-6 sm:p-7 rounded-2xl bg-white/65 backdrop-blur-md border border-white/80 shadow-[0_8px_30px_-6px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.95)] hover:bg-white/85 hover:border-white hover:shadow-[0_16px_40px_-6px_rgba(0,0,0,0.09),inset_0_1px_2px_rgba(255,255,255,1)] hover:-translate-y-1 transition-all duration-300 overflow-hidden group h-full flex flex-col justify-start"
            >
              {/* Glass specular top rim */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />

              <h3 className="font-heading text-lg font-semibold text-slate-900 tracking-tight mb-2">
                Solid Foundations
              </h3>
              <p className="font-sans text-sm text-slate-600 font-normal leading-relaxed">
                Engineered with modern, reliable systems that provide stability, security, and scalability.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              {...cardVariant(0.4)}
              className="relative p-6 sm:p-7 rounded-2xl bg-white/65 backdrop-blur-md border border-white/80 shadow-[0_8px_30px_-6px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.95)] hover:bg-white/85 hover:border-white hover:shadow-[0_16px_40px_-6px_rgba(0,0,0,0.09),inset_0_1px_2px_rgba(255,255,255,1)] hover:-translate-y-1 transition-all duration-300 overflow-hidden group h-full flex flex-col justify-start"
            >
              {/* Glass specular top rim */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />

              <h3 className="font-heading text-lg font-semibold text-slate-900 tracking-tight mb-2">
                Simplicity in Use
              </h3>
              <p className="font-sans text-sm text-slate-600 font-normal leading-relaxed">
                Designing intuitive workflows that eliminate friction for administrators, teams, and end users.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};