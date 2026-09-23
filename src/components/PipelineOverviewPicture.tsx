import React from 'react';
import { 
  TrendingUp, MessageSquare, ShoppingCart, ShieldCheck, 
  ArrowRight, Sparkles, Activity, Zap, CheckCircle2 
} from 'lucide-react';

export const PipelineOverviewPicture: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto mt-8 mb-4">
      {/* CSS animations for laser connector beams and pulse nodes */}
      <style>{`
        @keyframes pipeline-pulse {
          0% {
            stroke-dashoffset: 60;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        @keyframes photon-travel {
          0% {
            left: 0%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            left: 100%;
            opacity: 0;
          }
        }
        .anim-pipeline-beam {
          stroke-dasharray: 6 6;
          animation: pipeline-pulse 1.8s linear infinite;
        }
        .anim-photon {
          animation: photon-travel 2.4s ease-in-out infinite;
        }
      `}</style>

      {/* Main Composite Picture / Visual Architecture Container */}
      <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#0c1424] via-[#090e1a] to-[#060913] border border-slate-700/80 p-5 sm:p-7 shadow-2xl shadow-emerald-950/20 overflow-hidden">
        {/* Background glow and coordinate grid */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}
        />
        <div className="absolute top-0 right-1/4 w-72 h-36 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-72 h-36 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header of the Visual Diagram */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-800/90">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
                Unified Visual Diagram
              </div>
              <h4 className="text-sm sm:text-base font-bold text-white font-display">
                The 4-Stage Revenue Flow (How The 4 Cockpits Connect)
              </h4>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-mono text-slate-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-emerald-300">Continuous Revenue Flow</span>
          </div>
        </div>

        {/* 4 Connected Stages Visual Pipeline Flow */}
        <div className="relative z-10 mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {/* STAGE 1: Traffic Generation */}
          <div className="relative rounded-xl bg-slate-950/80 border border-amber-500/30 p-4 flex flex-col justify-between hover:border-amber-400/60 transition-all group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono uppercase font-bold text-amber-400 tracking-wider">
                Stage 01 · Inflow
              </span>
              <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-3.5 h-3.5" />
              </div>
            </div>

            <div>
              <h5 className="text-sm font-bold text-white font-display">
                Live Traffic Cockpit
              </h5>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Branded Bitly links + Organic SEO capture high-intent buyers.
              </p>
            </div>

            <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400">Target</span>
              <span className="text-xs font-mono font-bold text-amber-300">
                15,000+ Active Visits
              </span>
            </div>
          </div>

          {/* STAGE 2: Engagement & Social Proof */}
          <div className="relative rounded-xl bg-slate-950/80 border border-purple-500/30 p-4 flex flex-col justify-between hover:border-purple-400/60 transition-all group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono uppercase font-bold text-purple-400 tracking-wider">
                Stage 02 · Trust
              </span>
              <div className="w-7 h-7 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-3.5 h-3.5" />
              </div>
            </div>

            <div>
              <h5 className="text-sm font-bold text-white font-display">
                Conversational Commerce
              </h5>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                FOMO verified alerts + 24/7 WhatsApp AI bot answer queries instantly.
              </p>
            </div>

            <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400">Response</span>
              <span className="text-xs font-mono font-bold text-purple-300">
                98.4% Open Rate
              </span>
            </div>
          </div>

          {/* STAGE 3: Cart Recovery */}
          <div className="relative rounded-xl bg-slate-950/80 border border-rose-500/30 p-4 flex flex-col justify-between hover:border-rose-400/60 transition-all group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono uppercase font-bold text-rose-400 tracking-wider">
                Stage 03 · Winback
              </span>
              <div className="w-7 h-7 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 group-hover:scale-110 transition-transform">
                <ShoppingCart className="w-3.5 h-3.5" />
              </div>
            </div>

            <div>
              <h5 className="text-sm font-bold text-white font-display">
                Cart Recovery Engine
              </h5>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                60s automated trigger rescues dropped carts via Email + WhatsApp.
              </p>
            </div>

            <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400">Recovery</span>
              <span className="text-xs font-mono font-bold text-rose-300">
                68.4% Winback Rate
              </span>
            </div>
          </div>

          {/* STAGE 4: Global Edge Status */}
          <div className="relative rounded-xl bg-slate-950/80 border border-emerald-500/30 p-4 flex flex-col justify-between hover:border-emerald-400/60 transition-all group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono uppercase font-bold text-emerald-400 tracking-wider">
                Stage 04 · Uptime
              </span>
              <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
            </div>

            <div>
              <h5 className="text-sm font-bold text-white font-display">
                Global Edge Status
              </h5>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                LiteSpeed NVMe SSD hosting + 60s heartbeat prevents lost sales.
              </p>
            </div>

            <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400">Availability</span>
              <span className="text-xs font-mono font-bold text-emerald-300">
                100.00% Zero Downtime
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Explanatory Summary Bar */}
        <div className="relative z-10 mt-5 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="leading-snug">
              <strong>All 4 Stages Synced:</strong> Without any one pillar, your pipeline leaks revenue. Our suite unites all 4 stages into one continuous machine.
            </span>
          </div>

          <div className="text-[11px] font-mono text-slate-400 whitespace-nowrap">
            Powered by <span className="text-white font-semibold">Mailchimp · Hostinger · Fomo · Wati · UptimeRobot · Bitly</span>
          </div>
        </div>
      </div>
    </div>
  );
};
