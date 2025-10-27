export interface Landmark {
  name: string;
  address: string;
  url: string;
}

export interface BusinessDistrict {
  name: string;
  description: string;
  link: string;
}

export interface PermitInfo {
  cityName: string;
  phoneNumber: string;
  requirements: string;
}

export interface ServiceContent {
  service: string;
  slug: string;
  description: string;
  overview: string;
  benefits: string[];
  useCases: string[];
  process: string[];
  pricing: string;
  whyChooseUs: string;
  faq: Array<{
    question: string;
    answer: string;
  }>;
}

export interface ServiceCityData {
  service: string;
  serviceSlug: string;
  cityName: string;
  citySlug: string;
  state: string;
  phoneNumber: string;
  latitude: string;
  longitude: string;
  heroImage: string;
  landmarks: Landmark[];
  businessDistricts: BusinessDistrict[];
  content: ServiceContent;
}

export interface WebDesignService {
  service: string;
  description: string;
  useCases: string[];
}

export interface ContentSections {
  overview: string;
  webDesignServices: WebDesignService[];
  whyChooseUs: string;
  localInfo: string;
  serviceAreas: string;
}

export interface CityData {
  cityName: string;
  citySlug: string;
  state: string;
  phoneNumber: string;
  latitude: string;
  longitude: string;
  heroImage: string;
  landmarks: Landmark[];
  businessDistricts: BusinessDistrict[];
  permitInfo: PermitInfo;
  contentSections: ContentSections;
}

