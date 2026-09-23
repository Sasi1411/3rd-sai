import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, Users, ShoppingCart, CheckCircle, 
  ShieldCheck, Zap, Globe, MessageSquare, ArrowRight,
  Sparkles, Radio, Check, Clock, Server, Activity
} from 'lucide-react';

/**
 * Enterprise-Grade Animated Visual Scenes for the 4 Marketing Pillars:
 * 01. Traffic Generation (Live Traffic Simulator & Growth Cockpit)
 * 02. Engagement (Live Social Proof Feed & Conversational Commerce Stream)
 * 03. Retargeting (Multi-Channel Abandoned Cart Recovery Automation Pipeline)
 * 04. Website Reliability (Global Edge Node Health & Zero-Downtime Mission Control)
 */

// ==========================================
// 01. TRAFFIC GENERATION COCKPIT
// ==========================================
export const TrafficEnginePicture: React.FC = () => {
  const [visitorCount, setVisitorCount] = useState(14820);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisitorCount((prev) => prev + Math.floor(Math.random() * 7) - 2);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-52 relative overflow-hidden flex flex-col justify-between p-3.5 bg-gradient-to-b from-slate-950 via-[#0B111E] to-slate-950 select-none border-b border-slate-800/80 font-sans">
      <style>{`
        @keyframes scanline {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(250%); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        @keyframes streamTraffic {
          0% { stroke-dashoffset: 200; }
          100% { stroke-dashoffset: 0; }
        }
        .anim-traffic-stream {
          stroke-dasharray: 10 6;
          animation: streamTraffic 3s linear infinite;
        }
        .anim-scanner {
          animation: scanline 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>

      {/* Subtle grid background */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(245, 158, 11, 0.4) 1px, transparent 1px)',
          backgroundSize: '16px 16px'
        }}
      />

      {/* Top Header Telemetry */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] font-mono tracking-wider font-semibold text-emerald-400 uppercase">
            Live Traffic Cockpit
          </span>
        </div>

        <div className="px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[10px] font-mono font-bold text-amber-300 flex items-center gap-1.5 shadow-sm">
          <Users className="w-3 h-3 text-amber-400" />
          <span>{visitorCount.toLocaleString()} Active Sessions</span>
        </div>
      </div>

      {/* Center Interactive Real-Time Traffic Wave Chart */}
      <div className="relative z-10 my-auto py-1">
        <div className="relative h-20 w-full flex items-end">
          <svg viewBox="0 0 340 80" className="w-full h-full overflow-visible" preserveAspectRatio="none">
            <defs>
              <linearGradient id="trafficGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.45" />
                <stop offset="60%" stopColor="#10B981" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#0B111E" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#F59E0B" />
                <stop offset="65%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#34D399" />
              </linearGradient>
            </defs>

            {/* Background grid lines */}
            <line x1="0" y1="20" x2="340" y2="20" stroke="#1E293B" strokeWidth="0.8" strokeDasharray="3 3" />
            <line x1="0" y1="45" x2="340" y2="45" stroke="#1E293B" strokeWidth="0.8" strokeDasharray="3 3" />
            <line x1="0" y1="70" x2="340" y2="70" stroke="#1E293B" strokeWidth="0.8" />

            {/* Filled Chart Area */}
            <path
              d="M0,65 Q45,60 80,48 T160,38 T230,22 T290,14 T340,8 L340,75 L0,75 Z"
              fill="url(#trafficGradient)"
            />

            {/* Continuous Base Curve */}
            <path
              d="M0,65 Q45,60 80,48 T160,38 T230,22 T290,14 T340,8"
              fill="none"
              stroke="url(#lineGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Animated Flowing Laser Trail */}
            <path
              d="M0,65 Q45,60 80,48 T160,38 T230,22 T290,14 T340,8"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="1.8"
              strokeLinecap="round"
              className="anim-traffic-stream"
            />

            {/* Apex Pulse Indicator */}
            <circle cx="340" cy="8" r="4.5" fill="#34D399" className="animate-ping" />
            <circle cx="340" cy="8" r="3.5" fill="#FFFFFF" />

            {/* Key Milestones on Chart */}
            <circle cx="80" cy="48" r="2.5" fill="#F59E0B" />
            <circle cx="160" cy="38" r="2.5" fill="#10B981" />
            <circle cx="230" cy="22" r="2.5" fill="#10B981" />
          </svg>

          {/* Floating High-Growth Tooltip at Peak */}
          <div className="absolute top-0 right-1 px-2 py-0.5 rounded bg-slate-900/90 border border-emerald-500/50 backdrop-blur-md shadow-lg text-[9px] font-mono text-emerald-300 flex items-center gap-1">
            <TrendingUp className="w-2.5 h-2.5 text-emerald-400" />
            <span>+380% Surge</span>
          </div>
        </div>
      </div>

      {/* Bottom Live Routing Channels */}
      <div className="relative z-10 grid grid-cols-3 gap-2 pt-1 border-t border-slate-800/80">
        <div className="p-1.5 rounded-lg bg-slate-900/80 border border-slate-800 flex flex-col">
          <span className="text-[9px] text-slate-400 flex items-center justify-between">
            <span>Organic / SEO</span>
            <span className="text-amber-400 font-mono font-bold">48%</span>
          </span>
          <div className="w-full bg-slate-800 h-1 rounded-full mt-1 overflow-hidden">
            <div className="bg-amber-400 h-full rounded-full" style={{ width: '48%' }}></div>
          </div>
        </div>

        <div className="p-1.5 rounded-lg bg-slate-900/80 border border-slate-800 flex flex-col">
          <span className="text-[9px] text-slate-400 flex items-center justify-between">
            <span>Bitly Links</span>
            <span className="text-emerald-400 font-mono font-bold">34%</span>
          </span>
          <div className="w-full bg-slate-800 h-1 rounded-full mt-1 overflow-hidden">
            <div className="bg-emerald-400 h-full rounded-full" style={{ width: '34%' }}></div>
          </div>
        </div>

        <div className="p-1.5 rounded-lg bg-slate-900/80 border border-slate-800 flex flex-col">
          <span className="text-[9px] text-slate-400 flex items-center justify-between">
            <span>Referrals</span>
            <span className="text-sky-400 font-mono font-bold">18%</span>
          </span>
          <div className="w-full bg-slate-800 h-1 rounded-full mt-1 overflow-hidden">
            <div className="bg-sky-400 h-full rounded-full" style={{ width: '18%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 02. ENGAGEMENT SOCIAL PROOF & LIVE FEED
// ==========================================
export const SocialProofPicture: React.FC = () => {
  const [activeToast, setActiveToast] = useState(0);

  const notifications = [
    { name: 'Elena M.', loc: 'London, UK', action: 'Bought Growth Plan', time: '1m ago', code: 'PRO-BUNDLE' },
    { name: 'David S.', loc: 'California, US', action: 'Requested VIP Demo', time: '3m ago', code: 'AUTOMATION' },
    { name: 'Marcus T.', loc: 'Berlin, DE', action: 'Unlocked 20% Voucher', time: 'Just now', code: 'SAVE20' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveToast((prev) => (prev + 1) % notifications.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [notifications.length]);

  return (
    <div className="w-full h-52 relative overflow-hidden flex flex-col justify-between p-3.5 bg-gradient-to-b from-slate-950 via-[#120B1C] to-slate-950 select-none border-b border-slate-800/80 font-sans">
      <style>{`
        @keyframes floatReaction {
          0% { transform: translateY(0) scale(0.8); opacity: 0; }
          30% { opacity: 1; transform: translateY(-10px) scale(1.1); }
          100% { transform: translateY(-32px) scale(0.9); opacity: 0; }
        }
        .anim-reaction-1 { animation: floatReaction 3s ease-out infinite; }
        .anim-reaction-2 { animation: floatReaction 3.4s ease-out infinite 1s; }
        .anim-reaction-3 { animation: floatReaction 2.8s ease-out infinite 1.8s; }
      `}</style>

      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(168,85,247,0.18),transparent_60%)] pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
          <span className="text-[10px] font-mono tracking-wider font-semibold text-purple-300 uppercase">
            Conversational Commerce
          </span>
        </div>

        <div className="px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-[10px] font-mono text-purple-300 flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-pink-400" />
          <span>98.4% Open Rate</span>
        </div>
      </div>

      {/* Center Simulated Live Conversational Cards */}
      <div className="relative z-10 my-auto space-y-2">
        {/* Animated Fomo Buyer Toast */}
        <div className="p-2.5 rounded-xl bg-slate-900/90 border border-purple-500/30 backdrop-blur-md shadow-lg flex items-center justify-between transition-all duration-300">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-xs font-bold text-white shadow-inner">
              {notifications[activeToast].name.charAt(0)}
            </div>
            <div className="leading-tight">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-white">{notifications[activeToast].name}</span>
                <span className="text-[10px] text-slate-400 font-mono">({notifications[activeToast].loc})</span>
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[9px]">✓</span>
              </div>
              <p className="text-[10px] text-purple-200 mt-0.5">
                {notifications[activeToast].action}
              </p>
            </div>
          </div>

          <div className="text-right">
            <span className="text-[9px] font-mono text-emerald-400 block">{notifications[activeToast].time}</span>
            <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-purple-950/80 border border-purple-800 text-purple-300">
              Verified
            </span>
          </div>
        </div>

        {/* Floating Omnichannel Bot Snippet (Wati + WhatsApp) */}
        <div className="p-2 rounded-lg bg-slate-950/80 border border-slate-800/90 flex items-center justify-between text-[10px]">
          <div className="flex items-center gap-1.5 text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span className="font-semibold text-emerald-400 font-mono">WhatsApp 24/7 Bot:</span>
            <span className="text-slate-300 truncate max-w-[170px]">"Your cart is reserved! VIP code applied"</span>
          </div>
          <span className="font-mono text-[9px] text-slate-400">Instant</span>
        </div>
      </div>

      {/* Floating Emojis Reaction Bubbles */}
      <div className="absolute right-5 bottom-8 pointer-events-none">
        <span className="absolute anim-reaction-1 text-base">🔥</span>
        <span className="absolute -left-6 anim-reaction-2 text-base">❤️</span>
        <span className="absolute -left-12 anim-reaction-3 text-base">🚀</span>
      </div>

      {/* Bottom Social Proof Rating Banner */}
      <div className="relative z-10 flex items-center justify-between pt-1 border-t border-slate-800/80 text-[10px]">
        <div className="flex items-center gap-1 text-amber-400">
          <span>★★★★★</span>
          <span className="font-mono font-bold text-slate-200 ml-1">4.98 / 5.0</span>
        </div>
        <span className="text-slate-400 font-mono text-[9px]">Fomo Proof + Wati Chat</span>
      </div>
    </div>
  );
};

// ==========================================
// 03. RETARGETING & CART RECOVERY PIPELINE
// ==========================================
export const RetargetingMagnetPicture: React.FC = () => {
  return (
    <div className="w-full h-52 relative overflow-hidden flex flex-col justify-between p-3.5 bg-gradient-to-b from-slate-950 via-[#081224] to-slate-950 select-none border-b border-slate-800/80 font-sans">
      <style>{`
        @keyframes flowStep {
          0% { transform: scaleX(0); transform-origin: left; opacity: 0.3; }
          50% { transform: scaleX(1); transform-origin: left; opacity: 1; }
          50.1% { transform: scaleX(1); transform-origin: right; }
          100% { transform: scaleX(0); transform-origin: right; opacity: 0.3; }
        }
        @keyframes pulseBorder {
          0%, 100% { border-color: rgba(59, 130, 246, 0.3); }
          50% { border-color: rgba(59, 130, 246, 0.8); }
        }
        .anim-flow-line {
          animation: flowStep 2.5s ease-in-out infinite;
        }
        .anim-pulse-box {
          animation: pulseBorder 3s ease-in-out infinite;
        }
      `}</style>

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
          <span className="text-[10px] font-mono tracking-wider font-semibold text-blue-300 uppercase">
            Cart Recovery Engine
          </span>
        </div>

        <div className="px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-[10px] font-mono font-bold text-blue-300 flex items-center gap-1">
          <Zap className="w-3 h-3 text-cyan-400" />
          <span>68.4% Winback Rate</span>
        </div>
      </div>

      {/* Center 3-Stage Automation Flow Cards */}
      <div className="relative z-10 my-auto">
        <div className="grid grid-cols-3 gap-1.5 items-center">
          {/* Step 1: Abandoned Cart */}
          <div className="p-2 rounded-xl bg-slate-900/90 border border-slate-800 text-center flex flex-col items-center">
            <div className="w-7 h-7 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-1">
              <ShoppingCart className="w-3.5 h-3.5" />
            </div>
            <span className="text-[9px] font-bold text-white">Cart Left</span>
            <span className="text-[8px] font-mono text-slate-400">$189.00</span>
          </div>

          {/* Step 2: Auto Multi-Channel Trigger (Active Pulse) */}
          <div className="p-2 rounded-xl bg-blue-950/40 border border-blue-500/40 text-center flex flex-col items-center anim-pulse-box relative">
            <div className="absolute -top-1.5 px-1 rounded bg-blue-500 text-[7px] font-mono font-bold text-slate-950">
              60s TRIGGER
            </div>
            <div className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-cyan-300 mb-1 mt-0.5">
              <MessageSquare className="w-3.5 h-3.5" />
            </div>
            <span className="text-[9px] font-bold text-blue-200">Email + WhatsApp</span>
            <span className="text-[8px] font-mono text-cyan-300">15% Off VIP Link</span>
          </div>

          {/* Step 3: Payment Recovered */}
          <div className="p-2 rounded-xl bg-slate-900/90 border border-emerald-500/30 text-center flex flex-col items-center">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-1">
              <CheckCircle className="w-3.5 h-3.5" />
            </div>
            <span className="text-[9px] font-bold text-emerald-300">Paid & Done</span>
            <span className="text-[8px] font-mono text-emerald-400 font-bold">+$189.00 Rec</span>
          </div>
        </div>

        {/* Dynamic Multi-Channel Badges */}
        <div className="mt-2.5 p-1.5 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center justify-between text-[9px] font-mono">
          <div className="flex items-center gap-1 text-slate-400">
            <span>Powered by:</span>
            <span className="text-amber-400 font-bold">Mailchimp</span>
            <span>+</span>
            <span className="text-emerald-400 font-bold">Wati</span>
          </div>
          <span className="text-cyan-400 font-bold flex items-center gap-1">
            <ArrowRight className="w-2.5 h-2.5" />
            4.8x ROAS
          </span>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <div className="relative z-10 flex items-center justify-between pt-1 border-t border-slate-800/80 text-[10px]">
        <span className="text-slate-400">Monthly Recovered:</span>
        <span className="font-mono font-bold text-emerald-400">+$24,890 Saved</span>
      </div>
    </div>
  );
};

// ==========================================
// 04. WEBSITE RELIABILITY MISSION CONTROL
// ==========================================
export const SecurityShieldPicture: React.FC = () => {
  return (
    <div className="w-full h-52 relative overflow-hidden flex flex-col justify-between p-3.5 bg-gradient-to-b from-slate-950 via-[#071712] to-slate-950 select-none border-b border-slate-800/80 font-sans">
      <style>{`
        @keyframes ecgBeat {
          0% { stroke-dashoffset: 350; }
          100% { stroke-dashoffset: 0; }
        }
        .anim-ecg-line {
          stroke-dasharray: 80 270;
          animation: ecgBeat 2s linear infinite;
        }
      `}</style>

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] font-mono tracking-wider font-semibold text-emerald-400 uppercase">
            Global Edge Status
          </span>
        </div>

        <div className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono font-bold text-emerald-300 flex items-center gap-1">
          <ShieldCheck className="w-3 h-3 text-emerald-400" />
          <span>100.00% Uptime</span>
        </div>
      </div>

      {/* Center 3-Region Live Node Matrix & Ping Wave */}
      <div className="relative z-10 my-auto space-y-2">
        {/* Node Matrix List */}
        <div className="grid grid-cols-3 gap-1.5">
          <div className="p-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-left">
            <div className="flex items-center justify-between text-[9px] font-mono">
              <span className="text-slate-300">US-East</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
            <div className="text-[10px] font-mono font-bold text-emerald-400 mt-0.5">14ms</div>
            <div className="text-[7px] text-slate-400 font-mono">LiteSpeed NVMe</div>
          </div>

          <div className="p-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-left">
            <div className="flex items-center justify-between text-[9px] font-mono">
              <span className="text-slate-300">EU-Central</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
            <div className="text-[10px] font-mono font-bold text-emerald-400 mt-0.5">22ms</div>
            <div className="text-[7px] text-slate-400 font-mono">CDN Edge Sync</div>
          </div>

          <div className="p-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-left">
            <div className="flex items-center justify-between text-[9px] font-mono">
              <span className="text-slate-300">AP-South</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
            <div className="text-[10px] font-mono font-bold text-emerald-400 mt-0.5">29ms</div>
            <div className="text-[7px] text-slate-400 font-mono">0 Drop Rate</div>
          </div>
        </div>

        {/* Live ECG Heartbeat Oscilloscope Bar */}
        <div className="p-2 rounded-xl bg-slate-950/80 border border-emerald-500/30 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-emerald-400 shrink-0" />
            <div className="w-36 h-6 overflow-hidden">
              <svg viewBox="0 0 150 24" className="w-full h-full" preserveAspectRatio="none">
                <path
                  d="M0,12 L30,12 L35,6 L40,18 L45,3 L50,21 L55,10 L60,12 L100,12 L105,7 L110,17 L115,4 L120,20 L125,12 L150,12"
                  fill="none"
                  stroke="#064E3B"
                  strokeWidth="1.5"
                />
                <path
                  d="M0,12 L30,12 L35,6 L40,18 L45,3 L50,21 L55,10 L60,12 L100,12 L105,7 L110,17 L115,4 L120,20 L125,12 L150,12"
                  fill="none"
                  stroke="#34D399"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="anim-ecg-line"
                />
              </svg>
            </div>
          </div>

          <div className="text-right">
            <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[8px] font-mono font-bold">
              60s Ping Check
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <div className="relative z-10 flex items-center justify-between pt-1 border-t border-slate-800/80 text-[10px]">
        <div className="flex items-center gap-1.5 text-slate-400 font-mono text-[9px]">
          <Server className="w-3 h-3 text-emerald-400" />
          <span>UptimeRobot + Hostinger Cloud</span>
        </div>
        <span className="font-mono text-[9px] text-emerald-400 font-bold">Zero Downtime</span>
      </div>
    </div>
  );
};
