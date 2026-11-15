import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);

      const scrollPosition = window.scrollY + 140;

      if (window.scrollY < 200) {
        setActiveSection('home');
        return;
      }

      const sections = ['contact', 'products', 'about'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Products', href: '#products', id: 'products' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-3 sm:top-4 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
      <div className="w-full max-w-4xl pointer-events-auto">
        {/* Floating Rounded Strip Navbar */}
        <div
          className={`rounded-full px-4 sm:px-6 py-2 sm:py-2.5 transition-all duration-300 ${
            scrolled
              ? 'bg-white/85 backdrop-blur-md border border-slate-300/80 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.08)]'
              : 'bg-transparent border border-neutral-400/70 shadow-none'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo and Brand */}
            <a
              href="#home"
              className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-full py-0.5 px-1 flex-shrink-0"
              aria-label="NodeBricks Home"
            >
              <img
                src="/nodebricks-logo.png"
                alt="NodeBricks Logo"
                width="22"
                height="22"
                className="h-5 sm:h-5.5 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
              <span className="text-[16px] sm:text-[17px] font-bold tracking-tight text-[#171717] leading-none">
                NodeBricks
              </span>
            </a>

            {/* Centered Navigation Links with Tight Fitted Underline */}
            <nav className="hidden md:flex items-center space-x-5 md:space-x-7 lg:space-x-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className="relative inline-flex items-center py-1 text-[14px] sm:text-[15px] font-medium text-[#171717] transition-colors group select-none"
                  >
                    <span className="relative inline-block leading-normal">
                      {link.name}
                      {/* Perfectly fitted underline matching text width and baseline */}
                      <span
                        className={`absolute left-0 -bottom-0.5 h-[2px] bg-brand-500 rounded-full transition-all duration-200 ease-out ${
                          isActive
                            ? 'w-full opacity-100'
                            : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                        }`}
                      />
                    </span>
                  </a>
                );
              })}
            </nav>

            {/* Right: Same Black Pill Contact Us CTA */}
            <div className="hidden md:flex items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-4 py-1.5 sm:px-5 sm:py-2 text-[13px] sm:text-[14px] font-medium text-white bg-[#171717] hover:bg-neutral-800 rounded-full shadow-xs hover:shadow-sm transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
              >
                <span>Contact Us</span>
                <ArrowUpRight className="ml-1 w-3.5 h-3.5 text-white/80" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 rounded-full text-[#171717] hover:bg-slate-100/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 bg-white/95 backdrop-blur-md border border-black/[0.08] rounded-2xl p-4 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200 space-y-3">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="relative py-2 text-[15px] font-medium text-[#171717] flex items-center justify-between group"
                  >
                    <span className="relative inline-block">
                      {link.name}
                      <span
                        className={`absolute -bottom-0.5 left-0 h-[2px] bg-brand-500 rounded-full transition-all duration-200 ${
                          isActive
                            ? 'w-full opacity-100'
                            : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                        }`}
                      />
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-black transition-colors" />
                  </a>
                );
              })}
            </div>

            <div className="pt-2 border-t border-slate-100">
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="w-full inline-flex items-center justify-center px-4 py-2.5 text-[14px] font-medium text-white bg-[#171717] hover:bg-neutral-800 rounded-full shadow-xs transition-colors"
              >
                <span>Contact Us</span>
                <ArrowUpRight className="ml-1 w-3.5 h-3.5 text-white/80" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