export const cityData: Record<string, CityData> = {
  'salt-lake-city': {
    cityName: 'Salt Lake City',
    citySlug: 'salt-lake-city',
    state: 'Utah',
    phoneNumber: '801-918-6000',
    latitude: '40.7608',
    longitude: '-111.8910',
    heroImage: '/images/salt-lake-city-hero.jpg',
    landmarks: [
      {
        name: 'Temple Square',
        address: '50 N Temple, Salt Lake City, UT 84150',
        url: 'https://www.templesquare.com/',
      },
      {
        name: 'Utah State Capitol',
        address: '350 N State St, Salt Lake City, UT 84103',
        url: 'https://utahstatecapitol.utah.gov/',
      },
      {
        name: 'Salt Lake City Public Library',
        address: '210 E 400 S, Salt Lake City, UT 84111',
        url: 'https://www.slcpl.org/',
      },
    ],
    businessDistricts: [
      {
        name: 'Downtown Salt Lake City',
        description: 'The heart of Utah\'s business district with modern office buildings and tech companies.',
        link: '/web-design-services',
      },
      {
        name: 'Sugar House',
        description: 'Trendy neighborhood with local businesses and startups.',
        link: '/seo-services',
      },
      {
        name: 'The Gateway',
        description: 'Mixed-use development with retail and office spaces.',
        link: '/ecommerce-development',
      },
    ],
    permitInfo: {
      cityName: 'Salt Lake City',
      phoneNumber: '801-535-6000',
      requirements: 'Contact Salt Lake City for business permit requirements and applications.',
    },
    contentSections: {
      overview: 'DeepThink Studio provides comprehensive web development and digital marketing services throughout Salt Lake City, Utah. Our full-service approach includes custom website design, e-commerce development, SEO optimization, and digital marketing strategies that help local businesses thrive in the digital landscape. With years of experience serving Salt Lake City businesses, we understand the unique needs of the local market and deliver end-to-end solutions that drive real growth.',
      webDesignServices: [
        {
          service: 'Custom Web Development',
          description: 'Complete website development from design to deployment for Salt Lake City businesses.',
          useCases: ['Business websites', 'Corporate sites', 'Portfolio websites', 'Service-based businesses', 'Landing pages'],
        },
        {
          service: 'E-commerce Development',
          description: 'Full-service online store development with payment processing and inventory management.',
          useCases: ['Online retail stores', 'B2B e-commerce', 'Subscription services', 'Digital product sales', 'Marketplace integration'],
        },
        {
          service: 'SEO & Digital Marketing',
          description: 'Comprehensive SEO strategies and digital marketing campaigns to increase online visibility.',
          useCases: ['Local SEO optimization', 'Google Ads management', 'Social media marketing', 'Content marketing', 'Email campaigns'],
        },
        {
          service: 'Web Applications',
          description: 'Custom web applications and software solutions tailored to your business needs.',
          useCases: ['CRM systems', 'Customer portals', 'Booking systems', 'Inventory management', 'Custom dashboards'],
        },
      ],
      whyChooseUs: 'When you choose DeepThink Studio for your Salt Lake City web development needs, you get a full-service digital agency that handles everything from initial concept to ongoing maintenance. We\'ve helped dozens of Salt Lake City businesses establish their online presence and grow their digital footprint. Our local expertise, combined with cutting-edge web technologies and proven marketing strategies, ensures your website not only looks great but also drives real business results.',
      localInfo: 'Salt Lake City is Utah\'s capital and largest city, home to over 200,000 residents and a thriving business community. The city is known for its tech industry, outdoor recreation opportunities, and vibrant downtown area. Major employers include tech companies, healthcare systems, and financial institutions, making it an ideal location for businesses looking to establish a strong online presence and digital marketing presence.',
      serviceAreas: 'We provide comprehensive web development and digital marketing services throughout Salt Lake City and surrounding areas including West Valley City, Murray, Sandy, West Jordan, and South Jordan. Our team is familiar with the local business landscape and can help you reach customers across the entire Salt Lake Valley with targeted digital strategies.',
    },
  },
  'denver': {
    cityName: 'Denver',
    citySlug: 'denver',
    state: 'Colorado',
    phoneNumber: '801-918-6000',
    latitude: '39.7392',
    longitude: '-104.9903',
    heroImage: '/images/denver-hero.jpg',
    landmarks: [
      {
        name: 'Denver Art Museum',
        address: '100 W 14th Ave Pkwy, Denver, CO 80204',
        url: 'https://www.denverartmuseum.org/',
      },
      {
        name: 'Red Rocks Amphitheatre',
        address: '18300 W Alameda Pkwy, Morrison, CO 80465',
        url: 'https://www.redrocksonline.com/',
      },
      {
        name: 'Denver Botanic Gardens',
        address: '1007 York St, Denver, CO 80206',
        url: 'https://www.botanicgardens.org/',
      },
    ],
    businessDistricts: [
      {
        name: 'Downtown Denver',
        description: 'The central business district with major corporations and financial institutions.',
        link: '/web-design-services',
      },
      {
        name: 'RiNo (River North)',
        description: 'Creative district with art galleries, breweries, and tech startups.',
        link: '/seo-services',
      },
      {
        name: 'Cherry Creek',
        description: 'Upscale shopping and business district with luxury retailers.',
        link: '/ecommerce-development',
      },
    ],
    permitInfo: {
      cityName: 'Denver',
      phoneNumber: '720-913-1311',
      requirements: 'Contact Denver for business permit requirements and applications.',
    },
    contentSections: {
      overview: 'DeepThink Studio delivers comprehensive web development and digital marketing services to Denver businesses. Our full-service approach includes responsive website design, custom web applications, e-commerce development, SEO optimization, and digital marketing strategies. We understand the competitive Denver market and create digital solutions that help businesses stand out and drive measurable results.',
      webDesignServices: [
        {
          service: 'Responsive Web Development',
          description: 'Mobile-first website development that works perfectly across all devices and platforms.',
          useCases: ['Mobile-optimized sites', 'Tablet-friendly design', 'Cross-browser compatibility', 'Fast loading speeds', 'Progressive web apps'],
        },
        {
          service: 'WordPress & CMS Development',
          description: 'Custom WordPress websites and content management systems with advanced functionality.',
          useCases: ['Content management systems', 'Blog integration', 'Plugin customization', 'Theme development', 'Multi-site networks'],
        },
        {
          service: 'Digital Marketing & SEO',
          description: 'Comprehensive digital marketing strategies including SEO, PPC, and social media marketing.',
          useCases: ['Local SEO optimization', 'Google Ads campaigns', 'Social media management', 'Content marketing', 'Email marketing'],
        },
        {
          service: 'E-commerce Solutions',
          description: 'Complete online store development with payment processing and inventory management.',
          useCases: ['Shopify stores', 'WooCommerce sites', 'Custom e-commerce', 'Payment integration', 'Order management'],
        },
      ],
      whyChooseUs: 'DeepThink Studio stands out in Denver\'s competitive web development market through our commitment to local businesses and proven results. We\'ve helped Denver companies across various industries increase their online visibility and drive more qualified leads. Our team combines technical expertise with local market knowledge to deliver websites and digital marketing campaigns that not only look professional but also convert visitors into customers.',
      localInfo: 'Denver, Colorado\'s capital and largest city, is a major business hub in the Rocky Mountain region. With a population of over 715,000 and a metro area exceeding 2.9 million, Denver offers a diverse business environment including tech startups, outdoor recreation companies, energy sector businesses, and financial services. The city\'s growing tech scene and business-friendly environment make it an ideal location for comprehensive web development and digital marketing services.',
      serviceAreas: 'Our web development and digital marketing services extend throughout Denver and the surrounding metro area, including Aurora, Lakewood, Thornton, Westminster, and Arvada. We understand the unique characteristics of each Denver neighborhood and can help your business reach customers across the entire Front Range region with targeted digital strategies.',
    },
  },
  'phoenix': {
    cityName: 'Phoenix',
    citySlug: 'phoenix',
    state: 'Arizona',
    phoneNumber: '801-918-6000',
    latitude: '33.4484',
    longitude: '-112.0740',
    heroImage: '/images/phoenix-hero.jpg',
    landmarks: [
      {
        name: 'Desert Botanical Garden',
        address: '1201 N Galvin Pkwy, Phoenix, AZ 85008',
        url: 'https://www.dbg.org/',
      },
      {
        name: 'Heard Museum',
        address: '2301 N Central Ave, Phoenix, AZ 85004',
        url: 'https://heard.org/',
      },
      {
        name: 'Phoenix Art Museum',
        address: '1625 N Central Ave, Phoenix, AZ 85004',
        url: 'https://phxart.org/',
      },
    ],
    businessDistricts: [
      {
        name: 'Downtown Phoenix',
        description: 'Central business district with major corporations and government offices.',
        link: '/web-design-services',
      },
      {
        name: 'Scottsdale',
        description: 'Upscale retail and business district with luxury retailers.',
        link: '/seo-services',
      },
      {
        name: 'Tempe',
        description: 'University and tech hub with startups and innovation centers.',
        link: '/ecommerce-development',
      },
    ],
    permitInfo: {
      cityName: 'Phoenix',
      phoneNumber: '602-262-6011',
      requirements: 'Contact Phoenix for business permit requirements and applications.',
    },
    contentSections: {
      overview: 'DeepThink Studio provides comprehensive web development and digital marketing services throughout Phoenix, Arizona. Our full-service approach includes custom website design, e-commerce development, SEO optimization, and digital marketing strategies tailored to the unique needs of Phoenix businesses. We understand the competitive Phoenix market and create digital solutions that help businesses thrive in the Valley of the Sun.',
      webDesignServices: [
        {
          service: 'Custom Website Development',
          description: 'Professional website development designed specifically for Phoenix businesses and their target audiences.',
          useCases: ['Business websites', 'Corporate sites', 'Service-based businesses', 'Healthcare websites', 'Real estate sites'],
        },
        {
          service: 'E-commerce Development',
          description: 'Complete online store development with payment processing and inventory management for Phoenix retailers.',
          useCases: ['Online retail stores', 'B2B e-commerce', 'Subscription services', 'Digital products', 'Marketplace integration'],
        },
        {
          service: 'SEO & Local Marketing',
          description: 'Comprehensive SEO strategies and local marketing campaigns to dominate Phoenix search results.',
          useCases: ['Local SEO optimization', 'Google My Business', 'Phoenix keyword targeting', 'Local citations', 'Review management'],
        },
        {
          service: 'Digital Marketing',
          description: 'Full-service digital marketing including PPC, social media, and content marketing.',
          useCases: ['Google Ads campaigns', 'Facebook advertising', 'Social media management', 'Content marketing', 'Email marketing'],
        },
      ],
      whyChooseUs: 'When you choose DeepThink Studio for your Phoenix web development needs, you get a full-service digital agency that understands the local market. We\'ve helped numerous Phoenix businesses establish their online presence and grow their digital footprint. Our local expertise, combined with cutting-edge web technologies and proven marketing strategies, ensures your website drives real business results in the competitive Phoenix market.',
      localInfo: 'Phoenix is Arizona\'s capital and largest city, home to over 1.6 million residents and a rapidly growing business community. The city is known for its diverse economy spanning technology, healthcare, manufacturing, and tourism. Major employers include tech companies, healthcare systems, and financial institutions, making it an ideal location for businesses looking to establish a strong online presence and digital marketing presence.',
      serviceAreas: 'We provide comprehensive web development and digital marketing services throughout Phoenix and surrounding areas including Scottsdale, Tempe, Mesa, Chandler, and Glendale. Our team is familiar with the local business landscape and can help you reach customers across the entire Phoenix metropolitan area with targeted digital strategies.',
    },
  },
};

