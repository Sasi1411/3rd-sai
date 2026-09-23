export interface ProTip {
  title: string;
  strategy: string;
  impact: string;
  tag: string;
}

export interface SoftwareItem {
  id: string;
  name: string;
  category: string;
  standalonePrice: number;
  badge: string;
  tagline: string;
  description: string;
  coreFeatures: string[];
  businessImpact: string;
  routineTask: string;
  color: string;
  accentBg: string;
  accentBorder: string;
  brandColor: string;
  proTips: ProTip[];
}

export const SOFTWARE_LIST: SoftwareItem[] = [
  {
    id: 'mailchimp',
    name: 'Mailchimp',
    category: 'Email Marketing, Custom SMTP & Automations',
    standalonePrice: 162,
    badge: 'Email Marketing & Multiple SMTPs',
    tagline: 'Continue using your favorite apps alongside Mailchimp with custom SMTP & drag-and-drop builder',
    description: 'Continue using your favorite apps alongside Mailchimp for enhanced email marketing performance. Send emails directly from your own SMTP servers, ensuring maximum control and reliability. Seamlessly integrate your preferred SMTP services like Amazon SES, Mailgun, and custom gateways. Craft visually appealing emails quickly using the built-in drag-and-drop email builder. Effortlessly import your email lists in Excel format for streamlined campaign management. Set up automated email campaigns to boost engagement and interactions. Gain real-time tracking insights into email performance with live metrics on clicks, opens, and bounce rates. Add multiple SMTPs to optimize deliverability and easily manage subscriber lists for targeted and effective campaigns.',
    coreFeatures: [
      'Own & Multiple SMTP Servers: Send directly via Amazon SES, Mailgun, or custom SMTPs for maximum deliverability and control',
      'Drag-and-Drop Email Builder: Craft visually appealing, responsive emails quickly with pre-designed blocks',
      'Excel List Import (.xlsx & .csv): Effortlessly import and manage subscriber lists for streamlined targeting',
      'Automated Email Campaigns: Set up behavioral drips, onboarding sequences, and engagement triggers',
      'Real-Time Email Tracking: Live monitoring and advanced reports on open rates, click-throughs, and bounce rates',
      'Continue using favorite apps alongside Mailchimp: Seamless integration across your existing business software stack'
    ],
    businessImpact: 'Maximizes inbox delivery rates to over 99%, eliminates email volume surcharges through custom SMTP routing, and automates subscriber revenue.',
    routineTask: 'Morning 9:00 AM: Import Excel contact updates, review real-time open/click/bounce rates & monitor SMTP pool health.',
    color: 'from-amber-500 to-yellow-600',
    accentBg: 'bg-amber-500/10',
    accentBorder: 'border-amber-500/30',
    brandColor: '#FFE01B',
    proTips: [
      {
        title: '3-Stage Behavioral Abandoned Cart Sequence',
        strategy: 'Deploy a timed 3-step automation: Step 1 (15m): gentle cart reminder showing product thumbnails; Step 2 (24h): social proof reviews and FAQs; Step 3 (48h): expiring 10% VIP coupon with countdown.',
        impact: 'Recovers 22%–35% of lost checkouts automatically',
        tag: 'Automated Drip'
      },
      {
        title: 'Multi-SMTP Segment Routing for 99.4% Inbox Rates',
        strategy: 'Route mission-critical transactional emails through Amazon SES while running cold outreach through dedicated secondary SMTP pools to protect your primary domain score.',
        impact: 'Zero spam folder penalties & cuts relay costs to $0.10/k',
        tag: 'Deliverability Play'
      },
      {
        title: '4-Day "Welcome & Indoctrination" Flow',
        strategy: 'Day 1: Instant lead magnet delivery + brand origin; Day 2: The #1 mistake your customers make; Day 3: Client case study breakdown; Day 4: Limited bundle invite.',
        impact: 'Boosts subscriber lifetime value (LTV) by 42%',
        tag: 'Onboarding Blueprint'
      }
    ]
  },
  {
    id: 'hostinger',
    name: 'Hostinger',
    category: 'High-Performance Cloud SSD Web Hosting',
    standalonePrice: 9,
    badge: 'Unlimited Web Hosting',
    tagline: 'SSD Hosting with Unlimited Storage & Bandwidth, Complimentary CDN & 1-Click Apps',
    description: 'Enjoy SSD Hosting with unlimited storage and bandwidth, providing ample space for your websites to thrive. Host as many websites as you need under a single plan. Enhance speed with a complimentary Content Delivery Network (CDN) and robust US-based servers. Benefit from free SSL certificates, complimentary business email, routine malware scans, powerful custom-made control panels, 24/7 customer support, and specialized WordPress assistance. Install your preferred open source platform (WordPress, Joomla, OpenCart, Drupal) and access over 80 free website apps with 1-click simplicity.',
    coreFeatures: [
      'Unlimited SSD Storage & Bandwidth: Ample space and seamless data transfer with zero throttling',
      'Host Unlimited Websites Under a Single Plan: Total flexibility and scalability for all your online ventures',
      'Complimentary CDN & US Infrastructure: Robust United States servers ensuring swift content delivery and sub-100ms loading',
      '1-Click Open Source Platform Installs: WordPress, Joomla, OpenCart, Drupal & 80+ free website apps',
      'Free SSL Certificates & Complimentary Email: Safeguarding communication, data security, and branded mailboxes',
      'Routine Malware Scans & High Uptime Guarantee: Continuous threat defense keeping your online presence reliable and secure',
      '24/7 Support & Specialized WordPress Assistance: Round-the-clock guidance tailored to your technical needs',
      'Powerful Custom-Made Control Panels: User-friendly interface to manage applications with a single click'
    ],
    businessImpact: 'Eliminates hosting bottlenecks, guarantees enterprise speed and 99.9% uptime on US servers, and lets you deploy unlimited websites and apps with zero coding.',
    routineTask: 'Weekly Monday: Check server response speeds, routine malware scan status & CDN edge metrics.',
    color: 'from-purple-500 to-indigo-600',
    accentBg: 'bg-purple-500/10',
    accentBorder: 'border-purple-500/30',
    brandColor: '#673DE6',
    proTips: [
      {
        title: 'Global Edge Caching & LiteSpeed Optimization',
        strategy: 'Activate the complimentary CDN paired with LiteSpeed object caching to pre-render dynamic pages into static HTML edge assets across US and international points of presence.',
        impact: 'Slashes Largest Contentful Paint (LCP) under 0.8s for SEO rank boost',
        tag: 'Speed & Core Vitals'
      },
      {
        title: '1-Click Staging Sandbox Before Going Live',
        strategy: 'Always clone your production site to Hostinger’s 1-click staging environment before updating WooCommerce plugins or PHP versions to test checkout flows safely.',
        impact: 'Prevents checkout breakage & guarantees 0 lost revenue',
        tag: 'Risk Mitigation'
      },
      {
        title: 'High-Deliverability Branded Business Email',
        strategy: 'Set up your complimentary business email with custom SPF, DKIM, and DMARC DNS records inside the Hostinger control panel for all customer outreach.',
        impact: 'Increases cold outreach response rate by 2.4x vs generic Gmail',
        tag: 'Enterprise Trust'
      }
    ]
  },
  {
    id: 'fomo',
    name: 'Fomo',
    category: 'Social Proof, Urgency & Lead Capture Engine',
    standalonePrice: 50,
    badge: 'Social Proof & Multi-Widget Engine',
    tagline: 'Fully automated notifications, live counters, YouTube widgets, emoji feedback & lead collectors',
    description: 'Trigger fully automated notifications at the right time and place for increased engagement. Cater to various use cases with welcome messages, discount offers, client reviews, and testimonials that instill confidence like a virtual sales team. Craft fully customizable informational messages, showcase latest conversions and dynamic conversion counters, and deploy diverse notification types: coupons, live counters, embedded YouTube video widgets, emoji feedback, and score feedback. Effortlessly collect emails and generate leads with the email collector and request collector features. Induce urgency with high-converting countdown timers, encourage content sharing with social share widgets, and ensure transparency and compliance with customizable cookie notifications.',
    coreFeatures: [
      'Automated Timed Notifications: Welcome messages, discount offers, random reviews, and client testimonials',
      'Virtual Sales Team Social Proof: Latest conversions showcase & live conversion counters to establish buyer trust',
      'Diverse Notification Types: Coupons, live visitor counters, YouTube video widgets, and informational announcements',
      'Interactive Feedback Widgets: Emoji feedback & score feedback for immediate user engagement and evaluation',
      'Lead Generation Powerhouses: Email collector & request collector to gather valuable customer information',
      'Countdown Timer & Urgency: Induce FOMO coupled with high-converting lead generation capabilities',
      'Social Share & Cookie Transparency: Encourage content virality and maintain regulatory cookie compliance'
    ],
    businessImpact: 'Converts cold traffic into eager buyers by instilling social proof confidence, gathering direct leads, and boosting site conversions by 20% to 40%.',
    routineTask: 'Daily 1:00 PM: Review latest conversions counter, inspect emoji/score feedback ratings & export collected email leads.',
    color: 'from-orange-500 to-amber-600',
    accentBg: 'bg-orange-500/10',
    accentBorder: 'border-orange-500/30',
    brandColor: '#F95738',
    proTips: [
      {
        title: 'Geo-Targeted Live Buyer Notification Toasts',
        strategy: 'Configure Fomo to display recent buyer names with localized city/state pins ("Sarah from Austin, TX just claimed the Growth Bundle") on your pricing and checkout pages.',
        impact: 'Reduces cart hesitation and lifts conversions by up to 28%',
        tag: 'Conversion Lift'
      },
      {
        title: 'Exit-Intent Email Collector + Countdown Coupon',
        strategy: 'Trigger an interactive lead capture slide-in only when mouse trajectory indicates exit intent, offering an exclusive 15-minute expiring discount code.',
        impact: 'Captures 14%–20% of otherwise abandoning traffic into your list',
        tag: 'Lead Capture'
      },
      {
        title: 'Dynamic Real-Time Live Visitor Urgency Counter',
        strategy: 'Pair the live counter widget ("18 entrepreneurs viewing this offer now") with 1-click emoji feedback buttons directly on high-ticket product descriptions.',
        impact: 'Accelerates purchasing velocity and shortens buying cycle',
        tag: 'Ethical Urgency'
      }
    ]
  },
  {
    id: 'wati',
    name: 'Wati',
    category: 'WhatsApp, Telegram, Facebook & Instagram Chatbots',
    standalonePrice: 314,
    badge: 'Omnichannel Chatbots & eCommerce',
    tagline: 'WhatsApp, Telegram, Facebook & Instagram Chatbots with eCommerce & Webhook Automation',
    description: 'Deploy intelligent chatbots across WhatsApp, Telegram, Facebook, and Instagram. Include chatbot links on your website, social media pages, and email newsletters. Send promotional messages, notifications, and updates at any time with high open rates (no 24-hour rule restriction on Telegram). Experience centralized live-chat for both Telegram and WhatsApp, boost sales with WhatsApp Catalog, launch full-fledged Telegram eCommerce stores with simple checkout, and connect Shopify, WooCommerce, WP Elementor, Typeform, and Google Forms using WhatsApp Webhook Workflows.',
    coreFeatures: [
      'Omnichannel chatbots across WhatsApp, Telegram, Facebook, and Instagram',
      'Shareable chatbot links for your website, social media pages, and email newsletters',
      'Promotional messages & updates at any time (no 24-hour rule restriction on Telegram)',
      'Centralized live-chat inbox for Telegram and WhatsApp for quick, top-notch client support',
      'WhatsApp Catalog integration & full-fledged Telegram eCommerce store with simple checkout',
      'Shopify WhatsApp Webhook Workflow: Order Notification, COD to Prepaid Conversion, and automated alerts',
      'Connect third-party webhook providers: Typeform, Google Forms, WP Elementor, WooCommerce, and Shopify',
      'APIs for sending SMS/emails & auto-responder integration with Mailchimp, Sendinblue, and ActiveCampaign'
    ],
    businessImpact: 'Converts leads into buyers across 4 conversational channels, recovers COD checkouts to prepaid, and automates 24/7 sales on Telegram and WhatsApp.',
    routineTask: 'Daily 11:00 AM & 4:00 PM: Monitor centralized Telegram & WhatsApp live chats, verify webhook order workflows, and trigger promotional broadcasts.',
    color: 'from-emerald-500 to-teal-600',
    accentBg: 'bg-emerald-500/10',
    accentBorder: 'border-emerald-500/30',
    brandColor: '#25D366',
    proTips: [
      {
        title: 'Cash-on-Delivery (COD) to Prepaid Webhook Trigger',
        strategy: 'Fire an automated WhatsApp message instantly after a customer places a COD order, offering a 5% instant discount if completed online via credit card or instant transfer.',
        impact: 'Converts 35%–45% of risky COD orders to prepaid, eliminating return losses',
        tag: 'Cashflow Protection'
      },
      {
        title: 'Zero-Restriction Telegram Flash Deal Broadcasts',
        strategy: 'Build a VIP Telegram subscriber channel linked from your site header to broadcast flash sales, feature drops, and vouchers without Meta’s 24-hour messaging window restrictions.',
        impact: 'Achieves 70%+ open rates within 20 minutes of broadcast',
        tag: 'Omnichannel Reach'
      },
      {
        title: '24/7 Instant Order Tracking & FAQ Bot',
        strategy: 'Connect Wati to Shopify or WooCommerce webhooks to let customers type "Track Order" or "Returns" to receive instant automated status updates without human agent delays.',
        impact: 'Deflects 80% of support tickets and drives 18% repeat purchases',
        tag: 'Automated Support'
      }
    ]
  },
  {
    id: 'uptimerobot',
    name: 'UptimeRobot',
    category: '24/7 Webpage, Server & API Monitoring + Incident Management',
    standalonePrice: 80,
    badge: 'Webpages, Servers & APIs Monitoring',
    tagline: 'Monitor, Alert, Analyze, and Communicate: Webpage, Server, and API monitoring with Incident Management',
    description: 'Easily monitor webpages, servers, and APIs to receive real-time insights including up and down status, total downtime percentage, average response time, and comprehensive weekly status. Add and showcase public status pages for servers, webpages, or APIs with separate dedicated links for each type to enhance visibility and communication. Streamline incident management by quickly adding, updating, and reporting incidents for servers, webpages, or APIs with dedicated links. Receive instant email alerts whenever downtime strikes, track the count of up and down statuses effortlessly, view and update user profiles seamlessly, and tackle issues effectively with detailed incident history and outage analysis reports.',
    coreFeatures: [
      'Comprehensive Digital Infrastructure: Real-time monitoring for Webpages, Servers, and APIs',
      'Real-Time Health Metrics: Up/down status count, total downtime %, average response time & weekly status',
      'Public Status Pages: Showcase public pages for servers, webpages, or APIs with separate links for each type',
      'Incident Management Suite: Quickly report, add, and update incident details with dedicated links',
      'Instant Email Downtime Alerts: Immediate notification when websites or servers encounter outages',
      'Incident History & Outage Analysis: Detailed post-mortem logs and historic uptime reports to diagnose root causes',
      'User Profile & Communication: Seamlessly view and update user profiles from dedicated section'
    ],
    businessImpact: 'Safeguards your digital infrastructure 24/7, eliminates blind downtime, builds customer trust through public pages, and expedites incident resolution.',
    routineTask: 'Morning 8:30 AM: Check up/down count across servers, webpages & APIs, review weekly downtime %, and verify public status page links.',
    color: 'from-green-500 to-emerald-600',
    accentBg: 'bg-green-500/10',
    accentBorder: 'border-green-500/30',
    brandColor: '#10B981',
    proTips: [
      {
        title: '60-Second Critical Checkout & API Endpoint Pings',
        strategy: 'Configure dedicated 60-second HTTP monitors on your `/checkout`, `/cart`, and payment webhook endpoints across multi-region nodes instead of only monitoring the root domain.',
        impact: 'Detects invisible payment gateway outages before losing thousands in sales',
        tag: 'Revenue Guardian'
      },
      {
        title: 'Branded Public Status Page for Enterprise Trust',
        strategy: 'Deploy a custom-domain status portal (e.g., status.yourbrand.com) linked in your footer and onboarding emails showcasing 99.9%+ availability and proactive maintenance notes.',
        impact: 'Cuts customer panic tickets by 75% during updates and builds enterprise credibility',
        tag: 'Brand Transparency'
      },
      {
        title: 'Immediate Webhook Escalation to Mobile & WhatsApp',
        strategy: 'Pipe incident alerts via webhook directly into your developer team’s private WhatsApp or Telegram channel for instant notification with server error codes.',
        impact: 'Reduces Mean Time to Resolution (MTTR) by 65%, solving issues in under 5 minutes',
        tag: 'Rapid Response'
      }
    ]
  },
  {
    id: 'bitly',
    name: 'Bitly',
    category: 'URL Shortener, Compressed Links, Bio-Links & Dynamic QR Codes',
    standalonePrice: 35,
    badge: 'Short URLs, Bio-Links & Dynamic QR Codes',
    tagline: 'Simplify URLs, build branded bio-links with password protection, and generate dynamic trackable QR codes',
    description: 'Shorten your URLs and simplify lengthy links without effort to ensure work convenience and efficiency. Optimize compressed links with link scheduling and expiration limits for precise targeting. Create personalized, adaptable bio link pages that symbolize your brand’s identity, complete with SEO settings, password protection, and warnings for sensitive content. Generate unique QR codes with custom colors, logos, and shapes for vCard, WIFI, Calendar, Location, and more. Create dynamic digital contact cards (vCard) and dynamic calendar files (.ics) that can be downloaded, shared, and tracked with advanced analytics.',
    coreFeatures: [
      'Simplify & Shorten URLs: Compress lengthy links for seamless efficiency and high click-through rates',
      'Compressed Links with Scheduling & Expiration: Set active windows and expiration limits for targeted campaigns',
      'Personalized Bio-Link Pages: SEO settings, password protection, sensitive content warnings, and branded themes',
      'Custom QR Codes: Unique colors, brand logos, and shapes for vCard, WIFI, Calendar, Location & dynamic files',
      'Dynamic Digital Contact Cards (vCard): Downloadable, trackable digital business cards with live updates',
      'Dynamic Calendar Files (.ics): Downloadable event calendar files with integrated tracking and reminder options',
      'Advanced File Download Links: Share trackable downloadable files with granular analytics'
    ],
    businessImpact: 'Boosts link engagement by 34%, delivers branded touchpoints across bio links and custom QR codes, and enables trackable calendar and contact downloads.',
    routineTask: 'Daily: Generate scheduled campaign links, update bio-link SEO metadata, and track dynamic QR/vCard download events.',
    color: 'from-orange-600 to-red-600',
    accentBg: 'bg-orange-600/10',
    accentBorder: 'border-orange-600/30',
    brandColor: '#EE6123',
    proTips: [
      {
        title: 'UTM-Tagged Compressed Links for Multi-Channel Attribution',
        strategy: 'Create branded short links (e.g., brand.link/yt-bundle) with pre-embedded UTM parameters for social posts, influencer partnerships, and YouTube descriptions to track real ROI.',
        impact: 'Pins down exact revenue per link and doubles high-performing ad budgets',
        tag: 'Attribution Mastery'
      },
      {
        title: 'Automated Link Scheduling & Flash Sale Expiration',
        strategy: 'Set expiration dates on promotional discount links so they automatically re-route to an email waitlist page the moment your sale window closes.',
        impact: 'Protects margin from expired vouchers and automatically collects waiting leads',
        tag: 'Campaign Control'
      },
      {
        title: 'Dynamic Trackable vCards & 1-Tap Calendar (.ics) QR Codes',
        strategy: 'Print dynamic QR codes on physical packaging, conference badges, and flyers that allow customers to download digital contact cards or 1-tap add webinar dates to their calendar.',
        impact: 'Converts offline foot traffic and unboxing moments into digital leads with 40%+ scans',
        tag: 'Offline-to-Online'
      }
    ]
  }
];

export const TOTAL_STANDALONE_PRICE = 650;
export const BUNDLE_PRICE = 40;
export const MONTHLY_SAVINGS = TOTAL_STANDALONE_PRICE - BUNDLE_PRICE; // $610
export const ANNUAL_SAVINGS = MONTHLY_SAVINGS * 12; // $7,320
export const DISCOUNT_PERCENT = Math.round((MONTHLY_SAVINGS / TOTAL_STANDALONE_PRICE) * 100); // 94%
