import React, { useState } from 'react';
import { 
  SlidersHorizontal, CheckCircle2, Clock, DollarSign, 
  TrendingUp, Calendar, ArrowRight, ShieldCheck, Sparkles 
} from 'lucide-react';
import { MONTHLY_SAVINGS, ANNUAL_SAVINGS, BUNDLE_PRICE, TOTAL_STANDALONE_PRICE } from '../data/softwareData';

interface PersonalizedPlanBuilderProps {
  onOpenCheckout: (plan?: string) => void;
}

export const PersonalizedPlanBuilder: React.FC<PersonalizedPlanBuilderProps> = ({ onOpenCheckout }) => {
  const [businessType, setBusinessType] = useState('ecommerce');
  const [primaryGoal, setPrimaryGoal] = useState('increase-sales');
  const [trafficVolume, setTrafficVolume] = useState('medium');

  // Daily Customer Care & Growth Routines by goal
  const getDailyRoutine = () => {
    switch (primaryGoal) {
      case 'customer-care':
        return [
          { time: '08:30 AM', tool: 'UptimeRobot', action: 'Inspect 24h server response times & ensure zero checkout downtime.' },
          { time: '10:00 AM', tool: 'Wati', action: 'Review overnight incoming WhatsApp messages & train auto-reply bot responses.' },
          { time: '02:00 PM', tool: 'Fomo', action: 'Verify live purchase toasts reflect today’s customer testimonials and order volume.' },
          { time: '05:30 PM', tool: 'Mailchimp', action: 'Dispatch customer satisfaction survey and automated VIP re-order rewards.' },
        ];
      case 'find-customers':
        return [
          { time: '09:00 AM', tool: 'Bitly', action: 'Generate unique branded campaign tracking links for daily social & influencer posts.' },
          { time: '11:30 AM', tool: 'Hostinger', action: 'Deploy high-speed promotional landing page with SSL encryption and LiteSpeed cache.' },
          { time: '03:00 PM', tool: 'Fomo', action: 'Turn on real-time visitor counter to build instant credibility for new incoming traffic.' },
          { time: '06:00 PM', tool: 'Wati', action: 'Broadcast an exclusive flash WhatsApp perk with direct checkout links (98% open rate).' },
        ];
      case 'wealth-growth':
        return [
          { time: '09:00 AM', tool: 'BizzScale Hub', action: 'Review $610/mo saved from consolidated software bills into marketing budget.' },
          { time: '11:00 AM', tool: 'Mailchimp', action: 'Trigger high-margin back-end up-sell sequence to repeat customer lists.' },
          { time: '02:00 PM', tool: 'Bitly & Wati', action: 'Retarget warm prospects who clicked links with direct WhatsApp chat closing.' },
          { time: '05:00 PM', tool: 'UptimeRobot', action: 'Confirm 100% gateway uptime to protect ongoing ad spend ROI.' },
        ];
      default: // increase-sales
        return [
          { time: '09:00 AM', tool: 'UptimeRobot & Hostinger', action: 'Ensure website checkout latency is sub-200ms for peak morning sales.' },
          { time: '11:00 AM', tool: 'Mailchimp', action: 'Send automated personalized product recommendation emails based on past visits.' },
          { time: '02:00 PM', tool: 'Fomo', action: 'Broadcast live social proof notifications showing real-time buyers to undecided shoppers.' },
          { time: '04:30 PM', tool: 'Wati & Bitly', action: 'Recover abandoned carts automatically via WhatsApp message alerts with trackable links.' },
        ];
    }
  };

  const getMultiplier = () => {
    if (trafficVolume === 'low') return 1.5;
    if (trafficVolume === 'medium') return 2.8;
    if (trafficVolume === 'high') return 4.2;
    return 6.0;
  };

  const routineItems = getDailyRoutine();

  return (
    <section id="plan-builder" className="py-20 border-b border-slate-800/80 bg-slate-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 font-mono">
            Custom Blueprint Generator
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 font-display">
            Your Personalized Business Scale &amp; Daily Routine Plan
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Tell us your business focus, and our engine will tailor the exact daily customer care routine and tool deployment sequence to hit your financial milestones.
          </p>
        </div>

        {/* Builder Interactive Controls */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Inputs */}
          <div className="lg:col-span-5 rounded-2xl bg-slate-900 border border-slate-800 p-6 space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-2">
                Step 1: Your Business Model
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'ecommerce', label: 'E-Commerce / Store' },
                  { id: 'affiliate', label: 'Affiliate / Publisher' },
                  { id: 'agency', label: 'Agency / Consultant' },
                  { id: 'creator', label: 'Content / Influencer' },
                  { id: 'coach', label: 'Coaching / Courses' },
                  { id: 'general', label: 'Startup / Other' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setBusinessType(item.id)}
                    className={`p-3 rounded-lg text-left text-xs font-semibold transition-all cursor-pointer ${
                      businessType === item.id
                        ? 'bg-emerald-400 text-slate-950 font-bold shadow-md'
                        : 'bg-slate-950 text-slate-300 hover:text-white border border-slate-800'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-2">
                Step 2: Primary Growth Priority
              </label>
              <div className="space-y-2">
                {[
                  { id: 'increase-sales', title: 'Increase Sales & Conversions', desc: 'Boost checkout rates and cart totals' },
                  { id: 'customer-care', title: 'Daily Customer Care Routines', desc: 'Automate WhatsApp & 24/7 client happiness' },
                  { id: 'find-customers', title: 'Finding & Acquiring Customers', desc: 'Accelerate traffic and lead capture' },
                  { id: 'wealth-growth', title: 'Net Wealth & Overhead Reduction', desc: 'Cut software costs and multiply profit margins' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setPrimaryGoal(item.id)}
                    className={`w-full p-3 rounded-lg text-left text-xs transition-all cursor-pointer ${
                      primaryGoal === item.id
                        ? 'bg-slate-800 border border-emerald-500/80 text-white shadow-sm'
                        : 'bg-slate-950 text-slate-300 hover:text-white border border-slate-800'
                    }`}
                  >
                    <div className="font-bold flex items-center justify-between">
                      <span>{item.title}</span>
                      {primaryGoal === item.id && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      )}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-2">
                Step 3: Audience Scale
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'low', label: '< 5,000 / mo' },
                  { id: 'medium', label: '5k - 30k / mo' },
                  { id: 'high', label: '30k+ / mo' },
                ].map((vol) => (
                  <button
                    key={vol.id}
                    onClick={() => setTrafficVolume(vol.id)}
                    className={`p-2.5 rounded-lg text-center text-xs font-semibold transition-all cursor-pointer ${
                      trafficVolume === vol.id
                        ? 'bg-emerald-400 text-slate-950 font-bold'
                        : 'bg-slate-950 text-slate-300 hover:text-white border border-slate-800'
                    }`}
                  >
                    {vol.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Tailored Plan Output */}
          <div className="lg:col-span-7 rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs uppercase font-mono tracking-wider text-emerald-400">
                  Custom Strategy Generated
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">
                  Daily Execution Blueprint for {businessType.toUpperCase()}
                </h3>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-400">Projected 1-Yr Net Savings</div>
                <div className="text-xl font-extrabold text-emerald-400 font-mono">
                  ${ANNUAL_SAVINGS}
                </div>
              </div>
            </div>

            {/* Daily Routine Schedule */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Your Automated Daily Customer Care &amp; Growth Routine</span>
              </h4>

              <div className="space-y-3">
                {routineItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800 font-mono text-xs font-bold text-emerald-400 shrink-0">
                        {item.time}
                      </span>
                      <div>
                        <div className="text-xs font-semibold text-white">
                          <span className="text-emerald-400">{item.tool}</span>: {item.action}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Financial & ROI Breakdown */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                Financial ROI Impact Calculation
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase">Standalone Expense</div>
                  <div className="text-base font-bold text-rose-400 font-mono line-through">
                    ${TOTAL_STANDALONE_PRICE}/mo
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase">BizzScale Bundle</div>
                  <div className="text-base font-bold text-white font-mono">
                    ${BUNDLE_PRICE}/mo
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/30 col-span-2 sm:col-span-1">
                  <div className="text-[10px] text-emerald-400 uppercase">Monthly Cash Retained</div>
                  <div className="text-base font-extrabold text-emerald-400 font-mono">
                    +${MONTHLY_SAVINGS}/mo
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-300">
                Estimated conversion lift: <span className="text-emerald-400 font-semibold font-mono">+{Math.round(getMultiplier() * 12)}%</span> in 30 days by unifying social proof (Fomo), rapid hosting (Hostinger), WhatsApp automation (Wati), and deliverability (Mailchimp).
              </p>
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <button
                onClick={() => onOpenCheckout('bundle')}
                className="w-full py-3.5 text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Activate This Custom Plan for $40/Month</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="mt-2 text-center text-[11px] text-slate-400">
                Instant access to all 6 applications · 30-day risk-free money-back guarantee
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
