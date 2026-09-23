import React from 'react';
import { IMPORTANCE_PILLARS } from '../data/importanceData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { 
  TrafficEnginePicture, 
  SocialProofPicture, 
  RetargetingMagnetPicture, 
  SecurityShieldPicture 
} from './HyperRealisticPictures';
import { PipelineOverviewPicture } from './PipelineOverviewPicture';

interface ImportanceSectionProps {
  onOpenCheckout: (plan?: string) => void;
}

export const ImportanceSection: React.FC<ImportanceSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section id="why-needed" className="py-20 border-b border-slate-800/80 bg-[#070B13] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Exact header matching image 2 */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Distinctive Universal 4-Pillar Pipeline Emblem Icon */}
          <div className="inline-flex items-center justify-center mb-3">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500/30 via-cyan-500/20 to-amber-500/30 blur-md opacity-75 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-tr from-slate-950 via-[#0B1220] to-slate-900 border border-emerald-400/50 p-2.5 shadow-xl flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
                  {/* Orbit rings representing the 4 pillars across the universe */}
                  <circle cx="20" cy="20" r="16" stroke="#334155" strokeWidth="1.2" strokeDasharray="3 3" />
                  <circle cx="20" cy="20" r="10.5" stroke="#10B981" strokeWidth="1.5" strokeOpacity="0.4" />
                  {/* 4 Orbiting stage nodes: Traffic (amber), Engagement (purple), Cart (rose), Uptime (emerald) */}
                  <circle cx="20" cy="4" r="3" fill="#F59E0B" />
                  <circle cx="36" cy="20" r="3" fill="#A855F7" />
                  <circle cx="20" cy="36" r="3" fill="#F43F5E" />
                  <circle cx="4" cy="20" r="3" fill="#10B981" />
                  {/* Center growth star hub */}
                  <circle cx="20" cy="20" r="4.5" fill="#10B981" />
                  <path d="M20 13 L20 27 M13 20 L27 20" stroke="#040914" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>

          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 font-mono">
            Universal Marketing Fundamentals
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-2 font-display leading-tight">
            For Marketers Throughout The Universe Because Everyone Needs
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Every business that grows online follows this exact 4-stage pipeline. Without the right software at each step, you leak traffic, trust, and revenue.
          </p>
        </div>

        {/* Single Picture & Visual Architecture Diagram that explains the Title Section */}
        <PipelineOverviewPicture />

        {/* 4 Pillars Grid (matching image 2) */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {IMPORTANCE_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between overflow-hidden hover:border-slate-700 transition-all group"
            >
              <div>
                {/* Hyper-realistic 3D Picture Visual Area */}
                <div className="w-full border-b border-slate-800/80 overflow-hidden relative group-hover:brightness-110 transition-all duration-300">
                  {pillar.iconType === 'traffic' && <TrafficEnginePicture />}
                  {pillar.iconType === 'engagement' && <SocialProofPicture />}
                  {pillar.iconType === 'retargeting' && <RetargetingMagnetPicture />}
                  {pillar.iconType === 'reliability' && <SecurityShieldPicture />}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-xs font-mono text-slate-400">
                    0{idx + 1}. Pillar
                  </div>
                  <h3 className="text-xl font-bold text-white mt-1 font-display">
                    {pillar.title}
                  </h3>

                  {/* Problem statement from Image 2 */}
                  <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pillar.problem}
                  </p>

                  {/* Solution in our bundle */}
                  <div className="mt-4 p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300">
                    <span className="font-semibold text-emerald-400 block mb-1">
                      Bundle Power: {pillar.softwareKey}
                    </span>
                    {pillar.solution}
                  </div>
                </div>
              </div>

              {/* Card Footer Metric */}
              <div className="px-6 py-3.5 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">Impact</span>
                <span className="text-emerald-400 font-bold font-mono">
                  {pillar.metrics}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Action strip */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onOpenCheckout('bundle')}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors cursor-pointer"
          >
            <span>Solve All 4 Pillars for $40/Month</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
