import type { Metadata } from 'next';
import { LinkHubSection } from '../components/link-hub-section';
import { SiteFooter } from '../components/site-footer';
import { SiteHeader } from '../components/site-header';

export const metadata: Metadata = {
  title: 'Links',
  description: 'Moses Onerhime\'s projects, games, motion work, professional profiles, social pages, and contact links in one place.',
  alternates: { canonical: '/links' },
  openGraph: {
    title: 'Moses Onerhime | Projects, profiles, and contact links',
    description: 'Explore Moses Onerhime\'s portfolio, products, Roblox games, motion work, professional profiles, and contact links.',
    url: '/links',
    siteName: 'Moses Onerhime Portfolio',
    locale: 'en_NG',
    type: 'profile',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Moses Onerhime portfolio links' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moses Onerhime | Links',
    description: 'Projects, games, motion work, professional profiles, and contact links.',
    images: ['/opengraph-image'],
  },
};

export default function LinksPage() {
  return (
    <div className="site-shell">
      <a href="#main" className="skip-link">Skip to main content</a>
      <SiteHeader />
      <main id="main">
        <LinkHubSection />
      </main>
      <SiteFooter />
    </div>
  );
}
