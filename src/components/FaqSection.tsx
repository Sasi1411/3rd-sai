import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { TOTAL_STANDALONE_PRICE, BUNDLE_PRICE, MONTHLY_SAVINGS } from '../data/softwareData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How is it possible to offer all 6 software applications for just $40/month when they cost $650/month separately?',
      a: `Through enterprise partner licensing agreements and aggregated high-volume seat distribution, we purchase software capacity in bulk directly from infrastructure providers. We pass over 90% of those corporate savings directly to independent business owners, agencies, and creators. Instead of paying $650/mo across six disjointed invoices, you get the exact same enterprise functionality under one $40/mo membership.`
    },
    {
      q: 'Are there really zero feature restrictions or locked tiers?',
      a: 'Yes, absolutely zero restrictions. You receive full access to high-tier features: Mailchimp automated customer journeys, Hostinger SSD hosting with unlimited storage, unmetered bandwidth, and hosting for unlimited websites under a single plan, Fomo dynamic live purchase alerts, Wati multi-channel chatbots (WhatsApp, Telegram, Facebook, Instagram) with WhatsApp Catalog, Telegram store checkout & Shopify webhooks, UptimeRobot 60-second multi-location ping checks, and Bitly branded domain short links and dynamic QR codes.'
    },
    {
      q: 'What is included with the Hostinger web hosting service in this bundle?',
      a: 'You receive high-performance SSD Hosting with unlimited storage and unmetered bandwidth, providing ample space for your websites to thrive. You can host as many websites as you need under a single plan. It features a complimentary integrated Content Delivery Network (CDN) for swift and efficient loading, free SSL certificates, free business email services, and robust servers located in the United States for maximum reliability. You also enjoy powerful custom-made control panels with a user-friendly interface, routine regular malware scans, 24/7 customer support with specialized WordPress assistance, high uptime guarantee, 1-click open source installation for WordPress, Joomla, OpenCart, and Drupal, plus access to over 80 free website apps with our Shared and Managed Cloud Hosting plans.'
    },
    {
      q: 'How does Wati handle chatbots, Telegram, WhatsApp Catalog, and webhooks?',
      a: 'Wati functions as an omnichannel chatbot engine across WhatsApp, Telegram, Facebook, and Instagram. You can place chatbot links on your website, social media pages, and email newsletters. Telegram broadcasts enjoy high open rates with zero 24-hour rule restriction, while centralized live chat manages both Telegram and WhatsApp in one inbox. For sales, you can showcase WhatsApp Catalogs or deploy full-fledged Telegram eCommerce stores with simple checkouts. Seamless webhook workflows connect Shopify (for order alerts and COD to Prepaid conversion), WP Elementor, Google Forms, Typeform, and WooCommerce, with auto-responder sync to Mailchimp, Sendinblue, and ActiveCampaign.'
    },
    {
      q: 'Can I connect my own custom domains, branding, and phone numbers?',
      a: '100% yes. You can connect your existing custom domain names to Hostinger and Bitly, use your verified company phone number with Wati official WhatsApp & Telegram bots, and integrate your brand logos into Fomo social proof widgets and Mailchimp templates.'
    },
    {
      q: 'How does this bundle help organize daily customer care routines?',
      a: 'The suite connects all customer touchpoints: UptimeRobot guarantees your storefront is live; Hostinger ensures sub-second page speeds; Fomo builds trust for incoming visitors; Wati provides 24/7 centralized live-chat across Telegram and WhatsApp; and Mailchimp handles automated post-purchase surveys and loyalty sequences.'
    },
    {
      q: 'What is the refund and cancellation policy?',
      a: 'We offer a 30-day no-questions-asked money-back guarantee. If you decide at any point in your first month that BizzScale is not right for your business, simply click cancel in your dashboard or contact our support team for an immediate 100% refund. There are no contracts and you can cancel anytime.'
    },
    {
      q: 'How fast do I receive access after subscribing?',
      a: 'Access credentials and instant API license keys are provisioned immediately upon checkout completion—typically in under 120 seconds. You will also receive an invitation to our guided VIP onboarding setup walkthrough.'
    }
  ];

  return (
    <section className="py-20 border-b border-slate-800/80 bg-slate-950/40 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 font-mono">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 font-display">
            Clear Answers to Everything You Need to Know
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            Have questions before joining? Here is how our all-inclusive $40/month growth bundle works.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-slate-900/80 border border-slate-800 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-850"
                >
                  <span className="text-base font-bold text-white font-display">
                    {faq.q}
                  </span>
                  <span className="text-emerald-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