export const getCityData = (citySlug: string): CityData | null => {
  return cityData[citySlug] || null;
};

export const getAllCities = (): string[] => {
  return Object.keys(cityData);
};

// Core services configuration
export const coreServices = {
  'search-engine-optimization': {
    name: 'Search Engine Optimization',
    slug: 'seo',
    shortName: 'SEO'
  },
  'web-design-development': {
    name: 'Web Design & Development',
    slug: 'web-design',
    shortName: 'Web Design'
  },
  'ppc-marketing': {
    name: 'PPC Marketing',
    slug: 'ppc',
    shortName: 'PPC'
  },
  'email-marketing': {
    name: 'Email Marketing',
    slug: 'email-marketing',
    shortName: 'Email Marketing'
  },
  'social-media-marketing': {
    name: 'Social Media Marketing',
    slug: 'social-media',
    shortName: 'Social Media'
  }
};

// Service-specific content templates
export const serviceContentTemplates: Record<string, Omit<ServiceContent, 'service' | 'slug'>> = {
  'search-engine-optimization': {
    description: 'Professional SEO services to improve your search rankings and drive organic traffic',
    overview: 'Our comprehensive SEO services help businesses improve their search engine rankings, increase organic traffic, and drive qualified leads. We use proven strategies and cutting-edge techniques to optimize your website for search engines.',
    benefits: [
      'Higher search engine rankings',
      'Increased organic traffic',
      'Better local visibility',
      'Improved user experience',
      'Long-term sustainable growth'
    ],
    useCases: [
      'Local business optimization',
      'E-commerce SEO',
      'Technical SEO audits',
      'Content marketing',
      'Link building campaigns',
      'Google My Business optimization'
    ],
    process: [
      'Comprehensive SEO audit',
      'Keyword research and strategy',
      'On-page optimization',
      'Technical SEO improvements',
      'Content creation and optimization',
      'Link building and outreach',
      'Performance monitoring and reporting'
    ],
    pricing: 'SEO packages start at $1,500/month with custom solutions available for enterprise clients.',
    whyChooseUs: 'Our SEO team combines technical expertise with local market knowledge to deliver measurable results. We focus on sustainable, white-hat SEO strategies that build long-term value for your business.',
    faq: [
      {
        question: 'How long does it take to see SEO results?',
        answer: 'SEO results typically begin to show within 3-6 months, with significant improvements visible after 6-12 months. Local SEO results can appear faster, often within 1-3 months.'
      },
      {
        question: 'What makes local SEO different?',
        answer: 'Local SEO focuses on optimizing your business for location-based searches, Google My Business, and local directories. It helps customers find your business when searching for services in your area.'
      },
      {
        question: 'Do you provide monthly reporting?',
        answer: 'Yes, we provide detailed monthly reports showing keyword rankings, traffic growth, conversion improvements, and other key performance indicators.'
      }
    ]
  },
  'web-design-development': {
    description: 'Custom website design and development services for modern, responsive websites',
    overview: 'Our web design and development services create stunning, functional websites that convert visitors into customers. We specialize in responsive design, user experience optimization, and modern web technologies.',
    benefits: [
      'Professional, modern design',
      'Mobile-responsive layouts',
      'Fast loading speeds',
      'SEO-optimized structure',
      'User-friendly navigation'
    ],
    useCases: [
      'Business websites',
      'E-commerce stores',
      'Portfolio sites',
      'Corporate websites',
      'Landing pages',
      'Web applications'
    ],
    process: [
      'Discovery and planning',
      'Wireframing and design',
      'Development and coding',
      'Content integration',
      'Testing and optimization',
      'Launch and deployment',
      'Ongoing maintenance'
    ],
    pricing: 'Website projects start at $3,500 with custom pricing based on complexity and requirements.',
    whyChooseUs: 'Our design team creates websites that not only look great but also perform exceptionally well. We focus on user experience, conversion optimization, and technical excellence.',
    faq: [
      {
        question: 'How long does it take to build a website?',
        answer: 'Website development timelines vary based on complexity. Simple business websites take 4-6 weeks, while complex e-commerce sites may take 8-12 weeks.'
      },
      {
        question: 'Do you provide ongoing maintenance?',
        answer: 'Yes, we offer comprehensive maintenance packages including updates, security monitoring, backups, and performance optimization.'
      },
      {
        question: 'Can you redesign my existing website?',
        answer: 'Absolutely! We specialize in website redesigns that improve functionality, user experience, and conversion rates while maintaining your brand identity.'
      }
    ]
  },
  'ppc-marketing': {
    description: 'Pay-per-click advertising campaigns to drive immediate traffic and conversions',
    overview: 'Our PPC marketing services create targeted advertising campaigns that drive qualified traffic and generate immediate results. We manage Google Ads, Facebook Ads, and other paid advertising platforms.',
    benefits: [
      'Immediate traffic and visibility',
      'Highly targeted audience reach',
      'Measurable ROI and results',
      'Flexible budget control',
      'Quick campaign adjustments'
    ],
    useCases: [
      'Google Ads campaigns',
      'Facebook and Instagram ads',
      'LinkedIn advertising',
      'Retargeting campaigns',
      'Local PPC advertising',
      'E-commerce advertising'
    ],
    process: [
      'Campaign strategy development',
      'Keyword research and selection',
      'Ad copy creation and testing',
      'Landing page optimization',
      'Campaign launch and monitoring',
      'Performance analysis and optimization',
      'Ongoing management and scaling'
    ],
    pricing: 'PPC management starts at $1,000/month plus ad spend, with transparent reporting and optimization.',
    whyChooseUs: 'Our PPC specialists have years of experience managing high-performing campaigns across multiple platforms. We focus on maximizing ROI and driving qualified leads.',
    faq: [
      {
        question: 'How quickly can I see PPC results?',
        answer: 'PPC campaigns can start driving traffic within 24-48 hours of launch, with optimized campaigns showing improved performance within the first week.'
      },
      {
        question: 'What platforms do you manage?',
        answer: 'We manage Google Ads, Facebook Ads, Instagram Ads, LinkedIn Ads, and other major advertising platforms based on your target audience.'
      },
      {
        question: 'How do you measure PPC success?',
        answer: 'We track key metrics including cost per click, conversion rate, cost per acquisition, return on ad spend, and overall campaign ROI.'
      }
    ]
  },
  'email-marketing': {
    description: 'Strategic email marketing campaigns to nurture leads and retain customers',
    overview: 'Our email marketing services help you build relationships with customers, nurture leads, and drive sales through targeted email campaigns. We create engaging content and automated workflows.',
    benefits: [
      'High ROI marketing channel',
      'Direct customer communication',
      'Automated lead nurturing',
      'Personalized messaging',
      'Measurable campaign performance'
    ],
    useCases: [
      'Newsletter campaigns',
      'Lead nurturing sequences',
      'Customer retention programs',
      'Promotional campaigns',
      'Abandoned cart recovery',
      'Welcome email series'
    ],
    process: [
      'Email strategy development',
      'List building and segmentation',
      'Template design and creation',
      'Content development',
      'Automation setup',
      'Campaign testing and launch',
      'Performance monitoring and optimization'
    ],
    pricing: 'Email marketing management starts at $800/month with custom automation and design services available.',
    whyChooseUs: 'Our email marketing experts create compelling campaigns that engage your audience and drive conversions. We focus on deliverability, engagement, and measurable results.',
    faq: [
      {
        question: 'How do you build email lists?',
        answer: 'We use ethical list-building strategies including opt-in forms, lead magnets, and content upgrades to grow your subscriber base with engaged, qualified leads.'
      },
      {
        question: 'What email platforms do you use?',
        answer: 'We work with major email marketing platforms including Mailchimp, Constant Contact, Klaviyo, and custom solutions based on your needs.'
      },
      {
        question: 'How do you measure email marketing success?',
        answer: 'We track open rates, click-through rates, conversion rates, unsubscribe rates, and overall ROI to measure campaign performance.'
      }
    ]
  },
  'social-media-marketing': {
    description: 'Strategic social media management to build brand awareness and engage audiences',
    overview: 'Our social media marketing services help you build a strong online presence, engage with your audience, and drive traffic to your website. We create compelling content and manage your social media presence.',
    benefits: [
      'Increased brand awareness',
      'Direct audience engagement',
      'Website traffic generation',
      'Customer relationship building',
      'Cost-effective marketing'
    ],
    useCases: [
      'Content creation and posting',
      'Community management',
      'Social media advertising',
      'Influencer partnerships',
      'Social media strategy',
      'Crisis management'
    ],
    process: [
      'Social media audit and strategy',
      'Content calendar development',
      'Content creation and curation',
      'Community management',
      'Paid social advertising',
      'Performance monitoring',
      'Strategy optimization'
    ],
    pricing: 'Social media management starts at $1,200/month with custom content creation and advertising services available.',
    whyChooseUs: 'Our social media team creates engaging content that resonates with your audience and drives meaningful engagement. We focus on building authentic relationships and brand loyalty.',
    faq: [
      {
        question: 'Which social media platforms do you manage?',
        answer: 'We manage Facebook, Instagram, LinkedIn, Twitter, TikTok, and other platforms based on your target audience and business goals.'
      },
      {
        question: 'How often do you post content?',
        answer: 'Posting frequency varies by platform and strategy, typically ranging from daily posts on Instagram to weekly posts on LinkedIn, optimized for each platform\'s algorithm.'
      },
      {
        question: 'Do you create custom graphics and videos?',
        answer: 'Yes, our creative team produces custom graphics, videos, and other visual content tailored to your brand and social media strategy.'
      }
    ]
  }
};

