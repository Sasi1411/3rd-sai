import React, { useState, useEffect } from 'react';
import { 
  X, CheckCircle2, ShieldCheck, Lock, ArrowRight, 
  Sparkles, CreditCard, Check, Copy, ExternalLink, Globe, Play
} from 'lucide-react';
import { SOFTWARE_LIST, TOTAL_STANDALONE_PRICE, BUNDLE_PRICE, MONTHLY_SAVINGS } from '../data/softwareData';
import { getSoftwareLogo } from './SoftwareBrandLogos';
import { OnboardingUserData } from './OnboardingWizardModal';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlanCycle?: string;
  onOpenOnboarding?: (userData: OnboardingUserData) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  selectedPlanCycle = 'monthly',
  onOpenOnboarding,
}) => {
  const [step, setStep] = useState<'details' | 'processing' | 'success'>('details');
  const [cycle, setCycle] = useState<string>(selectedPlanCycle);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    businessName: '',
    phone: '',
    websiteUrl: '',
    cardNumber: '4242 •••• •••• 4242',
    expDate: '12/28',
    cvv: '888',
  });
  const [licenseKey, setLicenseKey] = useState('');
  const [copied, setCopied] = useState(false);
  const [countdown, setCountdown] = useState<number>(3);
  const [autoRedirecting, setAutoRedirecting] = useState<boolean>(true);

  // Sync state if selectedPlanCycle prop changes
  React.useEffect(() => {
    if (selectedPlanCycle) {
      setCycle(selectedPlanCycle);
    }
  }, [selectedPlanCycle]);

  if (!isOpen) return null;

  // Compute pricing and title based on selected tier
  const getPlanDetails = () => {
    switch (cycle) {
      case 'startup-1yr':
        return {
          title: 'Startup Business (1-Year Subscription)',
          monthlyPrice: 60,
          originalMonthly: 60,
          savingsNotice: 'Standard 1-Year Subscription',
          domains: '1 Domain Hosting',
          visitors: '3,000 Unique Visitors',
          tracking: '1 WebPage / Tracking',
          emailSubs: '3,000 Subscribers',
          chatSubs: '2,000 Subscribers',
          projects: '1 Project',
        };
      case 'startup':
      case 'startup-2yr':
      case 'two-year':
        return {
          title: 'Startup Business (2-Year Subscription)',
          monthlyPrice: 40,
          originalMonthly: 60,
          savingsNotice: 'Save 32% · Billed as 2-Year Term ($480 Total Savings)',
          domains: '1 Domain Hosting',
          visitors: '3,000 Unique Visitors',
          tracking: '1 WebPage / Tracking',
          emailSubs: '3,000 Subscribers',
          chatSubs: '2,000 Subscribers',
          projects: '1 Project',
        };
      case 'small-1yr':
        return {
          title: 'Small Business (1-Year Subscription)',
          monthlyPrice: 150,
          originalMonthly: 150,
          savingsNotice: 'Standard 1-Year Subscription',
          domains: '5 Domain Hosting',
          visitors: '10,000 Unique Visitors',
          tracking: '10 WebPage / Tracking',
          emailSubs: '10,000 Subscribers',
          chatSubs: '10,000 Subscribers',
          projects: '20 Projects',
        };
      case 'small':
      case 'small-2yr':
        return {
          title: 'Small Business (2-Year Subscription)',
          monthlyPrice: 105,
          originalMonthly: 150,
          savingsNotice: 'Save 30% · Billed as 2-Year Term ($1,080 Total Savings)',
          domains: '5 Domain Hosting',
          visitors: '10,000 Unique Visitors',
          tracking: '10 WebPage / Tracking',
          emailSubs: '10,000 Subscribers',
          chatSubs: '10,000 Subscribers',
          projects: '20 Projects',
        };
      case 'big-1yr':
        return {
          title: 'Big Business (1-Year Subscription)',
          monthlyPrice: 350,
          originalMonthly: 350,
          savingsNotice: 'Standard 1-Year Subscription',
          domains: '1,000 Domain Hosting',
          visitors: '100,000 Unique Visitors',
          tracking: '1,000 WebPage / Tracking',
          emailSubs: '300,000 Subscribers',
          chatSubs: '85,000 Subscribers',
          projects: '500 Projects',
        };
      case 'big':
      case 'big-2yr':
        return {
          title: 'Big Business (2-Year Subscription)',
          monthlyPrice: 245,
          originalMonthly: 350,
          savingsNotice: 'Save 30% · Max Capacity 2-Year Term ($2,520 Total Savings)',
          domains: '1,000 Domain Hosting',
          visitors: '100,000 Unique Visitors',
          tracking: '1,000 WebPage / Tracking',
          emailSubs: '300,000 Subscribers',
          chatSubs: '85,000 Subscribers',
          projects: '500 Projects',
        };
      case 'annual':
        return {
          title: 'BizzScale 6-in-1 Annual Pass',
          monthlyPrice: 32,
          originalMonthly: TOTAL_STANDALONE_PRICE,
          savingsNotice: `Save $${TOTAL_STANDALONE_PRICE - 32}/mo · Annual Billing`,
          domains: 'Unlimited Enterprise Access',
          visitors: 'Unlimited',
          tracking: 'Unlimited Monitoring',
          emailSubs: 'Enterprise Quota',
          chatSubs: 'Enterprise Quota',
          projects: 'Unlimited Projects',
        };
      default: // 'monthly'
        return {
          title: 'BizzScale Standard Monthly Plan',
          monthlyPrice: 60,
          originalMonthly: TOTAL_STANDALONE_PRICE,
          savingsNotice: `Save $${TOTAL_STANDALONE_PRICE - 60}/mo compared to separate SaaS`,
          domains: 'Full Enterprise Access',
          visitors: 'Full Access',
          tracking: 'Full Tracking',
          emailSubs: 'Full Access',
          chatSubs: 'Full Access',
          projects: 'Full Access',
        };
    }
  };

  const planInfo = getPlanDetails();
  const currentPrice = planInfo.monthlyPrice;

  const handleLaunchOnboarding = (overrideKey?: string) => {
    onOpenOnboarding?.({
      businessName: formData.businessName || 'Your Business',
      email: formData.email,
      websiteUrl: formData.websiteUrl,
      whatsappNumber: formData.phone,
      plan: cycle,
      licenseKey: overrideKey || licenseKey || 'BZS-8X2F-9KQ1-M7P4',
    });
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('processing');
    setTimeout(() => {
      const generatedKey = 'BZS-' + Math.random().toString(36).substring(2, 6).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase();
      setLicenseKey(generatedKey);
      setStep('success');
      setAutoRedirecting(true);
      setCountdown(3);
    }, 1800);
  };

  // Auto-launch onboarding countdown when reaching success
  useEffect(() => {
    if (step === 'success' && autoRedirecting) {
      if (countdown > 0) {
        const timer = setTimeout(() => {
          setCountdown((prev) => prev - 1);
        }, 1000);
        return () => clearTimeout(timer);
      } else {
        handleLaunchOnboarding();
      }
    }
  }, [step, autoRedirecting, countdown]);

  const handleCopy = () => {
    navigator.clipboard.writeText(licenseKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 text-white my-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'details' && (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider font-mono">
              <Sparkles className="w-4 h-4" />
              <span>Instant Access Provisioning</span>
            </div>
            <h2 className="text-2xl font-bold font-display mt-1">
              Unlock All 6 Applications
            </h2>
            <p className="text-xs text-slate-300 mt-1">
              No feature restrictions. Includes full enterprise access to Mailchimp, Hostinger, Fomo, Wati, UptimeRobot, and Bitly.
            </p>

            {/* Plan switcher */}
            <div className="mt-5 p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="text-sm font-bold text-white font-display">
                    {planInfo.title}
                  </div>
                  <div className="text-[11px] text-emerald-400 font-medium">
                    {planInfo.savingsNotice}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-extrabold text-white font-mono">
                    ${planInfo.monthlyPrice} <span className="text-xs text-slate-400 font-sans">/mo</span>
                  </div>
                  {planInfo.originalMonthly > planInfo.monthlyPrice && (
                    <div className="text-[10px] text-slate-400 line-through">
                      was ${planInfo.originalMonthly}/mo
                    </div>
                  )}
                </div>
              </div>

              {/* Quick tier selector tabs */}
              <div className="flex flex-wrap items-center justify-between gap-1.5 pt-2 border-t border-slate-800/80">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-[10px] font-mono text-slate-400 uppercase mr-1">Tier:</span>
                  <button
                    type="button"
                    onClick={() => setCycle(cycle.includes('1yr') ? 'startup-1yr' : 'startup-2yr')}
                    className={`px-2.5 py-1 rounded-md text-xs font-semibold cursor-pointer transition-all ${
                      cycle.startsWith('startup')
                        ? 'bg-amber-400 text-slate-950 shadow-sm font-bold'
                        : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
                    }`}
                  >
                    Startup ({cycle.includes('1yr') ? '$60' : '$40'}/mo)
                  </button>
                  <button
                    type="button"
                    onClick={() => setCycle(cycle.includes('1yr') ? 'small-1yr' : 'small-2yr')}
                    className={`px-2.5 py-1 rounded-md text-xs font-semibold cursor-pointer transition-all ${
                      cycle.startsWith('small')
                        ? 'bg-amber-400 text-slate-950 shadow-sm font-bold'
                        : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
                    }`}
                  >
                    Small Biz ({cycle.includes('1yr') ? '$150' : '$105'}/mo)
                  </button>
                  <button
                    type="button"
                    onClick={() => setCycle(cycle.includes('1yr') ? 'big-1yr' : 'big-2yr')}
                    className={`px-2.5 py-1 rounded-md text-xs font-semibold cursor-pointer transition-all ${
                      cycle.startsWith('big')
                        ? 'bg-amber-400 text-slate-950 shadow-sm font-bold'
                        : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
                    }`}
                  >
                    Big Biz ({cycle.includes('1yr') ? '$350' : '$245'}/mo)
                  </button>
                </div>

                <div className="flex items-center gap-1 bg-slate-900 p-0.5 rounded-lg border border-slate-800 text-[11px]">
                  <button
                    type="button"
                    onClick={() => {
                      if (cycle.startsWith('startup')) setCycle('startup-1yr');
                      else if (cycle.startsWith('small')) setCycle('small-1yr');
                      else if (cycle.startsWith('big')) setCycle('big-1yr');
                    }}
                    className={`px-2 py-0.5 rounded font-semibold cursor-pointer transition-all ${
                      cycle.includes('1yr') ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    1-Year
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (cycle.startsWith('startup')) setCycle('startup-2yr');
                      else if (cycle.startsWith('small')) setCycle('small-2yr');
                      else if (cycle.startsWith('big')) setCycle('big-2yr');
                    }}
                    className={`px-2 py-0.5 rounded font-bold cursor-pointer transition-all ${
                      !cycle.includes('1yr') ? 'bg-emerald-400 text-slate-950 shadow-sm' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    2-Year (-32%)
                  </button>
                </div>
              </div>
            </div>

            {/* Software limits banner */}
            <div className="mt-3.5 p-3 rounded-xl bg-slate-950/60 border border-white/[0.06] grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-1.5 text-[10px] text-slate-400 uppercase font-mono mb-0.5">
                  {getSoftwareLogo('hostinger', 'w-3.5 h-3.5')}
                  <span>Hostinger</span>
                </div>
                <div className="font-semibold text-slate-200 truncate">{planInfo.domains}</div>
              </div>
              <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-1.5 text-[10px] text-slate-400 uppercase font-mono mb-0.5">
                  {getSoftwareLogo('fomo', 'w-3.5 h-3.5')}
                  <span>Fomo</span>
                </div>
                <div className="font-semibold text-slate-200 truncate">{planInfo.visitors}</div>
              </div>
              <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-1.5 text-[10px] text-slate-400 uppercase font-mono mb-0.5">
                  {getSoftwareLogo('uptimerobot', 'w-3.5 h-3.5')}
                  <span>Uptime Robot</span>
                </div>
                <div className="font-semibold text-slate-200 truncate">{planInfo.tracking}</div>
              </div>
              <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-1.5 text-[10px] text-slate-400 uppercase font-mono mb-0.5">
                  {getSoftwareLogo('mailchimp', 'w-3.5 h-3.5')}
                  <span>Mailchimp</span>
                </div>
                <div className="font-semibold text-slate-200 truncate">{planInfo.emailSubs}</div>
              </div>
              <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-1.5 text-[10px] text-slate-400 uppercase font-mono mb-0.5">
                  {getSoftwareLogo('wati', 'w-3.5 h-3.5')}
                  <span>Wati</span>
                </div>
                <div className="font-semibold text-slate-200 truncate">{planInfo.chatSubs}</div>
              </div>
              <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-1.5 text-[10px] text-slate-400 uppercase font-mono mb-0.5">
                  {getSoftwareLogo('bitly', 'w-3.5 h-3.5')}
                  <span>Bitly</span>
                </div>
                <div className="font-semibold text-slate-200 truncate">{planInfo.projects}</div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Morgan"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Business Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@yourcompany.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Company / Brand Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Growth Media LLC"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    WhatsApp Number (for Wati API setup)
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 019-2834"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Website URL / Primary Domain (for Hostinger &amp; UptimeRobot)
                </label>
                <div className="flex items-center rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm">
                  <Globe className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
                  <input
                    type="text"
                    placeholder="e.g. mycompany.com or store.com"
                    value={formData.websiteUrl}
                    onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                    className="w-full bg-transparent text-white focus:outline-none font-mono text-xs"
                  />
                </div>
              </div>

              {/* Simulated Payment Area */}
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1.5 text-white font-semibold">
                    <CreditCard className="w-4 h-4 text-emerald-400" />
                    <span>Payment Method</span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-400">
                    <Lock className="w-3.5 h-3.5" />
                    <span>256-Bit SSL Encrypted</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <input
                    type="text"
                    value={formData.cardNumber}
                    readOnly
                    className="col-span-2 px-3 py-1.5 rounded bg-slate-900 border border-slate-700 text-xs font-mono text-slate-200"
                  />
                  <input
                    type="text"
                    value={formData.expDate}
                    readOnly
                    className="px-2 py-1.5 rounded bg-slate-900 border border-slate-700 text-xs font-mono text-center text-slate-200"
                  />
                </div>
              </div>

              {/* Price summary */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-sm">
                <span className="text-slate-400">Total Billed Today:</span>
                <span className="text-xl font-bold text-white font-mono">
                  ${currentPrice} <span className="text-xs text-slate-400 font-sans">/ month</span>
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Authorize &amp; Generate 6-App Keys</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center text-[11px] text-slate-400">
                Guaranteed with our 30-Day Money-Back Guarantee. No long term lock-in.
              </div>
            </form>
          </div>
        )}

        {step === 'processing' && (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 border-4 border-emerald-400 border-t-transparent rounded-full animate-spin mx-auto" />
            <h3 className="text-xl font-bold text-white">
              Provisioning Your 6-in-1 Ecosystem...
            </h3>
            <p className="text-xs text-slate-300 max-w-sm mx-auto">
              Registering licenses with Mailchimp, Hostinger, Fomo, Wati, UptimeRobot, and Bitly. Allocating unmetered cloud capacity...
            </p>
          </div>
        )}

        {step === 'success' && (
          <div className="py-4 space-y-6">
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400 mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-white font-display mt-3">
                Unlimited Access Unlocked!
              </h2>
              <p className="text-xs text-slate-300 mt-1">
                Your master BizzScale license has been generated for {formData.businessName || 'your business'}.
              </p>
            </div>

            {/* License Key Box */}
            <div className="p-4 rounded-xl bg-slate-950 border border-emerald-500/40">
              <div className="text-[11px] text-slate-400 uppercase font-mono">
                Master 6-App Access Token:
              </div>
              <div className="mt-1 flex items-center justify-between gap-3">
                <span className="font-mono text-base font-bold text-emerald-300 tracking-wider">
                  {licenseKey}
                </span>
                <button
                  onClick={handleCopy}
                  className="px-3 py-1 text-xs font-semibold rounded bg-slate-800 text-slate-200 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy Key'}</span>
                </button>
              </div>
            </div>

            {/* App Credentials Status */}
            <div className="space-y-2 text-xs">
              <div className="font-semibold text-slate-300 font-mono text-[11px] uppercase">
                Active Provisioned Endpoints:
              </div>
              <div className="grid grid-cols-2 gap-2">
                {SOFTWARE_LIST.map((app) => (
                  <div
                    key={app.id}
                    className="p-2 rounded bg-slate-950 border border-slate-800 flex items-center justify-between"
                  >
                    <span className="text-slate-300 font-medium">{app.name}</span>
                    <span className="text-[10px] text-emerald-400 font-mono">Ready · 100%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/20 text-xs text-emerald-300">
              A copy of your setup instructions and VIP onboarding calendar invite has been sent to <span className="font-bold text-white">{formData.email || 'your email'}</span>.
            </div>

            {/* Setup Wizard Auto-Launch & CTA */}
            <div className="space-y-3 pt-2">
              <div className="p-3.5 rounded-xl bg-gradient-to-r from-emerald-950/70 via-slate-900 to-teal-950/70 border border-emerald-500/40 text-center space-y-1">
                <div className="text-xs font-semibold text-emerald-300 flex items-center justify-center gap-1.5 font-mono">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  {autoRedirecting ? (
                    <span>Launching step-by-step tool setup in <strong className="text-white text-sm">{countdown}s</strong>...</span>
                  ) : (
                    <span>Ready to configure your 6 software tools</span>
                  )}
                </div>
                <p className="text-[11px] text-slate-400">
                  We'll guide you through connecting domains, WhatsApp bots, social proof &amp; email sequences.
                </p>
              </div>

              <button
                type="button"
                onClick={() => handleLaunchOnboarding()}
                className="w-full py-3.5 text-sm font-extrabold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:brightness-110 rounded-xl transition-all shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Start Step-by-Step Setup Wizard Now</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>

              <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                {autoRedirecting ? (
                  <button
                    type="button"
                    onClick={() => setAutoRedirecting(false)}
                    className="hover:text-slate-300 underline underline-offset-2 cursor-pointer"
                  >
                    Pause automatic countdown
                  </button>
                ) : (
                  <span className="text-[11px] text-slate-500">Auto-countdown paused</span>
                )}

                <button
                  type="button"
                  onClick={onClose}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Exit to Dashboard
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
