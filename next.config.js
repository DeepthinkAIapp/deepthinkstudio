const servicePages = require('./app/lib/service-pages.json');
const blogPages = require('./app/lib/blog-pages.json');

const serviceSlugs = servicePages.map((entry) => entry.slug);
const blogSlugs = blogPages.map((entry) => entry.slug);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async rewrites() {
const serviceRewrites = serviceSlugs.flatMap((slug) => [
  {
    source: `/${slug}`,
    destination: `/s/${slug}`,
  },
  {
    source: `/${slug}/`,
    destination: `/s/${slug}`,
  },
]);

const blogRewrites = [];

const templateRewrites = [];

    return [
      ...serviceRewrites,
      ...blogRewrites,
      {
        source: '/:path*.html',
        destination: '/legacy/:path*',
      },
    ];
  },
  async redirects() {
    const redirects = [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/about.html', destination: '/about', permanent: true },
      { source: '/contact.html', destination: '/contact', permanent: true },
      { source: '/packages.html', destination: '/packages', permanent: true },
      { source: '/portfolio.html', destination: '/portfolio', permanent: true },
      { source: '/privacypolicy.html', destination: '/privacy-policy', permanent: true },
      { source: '/termsofuse.html', destination: '/terms-of-use', permanent: true },
      { source: '/refundpolicy.html', destination: '/refund-policy', permanent: true },
      { source: '/blog/index.html', destination: '/blog', permanent: true },
      { source: '/blog/author/:slug/index.html', destination: '/blog/author/:slug', permanent: true },
      { source: '/service-page-template.html', destination: '/resources/service-page-template', permanent: true },
      { source: '/blog-template.html', destination: '/resources/blog-template', permanent: true },
      ...serviceSlugs.map((slug) => ({
        source: `/${slug}.html`,
        destination: `/${slug}`,
        permanent: true,
      })),
      ...blogSlugs.map((slug) => ({
        source: `/${slug}.html`,
        destination: `/blog/${slug}`,
        permanent: true,
      })),
      ...blogSlugs.map((slug) => ({
        source: `/blog/${slug}.html`,
        destination: `/blog/${slug}`,
        permanent: true,
      })),
    ];

    return redirects;
  },
};

module.exports = nextConfig;
