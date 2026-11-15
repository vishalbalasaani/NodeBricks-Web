import React, { useRef, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure the video plays smoothly without browser throttling or audio-context lag
    video.defaultMuted = true;
    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay handled gracefully with poster fallback
      });
    }
  }, []);

  // Animation variants respecting reduced motion preferences
  const fadeUp = (delay: number) => ({
    initial: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: shouldReduceMotion
      ? { duration: 0 }
      : { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  });

  return (
    <section id="home" className="relative isolate min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Crisp Geometric Wireframe Video Background (Unblurred, High-Definition, Zero Lag) */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none select-none bg-[#E2DBD1]" aria-hidden="true">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/hero-wireframe-poster.jpg"
          disablePictureInPicture
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
          style={{
            transform: 'translateZ(0)',
            willChange: 'transform',
            filter: 'none', // Strictly unblurred to preserve high-definition wireframe lines
          }}
          src="/hero-wireframe.mp4"
        />
      </div>

      {/* Atmospheric Contrast & Edge-Blending Scrim: Guarantees 100% text legibility while keeping the video visible */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none select-none"
        style={{
          background: `
            radial-gradient(ellipse 65% 55% at 50% 50%, rgba(248, 250, 252, 0.45) 0%, rgba(248, 250, 252, 0.18) 50%, transparent 85%),
            linear-gradient(to bottom, transparent 0%, transparent 80%, #f8fafc 100%)
          `,
        }}
      />

      {/* Hero Content Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
        {/* Dominant Responsive Headline */}
        <motion.h1
          {...fadeUp(0.05)}
          style={{
            fontFamily: "'Epic Pro', 'SF Pro Display', 'SF Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            fontWeight: 300,
          }}
          className="text-[clamp(2.35rem,6.5vw+0.25rem,4.75rem)] font-light tracking-[-0.02em] text-slate-900 max-w-4xl mx-auto leading-[1.12] sm:leading-[1.08] drop-shadow-[0_1px_2px_rgba(255,255,255,0.85)]"
        >
          Technology,{' '}
          <span className="sm:block">
            built with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-500 to-amber-600 font-light">
              purpose.
            </span>
          </span>
        </motion.h1>

        {/* Supporting Paragraph with Optimized Readability & Measure (22-24px desktop) */}
        <motion.p
          {...fadeUp(0.15)}
          className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-[23px] text-slate-800 max-w-2xl mx-auto font-normal leading-relaxed lg:leading-[1.55] drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]"
        >
          NodeBricks is a technology company focused on developing digital products and software solutions that address real-world needs.
        </motion.p>

        {/* Centered Primary CTA Button */}
        <motion.div
          {...fadeUp(0.25)}
          className="mt-8 sm:mt-10 flex items-center justify-center"
        >
          <a
            href="#products"
            className="relative h-12 px-8 inline-flex items-center justify-center gap-2.5 text-sm sm:text-base font-semibold text-white rounded-full bg-gradient-to-b from-[#FD5402] to-[#E64600] backdrop-blur-md border border-white/30 shadow-[0_10px_32px_-4px_rgba(253,84,2,0.55),0_4px_12px_rgba(253,84,2,0.30),inset_0_1px_1.5px_rgba(255,255,255,0.45)] hover:from-[#ff6417] hover:to-[#eb4800] hover:shadow-[0_14px_42px_-2px_rgba(253,84,2,0.70),0_6px_16px_rgba(253,84,2,0.35),inset_0_1px_2px_rgba(255,255,255,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FD5402] focus-visible:ring-offset-2 motion-reduce:transition-none group overflow-hidden"
          >
            <span className="relative z-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]">
              Explore Our Products
            </span>
            <ArrowDown className="relative z-10 w-4 h-4 flex-shrink-0 transition-transform duration-200 group-hover:translate-y-0.5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};