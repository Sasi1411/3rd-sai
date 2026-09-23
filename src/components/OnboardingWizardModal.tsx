import React, { useState, useEffect } from 'react';
import {
  X,
  CheckCircle2,
  Circle,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Copy,
  Check,
  ExternalLink,
  Globe,
  Shield,
  MessageSquare,
  Zap,
  RefreshCw,
  Smartphone,
  Key,
  Mail,
  Clock,
  Download,
  ArrowRight,
  AlertCircle,
  ShoppingBag,
  Send,
  Link as LinkIcon,
  Server,
  Layers,
  HelpCircle,
  ShieldCheck
} from 'lucide-react';
import { getSoftwareLogo } from './SoftwareBrandLogos';

export interface OnboardingUserData {
  businessName?: string;
  email?: string;
  websiteUrl?: string;
  whatsappNumber?: string;
  plan?: string;
  licenseKey?: string;
}

interface OnboardingWizardModalProps {
  isOpen: boolean;
  onClose: () => void;
  userData?: OnboardingUserData;
}

interface ToolSetupStatus {
  hostinger: boolean;
  wati: boolean;
  fomo: boolean;
  mailchimp: boolean;
  uptimerobot: boolean;
  bitly: boolean;
}

export const OnboardingWizardModal: React.FC<OnboardingWizardModalProps> = ({
  isOpen,
  onClose,
  userData,
}) => {
  // Step navigation: 1 to 7
  // 1: Welcome & License Confirmation
  // 2: Hostinger (Cloud Hosting & Custom Domain)
  // 3: Wati (WhatsApp, Telegram, eCommerce & Webhooks)
  // 4: Fomo (Social Proof & Live Purchases)
  // 5: Mailchimp (Email Journeys & Contact Sync)
  // 6: UptimeRobot & Bitly (Uptime Watchdog & Branded Links)
  // 7: Launchpad & Final Verification
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [copiedKey, setCopiedKey] = useState(false);

  // Configuration state for each tool
  const [config, setConfig] = useState({
    businessName: userData?.businessName || 'My Business',
    email: userData?.email || 'admin@mybusiness.com',
    licenseKey: userData?.licenseKey || 'BZS-8X2F-9KQ1-M7P4',
    // Hostinger
    domain: userData?.websiteUrl ? userData.websiteUrl.replace(/^https?:\/\//, '') : 'mybrand.com',
    hostingTier: 'Enterprise NVMe Cloud (LiteSpeed)',
    sslActive: true,
    cmsChoice: 'wordpress',
    isDomainVerified: false,
    // Wati
    whatsappNumber: userData?.whatsappNumber || '+1 (555) 234-5678',
    telegramBotHandle: '@mybrand_official_bot',
    enableCatalog: true,
    enableTelegramStore: true,
    enableShopifyWebhook: true,
    codToPrepaidEnabled: true,
    formWebhookType: 'elementor',
    isWatiTested: false,
    // Fomo
    fomoPacing: 'moderate',
    enablePurchaseToasts: true,
    enableVisitorCounter: true,
    isFomoScriptVerified: false,
    // Mailchimp
    audienceName: 'VIP Customer Growth List',
    senderEmail: userData?.email || 'newsletter@mybrand.com',
    enableCartRecoveryEmail: true,
    enableAutoWelcome: true,
    isMailchimpSyncActive: false,
    // UptimeRobot
    monitoredUrl: userData?.websiteUrl || 'https://mybrand.com',
    alertPhone: userData?.whatsappNumber || '+1 (555) 234-5678',
    isUptimePingActive: false,
    // Bitly
    customShortDomain: 'go.mybrand.link',
    firstCampaignSlug: 'welcome-offer',
    isBitlyDomainActive: false,
  });

  // Track completion of tools
  const [completedTools, setCompletedTools] = useState<ToolSetupStatus>({
    hostinger: false,
    wati: false,
    fomo: false,
    mailchimp: false,
    uptimerobot: false,
    bitly: false,
  });

  // Action loading states
  const [testingHostinger, setTestingHostinger] = useState(false);
  const [testingWati, setTestingWati] = useState(false);
  const [testingFomo, setTestingFomo] = useState(false);
  const [testingMailchimp, setTestingMailchimp] = useState(false);
  const [testingUptime, setTestingUptime] = useState(false);
  const [testingBitly, setTestingBitly] = useState(false);

  // Sync props to state on open
  useEffect(() => {
    if (userData) {
      setConfig((prev) => ({
        ...prev,
        businessName: userData.businessName || prev.businessName,
        email: userData.email || prev.email,
        licenseKey: userData.licenseKey || prev.licenseKey,
        domain: userData.websiteUrl ? userData.websiteUrl.replace(/^https?:\/\//, '') : prev.domain,
        monitoredUrl: userData.websiteUrl || (prev.domain ? `https://${prev.domain}` : prev.monitoredUrl),
        whatsappNumber: userData.whatsappNumber || prev.whatsappNumber,
        alertPhone: userData.whatsappNumber || prev.alertPhone,
      }));
    }
  }, [userData]);

  if (!isOpen) return null;

  const handleCopyLicense = () => {
    navigator.clipboard.writeText(config.licenseKey);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  // Simulated Verification Handlers
  const handleVerifyHostinger = () => {
    setTestingHostinger(true);
    setTimeout(() => {
      setTestingHostinger(false);
      setConfig((prev) => ({ ...prev, isDomainVerified: true }));
      setCompletedTools((prev) => ({ ...prev, hostinger: true }));
    }, 1200);
  };

  const handleVerifyWati = () => {
    setTestingWati(true);
    setTimeout(() => {
      setTestingWati(false);
      setConfig((prev) => ({ ...prev, isWatiTested: true }));
      setCompletedTools((prev) => ({ ...prev, wati: true }));
    }, 1200);
  };

  const handleVerifyFomo = () => {
    setTestingFomo(true);
    setTimeout(() => {
      setTestingFomo(false);
      setConfig((prev) => ({ ...prev, isFomoScriptVerified: true }));
      setCompletedTools((prev) => ({ ...prev, fomo: true }));
    }, 1200);
  };

  const handleVerifyMailchimp = () => {
    setTestingMailchimp(true);
    setTimeout(() => {
      setTestingMailchimp(false);
      setConfig((prev) => ({ ...prev, isMailchimpSyncActive: true }));
      setCompletedTools((prev) => ({ ...prev, mailchimp: true }));
    }, 1200);
  };

  const handleVerifyUptime = () => {
    setTestingUptime(true);
    setTimeout(() => {
      setTestingUptime(false);
      setConfig((prev) => ({ ...prev, isUptimePingActive: true }));
      setCompletedTools((prev) => ({ ...prev, uptimerobot: true }));
    }, 1200);
  };

  const handleVerifyBitly = () => {
    setTestingBitly(true);
    setTimeout(() => {
      setTestingBitly(false);
      setConfig((prev) => ({ ...prev, isBitlyDomainActive: true }));
      setCompletedTools((prev) => ({ ...prev, bitly: true }));
    }, 1200);
  };

  const totalCompleted = Object.values(completedTools).filter(Boolean).length;

  const stepTitles = [
    { num: 1, label: 'Welcome & Token' },
    { num: 2, label: 'Hostinger Hosting' },
    { num: 3, label: 'Wati Omnichannel' },
    { num: 4, label: 'Fomo Proof' },
    { num: 5, label: 'Mailchimp Email' },
    { num: 6, label: 'Uptime & Bitly' },
    { num: 7, label: 'Launchpad' },
  ];

  const handleExportJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(config, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `bizzscale-setup-${config.domain || 'credentials'}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl text-white my-6 max-h-[92vh] flex flex-col overflow-hidden">
        
        {/* Top Header Bar */}
        <div className="px-6 py-4 border-b border-slate-800 bg-slate-950/80 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-0.5 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <Sparkles className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white font-display">BizzScale Setup Concierge</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">
                  Step {currentStep} of 7
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Guiding {config.businessName} through enterprise tool provisioning
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Completion badge */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300">
              <span className="text-emerald-400 font-bold">{totalCompleted}/6</span> Tools Live
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              title="Close and finish setup later"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Step Indicator Bar */}
        <div className="px-6 py-2.5 bg-slate-950/50 border-b border-slate-800/80 overflow-x-auto scrollbar-none shrink-0">
          <div className="flex items-center justify-between min-w-[620px] gap-2 text-xs">
            {stepTitles.map((step) => {
              const isActive = currentStep === step.num;
              const isPast = currentStep > step.num;
              return (
                <button
                  key={step.num}
                  type="button"
                  onClick={() => setCurrentStep(step.num)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                    isActive
                      ? 'bg-emerald-400/15 text-emerald-300 border border-emerald-500/30 font-semibold'
                      : isPast
                      ? 'text-slate-300 hover:text-white'
                      : 'text-slate-500 hover:text-slate-400'
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-mono ${
                      isActive
                        ? 'bg-emerald-400 text-slate-950 font-bold'
                        : isPast
                        ? 'bg-emerald-500/20 text-emerald-400'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {isPast ? <Check className="w-3 h-3" /> : step.num}
                  </span>
                  <span>{step.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Scrollable Step Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">

          {/* STEP 1: WELCOME & MASTER ACCESS KEY */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="text-center max-w-xl mx-auto space-y-2">
                <div className="inline-flex p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mb-1">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-display text-white">
                  Welcome to BizzScale, {config.businessName}!
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Your unrestricted 6-in-1 enterprise suite is activated. This interactive wizard will guide you step-by-step through configuring your hosting, messaging bots, social proof, email sequences, and monitoring.
                </p>
              </div>

              {/* Master License Card */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-emerald-500/40 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>UNIFIED ENTERPRISE LICENSE KEY</span>
                  <span className="text-emerald-400 font-bold">100% Active &amp; Verified</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="font-mono text-lg font-bold text-emerald-300 tracking-wider">
                    {config.licenseKey}
                  </div>
                  <button
                    onClick={handleCopyLicense}
                    className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer shrink-0"
                  >
                    {copiedKey ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedKey ? 'Copied to Clipboard' : 'Copy Master Key'}</span>
                  </button>
                </div>
                <p className="text-[11px] text-slate-400">
                  This master token automatically authenticates all 6 applications. Your account credentials and API webhooks have also been delivered to <strong className="text-white">{config.email}</strong>.
                </p>
              </div>

              {/* Tool Overview Grid */}
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                  Your 6 Applications to Configure:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    { name: 'Hostinger', id: 'hostinger', desc: 'LiteSpeed NVMe Cloud + Free SSL', step: 2 },
                    { name: 'Wati', id: 'wati', desc: 'WhatsApp, Telegram, FB/IG & Webhooks', step: 3 },
                    { name: 'Fomo', id: 'fomo', desc: 'Live Purchases & Social Proof Urgency', step: 4 },
                    { name: 'Mailchimp', id: 'mailchimp', desc: 'Email Journeys & Cart Recovery', step: 5 },
                    { name: 'UptimeRobot', id: 'uptimerobot', desc: '60s Server Monitoring & SMS Alerts', step: 6 },
                    { name: 'Bitly', id: 'bitly', desc: 'Branded Vanity Links & Dynamic QR', step: 6 },
                  ].map((tool) => (
                    <div
                      key={tool.id}
                      onClick={() => setCurrentStep(tool.step)}
                      className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-emerald-500/40 transition-all cursor-pointer flex items-center gap-3 group"
                    >
                      <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 shrink-0">
                        {getSoftwareLogo(tool.id, 'w-5 h-5')}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">
                          {tool.name}
                        </div>
                        <div className="text-[10px] text-slate-400 truncate">{tool.desc}</div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: HOSTINGER SETUP */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-indigo-950/20 border border-indigo-500/30">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-indigo-500/40 shrink-0">
                  {getSoftwareLogo('hostinger', 'w-8 h-8')}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-lg font-bold text-white font-display">Step 1: Hostinger Enterprise Cloud</h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                      Unlimited Storage &amp; Bandwidth
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    Enjoy SSD Hosting with unlimited storage and bandwidth, providing ample space for your website to thrive. Host as many websites as you need under a single plan with complimentary CDN, free SSL, free email, and routine malware scans on robust US servers.
                  </p>
                </div>
              </div>

              {/* 4 Feature Highlights Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 space-y-0.5">
                  <div className="text-purple-400 font-bold flex items-center gap-1 font-mono">
                    <Zap className="w-3 h-3 text-purple-400" />
                    <span>Unlimited Space</span>
                  </div>
                  <div className="text-slate-400 text-[10px]">Unlimited SSD storage &amp; bandwidth</div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 space-y-0.5">
                  <div className="text-emerald-400 font-bold flex items-center gap-1 font-mono">
                    <Globe className="w-3 h-3 text-emerald-400" />
                    <span>Multi-Website</span>
                  </div>
                  <div className="text-slate-400 text-[10px]">Host unlimited sites under 1 plan</div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 space-y-0.5">
                  <div className="text-sky-400 font-bold flex items-center gap-1 font-mono">
                    <Server className="w-3 h-3 text-sky-400" />
                    <span>US Servers &amp; CDN</span>
                  </div>
                  <div className="text-slate-400 text-[10px]">Complimentary CDN &amp; sub-90ms latency</div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 space-y-0.5">
                  <div className="text-amber-400 font-bold flex items-center gap-1 font-mono">
                    <ShieldCheck className="w-3 h-3 text-amber-400" />
                    <span>Malware Scans</span>
                  </div>
                  <div className="text-slate-400 text-[10px]">Routine scans &amp; 24/7 WP support</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Domain Configuration */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                  <label className="block text-xs font-bold text-slate-300 uppercase font-mono">
                    Custom Domain Name
                  </label>
                  <div className="flex items-center rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-xs">
                    <Globe className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
                    <input
                      type="text"
                      value={config.domain}
                      onChange={(e) => setConfig({ ...config, domain: e.target.value })}
                      placeholder="e.g. mybrand.com"
                      className="w-full bg-transparent text-white focus:outline-none font-mono"
                    />
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                    <span>Target Nameserver:</span>
                    <span className="font-mono text-emerald-400">ns1.bizzscale-host.com</span>
                  </div>
                </div>

                {/* CMS / Site Architecture */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                  <label className="block text-xs font-bold text-slate-300 uppercase font-mono">
                    1-Click Open Source Platform &amp; Apps
                  </label>
                  <select
                    value={config.cmsChoice}
                    onChange={(e) => setConfig({ ...config, cmsChoice: e.target.value })}
                    className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-xs text-white focus:outline-none"
                  >
                    <option value="wordpress">WordPress (Specialized WordPress Assistance &amp; LiteSpeed Cache)</option>
                    <option value="joomla">Joomla (1-Click Open Source CMS)</option>
                    <option value="opencart">OpenCart (1-Click Open Source eCommerce)</option>
                    <option value="drupal">Drupal (1-Click Open Source Platform)</option>
                    <option value="apps_catalog">80+ Free Website Apps (Shared &amp; Managed Cloud)</option>
                  </select>
                  <div className="flex items-center gap-2 text-[11px] text-emerald-400">
                    <Shield className="w-3.5 h-3.5" />
                    <span>Free SSL &amp; Free Business Email Services Pre-Configured</span>
                  </div>
                </div>
              </div>

              {/* Action & Verification Box */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-2">
                    <span>US Server Node &amp; CDN Status:</span>
                    {config.isDomainVerified ? (
                      <span className="text-emerald-400 flex items-center gap-1 font-mono text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Ready &amp; DNS Connected (99.9% Uptime SLA)
                      </span>
                    ) : (
                      <span className="text-amber-400 font-mono text-[11px]">Pending Allocation</span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Click to simulate DNS propagation check and auto-provision your Hostinger US SSD server with complimentary CDN.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleVerifyHostinger}
                  disabled={testingHostinger}
                  className="px-4 py-2.5 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shrink-0 disabled:opacity-50"
                >
                  {testingHostinger ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Allocating US Cloud Node...</span>
                    </>
                  ) : config.isDomainVerified ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-300" />
                      <span>Hostinger Active</span>
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4" />
                      <span>Verify &amp; Provision Hostinger</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: WATI OMNICHANNEL & WEBHOOKS */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-emerald-500/40 shrink-0">
                  {getSoftwareLogo('wati', 'w-8 h-8')}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-lg font-bold text-white font-display">Step 2: Wati Omnichannel Bots &amp; Webhooks</h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                      4 Channels · WhatsApp &amp; Telegram
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    Connect WhatsApp, Telegram, Facebook &amp; Instagram. Enable WhatsApp Catalog, Telegram digital store checkout, and automated Shopify COD-to-Prepaid webhooks.
                  </p>
                </div>
              </div>

              {/* 4 Channels Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-emerald-400">💬 Official WhatsApp API</span>
                    <span className="text-[10px] font-mono text-emerald-400">Meta Verified</span>
                  </div>
                  <div className="flex items-center rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-xs">
                    <Smartphone className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
                    <input
                      type="text"
                      value={config.whatsappNumber}
                      onChange={(e) => setConfig({ ...config, whatsappNumber: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-transparent text-white focus:outline-none font-mono"
                    />
                  </div>
                  <p className="text-[10px] text-slate-400">
                    High open-rate official broadcast channel &amp; 24/7 automated support bot.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-sky-400">✈️ Telegram Bot &amp; Store</span>
                    <span className="text-[10px] font-mono text-sky-300">No 24-hr restriction</span>
                  </div>
                  <div className="flex items-center rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-xs">
                    <Send className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
                    <input
                      type="text"
                      value={config.telegramBotHandle}
                      onChange={(e) => setConfig({ ...config, telegramBotHandle: e.target.value })}
                      placeholder="@yourbrand_bot"
                      className="w-full bg-transparent text-white focus:outline-none font-mono"
                    />
                  </div>
                  <p className="text-[10px] text-slate-400">
                    Send updates at any time with no 24h restrictions and launch in-chat eCommerce checkout.
                  </p>
                </div>
              </div>

              {/* Conversational Store & Webhook Workflows */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="text-xs font-bold text-slate-200 uppercase font-mono flex items-center justify-between">
                  <span>Conversational Storefront &amp; Webhooks</span>
                  <span className="text-amber-400 text-[10px]">Shopify + Form Sync</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <label className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-900 border border-slate-800 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={config.enableCatalog}
                      onChange={(e) => setConfig({ ...config, enableCatalog: e.target.checked })}
                      className="mt-0.5 accent-emerald-400"
                    />
                    <div>
                      <div className="font-semibold text-white">WhatsApp Catalog Sync</div>
                      <div className="text-[10px] text-slate-400">Display products with 1-click cart addition in chat</div>
                    </div>
                  </label>

                  <label className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-900 border border-slate-800 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={config.codToPrepaidEnabled}
                      onChange={(e) => setConfig({ ...config, codToPrepaidEnabled: e.target.checked })}
                      className="mt-0.5 accent-emerald-400"
                    />
                    <div>
                      <div className="font-semibold text-white">Shopify COD to Prepaid Workflow</div>
                      <div className="text-[10px] text-slate-400">Send WhatsApp discount incentive to pay online instantly</div>
                    </div>
                  </label>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-slate-800 text-xs">
                  <span className="text-slate-400 text-[11px]">Connect Webhook Provider:</span>
                  <div className="flex items-center gap-2">
                    {['Elementor', 'Google Forms', 'Typeform', 'WooCommerce'].map((form) => (
                      <span
                        key={form}
                        className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-[10px] font-mono text-slate-300"
                      >
                        {form}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Verification Button */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-2">
                    <span>Centralized Live-Chat Status:</span>
                    {config.isWatiTested ? (
                      <span className="text-emerald-400 flex items-center gap-1 font-mono text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Active &amp; Webhook Trigger Tested
                      </span>
                    ) : (
                      <span className="text-amber-400 font-mono text-[11px]">Ready to Connect</span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Sends simulated test ping to WhatsApp &amp; Telegram numbers to confirm webhook delivery.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleVerifyWati}
                  disabled={testingWati}
                  className="px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shrink-0 disabled:opacity-50"
                >
                  {testingWati ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Sending Test Ping...</span>
                    </>
                  ) : config.isWatiTested ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Wati Verified</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Test Omnichannel Bot</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: FOMO SOCIAL PROOF */}
          {currentStep === 4 && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-orange-950/20 border border-orange-500/30">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-orange-500/40 shrink-0">
                  {getSoftwareLogo('fomo', 'w-8 h-8')}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-lg font-bold text-white font-display">Step 3: Fomo Live Social Proof</h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-orange-500/20 text-orange-300">
                      Conversion Urgency
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    Display real-time order alerts, live shopper count badges, and authentic customer review toasts directly on your store to boost checkout rates.
                  </p>
                </div>
              </div>

              {/* Embed Script Box */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-300 font-mono uppercase">Universal Embed Script</span>
                  <span className="text-emerald-400 text-[10px] font-mono">Async &amp; &lt;50ms Overhead</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 font-mono text-[11px] text-orange-300 break-all select-all">
                  {`<script async src="https://load.fomo.com/api/v1/${config.licenseKey.toLowerCase()}/load.js"></script>`}
                </div>
                <p className="text-[10px] text-slate-400">
                  Paste this 1-line script into the header of your website, Shopify theme, or WordPress footer.
                </p>
              </div>

              {/* Pacing & Display Rules */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <label className="block text-xs font-bold text-slate-300 uppercase font-mono">
                    Notification Pacing
                  </label>
                  <select
                    value={config.fomoPacing}
                    onChange={(e) => setConfig({ ...config, fomoPacing: e.target.value })}
                    className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-xs text-white focus:outline-none"
                  >
                    <option value="aggressive">High Frequency (Every 8-12 seconds)</option>
                    <option value="moderate">Balanced Pacing (Every 18-25 seconds)</option>
                    <option value="subtle">Subtle Urgency (Every 45 seconds)</option>
                  </select>
                  <span className="text-[10px] text-slate-400 block">
                    Intelligently throttled to avoid buyer fatigue while maintaining urgency.
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <label className="block text-xs font-bold text-slate-300 uppercase font-mono">
                    Active Widget Types
                  </label>
                  <div className="space-y-1.5 text-xs">
                    <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={config.enablePurchaseToasts}
                        onChange={(e) => setConfig({ ...config, enablePurchaseToasts: e.target.checked })}
                        className="accent-orange-400"
                      />
                      <span>Recent Orders &amp; Signups ("Sarah from Austin just bought...")</span>
                    </label>
                    <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={config.enableVisitorCounter}
                        onChange={(e) => setConfig({ ...config, enableVisitorCounter: e.target.checked })}
                        className="accent-orange-400"
                      />
                      <span>Live Active Shoppers ("42 people viewing this right now")</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Verification Button */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-2">
                    <span>Fomo Script Connection:</span>
                    {config.isFomoScriptVerified ? (
                      <span className="text-emerald-400 flex items-center gap-1 font-mono text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Connected &amp; Tracking Live Visits
                      </span>
                    ) : (
                      <span className="text-amber-400 font-mono text-[11px]">Awaiting Script Trigger</span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Click to test simulated event firing and review your live toast preview.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleVerifyFomo}
                  disabled={testingFomo}
                  className="px-4 py-2.5 rounded-lg bg-orange-500 hover:bg-orange-400 text-white text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shrink-0 disabled:opacity-50"
                >
                  {testingFomo ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Testing Event Stream...</span>
                    </>
                  ) : config.isFomoScriptVerified ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Fomo Verified</span>
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4" />
                      <span>Test Live Proof Toast</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* STEP 5: MAILCHIMP EMAIL AUTOMATION */}
          {currentStep === 5 && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-amber-950/20 border border-amber-500/30">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-amber-500/40 shrink-0">
                  {getSoftwareLogo('mailchimp', 'w-8 h-8')}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-lg font-bold text-white font-display">Step 4: Mailchimp Email Journeys</h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                      99.4% Deliverability
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    Connect your subscriber audience, launch automated welcome funnels, recover abandoned checkouts, and sync leads captured via Wati and webforms.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <label className="block text-xs font-bold text-slate-300 uppercase font-mono">
                    Audience List Name
                  </label>
                  <input
                    type="text"
                    value={config.audienceName}
                    onChange={(e) => setConfig({ ...config, audienceName: e.target.value })}
                    className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-xs text-white focus:outline-none"
                  />
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                    <span>Server Cluster:</span>
                    <span className="font-mono text-emerald-400">us21.api.mailchimp.com</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <label className="block text-xs font-bold text-slate-300 uppercase font-mono">
                    Verified Sender Address
                  </label>
                  <input
                    type="email"
                    value={config.senderEmail}
                    onChange={(e) => setConfig({ ...config, senderEmail: e.target.value })}
                    className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-xs text-white focus:outline-none"
                  />
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 pt-1">
                    <Shield className="w-3.5 h-3.5" />
                    <span>DKIM &amp; SPF Automated Alignment Active</span>
                  </div>
                </div>
              </div>

              {/* Pre-Activated Journeys */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                <span className="text-slate-300 font-bold font-mono uppercase block text-[11px]">
                  Automated Sequences Included:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-300">3-Day New Subscriber Welcome Funnel</span>
                    <span className="text-[10px] text-emerald-400 font-mono">Pre-Configured</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-300">1-Hour Cart Abandonment Recovery</span>
                    <span className="text-[10px] text-emerald-400 font-mono">Pre-Configured</span>
                  </div>
                </div>
              </div>

              {/* Verification Button */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-2">
                    <span>Mailchimp API Sync:</span>
                    {config.isMailchimpSyncActive ? (
                      <span className="text-emerald-400 flex items-center gap-1 font-mono text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Audience Synced &amp; Journeys Armed
                      </span>
                    ) : (
                      <span className="text-amber-400 font-mono text-[11px]">Ready to Authorize</span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Generates your dedicated API key and authenticates DKIM sender records.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleVerifyMailchimp}
                  disabled={testingMailchimp}
                  className="px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shrink-0 disabled:opacity-50"
                >
                  {testingMailchimp ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Authenticating MTA...</span>
                    </>
                  ) : config.isMailchimpSyncActive ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Mailchimp Active</span>
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4" />
                      <span>Authorize Email Journeys</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* STEP 6: UPTIMEROBOT & BITLY */}
          {currentStep === 6 && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* UptimeRobot Card */}
                <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-900 border border-emerald-500/40 shrink-0">
                      {getSoftwareLogo('uptimerobot', 'w-6 h-6')}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">UptimeRobot 24/7 Watchdog</h4>
                      <p className="text-[11px] text-slate-400">60-second multi-location ping monitoring</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[11px] font-bold text-slate-300 uppercase font-mono">
                      URL to Monitor
                    </label>
                    <input
                      type="text"
                      value={config.monitoredUrl}
                      onChange={(e) => setConfig({ ...config, monitoredUrl: e.target.value })}
                      placeholder="https://mybrand.com"
                      className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-xs text-white focus:outline-none font-mono"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[11px] font-bold text-slate-300 uppercase font-mono">
                      SMS &amp; WhatsApp Alert Recipient
                    </label>
                    <input
                      type="text"
                      value={config.alertPhone}
                      onChange={(e) => setConfig({ ...config, alertPhone: e.target.value })}
                      className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-xs text-white focus:outline-none font-mono"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={handleVerifyUptime}
                    disabled={testingUptime}
                    className="w-full py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                  >
                    {testingUptime ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Pinging Global Nodes...</span>
                      </>
                    ) : config.isUptimePingActive ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Uptime Monitor 100% Operational</span>
                      </>
                    ) : (
                      <>
                        <Zap className="w-4 h-4" />
                        <span>Arm 60s Outage Watchdog</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Bitly Card */}
                <div className="p-5 rounded-2xl bg-orange-950/20 border border-orange-500/30 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-900 border border-orange-500/40 shrink-0">
                      {getSoftwareLogo('bitly', 'w-6 h-6')}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Bitly Vanity Links &amp; QR</h4>
                      <p className="text-[11px] text-slate-400">Custom branded short domains &amp; link-in-bio</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[11px] font-bold text-slate-300 uppercase font-mono">
                      Branded Short Domain
                    </label>
                    <input
                      type="text"
                      value={config.customShortDomain}
                      onChange={(e) => setConfig({ ...config, customShortDomain: e.target.value })}
                      placeholder="e.g. go.mybrand.link"
                      className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-xs text-white focus:outline-none font-mono"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[11px] font-bold text-slate-300 uppercase font-mono">
                      First Campaign Slug
                    </label>
                    <div className="flex items-center rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-xs font-mono">
                      <span className="text-slate-500">{config.customShortDomain}/</span>
                      <input
                        type="text"
                        value={config.firstCampaignSlug}
                        onChange={(e) => setConfig({ ...config, firstCampaignSlug: e.target.value })}
                        className="w-full bg-transparent text-white focus:outline-none ml-1"
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleVerifyBitly}
                    disabled={testingBitly}
                    className="w-full py-2.5 rounded-lg bg-orange-500 hover:bg-orange-400 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                  >
                    {testingBitly ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Configuring Anycast DNS...</span>
                      </>
                    ) : config.isBitlyDomainActive ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Branded Link Active</span>
                      </>
                    ) : (
                      <>
                        <Zap className="w-4 h-4" />
                        <span>Generate Short Link &amp; QR</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* STEP 7: LAUNCHPAD & READY-TO-SCALE COMPLETION */}
          {currentStep === 7 && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="text-center max-w-xl mx-auto space-y-2">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold font-display text-white">
                  Your BizzScale Ecosystem Is Ready to Launch!
                </h3>
                <p className="text-xs text-slate-300">
                  All 6 enterprise growth powerhouses are configured and operational under single sign-on.
                </p>
              </div>

              {/* Status Overview Card */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400 uppercase font-bold">Operational Readiness Checklist</span>
                  <span className="text-emerald-400 font-bold">{totalCompleted} / 6 Verified</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs">
                  {[
                    { name: 'Hostinger', status: completedTools.hostinger, detail: config.domain },
                    { name: 'Wati', status: completedTools.wati, detail: 'WhatsApp & TG Store' },
                    { name: 'Fomo', status: completedTools.fomo, detail: 'Urgency & Toasts' },
                    { name: 'Mailchimp', status: completedTools.mailchimp, detail: 'Welcome & Cart Funnel' },
                    { name: 'UptimeRobot', status: completedTools.uptimerobot, detail: '60s Health Monitor' },
                    { name: 'Bitly', status: completedTools.bitly, detail: config.customShortDomain },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between"
                    >
                      <div>
                        <div className="font-semibold text-white">{item.name}</div>
                        <div className="text-[10px] text-slate-400 truncate">{item.detail}</div>
                      </div>
                      {item.status ? (
                        <span className="text-emerald-400 font-mono text-[10px] font-bold flex items-center gap-1">
                          <Check className="w-3.5 h-3.5" /> Live
                        </span>
                      ) : (
                        <span className="text-amber-400 font-mono text-[10px]">Ready</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions Cluster */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={handleExportJSON}
                  className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 flex items-center justify-center gap-2 text-xs font-semibold text-slate-200 hover:text-white transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4 text-emerald-400" />
                  <span>Download Configuration JSON</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyLicense}
                  className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 flex items-center justify-center gap-2 text-xs font-semibold text-slate-200 hover:text-white transition-colors cursor-pointer"
                >
                  <Copy className="w-4 h-4 text-emerald-400" />
                  <span>Copy Master SSO Token</span>
                </button>
              </div>

              {/* VIP Concierge Notice */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/40 to-teal-950/40 border border-emerald-500/30 flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold text-emerald-300">Need Help or Custom Webhook Assistance?</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Our 24/7 VIP engineers will personally configure your Shopify webhooks and domain DNS records at no extra charge.
                  </div>
                </div>
                <a
                  href="#contact"
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-xs font-bold whitespace-nowrap transition-colors cursor-pointer"
                >
                  Book 1-on-1 Call
                </a>
              </div>
            </div>
          )}

        </div>

        {/* Bottom Navigation Controls */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950 flex items-center justify-between shrink-0">
          <button
            type="button"
            onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
            disabled={currentStep === 1}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 transition-colors disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1.5 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous Step</span>
          </button>

          <div className="flex items-center gap-3">
            {currentStep < 7 ? (
              <>
                <button
                  type="button"
                  onClick={() => setCurrentStep((prev) => Math.min(7, prev + 1))}
                  className="text-xs text-slate-400 hover:text-slate-300 underline underline-offset-4 cursor-pointer"
                >
                  Skip for now
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStep((prev) => Math.min(7, prev + 1))}
                  className="px-5 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-xs font-bold flex items-center gap-1.5 transition-all shadow-lg shadow-emerald-500/20 cursor-pointer"
                >
                  <span>Continue to Step {currentStep + 1}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-xs font-bold flex items-center gap-2 transition-all shadow-lg shadow-emerald-500/20 cursor-pointer"
              >
                <span>Complete Setup &amp; Launch</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