// Generate service-city combinations
export const generateServiceCityData = (): Record<string, ServiceCityData> => {
  const serviceCityData: Record<string, ServiceCityData> = {};
  
  Object.keys(coreServices).forEach(serviceKey => {
    const service = coreServices[serviceKey as keyof typeof coreServices];
    const serviceTemplate = serviceContentTemplates[serviceKey];
    
    Object.keys(cityData).forEach(cityKey => {
      const city = cityData[cityKey];
      const serviceCityKey = `${service.slug}-${city.citySlug}`;
      
      serviceCityData[serviceCityKey] = {
        service: service.name,
        serviceSlug: service.slug,
        cityName: city.cityName,
        citySlug: city.citySlug,
        state: city.state,
        phoneNumber: city.phoneNumber,
        latitude: city.latitude,
        longitude: city.longitude,
        heroImage: city.heroImage,
        landmarks: city.landmarks,
        businessDistricts: city.businessDistricts,
        content: {
          service: service.name,
          slug: service.slug,
          ...serviceTemplate
        }
      };
    });
  });
  
  return serviceCityData;
};

export const serviceCityData = generateServiceCityData();

export const getServiceCityData = (serviceSlug: string, citySlug: string): ServiceCityData | null => {
  const key = `${serviceSlug}-${citySlug}`;
  return serviceCityData[key] || null;
};

export const getAllServiceCityCombinations = (): string[] => {
  return Object.keys(serviceCityData);
};
