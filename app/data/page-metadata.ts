import type { Metadata } from 'next';

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title, description, alternates: { canonical: path },
    openGraph: { title: `${title} | Moses Onerhime`, description, url: path, type: 'website', images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: `${title} by Moses Onerhime` }] },
    twitter: { card: 'summary_large_image', title: `${title} | Moses Onerhime`, description, images: ['/opengraph-image'] },
  };
}
