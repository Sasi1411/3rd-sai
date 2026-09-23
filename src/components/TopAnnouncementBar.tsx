import React from 'react';
import { Languages, Globe, ChevronDown, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LANGUAGES_LIST } from '../data/languagesData';

interface TopAnnouncementBarProps {
  onOpenOnboarding?: () => void;
}

export const TopAnnouncementBar: React.FC<TopAnnouncementBarProps> = ({ onOpenOnboarding }) => {
  const { currentLanguage, openLanguageModal, setLanguageByCode } = useLanguage();

  // Highlighted quick-switch languages specifically requested by user
  const quickLangs = [
    { code: 'en', flag: '🇺🇸', label: 'EN' },
    { code: 'zh', flag: '🇨🇳', label: '中文 (China)' },
    { code: 'ta', flag: '🇮🇳', label: 'தமிழ் (Tamil)' },
    { code: 'ms', flag: '🇲🇾', label: 'Malay' },
    { code: 'ja', flag: '🇯🇵', label: '日本語 (Japan)' },
    { code: 'ko', flag: '🇰🇷', label: '한국어 (Korea)' },
    { code: 'de', flag: '🇩🇪', label: 'German' },
    { code: 'es', flag: '🇪🇸', label: 'Spain' },
    { code: 'ar', flag: '🇦🇪', label: 'Arab' },
  ];

  return (
    <div className="w-full bg-[#060910] border-b border-slate-800/80 text-xs py-2 px-4 relative z-40">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left: Value proposition badge & Plans link */}
        <div className="flex items-center gap-2 text-slate-300">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] font-bold uppercase tracking-wider">
            <Sparkles className="w-3 h-3" />
            2-Year Special Deals
          </span>
          <span className="hidden sm:inline text-slate-400 text-xs">
            Startup ($40/mo) · Small Biz ($105/mo) · Big Biz ($245/mo)
          </span>
          <a
            href="#plans"
            className="text-amber-400 hover:text-amber-300 font-semibold underline decoration-amber-400/40 text-xs ml-1 transition-colors"
          >
            View Plans →
          </a>
          {onOpenOnboarding && (
            <button
              onClick={onOpenOnboarding}
              className="hidden md:inline-flex items-center gap-1 ml-2 text-emerald-400 hover:text-emerald-300 font-semibold text-xs transition-colors cursor-pointer"
            >
              <span>· Setup Wizard</span>
            </button>
          )}
        </div>

        {/* Right: Translation Icon & Language Selector Options */}
        <div className="flex items-center gap-2 ml-auto">
          {/* Quick-switch pills for user-specified priority languages on medium+ screens */}
          <div className="hidden lg:flex items-center gap-1">
            {quickLangs.map((lang) => {
              const isActive = currentLanguage.code === lang.code;
              return (
                <button
                  key={lang.code}
                  onClick={() => setLanguageByCode(lang.code)}
                  className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors cursor-pointer flex items-center gap-1 ${
                    isActive
                      ? 'bg-emerald-400 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                  title={`Switch to ${lang.label}`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.label}</span>
                </button>
              );
            })}
          </div>

          {/* Primary Translation Icon & Modal Trigger */}
          <button
            onClick={openLanguageModal}
            className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700/80 hover:border-emerald-400/60 text-slate-200 hover:text-white transition-all cursor-pointer group shadow-sm"
            aria-label="Change language (32 languages available)"
          >
            <Languages className="w-4 h-4 text-emerald-400 group-hover:rotate-12 transition-transform" />
            <div className="flex items-center gap-1.5">
              <span className="text-base leading-none">{currentLanguage.flag}</span>
              <span className="font-semibold text-xs text-white">
                {currentLanguage.name.split(' ')[0]}
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1 py-0.2 rounded border border-emerald-500/20">
                30+ Langs
              </span>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>
    </div>
  );
};
