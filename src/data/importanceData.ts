export interface ImportancePillar {
  id: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  softwareKey: string;
  softwareNames: string[];
  metrics: string;
  iconType: 'traffic' | 'engagement' | 'retargeting' | 'reliability';
}

export const IMPORTANCE_PILLARS: ImportancePillar[] = [
  {
    id: 'traffic',
    title: 'Traffic Generation',
    tagline: 'Get your brand noticed by the right prospects',
    problem: 'Attracting visitors to your website is a constant struggle. Without consistent traffic, your online presence remains unnoticed.',
    solution: 'Use Bitly branded short links and high-converting QR codes to distribute clickable campaigns across social channels, paired with Hostinger ultra-fast NVMe hosting that maximizes Google SEO indexing scores.',
    softwareKey: 'Bitly + Hostinger',
    softwareNames: ['Bitly', 'Hostinger'],
    metrics: '+215% Higher organic & referral click volume',
    iconType: 'traffic'
  },
  {
    id: 'engagement',
    title: 'Engagement',
    tagline: 'Keep visitors glued and eliminate buyer hesitation',
    problem: 'Once users land on your website, keeping them engaged and building trust can be difficult. Social proof is essential to establish credibility.',
    solution: 'Fomo live visitor counters and recent buyer notifications trigger immediate trust and fear-of-missing-out, while Wati live WhatsApp chat widgets invite instant questions before users bounce.',
    softwareKey: 'Fomo + Wati',
    softwareNames: ['Fomo', 'Wati'],
    metrics: '+34% Boost in on-site dwell time & checkout conversion',
    iconType: 'engagement'
  },
  {
    id: 'retargeting',
    title: 'Retargeting',
    tagline: 'Re-engage warm leads without burning ad budgets',
    problem: "Reaching out to potential customers who've shown interest in your content or offerings can be challenging. Finding a cost-effective way to reconnect is key.",
    solution: 'Mailchimp automated email lifecycle triggers and Wati broadcast WhatsApp alerts reconnect with cart abandoners and past purchasers directly on their personal mobile devices.',
    softwareKey: 'Mailchimp + Wati',
    softwareNames: ['Mailchimp', 'Wati'],
    metrics: '98% WhatsApp open rate & 4.2x higher re-order rate',
    iconType: 'retargeting'
  },
  {
    id: 'reliability',
    title: 'Website Reliability',
    tagline: 'Protect every dollar of ad spend from costly downtime',
    problem: 'Downtime can be disastrous for a website. Frequent monitoring is vital to maintain a seamless user experience.',
    solution: 'UptimeRobot checks your domains, SSL certs, and checkout endpoints every 60 seconds with instant emergency notifications, while Hostinger cloud architecture provides a resilient 99.9% uptime backbone.',
    softwareKey: 'UptimeRobot + Hostinger',
    softwareNames: ['UptimeRobot', 'Hostinger'],
    metrics: '99.98% Zero-loss verified uptime & instant SMS outage alerts',
    iconType: 'reliability'
  }
];
