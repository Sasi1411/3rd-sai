import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CloudUpload, Share2, Clock, Mail, 
  MessageCircle, LayoutGrid, ArrowRight, ShieldCheck, Sparkles, Check, Calendar, Zap
} from 'lucide-react';
import { getSoftwareLogo } from './SoftwareBrandLogos';

export interface TierPlan {
  id: 'startup' | 'small' | 'big';
  title: string;
  badge?: string;
  oneYear: {
    priceAmount: string;
    monthlyPriceNum: number;
    billingText: string;
    annualTotalText: string;
    saveNotice: string;
  };
  twoYear: {
    priceAmount: string;
    monthlyPriceNum: number;
    originalPriceText: string;
    saveText: string;
    billingText: string;
    totalSavingsText: string;
  };
  features: {
    name: string;
    toolId: string;
    icon: 'cloud' | 'share' | 'clock' | 'mail' | 'chat' | 'grid';
    iconColor: string;
    limit: string;
  }[];
}

export const TIER_PLANS: TierPlan[] = [
  {
    id: 'startup',
    title: 'STARTUP BUSINESS',
    oneYear: {
      priceAmount: '$60',
      monthlyPriceNum: 60,
      billingText: '$60/month',
      annualTotalText: '$720 / year',
      saveNotice: 'Standard 1-Year Plan',
    },
    twoYear: {
      priceAmount: '$40',
      monthlyPriceNum: 40,
      originalPriceText: '$60',
      saveText: 'Save 32%',
      billingText: 'only $40/month',
      totalSavingsText: 'Saves $480 over 2 years',
    },
    features: [
      {
        name: 'Hostinger',
        toolId: 'hostinger',
        icon: 'cloud',
        iconColor: 'text-cyan-400',
        limit: 'Unlimited SSD Storage & Bandwidth',
      },
      {
        name: 'Fomo',
        toolId: 'fomo',
        icon: 'share',
        iconColor: 'text-indigo-400',
        limit: '3,000 Unique Visitors',
      },
      {
        name: 'Uptime Robot',
        toolId: 'uptimerobot',
        icon: 'clock',
        iconColor: 'text-amber-400',
        limit: '1 WebPage / Tracking',
      },
      {
        name: 'Mailchimp',
        toolId: 'mailchimp',
        icon: 'mail',
        iconColor: 'text-violet-400',
        limit: '3,000 Subscribers',
      },
      {
        name: 'Wati',
        toolId: 'wati',
        icon: 'chat',
        iconColor: 'text-emerald-400',
        limit: '2,000 Subscribers',
      },
      {
        name: 'Bitly',
        toolId: 'bitly',
        icon: 'grid',
        iconColor: 'text-teal-400',
        limit: '1 Project',
      },
    ],
  },
  {
    id: 'small',
    title: 'SMALL BUSINESS',
    badge: 'MOST POPULAR · RECOMMENDED',
    oneYear: {
      priceAmount: '$150',
      monthlyPriceNum: 150,
      billingText: '$150/month',
      annualTotalText: '$1,800 / year',
      saveNotice: 'Standard 1-Year Plan',
    },
    twoYear: {
      priceAmount: '$105',
      monthlyPriceNum: 105,
      originalPriceText: '$150',
      saveText: 'Save 30%',
      billingText: 'only $105/month',
      totalSavingsText: 'Saves $1,080 over 2 years',
    },
    features: [
      {
        name: 'Hostinger',
        toolId: 'hostinger',
        icon: 'cloud',
        iconColor: 'text-cyan-400',
        limit: 'Unlimited Storage & Multi-Site',
      },
      {
        name: 'Fomo',
        toolId: 'fomo',
        icon: 'share',
        iconColor: 'text-indigo-400',
        limit: '10,000 Unique Visitors',
      },
      {
        name: 'Uptime Robot',
        toolId: 'uptimerobot',
        icon: 'clock',
        iconColor: 'text-amber-400',
        limit: '10 WebPage / Tracking',
      },
      {
        name: 'Mailchimp',
        toolId: 'mailchimp',
        icon: 'mail',
        iconColor: 'text-violet-400',
        limit: '10,000 Subscribers',
      },
      {
        name: 'Wati',
        toolId: 'wati',
        icon: 'chat',
        iconColor: 'text-emerald-400',
        limit: '10,000 Subscribers',
      },
      {
        name: 'Bitly',
        toolId: 'bitly',
        icon: 'grid',
        iconColor: 'text-teal-400',
        limit: '20 Projects',
      },
    ],
  },
  {
    id: 'big',
    title: 'BIG BUSINESS',
    badge: 'MAX CAPACITY ENTERPRISE',
    oneYear: {
      priceAmount: '$350',
      monthlyPriceNum: 350,
      billingText: '$350/month',
      annualTotalText: '$4,200 / year',
      saveNotice: 'Standard 1-Year Plan',
    },
    twoYear: {
      priceAmount: '$245',
      monthlyPriceNum: 245,
      originalPriceText: '$350',
      saveText: 'Save 30%',
      billingText: 'only $245/month',
      totalSavingsText: 'Saves $2,520 over 2 years',
    },
    features: [
      {
        name: 'Hostinger',
        toolId: 'hostinger',
        icon: 'cloud',
        iconColor: 'text-cyan-400',
        limit: 'Unlimited Websites, Storage & 80+ Apps',
      },
      {
        name: 'Fomo',
        toolId: 'fomo',
        icon: 'share',
        iconColor: 'text-indigo-400',
        limit: '100,000 Unique Visitors',
      },
      {
        name: 'Uptime Robot',
        toolId: 'uptimerobot',
        icon: 'clock',
        iconColor: 'text-amber-400',
        limit: '1,000 WebPage / Tracking',
      },
      {
        name: 'Mailchimp',
        toolId: 'mailchimp',
        icon: 'mail',
        iconColor: 'text-violet-400',
        limit: '300,000 Subscribers',
      },
      {
        name: 'Wati',
        toolId: 'wati',
        icon: 'chat',
        iconColor: 'text-emerald-400',
        limit: '85,000 Subscribers',
      },
      {
        name: 'Bitly',
        toolId: 'bitly',
        icon: 'grid',
        iconColor: 'text-teal-400',
        limit: '500 Projects',
      },
    ],
  },
];

