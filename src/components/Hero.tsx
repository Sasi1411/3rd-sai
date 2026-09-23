import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, TrendingUp, Sparkles, Star, Play, Compass, Flame, Clock } from 'lucide-react';
import { SOFTWARE_LIST, TOTAL_STANDALONE_PRICE, BUNDLE_PRICE, MONTHLY_SAVINGS, DISCOUNT_PERCENT } from '../data/softwareData';
import { getSoftwareLogo } from './SoftwareBrandLogos';
import { useLanguage } from '../context/LanguageContext';
import { CircularSoftwareSynergy } from './CircularSoftwareSynergy';

interface HeroProps {
  onOpenCheckout: (plan?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCheckout }) => {
  const [activeAppIndex, setActiveAppIndex] = useState(0);
  const activeApp = SOFTWARE_LIST[activeAppIndex];
  const { currentLanguage } = useLanguage();
  const t = currentLanguage.translations;

  // Normalized mouse coordinates (-1 to 1) for physics-based parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for fluid, physics-based lag without abrupt jumps
  const springConfig = { damping: 28, stiffness: 60, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Parallax layers with distinct depths & subtle opposing counter-motions
  // 1. Center emerald/teal ambient glow
  const glowX = useTransform(smoothX, [-1, 1], [-25, 25]);
  const glowY = useTransform(smoothY, [-1, 1], [-20, 20]);

  // 2. Deep Left indigo orb (opposing lateral motion for optical depth)
  const orbLeftX = useTransform(smoothX, [-1, 1], [35, -35]);
  const orbLeftY = useTransform(smoothY, [-1, 1], [25, -25]);

  // 3. Dynamic Right emerald orb
  const orbRightX = useTransform(smoothX, [-1, 1], [-45, 45]);
  const orbRightY = useTransform(smoothY, [-1, 1], [-30, 30]);

  // 4. Floating cyan core flare
  const flareX = useTransform(smoothX, [-1, 1], [20, -20]);
  const flareY = useTransform(smoothY, [-1, 1], [30, -30]);

  // 5. Tech background grid (subtle micro-movement)
  const gridX = useTransform(smoothX, [-1, 1], [-8, 8]);
  const gridY = useTransform(smoothY, [-1, 1], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    // Map normalized value to -1 .. 1
    mouseX.set((x - 0.5) * 2);
    mouseY.set((y - 0.5) * 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      id="home" 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative pt-8 sm:pt-16 pb-24 overflow-hidden"
    >
      {/* Subtle Gradient Shapes & Ambient Lighting with Mouse Parallax */}
      <motion.div 
        aria-hidden="true" 
        style={{ x: glowX, y: glowY }}
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[520px] bg-gradient-to-b from-emerald-500/18 via-teal-500/12 to-transparent rounded-full blur-[140px] pointer-events-none -z-10 will-change-transform" 
      />
      <motion.div 
        aria-hidden="true" 
        style={{ x: orbLeftX, y: orbLeftY }}
        className="absolute top-20 -left-40 w-[550px] h-[550px] bg-indigo-600/12 rounded-full blur-[160px] pointer-events-none -z-10 will-change-transform" 
      />
      <motion.div 
        aria-hidden="true" 
        style={{ x: orbRightX, y: orbRightY }}
        className="absolute top-48 -right-40 w-[600px] h-[600px] bg-emerald-600/12 rounded-full blur-[160px] pointer-events-none -z-10 will-change-transform" 
      />
      <motion.div 
        aria-hidden="true" 
        style={{ x: flareX, y: flareY }}
        className="absolute top-1/4 left-1/3 w-[380px] h-[380px] bg-cyan-500/8 rounded-full blur-[130px] pointer-events-none -z-10 will-change-transform" 
      />

      {/* Subtle background tech grid with micro-parallax */}
      <motion.div 
        aria-hidden="true"
        style={{ x: gridX, y: gridY }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10 will-change-transform"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Editorial Top Badge with glass backdrop */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.15)] group hover:border-emerald-400/50 transition-colors">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-semibold text-emerald-400 tracking-wide font-mono uppercase">
              {t?.heroBadge || 'AI Life & Business Architecture Suite'}
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-xs text-slate-300 font-medium hidden sm:inline">
              Zero Feature Restrictions
            </span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-xs font-mono font-bold text-teal-300">
              Save 94% Monthly
            </span>
          </div>
        </div>

        {/* Large Bold Headline & Framing */}
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] font-display">
            {t?.heroTitle || (
              <>
                World’s Most Powerful{' '}
                <span className="relative inline-block whitespace-nowrap">
                  <span className="relative z-10 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                    AI Life &amp; Business
                  </span>
                  <span 
                    aria-hidden="true" 
                    className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-3 bg-emerald-500/20 blur-sm rounded-full -z-0"
                  />
                </span>{' '}
                Scaling Application
              </>
            )}
          </h1>

          <p className="mt-7 text-lg sm:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal font-sans">
            Unlock unlimited, unrestricted access to all 6 enterprise-grade applications: <span className="text-white font-semibold">Mailchimp</span>, <span className="text-white font-semibold">Hostinger</span>, <span className="text-white font-semibold">Fomo</span>, <span className="text-white font-semibold">Wati</span>, <span className="text-white font-semibold">UptimeRobot</span>, and <span className="text-white font-semibold">Bitly</span>. Zero feature restrictions. Only{' '}
            <span className="text-emerald-400 font-bold underline decoration-emerald-500/40 decoration-2 underline-offset-4">
              $40/month
            </span>{' '}
            instead of <span className="text-rose-400 font-semibold line-through decoration-rose-500/80">$650/month</span> separately.
          </p>

          {/* Animated Circular Software Synergy "Boost the Business" Graphic */}
          <CircularSoftwareSynergy onOpenCheckout={onOpenCheckout} />

          {/* Pricing Highlight Glass Card */}
          <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-slate-950/90 border border-white/[0.08] backdrop-blur-xl max-w-3xl mx-auto shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden group">
            {/* Subtle inner card sheen */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-teal-500/5 pointer-events-none" />

            <div className="text-left w-full sm:w-auto">
              <div className="text-xs uppercase font-mono tracking-wider text-slate-400 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-rose-400" />
                Standalone Invoice Cost
              </div>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl font-extrabold line-through text-rose-400/80 font-mono">
                  ${TOTAL_STANDALONE_PRICE}
                </span>
                <span className="text-xs text-slate-400">/mo for 6 separate tools</span>
              </div>
            </div>

            <div className="h-10 w-px bg-white/[0.08] hidden sm:block" />

            <div className="text-left w-full sm:w-auto">
              <div className="text-xs uppercase font-mono tracking-wider text-emerald-400 flex items-center gap-1.5 font-bold">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                All-In-One Unified Suite
              </div>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-4xl font-extrabold text-white font-mono tracking-tight">
                  ${BUNDLE_PRICE}
                </span>
                <span className="text-sm font-bold text-emerald-400">
                  /month ({DISCOUNT_PERCENT}% OFF)
                </span>
              </div>
            </div>

            {/* Modern Premium Call-to-Action Button & Plan Link */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => onOpenCheckout('startup')}
                className="w-full sm:w-auto relative group/btn overflow-hidden px-8 py-4 rounded-xl text-sm font-extrabold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-300 bg-[length:200%_auto] hover:bg-[position:right_center] transition-all duration-300 shadow-[0_0_30px_rgba(52,211,153,0.35)] hover:shadow-[0_0_40px_rgba(52,211,153,0.6)] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer shrink-0 font-display"
              >
                {/* Button shimmer reflection */}
                <span className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 group-hover/btn:left-[100%] transition-all duration-1000 ease-out" />
                <span className="relative z-10">{t?.ctaPrimary || 'Claim 2-Year Plan for $40/mo'}</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
              </button>
              <a
                href="#plans"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl border border-white/[0.15] hover:border-amber-400/50 bg-slate-900/80 hover:bg-slate-800 text-xs sm:text-sm font-bold text-slate-200 hover:text-white transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer font-display"
              >
                <span>View All 3 Plans</span>
              </a>
            </div>
          </div>

          {/* Quick Trust Badges Strip */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-300 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Save ${MONTHLY_SAVINGS}/month guaranteed</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Full feature unlock &amp; unrestricted API</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span>Instant provisioning in 2 minutes</span>
            </div>
          </div>
        </div>

        {/* Liquid Glass Interactive Command Center Preview */}
        <div id="features" className="mt-14 max-w-5xl mx-auto rounded-3xl bg-slate-900/60 border border-white/[0.08] p-3 sm:p-6 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] relative">
          {/* Top Status Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/[0.06]">
            <div>
              <span className="text-xs uppercase tracking-wider text-emerald-400 font-mono font-semibold flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" />
                Interactive Command Center
              </span>
              <h2 className="text-xl font-bold text-white mt-0.5 font-display">
                6 Industry-Standard Engines Synchronized Under One Dashboard
              </h2>
            </div>
            <div className="text-xs font-mono flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/70 border border-emerald-500/20 text-emerald-300 self-start md:self-auto">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
              <span>All 6 Engines Synchronized &amp; Ready</span>
            </div>
          </div>

          {/* Segmented App Selector Tabs with liquid glass buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mt-5">
            {SOFTWARE_LIST.map((app, idx) => {
              const isSelected = idx === activeAppIndex;
              return (
                <button
                  key={app.id}
                  onClick={() => setActiveAppIndex(idx)}
                  className={`flex items-center gap-2.5 p-3 rounded-xl text-left transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-slate-800/90 border border-emerald-400/60 shadow-[0_0_20px_rgba(16,185,129,0.2)] ring-1 ring-emerald-400/40'
                      : 'bg-slate-950/50 border border-white/[0.05] hover:bg-slate-800/40 hover:border-white/[0.1]'
                  }`}
                >
                  <div className="shrink-0">{getSoftwareLogo(app.id, 'w-6 h-6')}</div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-white truncate">{app.name}</div>
                    <div className="text-[10px] text-slate-400 line-through font-mono">${app.standalonePrice}/mo</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active App Live Interactive Simulation Preview */}
          <div className="mt-6 rounded-2xl bg-slate-950/80 border border-white/[0.08] p-5 sm:p-7 backdrop-blur-xl">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 font-mono">
                    {activeApp.category}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="text-slate-400">Normal Price: ${activeApp.standalonePrice}/month</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2 font-display">
                  {activeApp.name}: {activeApp.tagline}
                </h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed font-sans">
                  {activeApp.description}
                </p>

                <div className="mt-6 space-y-2.5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
                    Key Capabilities Included Without Restrictions:
                  </div>
                  <div className="grid sm:grid-cols-2 gap-2 text-xs text-slate-200">
                    {activeApp.coreFeatures.slice(0, 4).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 p-1.5 rounded-lg bg-white/[0.02]">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 p-3.5 rounded-xl bg-slate-900/90 border border-emerald-500/20 text-xs text-slate-300 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-white">Daily Routine &amp; Life Impact: </span>
                    <span className="text-slate-300">{activeApp.routineTask}</span>
                  </div>
                </div>
              </div>

              {/* Dynamic Interactive Card Simulation */}
              <div className="w-full lg:w-80 shrink-0 rounded-2xl bg-slate-900/80 border border-white/[0.08] p-5 shadow-xl">
                <div className="flex items-center justify-between text-xs pb-3 border-b border-white/[0.06]">
                  <span className="font-mono text-slate-400">Live Simulated Feed</span>
                  <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Active Feed
                  </span>
                </div>

                {activeApp.id === 'mailchimp' && (
                  <div className="mt-4 space-y-3">
                    <div className="p-3.5 rounded-xl bg-slate-950/80 border border-white/[0.06]">
                      <div className="text-[11px] text-slate-400">Active Audience</div>
                      <div className="text-xl font-bold text-white font-mono mt-0.5">34,820 Leads</div>
                      <div className="text-[10px] text-emerald-400 mt-0.5">+482 new subscribers today</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-950/80 border border-white/[0.06]">
                      <div className="text-[11px] text-slate-400">Campaign Open Rate</div>
                      <div className="text-xl font-bold text-amber-400 font-mono mt-0.5">42.8%</div>
                      <div className="text-[10px] text-slate-400">Industry avg: 18.2%</div>
                    </div>
                  </div>
                )}

                {activeApp.id === 'hostinger' && (
                  <div className="mt-4 space-y-3">
                    <div className="p-3.5 rounded-xl bg-slate-950/80 border border-white/[0.06]">
                      <div className="flex items-center justify-between text-[11px] text-slate-400">
                        <span>SSD Hosting &amp; Bandwidth</span>
                        <span className="text-[10px] text-purple-400 font-mono">Single Plan</span>
                      </div>
                      <div className="text-xl font-bold text-purple-400 font-mono mt-0.5">Unlimited Storage &amp; Bandwidth</div>
                      <div className="text-[10px] text-emerald-400 mt-0.5">Host unlimited websites with ample space &amp; seamless data transfer</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-950/80 border border-white/[0.06]">
                      <div className="flex items-center justify-between text-[11px] text-slate-400">
                        <span>Robust US Servers &amp; Complimentary CDN</span>
                        <span className="text-[10px] text-emerald-400 font-mono">84 ms</span>
                      </div>
                      <div className="text-sm font-bold text-white font-mono mt-0.5">1-Click: WordPress, Joomla, OpenCart, Drupal</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">80+ Free Apps · Free SSL &amp; Email · Routine Malware Scans · 24/7 WP Support</div>
                    </div>
                  </div>
                )}

                {activeApp.id === 'fomo' && (
                  <div className="mt-4 space-y-3">
                    <div className="p-3.5 rounded-xl bg-slate-950/80 border border-white/[0.06]">
                      <div className="text-[11px] text-slate-400">Recent Buyer Notification</div>
                      <div className="text-xs font-semibold text-white mt-1">
                        "David from Chicago purchased 3 mins ago"
                      </div>
                      <div className="text-[10px] text-orange-400 mt-0.5">Verified transaction alert</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-950/80 border border-white/[0.06]">
                      <div className="text-[11px] text-slate-400">Conversion Rate Lift</div>
                      <div className="text-xl font-bold text-orange-400 font-mono mt-0.5">+29.4%</div>
                      <div className="text-[10px] text-slate-400">Measured across 12,000 visitors</div>
                    </div>
                  </div>
                )}

                {activeApp.id === 'wati' && (
                  <div className="mt-4 space-y-3">
                    <div className="p-3.5 rounded-xl bg-slate-950/80 border border-white/[0.06]">
                      <div className="flex items-center justify-between text-[11px] text-slate-400">
                        <span>WhatsApp · Telegram · FB · IG</span>
                        <span className="text-[10px] text-emerald-400 font-mono">No 24h Limit (TG)</span>
                      </div>
                      <div className="text-xl font-bold text-emerald-400 font-mono mt-0.5">98.2% Open Rate</div>
                      <div className="text-[10px] text-slate-300 mt-0.5">Centralized live-chat &amp; instant broadcasts</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-950/80 border border-white/[0.06]">
                      <div className="text-[11px] text-slate-400">Conversational Store &amp; Webhooks</div>
                      <div className="text-xs font-semibold text-white mt-1">
                        WhatsApp Catalog &amp; Telegram Store Checkout
                      </div>
                      <div className="text-[10px] text-emerald-400">Shopify COD to Prepaid + Elementor / Google Forms</div>
                    </div>
                  </div>
                )}

                {activeApp.id === 'uptimerobot' && (
                  <div className="mt-4 space-y-3">
                    <div className="p-3.5 rounded-xl bg-slate-950/80 border border-white/[0.06]">
                      <div className="text-[11px] text-slate-400">30-Day Monitored Uptime</div>
                      <div className="text-xl font-bold text-green-400 font-mono mt-0.5">99.98%</div>
                      <div className="text-[10px] text-emerald-400 mt-0.5">0 Outages detected</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-950/80 border border-white/[0.06]">
                      <div className="text-[11px] text-slate-400">Check Interval</div>
                      <div className="text-xl font-bold text-white font-mono mt-0.5">Every 60 Sec</div>
                      <div className="text-[10px] text-slate-400">SMS &amp; Email alerts configured</div>
                    </div>
                  </div>
                )}

                {activeApp.id === 'bitly' && (
                  <div className="mt-4 space-y-3">
                    <div className="p-3.5 rounded-xl bg-slate-950/80 border border-white/[0.06]">
                      <div className="text-[11px] text-slate-400">Branded Campaign Clicks</div>
                      <div className="text-xl font-bold text-orange-400 font-mono mt-0.5">48,912 Clicks</div>
                      <div className="text-[10px] text-emerald-400 mt-0.5">+3,120 clicks this week</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-950/80 border border-white/[0.06]">
                      <div className="text-[11px] text-slate-400">QR Code &amp; Bio Links</div>
                      <div className="text-xs font-semibold text-white mt-1">
                        yourbrand.link/launch
                      </div>
                      <div className="text-[10px] text-slate-400">100% Custom domain active</div>
                    </div>
                  </div>
                )}

                <button
                  onClick={() => onOpenCheckout('bundle')}
                  className="w-full mt-5 py-3 rounded-xl text-xs font-extrabold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 transition-all shadow-[0_0_15px_rgba(52,211,153,0.3)] cursor-pointer"
                >
                  Unlock {activeApp.name} &amp; All 5 Others
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
