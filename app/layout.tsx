import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://moses-onerhime-portfolio.vercel.app'),
  title: { default: 'Moses Onerhime | Developer and Creative Director', template: '%s | Moses Onerhime' },
  description: 'Portfolio of Moses Onerhime, a full-stack developer, game developer, and creative director building digital products, interactive experiences, and visual stories.',
  keywords: ['Moses Onerhime', 'full-stack developer', 'game developer', 'creative director', 'React developer', 'Next.js developer', 'Nigeria'],
  authors: [{ name: 'Moses Onerhime' }],
  openGraph: {
    title: 'Moses Onerhime | Developer and Creative Director',
    description: 'Explore selected web, game, product, and creative work by Moses Onerhime.',
    url: '/',
    siteName: 'Moses Onerhime Portfolio',
    locale: 'en_NG',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Moses Onerhime | Developer and Creative Director', description: 'Selected web, game, product, and creative work.' },
  icons: {
    icon: [{ url: '/furreal productions/logo_04.jpeg', type: 'image/jpeg' }],
    apple: [{ url: '/furreal productions/logo_04.jpeg', type: 'image/jpeg' }],
  },
};

export const viewport: Viewport = { themeColor: '#f3f0e9', colorScheme: 'light' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
