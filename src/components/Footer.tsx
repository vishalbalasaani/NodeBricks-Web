import React from 'react';
import { Instagram } from 'lucide-react';
import { CONTACT_DETAILS } from './Contact';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto border-t border-slate-200/70 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-slate-100">
          {/* Column 1 — Brand */}
          <div className="md:col-span-5 space-y-3">
            <a
              href="#home"
              className="inline-flex items-center gap-2.5 group"
              aria-label="NodeBricks Home"
            >
              <img
                src="/nodebricks-logo.png"
                alt="NodeBricks Logo"
                width="24"
                height="24"
                loading="lazy"
                decoding="async"
                className="h-6 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
              <span className="text-lg font-semibold tracking-tight text-slate-900 font-heading">
                NodeBricks
              </span>
            </a>
            <p className="text-sm text-slate-500 leading-relaxed font-normal max-w-sm font-sans">
              Building technology for a better tomorrow.
            </p>
          </div>

          {/* Column 2 — Explore */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 font-heading">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#home"
                  className="text-slate-500 hover:text-slate-900 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-slate-500 hover:text-slate-900 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-slate-500 hover:text-slate-900 transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-500 hover:text-slate-900 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 — Follow Us */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 font-heading">
              Follow Us
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={CONTACT_DETAILS.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="NodeBricks on Instagram"
                  className="inline-flex items-center gap-2.5 text-slate-500 hover:text-slate-900 transition-colors group"
                >
                  <Instagram className="w-4 h-4 text-brand-500 group-hover:text-brand-600 group-hover:scale-110 transition-all duration-200 flex-shrink-0" />
                  <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                    {CONTACT_DETAILS.instagramHandle}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar — Copyright Row */}
        <div className="pt-8 text-xs text-slate-400 text-center sm:text-left">
          <p>© 2026 NodeBricks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};