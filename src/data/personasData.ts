export interface PersonaItem {
  id: string;
  title: string;
  category: string;
  filterKey: string;
  description: string;
  recommendedApps: string[];
  playbookTip: string;
  roiEstimate: string;
  iconName: string;
}

export const PERSONAS_LIST: PersonaItem[] = [
  {
    id: 'solo-entrepreneur',
    title: 'Solo Entrepreneurs',
    category: 'business',
    filterKey: 'solo-entrepreneur',
    description: 'Scale your one-person empire with automated marketing, eliminating expensive software sprawl and manual tasks.',
    recommendedApps: ['Mailchimp', 'Hostinger', 'Wati', 'Bitly'],
    playbookTip: 'Run automated lead acquisition via Bitly and Hostinger, nurture clients on Mailchimp, and close sales on WhatsApp with Wati.',
    roiEstimate: '$610/mo saved on single-operator overhead',
    iconName: 'UserCheck'
  },
  {
    id: 'sales-person',
    title: 'Sales Persons',
    category: 'business',
    filterKey: 'sales-person',
    description: 'Accelerate pipeline velocity, schedule meetings faster, and engage prospective buyers with instant multi-channel touchpoints.',
    recommendedApps: ['Wati', 'Bitly', 'Mailchimp', 'UptimeRobot'],
    playbookTip: 'Share dynamic vCards and trackable booking links via Bitly, follow up instantly on WhatsApp with Wati, and maintain 99%+ deliverability.',
    roiEstimate: '3.2x Faster deal close rate',
    iconName: 'Target'
  },
  {
    id: 'affiliate-marketers',
    title: 'Affiliate Marketers',
    category: 'marketer',
    filterKey: 'affiliate-marketers',
    description: 'Boost your campaigns and get more sales with a powerful suite for a big impact and cloaked link tracking.',
    recommendedApps: ['Bitly', 'Fomo', 'Mailchimp'],
    playbookTip: 'Create cloaked branded links with Bitly, embed Fomo live conversion proof on review landing pages, and capture leads into Mailchimp automated bonus delivery sequences.',
    roiEstimate: '+42% Affiliate conversion rate',
    iconName: 'Laptop'
  },
  {
    id: 'video-marketers',
    title: 'Video Marketers',
    category: 'creator',
    filterKey: 'video-marketers',
    description: 'Engage viewers effortlessly and turn video views into high-intent inbound leads with personalized conversational funnels.',
    recommendedApps: ['Wati', 'Bitly', 'Hostinger'],
    playbookTip: 'Place tracked Bitly links in video descriptions, host video sales funnels on Hostinger, and funnel viewers into interactive WhatsApp conversations via Wati.',
    roiEstimate: '3.8x Higher viewer-to-lead conversion',
    iconName: 'Video'
  },
  {
    id: 'ecom-store-owners',
    title: 'Ecom Store Owners',
    category: 'ecommerce',
    filterKey: 'ecom-store-owners',
    description: 'Increase sales easily using an automation suite designed for abandoned cart recovery, COD confirmation, and live social proof.',
    recommendedApps: ['Fomo', 'Wati', 'Mailchimp', 'UptimeRobot'],
    playbookTip: 'Trigger Shopify COD to Prepaid conversion webhooks and WhatsApp Catalog sales with Wati, broadcast social proof via Fomo, and protect checkout with UptimeRobot.',
    roiEstimate: '$3,400+ Recovered cart & COD converted revenue',
    iconName: 'ShoppingBag'
  },
  {
    id: 'content-creators',
    title: 'Content Creators',
    category: 'creator',
    filterKey: 'content-creators',
    description: 'Grow your influence and own your audience with versatile tools for newsletter publishing, branded bio-links, and personal hosting.',
    recommendedApps: ['Bitly', 'Mailchimp', 'Hostinger'],
    playbookTip: 'Host your personal portfolio and newsletter on Hostinger, build your fan email list on Mailchimp, and use Bitly Link-in-bio for Instagram & TikTok.',
    roiEstimate: '2.5x Audience list growth rate',
    iconName: 'PenTool'
  },
  {
    id: 'youtube-marketers',
    title: 'YouTube Marketers',
    category: 'creator',
    filterKey: 'youtube-marketers',
    description: 'Grab viewer attention and route bulk video traffic into high-converting bridge pages with real-time conversion tracking.',
    recommendedApps: ['Bitly', 'Hostinger', 'Fomo'],
    playbookTip: 'Route video viewers to lightning-fast bridge pages hosted on Hostinger, track UTM channel metrics in Bitly, and trigger Fomo real-time signups.',
    roiEstimate: '+55% Higher click-through velocity',
    iconName: 'Youtube'
  },
  {
    id: 'bloggers-and-podcasters',
    title: 'Bloggers and Podcasters',
    category: 'creator',
    filterKey: 'bloggers-and-podcasters',
    description: 'Expand your reach and captivate listeners with high-speed SSD hosting, automated episode email drops, and sponsor link tracking.',
    recommendedApps: ['Hostinger', 'Mailchimp', 'Bitly'],
    playbookTip: 'Host WordPress or Ghost on Hostinger with NVMe speeds, automate episode announcements through Mailchimp, and track listener sponsor links with Bitly.',
    roiEstimate: '99.9% Uptime with sub-second page loads',
    iconName: 'Mic'
  },
  {
    id: 'shopify-ebay-store-owners',
    title: 'Shopify & eBay Store Owners',
    category: 'ecommerce',
    filterKey: 'shopify-ebay-store-owners',
    description: 'Strengthen multi-channel eCommerce sales with zero-downtime store monitoring, instant dispatch notifications, and urgency widgets.',
    recommendedApps: ['UptimeRobot', 'Wati', 'Fomo', 'Mailchimp'],
    playbookTip: 'Monitor Shopify & eBay storefront availability 24/7, send order dispatch confirmations via official WhatsApp, and showcase social proof to slash bounce rates.',
    roiEstimate: '+28% Checkout completion rate',
    iconName: 'Store'
  },
  {
    id: 'top-business-executives',
    title: 'Top Business Executives',
    category: 'business',
    filterKey: 'top-business-executives',
    description: 'Propel company growth and consolidate fragmented SaaS costs into one unified $40/month infrastructure for the entire team.',
    recommendedApps: ['UptimeRobot', 'Hostinger', 'Wati', 'Bitly'],
    playbookTip: 'Consolidate multiple redundant vendor subscriptions into one predictable $40/mo invoice while guaranteeing mission-critical uptime and customer service.',
    roiEstimate: '94% Software budget reduction ($7,320/yr)',
    iconName: 'Briefcase'
  },
  {
    id: 'coaches-and-mentors',
    title: 'Coaches, Mentors & Marketing Gurus',
    category: 'business',
    filterKey: 'coaches-and-mentors',
    description: 'Build high-trust client connections, deliver VIP student care, and automate course enrolment funnels with ease.',
    recommendedApps: ['Wati', 'Mailchimp', 'Hostinger'],
    playbookTip: 'Host your cohort landing page on Hostinger, send weekly mindset broadcasts via Mailchimp, and conduct 1-on-1 VIP student customer care via Wati WhatsApp.',
    roiEstimate: '85% Client retention & onboarding speed',
    iconName: 'GraduationCap'
  },
  {
    id: 'student',
    title: 'Students & Learners',
    category: 'business',
    filterKey: 'student',
    description: 'Master production-grade digital marketing tools, build real-world client portfolios, and launch profitable freelance ventures on a student budget.',
    recommendedApps: ['Hostinger', 'Mailchimp', 'Bitly', 'Wati'],
    playbookTip: 'Host your resume and student agency portfolio on Hostinger, practice email marketing with Mailchimp custom SMTP, and manage freelance client campaigns.',
    roiEstimate: 'Enterprise skill mastery for just $1.33/day',
    iconName: 'BookOpen'
  }
];
