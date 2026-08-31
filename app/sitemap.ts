import type { MetadataRoute } from 'next';
import { projects } from './data/projects';
import { siteConfig } from './data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.url, changeFrequency: 'monthly', priority: 1 },
    ...projects.map((project) => ({
      url: `${siteConfig.url}/work/${project.slug}`,
      changeFrequency: 'monthly' as const,
      priority: project.featured ? 0.8 : 0.7,
    })),
  ];
}
