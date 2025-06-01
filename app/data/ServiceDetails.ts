export interface ServiceDetail {
  slug: string
  title: string
  description: string
  oneTime: number
  monthly?: number
  benefits: string[]
  subscriptionBenefits?: string[]
  recommendedPairings: string[]
  imagePath: string
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: 'web',
    title: 'Website Creation',
    description:
      'Build a fast, responsive, SEO-friendly site that turns 2× more visitors into customers.',
    oneTime: 399,
    monthly: 49,
    benefits: [
      'Brand-matched design launched in 4 weeks',
      'Mobile-first pages load in under 2s',
      'SEO-ready structure drives +80% traffic growth',
    ],
    subscriptionBenefits: [
      'Monthly design & content refreshes',
      'Daily backups & security patches',
    ],
    recommendedPairings: ['seo', 'analytics'],
    imagePath: '/services/web.jpg',
  },
  {
    slug: 'seo',
    title: 'SEO Optimization',
    description:
      'Climb to page 1 for your top keywords—see organic visits surge by up to +120%.',
    oneTime: 249,
    monthly: 29,
    benefits: [
      'Tailored keyword strategy for +120% organic growth',
      'On-page tweaks boosting click-through rates by +30%',
      'Backlink outreach improving domain authority',
    ],
    subscriptionBenefits: [
      'Ongoing keyword & content updates',
      'Monthly performance reports with action items',
    ],
    recommendedPairings: ['web', 'analytics'],
    imagePath: '/services/seo.jpg',
  },
  {
    slug: 'payment',
    title: 'Seamless Payments',
    description:
      'Integrate Stripe & PayPal to cut checkout friction and reduce cart abandonment by 25%.',
    oneTime: 199,
    monthly: 19,
    benefits: [
      'Stripe & PayPal setup in 48 hours',
      '1-click checkout flows lifted conversion +20%',
      'PCI-compliant configuration',
    ],
    subscriptionBenefits: [
      'Quarterly gateway fee audits → save 5–10%',
      'Automated refund & dispute handling',
    ],
    recommendedPairings: ['web', 'analytics'],
    imagePath: '/services/payment.jpg',
  },
  {
    slug: 'finance',
    title: 'Automated Finance',
    description:
      'Slash manual bookkeeping time by 75% and cut errors by 90%.',
    oneTime: 299,
    monthly: 39,
    benefits: [
      'Custom invoicing & bookkeeping setup',
      'Automated expense capture & categorization',
      'Error-free monthly reports delivered on time',
    ],
    subscriptionBenefits: [
      'Monthly reconciliation & AI-driven insights',
      'Priority support for adjustments',
    ],
    recommendedPairings: ['analytics', 'data'],
    imagePath: '/services/finance.jpg',
  },
  {
    slug: 'analytics',
    title: 'Analytics & Insights',
    description:
      'Turn data into decisions—boost conversion by +30% with real-time dashboards.',
    oneTime: 299,
    monthly: 29,
    benefits: [
      'GA4 migration & setup in 72 hours',
      'Custom dashboards showing key metrics live',
      'Event tracking for every critical user action',
    ],
    subscriptionBenefits: [
      'Monthly data review & prioritized recommendations',
      'Alerts for traffic dips or spikes',
    ],
    recommendedPairings: ['web', 'seo'],
    imagePath: '/services/analytics.jpg',
  },
  {
    slug: 'ai-leads',
    title: 'AI Lead Capture',
    description:
      'Deploy smart chatbots that qualify leads automatically → +20% more qualified prospects.',
    oneTime: 349,
    monthly: 49,
    benefits: [
      'Custom AI chatbot live in 2 weeks',
      'Automated lead scoring → 20% higher conversion',
      'CRM integration & real-time syncing',
    ],
    subscriptionBenefits: [
      'Ongoing AI model refinement',
      'Weekly lead-quality reporting',
    ],
    recommendedPairings: ['analytics', 'data'],
    imagePath: '/services/ai.jpg',
  },
  {
    slug: 'data',
    title: 'Data Solutions',
    description:
      'Architect scalable backends that handle 10× growth with sub-200 ms query speeds.',
    oneTime: 299,
    monthly: 39,
    benefits: [
      'Custom Postgres/MongoDB/Firebase design',
      'Automated daily backups & high-availability',
      'Real-time queries under 200 ms',
    ],
    subscriptionBenefits: [
      'Monthly performance & index tuning',
      '24/7 monitoring with instant alerts',
    ],
    recommendedPairings: ['analytics', 'finance'],
    imagePath: '/services/db.jpg',
  },
  {
    slug: 'growth-plan',
    title: 'All-In-One Growth Plan',
    description:
      'Every service—Web, SEO, Payments, Finance, Analytics, AI Leads & Data—under one low rate. Scale faster with no setup fee.',
    oneTime: 0,
    monthly: 199,
    benefits: [
      'Launch website & SEO → +80% traffic',
      '1-click payments → –25% abandonment',
      'Automated finance → 75% time saved',
      'Dashboards → +30% conversion',
      'AI leads → +20% qualified prospects',
      'Scalable database → sub-200 ms performance',
    ],
    subscriptionBenefits: [
      'Monthly ROI report with growth metrics',
      'Priority implementation & support',
      'Dedicated account manager',
    ],
    recommendedPairings: [], 
    imagePath: '/services/growth.jpg',
  },
]
