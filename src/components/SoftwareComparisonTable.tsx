import React, { useState } from 'react';
import { 
  Check, X, Sparkles, ShieldCheck, Zap, 
  Layers, Cpu, Activity, BarChart3, HelpCircle 
} from 'lucide-react';
import { SOFTWARE_LIST } from '../data/softwareData';
import { getSoftwareLogo } from './SoftwareBrandLogos';

export interface ComparisonRow {
  id: string;
  category: 'core' | 'automation' | 'analytics' | 'specs';
  featureName: string;
  featureDescription: string;
  capabilities: {
    mailchimp: string;
    hostinger: string;
    fomo: string;
    wati: string;
    uptimerobot: string;
    bitly: string;
  };
}

export const COMPARISON_DATA: ComparisonRow[] = [
  // 1. Core Capabilities & Purpose
  {
    id: 'primary-role',
    category: 'core',
    featureName: 'Core Business Role',
    featureDescription: 'Primary function within your growth ecosystem',
    capabilities: {
      mailchimp: 'Send via own SMTPs (SES/Mailgun), Drag & Drop builder, Excel import & email tracking',
      hostinger: 'SSD Hosting with Unlimited Storage & Bandwidth, host unlimited websites, CDN & 80+ apps',
      fomo: 'Automated timed proof, widgets (YouTube/coupons), emoji feedback, lead capture & countdowns',
      wati: 'WhatsApp, Telegram, FB & IG Chatbots + Centralized Live Chat & Webhook Workflows',
      uptimerobot: '24/7 Webpage, Server & API monitoring, Public Status Pages & Incident Management',
      bitly: 'URL Shortener, compressed links with scheduling/expiry, bio-links & dynamic QR/vCard',
    },
  },
  {
    id: 'primary-engine',
    category: 'core',
    featureName: 'Underlying Engine',
    featureDescription: 'Enterprise architecture powering the service',
    capabilities: {
      mailchimp: 'Connect multiple SMTPs (Amazon SES, Mailgun, custom) with built-in drag-and-drop editor',
      hostinger: 'Robust US SSD server infrastructure + Complimentary integrated CDN',
      fomo: 'Automated notification engine with live counters, YouTube widgets, emoji feedback & lead collector',
      wati: 'Official Meta Cloud API + Telegram Bot API & Centralized Inbox',
      uptimerobot: 'Multi-location check engine for webpages, servers, and APIs + dedicated incident portals',
      bitly: 'Global URL redirection with password-protected bio-links & dynamic vCard/Calendar tracking',
    },
  },
  {
    id: 'core-quota',
    category: 'core',
    featureName: 'Max Quota Capability',
    featureDescription: 'Unrestricted enterprise scale included in plan',
    capabilities: {
      mailchimp: 'Multiple custom SMTPs, unlimited Excel list imports & automated email campaigns',
      hostinger: 'Host Unlimited Websites Under Single Plan, Unlimited Storage & Bandwidth',
      fomo: 'Unlimited notification impressions, email collector leads & interactive feedback widgets',
      wati: 'Unlimited WhatsApp & Telegram Contacts + WhatsApp Catalog',
      uptimerobot: 'Unlimited Webpage, Server & API monitors + Public Status Pages & Incident Reports',
      bitly: 'Unlimited compressed links, bio pages, dynamic QR codes & downloadable files',
    },
  },
  {
    id: 'target-sla',
    category: 'core',
    featureName: 'Performance Benchmark',
    featureDescription: 'Guaranteed speed and deliverability benchmarks',
    capabilities: {
      mailchimp: '99.6% Inbox Delivery via Own SMTPs · Real-time click/open/bounce metrics',
      hostinger: 'High Uptime Commitment Guarantee · Sub-100ms US Edge Content Delivery',
      fomo: 'Immediate timed trigger delivery · Urgency countdown timer & non-intrusive proof',
      wati: '98% Open Rate · No 24-hr restriction for Telegram',
      uptimerobot: '60-Second Checks · Real-time up/down status count & downtime %',
      bitly: 'Instant redirection · Link scheduling & expiration limits with precise targeting',
    },
  },

  // 2. Automations & Workflows
  {
    id: 'auto-trigger',
    category: 'automation',
    featureName: 'Automated Triggers',
    featureDescription: 'Event-driven logic operating 24/7 without manual input',
    capabilities: {
      mailchimp: 'Automated email campaigns, Excel list synchronization & multi-SMTP deliverability routing',
      hostinger: 'Routine Regular Malware Scans & 1-Click App Installs',
      fomo: 'Welcome messages, discount offers, client reviews, live counters & countdown timers',
      wati: 'Shopify COD-to-Prepaid webhook workflows, order notifications & 24/7 bots',
      uptimerobot: 'Instant email downtime alerts, count of up/down statuses & incident report logs',
      bitly: 'Scheduled link windows, expiration limits, dynamic vCard downloads & calendar tracking',
    },
  },
  {
    id: 'integration-stack',
    category: 'automation',
    featureName: 'Native Integrations',
    featureDescription: 'Plug-and-play connections to your current tech stack',
    capabilities: {
      mailchimp: 'Amazon SES, Mailgun, Custom SMTPs, Excel (.xlsx/.csv), Shopify, WooCommerce',
      hostinger: 'WordPress, Joomla, OpenCart, Drupal & 80+ Free Website Apps',
      fomo: 'YouTube video embeds, emoji feedback, score feedback, email/request collectors',
      wati: 'Shopify, WooCommerce, WP Elementor, Typeform, Google Forms, Mailchimp, Sendinblue',
      uptimerobot: 'Webpages, Servers, APIs, Email alerts, Public Pages & Dedicated Incident portals',
      bitly: 'vCard contacts, WiFi auto-connect, Calendar (.ics), Location GPS & Dynamic Files',
    },
  },
  {
    id: 'workflow-template',
    category: 'automation',
    featureName: 'Ready-to-Use Templates',
    featureDescription: 'Pre-configured workflow templates ready on day 1',
    capabilities: {
      mailchimp: 'Built-in drag-and-drop email builder blocks & Excel list import presets',
      hostinger: '1-click open source installs (WP, Joomla, OpenCart, Drupal) & 80+ apps',
      fomo: 'Coupons, live counters, YouTube video widgets, emoji & score feedback',
      wati: 'Telegram eCommerce store, WhatsApp Catalog & Webhook Workflow presets',
      uptimerobot: 'Public status pages for servers, webpages, or APIs with separate dedicated links',
      bitly: 'Custom QR codes for vCard, WiFi, Calendar (.ics), Location & dynamic files',
    },
  },

  // 3. Analytics & Intelligence
  {
    id: 'analytics-depth',
    category: 'analytics',
    featureName: 'Analytics & Attribution',
    featureDescription: 'Granular tracking metrics to quantify business impact',
    capabilities: {
      mailchimp: 'Real-time tracking of clicks, opens, and bounce rates with advanced reports',
      hostinger: 'Powerful custom-made control panels & real-time server monitor',
      fomo: 'Latest conversions counter, email lead captures & emoji/score feedback evaluation',
      wati: 'Centralized live-chat SLAs, COD conversion rates & webhook delivery logs',
      uptimerobot: 'Total downtime %, avg response time, weekly status & detailed outage analysis reports',
      bitly: 'Click location tracking, download analytics for dynamic vCard & calendar files',
    },
  },
  {
    id: 'security-compliance',
    category: 'analytics',
    featureName: 'Security & Compliance',
    featureDescription: 'Enterprise data protection and verified status',
    capabilities: {
      mailchimp: 'Send directly via own SMTPs for maximum control, privacy & deliverability',
      hostinger: 'Free SSL, Free Email, Routine Malware Scans & 24/7 WordPress Support',
      fomo: 'Cookie notification for transparency and compliance, privacy-masked social proof',
      wati: 'End-to-end encrypted chats with Meta official badge',
      uptimerobot: 'Incident management with dedicated links & user profile management section',
      bitly: 'Password protection, SEO meta settings & warnings for sensitive content',
    },
  },

  // 4. Standalone Value Comparison
  {
    id: 'standalone-price',
    category: 'specs',
    featureName: 'Standalone Vendor Price',
    featureDescription: 'Monthly cost when purchased directly from vendor',
    capabilities: {
      mailchimp: '$162 / month',
      hostinger: '$9 / month',
      fomo: '$50 / month',
      wati: '$314 / month',
      uptimerobot: '$80 / month',
      bitly: '$35 / month',
    },
  },
  {
    id: 'bundle-status',
    category: 'specs',
    featureName: 'BizzScale Membership',
    featureDescription: 'Your included access level under BizzScale',
    capabilities: {
      mailchimp: 'Fully Included (Zero Surcharges)',
      hostinger: 'Fully Included (Zero Surcharges)',
      fomo: 'Fully Included (Zero Surcharges)',
      wati: 'Fully Included (Zero Surcharges)',
      uptimerobot: 'Fully Included (Zero Surcharges)',
      bitly: 'Fully Included (Zero Surcharges)',
    },
  },
];

