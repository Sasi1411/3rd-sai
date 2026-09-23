import React from 'react';
import { TOTAL_STANDALONE_PRICE, BUNDLE_PRICE } from '../data/softwareData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05080E] border-t border-slate-800 text-slate-400 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1 */}
          <div className="space-y-3">
            <a href="#" className="text-xl font-bold tracking-tight text-white font-display">
              BizzScale<span className="text-emerald-400">.</span>
            </a>
            <p className="text-slate-400 text-xs leading-relaxed max-w-xs">
              World’s most powerful application suite to scale &amp; grow your business. Unlimited access to 6 essential tools for $40/mo instead of $650/mo.
            </p>
            <div className="text-[11px] text-slate-500">
              Trusted by marketers, founders, and creators worldwide.
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-semibold text-white mb-3 text-xs uppercase tracking-wider font-mono">
              The 6 Applications
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#apps" className="hover:text-white transition-colors">Mailchimp (Email Marketing)</a></li>
              <li><a href="#apps" className="hover:text-white transition-colors">Hostinger (Web Hosting)</a></li>
              <li><a href="#apps" className="hover:text-white transition-colors">Fomo (Social Proof)</a></li>
              <li><a href="#apps" className="hover:text-white transition-colors">Wati (WhatsApp Automation)</a></li>
              <li><a href="#apps" className="hover:text-white transition-colors">UptimeRobot (Website Monitor)</a></li>
              <li><a href="#apps" className="hover:text-white transition-colors">Bitly (Link &amp; QR Hub)</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-semibold text-white mb-3 text-xs uppercase tracking-wider font-mono">
              Solutions &amp; Blueprints
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#why-needed" className="hover:text-white transition-colors">Traffic Generation</a></li>
              <li><a href="#why-needed" className="hover:text-white transition-colors">Customer Engagement</a></li>
              <li><a href="#why-needed" className="hover:text-white transition-colors">Lead Retargeting</a></li>
              <li><a href="#why-needed" className="hover:text-white transition-colors">Website Reliability</a></li>
              <li><a href="#plan-builder" className="hover:text-white transition-colors">Personalized Plan Builder</a></li>
              <li><a href="#who-benefits" className="hover:text-white transition-colors">12 Marketer Playbooks</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">30 Verified Customer Proofs</a></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-semibold text-white mb-3 text-xs uppercase tracking-wider font-mono">
              Guarantees &amp; Policy
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              30-Day 100% Money-Back Guarantee. No contracts, cancel anytime with one click.
            </p>
            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
              <span className="text-emerald-400 font-bold">Standard Value:</span> ${TOTAL_STANDALONE_PRICE}/mo<br />
              <span className="text-white font-bold">BizzScale Bundle:</span> ${BUNDLE_PRICE}/mo
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} BizzScale. All rights reserved. World’s most powerful business scaling stack.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Security &amp; SLA</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
