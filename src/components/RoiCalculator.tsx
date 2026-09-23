import React, { useState, useMemo } from 'react';
import { 
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, 
  Tooltip, Legend, CartesianGrid, Cell 
} from 'recharts';
import { Check, Plus, Minus, Sparkles, TrendingUp, DollarSign, ArrowRight, ShieldCheck, Zap, RotateCcw } from 'lucide-react';
import { SOFTWARE_LIST, BUNDLE_PRICE } from '../data/softwareData';
import { getSoftwareLogo } from './SoftwareBrandLogos';

interface RoiCalculatorProps {
  onOpenCheckout: (plan?: string) => void;
  billingCycle: 'monthly' | 'annual' | 'two-year';
}

type PresetKey = 'all' | 'marketing' | 'conversion' | 'infrastructure' | 'custom';

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ 
  onOpenCheckout,
  billingCycle 
}) => {
  // Set of selected software IDs
  const [selectedTools, setSelectedTools] = useState<string[]>(
    SOFTWARE_LIST.map((s) => s.id)
  );

  // Time horizon in years (1, 2, or 3 years)
  const [timeHorizon, setTimeHorizon] = useState<number>(1);

  // Bundle monthly rate based on parent's billing cycle: $60 standard monthly, $40 if 2-year plan
  const bundleMonthly = billingCycle === 'two-year' ? 40 : (billingCycle === 'annual' ? 32 : 60);
  const bundleYearly = bundleMonthly * 12;

  // Toggle tool
  const toggleTool = (id: string) => {
    setSelectedTools((prev) => {
      if (prev.includes(id)) {
        // Keep at least one tool selected
        if (prev.length === 1) return prev;
        return prev.filter((tId) => tId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  // Preset handlers
  const applyPreset = (preset: PresetKey) => {
    switch (preset) {
      case 'all':
        setSelectedTools(SOFTWARE_LIST.map((s) => s.id));
        break;
      case 'marketing':
        setSelectedTools(['mailchimp', 'wati', 'bitly']);
        break;
      case 'conversion':
        setSelectedTools(['fomo', 'wati', 'hostinger']);
        break;
      case 'infrastructure':
        setSelectedTools(['hostinger', 'uptimerobot', 'bitly']);
        break;
      default:
        break;
    }
  };

  // Determine current active preset if matches
  const activePreset = useMemo<PresetKey>(() => {
    if (selectedTools.length === SOFTWARE_LIST.length) return 'all';
    const sorted = [...selectedTools].sort().join(',');
    if (sorted === ['bitly', 'mailchimp', 'wati'].sort().join(',')) return 'marketing';
    if (sorted === ['fomo', 'hostinger', 'wati'].sort().join(',')) return 'conversion';
    if (sorted === ['bitly', 'hostinger', 'uptimerobot'].sort().join(',')) return 'infrastructure';
    return 'custom';
  }, [selectedTools]);

  // Calculations
  const selectedStandaloneMonthly = useMemo(() => {
    return SOFTWARE_LIST
      .filter((s) => selectedTools.includes(s.id))
      .reduce((sum, s) => sum + s.standalonePrice, 0);
  }, [selectedTools]);

  const selectedStandaloneYearly = selectedStandaloneMonthly * 12;
  const annualSavings = Math.max(0, selectedStandaloneYearly - bundleYearly);
  const totalSavingsProjected = annualSavings * timeHorizon;
  const roiPercentage = bundleYearly > 0 
    ? Math.round((annualSavings / bundleYearly) * 100) 
    : 0;

  // Formatted currency string for Total Annual Savings
  const formattedAnnualSavings = useMemo(() => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(annualSavings);
  }, [annualSavings]);

  // Payback period in days
  const dailySavings = annualSavings / 365;
  const paybackDays = dailySavings > 0 
    ? Math.max(1, Math.round(bundleYearly / (selectedStandaloneYearly / 365))) 
    : 365;

  // Chart Data Preparation for Recharts
  const chartData = useMemo(() => {
    return [
      {
        period: 'Year 1',
        standalone: selectedStandaloneYearly,
        bundle: bundleYearly,
        savings: annualSavings,
      },
      {
        period: 'Year 2 (Cumulative)',
        standalone: selectedStandaloneYearly * 2,
        bundle: bundleYearly * 2,
        savings: annualSavings * 2,
      },
      {
        period: 'Year 3 (Cumulative)',
        standalone: selectedStandaloneYearly * 3,
        bundle: bundleYearly * 3,
        savings: annualSavings * 3,
      },
    ];
  }, [selectedStandaloneYearly, bundleYearly, annualSavings]);

  // Custom Recharts Tooltip
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-slate-950/95 border border-slate-700/80 p-4 rounded-xl shadow-2xl backdrop-blur-md text-xs font-sans space-y-2 min-w-[210px]">
          <div className="font-bold text-white border-b border-slate-800 pb-1.5 flex items-center justify-between">
            <span>{label}</span>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
              +{roiPercentage}% ROI
            </span>
          </div>
          <div className="flex justify-between items-center text-rose-300">
            <span>Separate Vendors:</span>
            <span className="font-mono font-bold">${data.standalone.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center text-slate-300">
            <span>BizzScale Bundle:</span>
            <span className="font-mono font-bold">${data.bundle.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center text-emerald-400 font-semibold border-t border-slate-800 pt-1.5">
            <span>Net Money Retained:</span>
            <span className="font-mono font-bold">+${data.savings.toLocaleString()}</span>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="mt-16 rounded-3xl bg-slate-900/90 border border-white/[0.08] p-6 sm:p-8 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div 
        aria-hidden="true" 
        className="absolute -top-24 -right-24 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute -bottom-24 -left-24 w-80 h-80 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" 
      />

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/[0.06] relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive ROI &amp; Savings Engine</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1.5 font-display">
            Dynamic Software Combination ROI Visualizer
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Toggle which software tools you need or select preset workflows. Watch your projected yearly cost savings and net retained profit recalculate instantaneously in the D3/Recharts bar chart.
          </p>
        </div>

        {/* Quick Reset / Summary Pill */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => applyPreset('all')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
            title="Reset to all 6 tools"
          >
            <RotateCcw className="w-3.5 h-3.5 text-emerald-400" />
            <span>Reset All (6 Tools)</span>
          </button>
        </div>
      </div>

      {/* Workflow Presets Bar */}
      <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
        <span className="font-mono text-slate-400 font-semibold mr-1">Presets:</span>
        <button
          onClick={() => applyPreset('all')}
          className={`px-3 py-1.5 rounded-lg border font-semibold transition-all cursor-pointer ${
            activePreset === 'all'
              ? 'bg-emerald-400 text-slate-950 border-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.3)]'
              : 'bg-slate-950/60 text-slate-300 border-white/[0.08] hover:bg-slate-800'
          }`}
        >
          All 6 Powerhouses (Max Savings)
        </button>
        <button
          onClick={() => applyPreset('marketing')}
          className={`px-3 py-1.5 rounded-lg border font-semibold transition-all cursor-pointer ${
            activePreset === 'marketing'
              ? 'bg-emerald-400 text-slate-950 border-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.3)]'
              : 'bg-slate-950/60 text-slate-300 border-white/[0.08] hover:bg-slate-800'
          }`}
        >
          Marketing &amp; Leads (Mailchimp + Wati + Bitly)
        </button>
        <button
          onClick={() => applyPreset('conversion')}
          className={`px-3 py-1.5 rounded-lg border font-semibold transition-all cursor-pointer ${
            activePreset === 'conversion'
              ? 'bg-emerald-400 text-slate-950 border-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.3)]'
              : 'bg-slate-950/60 text-slate-300 border-white/[0.08] hover:bg-slate-800'
          }`}
        >
          Conversion &amp; Trust (Fomo + Wati + Hostinger)
        </button>
        <button
          onClick={() => applyPreset('infrastructure')}
          className={`px-3 py-1.5 rounded-lg border font-semibold transition-all cursor-pointer ${
            activePreset === 'infrastructure'
              ? 'bg-emerald-400 text-slate-950 border-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.3)]'
              : 'bg-slate-950/60 text-slate-300 border-white/[0.08] hover:bg-slate-800'
          }`}
        >
          Tech &amp; Reliability (Hostinger + Uptime + Bitly)
        </button>
      </div>

      {/* Interactive Tool Toggles Grid */}
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
        {SOFTWARE_LIST.map((tool) => {
          const isSelected = selectedTools.includes(tool.id);
          return (
            <button
              key={tool.id}
              onClick={() => toggleTool(tool.id)}
              className={`p-3 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between relative group ${
                isSelected
                  ? 'bg-slate-800/90 border-emerald-400/50 shadow-[0_0_15px_rgba(16,185,129,0.15)] ring-1 ring-emerald-400/40'
                  : 'bg-slate-950/40 border-white/[0.06] opacity-60 hover:opacity-100 hover:border-white/[0.12]'
              }`}
            >
              <div className="flex items-start justify-between gap-1 w-full">
                <div className="p-1 rounded-lg bg-slate-900 border border-white/[0.06]">
                  {getSoftwareLogo(tool.id, 'w-5 h-5')}
                </div>
                <div
                  className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors ${
                    isSelected
                      ? 'bg-emerald-400 text-slate-950'
                      : 'bg-slate-800 border border-slate-700 text-transparent group-hover:text-slate-500'
                  }`}
                >
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
              </div>

              <div className="mt-3">
                <div className="text-xs font-bold text-white truncate font-display">
                  {tool.name}
                </div>
                <div className="flex items-baseline justify-between mt-0.5">
                  <span className="text-[11px] font-mono text-rose-400 font-semibold">
                    ${tool.standalonePrice}/mo
                  </span>
                  <span className="text-[10px] text-slate-400">
                    ${tool.standalonePrice * 12}/yr
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Middle Section: Metrics Summary Cards */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {/* Metric 1 */}
        <div className="p-4 rounded-2xl bg-slate-950/70 border border-white/[0.06]">
          <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
            Selected Standalone
          </div>
          <div className="text-xl sm:text-2xl font-black text-rose-400 font-mono mt-1">
            ${selectedStandaloneYearly.toLocaleString()}
            <span className="text-xs font-normal text-slate-400 font-sans">/yr</span>
          </div>
          <div className="text-[11px] text-slate-400 mt-0.5">
            ${selectedStandaloneMonthly}/mo for {selectedTools.length} tool{selectedTools.length > 1 ? 's' : ''}
          </div>
        </div>

        {/* Metric 2 */}
        <div className="p-4 rounded-2xl bg-slate-950/70 border border-white/[0.06]">
          <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
            BizzScale Investment
          </div>
          <div className="text-xl sm:text-2xl font-black text-white font-mono mt-1">
            ${bundleYearly.toLocaleString()}
            <span className="text-xs font-normal text-slate-400 font-sans">/yr</span>
          </div>
          <div className="text-[11px] text-emerald-400 mt-0.5 font-medium">
            Includes all 6 powerhouses
          </div>
        </div>

        {/* Metric 3 */}
        <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30">
          <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">
            Total Annual Savings
          </div>
          <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono mt-1">
            {formattedAnnualSavings}
            <span className="text-xs font-normal text-emerald-300 font-sans">/yr</span>
          </div>
          <div className="text-[11px] text-emerald-300/80 mt-0.5">
            Retained in your company bank
          </div>
        </div>

        {/* Metric 4 */}
        <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/30">
          <div className="text-[11px] font-mono text-indigo-400 uppercase tracking-wider font-semibold">
            Return on Investment
          </div>
          <div className="text-xl sm:text-2xl font-black text-indigo-300 font-mono mt-1">
            {roiPercentage}% ROI
          </div>
          <div className="text-[11px] text-indigo-200/80 mt-0.5">
            Break-even in ~{paybackDays} days
          </div>
        </div>
      </div>

      {/* Summary Card directly above D3 Bar Chart displaying Total Annual Savings as formatted currency */}
      <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-emerald-950/80 via-slate-900/95 to-teal-950/80 border border-emerald-500/40 shadow-[0_10px_35px_rgba(16,185,129,0.18)] relative overflow-hidden">
        <div 
          aria-hidden="true" 
          className="absolute -top-12 -right-12 w-56 h-56 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none" 
        />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 relative z-10">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 shadow-lg shadow-emerald-950">
              <DollarSign className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400">
                  Dynamic ROI Projection
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[10px] font-mono font-semibold">
                  {selectedTools.length} of 6 Tools Selected
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-black text-white font-display mt-0.5 tracking-tight">
                Total Annual Savings
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                Calculated net savings kept in your business every year by replacing standalone invoices with the BizzScale bundle.
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-slate-950/80 border border-emerald-500/30 text-left md:text-right shrink-0 min-w-[240px]">
            <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
              Total Annual Savings
            </div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-emerald-400 font-mono tracking-tight mt-0.5">
              {formattedAnnualSavings}
            </div>
            <div className="text-xs text-emerald-300 mt-1.5 flex items-center md:justify-end gap-1.5 font-medium font-mono">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>+{roiPercentage}% ROI vs individual licenses</span>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Chart: Standalone vs Bundle vs Cumulative Savings using Recharts */}
      <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-slate-950/80 border border-white/[0.08]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <h4 className="text-base font-bold text-white font-display">
              Multi-Year Savings &amp; Capital Accumulation Chart
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Comparison between separate vendor expenses, BizzScale unified bundle cost, and cumulative net savings.
            </p>
          </div>

          {/* Chart Legend Summary Pill */}
          <div className="flex items-center gap-4 text-xs font-medium shrink-0">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-rose-500/80 inline-block" />
              <span className="text-slate-300">Individual SaaS Bills</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-slate-400 inline-block" />
              <span className="text-slate-300">BizzScale Plan</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-emerald-400 inline-block" />
              <span className="text-emerald-300 font-semibold">Net Retained Cash</span>
            </div>
          </div>
        </div>

        {/* Recharts Container with explicit min-width safety */}
        <div className="w-full h-72 sm:h-80 min-w-0">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 10, right: 10, left: -10, bottom: 5 }}
            >
              <CartesianGrid 
                strokeDasharray="3 3" 
                stroke="rgba(255, 255, 255, 0.05)" 
                vertical={false} 
              />
              <XAxis 
                dataKey="period" 
                tick={{ fill: '#94a3b8', fontSize: 12 }} 
                axisLine={{ stroke: 'rgba(255, 255, 255, 0.1)' }}
                tickLine={false}
              />
              <YAxis 
                tick={{ fill: '#94a3b8', fontSize: 11 }} 
                tickFormatter={(value) => `$${value >= 1000 ? `${(value / 1000).toFixed(0)}k` : value}`}
                axisLine={{ stroke: 'rgba(255, 255, 255, 0.1)' }}
                tickLine={false}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="standalone" 
                name="Individual SaaS Invoices" 
                fill="#f43f5e" 
                radius={[6, 6, 0, 0]} 
                maxBarSize={44}
              />
              <Bar 
                dataKey="bundle" 
                name="BizzScale Unified Bundle" 
                fill="#64748b" 
                radius={[6, 6, 0, 0]} 
                maxBarSize={44}
              />
              <Bar 
                dataKey="savings" 
                name="Cumulative Net Cash Kept" 
                fill="#34d399" 
                radius={[6, 6, 0, 0]} 
                maxBarSize={44}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Dynamic ROI Call-to-Action Bar */}
        <div className="mt-6 pt-5 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white font-display">
                You save ${annualSavings.toLocaleString()} in your first year alone
              </div>
              <div className="text-xs text-slate-400">
                Full-featured enterprise access across all 6 applications with zero tier limitations.
              </div>
            </div>
          </div>

          <button
            onClick={() => onOpenCheckout(billingCycle)}
            className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:from-emerald-300 hover:to-teal-200 transition-all duration-300 shadow-[0_0_20px_rgba(52,211,153,0.3)] flex items-center justify-center gap-2 cursor-pointer shrink-0"
          >
            <span>Lock In These Savings at ${bundleMonthly}/mo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
