import React, { useState } from 'react';
import { Mail, MessageSquare, Phone, Send, CheckCircle2, Sparkles, Clock, ShieldCheck } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Question',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Keep confirmation visible
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 border-b border-white/[0.06] bg-[#05070e] relative overflow-hidden">
      {/* Background ambient gradient glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Contact & Concierge Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>24/7 Dedicated Support Concierge</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight leading-tight">
              We’re Here to Help You Scale Without Roadblocks
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed">
              Have questions about provisioning, domain connections, API keys, or custom agency requirements? Our technical onboarding team is available around the clock.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-white/[0.06] backdrop-blur-md">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-mono">Email Concierge</div>
                  <div className="text-sm font-semibold text-white">support@ailifeplanner.com</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-white/[0.06] backdrop-blur-md">
                <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-mono">Official WhatsApp Helpdesk</div>
                  <div className="text-sm font-semibold text-white">+1 (888) 492-SCALE (24/7 Live)</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-white/[0.06] backdrop-blur-md">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-mono">Average Response SLA</div>
                  <div className="text-sm font-semibold text-white">&lt; 4 Minutes (Live Human Agent)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-white/[0.08] backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">Message Dispatched!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you! An onboarding specialist will reply to <span className="text-emerald-400 font-mono">{formData.email}</span> within 10 minutes.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: 'General Question', message: '' });
                    }}
                    className="mt-4 px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-white/[0.06] pb-3 mb-2">
                    <h3 className="text-lg font-bold text-white font-display">
                      Direct Inquiries &amp; Priority Onboarding
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Need custom setup assistance or agency billing questions? Send a direct note.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-white/[0.08] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                        Work Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-white/[0.08] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                      Subject / Topic
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-white/[0.08] text-sm text-white focus:outline-none focus:border-emerald-400 transition-colors"
                    >
                      <option value="General Question">General Software Question</option>
                      <option value="Bundle Activation">Bundle Activation &amp; API Keys</option>
                      <option value="Custom Domain Setup">Custom Domain &amp; WhatsApp Integration</option>
                      <option value="Agency & Multi-Seat">Agency &amp; Multi-Seat Inquiries</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your business goals and what you need assistance with..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-white/[0.08] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:from-emerald-300 hover:to-teal-200 transition-all duration-300 shadow-[0_0_20px_rgba(52,211,153,0.3)] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Send Inquiry to Priority Queue</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Your information is encrypted &amp; never shared with third parties.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
