export type ServiceCategoryId =
  | 'core'
  | 'industry-seo'
  | 'specialized-marketing'
  | 'industry-web-design'
  | 'additional-web';

export interface ServiceDefinition {
  slug: string;
  name: string;
  excerpt: string;
  badges?: string[];
}

export interface ServiceCategory {
  id: ServiceCategoryId;
  title: string;
  description: string;
  highlight?: string;
  services: ServiceDefinition[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'core',
    title: 'Core Growth Services',
    description:
      'Full-funnel marketing, design, and development packages that drive measurable revenue for high-growth brands.',
    highlight: 'Most requested solutions for fast-moving teams.',
    services: [
      {
        slug: 'seo-services',
        name: 'SEO Services',
        excerpt: 'Enterprise-grade technical SEO, content, and authority building engineered to win competitive SERPs.',
        badges: ['Top Performer', 'ROI Focused'],
      },
      {
        slug: 'web-design-services',
        name: 'Web Design Services',
        excerpt: 'Conversion-obsessed UX/UI systems tailored to your brand and built to close more deals.',
      },
      {
        slug: 'ecommerce-development',
        name: 'E-commerce Development',
        excerpt: 'High-converting stores with blazing performance, omni-channel integrations, and scalable architecture.',
      },
      {
        slug: 'digital-marketing-services',
        name: 'Digital Marketing Services',
        excerpt: 'Integrated paid, organic, and lifecycle campaigns unified around a single source of truth.',
      },
      {
        slug: 'local-seo-services',
        name: 'Local SEO Services',
        excerpt: 'Dominate map packs and neighbourhood searches with hyperlocal landing pages and reputation playbooks.',
      },
      {
        slug: 'email-marketing-services',
        name: 'Email Marketing Services',
        excerpt: 'Lifecycle automation, deliverability optimisation, and CRO-backed campaigns that nurture pipeline.',
      },
      {
        slug: 'content-marketing-services',
        name: 'Content Marketing Services',
        excerpt: 'Thought leadership engines that turn strategic insights into leads, backlinks, and brand authority.',
      },
      {
        slug: 'wordpress-development',
        name: 'WordPress Development',
        excerpt: 'Headless-ready WordPress builds with bulletproof security, custom components, and easy publishing.',
      },
      {
        slug: 'shopify-development',
        name: 'Shopify Development',
        excerpt: 'Conversion-optimised Shopify Plus experiences with bespoke merchandising and retention flows.',
      },
      {
        slug: 'bigcommerce-development',
        name: 'BigCommerce Development',
        excerpt: 'Composable commerce builds that deliver complex catalogues, B2B pricing, and enterprise-grade stability.',
      },
      {
        slug: 'woocommerce-development',
        name: 'WooCommerce Development',
        excerpt: 'Scalable WooCommerce stores engineered for SEO, speed, and flexible product storytelling.',
      },
      {
        slug: 'custom-web-development',
        name: 'Custom Web Development',
        excerpt: 'Modern Jamstack and SaaS platforms tailored to your exact workflow, integrations, and KPIs.',
      },
      {
        slug: 'web-application-development',
        name: 'Web Application Development',
        excerpt: 'Full-stack applications with secure APIs, real-time features, and rigorous QA baked in.',
      },
      {
        slug: 'mobile-app-design',
        name: 'Mobile App Design',
        excerpt: 'Cross-platform product design grounded in user research, retention loops, and growth metrics.',
      },
      {
        slug: 'logo-branding-services',
        name: 'Logo & Branding Services',
        excerpt: 'Visual identities that translate across digital and physical touchpoints with conversion clarity.',
      },
      {
        slug: 'ppc-management',
        name: 'PPC Management',
        excerpt: 'High-efficiency paid acquisition with creative testing, SKAG architectures, and real-time dashboards.',
      },
      {
        slug: 'social-media-marketing',
        name: 'Social Media Marketing',
        excerpt: 'Strategic community growth, influencer amplification, and KPI-driven content calendars.',
      },
      {
        slug: 'video-production-services',
        name: 'Video Production Services',
        excerpt: 'Story-driven video assets built for ads, landing pages, and retention funnels.',
      },
      {
        slug: 'ecommerce-seo',
        name: 'E-commerce SEO',
        excerpt: 'Product schema, collection architecture, and copy frameworks that scale organic revenue.',
      },
      {
        slug: 'enterprise-seo',
        name: 'Enterprise SEO',
        excerpt: 'Global SEO programs managing thousands of URLs, complex taxonomy, and stakeholder alignment.',
      },
    ],
  },
  {
    id: 'industry-seo',
    title: 'Industry SEO Playbooks',
    description:
      'Battle-tested page frameworks, keyword universes, and conversion paths tailored to the realities of each vertical.',
    services: [
      { slug: 'healthcare-seo', name: 'Healthcare SEO', excerpt: 'HIPAA-aware strategies for hospitals, clinics, and medical SaaS.' },
      { slug: 'fashion-seo', name: 'Fashion SEO', excerpt: 'Trend-responsive SEO for apparel brands competing in fast-moving SERPs.' },
      { slug: 'lawyer-seo', name: 'Lawyer SEO', excerpt: 'Geo-targeted content and reputation systems that win high-value legal leads.' },
      { slug: 'dental-seo', name: 'Dental SEO', excerpt: 'Neighbourhood optimisation, review velocity, and treatment funnel tracking.' },
      { slug: 'saas-seo', name: 'SaaS SEO', excerpt: 'Feature-to-problem mapping, intent hubs, and product-led content systems.' },
      { slug: 'b2b-seo', name: 'B2B SEO', excerpt: 'Long-cycle lead nurturing with ABM-aligned content and pipeline attribution.' },
      { slug: 'real-estate-seo', name: 'Real Estate SEO', excerpt: 'IDX-friendly architecture and local authority tactics for brokers and platforms.' },
      { slug: 'automotive-seo', name: 'Automotive SEO', excerpt: 'Inventory indexing, hyperlocal targeting, and showroom-to-web analytics.' },
      { slug: 'fitness-seo', name: 'Fitness SEO', excerpt: 'Studio and franchise SEO with retention-focused offers and community loops.' },
      { slug: 'beauty-seo', name: 'Beauty SEO', excerpt: 'Skincare and beauty funnels blending education, UGC, and conversion copy.' },
      { slug: 'cannabis-seo', name: 'Cannabis & CBD SEO', excerpt: 'Compliance-conscious organic strategies for dispensaries and growers.' },
    ],
  },
  {
    id: 'specialized-marketing',
    title: 'Specialised Acquisition',
    description:
      'Channel-specific programs that compress CAC, accelerate experimentation, and add fuel to existing funnels.',
    services: [
      { slug: 'facebook-advertising', name: 'Facebook Advertising', excerpt: 'Full-funnel paid social with creative testing and incrementality modelling.' },
      { slug: 'instagram-marketing', name: 'Instagram Marketing', excerpt: 'Creator partnerships, shoppable content, and retention-focused storytelling.' },
      { slug: 'amazon-marketing', name: 'Amazon Marketing', excerpt: 'Listing optimisation, DSP campaigns, and review velocity acceleration.' },
      { slug: 'reputation-management', name: 'Reputation Management', excerpt: 'Always-on monitoring, review generation, and crisis response workflows.' },
      { slug: 'conversion-rate-optimization', name: 'Conversion Rate Optimisation', excerpt: 'A/B testing, session analysis, and growth loops that lift lifetime value.' },
    ],
  },
  {
    id: 'industry-web-design',
    title: 'Industry-Specific Web Design',
    description:
      'Tailored site architectures and conversion flows designed for each industry’s buyer journey and compliance needs.',
    services: [
      { slug: 'fashion-website-design', name: 'Fashion Website Design', excerpt: 'Immersive lookbooks, merchandising UX, and drop-to-checkout journeys.' },
      { slug: 'medical-website-design', name: 'Medical Website Design', excerpt: 'ADA-compliant design systems with patient portals and service finders.' },
      { slug: 'lawyer-website-design', name: 'Lawyer Website Design', excerpt: 'Authority-building UX with intake automation and case storytelling.' },
      { slug: 'restaurant-website-design', name: 'Restaurant Website Design', excerpt: 'Mobile-first menus, reservation flows, and loyalty program integration.' },
      { slug: 'real-estate-web-design', name: 'Real Estate Web Design', excerpt: 'MLS-integrated experiences with property filters and lead-capture CRM hooks.' },
    ],
  },
  {
    id: 'additional-web',
    title: 'Advanced Web Engineering',
    description:
      'Technical capabilities that keep your digital ecosystem fast, secure, and ready for the next stage of growth.',
    services: [
      { slug: 'website-maintenance', name: 'Website Maintenance', excerpt: 'Proactive monitoring, updates, and issue remediation with SLA-backed support.' },
      { slug: 'website-redesign', name: 'Website Redesign', excerpt: 'Data-driven redesigns that modernise UX while preserving SEO equity.' },
      { slug: 'landing-page-design', name: 'Landing Page Design', excerpt: 'High-velocity campaign pages built with CRO insights and modular components.' },
      { slug: 'ui-ux-design', name: 'UI/UX Design', excerpt: 'Research-led product design sprints delivering wireframes, prototypes, and design systems.' },
      { slug: 'api-development', name: 'API Development', excerpt: 'Secure, well-documented APIs that connect your systems and unlock new revenue streams.' },
      { slug: 'database-design', name: 'Database Design', excerpt: 'Scalable data architectures optimised for analytics, compliance, and speed.' },
      { slug: 'cloud-solutions', name: 'Cloud Solutions', excerpt: 'Cloud migration, DevOps automation, and cost-optimised infrastructure management.' },
      { slug: 'web-security-services', name: 'Web Security Services', excerpt: 'Pen testing, threat monitoring, and compliance support to safeguard your stack.' },
      { slug: 'performance-optimization', name: 'Performance Optimisation', excerpt: 'Core Web Vitals tuning, caching strategies, and edge delivery for sub-second loads.' },
    ],
  },
];

export const getServiceBySlug = (slug: string): ServiceDefinition | undefined =>
  serviceCategories.flatMap((category) => category.services).find((service) => service.slug === slug);
