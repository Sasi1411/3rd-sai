import React, { useState } from 'react';
import { 
  Check, X, ShieldCheck, Zap, ArrowRight, HelpCircle, 
  Sparkles, DollarSign, Calendar, RefreshCw 
} from 'lucide-react';
import { 
  SOFTWARE_LIST, TOTAL_STANDALONE_PRICE, BUNDLE_PRICE, 
  MONTHLY_SAVINGS, ANNUAL_SAVINGS, DISCOUNT_PERCENT 
} from '../data/softwareData';
import { getSoftwareLogo } from './SoftwareBrandLogos';
import { RoiCalculator } from './RoiCalculator';
import { TierPricingCards } from './TierPricingCards';

interface PricingSectionProps {
  onOpenCheckout: (plan?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenCheckout }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'two-year'>('two-year');

  const pricePerMonth = billingCycle === 'two-year' ? 40 : 60;

  return (
    <section id="plans" className="py-20 border-b border-slate-800/80 bg-[#090D16] relative scroll-mt-20">
      <div id="pricing" className="sr-only">Pricing Section</div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header for 3 Tier Plans */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Multi-Year Growth Plans</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3 font-display">
            Choose Your Scalable Business Tier
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Choose between flexible 1-year and high-savings 2-year subscriptions. Lock in our 2-year deals to save up to 32% across Hostinger, Fomo, Uptime Robot, Mailchimp, Wati, and Bitly.
          </p>
        </div>

        {/* 3 Tier Pricing Cards from Screenshot */}
        <TierPricingCards onOpenCheckout={onOpenCheckout} />

        {/* Mid-Section Header & Cost Comparison */}
        <div className="text-center max-w-3xl mx-auto mt-24">
          <p className="text-base text-slate-300">
            Stop giving away $7,800/year to six different billing departments. Get unmetered, unified access under one streamlined membership.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-xl bg-slate-900 border border-slate-800">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-emerald-400 text-slate-950 shadow-md font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Standard Monthly ($60/mo)
            </button>
            <button
              onClick={() => setBillingCycle('two-year')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                billingCycle === 'two-year'
                  ? 'bg-emerald-400 text-slate-950 shadow-md font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>2-Year Plan (Only $40/mo)</span>
              <span className={`text-[10px] uppercase font-mono px-1.5 py-0.5 rounded font-bold ${
                billingCycle === 'two-year' ? 'bg-slate-950 text-white' : 'bg-emerald-500/20 text-white'
              }`}>
                Save 32%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Comparison (Separate vs Bundle) */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Card 1: Buying Separately (The Hard Way) */}
          <div className="lg:col-span-5 rounded-2xl bg-slate-950/70 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs sm:text-sm uppercase font-mono tracking-wider text-rose-400 font-semibold">
                Traditional Route
              </div>
              <h3 className="text-2xl font-bold text-white mt-1 font-display">Buying Separately</h3>
              <p className="text-sm text-slate-300 mt-1">
                Purchasing individual subscriptions from each vendor
              </p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-5xl font-extrabold text-rose-400 font-mono">
                  ${TOTAL_STANDALONE_PRICE}
                </span>
                <span className="text-sm text-slate-300 font-medium font-mono">/ month ($7,800/yr)</span>
              </div>

              {/* Breakdown List */}
              <div className="mt-6 space-y-3.5 pt-6 border-t border-slate-800">
                {SOFTWARE_LIST.map((app) => (
                  <div key={app.id} className="flex items-center justify-between text-sm sm:text-base">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                        {getSoftwareLogo(app.id, 'w-5 h-5')}
                      </div>
                      <span className="text-slate-200 font-semibold">{app.name}</span>
                    </div>
                    <span className="text-rose-400 font-mono font-bold">
                      ${app.standalonePrice}/mo
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800 space-y-3 text-sm text-rose-200">
                <div className="flex items-center gap-2.5">
                  <X className="w-5 h-5 text-rose-400 shrink-0" />
                  <span>6 separate login credentials &amp; invoices</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <X className="w-5 h-5 text-rose-400 shrink-0" />
                  <span>Hidden usage tier surcharges</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <X className="w-5 h-5 text-rose-400 shrink-0" />
                  <span>Expensive multi-agent seat upgrades</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 text-center text-xs sm:text-sm text-slate-400 font-medium">
              Not recommended for growing businesses
            </div>
          </div>

          {/* Card 2: BizzScale 6-in-1 Bundle (Recommended) */}
          <div className="lg:col-span-7 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-emerald-400 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative">
            {/* Ribbon */}
            <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md">
              Most Popular · {DISCOUNT_PERCENT}% Off
            </div>

            <div>
              <div className="text-xs sm:text-sm uppercase font-mono tracking-wider text-emerald-400 flex items-center gap-1.5 font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>All-Inclusive Membership</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1 font-display">
                BizzScale 6 Powerhouse Bundle
              </h3>
              <p className="text-sm text-slate-300 mt-1">
                Unlimited access to all 6 applications with zero feature restrictions
              </p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-5xl sm:text-6xl font-black text-white font-mono">
                  ${pricePerMonth}
                </span>
                <span className="text-sm sm:text-base font-semibold text-emerald-400 font-mono">
                  / month {billingCycle === 'two-year' ? '(2-Year Subscription)' : '(Standard Monthly)'}
                </span>
                <span className="text-sm text-slate-400 line-through font-mono ml-2">
                  {billingCycle === 'two-year' ? '$60/mo' : `$${TOTAL_STANDALONE_PRICE}/mo`}
                </span>
              </div>

              <div className="mt-6 space-y-3.5 pt-6 border-t border-slate-800 text-sm sm:text-base text-slate-200 leading-relaxed">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Mailchimp:</strong> Unlimited subscriber lists, behavioral drip automations &amp; AI templates.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Hostinger:</strong> SSD Hosting with unlimited storage &amp; bandwidth, host unlimited websites, complimentary CDN, free SSL &amp; 1-click apps (WordPress, Joomla, OpenCart, Drupal + 80 apps).
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Fomo:</strong> Live buyer social proof notifications &amp; dynamic trust widgets.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Wati:</strong> WhatsApp, Telegram, FB &amp; IG chatbots, Telegram/WhatsApp eCommerce stores &amp; Shopify webhooks.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">UptimeRobot:</strong> 60-second multi-node downtime monitoring with SMS &amp; WhatsApp alerts.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Bitly:</strong> Branded short URLs, dynamic QR codes &amp; high-converting link-in-bio pages.
                  </span>
                </div>
                <div className="flex items-start gap-3 pt-3 border-t border-slate-800">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="font-semibold text-emerald-300">
                    VIP 1-on-1 Onboarding Call &amp; Customer Care Routine Templates included free.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <button
                onClick={() => onOpenCheckout(billingCycle)}
                className="w-full py-4 text-base font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 rounded-xl transition-all shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Unlock Unlimited Access for ${pricePerMonth}/mo</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="flex items-center justify-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400">
                  <ShieldCheck className="w-4 h-4" /> 30-Day Money-Back Guarantee
                </span>
                <span>·</span>
                <span>Cancel Anytime</span>
                <span>·</span>
                <span>No Feature Restrictions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic ROI Calculator with Recharts Bar Chart & Software Toggles */}
        <RoiCalculator 
          onOpenCheckout={onOpenCheckout} 
          billingCycle={billingCycle} 
        />
      </div>
    </section>
  );
};
