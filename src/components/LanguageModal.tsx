import React, { useState, useMemo } from 'react';
import { X, Search, Check, Globe, Sparkles, Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LANGUAGES_LIST, LanguageOption } from '../data/languagesData';

export const LanguageModal: React.FC = () => {
  const { currentLanguage, setLanguageByCode, isModalOpen, closeLanguageModal } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');

  // Specific priority requested languages highlighted
  const requestedCodes = ['zh', 'ta', 'ms', 'ja', 'ko', 'de', 'es', 'ar'];

  const filteredLanguages = useMemo(() => {
    return LANGUAGES_LIST.filter((lang) => {
      const matchesSearch =
        lang.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lang.nativeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lang.code.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesRegion =
        selectedRegion === 'all'
          ? true
          : selectedRegion === 'priority'
          ? requestedCodes.includes(lang.code)
          : lang.region.toLowerCase().includes(selectedRegion.toLowerCase());

      return matchesSearch && matchesRegion;
    });
  }, [searchQuery, selectedRegion]);

  if (!isModalOpen) return null;

  const handleSelectLanguage = (lang: LanguageOption) => {
    setLanguageByCode(lang.code);
    closeLanguageModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 text-white max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Languages className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400">
                Global Translation Hub
              </div>
              <h3 className="text-xl font-bold font-display text-white mt-0.5">
                Select Your Preferred Language
              </h3>
              <p className="text-xs text-slate-400">
                Choose from 32 languages including China, Tamil, Malay, Japan, Korea, German, Spain, Arab, and more.
              </p>
            </div>
          </div>

          <button
            onClick={closeLanguageModal}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close language selector"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar & Region Filters */}
        <div className="py-4 space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by language, country, or native script (e.g. Tamil, தமிழ், 中文, 日本語)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Region Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            {[
              { id: 'all', label: `All Languages (${LANGUAGES_LIST.length})` },
              { id: 'priority', label: '⭐ Requested Core (8)' },
              { id: 'Asia', label: 'Asia' },
              { id: 'Europe', label: 'Europe' },
              { id: 'Middle East', label: 'Middle East' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedRegion(tab.id)}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                  selectedRegion === tab.id
                    ? 'bg-emerald-400 text-slate-950 font-bold shadow-sm'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Language Grid */}
        <div className="flex-1 overflow-y-auto pr-1 py-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {filteredLanguages.map((lang) => {
            const isSelected = currentLanguage.code === lang.code;
            const isRequested = requestedCodes.includes(lang.code);

            return (
              <button
                key={lang.code}
                onClick={() => handleSelectLanguage(lang)}
                className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer group ${
                  isSelected
                    ? 'bg-emerald-950/40 border-emerald-400/80 shadow-md ring-1 ring-emerald-400/30'
                    : 'bg-slate-950/70 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-2xl shrink-0" role="img" aria-label={lang.name}>
                    {lang.flag}
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-semibold text-white truncate group-hover:text-emerald-300 transition-colors">
                        {lang.name}
                      </span>
                      {isRequested && (
                        <span className="px-1.5 py-0.2 rounded text-[9px] font-mono font-bold bg-emerald-500/20 text-emerald-300 shrink-0">
                          Popular
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-slate-400 font-mono mt-0.5 truncate">
                      {lang.nativeName}
                    </div>
                  </div>
                </div>

                {isSelected ? (
                  <div className="w-5 h-5 rounded-full bg-emerald-400 text-slate-950 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                ) : (
                  <span className="text-[10px] text-slate-500 font-mono uppercase group-hover:text-slate-300 transition-colors">
                    {lang.code}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="pt-4 mt-2 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>Currently Active:</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <span>{currentLanguage.flag}</span>
              <span>{currentLanguage.name} ({currentLanguage.nativeName})</span>
            </span>
          </div>

          <button
            onClick={closeLanguageModal}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors cursor-pointer"
          >
            Apply &amp; Continue
          </button>
        </div>
      </div>
    </div>
  );
};