interface TierPricingCardsProps {
  onOpenCheckout: (plan?: string) => void;
}

export const TierPricingCards: React.FC<TierPricingCardsProps> = ({ onOpenCheckout }) => {
  // Customer can toggle between 1-Year and 2-Year option
  const [duration, setDuration] = useState<'1-year' | '2-year'>('2-year');

  return (
    <div className="w-full">
      {/* Keyframe animations for recommended gold animated highlight */}
      <style>{`
        @keyframes gold-beam-spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes gold-ambient-pulse {
          0%, 100% {
            opacity: 0.45;
            filter: blur(20px);
          }
          50% {
            opacity: 0.85;
            filter: blur(30px);
          }
        }
        .animate-gold-beam {
          animation: gold-beam-spin 4s linear infinite;
        }
        .animate-gold-pulse {
          animation: gold-ambient-pulse 3s ease-in-out infinite;
        }
      `}</style>

      {/* 1-Year vs 2-Year Master Switcher */}
      <div className="flex flex-col items-center justify-center mb-10">
        <div className="inline-flex p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl backdrop-blur-md">
          {/* 1-Year Option Button */}
          <button
            onClick={() => setDuration('1-year')}
            className={`px-5 sm:px-7 py-3 rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
              duration === '1-year'
                ? 'bg-slate-700 text-white shadow-md border border-slate-600 font-extrabold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Calendar className="w-4 h-4 text-slate-200" />
            <span>1-Year Subscription</span>
          </button>

          {/* 2-Year Option Button (Save Money) */}
          <button
            onClick={() => setDuration('2-year')}
            className={`px-5 sm:px-7 py-3 rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
              duration === '2-year'
                ? 'bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/25 ring-2 ring-emerald-300/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>2-Year Subscription</span>
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-black ${
              duration === '2-year'
                ? 'bg-slate-950 text-emerald-300'
                : 'bg-emerald-500/20 text-emerald-300'
            }`}>
              SAVE UP TO 32%
            </span>
          </button>
        </div>

        {/* Dynamic Context Hint */}
        <p className="text-xs text-slate-400 mt-2.5 flex items-center gap-1.5 font-mono">
          {duration === '2-year' ? (
            <>
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-300 font-semibold">2-Year Discount Active:</span>
              <span>Lock in $40/mo, $105/mo, or $245/mo for 24 months and save up to $2,520!</span>
            </>
          ) : (
            <>
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-300 font-semibold">1-Year Standard Option:</span>
              <span>$60, $150, or $350/mo. Switch to 2-Year anytime to save up to 32%.</span>
            </>
          )}
        </p>
      </div>

      {/* 3 Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
        {TIER_PLANS.map((plan, idx) => {
          const isSmall = plan.id === 'small';
          const isBig = plan.id === 'big';
          const isTwoYear = duration === '2-year';
          const planCycleKey = `${plan.id}-${isTwoYear ? '2yr' : '1yr'}`;

          return (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.55,
                delay: idx * 0.12,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className={`rounded-2xl sm:rounded-3xl transition-all duration-300 relative flex flex-col justify-between overflow-hidden shadow-2xl backdrop-blur-xl ${
                isSmall
                  ? 'p-[2.5px] transform lg:-translate-y-3 z-10 shadow-[0_0_55px_rgba(245,158,11,0.3)]'
                  : isBig
                  ? 'bg-gradient-to-b from-[#0e1424]/90 via-[#0a0e1c]/90 to-[#060913]/90 border border-slate-800 hover:border-indigo-500/40 shadow-xl'
                  : 'bg-gradient-to-b from-[#0e1424]/90 via-[#0a0e1c]/90 to-[#060913]/90 border border-slate-800 hover:border-emerald-500/40 shadow-xl'
              }`}
            >
              {/* Animated Gold Aura & Continuous Rotating Laser Beam Highlight */}
              {isSmall && (
                <>
                  {/* Outer breathing golden ambient glow */}
                  <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-amber-500/35 via-yellow-400/40 to-amber-600/35 blur-2xl animate-gold-pulse pointer-events-none -z-10" />

                  {/* Rotating Conic Laser Beam Border (Sweeps smoothly around the card perimeter) */}
                  <div className="absolute -inset-[250%] animate-gold-beam pointer-events-none bg-[conic-gradient(from_0deg_at_50%_50%,#92400e_0deg,#d97706_30deg,#f59e0b_60deg,#fde68a_85deg,#ffffff_90deg,#fde68a_95deg,#f59e0b_120deg,#d97706_150deg,transparent_180deg,#92400e_180deg,#d97706_210deg,#f59e0b_240deg,#fde68a_265deg,#ffffff_270deg,#fde68a_275deg,#f59e0b_300deg,#d97706_330deg,transparent_360deg)]" />
                </>
              )}

              {/* Inner Card Container: For isSmall it masks the center so only the 2.5px gold animated border highlight beam shines */}
              <div className={`flex flex-col justify-between h-full w-full overflow-hidden ${
                isSmall
                  ? 'relative z-10 rounded-[14px] sm:rounded-[22px] bg-gradient-to-b from-[#131b2e] via-[#0d1424] to-[#070b16] border border-amber-300/60 shadow-inner'
                  : ''
              }`}>
                {/* Top Banner Ribbon */}
                {plan.badge && (
                  <div 
                    className={`text-center py-1.5 px-4 text-xs font-bold tracking-wider uppercase font-display shadow-md flex items-center justify-center gap-1.5 ${
                      isSmall
                        ? 'bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 text-slate-950 shadow-amber-500/30'
                        : 'bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 text-white shadow-indigo-500/25'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5 shrink-0" />
                    <span>{plan.badge}</span>
                  </div>
                )}

                {/* Card Content Container */}
                <div className={`p-6 sm:p-8 flex flex-col h-full ${plan.badge ? 'pt-6' : 'pt-8'}`}>
                  {/* Top Plan Title & Tag */}
                  <div className="text-center">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                      {isTwoYear ? '2-Year Savings Deal' : '1-Year Annual Term'}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold tracking-wider text-white uppercase font-display">
                      {plan.title}
                    </h3>
                  </div>

                  {/* In-Card Duration Selector */}
                  <div className="mt-4 flex items-center justify-center gap-2 p-1.5 rounded-xl bg-slate-950/90 border border-slate-800">
                    <button
                      type="button"
                      onClick={() => setDuration('1-year')}
                      className={`flex-1 py-2 px-3 rounded-lg text-sm font-bold transition-all cursor-pointer ${
                        !isTwoYear
                          ? 'bg-slate-700 text-white font-bold shadow-sm border border-slate-600'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      1-Year
                    </button>
                    <button
                      type="button"
                      onClick={() => setDuration('2-year')}
                      className={`flex-1 py-2 px-3 rounded-lg text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                        isTwoYear
                          ? isSmall
                            ? 'bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 text-slate-950 font-black shadow-md shadow-amber-500/20'
                            : 'bg-emerald-400 text-slate-950 font-black shadow-sm'
                          : isSmall
                          ? 'text-slate-400 hover:text-amber-300'
                          : 'text-slate-400 hover:text-emerald-300'
                      }`}
                    >
                      <span>2-Year</span>
                      <span className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded font-black ${
                        isTwoYear 
                          ? isSmall
                            ? 'bg-slate-950 text-amber-300'
                            : 'bg-slate-950 text-white'
                          : 'bg-emerald-500/20 text-white'
                      }`}>
                        {plan.twoYear.saveText}
                      </span>
                    </button>
                  </div>

                  {/* Main Price Headline */}
                  <div className="text-center mt-5 space-y-2">
                    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-mono font-bold shadow-sm ${
                      !isTwoYear
                        ? 'bg-slate-900 border border-slate-600 text-white'
                        : 'bg-slate-800/80 border border-slate-700/80 text-slate-200'
                    }`}>
                      <span>{isTwoYear ? '2-Year Subscription' : '1-Year Subscription'}</span>
                    </div>

                    {/* Dynamic Price Display */}
                    <div className="pt-2 flex items-baseline justify-center gap-1.5">
                      <span className="text-xs uppercase font-mono text-slate-400">Only</span>
                      <span className={`text-4xl sm:text-5xl font-black tracking-tight font-display transition-all ${
                        isSmall 
                          ? 'text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 drop-shadow-[0_2px_12px_rgba(245,158,11,0.35)]' 
                          : 'text-white'
                      }`}>
                        {isTwoYear ? plan.twoYear.priceAmount : plan.oneYear.priceAmount}
                      </span>
                      <span className="text-sm font-medium text-slate-400 font-mono">/month</span>
                    </div>

                    {/* Savings / Strikethrough Row */}
                    <div className="min-h-[32px] flex items-center justify-center">
                      {isTwoYear ? (
                        <div className="flex items-center justify-center gap-2.5 flex-wrap">
                          <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider shadow-sm ${
                            isSmall
                              ? 'bg-amber-500/20 border border-amber-400/60 text-amber-200'
                              : 'bg-emerald-500/25 border border-emerald-400/50 text-white'
                          }`}>
                            {plan.twoYear.saveText}
                          </span>
                          <div className="flex items-baseline gap-1">
                            <span className="text-xl sm:text-2xl font-extrabold text-slate-400 line-through decoration-rose-500/80 decoration-[2.5px] font-mono tracking-tight">
                              {plan.twoYear.originalPriceText}
                            </span>
                            <span className="text-xs sm:text-sm font-medium text-slate-400 font-mono">/Monthly</span>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-2 text-xs text-slate-400 font-mono">
                          <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                            {plan.oneYear.annualTotalText}
                          </span>
                          <button
                            type="button"
                            onClick={() => setDuration('2-year')}
                            className={`${isSmall ? 'text-amber-400 hover:text-amber-300' : 'text-emerald-400 hover:text-emerald-300'} hover:underline cursor-pointer flex items-center gap-0.5`}
                          >
                            <span>Save {plan.twoYear.saveText} on 2-Year</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Total Savings Callout */}
                    {isTwoYear && (
                      <div className={`text-[11px] font-mono font-medium ${
                        isSmall ? 'text-amber-300' : 'text-emerald-300'
                      }`}>
                        💰 {plan.twoYear.totalSavingsText}
                      </div>
                    )}
                  </div>

                  {/* Buy Now Button */}
                  <div className="mt-6">
                    <button
                      onClick={() => onOpenCheckout(planCycleKey)}
                      className={`w-full py-3.5 px-6 rounded-xl font-black text-sm sm:text-base active:scale-[0.98] transition-all duration-200 shadow-md hover:shadow-2xl flex items-center justify-center gap-2 cursor-pointer font-display ${
                        isSmall
                          ? 'text-slate-950 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 hover:from-amber-300 hover:to-yellow-200 shadow-amber-500/30 ring-2 ring-amber-300/50 hover:ring-amber-200'
                          : 'text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-emerald-500/50 hover:text-emerald-300'
                      }`}
                    >
                      <span>
                        {isTwoYear 
                          ? `Choose 2-Year (${plan.twoYear.priceAmount}/mo)` 
                          : `Choose 1-Year (${plan.oneYear.priceAmount}/mo)`}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Divider */}
                  <div className={`w-full h-px my-7 ${isSmall ? 'bg-amber-400/20' : 'bg-slate-800/80'}`} />

                  {/* Features & Quota List */}
                  <div className="space-y-4 flex-1">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                      Included Enterprise Quotas:
                    </div>

                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex flex-col group/item">
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-950 border flex items-center justify-center shrink-0 group-hover/item:scale-105 transition-all p-1 shadow-sm ${
                            isSmall ? 'border-amber-400/30 group-hover/item:border-amber-400/60' : 'border-slate-800 group-hover/item:border-slate-700'
                          }`}>
                            {getSoftwareLogo(feature.toolId, 'w-6 h-6 sm:w-7 sm:h-7')}
                          </div>
                          <span className={`font-bold text-base sm:text-lg text-slate-100 font-display transition-colors ${
                            isSmall ? 'group-hover/item:text-amber-300' : 'group-hover/item:text-emerald-300'
                          }`}>
                            {feature.name}
                          </span>
                          
                          {/* Live indicator dot (gold when recommended tier) */}
                          <span className="relative flex h-2 w-2 ml-1" title="Live Enterprise Quota">
                            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                              isSmall ? 'bg-amber-400' : 'bg-emerald-400'
                            }`}></span>
                            <span className={`relative inline-flex rounded-full h-2 w-2 ${
                              isSmall ? 'bg-amber-400' : 'bg-emerald-400'
                            }`}></span>
                          </span>
                        </div>
                        
                        <div className="pl-12 sm:pl-13 text-xs sm:text-sm font-mono text-slate-400 group-hover/item:text-slate-300 transition-colors">
                          {feature.limit}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Trust Note */}
                  <div className={`mt-8 pt-4 border-t text-center ${isSmall ? 'border-amber-400/20' : 'border-slate-800/80'}`}>
                    <div className="flex items-center justify-center gap-1.5 text-[11px] font-medium text-slate-400 font-mono">
                      <ShieldCheck className={`w-3.5 h-3.5 shrink-0 ${isSmall ? 'text-amber-400' : 'text-emerald-400'}`} />
                      <span>Instant activation · 30-day money-back</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
