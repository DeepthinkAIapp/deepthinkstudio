/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
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
    ];
  },
};

module.exports = nextConfig;
