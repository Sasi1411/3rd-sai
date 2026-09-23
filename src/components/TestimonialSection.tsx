import React, { useState, useEffect, useMemo } from 'react';
import { 
  ChevronLeft, ChevronRight, Star, Quote, TrendingUp, 
  CheckCircle2, ArrowRight, Sparkles, Building2, User,
  Search, Filter, Globe, ShieldCheck, ChevronDown, ChevronUp,
  Eye, EyeOff
} from 'lucide-react';
import { getSoftwareLogo } from './SoftwareBrandLogos';
import { ALL_30_SOCIAL_PROOFS, SocialProofReview } from '../data/socialProofData';

interface TestimonialSectionProps {
  onOpenCheckout: (plan?: string) => void;
}

export const TestimonialSection: React.FC<TestimonialSectionProps> = ({ onOpenCheckout }) => {
  // Carousel State for 20 featured case studies
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Wall of Social Proofs Filter & Search State (default 20 visible)
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [visibleCount, setVisibleCount] = useState<number>(20);
  const [isWallExpanded, setIsWallExpanded] = useState<boolean>(false);

  const featuredStories = useMemo(() => ALL_30_SOCIAL_PROOFS.slice(0, 20), []);

  // Auto-advance top carousel every 6.5s
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % featuredStories.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, featuredStories.length]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCarouselIndex((prev) => (prev === 0 ? featuredStories.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCarouselIndex((prev) => (prev + 1) % featuredStories.length);
  };

  const activeStory = featuredStories[carouselIndex];

  // Filtered 30 Social Proofs
  const filteredSocialProofs = useMemo(() => {
    return ALL_30_SOCIAL_PROOFS.filter((proof) => {
      const matchesCategory = 
        activeCategory === 'all' || proof.category === activeCategory;

      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesQuery = 
        proof.name.toLowerCase().includes(query) ||
        proof.company.toLowerCase().includes(query) ||
        proof.country.toLowerCase().includes(query) ||
        proof.headline.toLowerCase().includes(query) ||
        proof.quote.toLowerCase().includes(query) ||
        proof.toolsUsed.some((tool) => tool.toLowerCase().includes(query));

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  const visibleProofs = useMemo(() => {
    return filteredSocialProofs.slice(0, visibleCount);
  }, [filteredSocialProofs, visibleCount]);

  const categoryCounts = useMemo(() => {
    return {
      all: ALL_30_SOCIAL_PROOFS.length,
      ecommerce: ALL_30_SOCIAL_PROOFS.filter((p) => p.category === 'ecommerce').length,
      agency: ALL_30_SOCIAL_PROOFS.filter((p) => p.category === 'agency').length,
      creator: ALL_30_SOCIAL_PROOFS.filter((p) => p.category === 'creator').length,
      startup: ALL_30_SOCIAL_PROOFS.filter((p) => p.category === 'startup').length,
    };
  }, []);

  return (
    <section id="testimonials" className="py-24 border-b border-slate-800/80 bg-[#070b14] relative overflow-hidden scroll-mt-20">
      {/* Subtle ambient backlights */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>30 Verified Real-World Social Proofs &amp; Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3 font-display">
              Proven Results Across 30 Global Businesses
            </h2>
            <p className="mt-3 text-base text-slate-300 max-w-2xl">
              Authentic stories from e-commerce founders, digital agencies, creators, and technology leaders across 18 countries using the BizzScale bundle.
            </p>
          </div>

          {/* Carousel Controls for Top Featured Story */}
          <div className="flex items-center gap-3">
            <div className="text-xs font-mono text-slate-400 mr-2">
              <span className="text-emerald-400 font-bold">Featured {String(carouselIndex + 1).padStart(2, '0')}</span> / {String(featuredStories.length).padStart(2, '0')}
            </div>
            <button
              onClick={handlePrev}
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-emerald-500/50 transition-colors cursor-pointer"
              aria-label="Previous story"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-emerald-500/50 transition-colors cursor-pointer"
              aria-label="Next story"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Deep Case Study Showcase Card */}
        <div 
          className="mt-10 rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-10 shadow-2xl relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 7 Columns: Story, Quote, and Person */}
            <div className="lg:col-span-7 space-y-6">
              {/* Rating and Verified Badge */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: activeStory.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-1 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified 6-App Subscriber</span>
                </span>
                <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                  <span>{activeStory.countryFlag}</span>
                  <span>{activeStory.company}</span>
                </span>
              </div>

              {/* Headline */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display leading-tight">
                "{activeStory.headline}"
              </h3>

              {/* Quote */}
              <blockquote className="text-base text-slate-300 leading-relaxed italic border-l-2 border-emerald-400 pl-4">
                "{activeStory.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${activeStory.avatarBg} border border-emerald-500/30 flex items-center justify-center font-bold text-base`}>
                  {activeStory.avatarText}
                </div>
                <div>
                  <div className="text-base font-bold text-white font-display flex items-center gap-2">
                    <span>{activeStory.name}</span>
                    <span className="text-xs font-normal text-slate-400">({activeStory.country})</span>
                  </div>
                  <div className="text-xs text-slate-400">
                    {activeStory.role} · <span className="text-slate-300">{activeStory.company}</span>
                  </div>
                </div>
              </div>

              {/* Software used in this case */}
              <div className="pt-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono mb-2">
                  Active Tools Deployed:
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeStory.toolsUsed.map((toolId) => (
                    <div
                      key={toolId}
                      className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 flex items-center gap-2 text-xs font-medium text-slate-200"
                    >
                      {getSoftwareLogo(toolId, 'w-4 h-4')}
                      <span className="capitalize">{toolId}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Case Study ROI Box & Before/After */}
            <div className="lg:col-span-5 rounded-xl bg-slate-950 border border-slate-800 p-6 space-y-6">
              {/* Highlight Metric Badge */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono">
                  {activeStory.highlightMetric}
                </div>
                <div className="text-xs text-slate-300 font-medium mt-1">
                  {activeStory.metricLabel}
                </div>
              </div>

              {/* Quick Details */}
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono">Plan Tier:</span>
                  <span className="font-bold text-amber-400">{activeStory.plan}</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono">Annual Cash Saved:</span>
                  <span className="font-bold text-emerald-400 font-mono">{activeStory.annualCashSaved}</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono">Verification:</span>
                  <span className="font-semibold text-slate-300 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Active Enterprise License
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => onOpenCheckout('bundle')}
                className="w-full py-3.5 text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer font-display"
              >
                <span>Replicate These Results for $40/mo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Aggregate Credibility Metrics Strip */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/70 border border-slate-800/80">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">4.98 / 5.0</div>
            <div className="text-xs text-slate-400 mt-1">Based on 2,840+ Global Reviews</div>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/70 border border-slate-800/80">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">$7,320/yr</div>
            <div className="text-xs text-slate-400 mt-1">Average SaaS Cash Reclaimed</div>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/70 border border-slate-800/80">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">18+ Countries</div>
            <div className="text-xs text-slate-400 mt-1">Founders Scaling Globally</div>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/70 border border-slate-800/80">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">30 Proofs</div>
            <div className="text-xs text-slate-400 mt-1">Fully Documented Below</div>
          </div>
        </div>

        {/* ----------------- HIDE & UNHIDE: BROWSE ALL 30 CUSTOMER EXPERIENCES ----------------- */}
        <div id="customer-experiences-wall" className="mt-16 pt-12 border-t border-slate-800/80 scroll-mt-20">
          {!isWallExpanded ? (
            /* Collapsed / Hidden State Preview Card */
            <div className="rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800/90 p-8 sm:p-10 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-1/4 w-80 h-32 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="max-w-2xl mx-auto space-y-4 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold">
                  <Globe className="w-3.5 h-3.5" />
                  <span>Interactive Proof Directory · 30 Documented Experiences</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                  Browse All 30 Customer Experiences
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  Looking for detailed breakdowns in your exact industry? Click below to unhide the full interactive proof directory with search and category filters across e-commerce, digital agencies, creators, and technology startups.
                </p>

                {/* Industry Breakdown Quick Chips */}
                <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                  <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                    🛒 {categoryCounts.ecommerce} E-Commerce Cases
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                    💼 {categoryCounts.agency} Agency Proofs
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                    🎙️ {categoryCounts.creator} Creator Workflows
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                    ⚡ {categoryCounts.startup} Tech Startups
                  </span>
                </div>

                {/* Unhide / Show Button */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => setIsWallExpanded(true)}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer font-display"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Unhide All 30 Customer Experiences</span>
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Unhidden / Expanded Interactive Customer Wall */
            <div className="animate-in fade-in duration-300">
              {/* Header with Title, Search, and Hide Button */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                <div>
                  <div className="flex items-center gap-2.5">
                    <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 font-mono flex items-center gap-1.5">
                      <Globe className="w-4 h-4" />
                      <span>The Global Wall of Social Proof</span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold">
                      Active
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-2 font-display">
                    Browse All 30 Customer Experiences
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">
                    Filter by industry or search by software name (Mailchimp, Hostinger, Fomo, Wati, UptimeRobot, Bitly).
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  {/* Hide Section Button */}
                  <button
                    onClick={() => {
                      setIsWallExpanded(false);
                      const el = document.getElementById('customer-experiences-wall');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-xs font-semibold text-slate-200 hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <EyeOff className="w-4 h-4 text-emerald-400" />
                    <span>Hide Section</span>
                    <ChevronUp className="w-4 h-4" />
                  </button>

                  {/* Live Search Input */}
                  <div className="relative w-full sm:w-64">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search reviews or tools..."
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/60 transition-colors"
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
                </div>
              </div>

              {/* Category Tabs */}
              <div className="flex flex-wrap items-center gap-2 mb-8">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    activeCategory === 'all'
                      ? 'bg-emerald-400 text-slate-950 shadow-md font-bold'
                      : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
                  }`}
                >
                  All Stories ({categoryCounts.all})
                </button>
                <button
                  onClick={() => setActiveCategory('ecommerce')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    activeCategory === 'ecommerce'
                      ? 'bg-emerald-400 text-slate-950 shadow-md font-bold'
                      : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
                  }`}
                >
                  E-Commerce &amp; DTC ({categoryCounts.ecommerce})
                </button>
                <button
                  onClick={() => setActiveCategory('agency')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    activeCategory === 'agency'
                      ? 'bg-emerald-400 text-slate-950 shadow-md font-bold'
                      : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
                  }`}
                >
                  Agencies &amp; Media ({categoryCounts.agency})
                </button>
                <button
                  onClick={() => setActiveCategory('creator')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    activeCategory === 'creator'
                      ? 'bg-emerald-400 text-slate-950 shadow-md font-bold'
                      : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
                  }`}
                >
                  Creators &amp; Coaches ({categoryCounts.creator})
                </button>
                <button
                  onClick={() => setActiveCategory('startup')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    activeCategory === 'startup'
                      ? 'bg-emerald-400 text-slate-950 shadow-md font-bold'
                      : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
                  }`}
                >
                  Startups &amp; Tech ({categoryCounts.startup})
                </button>
              </div>

              {/* Social Proof Cards Grid */}
              {filteredSocialProofs.length === 0 ? (
                <div className="p-12 text-center rounded-2xl bg-slate-900/40 border border-slate-800 text-slate-400">
                  <Search className="w-8 h-8 mx-auto text-slate-600 mb-3" />
                  <p className="text-base font-semibold text-slate-300">No customer stories matching "{searchQuery}"</p>
                  <button
                    onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                    className="mt-3 text-xs text-emerald-400 underline font-mono cursor-pointer"
                  >
                    Reset all filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {visibleProofs.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-2xl bg-slate-900/80 border border-slate-800/90 p-5 sm:p-6 flex flex-col justify-between hover:border-slate-700 transition-all duration-200 group hover:shadow-xl hover:shadow-black/40"
                    >
                      <div className="space-y-3.5">
                        {/* Top Row: Avatar, Name, Country Flag, Rating */}
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <div className={`w-11 h-11 rounded-xl bg-gradient-to-tr ${item.avatarBg} border border-white/10 flex items-center justify-center font-bold text-sm shrink-0`}>
                              {item.avatarText}
                            </div>
                            <div className="min-w-0">
                              <div className="text-sm font-bold text-white font-display flex items-center gap-1.5 truncate">
                                <span className="truncate">{item.name}</span>
                                <span title={item.country}>{item.countryFlag}</span>
                              </div>
                              <div className="text-[11px] text-slate-400 truncate">
                                {item.role} · <span className="text-slate-300">{item.company}</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center text-amber-400 shrink-0">
                            {Array.from({ length: item.rating }).map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                        </div>

                        {/* Metric Badge */}
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono font-semibold">
                          <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{item.highlightMetric}</span>
                          <span className="text-slate-400 text-[10px]">({item.metricLabel})</span>
                        </div>

                        {/* Headline */}
                        <h4 className="text-sm sm:text-base font-bold text-slate-100 font-display leading-snug group-hover:text-emerald-300 transition-colors">
                          "{item.headline}"
                        </h4>

                        {/* Quote */}
                        <p className="text-xs text-slate-300 leading-relaxed italic">
                          "{item.quote}"
                        </p>
                      </div>

                      {/* Bottom Footer: Tools used & Plan */}
                      <div className="mt-5 pt-3.5 border-t border-slate-800/80 flex items-center justify-between gap-2 text-xs">
                        <div className="flex items-center gap-1.5">
                          {item.toolsUsed.map((toolId) => (
                            <div key={toolId} className="w-4 h-4" title={toolId}>
                              {getSoftwareLogo(toolId, 'w-4 h-4')}
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-400">
                            {item.plan}
                          </span>
                          <span className="text-[10px] font-mono font-bold text-emerald-400">
                            Saved {item.annualCashSaved}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Bottom Action Bar: Hide Wall, View All/Initial 20, and Checkout */}
              <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      setIsWallExpanded(false);
                      const el = document.getElementById('customer-experiences-wall');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-xs font-semibold text-slate-200 hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <EyeOff className="w-4 h-4 text-emerald-400" />
                    <span>Hide Customer Experiences</span>
                    <ChevronUp className="w-4 h-4" />
                  </button>

                  {filteredSocialProofs.length > 20 && (
                    visibleCount < filteredSocialProofs.length ? (
                      <button
                        onClick={() => setVisibleCount(filteredSocialProofs.length)}
                        className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-bold text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                      >
                        <span>View All {filteredSocialProofs.length} Proofs</span>
                        <ChevronDown className="w-4 h-4 text-emerald-400" />
                      </button>
                    ) : (
                      <button
                        onClick={() => setVisibleCount(20)}
                        className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-bold text-slate-300 hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Show Initial 20</span>
                        <ChevronUp className="w-4 h-4 text-emerald-400" />
                      </button>
                    )
                  )}
                </div>

                <button
                  onClick={() => onOpenCheckout('bundle')}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-xs font-bold text-slate-950 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/20 font-display"
                >
                  <span>Join These 30+ Businesses for $40/mo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </section>
  );
};