interface SoftwareComparisonTableProps {
  onOpenCheckout: (plan?: string) => void;
}

export const SoftwareComparisonTable: React.FC<SoftwareComparisonTableProps> = ({ onOpenCheckout }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'core' | 'automation' | 'analytics' | 'specs'>('all');

  const filteredRows = activeCategory === 'all'
    ? COMPARISON_DATA
    : COMPARISON_DATA.filter((row) => row.category === activeCategory);

  return (
    <div className="mt-16 w-full">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-2">
          <Layers className="w-4 h-4" />
          <span>Cross-Platform Capability Matrix</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
          Compare Specific Capabilities Across All 6 Tools
        </h3>
        <p className="mt-2 text-sm text-slate-300">
          Everything your business needs to launch, host, automate, broadcast, monitor, and scale—fully integrated with zero hidden seat fees.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
            activeCategory === 'all'
              ? 'bg-emerald-400 text-slate-950 font-bold shadow-md'
              : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          All Capabilities ({COMPARISON_DATA.length})
        </button>
        <button
          onClick={() => setActiveCategory('core')}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
            activeCategory === 'core'
              ? 'bg-emerald-400 text-slate-950 font-bold shadow-md'
              : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          Core Infrastructure
        </button>
        <button
          onClick={() => setActiveCategory('automation')}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
            activeCategory === 'automation'
              ? 'bg-emerald-400 text-slate-950 font-bold shadow-md'
              : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          Automations &amp; Workflows
        </button>
        <button
          onClick={() => setActiveCategory('analytics')}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
            activeCategory === 'analytics'
              ? 'bg-emerald-400 text-slate-950 font-bold shadow-md'
              : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          Analytics &amp; Security
        </button>
        <button
          onClick={() => setActiveCategory('specs')}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
            activeCategory === 'specs'
              ? 'bg-emerald-400 text-slate-950 font-bold shadow-md'
              : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          Pricing &amp; Value Breakdown
        </button>
      </div>

      {/* Comparison Table Container */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/90 shadow-2xl backdrop-blur-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1020px]">
            {/* Table Header with 6 Software Brands */}
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950/80">
                <th className="p-4 sm:p-5 w-60 sticky left-0 z-20 bg-slate-950/95 backdrop-blur-sm border-r border-slate-800">
                  <div className="text-xs uppercase font-mono text-slate-400 font-bold">
                    Feature &amp; Scope
                  </div>
                  <div className="text-[11px] text-slate-500 font-normal mt-0.5">
                    Specific capability
                  </div>
                </th>

                {SOFTWARE_LIST.map((tool) => (
                  <th key={tool.id} className="p-4 text-center min-w-[130px] border-r border-slate-800/60 last:border-r-0">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center p-1.5 shadow-sm mb-2">
                        {getSoftwareLogo(tool.id, 'w-6 h-6')}
                      </div>
                      <div className="font-extrabold text-sm text-white font-display">
                        {tool.name}
                      </div>
                      <div className="text-[10px] text-rose-400 font-mono mt-0.5">
                        ${tool.standalonePrice}/mo regular
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-slate-800/70 text-xs text-slate-300">
              {filteredRows.map((row, rIdx) => {
                const isPricingRow = row.id === 'standalone-price';
                const isBundleRow = row.id === 'bundle-status';

                return (
                  <tr 
                    key={row.id} 
                    className={`transition-colors hover:bg-slate-800/40 ${
                      rIdx % 2 === 0 ? 'bg-slate-900/40' : 'bg-slate-900/10'
                    } ${isBundleRow ? 'bg-emerald-950/20 font-semibold' : ''}`}
                  >
                    {/* Leftmost Feature Column (Sticky) */}
                    <td className="p-4 sm:p-5 sticky left-0 z-10 bg-slate-950/90 backdrop-blur-sm border-r border-slate-800">
                      <div className="font-bold text-white text-sm font-display">
                        {row.featureName}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                        {row.featureDescription}
                      </div>
                    </td>

                    {/* 6 Capability Values */}
                    <td className="p-4 text-center border-r border-slate-800/60 align-middle">
                      <span className={`${
                        isBundleRow 
                          ? 'text-emerald-400 font-bold font-mono' 
                          : isPricingRow 
                          ? 'text-rose-400 font-mono font-bold text-sm' 
                          : 'text-slate-200'
                      }`}>
                        {row.capabilities.mailchimp}
                      </span>
                    </td>

                    <td className="p-4 text-center border-r border-slate-800/60 align-middle">
                      <span className={`${
                        isBundleRow 
                          ? 'text-emerald-400 font-bold font-mono' 
                          : isPricingRow 
                          ? 'text-rose-400 font-mono font-bold text-sm' 
                          : 'text-slate-200'
                      }`}>
                        {row.capabilities.hostinger}
                      </span>
                    </td>

                    <td className="p-4 text-center border-r border-slate-800/60 align-middle">
                      <span className={`${
                        isBundleRow 
                          ? 'text-emerald-400 font-bold font-mono' 
                          : isPricingRow 
                          ? 'text-rose-400 font-mono font-bold text-sm' 
                          : 'text-slate-200'
                      }`}>
                        {row.capabilities.fomo}
                      </span>
                    </td>

                    <td className="p-4 text-center border-r border-slate-800/60 align-middle">
                      <span className={`${
                        isBundleRow 
                          ? 'text-emerald-400 font-bold font-mono' 
                          : isPricingRow 
                          ? 'text-rose-400 font-mono font-bold text-sm' 
                          : 'text-slate-200'
                      }`}>
                        {row.capabilities.wati}
                      </span>
                    </td>

                    <td className="p-4 text-center border-r border-slate-800/60 align-middle">
                      <span className={`${
                        isBundleRow 
                          ? 'text-emerald-400 font-bold font-mono' 
                          : isPricingRow 
                          ? 'text-rose-400 font-mono font-bold text-sm' 
                          : 'text-slate-200'
                      }`}>
                        {row.capabilities.uptimerobot}
                      </span>
                    </td>

                    <td className="p-4 text-center align-middle">
                      <span className={`${
                        isBundleRow 
                          ? 'text-emerald-400 font-bold font-mono' 
                          : isPricingRow 
                          ? 'text-rose-400 font-mono font-bold text-sm' 
                          : 'text-slate-200'
                      }`}>
                        {row.capabilities.bitly}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>

            {/* Table Footer Summary Row */}
            <tfoot>
              <tr className="bg-slate-950 border-t-2 border-emerald-400/40">
                <td className="p-4 sm:p-5 sticky left-0 z-10 bg-slate-950 border-r border-slate-800">
                  <div className="font-extrabold text-white text-sm font-display">
                    Combined Software Cost
                  </div>
                  <div className="text-[11px] text-emerald-400 font-mono">
                    Total Value: $650/month
                  </div>
                </td>
                <td colSpan={6} className="p-4 sm:p-5 text-right">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-left text-xs text-slate-300">
                      <span className="font-bold text-white">All 6 tools are unlocked seamlessly under 1 invoice.</span>
                      <span className="block text-[11px] text-slate-400 mt-0.5">
                        Save $7,320 every year compared to purchasing individual subscriptions.
                      </span>
                    </div>

                    <button
                      onClick={() => onOpenCheckout('bundle')}
                      className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 transition-all shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap"
                    >
                      Get All 6 for $40/mo
                    </button>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};
