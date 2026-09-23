import React, { useState } from 'react';
import { PERSONAS_LIST, PersonaItem } from '../data/personasData';
import { 
  Laptop, Video, ShoppingBag, PenTool, Youtube, Mic, Coins, Store, 
  Briefcase, Share2, GraduationCap, Sparkles, ArrowRight, Check,
  UserCheck, Target, BookOpen, Users, RotateCcw
} from 'lucide-react';

interface PersonasSectionProps {
  onOpenCheckout: (plan?: string) => void;
  onSelectPersonaForPlan?: (persona: PersonaItem) => void;
}

export const PersonasSection: React.FC<PersonasSectionProps> = ({ 
  onOpenCheckout, 
  onSelectPersonaForPlan 
}) => {
  const [filter, setFilter] = useState<string>('all');
  const [activePersona, setActivePersona] = useState<PersonaItem | null>(null);

  const FILTER_TABS = [
    { id: 'solo-entrepreneur', label: 'Solo Entrepreneur' },
    { id: 'sales-person', label: 'Sales Person' },
    { id: 'affiliate-marketers', label: 'Affiliate Marketers' },
    { id: 'video-marketers', label: 'Video Marketers' },
    { id: 'ecom-store-owners', label: 'Ecom Store Owners' },
    { id: 'content-creators', label: 'Content Creators' },
    { id: 'youtube-marketers', label: 'YouTube Marketers' },
    { id: 'bloggers-and-podcasters', label: 'Bloggers and Podcasters' },
    { id: 'shopify-ebay-store-owners', label: 'Shopify & eBay Store Owners' },
    { id: 'top-business-executives', label: 'Top Business Executives' },
    { id: 'coaches-and-mentors', label: 'Coaches, Mentors & Marketing Gurus' },
    { id: 'student', label: 'Student' },
  ];

  const filteredPersonas = PERSONAS_LIST.filter(
    (p) => filter === 'all' || p.filterKey === filter || p.id === filter
  );

  const getPersonaIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6' };
    switch (iconName) {
      case 'Laptop': return <Laptop {...props} />;
      case 'Video': return <Video {...props} />;
      case 'ShoppingBag': return <ShoppingBag {...props} />;
      case 'PenTool': return <PenTool {...props} />;
      case 'Youtube': return <Youtube {...props} />;
      case 'Mic': return <Mic {...props} />;
      case 'Coins': return <Coins {...props} />;
      case 'Store': return <Store {...props} />;
      case 'Briefcase': return <Briefcase {...props} />;
      case 'Share2': return <Share2 {...props} />;
      case 'GraduationCap': return <GraduationCap {...props} />;
      case 'UserCheck': return <UserCheck {...props} />;
      case 'Target': return <Target {...props} />;
      case 'BookOpen': return <BookOpen {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <section id="who-benefits" className="py-20 border-b border-slate-800/80 bg-[#090D16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 font-mono">
            Universal Audience Fit
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-2 font-display">
            Why This Bundle Software Is Best Suited For Everyone
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Whether you sell physical merchandise, run video ads, publish podcasts, or coach clients—these 6 applications provide the exact infrastructure you need to multiply sales and keep customer relationships thriving.
          </p>
        </div>

        {/* Filter Bar with all options */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 max-w-5xl mx-auto">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(filter === tab.id ? 'all' : tab.id)}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer ${
                filter === tab.id
                  ? 'bg-emerald-400 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                  : 'bg-slate-900/90 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Filter feedback / quick reset if a specific item is selected */}
        {filter !== 'all' && (
          <div className="mt-4 flex items-center justify-center gap-2 text-xs font-mono text-slate-400">
            <span>Filtered by: <strong className="text-emerald-400">{FILTER_TABS.find(t => t.id === filter)?.label}</strong></span>
            <button
              onClick={() => setFilter('all')}
              className="inline-flex items-center gap-1 text-emerald-400 hover:underline cursor-pointer ml-1"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Clear Filter</span>
            </button>
          </div>
        )}

        {/* 12 Personas Grid */}
        <div className={`mt-10 grid gap-6 ${
          filteredPersonas.length === 1 
            ? 'max-w-xl mx-auto' 
            : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
        }`}>
          {filteredPersonas.map((persona) => {
            const isSelected = activePersona?.id === persona.id;
            return (
              <div
                key={persona.id}
                className={`rounded-2xl bg-slate-900/90 border p-6 flex flex-col justify-between transition-all group ${
                  isSelected
                    ? 'border-emerald-500 shadow-xl shadow-emerald-500/10 bg-slate-850'
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Persona Icon Banner */}
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-105 transition-transform">
                    {getPersonaIcon(persona.iconName)}
                  </div>

                  <h3 className="text-lg font-bold text-white font-display">
                    {persona.title}
                  </h3>

                  {/* Persona description */}
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed min-h-[56px]">
                    {persona.description}
                  </p>

                  {/* Recommended apps tags */}
                  <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400">
                    <span className="text-slate-200 font-semibold block mb-1">
                      Primary Tools:
                    </span>
                    <span className="text-emerald-400 font-mono">
                      {persona.recommendedApps.join(' · ')}
                    </span>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">
                    {persona.roiEstimate}
                  </span>
                  <button
                    onClick={() => {
                      setActivePersona(isSelected ? null : persona);
                      if (onSelectPersonaForPlan) {
                        onSelectPersonaForPlan(persona);
                      }
                    }}
                    className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 cursor-pointer"
                  >
                    <span>{isSelected ? 'Hide Playbook' : 'View Playbook'}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {/* Expanded Playbook Drawer */}
                {isSelected && (
                  <div className="mt-4 p-3 rounded-lg bg-slate-950 border border-emerald-500/30 text-xs text-slate-300 animate-fadeIn">
                    <div className="font-semibold text-emerald-400 mb-1">
                      Recommended 30-Day Blueprint:
                    </div>
                    <p className="leading-relaxed text-[11px]">{persona.playbookTip}</p>
                    <button
                      onClick={() => onOpenCheckout('bundle')}
                      className="mt-3 w-full py-1.5 text-[11px] font-bold text-slate-950 bg-emerald-400 rounded hover:bg-emerald-300 transition-colors cursor-pointer"
                    >
                      Get Started with {persona.title} Setup
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
