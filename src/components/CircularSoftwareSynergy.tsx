import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, Sparkles, Zap, Rocket, ShieldCheck, 
  ArrowRight, Activity, Layers, CheckCircle2, Flame, RefreshCw
} from 'lucide-react';
import { SOFTWARE_LIST } from '../data/softwareData';
import { getSoftwareLogo } from './SoftwareBrandLogos';

interface CircularSoftwareSynergyProps {
  onOpenCheckout?: (plan?: string) => void;
}

interface ToolBoostMetric {
  toolId: string;
  metricLabel: string;
  metricValue: string;
  boostAction: string;
  colorHex: string;
  angleDeg: number;
}

const TOOL_METRICS: ToolBoostMetric[] = [
  {
    toolId: 'mailchimp',
    metricLabel: 'Customer Retention',
    metricValue: '+68%',
    boostAction: 'Automated Lifecycle Email Campaigns',
    colorHex: '#FFE01B',
    angleDeg: 270, // 12 o'clock (Top)
  },
  {
    toolId: 'hostinger',
    metricLabel: 'Server Speed',
    metricValue: '300ms',
    boostAction: 'LiteSpeed NVMe SSD Edge Hosting',
    colorHex: '#673AB7',
    angleDeg: 330, // 2 o'clock (Top Right)
  },
  {
    toolId: 'fomo',
    metricLabel: 'Checkout Urgency',
    metricValue: '+214%',
    boostAction: 'Real-Time Social Proof Popups',
    colorHex: '#4F46E5',
    angleDeg: 30, // 4 o'clock (Bottom Right)
  },
  {
    toolId: 'wati',
    metricLabel: 'Direct Engagement',
    metricValue: '98%',
    boostAction: 'Official WhatsApp Business Bot & Alerts',
    colorHex: '#10B981',
    angleDeg: 90, // 6 o'clock (Bottom)
  },
  {
    toolId: 'uptimerobot',
    metricLabel: 'Infrastructure Health',
    metricValue: '99.99%',
    boostAction: '24/7 Redundant Heartbeat Monitoring',
    colorHex: '#3BD671',
    angleDeg: 150, // 8 o'clock (Bottom Left)
  },
  {
    toolId: 'bitly',
    metricLabel: 'Attribution Tracking',
    metricValue: '100%',
    boostAction: 'Custom Branded Short Links & QR Hubs',
    colorHex: '#EE6123',
    angleDeg: 210, // 10 o'clock (Top Left)
  },
];

