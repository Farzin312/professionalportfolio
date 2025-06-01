export interface Service {
  slug: string;
  title: string;
  desc: string;
  img: string;
}

export const services: Service[] = [
  {
    slug: 'seo',
    title: 'SEO Optimization',
    desc: 'Dominate local search results and boost product visibility with targeted on-page and off-page SEO tactics.',
    img: '/services/seo.jpg',
  },
  {
    slug: 'payment',
    title: 'Seamless Payments',
    desc: 'Securely integrate Stripe, PayPal, and more, delivering a frictionless checkout experience for customers.',
    img: '/services/payment.jpg',
  },
  {
    slug: 'finance',
    title: 'Automated Finance',
    desc: 'Streamline bookkeeping, invoicing, and expense tracking to save hours each month and reduce errors.',
    img: '/services/finance.jpg',
  },
  {
    slug: 'analytics',
    title: 'Analytics & Insights',
    desc: 'Implement GA4, custom dashboards, and event tracking to turn real user behavior into actionable data.',
    img: '/services/analytics.jpg',
  },
  {
    slug: 'ai-leads',
    title: 'AI Lead Capture',
    desc: 'Deploy chatbots and lead-qualification agents that feed qualified prospects directly into your CRM.',
    img: '/services/ai.jpg',
  },
  {
    slug: 'web',
    title: 'Website Creation',
    desc: 'Build fast, responsive, SEO-friendly websites tailored to your brand using Next.js and Tailwind.',
    img: '/services/web.jpg',
  },
  {
    slug: 'data',
    title: 'Data Solutions',
    desc: 'Design and manage scalable Postgres, MongoDB, or Firebase backends for reliable data storage.',
    img: '/services/db.jpg',
  },
];