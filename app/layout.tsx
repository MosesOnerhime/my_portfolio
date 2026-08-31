import type { Metadata, Viewport } from 'next';
import { siteConfig } from './data/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: 'Moses Onerhime | Developer, AI Engineer, and Creative Director', template: '%s | Moses Onerhime' },
  description: siteConfig.description,
  keywords: ['Moses Onerhime', 'full-stack developer', 'game developer', 'creative director', 'React developer', 'Next.js developer', 'Nigeria'],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Moses Onerhime | Developer, AI Engineer, and Creative Director',
    description: 'Explore software, websites, games, AI and data work, and video editing by Moses Onerhime.',
    url: '/',
    siteName: 'Moses Onerhime Portfolio',
    locale: 'en_NG',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Moses Onerhime developer portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moses Onerhime | Developer, AI Engineer, and Creative Director',
    description: 'Selected software, web, game, AI, data, and creative work.',
    images: ['/opengraph-image'],
  },
  icons: {
    icon: [
      { url: '/favicon/favicon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon/favicon-192.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', type: 'image/png', sizes: '180x180' }],
  },
};

export const viewport: Viewport = { themeColor: '#f5f4f0', colorScheme: 'light' };

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    url: siteConfig.url,
    sameAs: [
      siteConfig.socials.github,
      siteConfig.socials.linkedin,
      siteConfig.socials.tiktok,
      siteConfig.socials.instagram,
      siteConfig.socials.youtube,
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Moses Onerhime Portfolio',
    alternateName: siteConfig.brand,
    url: siteConfig.url,
  },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
      </body>
    </html>
  );
}
