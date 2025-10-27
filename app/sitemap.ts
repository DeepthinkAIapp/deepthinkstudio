import type { MetadataRoute } from 'next';
import blogPages from './lib/blog-pages.json';

const siteUrl = 'https://deepthinkstudio.com';

const staticPaths = [
  '/',
  '/about',
  '/services',
  '/portfolio',
  '/packages',
  '/contact',
  '/blog',
  '/privacy-policy',
  '/terms-of-use',
  '/refund-policy',
  '/city-pages',
  '/resources/blog-template',
  '/resources/service-page-template',
];

const blogAuthorSlugs = ['jeremy-lafaver'];

const createUrl = (path: string) => {
  if (path === '/' || path === '') {
    return `${siteUrl}/`;
  }
  return `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: createUrl(path),
    lastModified,
  }));

  blogPages.forEach((entry) => {
    routes.push({
      url: createUrl(`/blog/${entry.slug}`),
      lastModified,
    });
  });

  blogAuthorSlugs.forEach((slug) => {
    routes.push({
      url: createUrl(`/blog/author/${slug}`),
      lastModified,
    });
  });

  return routes;
}
