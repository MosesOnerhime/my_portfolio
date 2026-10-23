import type { MetadataRoute } from 'next';
import { projects } from './data/projects';
import { siteConfig } from './data/site';
import { collectionHref, workCollections } from './data/collections';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.url, changeFrequency: 'monthly', priority: 1 },
    { url: `${siteConfig.url}/work`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteConfig.url}/services`, changeFrequency: 'monthly', priority: 0.8 },
    ...workCollections.filter((item) => item.slug !== 'motion').map((item) => ({ url: `${siteConfig.url}${collectionHref(item)}`, changeFrequency: 'monthly' as const, priority: 0.8 })),
    { url: `${siteConfig.url}/motion`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteConfig.url}/links`, changeFrequency: 'monthly', priority: 0.8 },
    ...projects.map((project) => ({
      url: `${siteConfig.url}/work/${project.slug}`,
      changeFrequency: 'monthly' as const,
      priority: project.featured ? 0.8 : 0.7,
    })),
  ];
}
