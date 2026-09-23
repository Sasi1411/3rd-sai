import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles, Languages, Mail, Phone, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  onOpenCheckout: (plan?: string) => void;
  onOpenContact?: () => void;
  onOpenOnboarding?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCheckout, onOpenContact, onOpenOnboarding }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { currentLanguage, openLanguageModal } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'Social Proof', href: '#testimonials' },
    { label: 'Plans', href: '#plans' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#060814]/75 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] py-3'
          : 'bg-[#070918]/60 backdrop-blur-xl border-b border-white/[0.05] shadow-[0_4px_24px_0_rgba(0,0,0,0.25)] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Text Logo "AI Life Planner" */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 text-xl sm:text-2xl font-bold tracking-tight text-white transition-all font-display"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500/20 via-teal-500/20 to-indigo-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 group-hover:border-emerald-400/60 group-hover:scale-105 transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <Sparkles className="w-4 h-4 text-emerald-400 group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent group-hover:from-white group-hover:to-emerald-300 transition-colors">
            AI Life Planner
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse"></span>
        </a>

        {/* Right: Menu items - Home, Features, Plans, Contact + Translation & CTA */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-1.5">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg transition-all duration-200 hover:bg-white/[0.06] active:scale-95 group"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-1 left-3.5 right-3.5 h-[2px] bg-gradient-to-r from-emerald-400 to-teal-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
              </a>
            ))}
          </nav>

          {/* Action cluster on the right */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Setup Wizard Button */}
            {onOpenOnboarding && (
              <button
                onClick={onOpenOnboarding}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 hover:text-emerald-200 text-xs font-semibold transition-all duration-200 cursor-pointer shadow-sm"
                title="Launch Step-by-Step Tool Setup Wizard"
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Setup Wizard</span>
              </button>
            )}

            {/* Translation Icon */}
            <button
              onClick={openLanguageModal}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-emerald-400/40 text-slate-300 hover:text-white text-xs font-medium transition-all duration-200 cursor-pointer shadow-sm"
              title="Translate Language (32 available)"
              aria-label="Translate Website"
            >
              <Languages className="w-4 h-4 text-emerald-400" />
              <span className="text-sm">{currentLanguage.flag}</span>
              <span className="font-semibold text-slate-200">{currentLanguage.nativeName.split(' ')[0]}</span>
            </button>

            {/* Premium CTA Button */}
            <button
              onClick={() => onOpenCheckout('bundle')}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 bg-[length:200%_auto] hover:bg-[position:right_center] transition-all duration-500 shadow-[0_0_20px_rgba(52,211,153,0.3)] hover:shadow-[0_0_25px_rgba(52,211,153,0.5)] active:scale-[0.98] cursor-pointer"
            >
              <span>Get Unlimited Access</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={openLanguageModal}
              className="p-2 rounded-xl bg-white/[0.05] border border-white/[0.08] text-slate-300 text-xs"
              aria-label="Change language"
            >
              <Languages className="w-4 h-4 text-emerald-400" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Mobile Drawer with Liquid Glass styling */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#070916]/95 backdrop-blur-2xl px-6 py-6 space-y-4 animate-fadeIn">
          {/* Quick Language bar */}
          <div className="pb-3 border-b border-white/[0.06] flex items-center justify-between text-xs">
            <span className="text-slate-400 flex items-center gap-1.5">
              <Languages className="w-4 h-4 text-emerald-400" />
              <span>Language:</span>
            </span>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openLanguageModal();
              }}
              className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400 font-semibold flex items-center gap-1.5"
            >
              <span>{currentLanguage.flag}</span>
              <span>{currentLanguage.name}</span>
              <span className="text-[10px] text-slate-400 underline">Change</span>
            </button>
          </div>

          {/* Nav links */}
          <div className="flex flex-col space-y-2 text-base font-medium">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl text-slate-200 hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-3 border-t border-white/[0.06] space-y-2">
            {onOpenOnboarding && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOnboarding();
                }}
                className="w-full py-2.5 rounded-xl text-center text-xs font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Launch Tool Setup Wizard</span>
              </button>
            )}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCheckout('bundle');
              }}
              className="w-full py-3.5 rounded-xl text-center text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 transition-all shadow-[0_0_20px_rgba(52,211,153,0.3)]"
            >
              Get Unlimited Access for $40/mo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
