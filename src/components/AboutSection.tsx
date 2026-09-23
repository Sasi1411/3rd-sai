import React from 'react';
import { Target, HeartHandshake, TrendingUp, Users, ShieldAlert, Award } from 'lucide-react';
import { TOTAL_STANDALONE_PRICE, BUNDLE_PRICE, MONTHLY_SAVINGS, ANNUAL_SAVINGS } from '../data/softwareData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 border-b border-slate-800/80 bg-slate-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 font-mono">
            About Our Mission
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 font-display">
            Built for Business Owners Who Refuse to Overpay for Growth
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Running a modern, high-revenue company shouldn't require managing six different invoices, logging into fragmented dashboards, or forfeiting <span className="text-rose-400 font-semibold font-mono">${TOTAL_STANDALONE_PRICE}/month</span> in SaaS subscription lock-ins.
          </p>
        </div>

        {/* Story & Problem / Solution Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-7 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">The Fragmented SaaS Trap</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              When business owners buy Mailchimp ($162), Hostinger ($9), Fomo ($50), Wati ($314), UptimeRobot ($80), and Bitly ($35) individually, they pay <span className="font-semibold text-rose-300">$650 every single month</span>. Small teams end up burning $7,800/year just to keep basic tools running.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-7 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Our Unified Solution</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              We consolidated and negotiated enterprise bulk access to bring the exact same full-featured versions of all 6 applications into one single subscription for just <span className="font-semibold text-emerald-300 font-mono">${BUNDLE_PRICE}/month</span>. No locked tiers, no hidden add-ons.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-7 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">The Wealth Growth Impact</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              By pocketing <span className="font-semibold text-white font-mono">${MONTHLY_SAVINGS}/month</span> (${ANNUAL_SAVINGS}/year in direct cash savings), entrepreneurs reinvest their capital directly into customer acquisition, product development, and net business wealth.
            </p>
          </div>
        </div>

        {/* 4 Pillars of Daily Business Operation */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900 border border-slate-800 p-6 sm:p-10">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-white font-display">
              How BizzScale Transforms Your Daily Operations
            </h3>
            <p className="text-sm text-slate-300 mt-2">
              The 6 software work in harmony to streamline your day from morning routines to evening conversions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-emerald-400" />
                <h4 className="font-bold text-white text-sm">Organize Business Goals</h4>
              </div>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Connect your conversion funnels, domains, and messaging into one clear roadmap with measurable KPIs.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
              <div className="flex items-center gap-3">
                <HeartHandshake className="w-5 h-5 text-teal-400" />
                <h4 className="font-bold text-white text-sm">Customer Care Routines</h4>
              </div>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Automate instant 24/7 WhatsApp customer support, scheduled email onboarding, and proactive service checks.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-blue-400" />
                <h4 className="font-bold text-white text-sm">Finding &amp; Closing Customers</h4>
              </div>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Turn traffic into warm prospects using Fomo social proof, trackable Bitly links, and targeted email broadcasts.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-amber-400" />
                <h4 className="font-bold text-white text-sm">Sustainable Wealth Growth</h4>
              </div>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Stop leaking cash on overlapping software bills and channel savings into scalable revenue-producing assets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
