import React, { useState, useEffect } from 'react';
import { CheckCircle2, X, Sparkles, TrendingUp, ShieldCheck } from 'lucide-react';
import { ALL_30_SOCIAL_PROOFS, SocialProofReview } from '../data/socialProofData';
import { getSoftwareLogo } from './SoftwareBrandLogos';

interface LiveSocialProofToastProps {
  onOpenCheckout?: (plan?: string) => void;
}

export const LiveSocialProofToast: React.FC<LiveSocialProofToastProps> = ({ onOpenCheckout }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isDismissed, setIsDismissed] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  useEffect(() => {
    if (isDismissed) return;

    // Toast show/hide cycle
    const interval = setInterval(() => {
      if (isPaused) return;

      // Animate out
      setIsVisible(false);

      // Change review and animate in
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % ALL_30_SOCIAL_PROOFS.length);
        setIsVisible(true);
      }, 600);
    }, 8000);

    return () => clearInterval(interval);
  }, [isDismissed, isPaused]);

  if (isDismissed) return null;

  const currentProof: SocialProofReview = ALL_30_SOCIAL_PROOFS[currentIndex];

  return (
    <div
      className={`fixed bottom-5 left-5 z-40 max-w-sm transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95 pointer-events-none'
      }`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="status"
      aria-live="polite"
    >
      <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-emerald-500/30 shadow-[0_12px_40px_rgba(0,0,0,0.6)] text-slate-200 relative overflow-hidden group">
        {/* Ambient emerald edge glow */}
        <div 
          aria-hidden="true" 
          className="absolute -top-10 -right-10 w-24 h-24 bg-emerald-400/10 rounded-full blur-xl pointer-events-none" 
        />

        {/* Top bar with verified badge and close button */}
        <div className="flex items-center justify-between gap-2 pb-2 mb-2 border-b border-white/[0.06]">
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              Verified Customer Activity
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] text-slate-400 font-mono">
              {currentProof.verifiedTime}
            </span>
            <button
              onClick={() => setIsDismissed(true)}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer p-0.5 rounded hover:bg-slate-800"
              aria-label="Dismiss social proof notifications"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* User Content */}
        <div className="flex items-start gap-3">
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${currentProof.avatarBg} border border-white/10 flex items-center justify-center font-bold text-sm shrink-0 shadow-inner`}>
            {currentProof.avatarText}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="font-bold text-white text-xs sm:text-sm truncate">
                {currentProof.name}
              </span>
              <span className="text-xs" title={currentProof.country}>
                {currentProof.countryFlag}
              </span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-300 border border-slate-700 font-mono truncate">
                {currentProof.company}
              </span>
            </div>

            <p className="text-xs text-slate-300 mt-1 line-clamp-2 leading-relaxed">
              "{currentProof.quote}"
            </p>

            <div className="mt-2.5 flex items-center justify-between gap-2 flex-wrap text-[11px]">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 font-mono font-semibold">
                <TrendingUp className="w-3 h-3 text-emerald-400" />
                {currentProof.highlightMetric}
              </span>

              <div className="flex items-center gap-1">
                {currentProof.toolsUsed.slice(0, 3).map((toolId) => (
                  <div key={toolId} className="w-4 h-4" title={toolId}>
                    {getSoftwareLogo(toolId, 'w-4 h-4')}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