export const CircularSoftwareSynergy: React.FC<CircularSoftwareSynergyProps> = ({ onOpenCheckout }) => {
  const [activeToolIndex, setActiveToolIndex] = useState<number>(0);
  const [isHyperboost, setIsHyperboost] = useState<boolean>(false);
  const [rotationOffset, setRotationOffset] = useState<number>(0);

  // Auto-cycle through the 6 tools to showcase business synergy
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveToolIndex((prev) => (prev + 1) % TOOL_METRICS.length);
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  const activeTool = TOOL_METRICS[activeToolIndex];
  const activeSoftwareItem = SOFTWARE_LIST.find((s) => s.id === activeTool.toolId) || SOFTWARE_LIST[0];

  // Circle dimensions (viewBox 600x600, center at 300, 300)
  const centerX = 300;
  const centerY = 300;
  const orbitRadius = 210;

  const triggerHyperboost = () => {
    setIsHyperboost(true);
    setRotationOffset((prev) => prev + 180);
    setTimeout(() => setIsHyperboost(false), 2400);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto my-12 rounded-3xl bg-gradient-to-b from-slate-900/80 via-slate-950/90 to-[#04060b] border border-white/[0.09] shadow-[0_25px_70px_rgba(0,0,0,0.7)] p-4 sm:p-8 backdrop-blur-2xl overflow-hidden">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-teal-500/8 rounded-full blur-[100px] pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-indigo-500/8 rounded-full blur-[100px] pointer-events-none -z-0" />

      {/* Top Banner Tag */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-white/[0.07] relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Unified Circular Growth Engine</span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mt-2 font-display">
            6 Software Engines Converged into 1 High-Velocity Business Boost
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Watch how 6 separate software categories merge into an uninterrupted growth circuit—fueling customer acquisition, trust, sales automations, and rock-solid uptime.
          </p>
        </div>

        {/* Hyperboost Action Button */}
        <button
          onClick={triggerHyperboost}
          className={`px-4 py-2 rounded-xl text-xs font-bold font-display cursor-pointer transition-all duration-300 flex items-center gap-2 shrink-0 ${
            isHyperboost
              ? 'bg-amber-400 text-slate-950 shadow-[0_0_25px_rgba(251,191,36,0.6)] scale-105'
              : 'bg-slate-800 hover:bg-slate-700 text-emerald-300 border border-emerald-500/30 hover:border-emerald-400 shadow-md'
          }`}
        >
          <Zap className={`w-4 h-4 ${isHyperboost ? 'animate-bounce text-slate-950' : 'text-emerald-400'}`} />
          <span>{isHyperboost ? '⚡ Hyper-Boost Engaged!' : 'Simulate Hyper-Boost'}</span>
        </button>
      </div>

      {/* Main Interactive Stage: Circular Convergence Graphic */}
      <div className="relative py-6 sm:py-10 flex flex-col lg:flex-row items-center justify-between gap-8 z-10">
        {/* Left / Center: Interactive SVG Circular Synergy Canvas */}
        <div className="relative w-[320px] h-[320px] sm:w-[460px] sm:h-[460px] lg:w-[480px] lg:h-[480px] flex items-center justify-center shrink-0 select-none">
          {/* Animated SVG Convergence Beams & Orbit Rings */}
          <svg 
            viewBox="0 0 600 600" 
            className="absolute inset-0 w-full h-full pointer-events-none"
          >
            <defs>
              {/* Central Glowing Gradient */}
              <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#34d399" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#10b981" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#05070e" stopOpacity="0" />
              </radialGradient>

              {/* Energy Beam Line Gradients */}
              <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#34d399" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#2dd4bf" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
              </linearGradient>

              {/* Hyperboost active gradient */}
              <linearGradient id="hyperGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbbf24" stopOpacity="1" />
                <stop offset="50%" stopColor="#34d399" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.3" />
              </linearGradient>

              {/* Filter for glowing elements */}
              <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Ambient Center Glow */}
            <circle cx={centerX} cy={centerY} r="140" fill="url(#centerGlow)" />

            {/* Concentric Pulse Wave Rings */}
            <circle 
              cx={centerX} 
              cy={centerY} 
              r="95" 
              fill="none" 
              stroke="#10b981" 
              strokeWidth="1.5" 
              strokeOpacity="0.25"
              className="animate-ping origin-center"
              style={{ animationDuration: isHyperboost ? '1.5s' : '3.5s' }}
            />
            <circle 
              cx={centerX} 
              cy={centerY} 
              r="135" 
              fill="none" 
              stroke="#34d399" 
              strokeWidth="1" 
              strokeOpacity="0.15" 
              strokeDasharray="4 6"
            />

            {/* Main Outer Circular Orbit Track */}
            <circle 
              cx={centerX} 
              cy={centerY} 
              r={orbitRadius} 
              fill="none" 
              stroke="#ffffff" 
              strokeWidth="1.5" 
              strokeOpacity="0.12" 
              strokeDasharray="6 8"
              className="animate-[spin_45s_linear_infinite]"
            />

            {/* Orbit Arc Highlighting Active Circuit */}
            <circle 
              cx={centerX} 
              cy={centerY} 
              r={orbitRadius} 
              fill="none" 
              stroke={isHyperboost ? 'url(#hyperGradient)' : '#34d399'} 
              strokeWidth={isHyperboost ? '3.5' : '2'} 
              strokeOpacity="0.7" 
              strokeDasharray="80 320"
              filter="url(#glowFilter)"
              className="animate-[spin_12s_linear_infinite]"
            />

            {/* Dynamic Connecting Laser Beams from all 6 nodes directly to Center */}
            {TOOL_METRICS.map((tm, idx) => {
              const rad = (tm.angleDeg * Math.PI) / 180;
              const nodeX = centerX + orbitRadius * Math.cos(rad);
              const nodeY = centerY + orbitRadius * Math.sin(rad);
              const isCurrent = idx === activeToolIndex;

              return (
                <g key={tm.toolId}>
                  {/* Background faint guide ray */}
                  <line 
                    x1={nodeX} 
                    y1={nodeY} 
                    x2={centerX} 
                    y2={centerY} 
                    stroke={isCurrent ? '#34d399' : '#ffffff'} 
                    strokeWidth={isCurrent ? '2' : '1'} 
                    strokeOpacity={isCurrent ? '0.6' : '0.08'}
                  />

                  {/* Animated Energy Particles Streaming toward Center Core */}
                  <line 
                    x1={nodeX} 
                    y1={nodeY} 
                    x2={centerX} 
                    y2={centerY} 
                    stroke={isCurrent ? '#34d399' : '#2dd4bf'} 
                    strokeWidth={isCurrent ? '3' : '1.5'} 
                    strokeDasharray={isCurrent ? '8 12' : '4 14'}
                    filter={isCurrent ? 'url(#glowFilter)' : undefined}
                    className="animate-energy-beam"
                  />
                </g>
              );
            })}
          </svg>

          {/* Central Pulsing Nexus: "BOOST THE BUSINESS" Core */}
          <div className="relative z-20 w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-br from-slate-950 via-[#07131e] to-slate-900 border-2 border-emerald-400/80 shadow-[0_0_50px_rgba(16,185,129,0.35)] flex flex-col items-center justify-center p-3 text-center backdrop-blur-xl group cursor-pointer hover:border-emerald-300 transition-all duration-300">
            {/* Spinning inner radar sweep */}
            <div className="absolute inset-1 rounded-full border border-emerald-500/20 pointer-events-none" />
            <div className="absolute -inset-1 rounded-full bg-emerald-400/10 blur-md -z-10 animate-pulse" />

            {/* Central Rocket Icon */}
            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
              isHyperboost
                ? 'bg-amber-400 text-slate-950 shadow-[0_0_20px_#fbbf24] scale-110'
                : 'bg-emerald-500/20 text-emerald-400 border border-emerald-400/40 shadow-[0_0_15px_rgba(52,211,153,0.3)]'
            }`}>
              <Rocket className={`w-5 h-5 sm:w-6 sm:h-6 ${isHyperboost ? 'animate-bounce' : 'animate-pulse'}`} />
            </div>

            {/* Dynamic Metric Headline */}
            <span className="mt-1.5 text-base sm:text-xl font-black font-display text-white tracking-tight leading-tight">
              +340%
            </span>
            <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-emerald-400 font-mono leading-none">
              Business Boost
            </span>
            <span className="text-[9px] text-slate-400 font-mono mt-0.5 hidden sm:block">
              All 6 Engines Unified
            </span>
          </div>

          {/* 6 Circular Orbital Tool Badges */}
          {TOOL_METRICS.map((tm, idx) => {
            const rad = (tm.angleDeg * Math.PI) / 180;
            // Radius in percentage relative to container
            // 50% is center. Orbit radius is ~35% of total width.
            const xPercent = 50 + 35 * Math.cos(rad);
            const yPercent = 50 + 35 * Math.sin(rad);
            const isSelected = idx === activeToolIndex;

            return (
              <motion.button
                key={tm.toolId}
                onClick={() => setActiveToolIndex(idx)}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  left: `${xPercent}%`,
                  top: `${yPercent}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                className={`absolute z-30 w-14 h-14 sm:w-18 sm:h-18 rounded-2xl flex flex-col items-center justify-center p-1.5 cursor-pointer transition-all duration-300 shadow-xl ${
                  isSelected
                    ? 'bg-slate-950 border-2 border-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.5)] scale-110 ring-4 ring-emerald-500/20'
                    : 'bg-slate-900/90 border border-white/10 hover:border-emerald-400/60 hover:bg-slate-800'
                }`}
                title={`Click to inspect ${tm.toolId} synergy`}
              >
                {/* Brand Logo */}
                <div className="w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center shrink-0">
                  {getSoftwareLogo(tm.toolId, 'w-6 h-6 sm:w-7 sm:h-7')}
                </div>

                {/* Floating Micro Badge */}
                <span className={`text-[9px] sm:text-[10px] font-mono font-bold mt-0.5 truncate max-w-[60px] ${
                  isSelected ? 'text-emerald-300' : 'text-slate-400'
                }`}>
                  {tm.metricValue}
                </span>

                {/* Active Indicator Dot */}
                {isSelected && (
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
                  </span>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Right Column: Synergy Inspector & Live Boost Narrative */}
        <div className="w-full lg:max-w-md flex flex-col justify-between space-y-4">
          {/* Active Tool Synergy Card */}
          <div className="p-5 rounded-2xl bg-slate-950/80 border border-emerald-500/30 shadow-lg relative overflow-hidden">
            <div className="flex items-center justify-between gap-3 pb-3 border-b border-white/[0.08]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center p-1.5 shadow-sm">
                  {getSoftwareLogo(activeTool.toolId, 'w-6 h-6')}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-base text-white font-display">
                      {activeSoftwareItem.name}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[10px] font-mono font-bold">
                      {activeTool.metricValue} Lift
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">
                    {activeSoftwareItem.category}
                  </span>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[10px] text-slate-400 uppercase font-mono block">Role in Suite</span>
                <span className="text-xs font-bold text-emerald-400 font-mono">
                  Engine #{activeToolIndex + 1} of 6
                </span>
              </div>
            </div>

            {/* Business Boost Details */}
            <div className="mt-4 space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <Flame className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-200">How It Boosts Your Business:</span>
                  <p className="text-slate-300 mt-0.5 leading-relaxed">
                    {activeSoftwareItem.businessImpact}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-200">Specific Capability:</span>
                  <p className="text-slate-300 mt-0.5 leading-relaxed font-mono text-[11px]">
                    {activeTool.boostAction}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Switch Dots */}
            <div className="mt-5 flex items-center justify-between pt-3 border-t border-white/[0.06]">
              <span className="text-[10px] font-mono text-slate-400 uppercase">
                Switch Engine:
              </span>
              <div className="flex items-center gap-1.5">
                {TOOL_METRICS.map((tm, idx) => (
                  <button
                    key={tm.toolId}
                    onClick={() => setActiveToolIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                      idx === activeToolIndex
                        ? 'w-6 bg-emerald-400'
                        : 'bg-slate-700 hover:bg-slate-500'
                    }`}
                    title={tm.toolId}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* 3 Unified Advantage Points */}
          <div className="grid grid-cols-3 gap-2.5">
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
              <div className="text-base sm:text-lg font-black text-white font-mono">10x</div>
              <div className="text-[10px] text-slate-400 uppercase font-mono mt-0.5">Execution</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
              <div className="text-base sm:text-lg font-black text-emerald-400 font-mono">$7,320</div>
              <div className="text-[10px] text-slate-400 uppercase font-mono mt-0.5">Saved / Year</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
              <div className="text-base sm:text-lg font-black text-cyan-400 font-mono">1 Invoice</div>
              <div className="text-[10px] text-slate-400 uppercase font-mono mt-0.5">Zero Chaos</div>
            </div>
          </div>

          {/* CTA Link to Pricing */}
          {onOpenCheckout && (
            <button
              onClick={() => onOpenCheckout('startup')}
              className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:from-emerald-300 hover:to-teal-200 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer font-display"
            >
              <span>Activate Full 6-in-1 Suite ($40/mo)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
