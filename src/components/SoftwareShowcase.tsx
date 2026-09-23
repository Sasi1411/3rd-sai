import React, { useState } from 'react';
import { 
  Check, ArrowRight, ExternalLink, ShieldCheck, Zap, Share2, ShoppingBag, 
  MessageSquare, Webhook, Bot, HardDrive, Globe, Server, Mail, Shield, 
  Cpu, Layers, LifeBuoy, Sparkles, Send, FileSpreadsheet, BarChart2,
  Bell, Play, Smile, Star, Clock, Ticket, UserCheck, Activity, Wifi,
  AlertTriangle, FileText, CheckCircle2, User, Link as LinkIcon, QrCode,
  Calendar, Smartphone, Lock, Download, Eye, Tag, ThumbsUp, Heart, UploadCloud, MapPin,
  Lightbulb, TrendingUp, Target
} from 'lucide-react';
import { SOFTWARE_LIST } from '../data/softwareData';
import { getSoftwareLogo } from './SoftwareBrandLogos';
import { SoftwareComparisonTable } from './SoftwareComparisonTable';

interface SoftwareShowcaseProps {
  onOpenCheckout: (plan?: string) => void;
}

export const SoftwareShowcase: React.FC<SoftwareShowcaseProps> = ({ onOpenCheckout }) => {
  const [selectedApp, setSelectedApp] = useState<string>(SOFTWARE_LIST[0].id);
  const [watiMode, setWatiMode] = useState<'channels' | 'ecommerce' | 'webhooks' | 'livechat'>('channels');
  const [hostingerMode, setHostingerMode] = useState<'storage' | 'apps' | 'infrastructure' | 'security'>('storage');
  const [activePlatform, setActivePlatform] = useState<string>('WordPress');
  const [isInstallingApp, setIsInstallingApp] = useState<boolean>(false);
  const [installedApp, setInstalledApp] = useState<string | null>('WordPress');

  // Mailchimp interactive modes
  const [mailchimpMode, setMailchimpMode] = useState<'smtp' | 'builder' | 'excel' | 'tracking'>('smtp');
  const [activeSmtp, setActiveSmtp] = useState<string>('Amazon SES');

  // Fomo interactive modes
  const [fomoMode, setFomoMode] = useState<'proof' | 'widgets' | 'leadgen' | 'compliance'>('proof');
  const [fomoProofType, setFomoProofType] = useState<'conversion' | 'welcome' | 'review' | 'counter'>('conversion');
  const [fomoEmojiSelected, setFomoEmojiSelected] = useState<string>('😍');

  // UptimeRobot interactive modes
  const [uptimerobotMode, setUptimerobotMode] = useState<'monitors' | 'statuspages' | 'incidents' | 'alerts'>('monitors');
  const [selectedMonitor, setSelectedMonitor] = useState<'webpage' | 'server' | 'api'>('webpage');

  // Bitly interactive modes
  const [bitlyMode, setBitlyMode] = useState<'shortener' | 'biolinks' | 'qrcodes' | 'dynamic'>('shortener');
  const [qrType, setQrType] = useState<'vcard' | 'wifi' | 'calendar' | 'location'>('vcard');

  // Active tab per software card ('features' | 'protips')
  const [activeCardTabs, setActiveCardTabs] = useState<Record<string, 'features' | 'protips'>>({});

  const toggleCardTab = (softwareId: string, tab: 'features' | 'protips') => {
    setActiveCardTabs((prev) => ({ ...prev, [softwareId]: tab }));
  };

  const handleInstallApp = (platform: string) => {
    setIsInstallingApp(true);
    setActivePlatform(platform);
    setTimeout(() => {
      setIsInstallingApp(false);
      setInstalledApp(platform);
    }, 700);
  };

  return (
    <section id="apps" className="py-20 border-b border-white/[0.06] bg-[#05070e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 font-mono">
              The 6 Essential Growth Applications
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 font-display">
              Unrestricted Enterprise Access to Every Tool
            </h2>
            <p className="mt-3 text-base text-slate-300">
              Each software in our bundle is the undisputed market leader in its category. Here is what is included with your $40/month membership.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenCheckout('bundle')}
              className="px-5 py-2.5 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
            >
              Get All 6 Now for $40/mo
            </button>
          </div>
        </div>

        {/* 6 Software Grid Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOFTWARE_LIST.map((software) => {
            return (
              <div
                key={software.id}
                className="rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between overflow-hidden hover:border-slate-700 transition-all group"
              >
                {/* Card Top / Header */}
                <div className="p-6 border-b border-slate-800/80">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 shrink-0">
                        {getSoftwareLogo(software.id, 'w-8 h-8')}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white font-display flex items-center gap-2">
                          {software.name}
                        </h3>
                        <span className="text-xs text-slate-400">
                          {software.badge}
                        </span>
                      </div>
                    </div>

                    {/* Price tag pill */}
                    <div className="text-right shrink-0">
                      <div className="text-xs text-rose-400 line-through font-mono">
                        ${software.standalonePrice}/mo
                      </div>
                      <div className="text-xs font-bold text-emerald-400 font-mono">
                        INCLUDED
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed min-h-[48px]">
                    {software.tagline}
                  </p>
                </div>

                {/* Interactive visual mockup container */}
                <div className="p-5 bg-slate-950/70 border-b border-slate-800/80">
                  {/* Dynamic Mockup Content for each specific software */}
                  {software.id === 'mailchimp' && (
                    <div className="rounded-xl bg-slate-900 border border-slate-800 p-3.5 space-y-2.5">
                      {/* Mailchimp sub-navigation tabs */}
                      <div className="grid grid-cols-4 gap-1 p-1 rounded-lg bg-slate-950 border border-slate-800 text-[10px] font-mono">
                        <button
                          type="button"
                          onClick={() => setMailchimpMode('smtp')}
                          className={`py-1 rounded text-center transition-all cursor-pointer ${
                            mailchimpMode === 'smtp'
                              ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          Own SMTP
                        </button>
                        <button
                          type="button"
                          onClick={() => setMailchimpMode('builder')}
                          className={`py-1 rounded text-center transition-all cursor-pointer ${
                            mailchimpMode === 'builder'
                              ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          Drag &amp; Drop
                        </button>
                        <button
                          type="button"
                          onClick={() => setMailchimpMode('excel')}
                          className={`py-1 rounded text-center transition-all cursor-pointer ${
                            mailchimpMode === 'excel'
                              ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          Excel Import
                        </button>
                        <button
                          type="button"
                          onClick={() => setMailchimpMode('tracking')}
                          className={`py-1 rounded text-center transition-all cursor-pointer ${
                            mailchimpMode === 'tracking'
                              ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          Tracking
                        </button>
                      </div>

                      {/* Tab 1: Own & Multiple SMTPs */}
                      {mailchimpMode === 'smtp' && (
                        <div className="space-y-2 text-xs">
                          <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1.5 border-b border-slate-800/80">
                            <span className="font-semibold text-amber-300">Own SMTP Servers</span>
                            <span className="text-[10px] font-mono text-emerald-400">MAX DELIVERABILITY</span>
                          </div>

                          <div className="grid grid-cols-3 gap-1 text-[10px]">
                            {['Amazon SES', 'Mailgun', 'Custom SMTP'].map((smtp) => (
                              <button
                                key={smtp}
                                type="button"
                                onClick={() => setActiveSmtp(smtp)}
                                className={`py-1 px-1.5 rounded text-center transition-all cursor-pointer border ${
                                  activeSmtp === smtp
                                    ? 'bg-amber-400/20 border-amber-400 text-amber-300 font-semibold'
                                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                                }`}
                              >
                                {smtp}
                              </button>
                            ))}
                          </div>

                          <div className="p-2 rounded bg-slate-950 border border-slate-800 space-y-1">
                            <div className="flex items-center justify-between text-[10px]">
                              <span className="text-slate-300 font-bold flex items-center gap-1.5">
                                <Server className="w-3 h-3 text-amber-400" />
                                <span>Active Relay: {activeSmtp}</span>
                              </span>
                              <span className="text-emerald-400 font-mono text-[9px]">Connected · Port 587</span>
                            </div>
                            <p className="text-slate-400 text-[9px] leading-snug">
                              Send emails directly from your own SMTP servers for maximum control &amp; reliability. Add multiple SMTPs to optimize deliverability.
                            </p>
                          </div>

                          <div className="p-1.5 rounded bg-amber-500/10 border border-amber-500/20 text-[9px] text-amber-200 text-center">
                            Continue using your favorite apps alongside Mailchimp with zero email volume caps
                          </div>
                        </div>
                      )}

                      {/* Tab 2: Drag and Drop Email Builder */}
                      {mailchimpMode === 'builder' && (
                        <div className="space-y-2 text-xs">
                          <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1.5 border-b border-slate-800/80">
                            <span className="font-semibold text-amber-300">Drag &amp; Drop Email Builder</span>
                            <span className="text-[10px] font-mono text-emerald-400">VISUAL CANVAS</span>
                          </div>

                          <div className="p-2 rounded bg-slate-950 border border-slate-800 space-y-1.5">
                            <div className="flex items-center justify-between text-[10px] bg-slate-900 p-1 rounded border border-slate-800">
                              <span className="text-slate-300 font-mono">🧱 [Logo &amp; Brand Header]</span>
                              <span className="text-[9px] text-amber-400">Draggable</span>
                            </div>
                            <div className="p-1.5 rounded bg-amber-500/10 border border-dashed border-amber-500/30 text-center">
                              <div className="text-[10px] font-bold text-white">"Flash Promotion: Up to 50% Off"</div>
                              <div className="text-[9px] text-slate-400">Pre-designed responsive hero section</div>
                            </div>
                            <div className="flex items-center justify-between text-[10px] bg-slate-900 p-1 rounded border border-slate-800">
                              <span className="text-slate-300 font-mono">🔘 [Interactive CTA Button]</span>
                              <span className="text-emerald-400 text-[9px]">Live Preview</span>
                            </div>
                          </div>

                          <div className="text-[9px] text-slate-400 text-center">
                            Craft visually appealing emails quickly using the built-in drag-and-drop email builder
                          </div>
                        </div>
                      )}

                      {/* Tab 3: Excel List Import & Subscriber Management */}
                      {mailchimpMode === 'excel' && (
                        <div className="space-y-2 text-xs">
                          <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1.5 border-b border-slate-800/80">
                            <span className="font-semibold text-amber-300">Excel List Import (.xlsx)</span>
                            <span className="text-[10px] font-mono text-emerald-400">1-CLICK IMPORT</span>
                          </div>

                          <div className="p-2 rounded bg-slate-950 border border-slate-800 space-y-1.5">
                            <div className="flex items-center justify-between text-[10px]">
                              <span className="text-slate-300 flex items-center gap-1.5">
                                <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" />
                                <span className="font-mono text-white">Subscribers_Q3_2026.xlsx</span>
                              </span>
                              <span className="text-emerald-400 font-mono text-[9px]">42,850 rows</span>
                            </div>
                            <div className="text-[9px] text-slate-400 flex items-center justify-between">
                              <span>Mapped fields: Name, Email, Custom Tags</span>
                              <span className="text-amber-400 font-semibold">100% Validated</span>
                            </div>
                          </div>

                          <div className="p-1.5 rounded bg-slate-950 border border-slate-800 flex items-center justify-between text-[10px]">
                            <span className="text-slate-300">Targeting Segment:</span>
                            <span className="text-emerald-400 font-bold font-mono">VIP Buyers + Active</span>
                          </div>

                          <div className="text-[9px] text-slate-400 text-center">
                            Effortlessly import email lists in Excel format for targeted and effective campaigns
                          </div>
                        </div>
                      )}

                      {/* Tab 4: Email Tracking & Real-Time Reports */}
                      {mailchimpMode === 'tracking' && (
                        <div className="space-y-2 text-xs">
                          <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1.5 border-b border-slate-800/80">
                            <span className="font-semibold text-amber-300">Email Tracking &amp; Analytics</span>
                            <span className="text-[10px] font-mono text-emerald-400">REAL-TIME</span>
                          </div>

                          <div className="grid grid-cols-3 gap-1.5 text-center font-mono">
                            <div className="p-2 rounded bg-slate-950 border border-slate-800">
                              <span className="text-slate-400 block text-[8px]">OPEN RATE</span>
                              <span className="text-amber-400 font-bold text-xs">43.8%</span>
                            </div>
                            <div className="p-2 rounded bg-slate-950 border border-slate-800">
                              <span className="text-slate-400 block text-[8px]">CLICK RATE</span>
                              <span className="text-emerald-400 font-bold text-xs">16.2%</span>
                            </div>
                            <div className="p-2 rounded bg-slate-950 border border-slate-800">
                              <span className="text-slate-400 block text-[8px]">BOUNCE RATE</span>
                              <span className="text-sky-400 font-bold text-xs">0.19%</span>
                            </div>
                          </div>

                          <div className="p-1.5 rounded bg-slate-950 border border-slate-800 text-[9px] text-slate-400 flex items-center justify-between">
                            <span>Automated campaigns active:</span>
                            <span className="text-emerald-400 font-mono">3 Trigger Sequences</span>
                          </div>

                          <div className="text-[9px] text-slate-400 text-center">
                            Gain insights into email performance with real-time reports on open, click, and bounce rates
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {software.id === 'hostinger' && (
                    <div className="rounded-xl bg-slate-900 border border-slate-800 p-3.5 space-y-2.5">
                      {/* Hostinger sub-navigation tabs */}
                      <div className="grid grid-cols-4 gap-1 p-1 rounded-lg bg-slate-950 border border-slate-800 text-[10px] font-mono">
                        <button
                          type="button"
                          onClick={() => setHostingerMode('storage')}
                          className={`py-1 rounded text-center transition-all cursor-pointer ${
                            hostingerMode === 'storage'
                              ? 'bg-purple-500 text-white font-bold shadow-sm'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          Storage
                        </button>
                        <button
                          type="button"
                          onClick={() => setHostingerMode('apps')}
                          className={`py-1 rounded text-center transition-all cursor-pointer ${
                            hostingerMode === 'apps'
                              ? 'bg-purple-500 text-white font-bold shadow-sm'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          80+ Apps
                        </button>
                        <button
                          type="button"
                          onClick={() => setHostingerMode('infrastructure')}
                          className={`py-1 rounded text-center transition-all cursor-pointer ${
                            hostingerMode === 'infrastructure'
                              ? 'bg-purple-500 text-white font-bold shadow-sm'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          US &amp; CDN
                        </button>
                        <button
                          type="button"
                          onClick={() => setHostingerMode('security')}
                          className={`py-1 rounded text-center transition-all cursor-pointer ${
                            hostingerMode === 'security'
                              ? 'bg-purple-500 text-white font-bold shadow-sm'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          Security
                        </button>
                      </div>

                      {/* Tab 1: Storage & Bandwidth */}
                      {hostingerMode === 'storage' && (
                        <div className="space-y-2 text-xs">
                          <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1.5 border-b border-slate-800/80">
                            <span className="font-semibold text-purple-300">SSD Hosting Specs</span>
                            <span className="text-[10px] font-mono text-emerald-400">UNLIMITED CAPACITY</span>
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                              <div className="flex items-center justify-between text-[10px] text-slate-400">
                                <span>SSD Storage</span>
                                <HardDrive className="w-3 h-3 text-purple-400" />
                              </div>
                              <div className="text-sm font-bold text-white font-mono">Unlimited</div>
                              <div className="text-[9px] text-slate-400">Ample space for websites to thrive</div>
                            </div>
                            <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                              <div className="flex items-center justify-between text-[10px] text-slate-400">
                                <span>Bandwidth</span>
                                <Zap className="w-3 h-3 text-emerald-400" />
                              </div>
                              <div className="text-sm font-bold text-emerald-400 font-mono">Unlimited</div>
                              <div className="text-[9px] text-slate-400">Unmetered data transfer</div>
                            </div>
                          </div>

                          <div className="p-2 rounded bg-purple-500/10 border border-purple-500/20 text-[10px] text-purple-200 flex items-center justify-between">
                            <span className="font-semibold">Single Plan Multi-Site:</span>
                            <span className="text-emerald-400 font-bold">Host Unlimited Websites</span>
                          </div>
                        </div>
                      )}

                      {/* Tab 2: 1-Click 80+ Apps */}
                      {hostingerMode === 'apps' && (
                        <div className="space-y-2 text-xs">
                          <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1.5 border-b border-slate-800/80">
                            <span className="font-semibold text-purple-300">1-Click App Installer</span>
                            <span className="text-[10px] font-mono text-amber-300">80+ Free Apps</span>
                          </div>

                          <div className="grid grid-cols-4 gap-1 text-[10px]">
                            {['WordPress', 'Joomla', 'OpenCart', 'Drupal'].map((app) => (
                              <button
                                key={app}
                                type="button"
                                onClick={() => handleInstallApp(app)}
                                className={`p-1.5 rounded text-center transition-all cursor-pointer border ${
                                  activePlatform === app
                                    ? 'bg-purple-950/80 border-purple-500 text-white font-semibold'
                                    : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                                }`}
                              >
                                {app}
                              </button>
                            ))}
                          </div>

                          <div className="p-2 rounded bg-slate-950 border border-slate-800 flex items-center justify-between text-[10px]">
                            <div>
                              <div className="text-white font-bold flex items-center gap-1.5">
                                <span>{activePlatform}</span>
                                {installedApp === activePlatform && (
                                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                                    Active
                                  </span>
                                )}
                              </div>
                              <div className="text-slate-400 text-[9px]">
                                {activePlatform === 'WordPress'
                                  ? 'Specialized WordPress Assistance included'
                                  : '1-click deployment with zero coding'}
                              </div>
                            </div>

                            <button
                              type="button"
                              onClick={() => handleInstallApp(activePlatform)}
                              disabled={isInstallingApp}
                              className="px-2.5 py-1 rounded bg-purple-500 hover:bg-purple-400 text-white text-[10px] font-semibold cursor-pointer disabled:opacity-50"
                            >
                              {isInstallingApp ? 'Installing...' : '1-Click Install'}
                            </button>
                          </div>

                          <div className="text-[9px] text-slate-400 text-center">
                            Access over 80 free website apps with Shared &amp; Managed Cloud plans
                          </div>
                        </div>
                      )}

                      {/* Tab 3: US Infrastructure & CDN */}
                      {hostingerMode === 'infrastructure' && (
                        <div className="space-y-2 text-xs">
                          <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1.5 border-b border-slate-800/80">
                            <span className="font-semibold text-purple-300">Robust US Infrastructure</span>
                            <span className="text-[10px] font-mono text-emerald-400">99.9% Uptime</span>
                          </div>

                          <div className="p-2 rounded bg-slate-950 border border-slate-800 space-y-1.5">
                            <div className="flex items-center justify-between text-[11px]">
                              <span className="text-slate-300 flex items-center gap-1.5">
                                <Server className="w-3.5 h-3.5 text-purple-400" />
                                <span>United States Servers</span>
                              </span>
                              <span className="text-emerald-400 font-mono font-bold text-[10px]">Optimal Speed</span>
                            </div>
                            <div className="flex items-center justify-between text-[11px]">
                              <span className="text-slate-300 flex items-center gap-1.5">
                                <Globe className="w-3.5 h-3.5 text-sky-400" />
                                <span>Complimentary CDN</span>
                              </span>
                              <span className="text-sky-300 font-mono text-[10px]">Rapid Delivery</span>
                            </div>
                            <div className="flex items-center justify-between text-[11px]">
                              <span className="text-slate-300">Server Latency</span>
                              <span className="text-emerald-400 font-mono font-bold">84ms (US-East)</span>
                            </div>
                          </div>

                          <div className="text-[10px] text-slate-400 text-center">
                            Integrated CDN ensures swift and efficient content delivery globally
                          </div>
                        </div>
                      )}

                      {/* Tab 4: Security, Email & Support */}
                      {hostingerMode === 'security' && (
                        <div className="space-y-2 text-xs">
                          <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1.5 border-b border-slate-800/80">
                            <span className="font-semibold text-purple-300">Security &amp; Support</span>
                            <span className="text-[10px] font-mono text-emerald-400">24/7 ACTIVE</span>
                          </div>

                          <div className="grid grid-cols-2 gap-1.5 text-[10px]">
                            <div className="p-2 rounded bg-slate-950 border border-slate-800 space-y-0.5">
                              <div className="text-slate-400 flex items-center gap-1">
                                <Shield className="w-3 h-3 text-emerald-400" />
                                <span>Free SSL &amp; Email</span>
                              </div>
                              <div className="text-white font-semibold">Included Free</div>
                            </div>
                            <div className="p-2 rounded bg-slate-950 border border-slate-800 space-y-0.5">
                              <div className="text-slate-400 flex items-center gap-1">
                                <ShieldCheck className="w-3 h-3 text-purple-400" />
                                <span>Malware Scans</span>
                              </div>
                              <div className="text-emerald-400 font-semibold font-mono">Routine Scans Active</div>
                            </div>
                          </div>

                          <div className="p-2 rounded bg-slate-950 border border-slate-800 text-[10px] space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="text-white font-bold flex items-center gap-1">
                                <LifeBuoy className="w-3 h-3 text-indigo-400" />
                                <span>24/7 Dedicated Support</span>
                              </span>
                              <span className="text-emerald-400 font-mono text-[9px]">Online</span>
                            </div>
                            <div className="text-slate-400 text-[9px]">
                              Specialized WordPress Assistance &amp; powerful custom control panels
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {software.id === 'fomo' && (
                    <div className="rounded-xl bg-slate-900 border border-slate-800 p-3.5 space-y-2.5">
                      {/* Fomo sub-navigation tabs */}
                      <div className="grid grid-cols-4 gap-1 p-1 rounded-lg bg-slate-950 border border-slate-800 text-[10px] font-mono">
                        <button
                          type="button"
                          onClick={() => setFomoMode('proof')}
                          className={`py-1 rounded text-center transition-all cursor-pointer ${
                            fomoMode === 'proof'
                              ? 'bg-orange-500 text-white font-bold shadow-sm'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          Timed Proof
                        </button>
                        <button
                          type="button"
                          onClick={() => setFomoMode('widgets')}
                          className={`py-1 rounded text-center transition-all cursor-pointer ${
                            fomoMode === 'widgets'
                              ? 'bg-orange-500 text-white font-bold shadow-sm'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          Widgets
                        </button>
                        <button
                          type="button"
                          onClick={() => setFomoMode('leadgen')}
                          className={`py-1 rounded text-center transition-all cursor-pointer ${
                            fomoMode === 'leadgen'
                              ? 'bg-orange-500 text-white font-bold shadow-sm'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          Lead &amp; Urgency
                        </button>
                        <button
                          type="button"
                          onClick={() => setFomoMode('compliance')}
                          className={`py-1 rounded text-center transition-all cursor-pointer ${
                            fomoMode === 'compliance'
                              ? 'bg-orange-500 text-white font-bold shadow-sm'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          Cookies &amp; Share
                        </button>
                      </div>

                      {/* Tab 1: Timed Proof & Virtual Sales Team */}
                      {fomoMode === 'proof' && (
                        <div className="space-y-2 text-xs">
                          <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1.5 border-b border-slate-800/80">
                            <span className="font-semibold text-orange-400">Automated Social Proof</span>
                            <span className="text-[10px] font-mono text-emerald-400">VIRTUAL SALES TEAM</span>
                          </div>

                          <div className="grid grid-cols-4 gap-1 text-[9px]">
                            {[
                              { id: 'conversion', label: 'Purchase' },
                              { id: 'welcome', label: 'Welcome' },
                              { id: 'review', label: 'Review' },
                              { id: 'counter', label: 'Live Count' }
                            ].map((item) => (
                              <button
                                key={item.id}
                                type="button"
                                onClick={() => setFomoProofType(item.id as any)}
                                className={`py-1 px-1 rounded text-center transition-all cursor-pointer border ${
                                  fomoProofType === item.id
                                    ? 'bg-orange-500/20 border-orange-400 text-orange-300 font-bold'
                                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                                }`}
                              >
                                {item.label}
                              </button>
                            ))}
                          </div>

                          <div className="p-2.5 rounded-lg bg-slate-950 border border-orange-500/30">
                            {fomoProofType === 'conversion' && (
                              <div className="flex items-center gap-2.5">
                                <div className="w-7 h-7 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold text-xs shrink-0">
                                  EM
                                </div>
                                <div className="min-w-0">
                                  <div className="text-[11px] font-bold text-white truncate">Elena M. from London</div>
                                  <div className="text-[9px] text-emerald-400 font-mono">Purchased Growth Bundle (2m ago)</div>
                                </div>
                              </div>
                            )}

                            {fomoProofType === 'welcome' && (
                              <div className="flex items-center gap-2.5">
                                <div className="w-7 h-7 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs shrink-0">
                                  👋
                                </div>
                                <div className="min-w-0">
                                  <div className="text-[11px] font-bold text-white">Welcome! Exclusive 25% Off</div>
                                  <div className="text-[9px] text-amber-300 font-mono">Code: WELCOME25 · 1-click apply</div>
                                </div>
                              </div>
                            )}

                            {fomoProofType === 'review' && (
                              <div className="flex items-center gap-2.5">
                                <div className="w-7 h-7 rounded-full bg-yellow-500/20 text-yellow-400 flex items-center justify-center text-xs shrink-0">
                                  ⭐
                                </div>
                                <div className="min-w-0">
                                  <div className="text-[11px] font-bold text-white truncate">"Tripled our checkout conversions!"</div>
                                  <div className="text-[9px] text-slate-400">Random verified client testimonial</div>
                                </div>
                              </div>
                            )}

                            {fomoProofType === 'counter' && (
                              <div className="flex items-center gap-2.5">
                                <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs shrink-0">
                                  🔥
                                </div>
                                <div className="min-w-0">
                                  <div className="text-[11px] font-bold text-white">Live Visitors Counter</div>
                                  <div className="text-[9px] text-emerald-400 font-mono">64 active buyers looking right now</div>
                                </div>
                              </div>
                            )}
                          </div>

                          <div className="text-[9px] text-slate-400 text-center">
                            Fully automated notifications triggered at the right time and place for optimal user interaction
                          </div>
                        </div>
                      )}

                      {/* Tab 2: Diverse Notification Types & Widgets */}
                      {fomoMode === 'widgets' && (
                        <div className="space-y-2 text-xs">
                          <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1.5 border-b border-slate-800/80">
                            <span className="font-semibold text-orange-400">Notification Types &amp; Widgets</span>
                            <span className="text-[10px] font-mono text-emerald-400">INTERACTIVE</span>
                          </div>

                          {/* YouTube Video Widget preview */}
                          <div className="p-2 rounded bg-slate-950 border border-slate-800 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded bg-red-600/30 text-red-400 flex items-center justify-center text-xs">
                                <Play className="w-3.5 h-3.5 fill-current" />
                              </div>
                              <div>
                                <div className="text-[10px] font-bold text-white">YouTube Video Widget</div>
                                <div className="text-[9px] text-slate-400">Embed informative videos as small widgets</div>
                              </div>
                            </div>
                            <span className="text-[9px] text-sky-400 font-mono bg-sky-950 px-1.5 py-0.5 rounded border border-sky-800">
                              Active
                            </span>
                          </div>

                          {/* Emoji Feedback & Score Feedback */}
                          <div className="p-2 rounded bg-slate-950 border border-slate-800 space-y-1">
                            <div className="flex items-center justify-between text-[10px]">
                              <span className="text-slate-300 font-semibold">Emoji &amp; Score Feedback:</span>
                              <span className="text-amber-400 font-bold font-mono">Score: 9.8 / 10</span>
                            </div>
                            <div className="flex items-center justify-center gap-3 pt-0.5">
                              {['😍', '🚀', '👍', '😐'].map((emoji) => (
                                <button
                                  key={emoji}
                                  type="button"
                                  onClick={() => setFomoEmojiSelected(emoji)}
                                  className={`text-base p-1 rounded transition-all cursor-pointer ${
                                    fomoEmojiSelected === emoji ? 'bg-orange-500/30 scale-125' : 'opacity-60 hover:opacity-100'
                                  }`}
                                >
                                  {emoji}
                                </button>
                              ))}
                            </div>
                          </div>

                          <div className="text-[9px] text-slate-400 text-center">
                            Coupons, live counters, YouTube video displays &amp; emoji feedback for enhanced engagement
                          </div>
                        </div>
                      )}

                      {/* Tab 3: Lead Gen & Countdown Urgency */}
                      {fomoMode === 'leadgen' && (
                        <div className="space-y-2 text-xs">
                          <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1.5 border-b border-slate-800/80">
                            <span className="font-semibold text-orange-400">Lead Collectors &amp; Urgency</span>
                            <span className="text-[10px] font-mono text-amber-400">HIGH CONVERSIONS</span>
                          </div>

                          {/* Countdown Timer */}
                          <div className="p-2 rounded bg-orange-500/10 border border-orange-500/30 flex items-center justify-between">
                            <div className="flex items-center gap-1.5 text-orange-300 text-[10px] font-bold">
                              <Clock className="w-3.5 h-3.5" />
                              <span>Countdown Timer (Urgency &amp; FOMO):</span>
                            </div>
                            <span className="text-white font-mono font-bold text-xs bg-slate-950 px-2 py-0.5 rounded border border-orange-500/40">
                              03h : 22m : 45s
                            </span>
                          </div>

                          {/* Email Collector & Request Collector */}
                          <div className="p-2 rounded bg-slate-950 border border-slate-800 space-y-1.5">
                            <div className="text-[10px] font-bold text-slate-200">Email Collector &amp; Request Collector</div>
                            <div className="flex items-center gap-1.5">
                              <input
                                type="text"
                                readOnly
                                value="visitor@company.com"
                                className="bg-slate-900 border border-slate-800 rounded px-2 py-1 text-[10px] text-slate-300 w-full font-mono"
                              />
                              <button
                                type="button"
                                className="px-2 py-1 rounded bg-orange-500 text-white text-[10px] font-bold shrink-0"
                              >
                                Collect Lead
                              </button>
                            </div>
                            <div className="text-[9px] text-slate-400">
                              Streamline gathering customer info and generating leads effortlessly
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Tab 4: Social Share & Cookie Compliance */}
                      {fomoMode === 'compliance' && (
                        <div className="space-y-2 text-xs">
                          <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1.5 border-b border-slate-800/80">
                            <span className="font-semibold text-orange-400">Compliance &amp; Virality</span>
                            <span className="text-[10px] font-mono text-emerald-400">TRANSPARENCY</span>
                          </div>

                          {/* Cookie Notification */}
                          <div className="p-2 rounded bg-slate-950 border border-slate-800 space-y-1">
                            <div className="flex items-center justify-between text-[10px]">
                              <span className="text-white font-bold">Cookie Notification</span>
                              <span className="text-[9px] text-emerald-400 font-mono">Compliant</span>
                            </div>
                            <p className="text-[9px] text-slate-400 leading-snug">
                              Notify users about the use of cookies on your site, ensuring transparency and compliance.
                            </p>
                          </div>

                          {/* Social Share Feature */}
                          <div className="p-2 rounded bg-slate-950 border border-slate-800 flex items-center justify-between">
                            <div>
                              <div className="text-[10px] font-bold text-white flex items-center gap-1">
                                <Share2 className="w-3 h-3 text-sky-400" />
                                <span>Social Share Feature</span>
                              </div>
                              <div className="text-[9px] text-slate-400">Drive more traffic via client sharing</div>
                            </div>
                            <div className="flex gap-1 text-[9px] font-mono">
                              <span className="px-1.5 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800">X/Twitter</span>
                              <span className="px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">WhatsApp</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {software.id === 'wati' && (
                    <div className="rounded-xl bg-slate-900 border border-slate-800 p-3.5 space-y-2.5">
                      {/* Sub-navigation tabs */}
                      <div className="grid grid-cols-4 gap-1 p-1 rounded-lg bg-slate-950 border border-slate-800 text-[10px] font-mono">
                        <button
                          type="button"
                          onClick={() => setWatiMode('channels')}
                          className={`py-1 rounded text-center transition-all cursor-pointer ${
                            watiMode === 'channels'
                              ? 'bg-emerald-400 text-slate-950 font-bold'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          Channels
                        </button>
                        <button
                          type="button"
                          onClick={() => setWatiMode('ecommerce')}
                          className={`py-1 rounded text-center transition-all cursor-pointer ${
                            watiMode === 'ecommerce'
                              ? 'bg-emerald-400 text-slate-950 font-bold'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          Store
                        </button>
                        <button
                          type="button"
                          onClick={() => setWatiMode('webhooks')}
                          className={`py-1 rounded text-center transition-all cursor-pointer ${
                            watiMode === 'webhooks'
                              ? 'bg-emerald-400 text-slate-950 font-bold'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          Webhooks
                        </button>
                        <button
                          type="button"
                          onClick={() => setWatiMode('livechat')}
                          className={`py-1 rounded text-center transition-all cursor-pointer ${
                            watiMode === 'livechat'
                              ? 'bg-emerald-400 text-slate-950 font-bold'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          Live-Chat
                        </button>
                      </div>

                      {watiMode === 'channels' && (
                        <div className="space-y-2 text-xs">
                          <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1.5 border-b border-slate-800/80">
                            <span className="font-semibold text-emerald-400">4-in-1 Omnichannel Bot</span>
                            <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-300 px-1.5 py-0.5 rounded">
                              No 24h limit on Telegram
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                            <div className="p-2 rounded bg-slate-950 border border-slate-800 text-slate-200">
                              <span className="font-bold text-emerald-400 block text-[10px]">💬 WhatsApp</span>
                              <span className="text-[10px] text-slate-400">Official Cloud API</span>
                            </div>
                            <div className="p-2 rounded bg-slate-950 border border-slate-800 text-slate-200">
                              <span className="font-bold text-sky-400 block text-[10px]">✈️ Telegram</span>
                              <span className="text-[10px] text-slate-400">Zero 24-hr restriction</span>
                            </div>
                            <div className="p-2 rounded bg-slate-950 border border-slate-800 text-slate-200">
                              <span className="font-bold text-blue-400 block text-[10px]">📘 Facebook</span>
                              <span className="text-[10px] text-slate-400">Messenger Chatbot</span>
                            </div>
                            <div className="p-2 rounded bg-slate-950 border border-slate-800 text-slate-200">
                              <span className="font-bold text-pink-400 block text-[10px]">📸 Instagram</span>
                              <span className="text-[10px] text-slate-400">Direct DM Automation</span>
                            </div>
                          </div>
                          <div className="p-2 rounded bg-emerald-950/40 border border-emerald-800/30 text-[10px] text-slate-300 flex items-center gap-1.5">
                            <Share2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>Include chatbot link on website, social media, &amp; newsletters.</span>
                          </div>
                        </div>
                      )}

                      {watiMode === 'ecommerce' && (
                        <div className="space-y-2 text-xs">
                          <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1.5 border-b border-slate-800/80">
                            <span className="font-semibold text-emerald-400">Conversational Commerce</span>
                            <span className="text-[10px] font-mono text-emerald-300">Boost Sales</span>
                          </div>
                          <div className="p-2 rounded bg-slate-950 border border-slate-800 space-y-1">
                            <div className="flex items-center justify-between text-[11px]">
                              <span className="font-bold text-white flex items-center gap-1">
                                <ShoppingBag className="w-3.5 h-3.5 text-emerald-400" />
                                <span>WhatsApp Catalog</span>
                              </span>
                              <span className="text-emerald-400 font-mono text-[10px]">In-Chat Store</span>
                            </div>
                            <p className="text-[10px] text-slate-400">
                              Showcase full product catalog with instant 1-click cart addition.
                            </p>
                          </div>
                          <div className="p-2 rounded bg-slate-950 border border-slate-800 space-y-1">
                            <div className="flex items-center justify-between text-[11px]">
                              <span className="font-bold text-white flex items-center gap-1">
                                <Bot className="w-3.5 h-3.5 text-sky-400" />
                                <span>Telegram eCommerce Store</span>
                              </span>
                              <span className="text-sky-400 font-mono text-[10px]">Simple Checkout</span>
                            </div>
                            <p className="text-[10px] text-slate-400">
                              Full digital store with simple checkout system inside Telegram.
                            </p>
                          </div>
                        </div>
                      )}

                      {watiMode === 'webhooks' && (
                        <div className="space-y-2 text-xs">
                          <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1.5 border-b border-slate-800/80">
                            <span className="font-semibold text-emerald-400">WhatsApp Webhook Workflow</span>
                            <span className="text-[10px] font-mono text-amber-300">Shopify + Forms</span>
                          </div>
                          <div className="p-2 rounded bg-slate-950 border border-slate-800 space-y-1">
                            <div className="text-amber-400 font-bold text-[10px] flex items-center gap-1">
                              <Webhook className="w-3 h-3 text-amber-400" />
                              <span>Shopify Automation Actions:</span>
                            </div>
                            <div className="text-[10px] text-slate-300 leading-snug space-y-0.5">
                              <div>• Instant Order Notification alerts</div>
                              <div>• COD to Prepaid Conversion workflow</div>
                              <div>• Automated fulfillment &amp; tracking updates</div>
                            </div>
                          </div>
                          <div className="p-2 rounded bg-slate-950 border border-slate-800 text-[10px] text-slate-400">
                            <span className="text-slate-300 font-semibold block">Connected Form Webhooks:</span>
                            WP Elementor · Google Forms · Typeform · WooCommerce
                          </div>
                        </div>
                      )}

                      {watiMode === 'livechat' && (
                        <div className="space-y-2 text-xs">
                          <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1.5 border-b border-slate-800/80">
                            <span className="font-semibold text-emerald-400">Centralized Live Chat</span>
                            <span className="text-[10px] font-mono text-emerald-300">Telegram &amp; WhatsApp</span>
                          </div>
                          <div className="p-2 rounded bg-slate-950 border border-slate-800 text-[10px] text-slate-300 space-y-1">
                            <div className="font-bold text-white flex items-center justify-between">
                              <span className="flex items-center gap-1">
                                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                                <span>Unified Multi-Agent Inbox</span>
                              </span>
                              <span className="text-emerald-400 font-mono">SLA &lt;60s</span>
                            </div>
                            <p className="text-slate-400 leading-relaxed">
                              Quick, easy to manage, centralized live-chat ensuring top-notch client support.
                            </p>
                          </div>
                          <div className="p-2 rounded bg-slate-950 border border-slate-800 text-[10px] text-slate-400">
                            <span className="text-slate-300 font-semibold block">APIs &amp; Auto-Responders:</span>
                            SMS/Email APIs + Mailchimp, Sendinblue, ActiveCampaign email sync.
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {software.id === 'uptimerobot' && (
                    <div className="rounded-xl bg-slate-900 border border-slate-800 p-3.5 space-y-2.5">
                      {/* UptimeRobot sub-navigation tabs */}
                      <div className="grid grid-cols-4 gap-1 p-1 rounded-lg bg-slate-950 border border-slate-800 text-[10px] font-mono">
                        <button
                          type="button"
                          onClick={() => setUptimerobotMode('monitors')}
                          className={`py-1 rounded text-center transition-all cursor-pointer ${
                            uptimerobotMode === 'monitors'
                              ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          Monitors
                        </button>
                        <button
                          type="button"
                          onClick={() => setUptimerobotMode('statuspages')}
                          className={`py-1 rounded text-center transition-all cursor-pointer ${
                            uptimerobotMode === 'statuspages'
                              ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          Public Pages
                        </button>
                        <button
                          type="button"
                          onClick={() => setUptimerobotMode('incidents')}
                          className={`py-1 rounded text-center transition-all cursor-pointer ${
                            uptimerobotMode === 'incidents'
                              ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          Incidents
                        </button>
                        <button
                          type="button"
                          onClick={() => setUptimerobotMode('alerts')}
                          className={`py-1 rounded text-center transition-all cursor-pointer ${
                            uptimerobotMode === 'alerts'
                              ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          Alerts &amp; Profile
                        </button>
                      </div>

                      {/* Tab 1: Webpage, Server & API Monitoring */}
                      {uptimerobotMode === 'monitors' && (
                        <div className="space-y-2 text-xs">
                          <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1.5 border-b border-slate-800/80">
                            <span className="font-semibold text-emerald-400">Digital Infrastructure</span>
                            <span className="text-[10px] font-mono text-emerald-300">18 UP · 0 DOWN</span>
                          </div>

                          <div className="grid grid-cols-3 gap-1 text-[9px]">
                            {[
                              { id: 'webpage', label: 'Webpages' },
                              { id: 'server', label: 'Servers' },
                              { id: 'api', label: 'APIs' }
                            ].map((tab) => (
                              <button
                                key={tab.id}
                                type="button"
                                onClick={() => setSelectedMonitor(tab.id as any)}
                                className={`py-1 rounded text-center transition-all cursor-pointer border ${
                                  selectedMonitor === tab.id
                                    ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 font-bold'
                                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                                }`}
                              >
                                {tab.label}
                              </button>
                            ))}
                          </div>

                          <div className="p-2 rounded bg-slate-950 border border-slate-800 space-y-1.5 font-mono">
                            <div className="flex items-center justify-between text-[10px]">
                              <span className="text-white font-bold flex items-center gap-1.5">
                                <Activity className="w-3 h-3 text-emerald-400" />
                                {selectedMonitor === 'webpage' && 'yourbrand.com/store'}
                                {selectedMonitor === 'server' && 'US Cloud Server #01'}
                                {selectedMonitor === 'api' && 'api.yourbrand.com/v1/checkout'}
                              </span>
                              <span className="text-emerald-400 font-bold text-[9px]">100% OPERATIONAL</span>
                            </div>

                            <div className="flex items-center gap-1 py-0.5">
                              {Array.from({ length: 16 }).map((_, idx) => (
                                <div
                                  key={idx}
                                  className="h-3 flex-1 rounded-xs bg-emerald-400/90"
                                  title="Check passed"
                                />
                              ))}
                            </div>

                            <div className="grid grid-cols-3 gap-1 text-[9px] text-center pt-1 border-t border-slate-800 text-slate-400">
                              <div>
                                <span>RESPONSE</span>
                                <span className="block text-white font-bold">
                                  {selectedMonitor === 'webpage' ? '82ms' : selectedMonitor === 'server' ? '36ms' : '64ms'}
                                </span>
                              </div>
                              <div>
                                <span>DOWNTIME %</span>
                                <span className="block text-emerald-400 font-bold">0.00%</span>
                              </div>
                              <div>
                                <span>INTERVAL</span>
                                <span className="block text-slate-300 font-bold">60s Multi-loc</span>
                              </div>
                            </div>
                          </div>

                          <div className="text-[9px] text-slate-400 text-center">
                            Monitor, Alert, Analyze, and Communicate: Cover servers, webpages, and APIs effortlessly
                          </div>
                        </div>
                      )}

                      {/* Tab 2: Public Status Pages */}
                      {uptimerobotMode === 'statuspages' && (
                        <div className="space-y-2 text-xs">
                          <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1.5 border-b border-slate-800/80">
                            <span className="font-semibold text-emerald-400">Public Status Pages</span>
                            <span className="text-[10px] font-mono text-emerald-300">DEDICATED LINKS</span>
                          </div>

                          <div className="space-y-1 text-[10px]">
                            <div className="p-1.5 rounded bg-slate-950 border border-slate-800 flex items-center justify-between">
                              <span className="text-slate-300">Webpages Public Page:</span>
                              <span className="text-emerald-400 font-mono text-[9px]">status.brand.com/webpages</span>
                            </div>
                            <div className="p-1.5 rounded bg-slate-950 border border-slate-800 flex items-center justify-between">
                              <span className="text-slate-300">Server Infrastructure Page:</span>
                              <span className="text-emerald-400 font-mono text-[9px]">status.brand.com/servers</span>
                            </div>
                            <div className="p-1.5 rounded bg-slate-950 border border-slate-800 flex items-center justify-between">
                              <span className="text-slate-300">API Health Page:</span>
                              <span className="text-emerald-400 font-mono text-[9px]">status.brand.com/apis</span>
                            </div>
                          </div>

                          <div className="p-1.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[9px] text-emerald-300 text-center">
                            Separate links provided for each type to enhance visibility and communication
                          </div>
                        </div>
                      )}

                      {/* Tab 3: Incident Management */}
                      {uptimerobotMode === 'incidents' && (
                        <div className="space-y-2 text-xs">
                          <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1.5 border-b border-slate-800/80">
                            <span className="font-semibold text-emerald-400">Incident Management</span>
                            <span className="text-[10px] font-mono text-emerald-300">0 ACTIVE</span>
                          </div>

                          <div className="p-2 rounded bg-slate-950 border border-slate-800 space-y-1.5">
                            <div className="flex items-center justify-between text-[10px]">
                              <span className="text-white font-bold flex items-center gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                                <span>Scheduled Upgrade (US-East Server)</span>
                              </span>
                              <span className="text-slate-400 text-[9px]">Resolved in 3m</span>
                            </div>
                            <p className="text-[9px] text-slate-400 leading-snug">
                              Efficiently report incidents for servers, webpages, or APIs through dedicated links. Update incident details with ease.
                            </p>
                          </div>

                          <div className="flex items-center justify-between text-[10px] p-1.5 rounded bg-slate-950 border border-slate-800">
                            <span className="text-slate-300">Outage Analysis Reports:</span>
                            <span className="text-emerald-400 font-bold font-mono">100% Incident History Logged</span>
                          </div>
                        </div>
                      )}

                      {/* Tab 4: Instant Email Alerts & Profile */}
                      {uptimerobotMode === 'alerts' && (
                        <div className="space-y-2 text-xs">
                          <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1.5 border-b border-slate-800/80">
                            <span className="font-semibold text-emerald-400">Instant Alerts &amp; Profile</span>
                            <span className="text-[10px] font-mono text-emerald-300">CONFIGURED</span>
                          </div>

                          <div className="grid grid-cols-2 gap-1.5 text-[10px]">
                            <div className="p-2 rounded bg-slate-950 border border-slate-800 space-y-0.5">
                              <div className="text-slate-400 flex items-center gap-1">
                                <Mail className="w-3 h-3 text-emerald-400" />
                                <span>Email Alerts</span>
                              </div>
                              <div className="text-emerald-400 font-bold">Instant Downtime Push</div>
                            </div>
                            <div className="p-2 rounded bg-slate-950 border border-slate-800 space-y-0.5">
                              <div className="text-slate-400 flex items-center gap-1">
                                <User className="w-3 h-3 text-sky-400" />
                                <span>Profile Section</span>
                              </div>
                              <div className="text-white font-bold">View / Update Profile</div>
                            </div>
                          </div>

                          <div className="text-[9px] text-slate-400 text-center">
                            Receive instant email alerts whenever downtime strikes and manage profile details seamlessly
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {software.id === 'bitly' && (
                    <div className="rounded-xl bg-slate-900 border border-slate-800 p-3.5 space-y-2.5">
                      {/* Bitly sub-navigation tabs */}
                      <div className="grid grid-cols-4 gap-1 p-1 rounded-lg bg-slate-950 border border-slate-800 text-[10px] font-mono">
                        <button
                          type="button"
                          onClick={() => setBitlyMode('shortener')}
                          className={`py-1 rounded text-center transition-all cursor-pointer ${
                            bitlyMode === 'shortener'
                              ? 'bg-orange-500 text-white font-bold shadow-sm'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          Short Links
                        </button>
                        <button
                          type="button"
                          onClick={() => setBitlyMode('biolinks')}
                          className={`py-1 rounded text-center transition-all cursor-pointer ${
                            bitlyMode === 'biolinks'
                              ? 'bg-orange-500 text-white font-bold shadow-sm'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          Bio Pages
                        </button>
                        <button
                          type="button"
                          onClick={() => setBitlyMode('qrcodes')}
                          className={`py-1 rounded text-center transition-all cursor-pointer ${
                            bitlyMode === 'qrcodes'
                              ? 'bg-orange-500 text-white font-bold shadow-sm'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          Custom QR
                        </button>
                        <button
                          type="button"
                          onClick={() => setBitlyMode('dynamic')}
                          className={`py-1 rounded text-center transition-all cursor-pointer ${
                            bitlyMode === 'dynamic'
                              ? 'bg-orange-500 text-white font-bold shadow-sm'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          Dynamic Files
                        </button>
                      </div>

                      {/* Tab 1: Shorten URLs & Compressed Links */}
                      {bitlyMode === 'shortener' && (
                        <div className="space-y-2 text-xs">
                          <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1.5 border-b border-slate-800/80">
                            <span className="font-semibold text-orange-400">Compressed Links &amp; Targeting</span>
                            <span className="text-[10px] font-mono text-emerald-400">+34% CTR LIFT</span>
                          </div>

                          <div className="p-2 rounded bg-slate-950 border border-slate-800 space-y-1.5 font-mono text-[10px]">
                            <div className="text-slate-400 truncate text-[9px]">
                              Original: https://yourbrand.com/deals/fall-special?ref=instagram&amp;campaign=2026
                            </div>
                            <div className="text-orange-300 font-bold flex items-center justify-between bg-slate-900 p-1.5 rounded border border-orange-500/30">
                              <span>brand.link/fall-deals</span>
                              <span className="text-emerald-400 text-[9px]">Active</span>
                            </div>
                          </div>

                          <div className="p-1.5 rounded bg-slate-950 border border-slate-800 text-[9px] text-slate-300 space-y-0.5">
                            <div className="flex items-center justify-between">
                              <span className="text-slate-400">Scheduling &amp; Expiration:</span>
                              <span className="text-amber-400 font-mono">Expires Oct 31 / 1,000 clicks</span>
                            </div>
                            <div className="text-slate-400">
                              Simplify lengthy URLs without effort, ensuring convenience and precise targeting.
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Tab 2: Bio Link Pages with SEO & Password Protection */}
                      {bitlyMode === 'biolinks' && (
                        <div className="space-y-2 text-xs">
                          <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1.5 border-b border-slate-800/80">
                            <span className="font-semibold text-orange-400">Bio Link Pages</span>
                            <span className="text-[10px] font-mono text-emerald-400">BRAND IDENTITY</span>
                          </div>

                          <div className="p-2 rounded bg-slate-950 border border-slate-800 space-y-1 text-[10px]">
                            <div className="flex items-center justify-between">
                              <span className="text-white font-bold">Personalized Brand Hub</span>
                              <span className="text-orange-300 font-mono text-[9px]">bio.brand.link</span>
                            </div>
                            <div className="grid grid-cols-3 gap-1 pt-1 text-[9px] text-center font-mono">
                              <span className="p-1 rounded bg-slate-900 border border-slate-800 text-emerald-300">
                                ✓ SEO Settings
                              </span>
                              <span className="p-1 rounded bg-slate-900 border border-slate-800 text-sky-300">
                                🔒 Password Protected
                              </span>
                              <span className="p-1 rounded bg-slate-900 border border-slate-800 text-amber-300">
                                ⚠️ Sensitive Warning
                              </span>
                            </div>
                          </div>

                          <div className="text-[9px] text-slate-400 text-center">
                            Personalized and adaptable bio link pages that symbolize your brand’s identity
                          </div>
                        </div>
                      )}

                      {/* Tab 3: Custom QR Codes for vCard, WiFi, Calendar, Location */}
                      {bitlyMode === 'qrcodes' && (
                        <div className="space-y-2 text-xs">
                          <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1.5 border-b border-slate-800/80">
                            <span className="font-semibold text-orange-400">Custom Shapes &amp; Logos</span>
                            <span className="text-[10px] font-mono text-amber-300">DYNAMIC QR</span>
                          </div>

                          <div className="grid grid-cols-4 gap-1 text-[9px]">
                            {[
                              { id: 'vcard', label: 'vCard' },
                              { id: 'wifi', label: 'WIFI' },
                              { id: 'calendar', label: 'Calendar' },
                              { id: 'location', label: 'Location' }
                            ].map((item) => (
                              <button
                                key={item.id}
                                type="button"
                                onClick={() => setQrType(item.id as any)}
                                className={`py-1 rounded text-center transition-all cursor-pointer border ${
                                  qrType === item.id
                                    ? 'bg-orange-500/20 border-orange-400 text-orange-300 font-bold'
                                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                                }`}
                              >
                                {item.label}
                              </button>
                            ))}
                          </div>

                          <div className="p-2 rounded bg-slate-950 border border-slate-800 flex items-center gap-3">
                            <div className="w-10 h-10 rounded bg-white text-slate-950 flex items-center justify-center font-bold text-xs shrink-0">
                              <QrCode className="w-8 h-8 text-slate-950" />
                            </div>
                            <div className="text-[10px]">
                              <div className="font-bold text-white">
                                {qrType === 'vcard' && 'Dynamic Digital Contact Card'}
                                {qrType === 'wifi' && 'Instant WIFI Connect QR'}
                                {qrType === 'calendar' && 'Dynamic Calendar (.ics) Event'}
                                {qrType === 'location' && 'GPS Location Pin QR'}
                              </div>
                              <div className="text-[9px] text-slate-400">
                                Custom brand colours, embedded logo, and shapes
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Tab 4: Dynamic Files & Downloadable Tracking */}
                      {bitlyMode === 'dynamic' && (
                        <div className="space-y-2 text-xs">
                          <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1.5 border-b border-slate-800/80">
                            <span className="font-semibold text-orange-400">Downloadable Dynamic Files</span>
                            <span className="text-[10px] font-mono text-emerald-400">TRACKED</span>
                          </div>

                          <div className="space-y-1 text-[10px]">
                            <div className="p-1.5 rounded bg-slate-950 border border-slate-800 flex items-center justify-between">
                              <span className="text-white flex items-center gap-1.5">
                                <Download className="w-3 h-3 text-orange-400" />
                                <span>Dynamic Digital vCard</span>
                              </span>
                              <span className="text-emerald-400 font-mono text-[9px]">Tracked &amp; Downloaded</span>
                            </div>
                            <div className="p-1.5 rounded bg-slate-950 border border-slate-800 flex items-center justify-between">
                              <span className="text-white flex items-center gap-1.5">
                                <Calendar className="w-3 h-3 text-sky-400" />
                                <span>Dynamic Calendar File (.ics)</span>
                              </span>
                              <span className="text-sky-300 font-mono text-[9px]">Download with Tracking</span>
                            </div>
                          </div>

                          <div className="text-[9px] text-slate-400 text-center">
                            Imagine dynamic calendar files and contact cards downloaded with tracking options
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Description & Strategy Area with Tab Switcher */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between bg-slate-900/60">
                  {/* Tab Selector: Core Features vs Pro Tips */}
                  <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono">
                    <button
                      type="button"
                      onClick={() => toggleCardTab(software.id, 'features')}
                      className={`flex-1 py-1.5 px-3 rounded-lg text-center transition-all cursor-pointer flex items-center justify-center gap-1.5 font-semibold ${
                        (activeCardTabs[software.id] || 'features') === 'features'
                          ? 'bg-slate-800 text-white shadow-sm border border-slate-700'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <Layers className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Features Included</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleCardTab(software.id, 'protips')}
                      className={`flex-1 py-1.5 px-3 rounded-lg text-center transition-all cursor-pointer flex items-center justify-center gap-1.5 font-semibold ${
                        activeCardTabs[software.id] === 'protips'
                          ? 'bg-gradient-to-r from-amber-500/20 to-emerald-500/20 text-amber-300 shadow-sm border border-amber-500/40'
                          : 'text-slate-400 hover:text-amber-300'
                      }`}
                    >
                      <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                      <span>Pro Tips</span>
                      <span className="px-1.5 py-0.2 rounded-full bg-amber-400/20 text-amber-300 text-[10px] font-bold border border-amber-400/30">
                        3 Plays
                      </span>
                    </button>
                  </div>

                  {/* TAB 1: Core Features View */}
                  {(activeCardTabs[software.id] || 'features') === 'features' && (
                    <div className="space-y-4 flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono flex items-center justify-between">
                          <span>What's Included (Unrestricted):</span>
                          <span className="text-[10px] font-mono text-emerald-400 font-normal">Enterprise Tier</span>
                        </div>
                        <ul className="space-y-1.5 text-xs text-slate-300">
                          {software.coreFeatures.map((feat, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-3 border-t border-slate-800">
                        <div className="text-[11px] text-slate-400 leading-snug">
                          <span className="font-semibold text-slate-200">Customer Routine: </span>
                          {software.routineTask}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 2: Pro Tips & Growth Strategies View */}
                  {activeCardTabs[software.id] === 'protips' && (
                    <div className="space-y-3 flex-1 flex flex-col justify-between">
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between text-[11px] pb-1 border-b border-slate-800">
                          <span className="text-amber-400 font-bold flex items-center gap-1.5 font-mono">
                            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                            3 Actionable Growth Strategies
                          </span>
                          <span className="text-[10px] font-mono text-emerald-400 font-bold">Immediate ROI</span>
                        </div>

                        {/* 3 Strategy Items */}
                        <div className="space-y-2.5">
                          {software.proTips.map((tip, idx) => (
                            <div
                              key={idx}
                              className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/90 hover:border-amber-500/40 transition-all space-y-1.5"
                            >
                              <div className="flex items-start justify-between gap-2">
                                <div className="flex items-center gap-1.5">
                                  <span className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-400 text-[10px] font-bold font-mono flex items-center justify-center shrink-0 border border-amber-500/30">
                                    {idx + 1}
                                  </span>
                                  <h4 className="text-xs font-bold text-white leading-tight">
                                    {tip.title}
                                  </h4>
                                </div>
                                <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[9px] font-mono text-slate-300 shrink-0">
                                  {tip.tag}
                                </span>
                              </div>

                              <p className="text-[11px] text-slate-300 leading-relaxed pl-5.5">
                                {tip.strategy}
                              </p>

                              <div className="pl-5.5 flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono font-medium pt-0.5">
                                <TrendingUp className="w-3 h-3 text-emerald-400 shrink-0" />
                                <span>Impact: {tip.impact}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2.5 border-t border-slate-800 flex items-center justify-between text-[11px]">
                        <span className="text-slate-400">Included in the bundle</span>
                        <button
                          type="button"
                          onClick={() => onOpenCheckout('bundle')}
                          className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 cursor-pointer transition-colors"
                        >
                          <span>Execute with $40/mo</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Feature Comparison Table */}
        <SoftwareComparisonTable onOpenCheckout={onOpenCheckout} />

        {/* Aggregate Savings Banner */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-teal-950/40 border border-emerald-500/30 p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase font-mono tracking-wider text-emerald-400">
              Complete Business Ecosystem
            </span>
            <h3 className="text-2xl font-bold text-white mt-1 font-display">
              All 6 Powerhouses Combined For Just $40/Month
            </h3>
            <p className="mt-2 text-sm text-slate-300 max-w-2xl">
              Pay one simple, predictable fee instead of $650 across 6 separate invoices. Includes complete onboarding support, all software licenses, and no feature caps.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={() => onOpenCheckout('bundle')}
              className="px-6 py-3 text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2 cursor-pointer"
            >
              <span>Activate Access for $40/mo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
